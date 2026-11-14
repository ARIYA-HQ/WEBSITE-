import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    canonicalPathFor,
    DEFAULT_DESCRIPTION,
    isIndexableRoute,
    publicPages,
    SITE_URL,
} from '../../seo/routes';
import { setCanonical, setMeta } from '../../seo/domMetadata';

export default function RouteSEO() {
    const { pathname } = useLocation();
    const normalizedPath =
        pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const page = publicPages[normalizedPath];
    const pageOwnsSeo = /^\/resources\/blog\/[^/]+$/.test(normalizedPath);
    const indexable = isIndexableRoute(normalizedPath);
    const title = page?.title ?? 'Page Not Found';
    const description = page?.description ?? DEFAULT_DESCRIPTION;
    const canonicalPath = canonicalPathFor(normalizedPath || '/');
    const canonical = new URL(canonicalPath, SITE_URL).toString();

    useLayoutEffect(() => {
        if (pageOwnsSeo) {
            setMeta('name', 'robots', 'index, follow');
            setCanonical(null);
            document.head.querySelectorAll('meta[property="og:url"]')
                .forEach((meta) => meta.remove());
            return;
        }

        const fullTitle = `${title} | ÀRIYÁ`;
        document.title = fullTitle;
        setMeta('name', 'description', description);
        setMeta('name', 'robots', indexable ? 'index, follow' : 'noindex, nofollow');
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('name', 'twitter:title', fullTitle);
        setMeta('name', 'twitter:description', description);
        if (indexable) {
            setCanonical(canonical);
            setMeta('property', 'og:url', canonical);
        } else {
            setCanonical(null);
            document.head.querySelector('meta[property="og:url"]')?.remove();
        }
    }, [canonical, description, indexable, pageOwnsSeo, title]);

    return null;
}
