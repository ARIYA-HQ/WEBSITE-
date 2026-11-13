const SITE_URL = 'https://ariyahq.com';

const PUBLIC_PATHS = [
    '/',
    '/product/overview',
    '/product/planning',
    '/product/ai-planning',
    '/product/marketplace',
    '/product/wishlist',
    '/product/finance',
    '/product/websites',
    '/product/studio-designs',
    '/solutions/agencies',
    '/solutions/vendors',
    '/solutions/enterprise',
    '/solutions/individuals',
    '/solutions/planners',
    '/resources/blog',
    '/resources/guides',
    '/resources/faq',
    '/resources/help-center',
    '/pricing',
    '/wedding-planning',
    '/wedding-budget',
    '/aso-ebi-in-nigeria',
    '/wedding-invitation-cards-nigeria',
    '/wedding-gift-registry-nigeria',
    '/wedding-wishlist',
    '/event-ticketing-nigeria',
    '/event-registration-nigeria',
    '/wedding-website',
    '/digital-wedding-invitations',
    '/wedding-rsvp-guest-management',
    '/wedding-vendors-nigeria',
    '/wedding-venues-nigeria',
    '/wedding-checklist-timeline',
    '/nigerian-traditional-wedding',
    '/yoruba-traditional-wedding',
    '/igbo-traditional-wedding',
    '/hausa-traditional-wedding',
    '/nigerian-wedding-engagement-list',
    '/about',
    '/ambassadors',
    '/contact',
    '/careers',
    '/legal/privacy',
    '/legal/terms',
];

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
    const paths = new Set(PUBLIC_PATHS);
    for (const post of posts) {
        const slug = post.slug?.trim() || String(post.id);
        paths.add(`/resources/blog/${encodeURIComponent(slug)}`);
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
