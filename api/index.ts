import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { db } from './db/supabase.js';
import { BlogPost, CaseStudy, Resource, WaitlistEntry, DB, SEED_DATA } from './data.js';

// --- Types & Seed Data ---
// Imported from ./data.js to share with seed script

// --- DB logic ---
const DB_FILE = path.join(process.cwd(), 'server', 'cms_data.json');

const getDb = (): DB => {
    try {
        if (fs.existsSync(DB_FILE)) {
            const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
            // Deep merge or check if keys exist
            if (data.blogPosts && data.blogPosts.length > 0) return data;
        }
    } catch (e) { console.error('DB Read Error:', e); }
    return SEED_DATA;
};

// --- App ---
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/api/ping', (req, res) => res.json({ status: 'ok', source: 'self-contained' }));


// Blog Posts endpoints
app.get('/api/posts', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const posts = await db.blogPosts.getAll(isAdmin);
        res.json(posts);
    } catch (error) {
        console.error('Blog posts fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        const isAdmin = req.query.admin === 'true';
        let posts = [...(data.blogPosts || [])];
        if (!isAdmin) posts = posts.filter(p => p.status === 'published');
        posts.sort((a, b) => b.id - a.id);
        res.json(posts);
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await db.blogPosts.getById(parseInt(req.params.id));
        res.json(post);
    } catch (error) {
        console.error('Blog post fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        const post = (data.blogPosts || []).find(p => p.id === parseInt(req.params.id));
        if (post) res.json(post); else res.status(404).json({ error: 'Not found' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const post = await db.blogPosts.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        console.error('Blog post creation error:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

app.put('/api/posts/:id', async (req, res) => {
    try {
        const post = await db.blogPosts.update(parseInt(req.params.id), req.body);
        res.json(post);
    } catch (error) {
        console.error('Blog post update error:', error);
        res.status(500).json({ error: 'Failed to update post' });
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    try {
        await db.blogPosts.delete(parseInt(req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error('Blog post delete error:', error);
        res.status(500).json({ error: 'Failed to delete post' });
    }
});


// Case Studies endpoints
app.get('/api/case-studies', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const studies = await db.caseStudies.getAll(isAdmin);
        res.json(studies);
    } catch (error) {
        console.error('Case studies fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        let items = [...(data.caseStudies || [])];
        if (req.query.admin !== 'true') items = items.filter(i => i.status === 'published');
        res.json(items);
    }
});

app.get('/api/case-studies/:id', async (req, res) => {
    try {
        const study = await db.caseStudies.getById(req.params.id);
        res.json(study);
    } catch (error) {
        console.error('Case study fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        const item = (data.caseStudies || []).find(i => i.id === req.params.id);
        if (item) res.json(item); else res.status(404).json({ error: 'Not found' });
    }
});

app.post('/api/case-studies', async (req, res) => {
    try {
        const study = await db.caseStudies.create(req.body);
        res.status(201).json(study);
    } catch (error) {
        console.error('Case study creation error:', error);
        res.status(500).json({ error: 'Failed to create case study' });
    }
});

app.put('/api/case-studies/:id', async (req, res) => {
    try {
        const study = await db.caseStudies.update(req.params.id, req.body);
        res.json(study);
    } catch (error) {
        console.error('Case study update error:', error);
        res.status(500).json({ error: 'Failed to update case study' });
    }
});

app.delete('/api/case-studies/:id', async (req, res) => {
    try {
        await db.caseStudies.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        console.error('Case study delete error:', error);
        res.status(500).json({ error: 'Failed to delete case study' });
    }
});


// Resources endpoints
app.get('/api/resources', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const resources = await db.resources.getAll(isAdmin);
        res.json(resources);
    } catch (error) {
        console.error('Resources fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        let items = [...(data.resources || [])];
        if (req.query.admin !== 'true') items = items.filter(i => i.status === 'published');
        res.json(items);
    }
});

app.get('/api/resources/:id', async (req, res) => {
    try {
        const resource = await db.resources.getById(parseInt(req.params.id));
        res.json(resource);
    } catch (error) {
        console.error('Resource fetch error:', error);
        // Fallback to JSON file
        const data = getDb();
        const item = (data.resources || []).find(i => i.id === parseInt(req.params.id));
        if (item) res.json(item); else res.status(404).json({ error: 'Not found' });
    }
});

app.post('/api/resources', async (req, res) => {
    try {
        const resource = await db.resources.create(req.body);
        res.status(201).json(resource);
    } catch (error) {
        console.error('Resource creation error:', error);
        res.status(500).json({ error: 'Failed to create resource' });
    }
});

app.put('/api/resources/:id', async (req, res) => {
    try {
        const resource = await db.resources.update(parseInt(req.params.id), req.body);
        res.json(resource);
    } catch (error) {
        console.error('Resource update error:', error);
        res.status(500).json({ error: 'Failed to update resource' });
    }
});

app.delete('/api/resources/:id', async (req, res) => {
    try {
        await db.resources.delete(parseInt(req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error('Resource delete error:', error);
        res.status(500).json({ error: 'Failed to delete resource' });
    }
});

app.get('/api/waitlist', async (req, res) => {
    try {
        const waitlist = await db.waitlist.getAll();
        res.json(waitlist);
    } catch (error) {
        console.error('Waitlist fetch error:', error);
        // Fallback to JSON file if database fails
        res.json(getDb().waitlist || []);
    }
});

app.post('/api/waitlist', async (req, res) => {
    try {
        const { email, role, company } = req.body;

        // Validation
        if (!email || !role) {
            return res.status(400).json({ error: 'Email and role are required' });
        }

        // Check if email already exists
        const existing = await db.waitlist.getByEmail(email);
        if (existing) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        // Create new waitlist entry
        const entry = await db.waitlist.create({
            email,
            role,
            company: company || null,
        });

        res.status(201).json({ success: true, data: entry });
    } catch (error: any) {
        console.error('Waitlist creation error:', error);

        // Handle unique constraint violation
        if (error.code === '23505') {
            return res.status(409).json({ error: 'Email already registered' });
        }

        res.status(500).json({ error: 'Failed to join waitlist' });
    }
});

app.delete('/api/waitlist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.waitlist.delete(id);
        res.json({ success: true });
    } catch (error) {
        console.error('Waitlist delete error:', error);
        res.status(500).json({ error: 'Failed to delete entry' });
    }
});

app.get('/api/health', (req, res) => {
    const data = getDb();
    res.json({
        status: 'ok',
        dbSize: JSON.stringify(data).length,
        isVercel: !!process.env.VERCEL,
        cwd: process.cwd(),
        fileAt: DB_FILE,
        exists: fs.existsSync(DB_FILE),
        supabase: !!process.env.DATABASE_URL
    });
});

export default app;
