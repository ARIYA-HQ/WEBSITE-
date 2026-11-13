import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_DESCRIPTION, isIndexableRoute, publicPages, SITE_URL } from '../../seo/routes';

function setMeta(name: 'name' | 'property', key: string, value: string) {
    const matches = Array.from(
        document.head.querySelectorAll<HTMLMetaElement>(`meta[${name}="${key}"]`),
    );
    const meta = matches.shift() ?? document.createElement('meta');
    meta.setAttribute(name, key);
    meta.content = value;
    if (!meta.isConnected) document.head.appendChild(meta);
    matches.forEach((duplicate) => duplicate.remove());
}

function setCanonical(url: string | null) {
    const matches = Array.from(
        document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'),
    );
    const canonical = matches.shift();
    matches.forEach((duplicate) => duplicate.remove());

    if (!url) {
        canonical?.remove();
        return;
    }

    const link = canonical ?? document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    if (!link.isConnected) document.head.appendChild(link);
}

export default function RouteSEO() {
    const { pathname } = useLocation();
    const normalizedPath =
        pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    const page = publicPages[normalizedPath];
    const indexable = isIndexableRoute(normalizedPath);
    const title = page?.title ?? 'Page Not Found';
    const description = page?.description ?? DEFAULT_DESCRIPTION;
    const canonicalPath = normalizedPath || '/';
    const canonical = new URL(canonicalPath, SITE_URL).toString();

    useLayoutEffect(() => {
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
    }, [canonical, description, indexable, title]);

    return null;
}
