import { canonicalPathFor, isIndexableRoute, publicPages, SITE_URL } from './routes';

export interface SitemapBlogPost {
    id: number | string;
    slug?: string | null;
}

function escapeXml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export function buildSitemapXml(posts: SitemapBlogPost[]) {
    const paths = new Set(
        Object.keys(publicPages)
            .filter(isIndexableRoute)
            .map(canonicalPathFor),
    );
    for (const post of posts) {
        const slug = post.slug?.trim() || String(post.id);
        paths.add(canonicalPathFor(`/resources/blog/${encodeURIComponent(slug)}`));
    }

    const urls = Array.from(paths, (path) =>
        escapeXml(new URL(path, SITE_URL).toString()),
    );

    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
        '</urlset>',
    ].join('\n');
}
