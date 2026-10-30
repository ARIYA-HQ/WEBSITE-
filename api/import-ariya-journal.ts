import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from '../src/data/ariyaJournal.json';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
dotenv.config({ path: path.resolve(dirname, '../.env.local') });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is required. Set it in .env.local or the environment before importing the Journal.');
}

const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: process.env.DATABASE_SSL_NO_VERIFY !== 'true' },
    max: 2,
});

async function importJournal() {
    let insertedOrUpdated = 0;

    // Insert in reverse order so article 1 is the newest item in the CMS listing.
    for (const post of [...posts].reverse()) {
        await pool.query(
            `INSERT INTO blog_posts
                (title, slug, excerpt, content, image, category, author, date, read_time, tags, status)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'published')
             ON CONFLICT (slug) DO UPDATE SET
                title = EXCLUDED.title,
                excerpt = EXCLUDED.excerpt,
                content = EXCLUDED.content,
                image = EXCLUDED.image,
                category = EXCLUDED.category,
                author = EXCLUDED.author,
                date = EXCLUDED.date,
                read_time = EXCLUDED.read_time,
                tags = EXCLUDED.tags,
                status = 'published',
                updated_at = NOW()`,
            [
                post.title,
                post.slug,
                post.excerpt,
                post.content,
                post.image,
                post.category,
                post.author,
                post.date,
                post.read_time,
                post.tags,
            ],
        );
        insertedOrUpdated += 1;
    }

    console.log(`Published ${insertedOrUpdated} Ariya Journal articles.`);
}

try {
    await importJournal();
} finally {
    await pool.end();
}
