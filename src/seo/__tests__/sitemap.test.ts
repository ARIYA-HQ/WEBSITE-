import { describe, expect, it } from 'vitest';
import { buildSitemapXml } from '../sitemap';

describe('buildSitemapXml', () => {
    it('includes public site routes and published article URLs', () => {
        const sitemap = buildSitemapXml([
            { id: 1, slug: 'planning-a-wedding' },
            { id: 2, slug: null },
        ]);

        expect(sitemap).toContain('<loc>https://ariyahq.com/</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/product/wishlist</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/product/invitations</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-website</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-budget</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/aso-ebi-in-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-invitation-cards-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-gift-registry-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-wishlist</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/event-ticketing-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/event-registration-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/digital-wedding-invitations</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-rsvp-guest-management</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-vendors-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-venues-nigeria</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/wedding-checklist-timeline</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/nigerian-traditional-wedding</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/yoruba-traditional-wedding</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/igbo-traditional-wedding</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/hausa-traditional-wedding</loc>');
        expect(sitemap).toContain('<loc>https://ariyahq.com/nigerian-wedding-engagement-list</loc>');
        expect(sitemap).toContain(
            '<loc>https://ariyahq.com/resources/blog/planning-a-wedding</loc>',
        );
        expect(sitemap).toContain(
            '<loc>https://ariyahq.com/resources/blog/2</loc>',
        );
        expect(sitemap).not.toContain('/admin');
        expect(sitemap).not.toContain('/login');
        expect(sitemap).not.toContain('/waitlist');
        expect(sitemap).not.toContain('/legal/cookies');
        expect(sitemap).not.toContain('/resources/case-studies');
        expect(sitemap).not.toContain('/product/overview');
        expect(sitemap).not.toContain('/product/planning');
        expect(sitemap).not.toContain('/product/ai-planning');
        expect(sitemap).not.toContain('/product/finance');
    });

    it('URL-encodes reserved characters in CMS slugs', () => {
        const sitemap = buildSitemapXml([{ id: 1, slug: 'tips&ideas' }]);

        expect(sitemap).toContain('tips%26ideas');
    });
});
