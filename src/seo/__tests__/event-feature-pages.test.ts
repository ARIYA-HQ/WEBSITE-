import { describe, expect, it } from 'vitest';
import { eventFeaturePages } from '../event-feature-pages-content';
import { isIndexableRoute, publicPages } from '../routes';

describe('event feature pages', () => {
    it('registers all five feature pages as indexable public routes', () => {
        expect(Object.keys(eventFeaturePages)).toHaveLength(5);

        for (const [path, page] of Object.entries(eventFeaturePages)) {
            expect(page.path).toBe(path);
            expect(publicPages[path]?.title).toBeTruthy();
            expect(publicPages[path]?.description).toBeTruthy();
            expect(isIndexableRoute(path)).toBe(true);
            expect(page.sections.length).toBeGreaterThan(0);
            expect(page.faqs.length).toBeGreaterThan(0);
        }
    });

    it('uses distinct local hero images and links only to registered pages', () => {
        const pages = Object.values(eventFeaturePages);
        expect(new Set(pages.map((page) => page.image)).size).toBe(pages.length);

        for (const page of pages) {
            for (const link of page.related) {
                expect(publicPages[link.href] || eventFeaturePages[link.href]).toBeTruthy();
            }
        }
    });
});
