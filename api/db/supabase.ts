import pg from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 10,
});

export interface WaitlistEntry {
    id?: string;
    email: string;
    name?: string;
    role: 'individual' | 'agency' | 'vendor' | 'subscriber';
    company?: string;
    created_at?: string;
}

export interface BlogPost {
    id?: number;
    title: string;
    slug?: string;
    excerpt?: string;
    content: string;
    image?: string;
    category?: string;
    author?: string;
    date?: string;
    read_time?: string;
    tags?: string[];
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

export interface CaseStudy {
    id?: number;
    title: string;
    slug?: string;
    description?: string;
    content: string;
    image?: string;
    logo?: string;
    client?: string;
    industry?: string;
    metrics?: any;
    challenge?: string;
    solution?: string;
    result?: string;
    testimonial?: any;
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

export interface Resource {
    id?: number;
    title: string;
    slug?: string;
    description?: string;
    content: string;
    image?: string;
    type?: 'Guide' | 'Template' | 'Checklist';
    format?: string;
    size?: string;
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

export const db = {
    waitlist: {
        async getAll() {
            const { rows } = await pool.query(
                'SELECT * FROM waitlist ORDER BY created_at DESC'
            );
            return rows;
        },

        async create(entry: WaitlistEntry) {
            const { rows } = await pool.query(
                `INSERT INTO waitlist (email, name, role, company)
                 VALUES ($1, $2, $3, $4) RETURNING *`,
                [entry.email, entry.name ?? null, entry.role, entry.company ?? null]
            );
            return rows[0];
        },

        async getByEmail(email: string) {
            const { rows } = await pool.query(
                'SELECT * FROM waitlist WHERE email = $1 LIMIT 1',
                [email]
            );
            return rows[0] ?? null;
        },

        async delete(id: string) {
            await pool.query('DELETE FROM waitlist WHERE id = $1', [id]);
        },
    },

    blogPosts: {
        async getAll(includeUnpublished = false) {
            const { rows } = await pool.query(
                includeUnpublished
                    ? 'SELECT * FROM blog_posts ORDER BY created_at DESC'
                    : "SELECT * FROM blog_posts WHERE status = 'published' ORDER BY created_at DESC"
            );
            return rows;
        },

        async getById(id: number) {
            const { rows } = await pool.query(
                'SELECT * FROM blog_posts WHERE id = $1 LIMIT 1',
                [id]
            );
            return rows[0] ?? null;
        },

        async create(post: BlogPost) {
            const { rows } = await pool.query(
                `INSERT INTO blog_posts
                 (title, slug, excerpt, content, image, category, author, date, read_time, tags, status)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
                [
                    post.title, post.slug ?? null, post.excerpt ?? null,
                    post.content, post.image ?? null, post.category ?? null,
                    post.author ?? 'Timilehin Oripeloye', post.date ?? null,
                    post.read_time ?? null, post.tags ?? null, post.status ?? 'draft',
                ]
            );
            return rows[0];
        },

        async update(id: number, post: Partial<BlogPost>) {
            const { rows } = await pool.query(
                `UPDATE blog_posts SET
                 title = COALESCE($1, title),
                 slug = COALESCE($2, slug),
                 excerpt = COALESCE($3, excerpt),
                 content = COALESCE($4, content),
                 image = COALESCE($5, image),
                 category = COALESCE($6, category),
                 author = COALESCE($7, author),
                 date = COALESCE($8, date),
                 read_time = COALESCE($9, read_time),
                 tags = COALESCE($10, tags),
                 status = COALESCE($11, status)
                 WHERE id = $12 RETURNING *`,
                [
                    post.title, post.slug, post.excerpt, post.content,
                    post.image, post.category, post.author, post.date,
                    post.read_time, post.tags, post.status, id,
                ]
            );
            return rows[0];
        },

        async delete(id: number) {
            await pool.query('DELETE FROM blog_posts WHERE id = $1', [id]);
        },
    },

    caseStudies: {
        async getAll(includeUnpublished = false) {
            const { rows } = await pool.query(
                includeUnpublished
                    ? 'SELECT * FROM case_studies ORDER BY created_at DESC'
                    : "SELECT * FROM case_studies WHERE status = 'published' ORDER BY created_at DESC"
            );
            return rows;
        },

        async getById(id: string) {
            const { rows } = await pool.query(
                'SELECT * FROM case_studies WHERE id = $1 LIMIT 1',
                [id]
            );
            return rows[0] ?? null;
        },

        async create(study: CaseStudy) {
            const { rows } = await pool.query(
                `INSERT INTO case_studies
                 (title, slug, description, content, image, logo, client, industry,
                  metrics, challenge, solution, result, testimonial, status)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`,
                [
                    study.title, study.slug ?? null, study.description ?? null,
                    study.content, study.image ?? null, study.logo ?? null,
                    study.client ?? null, study.industry ?? null,
                    study.metrics ? JSON.stringify(study.metrics) : null,
                    study.challenge ?? null, study.solution ?? null,
                    study.result ?? null,
                    study.testimonial ? JSON.stringify(study.testimonial) : null,
                    study.status ?? 'draft',
                ]
            );
            return rows[0];
        },

        async update(id: string, study: Partial<CaseStudy>) {
            const { rows } = await pool.query(
                `UPDATE case_studies SET
                 title = COALESCE($1, title),
                 slug = COALESCE($2, slug),
                 description = COALESCE($3, description),
                 content = COALESCE($4, content),
                 image = COALESCE($5, image),
                 logo = COALESCE($6, logo),
                 client = COALESCE($7, client),
                 industry = COALESCE($8, industry),
                 metrics = COALESCE($9::jsonb, metrics),
                 challenge = COALESCE($10, challenge),
                 solution = COALESCE($11, solution),
                 result = COALESCE($12, result),
                 testimonial = COALESCE($13::jsonb, testimonial),
                 status = COALESCE($14, status)
                 WHERE id = $15 RETURNING *`,
                [
                    study.title, study.slug, study.description, study.content,
                    study.image, study.logo, study.client, study.industry,
                    study.metrics ? JSON.stringify(study.metrics) : null,
                    study.challenge, study.solution, study.result,
                    study.testimonial ? JSON.stringify(study.testimonial) : null,
                    study.status, id,
                ]
            );
            return rows[0];
        },

        async delete(id: string) {
            await pool.query('DELETE FROM case_studies WHERE id = $1', [id]);
        },
    },

    resources: {
        async getAll(includeUnpublished = false) {
            const { rows } = await pool.query(
                includeUnpublished
                    ? 'SELECT * FROM resources ORDER BY created_at DESC'
                    : "SELECT * FROM resources WHERE status = 'published' ORDER BY created_at DESC"
            );
            return rows;
        },

        async getById(id: number) {
            const { rows } = await pool.query(
                'SELECT * FROM resources WHERE id = $1 LIMIT 1',
                [id]
            );
            return rows[0] ?? null;
        },

        async create(resource: Resource) {
            const { rows } = await pool.query(
                `INSERT INTO resources
                 (title, slug, description, content, image, type, format, size, status)
                 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
                [
                    resource.title, resource.slug ?? null, resource.description ?? null,
                    resource.content, resource.image ?? null, resource.type ?? null,
                    resource.format ?? null, resource.size ?? null, resource.status ?? 'draft',
                ]
            );
            return rows[0];
        },

        async update(id: number, resource: Partial<Resource>) {
            const { rows } = await pool.query(
                `UPDATE resources SET
                 title = COALESCE($1, title),
                 slug = COALESCE($2, slug),
                 description = COALESCE($3, description),
                 content = COALESCE($4, content),
                 image = COALESCE($5, image),
                 type = COALESCE($6, type),
                 format = COALESCE($7, format),
                 size = COALESCE($8, size),
                 status = COALESCE($9, status)
                 WHERE id = $10 RETURNING *`,
                [
                    resource.title, resource.slug, resource.description,
                    resource.content, resource.image, resource.type,
                    resource.format, resource.size, resource.status, id,
                ]
            );
            return rows[0];
        },

        async delete(id: number) {
            await pool.query('DELETE FROM resources WHERE id = $1', [id]);
        },
    },
};

export async function testConnection() {
    try {
        await pool.query('SELECT 1');
        console.log('✅ Neon DB connection successful');
        return true;
    } catch (error) {
        console.error('❌ Neon DB connection failed:', error);
        return false;
    }
}
