export const revalidate = 86400;

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Case Study: Set Free Anaheim",
  description: "How we shipped a Hood‑Sanctified & Scripted, high‑performance site for Set Free Anaheim to drive connection and outreach.",
  alternates: { canonical: "/work/set-free-anaheim" },
  openGraph: {
    title: "Case Study: Set Free Anaheim | Set Free Digital Disciples",
    description: "How we shipped a Hood‑Sanctified & Scripted, high‑performance site for Set Free Anaheim to drive connection and outreach.",
    url: "/work/set-free-anaheim",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
  twitter: {
    title: "Case Study: Set Free Anaheim | Set Free Digital Disciples",
    description: "How we shipped a Hood‑Sanctified & Scripted, high‑performance site for Set Free Anaheim to drive connection and outreach.",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
} as const;

export default function CaseStudySetFreeAnaheim() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Set Free Anaheim",
    url: "https://setfreeanaheim.com",
    publisher: {
      "@type": "Organization",
      name: "Set Free Digital Disciples",
    },
  } as const;
  return (
    <div className="content-layer mx-auto max-w-6xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/work" className="text-sm text-muted-foreground hover:text-primary">← Back to Work</Link>
      <header className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold glow-cyan">Set Free Anaheim</h1>
          <p className="mt-2 text-muted-foreground max-w-prose">
            Urban church and outreach hub in Anaheim, CA. We built a site that looks like the streets but runs like the cloud—fast, clear, conversion‑minded.
          </p>
          <div className="mt-3 flex gap-2">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="secondary">Vercel</Badge>
            <Badge variant="secondary">Local SEO</Badge>
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <a href="https://setfreeanaheim.com/" target="_blank" rel="noreferrer noopener">Visit site</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://maps.google.com/?q=1171%20N%20West%20St%2C%20Anaheim%2C%20CA%2092801%2C%20USA" target="_blank" rel="noreferrer noopener">Map</a>
          </Button>
        </div>
      </header>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 overflow-hidden bg-card/70 border-border/60">
          <CardContent className="p-0">
            <div className="relative h-64 md:h-80">
              <Image src="/SetFreeDigitalDisciplesPortal.png" alt="Set Free Anaheim hero" fill className="object-cover" />
              <div className="scanline-overlay" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/70 border-border/60">
          <CardContent className="p-6 text-sm text-muted-foreground space-y-2">
            <p>Goals: clarify gatherings and locations, highlight media, and make it effortless to contact or visit.</p>
            <p>Outcome: a bold, memorable look with clean IA and strong CTAs that translate visits into foot traffic.</p>
            <p>Performance: optimized images, modern Next.js routing, Vercel CDN.</p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <Card className="bg-card/70 border-border/60">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 glow-yellow">Highlights</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Schedule-first layout with multiple recurring gatherings</li>
              <li>Embedded media: YouTube stories and press features</li>
              <li>Action‑dense CTA clusters (map, call, email, socials)</li>
            <li>Hood‑Sanctified & Scripted styling aligned to culture and community</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card/70 border-border/60">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 glow-yellow">Stack</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Next.js App Router + TypeScript</li>
              <li>Tailwind CSS + shadcn/ui</li>
              <li>Vercel hosting + image optimization</li>
              <li>On‑page SEO + social share metadata</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold glow-green">Want something like this for your ministry or business?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Let’s ship a site that hits different—holy grit meets high tech.</p>
        <div className="mt-4 flex justify-center gap-3">
          <Button asChild>
            <a href="mailto:kristpetrov@setfreedigitaldisciples.com">Start a project</a>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/#services">Explore services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}