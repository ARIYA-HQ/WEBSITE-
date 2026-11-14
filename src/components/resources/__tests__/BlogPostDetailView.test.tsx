import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import BlogPostDetailView from '../BlogPostDetailView';
import { publicWeddingSeoPosts } from '../../../data/publicWeddingBlogPosts';

describe('BlogPostDetailView', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('updates the reading progress as the article scrolls', () => {
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 200 });
        let scrollPosition = 0;
        Object.defineProperty(window, 'scrollY', {
            configurable: true,
            get: () => scrollPosition,
        });

        render(
            <MemoryRouter>
                <BlogPostDetailView post={publicWeddingSeoPosts[0]} />
            </MemoryRouter>,
        );

        const progress = screen.getByRole('progressbar', { name: 'Article reading progress' });
        const article = progress.closest('article');
        expect(article).not.toBeNull();
        Object.defineProperty(article, 'offsetHeight', { configurable: true, value: 1000 });
        Object.defineProperty(article, 'getBoundingClientRect', {
            configurable: true,
            value: () => ({ top: -scrollPosition }) as DOMRect,
        });

        scrollPosition = 400;
        act(() => window.dispatchEvent(new window.Event('scroll')));
        expect(progress).toHaveAttribute('aria-valuenow', '50');

        scrollPosition = 800;
        act(() => window.dispatchEvent(new window.Event('scroll')));
        expect(progress).toHaveAttribute('aria-valuenow', '100');
    });

    it('does not show the reading progress bar in editor previews', () => {
        render(
            <MemoryRouter>
                <BlogPostDetailView post={publicWeddingSeoPosts[0]} preview />
            </MemoryRouter>,
        );

        expect(screen.queryByRole('progressbar', { name: 'Article reading progress' })).not.toBeInTheDocument();
    });

    it('shows descriptive image alt text without a reading-time label', () => {
        render(
            <MemoryRouter>
                <BlogPostDetailView post={publicWeddingSeoPosts[0]} />
            </MemoryRouter>,
        );

        expect(screen.getByRole('img', { name: 'Nigerian couple celebrating in traditional wedding attire' })).toBeInTheDocument();
        expect(screen.queryByText(/min read/i)).not.toBeInTheDocument();
    });
});
