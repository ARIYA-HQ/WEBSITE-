import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from './db/supabase.js';
import { loopsService } from './loopsService.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Debug middleware to see what path reaches Express
app.use((req, res, next) => {
    res.setHeader('x-debug-path', req.path);
    res.setHeader('x-debug-url', req.url);
    next();
});

app.get('/api/ping', (req, res) => res.json({ status: 'ok', source: 'hybrid', path: req.path }));
app.get('/ping', (req, res) => res.json({ status: 'ok', source: 'hybrid', path: req.path }));

// Blog Posts
async function getPosts(req: any, res: any) {
    try {
        const isAdmin = req.query.admin === 'true';
        const posts = await db.blogPosts.getAll(isAdmin);
        res.json(posts);
    } catch (error) {
        console.error('Blog posts fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}
app.get('/api/posts', getPosts);
app.get('/posts', getPosts);

async function getPostById(req: any, res: any) {
    try {
        const post = await db.blogPosts.getById(parseInt(req.params.id));
        if (post) res.json(post);
        else res.status(404).json({ error: 'Not found' });
    } catch (error) {
        console.error('Blog post fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch post' });
    }
}
app.get('/api/posts/:id', getPostById);
app.get('/posts/:id', getPostById);

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

// Case Studies
app.get(['/api/case-studies', '/case-studies'], async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const studies = await db.caseStudies.getAll(isAdmin);
        res.json(studies);
    } catch (error) {
        console.error('Case studies fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch case studies' });
    }
});

app.get('/api/case-studies/:id', async (req, res) => {
    try {
        const study = await db.caseStudies.getById(req.params.id);
        if (study) res.json(study);
        else res.status(404).json({ error: 'Not found' });
    } catch (error) {
        console.error('Case study fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch case study' });
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

// Resources
app.get('/api/resources', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const resources = await db.resources.getAll(isAdmin);
        res.json(resources);
    } catch (error) {
        console.error('Resources fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});

app.get('/api/resources/:id', async (req, res) => {
    try {
        const resource = await db.resources.getById(parseInt(req.params.id));
        if (resource) res.json(resource);
        else res.status(404).json({ error: 'Not found' });
    } catch (error) {
        console.error('Resource fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch resource' });
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

// Waitlist
app.get(['/api/waitlist', '/waitlist'], async (req, res) => {
    try {
        const waitlist = await db.waitlist.getAll();
        res.json(waitlist);
    } catch (error) {
        console.error('Waitlist fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch waitlist' });
    }
});

app.post('/api/waitlist', async (req, res) => {
    try {
        const { email, role, company } = req.body;
        if (!email || !role) return res.status(400).json({ error: 'Email and role are required' });

        const existing = await db.waitlist.getByEmail(email);
        if (existing) return res.status(409).json({ error: 'Email already registered' });

        const entry = await db.waitlist.create({
            email,
            role,
            name: req.body.name || null,
            company: company || null,
        });

        // Background: Sync to Loops for Email Automation
        // We wrap this in another try/catch so failure doesn't block the UI response
        try {
            await loopsService.createContact(email, {
                name: req.body.name || null,
                role,
                company: company || null,
                source: 'Ariya Website'
            });
            await loopsService.sendEvent(email, role === 'subscriber' ? 'newsletter_signup' : 'waitlist_signup');
        } catch (loopsErr) {
            console.error('Failed to sync to Loops:', loopsErr);
        }

        res.status(201).json(entry);
    } catch (error: any) {
        console.error('Waitlist creation error:', error);
        if (error.code === '23505') return res.status(409).json({ error: 'Email already registered' });
        res.status(500).json({ error: 'Failed to join waitlist' });
    }
});

app.delete('/api/waitlist/:id', async (req, res) => {
    try {
        await db.waitlist.delete(req.params.id);
        res.json({ success: true });
    } catch (error) {
        console.error('Waitlist delete error:', error);
        res.status(500).json({ error: 'Failed to delete entry' });
    }
});

// Analytics
app.get('/api/analytics/overview', async (req, res) => {
    try {
        const [posts, studies, resources, waitlist] = await Promise.all([
            db.blogPosts.getAll(true),
            db.caseStudies.getAll(true),
            db.resources.getAll(true),
            db.waitlist.getAll()
        ]);

        res.json({
            blogPosts: posts.length,
            publishedPosts: posts.filter(p => p.status === 'published').length,
            caseStudies: studies.length,
            resources: resources.length,
            waitlist: waitlist.length
        });
    } catch (err) {
        console.error('Analytics overview error:', err);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
});

app.get('/api/analytics/waitlist-growth', async (req, res) => {
    try {
        const waitlist = await db.waitlist.getAll();

        // Group by date
        const growth: Record<string, number> = {};
        waitlist.forEach(entry => {
            const date = new Date(entry.created_at || new Date()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            growth[date] = (growth[date] || 0) + 1;
        });

        // Convert to sorted array for chart
        const chartData = Object.entries(growth)
            .map(([date, count]) => ({ date, count }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        res.json(chartData);
    } catch (err) {
        console.error('Waitlist growth error:', err);
        res.status(500).json({ error: 'Failed to fetch growth data' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        supabase: true,
        env: process.env.NODE_ENV
    });
});

export default app;

