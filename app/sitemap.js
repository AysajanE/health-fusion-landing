const SITE_URL = "https://healthfusion360.ai";

export default function sitemap() {
    const lastModified = new Date();

    return [
        {
            url: SITE_URL,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${SITE_URL}/terms-conditions`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
