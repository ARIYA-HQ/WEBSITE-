import { describe, expect, it } from 'vitest';
import { prerenderPageHtml } from '../prerender';

const template = `<!doctype html><html><head>
<title>Ariya | Event Planning Redefined</title>
<meta name="description" content="default description">
<meta name="robots" content="index, follow">
<meta property="og:title" content="default title">
<meta property="og:description" content="default description">
<meta name="twitter:title" content="default title">
<meta name="twitter:description" content="default description">
</head><body><div id="root"></div></body></html>`;

describe('prerenderPageHtml', () => {
    it('sets route-specific metadata and canonical URL in the initial HTML', () => {
        const html = prerenderPageHtml(template, '/product/planning', {
            title: 'Planning & Budgets',
            description: 'Plan events with AriyaHQ.',
        });

        expect(html).toContain('<title>Planning &amp; Budgets | ÀRIYÁ</title>');
        expect(html).toContain('name="description" content="Plan events with AriyaHQ."');
        expect(html).toContain('property="og:url" content="https://ariyahq.com/product/planning"');
        expect(html).toContain('name="robots" content="index, follow"');
        expect(html).toContain('<link rel="canonical" href="https://ariyahq.com/product/planning">');
    });

    it('escapes metadata values before writing them into HTML attributes', () => {
        const html = prerenderPageHtml(template, '/about', {
            title: 'A "special" <page>',
            description: 'A & B',
        });

        expect(html).toContain('content="A &amp; B"');
        expect(html).toContain('A &quot;special&quot; &lt;page&gt; | ÀRIYÁ');
    });

    it('renders article social metadata, structured data and noindex missing pages', () => {
        const articleHtml = prerenderPageHtml(template, '/resources/blog/example', {
            title: 'Example article',
            description: 'Article summary',
            image: '/article.jpg',
            article: true,
            structuredData: { '@type': 'Article', headline: 'Example article' },
        });
        expect(articleHtml).toContain('property="og:type" content="article"');
        expect(articleHtml).toContain('property="og:image" content="https://ariyahq.com/article.jpg"');
        expect(articleHtml).toContain('<script type="application/ld+json">{"@type":"Article","headline":"Example article"}</script>');

        const missingHtml = prerenderPageHtml(template, '/resources/blog/missing', {
            title: 'Article Not Found',
            description: 'Missing article',
            robots: 'noindex, nofollow',
            canonical: false,
        });
        expect(missingHtml).toContain('name="robots" content="noindex, nofollow"');
        expect(missingHtml).not.toContain('rel="canonical"');
    });
});
