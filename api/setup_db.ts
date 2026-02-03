
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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Error: NEXT_PUBLIC_SUPABASE_URL (or SUPABASE_URL) and key must be set.');
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
        }, { onConflict: 'email' });

        if (error) console.error('Error seeding waitlist:', entry.email, error.message);
    }
}

async function seedBlogPosts() {
    console.log(`Seeding ${SEED_DATA.blogPosts.length} blog posts...`);
    for (const post of SEED_DATA.blogPosts) {
        const slug = slugify(post.title);
        const { error } = await supabase.from('blog_posts').upsert({
            title: post.title,
            slug: slug,
            excerpt: post.excerpt,
            category: post.category,
            author: post.author,
            date: post.date,
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
        const slug = study.id;
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
            content: content
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
            content: null
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
