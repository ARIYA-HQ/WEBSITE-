import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { db, WAITLIST_ROLES, WaitlistRole } from './db/supabase.js';
import { loopsService } from './loopsService.js';

// Shared Express app for the marketing site's API. server/index.ts adds static
// file serving + listen for the VPS; api/index.ts re-exports it for Vercel.

const app = express();
app.set('trust proxy', 'loopback, linklocal, uniquelocal');
app.use(cors());
app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Public endpoints only ever receive small payloads. Admin writes get a larger
// limit, but only after the token has been verified.
const publicJson = express.json({ limit: '20kb' });
const adminJson = express.json({ limit: '2mb' });
const uploadJson = express.json({ limit: '15mb' });

// --- Auth ---

const JWT_SECRET = resolveJwtSecret();
const TOKEN_TTL = '24h';

function resolveJwtSecret(): string | null {
    const secret = process.env.ADMIN_JWT_SECRET;
    if (secret && secret.length >= 32) return secret;
    if (process.env.NODE_ENV === 'production') {
        // Keep the public site up, but refuse all admin access until configured.
        console.error('ADMIN_JWT_SECRET is missing or shorter than 32 characters — admin access is disabled.');
        return null;
    }
    console.warn('ADMIN_JWT_SECRET not set — using a random per-process secret (dev only).');
    return crypto.randomBytes(32).toString('hex');
}

function safeEqual(a: string, b: string) {
    const ha = crypto.createHash('sha256').update(a).digest();
    const hb = crypto.createHash('sha256').update(b).digest();
    return crypto.timingSafeEqual(ha, hb);
}

function getAdmin(req: Request): { email: string; role: string } | null {
    if (!JWT_SECRET) return null;
    const auth = req.headers.authorization;
    if (!auth?.startsWith('Bearer ')) return null;
    try {
        const payload = jwt.verify(auth.slice(7), JWT_SECRET) as { email: string; role: string };
        return payload.role === 'admin' ? payload : null;
    } catch {
        return null;
    }
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
    if (!JWT_SECRET) return res.status(503).json({ error: 'Admin access is not configured' });
    if (!getAdmin(req)) return res.status(401).json({ error: 'Unauthorized' });
    next();
}

// `?admin=true` exposes drafts, so it needs a valid admin token.
function wantsAdminView(req: Request, res: Response): boolean | null {
    if (req.query.admin !== 'true') return false;
    if (getAdmin(req)) return true;
    res.status(401).json({ error: 'Unauthorized' });
    return null;
}

// --- Rate limiting (in-memory, per client IP) ---

function clientIp(req: Request) {
    return (req.headers['cf-connecting-ip'] as string) || req.ip || 'unknown';
}

function rateLimit(max: number, windowMs: number) {
    const hits = new Map<string, { count: number; reset: number }>();
    return (req: Request, res: Response, next: NextFunction) => {
        const now = Date.now();
        const key = clientIp(req);
        const entry = hits.get(key);
        if (!entry || entry.reset < now) {
            hits.set(key, { count: 1, reset: now + windowMs });
            if (hits.size > 10_000) {
                for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
            }
            return next();
        }
        if (++entry.count > max) {
            res.setHeader('Retry-After', Math.ceil((entry.reset - now) / 1000));
            return res.status(429).json({ error: 'Too many requests. Please try again later.' });
        }
        next();
    };
}

// --- Helpers ---

function parseId(raw: unknown) {
    const id = Number(raw);
    return Number.isInteger(id) && id > 0 ? id : null;
}

// The admin editors use camelCase field names; the DB uses snake_case.
function normalizeBody(body: Record<string, any>) {
    const out: Record<string, any> = { ...body };
    delete out.id;
    delete out.created_at;
    delete out.updated_at;
    const aliases: Record<string, string> = {
        readTime: 'read_time',
        desc: 'description',
        downloadUrl: 'download_url',
    };
    for (const [from, to] of Object.entries(aliases)) {
        if (from in out) {
            // The editor's camelCase field is the one the admin actually edited.
            if (out[from] !== undefined) out[to] = out[from];
            delete out[from];
        }
    }
    if (out.status === 'archived') out.status = 'draft';
    return out;
}

const isPublished = (item: { status?: string } | null) => item?.status === 'published';

function fail(res: Response, what: string, err: unknown) {
    console.error(`${what} error:`, err);
    res.status(500).json({ error: `Failed to ${what}` });
}

// --- Health / auth routes ---

app.get('/api/ping', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.post('/api/admin/login', rateLimit(10, 15 * 60_000), publicJson, (req, res) => {
    const { email, password } = req.body ?? {};
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminEmail || !adminPassword || !JWT_SECRET) {
        return res.status(503).json({ error: 'Admin access is not configured' });
    }
    if (typeof email !== 'string' || typeof password !== 'string'
        || !safeEqual(email.trim().toLowerCase(), adminEmail.toLowerCase())
        || !safeEqual(password, adminPassword)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const user = { email: adminEmail, role: 'admin' };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: TOKEN_TTL });
    res.json({ token, user });
});

app.post('/api/admin/logout', (_req, res) => res.json({ success: true }));

app.get('/api/admin/me', (req, res) => {
    const user = getAdmin(req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    res.json({ user: { email: user.email, role: user.role } });
});

// --- Blog posts ---

app.get('/api/posts', async (req, res) => {
    const admin = wantsAdminView(req, res);
    if (admin === null) return;
    try {
        res.json(await db.blogPosts.getAll(admin));
    } catch (err) { fail(res, 'fetch posts', err); }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const id = parseId(req.params.id);
        const post = id ? await db.blogPosts.getById(id) : await db.blogPosts.getBySlug(String(req.params.id));
        if (!post || (!isPublished(post) && !getAdmin(req))) return res.status(404).json({ error: 'Not found' });
        res.json(post);
    } catch (err) { fail(res, 'fetch post', err); }
});

app.post('/api/posts', requireAdmin, adminJson, async (req, res) => {
    try {
        const body = normalizeBody(req.body);
        if (!body.title) return res.status(400).json({ error: 'Title is required' });
        body.slug = await db.uniqueSlug('blog_posts', body.slug || body.title);
        res.status(201).json(await db.blogPosts.create(body as any));
    } catch (err) { fail(res, 'create post', err); }
});

app.put('/api/posts/:id', requireAdmin, adminJson, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        const post = await db.blogPosts.update(id, normalizeBody(req.body));
        if (!post) return res.status(404).json({ error: 'Not found' });
        res.json(post);
    } catch (err) { fail(res, 'update post', err); }
});

app.delete('/api/posts/:id', requireAdmin, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        await db.blogPosts.delete(id);
        res.json({ success: true });
    } catch (err) { fail(res, 'delete post', err); }
});

// --- Case studies ---

app.get('/api/case-studies', async (req, res) => {
    const admin = wantsAdminView(req, res);
    if (admin === null) return;
    try {
        res.json(await db.caseStudies.getAll(admin));
    } catch (err) { fail(res, 'fetch case studies', err); }
});

app.get('/api/case-studies/:id', async (req, res) => {
    try {
        const id = parseId(req.params.id);
        const item = id ? await db.caseStudies.getById(id) : await db.caseStudies.getBySlug(String(req.params.id));
        if (!item || (!isPublished(item) && !getAdmin(req))) return res.status(404).json({ error: 'Not found' });
        res.json(item);
    } catch (err) { fail(res, 'fetch case study', err); }
});

app.post('/api/case-studies', requireAdmin, adminJson, async (req, res) => {
    try {
        // The editor's "Slug" field is bound to `id`.
        const requestedSlug = typeof req.body?.id === 'string' && !parseId(req.body.id) ? req.body.id : '';
        const body = normalizeBody(req.body);
        if (!body.title) return res.status(400).json({ error: 'Title is required' });
        body.slug = await db.uniqueSlug('case_studies', body.slug || requestedSlug || body.title);
        res.status(201).json(await db.caseStudies.create(body as any));
    } catch (err) { fail(res, 'create case study', err); }
});

app.put('/api/case-studies/:id', requireAdmin, adminJson, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        const item = await db.caseStudies.update(id, normalizeBody(req.body));
        if (!item) return res.status(404).json({ error: 'Not found' });
        res.json(item);
    } catch (err) { fail(res, 'update case study', err); }
});

app.delete('/api/case-studies/:id', requireAdmin, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        await db.caseStudies.delete(id);
        res.json({ success: true });
    } catch (err) { fail(res, 'delete case study', err); }
});

// --- Resources ---

app.get('/api/resources', async (req, res) => {
    const admin = wantsAdminView(req, res);
    if (admin === null) return;
    try {
        res.json(await db.resources.getAll(admin));
    } catch (err) { fail(res, 'fetch resources', err); }
});

app.get('/api/resources/:id', async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        const item = await db.resources.getById(id);
        if (!item || (!isPublished(item) && !getAdmin(req))) return res.status(404).json({ error: 'Not found' });
        res.json(item);
    } catch (err) { fail(res, 'fetch resource', err); }
});

app.post('/api/resources', requireAdmin, adminJson, async (req, res) => {
    try {
        const body = normalizeBody(req.body);
        if (!body.title) return res.status(400).json({ error: 'Title is required' });
        body.slug = await db.uniqueSlug('resources', body.slug || body.title);
        res.status(201).json(await db.resources.create(body as any));
    } catch (err) { fail(res, 'create resource', err); }
});

app.put('/api/resources/:id', requireAdmin, adminJson, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        const item = await db.resources.update(id, normalizeBody(req.body));
        if (!item) return res.status(404).json({ error: 'Not found' });
        res.json(item);
    } catch (err) { fail(res, 'update resource', err); }
});

app.delete('/api/resources/:id', requireAdmin, async (req, res) => {
    const id = parseId(req.params.id);
    if (!id) return res.status(404).json({ error: 'Not found' });
    try {
        await db.resources.delete(id);
        res.json({ success: true });
    } catch (err) { fail(res, 'delete resource', err); }
});

// --- Uploads (admin) ---
// Files are written to UPLOAD_DIR, which must be a persistent volume in Docker.

export const UPLOAD_DIR = path.resolve(process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads'));
const UPLOAD_TYPES: Record<string, string> = {
    'application/pdf': 'pdf',
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'application/zip': 'zip',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
};

app.post('/api/upload', requireAdmin, uploadJson, async (req, res) => {
    try {
        const { file, name } = req.body ?? {};
        const match = typeof file === 'string' ? /^data:([\w.+/-]+);base64,(.+)$/.exec(file) : null;
        if (!match) return res.status(400).json({ error: 'Expected a base64 data URL' });
        const ext = UPLOAD_TYPES[match[1]];
        if (!ext) return res.status(415).json({ error: `File type ${match[1]} is not allowed` });

        const base = String(name || 'file').replace(/\.[^.]*$/, '').replace(/[^a-zA-Z0-9_-]+/g, '_').slice(0, 60) || 'file';
        const filename = `${Date.now()}_${crypto.randomBytes(4).toString('hex')}_${base}.${ext}`;
        await fs.promises.mkdir(UPLOAD_DIR, { recursive: true });
        await fs.promises.writeFile(path.join(UPLOAD_DIR, filename), Buffer.from(match[2], 'base64'));
        res.status(201).json({ url: `/uploads/${filename}` });
    } catch (err) { fail(res, 'upload file', err); }
});

app.use('/uploads',
    express.static(UPLOAD_DIR, { index: false, dotfiles: 'deny' }),
    (_req: Request, res: Response) => res.status(404).send('Not found'));

// --- Waitlist ---

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const cleanText = (v: unknown, max: number) =>
    typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : null;

app.get('/api/waitlist', requireAdmin, async (_req, res) => {
    try {
        res.json(await db.waitlist.getAll());
    } catch (err) { fail(res, 'fetch waitlist', err); }
});

app.post('/api/waitlist', rateLimit(5, 10 * 60_000), publicJson, async (req, res) => {
    const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const role = req.body?.role as WaitlistRole;
    if (!EMAIL_RE.test(email) || email.length > 254) return res.status(400).json({ error: 'Please enter a valid email address' });
    if (!WAITLIST_ROLES.includes(role)) return res.status(400).json({ error: 'Please choose a valid role' });

    const name = cleanText(req.body.name, 120);
    const company = cleanText(req.body.company, 120);

    try {
        if (await db.waitlist.getByEmail(email)) return res.status(409).json({ error: 'This email is already registered' });
        const entry = await db.waitlist.create({ email, role, name: name ?? undefined, company: company ?? undefined });

        // Email automation must never block or fail the signup.
        loopsService.createContact(email, { name: name ?? undefined, role, company: company ?? undefined, source: 'Ariya Website' })
            .then(() => loopsService.sendEvent(email, role === 'subscriber' ? 'newsletter_signup' : 'waitlist_signup'))
            .catch(err => console.error('Failed to sync to Loops:', err));

        res.status(201).json({ success: true, id: entry.id });
    } catch (err: any) {
        if (err?.code === '23505') return res.status(409).json({ error: 'This email is already registered' });
        if (err?.code === '23514') {
            console.error(`Waitlist role "${role}" rejected by the DB check constraint — run api/db/migration_roles.sql.`);
        }
        fail(res, 'join waitlist', err);
    }
});

app.delete('/api/waitlist/:id', requireAdmin, async (req, res) => {
    try {
        await db.waitlist.delete(String(req.params.id));
        res.json({ success: true });
    } catch (err) { fail(res, 'delete waitlist entry', err); }
});

// --- Analytics (admin) ---

app.get('/api/analytics/overview', requireAdmin, async (_req, res) => {
    try {
        const [posts, studies, resources, waitlist] = await Promise.all([
            db.blogPosts.getAll(true),
            db.caseStudies.getAll(true),
            db.resources.getAll(true),
            db.waitlist.getAll(),
        ]);
        res.json({
            blogPosts: posts.length,
            publishedPosts: posts.filter(p => p.status === 'published').length,
            caseStudies: studies.length,
            resources: resources.length,
            waitlist: waitlist.length,
        });
    } catch (err) { fail(res, 'fetch analytics', err); }
});

app.get('/api/analytics/waitlist-growth', requireAdmin, async (_req, res) => {
    try {
        const waitlist = await db.waitlist.getAll();
        const growth = new Map<string, number>();
        for (const entry of waitlist) {
            const day = new Date(entry.created_at || Date.now()).toISOString().slice(0, 10);
            growth.set(day, (growth.get(day) || 0) + 1);
        }
        const chartData = [...growth.entries()]
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([day, count]) => ({
                date: new Date(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }),
                count,
            }));
        res.json(chartData);
    } catch (err) { fail(res, 'fetch growth data', err); }
});

// --- Sitemap ---

const SITE_URL = process.env.SITE_URL || 'https://ariyahq.com';
const STATIC_PATHS = [
    '/', '/pricing', '/about', '/contact', '/careers', '/waitlist',
    '/product/overview', '/product/planning', '/product/ai-planning', '/product/marketplace',
    '/product/finance', '/product/websites',
    '/solutions/individuals', '/solutions/planners', '/solutions/agencies',
    '/solutions/vendors', '/solutions/enterprise',
    '/resources/blog', '/resources/guides', '/resources/faq', '/resources/help-center',
    '/legal/privacy', '/legal/terms', '/legal/cookies',
];

app.get('/sitemap.xml', async (_req, res) => {
    const urls = STATIC_PATHS.map(p => ({ loc: SITE_URL + p, lastmod: undefined as string | undefined }));
    try {
        for (const post of await db.blogPosts.getAll(false)) {
            const updated = post.updated_at || post.created_at;
            urls.push({
                loc: `${SITE_URL}/resources/blog/${post.id}`,
                lastmod: updated ? new Date(updated).toISOString().slice(0, 10) : undefined,
            });
        }
    } catch (err) {
        console.error('Sitemap: failed to load blog posts:', err);
    }
    const body = urls.map(u =>
        `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`
    ).join('\n');
    res.type('application/xml').setHeader('Cache-Control', 'public, max-age=3600');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

export default app;
