import { describe, expect, it } from 'vitest';
import {
    mergePublicWeddingSeoPosts,
    publicWeddingSeoPosts,
    publicEventManagementSeoPosts,
} from '../publicWeddingBlogPosts';
import { buildSitemapXml } from '../../seo/sitemap';

describe('public SEO blog posts', () => {
    it('merges both public series, sorts newest first and keeps database duplicates', () => {
        const existingPost = {
            ...publicWeddingSeoPosts[0],
            id: 42,
            title: 'Existing database version',
        };
        const merged = mergePublicWeddingSeoPosts([existingPost]);

        expect(merged).toHaveLength(25 + publicEventManagementSeoPosts.length);
        const newestDate = Math.max(...merged.map((post) => Date.parse(post.date)));
        expect(Date.parse(merged[0].date)).toBe(newestDate);
        expect(merged.find((post) => post.slug === publicWeddingSeoPosts[0].slug)).toMatchObject({
            id: 42,
            slug: publicWeddingSeoPosts[0].slug,
            title: 'Existing database version',
        });
    });

    it('places a newer database article ahead of older static articles', () => {
        const newerPost = {
            ...publicWeddingSeoPosts[0],
            id: 99,
            slug: 'newer-database-article',
            date: '2026-11-18',
        };
        expect(mergePublicWeddingSeoPosts([newerPost])[0]).toMatchObject({
            id: 99,
            slug: 'newer-database-article',
        });
    });

    it('includes both public series in the sitemap when the database has no copies yet', () => {
        const sitemap = buildSitemapXml(mergePublicWeddingSeoPosts([]));

        for (const post of [...publicWeddingSeoPosts, ...publicEventManagementSeoPosts]) {
            expect(sitemap).toContain(
                `<loc>https://ariyahq.com/resources/blog/${post.slug}</loc>`,
            );
        }
    });

    it('publishes the retained event-management posts with product-specific calls to action', () => {
        const sitemapPosts = mergePublicWeddingSeoPosts([]);
        const slugs = sitemapPosts.map((post) => post.slug);
        expect(slugs).not.toContain('unique-qr-codes-for-event-guests');
        expect(slugs).not.toContain('event-check-in-software');
        expect(slugs).not.toContain('event-registration-software');
        expect(slugs).toContain('guest-management-software');

        for (const post of publicEventManagementSeoPosts) {
            expect(post.content).not.toContain('href="https://ariyahq.com/"');
            expect(post.content).toMatch(/href="(?:\/event-ticketing-nigeria|\/event-registration-nigeria|\/solutions\/enterprise|\/solutions\/agencies|\/wedding-rsvp-guest-management|https:\/\/app\.ariyahq\.com\/auth\/signup)"/);
        }

        const availableSlugs = new Set(sitemapPosts.map((post) => post.slug));
        for (const post of publicEventManagementSeoPosts) {
            const blogLinks = [...post.content.matchAll(/href="(\/resources\/blog\/[^"]+)"/g)];
            for (const [, href] of blogLinks) {
                expect(availableSlugs).toContain(href.split('/').at(-1));
            }
        }
    });

    it('uses a distinct image for every retained public article', () => {
        const posts = [...publicWeddingSeoPosts, ...publicEventManagementSeoPosts];
        const images = posts.map((post) => post.image);

        expect(new Set(images).size).toBe(images.length);
    });

    it('publishes the seven reviewed planning articles without editor notes or placeholders', () => {
        const posts = [...publicWeddingSeoPosts, ...publicEventManagementSeoPosts];
        const slugs = posts.map((post) => post.slug);

        for (const slug of [
            'wedding-rsvp-tracking-nigeria',
            'how-to-plan-event-check-in-manage-guest-arrivals',
            'how-to-price-event-tickets',
            'event-promotion-timeline',
            'event-budget-template-vendor-payments',
            'conference-registration-checklist',
            'event-planning-for-agencies',
        ]) {
            expect(slugs).toContain(slug);
        }

        expect(slugs).not.toContain('event-ticket-refunds-and-cancellations');
        for (const post of posts) {
            expect(post.content).not.toMatch(/SEO publishing details|utm_source=chatgpt\.com|images\.openai\.com|<AsyncImage/i);
        }

        const pricingArticle = posts.find((post) => post.slug === 'how-to-price-event-tickets');
        expect(pricingArticle?.content).toContain('240 tickets available for paid sale');

        const budgetArticle = posts.find((post) => post.slug === 'event-budget-template-vendor-payments');
        expect(budgetArticle?.content).toContain('₦1,800,000');
    });
});
