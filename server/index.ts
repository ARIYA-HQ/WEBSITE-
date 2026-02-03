import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import db from './db';

const app = express();
const port = 3001;

app.use(cors());
app.get('/api/ping', (req, res) => res.json({ status: 'ok', msg: 'pong', time: new Date().toISOString() }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// --- Routes ---

app.get('/api/posts', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';
        let posts = [...(data.blogPosts || [])];
        if (!isAdmin) posts = posts.filter(p => p.status === 'published');
        posts.sort((a, b) => b.id - a.id);
        res.json(posts);
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/posts/:id', (req, res) => {
    try {
        const data = db.get();
        const id = parseInt(req.params.id);
        const post = (data.blogPosts || []).find(p => p.id === id);
        if (post) res.json(post);
        else res.status(404).json({ error: 'Not found' });
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/posts', (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ error: 'Missing' });
        const data = db.get();
        const newId = data.blogPosts.length > 0 ? Math.max(...data.blogPosts.map(p => p.id)) + 1 : 1;
        const newPost = { ...req.body, id: newId, date: new Date().toLocaleDateString(), status: req.body.status || 'published' };
        data.blogPosts.push(newPost);
        db.save(data);
        res.status(201).json({ id: newId });
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/case-studies', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';
        let items = [...(data.caseStudies || [])];
        if (!isAdmin) items = items.filter(i => i.status === 'published');
        res.json(items);
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/case-studies/:id', (req, res) => {
    try {
        const data = db.get();
        const item = (data.caseStudies || []).find(i => i.id === req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ error: 'Not found' });
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/resources', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';
        let items = [...(data.resources || [])];
        if (!isAdmin) items = items.filter(i => i.status === 'published');
        res.json(items);
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/waitlist', (req, res) => {
    try {
        const data = db.get();
        res.json(data.waitlist || []);
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.post('/api/waitlist', (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email required' });
        const data = db.get();
        if (!data.waitlist) data.waitlist = [];
        if (data.waitlist.some(e => e.email === email)) return res.status(409).json({ error: 'Exists' });
        const newId = data.waitlist.length > 0 ? Math.max(...data.waitlist.map(w => w.id)) + 1 : 1;
        data.waitlist.push({ ...req.body, id: newId, timestamp: new Date().toISOString() });
        db.save(data);
        res.status(201).json({ id: newId });
    } catch (err) { res.status(500).json({ error: 'Failed' }); }
});

app.get('/api/health', (req, res) => {
    try {
        const data = db.get();
        res.json({
            status: 'ok',
            dbSize: JSON.stringify(data).length,
            cwd: process.cwd(),
            env: process.env.NODE_ENV,
            isVercel: !!process.env.VERCEL
        });
    } catch (error: any) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
}

export default app;
