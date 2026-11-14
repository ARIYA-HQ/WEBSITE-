export function setMeta(name: 'name' | 'property', key: string, value: string) {
    const matches = Array.from(
        document.head.querySelectorAll<HTMLMetaElement>(`meta[${name}="${key}"]`),
    );
    const meta = matches.shift() ?? document.createElement('meta');
    meta.setAttribute(name, key);
    meta.content = value;
    if (!meta.isConnected) document.head.appendChild(meta);
    matches.forEach((duplicate) => duplicate.remove());
}

export function setCanonical(url: string | null) {
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
