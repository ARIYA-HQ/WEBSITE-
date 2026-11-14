import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { setCanonical, setMeta } from '../../seo/domMetadata';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    canonical?: string;
    robots?: string;
    structuredData?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image,
    article,
    canonical,
    robots,
    structuredData
}) => {
    const siteName = 'ÀRIYÁ';
    const defaultDescription = 'ÀRIYÁ is the all-in-one platform for modern event planning, marketplace management, and vendor collaboration.';
    const defaultImage = 'https://ariyahq.com/og-image.jpg'; // public/og-image.jpg

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;

    useLayoutEffect(() => {
        document.title = fullTitle;
        setMeta('name', 'description', metaDescription);
        setMeta('property', 'og:type', article ? 'article' : 'website');
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', metaDescription);
        setMeta('property', 'og:image', metaImage);
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', fullTitle);
        setMeta('name', 'twitter:description', metaDescription);
        setMeta('name', 'twitter:image', metaImage);

        if (robots) setMeta('name', 'robots', robots);
        if (canonical) {
            setCanonical(canonical);
            setMeta('property', 'og:url', canonical);
        }

        const structuredDataElement = document.head.querySelector<HTMLScriptElement>(
            'script[data-ariya-seo-jsonld]',
        );
        if (structuredData) {
            const script = structuredDataElement ?? document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-ariya-seo-jsonld', '');
            script.textContent = JSON.stringify(structuredData).replace(/</g, '\\u003c');
            if (!script.isConnected) document.head.appendChild(script);
        } else {
            structuredDataElement?.remove();
        }
    }, [article, canonical, fullTitle, metaDescription, metaImage, robots, structuredData]);

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {canonical && <link rel="canonical" href={canonical} />}
            {robots && <meta name="robots" content={robots} />}
            {structuredData && (
                <script type="application/ld+json" data-ariya-seo-jsonld="">
                    {JSON.stringify(structuredData).replace(/</g, '\\u003c')}
                </script>
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            {canonical && <meta property="og:url" content={canonical} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
