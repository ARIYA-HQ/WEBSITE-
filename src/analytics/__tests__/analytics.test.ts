import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    getCookiePreferences,
    hasAnalyticsConsent,
    saveCookiePreferences,
    type CookiePreferences,
} from '../analytics';

describe('analytics consent', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('does not grant analytics consent without a saved preference', () => {
        expect(hasAnalyticsConsent()).toBe(false);
    });

    it('only enables analytics when the visitor explicitly opted in', () => {
        localStorage.setItem('cookie-preferences', JSON.stringify({
            essential: true,
            analytics: false,
            marketing: true,
            preferences: true,
        }));
        expect(hasAnalyticsConsent()).toBe(false);

        localStorage.setItem('cookie-preferences', JSON.stringify({
            essential: true,
            analytics: true,
            marketing: false,
            preferences: false,
        }));
        expect(hasAnalyticsConsent()).toBe(true);
    });

    it('treats malformed preference data as no consent', () => {
        const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
        localStorage.setItem('cookie-preferences', '{bad json');

        expect(getCookiePreferences()).toBeNull();
        expect(hasAnalyticsConsent()).toBe(false);
        error.mockRestore();
    });

    it('persists preferences and notifies the analytics tracker', () => {
        const listener = vi.fn();
        window.addEventListener('cookie-preferences-updated', listener);
        const preferences: CookiePreferences = {
            essential: true,
            analytics: false,
            marketing: false,
            preferences: false,
        };

        saveCookiePreferences(preferences);

        expect(getCookiePreferences()).toEqual(preferences);
        expect(listener).toHaveBeenCalledOnce();
        window.removeEventListener('cookie-preferences-updated', listener);
    });
});
