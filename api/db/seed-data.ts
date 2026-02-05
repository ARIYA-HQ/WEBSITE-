import { db } from './supabase.js';

// This script migrates existing data from JSON to Supabase database
// Run with: node --loader ts-node/esm api/db/seed-data.ts

const SEED_DATA = {
    blogPosts: [
        {
            title: "Ariya vs. The Rest: The Ultimate ROI Breakdown for Event Pros",
            excerpt: "We did the math. See how Ariya stacks up against generic project management tools and why specialized software pays for itself in weeks.",
            category: "Business",
            author: "Timilehin Oripeloye",
            date: "Feb 10, 2026",
            read_time: "6 min read",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070",
            tags: ["ROI", "Software", "Growth"],
            content: "<p>In the high-stakes world of event planning, margins are everything...</p>",
            status: "published" as const
        },
        // Add more blog posts from your SEED_DATA...
    ],
    caseStudies: [
        {
            client: "Bloom & Barrel",
            industry: "Boutique Planning",
            title: "From Overwhelmed Solopreneur to Thriving Agency",
            description: "How a one-person shop doubled their client load without hiring.",
            metrics: [
                { label: "Time Saved", value: "20hrs/wk" },
                { label: "Clients", value: "+100%" },
                { label: "Stress", value: "-50%" }
            ],
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069",
            logo: "BB",
            challenge: "Founder Sarah was drowning in admin work...",
            solution: "Implementing Ariya's automated workflows...",
            result: "Sarah reclaimed 20 hours a week...",
            testimonial: {
                quote: "I thought I needed to hire more staff. Turned out I just needed Ariya.",
                author: "Sarah Miller",
                role: "Owner"
            },
            content: "Full case study content here...",
            status: "published" as const
        },
        // Add more case studies...
    ],
    resources: [
        {
            type: "Guide" as const,
            title: "The 2026 Event Trends Report",
            description: "A comprehensive look at the colors, themes, and technologies shaping the future of events.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
            format: "PDF",
            size: "12 MB",
            content: "Full guide content here...",
            status: "published" as const
        },
        // Add more resources...
    ],
    waitlist: [
        {
            email: "script@test.com",
            role: "individual" as const,
            company: undefined
        },
        {
            email: "timilehinoripeloye@gmail.com",
            role: "vendor" as const,
            company: undefined
        }
    ]
};

async function seedDatabase() {
    console.log('🌱 Starting database seeding...\n');

    try {
        // Seed Blog Posts
        console.log('📝 Seeding blog posts...');
        for (const post of SEED_DATA.blogPosts) {
            try {
                await db.blogPosts.create(post);
                console.log(`  ✅ Created: ${post.title}`);
            } catch (error: any) {
                if (error.code === '23505') {
                    console.log(`  ⏭️  Skipped (duplicate): ${post.title}`);
                } else {
                    console.error(`  ❌ Error: ${post.title}`, error.message);
                }
            }
        }

        // Seed Case Studies
        console.log('\n📊 Seeding case studies...');
        for (const study of SEED_DATA.caseStudies) {
            try {
                await db.caseStudies.create(study);
                console.log(`  ✅ Created: ${study.title}`);
            } catch (error: any) {
                if (error.code === '23505') {
                    console.log(`  ⏭️  Skipped (duplicate): ${study.title}`);
                } else {
                    console.error(`  ❌ Error: ${study.title}`, error.message);
                }
            }
        }

        // Seed Resources
        console.log('\n📚 Seeding resources...');
        for (const resource of SEED_DATA.resources) {
            try {
                await db.resources.create(resource);
                console.log(`  ✅ Created: ${resource.title}`);
            } catch (error: any) {
                if (error.code === '23505') {
                    console.log(`  ⏭️  Skipped (duplicate): ${resource.title}`);
                } else {
                    console.error(`  ❌ Error: ${resource.title}`, error.message);
                }
            }
        }

        // Seed Waitlist
        console.log('\n📧 Seeding waitlist...');
        for (const entry of SEED_DATA.waitlist) {
            try {
                await db.waitlist.create(entry);
                console.log(`  ✅ Created: ${entry.email}`);
            } catch (error: any) {
                if (error.code === '23505') {
                    console.log(`  ⏭️  Skipped (duplicate): ${entry.email}`);
                } else {
                    console.error(`  ❌ Error: ${entry.email}`, error.message);
                }
            }
        }

        console.log('\n✨ Database seeding complete!\n');
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

// Run the seeder
seedDatabase();
