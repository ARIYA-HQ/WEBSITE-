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
        expect(posts).toEqual(mockPosts);
        expect(fetch).toHaveBeenCalledWith('/api/posts');
    });

    it('should throw an error when fetch fails', async () => {
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            text: async () => 'Internal Server Error'
        });

        await expect(cmsService.getBlogPosts()).rejects.toThrow('Failed to fetch posts: 500');
    });

    it('should fetch a single post by id', async () => {
        const mockPost = { id: 1, title: 'Post 1' };

        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => mockPost
        });

        const post = await cmsService.getBlogPostById(1);
        expect(post).toEqual(mockPost);
        expect(fetch).toHaveBeenCalledWith('/api/posts/1');
    });
});
