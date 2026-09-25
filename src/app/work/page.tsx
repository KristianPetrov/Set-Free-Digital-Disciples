import type { Metadata } from "next";
import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/lib/projects";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "The work",
  description:
    "Live websites I built and still look after. Churches, shops, a tow yard, and a veteran mission — shown with the real screens and photos.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "The work | Set Free Digital Disciples",
    description:
      "Live websites I built and still look after, with the real screens and photos from each one.",
    url: "/work",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
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
    <main className="content-layer mx-auto max-w-6xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Live sites</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight glow-cyan md:text-5xl">The work</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Seven sites I built and still look after. The screenshots and photos are from the live pages, so you are seeing the real thing.
      </p>
      <p className="mt-2 text-sm">
        <Link href="/#contact" className="text-primary underline-offset-4 hover:underline">
          Want one of your own? Start with a call.
        </Link>
      </p>
      <div className="mt-8">
        <ProjectShowcase heading="h2" priorityFirst />
      </div>
    </main>
  );
}
