import { describe, expect, it } from 'vitest';
import { getRelatedBlogPosts, prepareArticleSections, formatBlogDate } from '../blogExperience';
import { publicWeddingSeoPosts } from '../publicWeddingBlogPosts';

describe('blog experience helpers', () => {
    it('adds stable anchors to article sections for the table of contents', () => {
        const prepared = prepareArticleSections([
            '<h2>Budget &amp; Planning</h2><p>First section</p>',
            'ariya-poll-1',
            '<h2>Next Steps</h2>',
        ]);

        expect(prepared.sections).toEqual([
            { id: 'article-section-1', title: 'Budget & Planning' },
            { id: 'article-section-2', title: 'Next Steps' },
        ]);
        expect(prepared.segments[0]).toContain('id="article-section-1"');
        expect(prepared.segments[1]).toBe('ariya-poll-1');
    });

    it('recommends posts by category and shared tags without unrelated fillers', () => {
        const current = {
            ...publicWeddingSeoPosts[0],
            id: 100,
            category: 'Event Management',
            tags: ['Guest List', 'QR codes'],
        };
        const byTag = {
            ...current,
            id: 101,
            category: 'Event Technology',
            tags: ['qr CODES'],
        };
        const byCategory = {
            ...current,
            id: 102,
            slug: 'related-event-management',
            tags: [],
        };
        const unrelated = {
            ...current,
            id: 103,
            category: 'Wedding Food',
            tags: ['catering'],
        };

        expect(getRelatedBlogPosts(current, [unrelated, byTag, byCategory])).toEqual([
            byCategory,
            byTag,
        ]);
    });

    it('formats valid publication dates and omits invalid dates', () => {
        expect(formatBlogDate('2026-11-17')).toBe('17 Nov 2026');
        expect(formatBlogDate('not-a-date')).toBeNull();
        expect(formatBlogDate(null)).toBeNull();
    });
});
