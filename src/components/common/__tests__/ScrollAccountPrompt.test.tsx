import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ScrollAccountPrompt from '../ScrollAccountPrompt';

const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;

describe('ScrollAccountPrompt', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.useRealTimers();
        Object.defineProperty(document.documentElement, 'scrollHeight', {
            configurable: true,
            value: 3000,
        });
        Object.defineProperty(window, 'innerHeight', {
            configurable: true,
            value: 800,
        });
        Object.defineProperty(window, 'scrollY', {
            configurable: true,
            value: 0,
        });
    });

    it('opens after meaningful scrolling and offers signup and login', async () => {
        render(<ScrollAccountPrompt />);

        Object.defineProperty(window, 'scrollY', { configurable: true, value: 1100 });
        fireEvent.scroll(window);

        expect(await screen.findByRole('dialog')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /create a free account/i }))
            .toHaveAttribute('href', 'https://app.ariyahq.com/auth/signup');
        expect(screen.getByRole('link', { name: /log in to your account/i }))
            .toHaveAttribute('href', 'https://app.ariyahq.com/auth/login');
    });

    it('opens after 45 seconds even if the visitor has not scrolled far', async () => {
        vi.useFakeTimers();
        render(<ScrollAccountPrompt />);

        await act(async () => {
            await vi.advanceTimersByTimeAsync(45_000);
        });

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('does not open again within seven days after being shown', async () => {
        vi.useFakeTimers();
        const now = Date.now();
        vi.setSystemTime(now);
        const { unmount } = render(<ScrollAccountPrompt />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(45_000);
        });
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        unmount();

        vi.setSystemTime(now + COOLDOWN_MS - 1);
        render(<ScrollAccountPrompt />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(45_000);
        });

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('can open again after the seven-day cooldown expires', async () => {
        vi.useFakeTimers();
        const now = Date.now();
        vi.setSystemTime(now);
        const { unmount } = render(<ScrollAccountPrompt />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(45_000);
        });
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        unmount();

        vi.setSystemTime(now + COOLDOWN_MS + 45_000);
        render(<ScrollAccountPrompt />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(45_000);
        });

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});
