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
    <main className="content-layer mx-auto max-w-7xl px-4 py-10 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Built for real people</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight glow-cyan md:text-5xl">The work</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Seven live websites, each made for a different audience. Explore real screens, the thinking behind each build, and how people use it.
      </p>
      <p className="mt-2 text-sm">
        <Link href="/#contact" className="text-primary underline-offset-4 hover:underline">
          Have a site in mind? Text or email and tell me what you need.
        </Link>
      </p>
      <div className="mt-8">
        <ProjectShowcase heading="h2" priorityFirst />
      </div>
    </main>
  );
}
