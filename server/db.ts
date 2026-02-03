import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'server', 'cms_data.json');

// Types (Mirrors frontend types)
export type BlogPostStatus = 'published' | 'draft' | 'archived';

interface InternalBlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
    tags: string[];
    status: BlogPostStatus;
}

interface InternalCaseStudy {
    id: string; // Slug-like ID
    client: string;
    industry: string;
    title: string;
    desc: string;
    metrics: { label: string; value: string }[];
    image: string;
    logo: string;
    challenge: string;
    solution: string;
    result: string; // Added field based on UI analysis
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    status: BlogPostStatus;
}

interface InternalResource {
    id: number;
    type: "Guide" | "Template" | "Checklist";
    title: string;
    desc: string;
    image: string;
    format: string;
    size: string;
    downloadUrl: string; // For now just a link
    status: BlogPostStatus;
}

interface InternalWaitlistEntry {
    id: number;
    name: string;
    email: string;
    role: string;
    timestamp: string;
}

interface DB {
    blogPosts: InternalBlogPost[];
    caseStudies: InternalCaseStudy[];
    resources: InternalResource[];
    waitlist: InternalWaitlistEntry[];
}

// Initial Seed Data
const SEED_DATA: DB = {
    blogPosts: [
        {
            id: 1,
            title: "2026 Wedding Trends: The Return of Maximalism",
            excerpt: "Say goodbye to beige. Next year is all about bold colors, rich textures, and over-the-top florals.",
            category: "Trends",
            author: "Sarah James",
            date: "Jan 12, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069",
            tags: ["Design", "Decor", "Trends"],
            content: `<p>After years of "quiet luxury"...</p>`,
            status: 'published'
        },
    ],
    caseStudies: [
        {
            id: "lux-gala",
            client: "Luxe Events Co.",
            industry: "Corporate",
            title: "Scaling Production for a 500-Person Tech Gala",
            desc: "How Luxe Events Co. cut planning time by 40% and delivered a flawless multi-day summit using Ariya.",
            metrics: [
                { label: "Hours Saved", value: "40+" },
                { label: "Vendor ROI", value: "25%" },
                { label: "Client NPS", value: "100" }
            ],
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069",
            logo: "LUX",
            challenge: "Luxe Events was tasked with organizing a high-stakes tech gala...",
            solution: "They used Ariya's AI Timeline Builder...",
            result: "The event was executed flawlessly...",
            testimonial: {
                quote: "Ariya didn't just save us time; it saved our sanity.",
                author: "Sarah Jenkins",
                role: "Senior Producer, Luxe Events Co."
            },
            status: 'published'
        }
    ],
    resources: [
        {
            id: 1,
            type: "Guide",
            title: "The 2026 Event Trends Report",
            desc: "A comprehensive look at the colors, themes, and technologies shaping the future of events.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
            format: "PDF",
            size: "12 MB",
            downloadUrl: "#",
            status: 'published'
        }
    ],
    waitlist: []
};

// Ensure DB initialization
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(SEED_DATA, null, 2));
    console.log('Initialized JSON Database.');
} else {
    // Migration: Add new tables if missing
    try {
        const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
        let changed = false;

        if (!data.caseStudies) {
            data.caseStudies = SEED_DATA.caseStudies;
            changed = true;
        }
        if (!data.resources) {
            data.resources = SEED_DATA.resources;
            changed = true;
        }
        if (!data.waitlist) {
            data.waitlist = [];
            changed = true;
        }

        if (changed) {
            fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
            console.log('Migrated JSON Database: Added Case Studies and Resources.');
        }
    } catch (e) {
        console.error("Failed to migrate DB:", e);
    }
}

export const getDb = (): DB => {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return SEED_DATA;
    }
};

export const saveDb = (data: DB) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

export default { get: getDb, save: saveDb };
