import type { Metadata } from "next";
import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/lib/projects";
import { siteUrl, organizationId, serializeJsonLd } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Website Projects",
  description:
    "Live websites built for churches, nonprofits, local businesses, and online shops, with clear case studies and real project screens.",
  alternates: { canonical: "/work" },
  twitter: { card: "summary_large_image", title: "Website Projects | Set Free Digital Disciples", description: "Real website projects for churches, nonprofits, local businesses, and online shops." },
  openGraph: {
    type: "website",
    siteName: "Set Free Digital Disciples",
    title: "Live website projects | Set Free Digital Disciples",
    description:
      "Real website projects for churches, nonprofits, local businesses, and online shops.",
    url: "/work",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/work#webpage`,
    url: `${siteUrl}/work`,
    name: "Website Projects | Set Free Digital Disciples",
    description: "Live website projects with real screens and case studies.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": organizationId },
    mainEntity: {
      "@type": "ItemList",
      name: "Websites by Set Free Digital Disciples",
      itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${siteUrl}/work/${project.slug}`,
    })),
    },
  };

  return (
    <main id="main-content" tabIndex={-1} className="content-layer site-container work-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <Link href="/" className="back-link">← Back to Set Free</Link>
      <header className="section-heading">
        <div><p className="eyebrow">Websites with a reason to exist</p><h1>The work.<br /><span className="text-primary">Out in the world.</span></h1></div>
        <p>Seven real websites. Explore the design, the thinking, and the details that help each one serve its people.</p>
      </header>
      <div className="mt-8">
        <ProjectShowcase heading="h2" priorityFirst />
      </div>
    </main>
  );
}
