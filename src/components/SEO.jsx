import { useEffect } from 'react';

const SEO = ({ title, description, path = '/' }) => {
    const siteName = 'Covenant Terrains';
    const siteUrl = 'https://covenantterrains.com';
    const fullTitle = title === 'Home'
        ? `${siteName} — Building Wealth From The Ground Up`
        : `${title} | ${siteName}`;

    useEffect(() => {
        // Title
        document.title = fullTitle;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description;

        // Open Graph
        const ogTags = {
            'og:title': fullTitle,
            'og:description': description,
            'og:url': `${siteUrl}${path}`,
            'og:type': 'website',
            'og:site_name': siteName,
        };

        Object.entries(ogTags).forEach(([property, content]) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.content = content;
        });

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = `${siteUrl}${path}`;
    }, [fullTitle, description, path]);

    return null;
};

export default SEO;
