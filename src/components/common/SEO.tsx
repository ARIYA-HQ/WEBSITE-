import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image,
    article,
    canonical
}) => {
    const siteName = 'ÀRIYÁ';
    const defaultDescription = 'ÀRIYÁ is the all-in-one platform for modern event planning, marketplace management, and vendor collaboration.';
    const defaultImage = 'https://ariyahq.com/og-image.jpg'; // Placeholder for production URL

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
