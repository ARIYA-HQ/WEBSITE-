import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isIndexableRoute, publicPages, SITE_URL } from '../src/seo/routes';
import { prerenderPageHtml } from '../src/seo/prerender';
import { faqs } from '../src/pages/resources/FAQPage';
import { weddingPlanningFaqs } from '../src/seo/wedding-planning-content';
import { weddingWebsiteFaqs } from '../src/seo/wedding-website-content';
import { weddingBudgetFaqs } from '../src/seo/wedding-budget-content';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const distDir = path.join(projectRoot, 'dist');
const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

function articleSchema(
    pathname: string,
    title: string,
    description: string,
    image: string,
) {
    const url = new URL(pathname, SITE_URL).toString();
    return {
        '@type': 'Article',
        headline: title,
        description,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        image: new URL(image, SITE_URL).toString(),
        author: { '@type': 'Organization', name: 'ÀRIYÁ', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'ÀRIYÁ', url: SITE_URL },
    };
}

const articleImages: Record<string, string> = {
    '/wedding-budget': '/images/nigerian-events/event-planner.jpg',
    '/wedding-vendors-nigeria': '/images/nigerian-events/event-planner.jpg',
    '/wedding-venues-nigeria': '/images/nigerian-events/wedding-couple-venue.jpg',
    '/wedding-checklist-timeline': '/images/nigerian-events/wedding-couple-walking.jpg',
    '/aso-ebi-in-nigeria': '/images/nigerian-events/pink-gele-celebration.jpg',
    '/wedding-invitation-cards-nigeria': '/images/nigerian-events/pink-gele-celebration.jpg',
    '/wedding-gift-registry-nigeria': '/images/nigerian-events/traditional-couple-reception.jpg',
    '/wedding-wishlist': '/images/nigerian-events/wedding-couple-reception.jpg',
    '/event-ticketing-nigeria': '/images/nigerian-events/event-planner.jpg',
    '/event-registration-nigeria': '/images/nigerian-events/event-planner.jpg',
};

for (const [pathname, metadata] of Object.entries(publicPages)) {
    if (!isIndexableRoute(pathname)) continue;

    const outputPath = pathname === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, pathname.slice(1), 'index.html');
    const structuredData = pathname === '/resources/faq'
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.flatMap(section => section.questions.map(question => ({
                '@type': 'Question',
                name: question.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: question.a,
                },
            }))),
        }
        : pathname === '/wedding-planning'
            ? {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: weddingPlanningFaqs.map(({ question, answer }) => ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                })),
            }
        : pathname === '/wedding-website'
            ? {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: weddingWebsiteFaqs.map(({ question, answer }) => ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                })),
            }
        : pathname === '/wedding-budget'
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Wedding Budget Nigeria', item: 'https://ariyahq.com/wedding-budget' },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        '/images/nigerian-events/event-planner.jpg',
                    ),
                    {
                        '@type': 'FAQPage',
                        mainEntity: weddingBudgetFaqs.map(({ question, answer }) => ({
                            '@type': 'Question',
                            name: question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: answer,
                            },
                        })),
                    },
                ],
            }
        : pathname === '/digital-wedding-invitations'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Digital Wedding Invitations', item: 'https://ariyahq.com/digital-wedding-invitations' },
                ],
            }
        : pathname === '/wedding-rsvp-guest-management'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Wedding RSVP and Guest Management', item: 'https://ariyahq.com/wedding-rsvp-guest-management' },
                ],
            }
        : pathname === '/wedding-vendors-nigeria'
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Wedding Vendors in Nigeria', item: 'https://ariyahq.com/wedding-vendors-nigeria' },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        '/images/nigerian-events/event-planner.jpg',
                    ),
                ],
            }
        : pathname === '/wedding-venues-nigeria'
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                            { '@type': 'ListItem', position: 2, name: 'Wedding Venues in Nigeria', item: `${SITE_URL}/wedding-venues-nigeria` },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        articleImages[pathname],
                    ),
                ],
            }
        : pathname === '/wedding-checklist-timeline'
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Wedding Checklist and Timeline', item: 'https://ariyahq.com/wedding-checklist-timeline' },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        '/images/nigerian-events/wedding-couple-walking.jpg',
                    ),
                ],
            }
        : pathname === '/aso-ebi-in-nigeria'
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                            { '@type': 'ListItem', position: 2, name: 'Nigerian Wedding Guides', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                            { '@type': 'ListItem', position: 3, name: 'Aso-Ebi in Nigeria', item: 'https://ariyahq.com/aso-ebi-in-nigeria' },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        '/images/nigerian-events/pink-gele-celebration.jpg',
                    ),
                ],
            }
        : pathname === '/nigerian-traditional-wedding'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Nigerian Traditional Wedding', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                ],
            }
        : pathname === '/yoruba-traditional-wedding'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Nigerian Traditional Wedding', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                    { '@type': 'ListItem', position: 3, name: 'Yoruba Traditional Wedding', item: 'https://ariyahq.com/yoruba-traditional-wedding' },
                ],
            }
        : pathname === '/igbo-traditional-wedding'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Nigerian Traditional Wedding', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                    { '@type': 'ListItem', position: 3, name: 'Igbo Traditional Wedding', item: 'https://ariyahq.com/igbo-traditional-wedding' },
                ],
            }
        : pathname === '/hausa-traditional-wedding'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Nigerian Traditional Wedding', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                    { '@type': 'ListItem', position: 3, name: 'Hausa Traditional Wedding', item: 'https://ariyahq.com/hausa-traditional-wedding' },
                ],
            }
        : pathname === '/nigerian-wedding-engagement-list'
            ? {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ariyahq.com/' },
                    { '@type': 'ListItem', position: 2, name: 'Nigerian Traditional Wedding', item: 'https://ariyahq.com/nigerian-traditional-wedding' },
                    { '@type': 'ListItem', position: 3, name: 'Wedding Engagement List', item: 'https://ariyahq.com/nigerian-wedding-engagement-list' },
                ],
            }
        : articleImages[pathname]
            ? {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
                            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/resources/guides` },
                            { '@type': 'ListItem', position: 3, name: metadata.title, item: new URL(pathname, SITE_URL).toString() },
                        ],
                    },
                    articleSchema(
                        pathname,
                        metadata.title,
                        metadata.description,
                        articleImages[pathname],
                    ),
                ],
            }
            : undefined;
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(
        outputPath,
        prerenderPageHtml(template, pathname, {
            ...metadata,
            image: articleImages[pathname],
            article: Boolean(articleImages[pathname]),
            structuredData,
        }),
    );
}

console.log(`Pre-rendered ${Object.keys(publicPages).filter(isIndexableRoute).length} indexable marketing routes.`);
