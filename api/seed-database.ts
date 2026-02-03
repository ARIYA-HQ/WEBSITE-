
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEED_DATA } from './data.js';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env.local');

if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach((line) => {
        const [key, value] = line.split('=');
        if (key && value && !process.env[key.trim()]) {
            const cleanedValue = value.trim().replace(/^["'](.*)["']$/, '$1');
            process.env[key.trim()] = cleanedValue;
        }
    });
    console.log('Loaded credentials from .env.local');
} else {
    console.warn('Warning: .env.local not found at ' + envPath);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-');  // Replace multiple - with single -
}

async function seedWaitlist() {
    console.log(`Seeding ${SEED_DATA.waitlist.length} waitlist entries...`);
    for (const entry of SEED_DATA.waitlist) {
        const { error } = await supabase.from('waitlist').upsert({
            email: entry.email,
            name: entry.name,
            role: entry.role,
            // company: entry.company // Not in seed data, schema has it nullable
        }, { onConflict: 'email' });

        if (error) console.error('Error seeding waitlist:', entry.email, error.message);
    }
}

async function seedBlogPosts() {
    console.log(`Seeding ${SEED_DATA.blogPosts.length} blog posts...`);
    for (const post of SEED_DATA.blogPosts) {
        const slug = slugify(post.title);
        const { error } = await supabase.from('blog_posts').upsert({
            // Assuming DB uses SERIAL ID or we can omit ID if we want new ones.
            // But we can also try to keep ID if we map it. 
            // Since 'id' is SERIAL in schema, we can insert it if we want, or omit it.
            // Let's omit 'id' to let Postgres handle it and avoid conflicts, unless we need preservation.
            // The JSON IDs are 11, 10...
            // Insert { id: post.id } might fail if sequence is behind? 
            // Supabase/Postgres usually allows inserting explicit ID. 
            // I'll try to insert ID to preserve links if possible, but slug is the main link now?
            // Schema has slug. Frontend likely uses slug.
            // I will omit ID.
            title: post.title,
            slug: slug,
            excerpt: post.excerpt,
            category: post.category,
            author: post.author,
            date: post.date, // Schema is DATE type, string acceptable
            read_time: post.readTime,
            image: post.image,
            content: post.content,
            tags: post.tags,
            status: post.status
        }, { onConflict: 'slug' });

        if (error) console.error('Error seeding blog:', post.title, error.message);
    }
}

async function seedCaseStudies() {
    console.log(`Seeding ${SEED_DATA.caseStudies.length} case studies...`);
    for (const study of SEED_DATA.caseStudies) {
        const slug = study.id; // Using ID as slug since it is slug-like (e.g. 'blissful-beginnings')

        // Construct content from parts if missing
        const content = `
          <h2>Challenge</h2><p>${study.challenge}</p>
          <h2>Solution</h2><p>${study.solution}</p>
          <h2>Result</h2><p>${study.result}</p>
        `.trim();

        const { error } = await supabase.from('case_studies').upsert({
            slug: slug,
            client: study.client,
            industry: study.industry,
            title: study.title,
            description: study.desc,
            metrics: study.metrics,
            image: study.image,
            logo: study.logo,
            challenge: study.challenge,
            solution: study.solution,
            result: study.result,
            testimonial: study.testimonial,
            status: study.status,
            content: content // Filling content with generated HTML for now
        }, { onConflict: 'slug' });

        if (error) console.error('Error seeding case study:', study.id, error.message);
    }
}

async function seedResources() {
    console.log(`Seeding ${SEED_DATA.resources.length} resources...`);
    for (const res of SEED_DATA.resources) {
        const slug = slugify(res.title);
        const { error } = await supabase.from('resources').upsert({
            title: res.title,
            slug: slug,
            description: res.desc,
            image: res.image,
            type: res.type,
            format: res.format,
            size: res.size,
            download_url: res.downloadUrl,
            status: res.status,
            content: null // Schema allows null
        }, { onConflict: 'slug' });

        if (error) console.error('Error seeding resource:', res.title, error.message);
    }
}

async function main() {
    try {
        await seedWaitlist();
        await seedBlogPosts();
        await seedCaseStudies();
        await seedResources();
        console.log('Seeding process finished.');
    } catch (e) {
        console.error('Unexpected error:', e);
    }
}

main();
