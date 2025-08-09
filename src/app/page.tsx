export const revalidate = 86400;

import Image from "next/image";
import MatrixRain from "@/components/MatrixRain";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SetFreeAnaheimShowcase from "@/components/SetFreeAnaheimShowcase";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />

      <main className="content-layer relative mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="pt-20 pb-16 grid md:grid-cols-2 items-center gap-8">
          <div>
            <div className="relative h-24 w-[320px] md:h-36 md:w-[560px]">
              <Image src="/digital-disciples-text.png" alt="Set Free Digital Disciples" fill className="object-contain neon-glow" priority />
              <span className="scanline-overlay" />
            </div>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Kingdom code in the streets, clean commits in the cloud. Set Free Digital Disciples drops Next.js, Tailwind, and SEO like parables for the algorithm—turning clicks into conversions, and data into disciples.
              Tech sharp enough to cut chains, faith strong enough to break ’em. We code like it’s the Book of Acts—just with Wi‑Fi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Book a free strategy call</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#services">Explore services</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">Performance</Badge>
            </div>
          </div>
          <div className="relative h-100 md:h-124">
            <Image src="/SetFreeDigitalDisciplesMatrix.png" alt="Set Free Digital Disciples" fill className="object-contain drop-shadow-[0_0_40px_var(--neon-cyan)]" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 grid md:grid-cols-3 gap-6">
          {[
            { title: "Web Design", body: "Custom, blazing‑fast sites with a neon‑holy vibe and conversion‑first UX." },
            { title: "SEO Campaigns", body: "Technical SEO, content, and authority building to rank and bring the right traffic." },
            { title: "Performance + Analytics", body: "Lighthouse 95+, Core Web Vitals, and insights that guide Kingdom business growth." },
          ].map((s) => (
            <Card key={s.title} className="bg-card/70 border-border/60">
              <CardHeader>
                <CardTitle className="glow-yellow">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{s.body}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Showcase */}
        <SetFreeAnaheimShowcase />

        {/* Contact */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 glow-green">Ready to build something anointed and next‑level?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your mission. We’ll respond within 24 hours with next steps and a time for a call.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild>
              <a href="mailto:hello@setfreedigitaldisciples.com">Email us</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://cal.com" target="_blank" rel="noreferrer noopener">Schedule call</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="content-layer border-t border-border/60 mt-10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Set Free Digital Disciples. Crafted with prayer and precision.
      </footer>
    </div>
  );
}
