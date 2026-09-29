import type { Metadata } from "next";
import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/lib/projects";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "The work",
  description:
    "Live websites built for churches, nonprofits, local businesses, and online shops, with clear case studies and real project screens.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Live website projects | Set Free Digital Disciples",
    description:
      "Real website projects for churches, nonprofits, local businesses, and online shops.",
    url: "/work",
  },
};

export default function WorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Websites by Set Free Digital Disciples",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `https://setfreedigitaldisciples.com/work/${project.slug}`,
    })),
  };

  return (
    <main id="main-content" tabIndex={-1} className="content-layer site-container work-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
