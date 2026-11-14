import { describe, expect, it } from 'vitest';
import {
    mergePublicWeddingSeoPosts,
    publicWeddingSeoPosts,
} from '../publicWeddingBlogPosts';
import { buildSitemapXml } from '../../seo/sitemap';

describe('public wedding SEO posts', () => {
    it('adds the twenty-four articles before existing posts and avoids duplicate slugs', () => {
        const existingPost = {
            ...publicWeddingSeoPosts[0],
            id: 42,
            title: 'Existing database version',
        };
        const merged = mergePublicWeddingSeoPosts([existingPost]);

        expect(merged).toHaveLength(24);
        expect(merged[0].slug).toBe(publicWeddingSeoPosts[1].slug);
        expect(merged[23]).toMatchObject({
            id: 42,
            slug: publicWeddingSeoPosts[0].slug,
            title: 'Existing database version',
        });
    });

    it('includes the new articles in the sitemap when the database has no copies yet', () => {
        const sitemap = buildSitemapXml(mergePublicWeddingSeoPosts([]));

        for (const post of publicWeddingSeoPosts) {
            expect(sitemap).toContain(
                `<loc>https://ariyahq.com/resources/blog/${post.slug}</loc>`,
            );
        }
    });
});
