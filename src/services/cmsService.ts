import { BlogPost, CaseStudy, Resource, WaitlistEntry } from '../types/cms';

class CmsService {
    // --- Blog Posts ---
    async getBlogPosts(admin = false): Promise<BlogPost[]> {
        const url = admin ? '/api/posts?admin=true' : '/api/posts';
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
    }

    async getBlogPostById(id: number): Promise<BlogPost | undefined> {
        const res = await fetch(`/api/posts/${id}`);
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch post');
        return res.json();
    }

    // Compat for earlier usage
    async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
        const id = parseInt(slug);
        if (!isNaN(id)) return this.getBlogPostById(id);
        return undefined;
    }

    async createBlogPost(post: Omit<BlogPost, 'id'>): Promise<{ id: number }> {
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        if (!res.ok) throw new Error('Failed to create post');
        return res.json();
    }

    async updateBlogPost(id: number, updates: Partial<BlogPost>): Promise<BlogPost> {
        const res = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update post');
        const data = await res.json();
        return data.post;
    }

    async deleteBlogPost(id: number): Promise<void> {
        const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete post');
    }

    // --- Case Studies ---
    async getCaseStudies(admin = false): Promise<CaseStudy[]> {
        const url = admin ? '/api/case-studies?admin=true' : '/api/case-studies';
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch case studies');
        return res.json();
    }

    async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
        const res = await fetch(`/api/case-studies/${id}`);
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch case study');
        return res.json();
    }

    async createCaseStudy(item: Omit<CaseStudy, 'id'> & { id?: string }): Promise<{ id: string }> {
        const res = await fetch('/api/case-studies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        if (!res.ok) throw new Error('Failed to create case study');
        return res.json();
    }

    async updateCaseStudy(id: string, updates: Partial<CaseStudy>): Promise<void> {
        const res = await fetch(`/api/case-studies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update case study');
    }

    async deleteCaseStudy(id: string): Promise<void> {
        const res = await fetch(`/api/case-studies/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete case study');
    }

    // --- Resources ---
    async getResources(admin = false): Promise<Resource[]> {
        const url = admin ? '/api/resources?admin=true' : '/api/resources';
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch resources');
        return res.json();
    }

    async getResourceById(id: number): Promise<Resource | undefined> {
        const res = await fetch(`/api/resources/${id}`);
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch resource');
        return res.json();
    }

    async createResource(item: Omit<Resource, 'id'>): Promise<{ id: number }> {
        const res = await fetch('/api/resources', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        if (!res.ok) throw new Error('Failed to create resource');
        return res.json();
    }

    async updateResource(id: number, updates: Partial<Resource>): Promise<void> {
        const res = await fetch(`/api/resources/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update resource');
    }

    async deleteResource(id: number): Promise<void> {
        const res = await fetch(`/api/resources/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete resource');
    }

    async uploadFile(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                try {
                    const res = await fetch('/api/upload', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            file: reader.result,
                            name: file.name,
                            type: file.type
                        })
                    });
                    if (!res.ok) throw new Error('Upload failed');
                    const data = await res.json();
                    resolve(data.url);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = error => reject(error);
        });
    }

    // --- Waitlist ---
    async getWaitlist(): Promise<WaitlistEntry[]> {
        const res = await fetch('/api/waitlist');
        if (!res.ok) throw new Error('Failed to fetch waitlist');
        return res.json();
    }

    async deleteWaitlistEntry(id: number): Promise<void> {
        const res = await fetch(`/api/waitlist/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete waitlist entry');
    }

    // --- Analytics ---
    async getAnalyticsOverview(): Promise<{
        blogPosts: number;
        publishedPosts: number;
        caseStudies: number;
        resources: number;
        waitlist: number;
    }> {
        const res = await fetch('/api/analytics/overview');
        if (!res.ok) throw new Error('Failed to fetch analytics overview');
        return res.json();
    }

    async getWaitlistGrowth(): Promise<{ date: string; count: number }[]> {
        const res = await fetch('/api/analytics/waitlist-growth');
        if (!res.ok) throw new Error('Failed to fetch waitlist growth');
        return res.json();
    }
}

export const cmsService = new CmsService();
