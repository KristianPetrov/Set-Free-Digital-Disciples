export const revalidate = 86400;

// import Image from "next/image";
import MatrixRain from "@/components/MatrixRain";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SetFreeAnaheimShowcase from "@/components/SetFreeAnaheimShowcase";
import Typewriter from "@/components/Typewriter";
import HeroGlitchMorph from "@/components/HeroGlitchMorph";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />

      <main className="content-layer relative mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="pt-20 pb-16 grid md:grid-cols-2 items-center gap-8">
          <div className="order-2 md:order-1">
            <div className="text-4xl md:text-6xl font-extrabold leading-tight neon-text matrix-flicker glitch-strong">
              <Typewriter
                segments={[
                  { text: "From The Block To The Cloud, ", className: "glow-green" },
                  { text: "I Deploy Thy Kingdom.", className: "block mt-1.5 md:mt-2 text-3xl md:text-5xl font-extrabold tracking-tight glow-cyan" },
                ]}
                charDelayMs={21}
                charJitterMs={9}
                minCharDelayMs={8}
                segmentDelayMs={260}
                segmentDelaysMs={[375]}
                showCaret={true}
                naturalPauses={true}
                spacePauseMs={14}
                punctuationPauseMs={55}
                newlinePauseMs={110}
              />
            </div>
            <p className="relative mt-3 text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-[var(--neon-green)] via-[var(--neon-cyan)] to-[var(--neon-green)] bg-clip-text text-transparent neon-text matrix-flicker matrix-shimmer glitch-strong">
              <span>Preaching the Kingdom in code only the soul can compile.</span>
              <span className="scanline-overlay rounded-sm" aria-hidden />
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose neon-text-body matrix-flicker-subtle">
              <Typewriter
                segments={[
                  {
                    text:
                      "These streets are my network, these skies my server farm. I preach in packets, drop miracles in megabytes, and commit salvation straight to the main branch of your soul. Next.js turns water to wine; Tailwind parts the Red Sea of bad design; SEO feeds the multitudes with loaves of clicks. I encrypt grace in the tongues of angels, debug demons in the dark web of the heart, and push eternal life to every open port. I am the Alpha commit and the Omega merge — and the repo has no end.",
                  },
                ]}
                charDelayMs={10}
                charJitterMs={5}
                minCharDelayMs={6}
                segmentDelayMs={0}
                showCaret={true}
                naturalPauses={true}
                spacePauseMs={12}
                punctuationPauseMs={45}
                newlinePauseMs={90}
              />
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
          <div className="relative h-100 md:h-124 order-1 md:order-2 mb-6 md:mb-0">
            <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,theme(colors.cyan.500/.25),theme(colors.green.500/.15),transparent_70%)] blur-2xl" />
            <HeroGlitchMorph
              imageA="/SetFreeDigitalDisciplesMatrix.png"
              imageB="/SetFreeDigitalDisciplesPortal.png"
              alt="Set Free Digital Disciples"
              transitionMs={1400}
              intervalMs={4000}
              glitchDurationMs={420}
              startOn="A"
              objectFitClass="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <span className="scanline-overlay" />
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
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="mailto:petrovkristianpishka@gmail.com">Email: petrovkristianpishka@gmail.com</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="tel:9493314471">Call: 949-331-4471</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://cal.com" target="_blank" rel="noreferrer noopener">Schedule call</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="content-layer border-t border-border/60 mt-10 py-6 text-center text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Set Free Digital Disciples. Crafted with prayer and precision.
        </div>
        <div className="mt-1 flex items-center justify-center gap-3">
          <a className="hover:text-primary hover:underline underline-offset-4" href="mailto:petrovkristianpishka@gmail.com">
            petrovkristianpishka@gmail.com
          </a>
          <span aria-hidden>•</span>
          <a className="hover:text-primary hover:underline underline-offset-4" href="tel:9493314471">
            949-331-4471
          </a>
        </div>
      </footer>
    </div>
  );
}
