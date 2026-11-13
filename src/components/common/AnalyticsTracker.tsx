import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackSignupClick, updateAnalyticsConsent } from '../../analytics/analytics';

export default function AnalyticsTracker() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        trackPageView(pathname, search);
    }, [pathname, search]);

    useEffect(() => {
        const handleConsentChange = () => {
            updateAnalyticsConsent();
            trackPageView(window.location.pathname, window.location.search);
        };
        const handleClick = (event: MouseEvent) => {
            if (!(event.target instanceof Element)) return;
            const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
            if (!anchor) return;

            const destination = new URL(anchor.href, window.location.href);
            if (
                destination.origin === 'https://app.ariyahq.com' &&
                /^\/auth\/(?:signup|vendor-signup)\/?$/.test(destination.pathname)
            ) {
                trackSignupClick(destination.href);
            }
        };

        window.addEventListener('cookie-preferences-updated', handleConsentChange);
        document.addEventListener('click', handleClick);
        updateAnalyticsConsent();

        return () => {
            window.removeEventListener('cookie-preferences-updated', handleConsentChange);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return null;
}
