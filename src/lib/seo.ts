export const siteUrl = "https://setfreedigitaldisciples.com";

export const siteName = "Set Free Digital Disciples";

export const defaultTitle = "Web Design & Technical SEO";

export const siteUpdatedAt = "2026-09-29";
export const brandLogoUrl = `${siteUrl}/brand/icon-512.png`;
export const socialImageUrl = `${siteUrl}/opengraph-image`;

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export const defaultDescription =
  "Custom websites for businesses, ministries, and online shops. Bold design, clear messaging, fast Next.js development, and technical SEO. Guided by faith.";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const sameAs = [
  "https://www.facebook.com/profile.php?id=61579041676384",
  "https://www.instagram.com/kristianpetrov/",
  "https://x.com/kristianpeetrov",
];

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteName,
      url: siteUrl,
      email: "kristpetrov@setfreedigitaldisciples.com",
      telephone: "+1-949-331-4471",
      logo: { "@type": "ImageObject", url: brandLogoUrl, width: 512, height: 512 },
      image: `${siteUrl}/brand/set-free-logo-social.png`,
      sameAs,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Custom web design, development, and technical SEO",
      serviceType: ["Web design", "Web development", "Technical SEO"],
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description: defaultDescription,
      areaServed: "United States",
      provider: { "@id": organizationId },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Websites and technical SEO",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom web design and Next.js development",
              description: "Distinctive, fast websites with clear messaging and a responsive experience built around the people you serve.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO",
              description: "Clear metadata, canonical URLs, sitemaps, structured data, and internal links that help search engines understand each page.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Core Web Vitals and performance",
              description: "Static generation, optimized images, and self-hosted fonts so pages load fast and stay stable.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
  ],
};
