import express from 'express';
import path from 'path';
import app from '../api/app.js';
import { checkWaitlistRoleConstraint } from '../api/db/supabase.js';

const port = parseInt(process.env.PORT || '3001');

// Serve the built frontend in production.
// Use process.cwd() (always the project root) instead of __dirname,
// which can resolve incorrectly with tsx + ESM.
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, {
        index: false,
        setHeaders: (res, filePath) => {
            // Hashed build assets never change; everything else must revalidate.
            if (filePath.includes(`${path.sep}assets${path.sep}`)) {
                res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
            }
        },
    }));
    app.get('*', (req, res) => {
        // Only fall back to index.html for non-file requests
        if (req.path.includes('.')) res.status(404).send('Not found');
        else res.sendFile(path.join(distPath, 'index.html'));
    });
}

if (!process.env.VERCEL) {
    app.listen(port, () => console.log(`Server running on port ${port} (${process.env.NODE_ENV || 'development'})`));
    if (process.env.DATABASE_URL) void checkWaitlistRoleConstraint();
}

export default app;
