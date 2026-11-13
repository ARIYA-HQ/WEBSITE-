import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RouteSEO from '../RouteSEO';

function renderAt(path: string) {
    return render(
        <HelmetProvider>
            <MemoryRouter initialEntries={[path]}>
                <RouteSEO />
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
            .toBe('https://ariyahq.com/resources/blog');
        expect(document.head.querySelector('meta[name="robots"]')?.getAttribute('content'))
            .toBe('index, follow');
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
