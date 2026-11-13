import { SITE_URL } from './routes';

function escapeAttribute(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function setMeta(
    html: string,
    selector: 'name' | 'property',
    key: string,
    content: string,
) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(
        `<meta\\b(?=[^>]*\\b${selector}=["']${escapedKey}["'])[^>]*>`,
        'i',
    );
    const tag = `<meta ${selector}="${key}" content="${escapeAttribute(content)}">`;
    return pattern.test(html)
        ? html.replace(pattern, tag)
        : html.replace('</head>', `    ${tag}\n  </head>`);
}

export function prerenderPageHtml(
    template: string,
    pathname: string,
    metadata: {
        title: string;
        description: string;
        image?: string;
        robots?: string;
        canonical?: boolean;
        article?: boolean;
        structuredData?: Record<string, unknown>;
    },
) {
    const title = `${metadata.title} | ÀRIYÁ`;
    const canonical = new URL(pathname, SITE_URL).toString();
    let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(title)}</title>`);

    html = setMeta(html, 'name', 'description', metadata.description);
    html = setMeta(html, 'name', 'robots', metadata.robots ?? 'index, follow');
    html = setMeta(html, 'property', 'og:type', metadata.article ? 'article' : 'website');
    html = setMeta(html, 'property', 'og:title', title);
    html = setMeta(html, 'property', 'og:description', metadata.description);
    html = setMeta(html, 'name', 'twitter:title', title);
    html = setMeta(html, 'name', 'twitter:description', metadata.description);
    if (metadata.image) {
        const image = new URL(metadata.image, SITE_URL).toString();
        html = setMeta(html, 'property', 'og:image', image);
        html = setMeta(html, 'name', 'twitter:image', image);
    }

    const canonicalPattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i;
    if (metadata.canonical === false) {
        html = html.replace(canonicalPattern, '');
    } else {
        html = setMeta(html, 'property', 'og:url', canonical);
        const canonicalTag = `<link rel="canonical" href="${escapeAttribute(canonical)}">`;
        html = canonicalPattern.test(html)
            ? html.replace(canonicalPattern, canonicalTag)
            : html.replace('</head>', `    ${canonicalTag}\n  </head>`);
    }

    if (metadata.structuredData) {
        const structuredData = JSON.stringify(metadata.structuredData).replace(/</g, '\\u003c');
        html = html.replace(
            '</head>',
            `    <script type="application/ld+json">${structuredData}</script>\n  </head>`,
        );
    }

    return html;
}
