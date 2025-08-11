export const revalidate = 86400;

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Work | Set Free Digital Disciples",
  description: "Selected projects and case studies crafted with neon‑holy precision.",
  openGraph: {
    title: "Work | Set Free Digital Disciples",
    description: "Selected projects and case studies crafted with neon‑holy precision.",
    images: [
      { url: "/futuristic-jesus-portal-og.png", width: 1200, height: 630, alt: "Set Free Digital Disciples Matrix" },
    ],
  },
  twitter: {
    title: "Work | Set Free Digital Disciples",
    description: "Selected projects and case studies crafted with neon‑holy precision.",
    images: [
      { url: "/futuristic-jesus-portal-og.png", width: 1200, height: 630, alt: "Set Free Digital Disciples Matrix" },
    ],
  },
};

export default function WorkPage() {
  return (
    <div className="content-layer mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold glow-cyan">Work</h1>
      <p className="mt-2 text-muted-foreground max-w-prose">
        A growing collection of holy‑hood, high‑tech builds. Clean commits, kingdom outcomes.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Link href="/work/set-free-anaheim" className="group">
          <Card className="overflow-hidden bg-card/70 border-border/60 transition hover:border-primary/60 hover:shadow-[0_0_30px_var(--neon-cyan)/40]">
            <div className="relative h-44">
              <Image src="/SetFreeDigitalDisciplesPortal.png" alt="Set Free Anaheim" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Set Free Anaheim</span>
                <div className="hidden md:flex gap-1">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="secondary">SEO</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Urban church and outreach site focused on schedule, stories, and connection.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}