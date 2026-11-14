import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import posts from '../nigerianWeddingSeoSeries.json';

describe('Nigerian wedding SEO article series', () => {
    it('contains twenty-four complete, uniquely sluggified articles with clean HTML and distinct descriptive images', () => {
        expect(posts).toHaveLength(24);
        expect(posts.map((post) => post.slug)).toEqual(expect.arrayContaining([
            'cash-wedding-gift-etiquette-nigeria',
            'small-wedding-ideas-nigeria',
            'wedding-budget-for-100-guests-nigeria',
            'nigerian-wedding-food-menu-ideas',
            'how-to-choose-wedding-caterer-nigeria',
            'nigerian-wedding-drinks-ideas',
            'nigerian-wedding-souvenir-ideas',
            'nigerian-wedding-reception-programme',
            'wedding-mc-script-nigerian-wedding',
            'wedding-seating-arrangement-nigeria',
            'nigerian-wedding-decoration-ideas',
            'nigerian-wedding-photography-checklist',
            'nigerian-wedding-entertainment-ideas',
            'how-to-choose-wedding-photographer-nigeria',
            'wedding-videography-nigeria',
        ]));
        const postsBySlug = new Map(posts.map((post) => [post.slug, post]));
        expect(postsBySlug.get('cash-wedding-gift-etiquette-nigeria')?.content).toContain(
            'https://www.cbn.gov.ng/currency/banknoteHandling.html',
        );
        expect(postsBySlug.get('small-wedding-ideas-nigeria')?.content).toContain(
            'Micro wedding: approximately 10–30 guests.',
        );
        expect(postsBySlug.get('wedding-budget-for-100-guests-nigeria')?.content).toContain(
            'not verified Nigerian market averages',
        );
        expect(postsBySlug.get('nigerian-wedding-food-menu-ideas')?.content).toContain(
            'Yoruba-inspired option',
        );
        expect(postsBySlug.get('how-to-choose-wedding-caterer-nigeria')?.content).toContain(
            'Twenty Questions to Ask a Wedding Caterer Before Booking',
        );
        expect(postsBySlug.get('nigerian-wedding-drinks-ideas')?.content).toContain(
            'Traditional drinks: Zobo and kunu.',
        );
        expect(postsBySlug.get('nigerian-wedding-souvenir-ideas')?.content).toContain(
            'Cost per souvenir',
        );
        expect(postsBySlug.get('nigerian-wedding-reception-programme')?.content).toContain(
            'Guest arrival and seating — Ushers',
        );
        expect(postsBySlug.get('wedding-mc-script-nigerian-wedding')?.content).toContain(
            '<blockquote>',
        );
        expect(postsBySlug.get('wedding-seating-arrangement-nigeria')?.content).toContain(
            'Table 1: Bride’s parents and selected immediate family.',
        );
        expect(postsBySlug.get('nigerian-wedding-decoration-ideas')?.content).toContain(
            '25 Nigerian Wedding Decoration Ideas',
        );
        expect(postsBySlug.get('nigerian-wedding-photography-checklist')?.content).toContain(
            'Getting-Ready Photographs',
        );
        expect(postsBySlug.get('nigerian-wedding-entertainment-ideas')?.content).toContain(
            'Professional Wedding DJ',
        );
        expect(postsBySlug.get('how-to-choose-wedding-photographer-nigeria')?.content).toContain(
            'Review Their Portfolio Carefully',
        );
        expect(postsBySlug.get('wedding-videography-nigeria')?.content).toContain(
            'Importance of Audio Quality',
        );
        expect(new Set(posts.map((post) => post.slug)).size).toBe(posts.length);
        expect(new Set(posts.map((post) => post.image)).size).toBe(posts.length);

        for (const post of posts) {
            expect(post.status).toBe('published');
            expect(post.title.trim()).not.toBe('');
            expect(post.imageAlt.trim()).not.toBe('');
            expect(post.image).toMatch(/^\/images\/nigerian-wedding-articles\/.+\.jpg$/);
            expect(existsSync(join(process.cwd(), 'public', post.image.slice(1)))).toBe(true);
            expect(post.excerpt.length).toBeGreaterThanOrEqual(100);
            expect(post.excerpt.length).toBeLessThanOrEqual(160);
            expect(post.content).toContain('<h2>Introduction</h2>');
            expect(post.content).toContain('Related wedding planning guides');
            expect(post.content).not.toMatch(/AsyncImage|Add an image|query=|aspectRatio=|SEO (?:and|Publishing)|Research notes|Suggested Internal Links/);
            expect(post.content).not.toMatch(
                /&lt;Cite refs|turn\d{3}search|<strong><em>|<\/strong><\/em>|\*\*|AreaSuggested responsibility|CategoryWhat to include|Programme itemDescription|Budget categoryIllustrative allocation|OrderWhat to settle|FactorSame day|TimeActivity|TimelinePriority tasks|ExpenseSuggested approach|Facility or serviceWhat to confirm|Budget approachGift ideas|CategoryExamplesEveryday essentials|Cash giftsPhysical gifts|Wedding typeApproximate guest count|Venue typeWhy it worksWhat to check|ExpensePlanning priority|Expense categorySuggested allocation|Small chopDescription|CategorySuggested food|WhenWhat to do|CategorySuggested drinks|Cost categoryWhat to consider|SequenceActivity|InformationWhat to provide|TableSuggested guest group|<AsyncImage|<text\b/,
            );

            for (const tag of ['p', 'ul', 'ol', 'li', 'a', 'strong', 'em', 'h2', 'h3', 'blockquote']) {
                const openingTags = post.content.match(new RegExp(`<${tag}(?:\\s[^>]*)?>`, 'g')) || [];
                const closingTags = post.content.match(new RegExp(`</${tag}>`, 'g')) || [];
                expect(openingTags.length, `${post.slug}: <${tag}> tags`).toBe(closingTags.length);
            }
        }
    });
});
