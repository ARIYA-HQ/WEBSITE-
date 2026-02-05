import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from '../api/db/supabase.js';

const app = express();
const port = 3001;

app.use(cors());
app.get('/api/ping', (req, res) => res.json({ status: 'ok', msg: 'pong', time: new Date().toISOString() }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// --- Routes ---

// Blog Posts
app.get('/api/posts', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const posts = await db.blogPosts.getAll(isAdmin);
        res.json(posts);
    } catch (err: any) {
        console.error('Fetch posts error:', err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = await db.blogPosts.getById(id);
        if (post) res.json(post);
        else res.status(404).json({ error: 'Not found' });
    } catch (err: any) {
        console.error('Fetch post error:', err);
        res.status(500).json({ error: 'Failed to fetch post' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const post = await db.blogPosts.create(req.body);
        res.status(201).json(post);
    } catch (err: any) {
        console.error('Create post error:', err);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

app.put('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const post = await db.blogPosts.update(id, req.body);
        res.json(post);
    } catch (err: any) {
        console.error('Update post error:', err);
        res.status(500).json({ error: 'Failed to update post' });
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await db.blogPosts.delete(id);
        res.json({ success: true });
    } catch (err: any) {
        console.error('Delete post error:', err);
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

// Case Studies
app.get('/api/case-studies', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const items = await db.caseStudies.getAll(isAdmin);
        res.json(items);
    } catch (err: any) {
        console.error('Fetch case studies error:', err);
        res.status(500).json({ error: 'Failed to fetch case studies' });
    }
});

app.get('/api/case-studies/:id', async (req, res) => {
    try {
        const item = await db.caseStudies.getById(req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ error: 'Not found' });
    } catch (err: any) {
        console.error('Fetch case study error:', err);
        res.status(500).json({ error: 'Failed to fetch case study' });
    }
});

app.post('/api/case-studies', async (req, res) => {
    try {
        const item = await db.caseStudies.create(req.body);
        res.status(201).json(item);
    } catch (err: any) {
        console.error('Create case study error:', err);
        res.status(500).json({ error: 'Failed to create case study' });
    }
});

app.put('/api/case-studies/:id', async (req, res) => {
    try {
        const item = await db.caseStudies.update(req.params.id, req.body);
        res.json(item);
    } catch (err: any) {
        console.error('Update case study error:', err);
        res.status(500).json({ error: 'Failed to update case study' });
    }
});

app.delete('/api/case-studies/:id', async (req, res) => {
    try {
        await db.caseStudies.delete(req.params.id);
        res.json({ success: true });
    } catch (err: any) {
        console.error('Delete case study error:', err);
        res.status(500).json({ error: 'Failed to delete case study' });
    }
});

// Resources
app.get('/api/resources', async (req, res) => {
    try {
        const isAdmin = req.query.admin === 'true';
        const items = await db.resources.getAll(isAdmin);
        res.json(items);
    } catch (err: any) {
        console.error('Fetch resources error:', err);
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});

app.get('/api/resources/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const item = await db.resources.getById(id);
        if (item) res.json(item);
        else res.status(404).json({ error: 'Not found' });
    } catch (err: any) {
        console.error('Fetch resource error:', err);
        res.status(500).json({ error: 'Failed to fetch resource' });
    }
});

app.post('/api/resources', async (req, res) => {
    try {
        const item = await db.resources.create(req.body);
        res.status(201).json(item);
    } catch (err: any) {
        console.error('Create resource error:', err);
        res.status(500).json({ error: 'Failed to create resource' });
    }
});

app.put('/api/resources/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const item = await db.resources.update(id, req.body);
        res.json(item);
    } catch (err: any) {
        console.error('Update resource error:', err);
        res.status(500).json({ error: 'Failed to update resource' });
    }
});

app.delete('/api/resources/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await db.resources.delete(id);
        res.json({ success: true });
    } catch (err: any) {
        console.error('Delete resource error:', err);
        res.status(500).json({ error: 'Failed to delete resource' });
    }
});

// Waitlist
app.get('/api/waitlist', async (req, res) => {
    try {
        const items = await db.waitlist.getAll();
        res.json(items);
    } catch (err: any) {
        console.error('Fetch waitlist error:', err);
        res.status(500).json({ error: 'Failed to fetch waitlist' });
    }
});

app.post('/api/waitlist', async (req, res) => {
    try {
        const { email, role, company } = req.body;
        if (!email || !role) return res.status(400).json({ error: 'Email and role required' });

        const existing = await db.waitlist.getByEmail(email);
        if (existing) return res.status(409).json({ error: 'Already exists' });

        const entry = await db.waitlist.create({ email, role, company: company || null });
        res.status(201).json(entry);
    } catch (err: any) {
        console.error('Waitlist join error:', err);
        res.status(500).json({ error: 'Failed to join waitlist' });
    }
});

app.delete('/api/waitlist/:id', async (req, res) => {
    try {
        await db.waitlist.delete(req.params.id);
        res.json({ success: true });
    } catch (err: any) {
        console.error('Delete waitlist error:', err);
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

app.get('/api/health', async (req, res) => {
    try {
        res.json({
            status: 'ok',
            isVercel: !!process.env.VERCEL,
            supabase: true
        });
    } catch (error: any) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

export default app;

