import fs from 'fs';
import path from 'path';

// Define DB type
export interface BlogPost {
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
    status: 'published' | 'draft' | 'archived';
}

export interface CaseStudy {
    id: string;
    client: string;
    industry: string;
    title: string;
    desc: string;
    metrics: { label: string; value: string }[];
    image: string;
    logo: string;
    challenge: string;
    solution: string;
    result: string;
    testimonial: { quote: string; author: string; role: string };
    status: 'published' | 'draft' | 'archived';
}

export interface InternalResource {
    id: number;
    type: 'Guide' | 'Template' | 'Case Study' | 'Waitlist';
    title: string;
    desc: string;
    image: string;
    format: string;
    size: string;
    downloadUrl: string;
    status: 'published' | 'draft' | 'archived';
}

export interface InternalWaitlistEntry {
    id: number;
    name: string;
    email: string;
    role: string;
    timestamp: string;
}

export interface DB {
    blogPosts: BlogPost[];
    caseStudies: CaseStudy[];
    resources: InternalResource[];
    waitlist: InternalWaitlistEntry[];
}

const SEED_DATA: DB = {
    blogPosts: [
        {
            id: 1,
            title: "Emergency Fallback Mode Active",
            excerpt: "If you see this, the system is running in recovery mode.",
            category: "System",
            author: "Ariya HQ",
            date: "Feb 3, 2026",
            readTime: "1 min read",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069",
            tags: ["System"],
            content: "<p>The database is currently undergoing maintenance or recovery. Full content will be restored shortly.</p>",
            status: "published"
        }
    ],
    caseStudies: [],
    resources: [],
    waitlist: []
};

const DB_FILE = path.join(process.cwd(), 'server', 'cms_data.json');

export const getDb = (): DB => {
    try {
        if (fs.existsSync(DB_FILE)) {
            const data = fs.readFileSync(DB_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Error reading DB:', e);
    }
    return SEED_DATA;
};

export const saveDb = (data: DB) => {
    if (process.env.VERCEL) return;
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('Error saving DB:', e);
    }
};

export default { get: getDb, save: saveDb };
