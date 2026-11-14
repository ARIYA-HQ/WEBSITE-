import { render, waitFor } from '@testing-library/react';
import type { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import SEO from '../SEO';
import RouteSEO from '../RouteSEO';

function renderAt(path: string, pageMetadata?: ReactNode) {
    return render(
        <HelmetProvider>
            <MemoryRouter initialEntries={[path]}>
                <RouteSEO />
                {pageMetadata}
            </MemoryRouter>
        </HelmetProvider>,
    );
}

describe('RouteSEO', () => {
    it('sets canonical metadata for a known public page', async () => {
        renderAt('/resources/blog?source=newsletter');

        await waitFor(() => {
            expect(document.title).toContain('Event Planning Journal');
        });
        expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href'))
            .toBe('https://ariyahq.com/resources/blog/');
        expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content'))
            .toBe('index, follow');
    });

    it('uses the live trailing-slash canonical for static routes', async () => {
        renderAt('/product/websites');

        await waitFor(() => {
            expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href'))
                .toBe('https://ariyahq.com/product/websites/');
        });
    });

    it('leaves article metadata to the article page', async () => {
        document.title = 'Previous page | ÀRIYÁ';
        document.head.querySelectorAll('link[rel="canonical"], meta[name="robots"]')
            .forEach((element) => element.remove());
        const staleCanonical = document.createElement('link');
        staleCanonical.rel = 'canonical';
        staleCanonical.href = 'https://ariyahq.com/previous-page/';
        document.head.appendChild(staleCanonical);
        const robots = document.createElement('meta');
        robots.name = 'robots';
        robots.content = 'noindex, nofollow';
        document.head.appendChild(robots);

        renderAt(
            '/resources/blog/planning-a-wedding/',
            <SEO
                title="Planning a Wedding"
                description="Practical wedding planning guidance."
                article
                robots="index, follow"
                canonical="https://ariyahq.com/resources/blog/planning-a-wedding"
            />,
        );

        await waitFor(() => {
            expect(document.title).toBe('Planning a Wedding | ÀRIYÁ');
            expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href'))
                .toBe('https://ariyahq.com/resources/blog/planning-a-wedding');
            expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content'))
                .toBe('index, follow');
            expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute('content'))
                .toBe('https://ariyahq.com/resources/blog/planning-a-wedding');
        });
    });

    it('marks admin pages noindex and omits their canonical URL', async () => {
        renderAt('/admin/settings');

        await waitFor(() => {
            expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content'))
                .toBe('noindex, nofollow');
        });
        expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    });

    it('marks unknown routes noindex', async () => {
        renderAt('/not-a-real-page');

        await waitFor(() => {
            expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content'))
                .toBe('noindex, nofollow');
        });
    });
});
