export interface CookiePreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
}

type GtagArguments = [command: string, ...arguments_: unknown[]];

declare global {
    interface Window {
        dataLayer?: GtagArguments[];
        gtag?: (...arguments_: GtagArguments) => void;
    }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;
let configuredMeasurementId: string | null = null;

export function getCookiePreferences(): Partial<CookiePreferences> | null {
    const stored = localStorage.getItem('cookie-preferences');
    if (!stored) return null;

    try {
        const parsed: unknown = JSON.parse(stored);
        if (!parsed || typeof parsed !== 'object') {
            throw new Error('Stored cookie preferences must be an object');
        }
        const preferences: Partial<CookiePreferences> = {};
        if ('essential' in parsed && typeof parsed.essential === 'boolean') {
            preferences.essential = parsed.essential;
        }
        if ('analytics' in parsed && typeof parsed.analytics === 'boolean') {
            preferences.analytics = parsed.analytics;
        }
        if ('marketing' in parsed && typeof parsed.marketing === 'boolean') {
            preferences.marketing = parsed.marketing;
        }
        if ('preferences' in parsed && typeof parsed.preferences === 'boolean') {
            preferences.preferences = parsed.preferences;
        }
        return preferences;
    } catch (error) {
        console.error('Unable to read cookie preferences:', error);
        return null;
    }
}

export function hasAnalyticsConsent() {
    return getCookiePreferences()?.analytics === true;
}

function getGtag() {
    if (!window.gtag) {
        window.dataLayer = window.dataLayer ?? [];
        window.gtag = (...arguments_: GtagArguments) => {
            window.dataLayer?.push(arguments_);
        };
    }
    return window.gtag;
}

export function updateAnalyticsConsent() {
    if (typeof window === 'undefined' || !MEASUREMENT_ID || !GA_ID_PATTERN.test(MEASUREMENT_ID)) {
        return false;
    }

    const hasConsent = hasAnalyticsConsent();
    if (!hasConsent && !configuredMeasurementId) return false;

    const gtag = getGtag();
    if (!configuredMeasurementId) {
        gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        });
        gtag('js', new Date());
        gtag('config', MEASUREMENT_ID, { send_page_view: false });

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
        script.dataset.analytics = 'ga4';
        document.head.appendChild(script);
        configuredMeasurementId = MEASUREMENT_ID;
    }

    gtag('consent', 'update', {
        analytics_storage: hasConsent ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
    });
    return hasConsent;
}

export function saveCookiePreferences(preferences: CookiePreferences) {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    updateAnalyticsConsent();
    window.dispatchEvent(new Event('cookie-preferences-updated'));
}

export function trackPageView(pathname: string, search: string) {
    if (!updateAnalyticsConsent() || !window.gtag) return;
    window.gtag('event', 'page_view', {
        page_location: `${window.location.origin}${pathname}${search}`,
        page_path: `${pathname}${search}`,
        page_title: document.title,
    });
}

export function trackConversion(
    eventName: 'sign_up' | 'generate_lead',
    parameters: Record<string, string>,
) {
    if (!updateAnalyticsConsent() || !window.gtag) return;
    window.gtag('event', eventName, parameters);
}

export function trackEvent(eventName: string, parameters: Record<string, string>) {
    if (!updateAnalyticsConsent() || !window.gtag) return;
    window.gtag('event', eventName, parameters);
}

export function trackSignupClick(destination: string) {
    if (!updateAnalyticsConsent() || !window.gtag) return;
    const path = new URL(destination, window.location.href).pathname;
    window.gtag('event', 'sign_up_start', {
        method: path.includes('vendor-signup') ? 'vendor' : 'planner',
        destination: path,
    });
}
