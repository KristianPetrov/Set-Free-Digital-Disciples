export const siteUrl = "https://setfreedigitaldisciples.com";

export const siteName = "Set Free Digital Disciples";

export const defaultTitle = "Purpose-built Websites & Technical SEO";

export const defaultDescription =
  "Faith-rooted Next.js websites and technical SEO for churches, local businesses, and purpose-led brands. Fast, clear experiences built around the people you serve.";

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const sameAs = [
  "https://www.facebook.com/profile.php?id=61579041676384",
  "https://www.instagram.com/kristianpetrov/",
  "https://x.com/kristianpeetrov?s=21",
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
      logo: `${siteUrl}/apple-icon`,
      sameAs,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description: defaultDescription,
      telephone: "+1-949-331-4471",
      email: "kristpetrov@setfreedigitaldisciples.com",
      areaServed: "United States",
      provider: { "@id": organizationId },
      knowsAbout: [
        "Next.js",
        "Technical SEO",
        "Core Web Vitals",
        "Local SEO",
        "Schema.org structured data",
        "Web design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Websites and technical SEO",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Next.js websites",
              description: "Server-rendered sites with a look that matches the business and a first screen that tells people what to do.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO",
              description: "Titles, canonicals, sitemaps, robots rules, internal links, and on-page structure built so Google is not guessing.",
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
