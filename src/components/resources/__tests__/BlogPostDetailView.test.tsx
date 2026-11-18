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

    it('shows descriptive image alt text and the reading-time label', () => {
        render(
            <MemoryRouter>
                <BlogPostDetailView post={publicWeddingSeoPosts[0]} />
            </MemoryRouter>,
        );

        expect(screen.getByRole('img', { name: 'Nigerian couple celebrating in traditional wedding attire' })).toBeInTheDocument();
        expect(screen.getByText(publicWeddingSeoPosts[0].readTime)).toBeInTheDocument();
    });

    it('shows a linked table of contents for long articles', () => {
        const post = {
            ...publicWeddingSeoPosts[0],
            content: Array.from({ length: 5 }, (_, index) =>
                `<h2>Section ${index + 1}</h2><p>${'Useful article text. '.repeat(220)}</p>`,
            ).join(''),
        };
        render(
            <MemoryRouter>
                <BlogPostDetailView post={post} />
            </MemoryRouter>,
        );

        expect(screen.getByRole('navigation', { name: 'Table of contents' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Section 1' })).toHaveAttribute('href', '#article-section-1');
        expect(document.getElementById('article-section-1')).toBeInTheDocument();
    });

    it('provides working social share links', () => {
        render(
            <MemoryRouter>
                <BlogPostDetailView post={publicWeddingSeoPosts[0]} />
            </MemoryRouter>,
        );

        expect(screen.getByRole('link', { name: 'Share on X' })).toHaveAttribute('href', expect.stringContaining('twitter.com/intent/tweet'));
        expect(screen.getByRole('link', { name: 'Share on Facebook' })).toHaveAttribute('href', expect.stringContaining('facebook.com/sharer'));
        expect(screen.getByRole('link', { name: 'Share on LinkedIn' })).toHaveAttribute('href', expect.stringContaining('linkedin.com/sharing'));
        expect(screen.getByRole('button', { name: 'Copy article link' })).toBeInTheDocument();
    });
});
