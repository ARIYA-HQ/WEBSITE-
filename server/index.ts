import express from 'express';
import { readFile } from 'node:fs/promises';
import path from 'path';
import app from '../api/app.js';
import { checkWaitlistRoleConstraint, db } from '../api/db/supabase.js';
import type { BlogPost } from '../api/db/supabase.js';
import { SITE_URL } from '../src/seo/routes.js';
import { prerenderPageHtml } from '../src/seo/prerender.js';

const port = parseInt(process.env.PORT || '3001');

function isPublishedBlogPost(value: unknown): value is BlogPost {
    if (!value || typeof value !== 'object') return false;
    return (
        'title' in value &&
        typeof value.title === 'string' &&
        'content' in value &&
        typeof value.content === 'string' &&
        'status' in value &&
        value.status === 'published' &&
        (!('slug' in value) || typeof value.slug === 'string' || value.slug === null)
    );
}

// Serve the built frontend in production.
// Use process.cwd() (always the project root) instead of __dirname,
// which can resolve incorrectly with tsx + ESM.
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(process.cwd(), 'dist');
    const templatePath = path.join(distPath, 'index.html');
    app.use((req, res, next) => {
        const path = req.path.replace(/\/+$/, '') || '/';
        if (
            path === '/admin' ||
            path.startsWith('/admin/') ||
            path === '/login' ||
            path === '/waitlist' ||
            path === '/legal/cookies'
        ) {
            res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        }
        next();
    });
    app.get('/resources/blog/:slug', async (req, res) => {
        try {
            const rows: unknown = await db.blogPosts.getAll();
            if (!Array.isArray(rows)) {
                throw new Error('Published blog query returned an invalid result');
            }

            const post = rows.find((row): row is BlogPost =>
                isPublishedBlogPost(row) &&
                (row.slug?.trim() || String(row.id)) === req.params.slug,
            );
            const template = await readFile(templatePath, 'utf8');

            if (!post) {
                res.status(404).type('html').send(
                    prerenderPageHtml(template, req.path, {
                        title: 'Article Not Found',
                        description: 'The requested Ariya Journal article could not be found.',
                        robots: 'noindex, nofollow',
                        canonical: false,
                    }),
                );
                return;
            }

            const description = post.excerpt?.trim() ||
                post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
            const canonical = `${SITE_URL}/resources/blog/${encodeURIComponent(post.slug?.trim() || String(post.id))}`;
            const html = prerenderPageHtml(template, req.path, {
                title: post.title,
                description,
                image: post.image,
                article: true,
                structuredData: {
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: post.title,
                    description,
                    image: post.image ? [new URL(post.image, SITE_URL).toString()] : undefined,
                    datePublished: post.date && !Number.isNaN(Date.parse(post.date))
                        ? new Date(post.date).toISOString()
                        : undefined,
                    author: post.author
                        ? { '@type': 'Person', name: post.author }
                        : undefined,
                    publisher: {
                        '@type': 'Organization',
                        name: 'AriyaHQ',
                        url: SITE_URL,
                    },
                    mainEntityOfPage: canonical,
                },
            });
            res.setHeader('Cache-Control', 'public, max-age=300');
            res.type('html').send(html);
        } catch (error) {
            console.error('Blog article SEO rendering failed:', error);
            res.status(500).type('text/plain').send('Unable to render article');
        }
    });
    app.use(express.static(distPath, {
        index: 'index.html',
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
        else {
            const route = req.path.replace(/\/+$/, '') || '/';
            const clientOnlyRoute =
                route === '/login' ||
                route === '/waitlist' ||
                route === '/legal/cookies' ||
                route === '/admin' ||
                route.startsWith('/admin/') ||
                route === '/resources/case-studies' ||
                route.startsWith('/resources/case-studies/');

            if (clientOnlyRoute) {
                res.sendFile(templatePath);
                return;
            }

            void readFile(templatePath, 'utf8').then((template) => {
                res.setHeader('X-Robots-Tag', 'noindex, nofollow');
                res.status(404).type('html').send(
                    prerenderPageHtml(template, route, {
                        title: 'Page Not Found',
                        description: 'The requested AriyaHQ page could not be found.',
                        robots: 'noindex, nofollow',
                        canonical: false,
                    }),
                );
            }).catch((error: unknown) => {
                console.error('Not-found page rendering failed:', error);
                res.status(500).type('text/plain').send('Unable to render page');
            });
        }
    });
}

if (!process.env.VERCEL) {
    app.listen(port, () => console.log(`Server running on port ${port} (${process.env.NODE_ENV || 'development'})`));
    if (process.env.DATABASE_URL) void checkWaitlistRoleConstraint();
}

export default app;
