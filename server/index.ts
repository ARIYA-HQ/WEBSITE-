import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import db from './db';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// --- Routes ---

// Get All Blog Posts (Public: Published only, Admin: All via query param)
app.get('/api/posts', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';

        let posts = [...data.blogPosts];

        if (!isAdmin) {
            posts = posts.filter(p => p.status === 'published');
        }

        // Sort by ID desc
        posts.sort((a, b) => b.id - a.id);
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Get Single Blog Post
app.get('/api/posts/:id', (req, res) => {
    try {
        const data = db.get();
        const id = parseInt(req.params.id);
        const post = data.blogPosts.find(p => p.id === id);

        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch post' });
    }
});

// Create Blog Post
app.post('/api/posts', (req, res) => {
    try {
        const { title, excerpt, category, author, readTime, image, content, tags, status } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and Content are required' });
        }

        const data = db.get();
        const newId = data.blogPosts.length > 0 ? Math.max(...data.blogPosts.map(p => p.id)) + 1 : 1;
        const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        const newPost = {
            id: newId,
            title,
            excerpt: excerpt || '',
            category: category || 'General',
            author: author || 'Admin',
            date,
            readTime: readTime || '5 min read',
            image: image || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069',
            content,
            tags: tags || [],
            status: status || 'published'
        };

        data.blogPosts.push(newPost);
        db.save(data);

        res.status(201).json({ id: newId, message: 'Post created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

// Update Blog Post
app.put('/api/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updates = req.body;
        const data = db.get();
        const index = data.blogPosts.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Merge updates
        data.blogPosts[index] = { ...data.blogPosts[index], ...updates };
        db.save(data);

        res.json({ message: 'Post updated successfully', post: data.blogPosts[index] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update post' });
    }
});

// Delete Blog Post
app.delete('/api/posts/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = db.get();
        const initialLength = data.blogPosts.length;

        data.blogPosts = data.blogPosts.filter(p => p.id !== id);

        if (data.blogPosts.length === initialLength) {
            return res.status(404).json({ error: 'Post not found' });
        }

        db.save(data);
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete post' });
    }
});


// --- Case Study Routes ---

app.get('/api/case-studies', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';
        let items = [...(data.caseStudies || [])];
        if (!isAdmin) items = items.filter(i => i.status === 'published');
        res.json(items);
    } catch (err) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.get('/api/case-studies/:id', (req, res) => {
    try {
        const data = db.get();
        const item = (data.caseStudies || []).find(i => i.id === req.params.id);
        if (item) res.json(item);
        else res.status(404).json({ error: 'Not found' });
    } catch (err) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.post('/api/case-studies', (req, res) => {
    try {
        const newItem = req.body;
        if (!newItem.title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        if (!newItem.id) {
            newItem.id = newItem.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }
        newItem.status = newItem.status || 'published';

        const data = db.get();
        if (!data.caseStudies) data.caseStudies = [];

        data.caseStudies.push(newItem);
        db.save(data);
        res.status(201).json({ id: newItem.id });
    } catch (err) { res.status(500).json({ error: 'Failed to create' }); }
});

app.put('/api/case-studies/:id', (req, res) => {
    try {
        const updates = req.body;
        const data = db.get();
        if (!data.caseStudies) data.caseStudies = [];

        const index = data.caseStudies.findIndex(i => i.id === req.params.id);
        if (index === -1) return res.status(404).json({ error: 'Not found' });

        data.caseStudies[index] = { ...data.caseStudies[index], ...updates };
        db.save(data);
        res.json({ message: 'Updated' });
    } catch (err) { res.status(500).json({ error: 'Failed to update' }); }
});

app.delete('/api/case-studies/:id', (req, res) => {
    try {
        const data = db.get();
        if (data.caseStudies) {
            data.caseStudies = data.caseStudies.filter(i => i.id !== req.params.id);
            db.save(data);
        }
        res.json({ message: 'Deleted' });
    } catch (err) { res.status(500).json({ error: 'Failed to delete' }); }
});


// --- Resource Routes ---

app.get('/api/resources', (req, res) => {
    try {
        const data = db.get();
        const isAdmin = req.query.admin === 'true';
        let items = [...(data.resources || [])];
        if (!isAdmin) items = items.filter(i => i.status === 'published');
        res.json(items);
    } catch (err) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.get('/api/resources/:id', (req, res) => {
    try {
        const data = db.get();
        const id = parseInt(req.params.id);
        const item = (data.resources || []).find(i => i.id === id);
        if (item) res.json(item);
        else res.status(404).json({ error: 'Not found' });
    } catch (err) { res.status(500).json({ error: 'Failed to fetch' }); }
});

app.post('/api/resources', (req, res) => {
    try {
        const data = db.get();
        if (!data.resources) data.resources = [];

        const newId = data.resources.length > 0 ? Math.max(...data.resources.map(p => p.id)) + 1 : 1;
        const newItem = { ...req.body, id: newId, status: req.body.status || 'published' };

        data.resources.push(newItem);
        db.save(data);
        res.status(201).json({ id: newId });
    } catch (err) { res.status(500).json({ error: 'Failed to create' }); }
});

app.put('/api/resources/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updates = req.body;
        const data = db.get();
        if (!data.resources) data.resources = [];

        const index = data.resources.findIndex(i => i.id === id);
        if (index === -1) return res.status(404).json({ error: 'Not found' });

        data.resources[index] = { ...data.resources[index], ...updates };
        db.save(data);
        res.json({ message: 'Updated' });
    } catch (err) { res.status(500).json({ error: 'Failed to update' }); }
});

app.delete('/api/resources/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = db.get();
        if (data.resources) {
            data.resources = data.resources.filter(i => i.id !== id);
            db.save(data);
        }
        res.json({ message: 'Deleted' });
    } catch (err) { res.status(500).json({ error: 'Failed to delete' }); }
});


// --- Waitlist Routes ---
app.get('/api/waitlist', (req, res) => {
    try {
        const data = db.get();
        const entries = [...(data.waitlist || [])];
        // Sort by timestamp desc
        entries.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        res.json(entries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch waitlist' });
    }
});

app.post('/api/waitlist', (req, res) => {
    try {
        const { name, email, role } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });

        const data = db.get();
        if (!data.waitlist) data.waitlist = [];

        // Check if email already exists
        if (data.waitlist.some(e => e.email === email)) {
            return res.status(409).json({ error: 'Email already on waitlist' });
        }

        const newId = data.waitlist.length > 0 ? Math.max(...data.waitlist.map(w => w.id)) + 1 : 1;
        const newEntry = {
            id: newId,
            name: name || '',
            email,
            role: role || 'individual',
            timestamp: new Date().toISOString()
        };

        data.waitlist.push(newEntry);
        db.save(data);

        res.status(201).json({ message: 'Added to waitlist', id: newId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to join waitlist' });
    }
});

app.delete('/api/waitlist/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = db.get();
        if (data.waitlist) {
            data.waitlist = data.waitlist.filter(w => w.id !== id);
            db.save(data);
        }
        res.json({ message: 'Deleted from waitlist' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete entry' });
    }
});


// --- Upload Route ---
app.post('/api/upload', (req, res) => {
    try {
        const { file, name } = req.body;
        if (!file || !name) return res.status(400).json({ error: 'File and name required' });

        // Base64 format: "data:application/pdf;base64,JVBER..."
        const base64Data = file.replace(/^data:([A-Za-z-+\/]+);base64,/, '');

        // Ensure uploads directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const timestamp = Date.now();
        const safeName = name.replace(/[^a-z0-9.]/gi, '_');
        const fileName = `${timestamp}_${safeName}`;
        const filePath = path.join(uploadDir, fileName);

        fs.writeFileSync(filePath, base64Data, 'base64');

        // Return URL accessible via Vite (public dir is served at root)
        const publicUrl = `/uploads/${fileName}`;
        res.status(201).json({ url: publicUrl });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Upload failed' });
    }
});

// Start Server (only locally)
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

export default app;
