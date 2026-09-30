import { BlogPost, CaseStudy, Resource, WaitlistEntry } from '../types/cms';

class CmsError extends Error {
    constructor(public message: string, public status?: number, public body?: string) {
        super(message);
        this.name = 'CmsError';
    }
}

// Admin JWT issued by /api/admin/login (see AuthContext).
export const ADMIN_TOKEN_KEY = 'ariya_admin_token';

function authHeaders(json = false): HeadersInit {
    const headers: Record<string, string> = {};
    if (json) headers['Content-Type'] = 'application/json';
    let token: string | null = null;
    try { token = localStorage.getItem(ADMIN_TOKEN_KEY); } catch { /* storage unavailable */ }
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
}

// The API returns DB rows (snake_case); the UI types use camelCase.
function withAliases<T>(item: any): T {
    if (!item || typeof item !== 'object') return item;
    return {
        ...item,
        readTime: item.readTime ?? item.read_time,
        desc: item.desc ?? item.description,
        downloadUrl: item.downloadUrl ?? item.download_url,
    };
}

async function readItem<T>(res: Response): Promise<T> {
    return withAliases<T>(await res.json());
}

async function readList<T>(res: Response): Promise<T[]> {
    const data = await res.json();
    return Array.isArray(data) ? data.map(item => withAliases<T>(item)) : data;
}

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

class CmsService {
    private async fetchWithRetry(url: string, options?: RequestInit, retries = 2): Promise<Response> {
        try {
            const res = await fetch(url, options);
            if (!res.ok && retries > 0 && res.status >= 500) {
                return this.fetchWithRetry(url, options, retries - 1);
            }
            return res;
        } catch (e) {
            if (retries > 0) return this.fetchWithRetry(url, options, retries - 1);
            throw e;
        }
    }

    // --- Blog Posts ---
    async getBlogPosts(options: { admin?: boolean; status?: BlogPost['status'] } = {}): Promise<BlogPost[]> {
        const queryParams = new URLSearchParams();
        if (options.admin) queryParams.append('admin', 'true');
        if (options.status) queryParams.append('status', options.status);

        const url = `/api/posts${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const res = await this.fetchWithRetry(url, { headers: authHeaders() });

        if (!res.ok) {
            const text = await res.text();
            throw new CmsError(`Failed to fetch posts: ${res.status}`, res.status, text);
        }

        try {
            return await readList<BlogPost>(res);
        } catch (e) {
            throw new CmsError('Failed to parse CMS response', res.status);
        }
    }

    async getBlogPostById(id: number): Promise<BlogPost | undefined> {
        const res = await fetch(`/api/posts/${id}`, { headers: authHeaders() });
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch post');
        return readItem<BlogPost>(res);
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
            headers: authHeaders(true),
            body: JSON.stringify(post)
        });
        if (!res.ok) throw new Error('Failed to create post');
        return res.json();
    }

    async updateBlogPost(id: number, updates: Partial<BlogPost>): Promise<BlogPost> {
        const res = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            headers: authHeaders(true),
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update post');
        return readItem<BlogPost>(res);
    }

    async deleteBlogPost(id: number): Promise<void> {
        const res = await fetch(`/api/posts/${id}`, { method: 'DELETE', headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to delete post');
    }

    // --- Case Studies ---
    async getCaseStudies(admin = false): Promise<CaseStudy[]> {
        const url = admin ? '/api/case-studies?admin=true' : '/api/case-studies';
        const res = await fetch(url, { headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to fetch case studies');
        return readList<CaseStudy>(res);
    }

    async getCaseStudyById(id: string): Promise<CaseStudy | undefined> {
        const res = await fetch(`/api/case-studies/${id}`, { headers: authHeaders() });
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch case study');
        return readItem<CaseStudy>(res);
    }

    async createCaseStudy(item: Omit<CaseStudy, 'id'> & { id?: string }): Promise<{ id: string }> {
        const res = await fetch('/api/case-studies', {
            method: 'POST',
            headers: authHeaders(true),
            body: JSON.stringify(item)
        });
        if (!res.ok) throw new Error('Failed to create case study');
        return res.json();
    }

    async updateCaseStudy(id: string, updates: Partial<CaseStudy>): Promise<void> {
        const res = await fetch(`/api/case-studies/${id}`, {
            method: 'PUT',
            headers: authHeaders(true),
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update case study');
    }

    async deleteCaseStudy(id: string): Promise<void> {
        const res = await fetch(`/api/case-studies/${id}`, { method: 'DELETE', headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to delete case study');
    }

    // --- Resources ---
    async getResources(admin = false): Promise<Resource[]> {
        const url = admin ? '/api/resources?admin=true' : '/api/resources';
        const res = await fetch(url, { headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to fetch resources');
        return readList<Resource>(res);
    }

    async getResourceById(id: number): Promise<Resource | undefined> {
        const res = await fetch(`/api/resources/${id}`, { headers: authHeaders() });
        if (res.status === 404) return undefined;
        if (!res.ok) throw new Error('Failed to fetch resource');
        return readItem<Resource>(res);
    }

    async createResource(item: Omit<Resource, 'id'>): Promise<{ id: number }> {
        const res = await fetch('/api/resources', {
            method: 'POST',
            headers: authHeaders(true),
            body: JSON.stringify(item)
        });
        if (!res.ok) throw new Error('Failed to create resource');
        return res.json();
    }

    async updateResource(id: number, updates: Partial<Resource>): Promise<void> {
        const res = await fetch(`/api/resources/${id}`, {
            method: 'PUT',
            headers: authHeaders(true),
            body: JSON.stringify(updates)
        });
        if (!res.ok) throw new Error('Failed to update resource');
    }

    async deleteResource(id: number): Promise<void> {
        const res = await fetch(`/api/resources/${id}`, { method: 'DELETE', headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to delete resource');
    }

    async uploadFile(file: File): Promise<string> {
        if (file.size > MAX_UPLOAD_BYTES) throw new Error('File is larger than 10 MB');
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                try {
                    const res = await fetch('/api/upload', {
                        method: 'POST',
                        headers: authHeaders(true),
                        body: JSON.stringify({
                            file: reader.result,
                            name: file.name,
                            type: file.type
                        })
                    });
                    if (!res.ok) {
                        const data = await res.json().catch(() => ({}));
                        throw new Error(data.error || 'Upload failed');
                    }
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
        const res = await fetch('/api/waitlist', { headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to fetch waitlist');
        return res.json();
    }

    async deleteWaitlistEntry(id: number | string): Promise<void> {
        const res = await fetch(`/api/waitlist/${id}`, { method: 'DELETE', headers: authHeaders() });
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
        const res = await fetch('/api/analytics/overview', { headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to fetch analytics overview');
        return res.json();
    }

    async getWaitlistGrowth(): Promise<{ date: string; count: number }[]> {
        const res = await fetch('/api/analytics/waitlist-growth', { headers: authHeaders() });
        if (!res.ok) throw new Error('Failed to fetch waitlist growth');
        return res.json();
    }
}

export const cmsService = new CmsService();
