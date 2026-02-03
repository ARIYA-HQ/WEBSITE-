export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    readTime: string;
    image: string;
    status: 'published' | 'draft' | 'archived';
}

export interface CaseStudy {
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
    result: string;
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    status: 'published' | 'draft' | 'archived';
}

export interface Resource {
    id: number;
    type: "Guide" | "Template" | "Checklist";
    title: string;
    desc: string;
    image: string;
    format: string;
    size: string;
    downloadUrl: string;
    status: 'published' | 'draft' | 'archived';
}

export interface WaitlistEntry {
    id: number;
    name: string;
    email: string;
    role: string;
    timestamp: string;
}
