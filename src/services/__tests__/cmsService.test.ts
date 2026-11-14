import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cmsService } from '../cmsService';

describe('CmsService', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn());
    });

    it('should fetch blog posts successfully', async () => {
        const mockPosts = [
            { id: 1, title: 'Post 1', content: 'Content 1', category: 'News' },
            { id: 2, title: 'Post 2', content: 'Content 2', category: 'Trends' }
        ];

        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => mockPosts,
            clone: () => ({
                json: async () => mockPosts,
                text: async () => JSON.stringify(mockPosts)
            })
        });

        const posts = await cmsService.getBlogPosts();
        expect(posts).toHaveLength(mockPosts.length + 24);
        expect(posts.slice(24)).toEqual(mockPosts);
        expect(posts[0].slug).toBe('first-steps-planning-nigerian-wedding');
        expect(fetch).toHaveBeenCalledWith('/api/posts', { headers: {} });
    });

    it('should fall back to local posts when fetch fails', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        const posts = await cmsService.getBlogPosts();
        expect(posts.some(post => post.slug === 'first-steps-planning-nigerian-wedding')).toBe(true);
    });

    it('should load a public wedding article by slug when the API is unavailable', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        const post = await cmsService.getBlogPostBySlug('wedding-invitation-message-whatsapp');

        expect(post?.title).toBe('How to Write a Wedding Invitation Message for WhatsApp: 20 Examples for Nigerian Couples');
        expect(post?.imageAlt).toBe('Black woman using a smartphone to view wedding invitation details');
    });

    it('should load the latest local wedding article by slug when the API is unavailable', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        const post = await cmsService.getBlogPostBySlug('nigerian-wedding-food-menu-ideas');

        expect(post?.title).toBe('Nigerian Wedding Food Menu Ideas: What to Serve at Your Traditional Wedding and Reception');
        expect(post?.imageAlt).toContain('fresh side-dish idea');
    });

    it('should load the latest reception article by slug when the API is unavailable', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        const post = await cmsService.getBlogPostBySlug('wedding-seating-arrangement-nigeria');

        expect(post?.title).toBe('Wedding Seating Arrangement in Nigeria: How to Plan Guest Tables for Your Wedding');
        expect(post?.imageAlt).toContain('guest place settings');
    });

    it('should load the new wedding guide articles by slug when the API is unavailable', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        const slugs = [
            'nigerian-wedding-decoration-ideas',
            'nigerian-wedding-photography-checklist',
            'nigerian-wedding-entertainment-ideas',
            'how-to-choose-wedding-photographer-nigeria',
            'wedding-videography-nigeria',
        ];
        const posts = await Promise.all(slugs.map((slug) => cmsService.getBlogPostBySlug(slug)));

        expect(posts.map((post) => post?.slug)).toEqual(slugs);
        expect(posts.every((post) => Boolean(post?.imageAlt))).toBe(true);
    });

    it('should fetch a single post by id', async () => {
        const mockPost = { id: 1, title: 'Post 1' };

        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => mockPost
        });

        const post = await cmsService.getBlogPostById(1);
        expect(post).toEqual(mockPost);
        expect(fetch).toHaveBeenCalledWith('/api/posts/1', { headers: {} });
    });
});

describe('CmsService admin auth', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [] }));
        localStorage.setItem('ariya_admin_token', 'tok');
    });

    it('sends the admin token on admin requests', async () => {
        await cmsService.getWaitlist();
        expect(fetch).toHaveBeenCalledWith('/api/waitlist', { headers: { Authorization: 'Bearer tok' } });
        localStorage.removeItem('ariya_admin_token');
    });
});
