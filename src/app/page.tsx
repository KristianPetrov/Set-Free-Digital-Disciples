import Image from "next/image";
import MatrixRain from "@/components/MatrixRain";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />

      <main className="content-layer relative mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="pt-20 pb-16 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="glow-green">Set Free</span>{" "}
              <span className="glow-cyan">Digital Disciples</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Godly but futuristic web design and SEO. We build high‑tech, high‑performance experiences that feel
              extra‑dimensional—holy street meets nerd‑core.
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
          <div className="relative h-72 md:h-96">
            <Image src="/logo.png" alt="Set Free Digital Disciples" fill className="object-contain drop-shadow-[0_0_40px_var(--neon-cyan)]" />
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

        {/* Work teaser */}
        <section id="work" className="py-12">
          <h2 className="text-2xl font-semibold mb-4 glow-cyan">Selected Work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/70 border-border/60">
              <CardHeader>
                <CardTitle>Set Free Anaheim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  A clean, fast ministry site built with Next.js and Tailwind, deployed to Vercel.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
                <div className="pt-2">
                  <Button asChild>
                    <a href="https://set-free-anaheim-set-free-digital-desciples.vercel.app/" target="_blank" rel="noreferrer noopener">
                      Visit site
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/60">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  More case studies are in production. Check back soon for fresh drops.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

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
