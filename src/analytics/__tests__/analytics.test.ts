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

    it('does not load third-party tags before non-essential consent', async () => {
        const { updateAnalyticsConsent } = await import('../analytics');

        expect(updateAnalyticsConsent()).toBe(false);
        expect(
            document.querySelector('script[data-tag-manager="GTM-5GD9STBD"]'),
        ).toBeNull();
    });

    it('loads the GTM container only after non-essential consent', () => {
        saveCookiePreferences({
            essential: true,
            analytics: true,
            marketing: false,
            preferences: false,
        });

        expect(
            document.querySelector<HTMLScriptElement>(
                'script[data-tag-manager="GTM-5GD9STBD"]',
            )?.src,
        ).toBe('https://www.googletagmanager.com/gtm.js?id=GTM-5GD9STBD');
        expect(window.dataLayer).toContainEqual([
            'consent',
            'update',
            {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
            },
        ]);
    });

    it('updates GTM consent when a visitor withdraws permission', () => {
        saveCookiePreferences({
            essential: true,
            analytics: false,
            marketing: false,
            preferences: false,
        });

        expect(window.dataLayer).toContainEqual([
            'consent',
            'update',
            {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
            },
        ]);
        expect(
            document.querySelectorAll('script[data-tag-manager="GTM-5GD9STBD"]'),
        ).toHaveLength(1);
    });
});
