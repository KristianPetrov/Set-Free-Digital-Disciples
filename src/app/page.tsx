export const revalidate = 86400;
export const metadata = {
  title: { absolute: "Set Free Digital Disciples | Next.js Websites & Technical SEO" },
  description:
    "Next.js websites with technical SEO, Core Web Vitals, and schema markup. Churches, shops, and local businesses get pages that load fast, read clean, and rank.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Set Free Digital Disciples | Next.js Websites & Technical SEO",
    description:
      "Server-rendered Next.js sites with technical SEO, Core Web Vitals, and schema that matches the page.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples | Next.js Websites & Technical SEO",
    description:
      "Server-rendered Next.js sites with technical SEO, Core Web Vitals, and schema that matches the page.",
  },
} as const;

// import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectShowcase from "@/components/ProjectShowcase";
import MatrixRain from "@/components/MatrixRain";
import HeroGlitchMorph from "@/components/HeroGlitchMorph";
import CalButton from "@/components/CalButton";
import Link from "next/link";



export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />
      <main className="content-layer relative mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="pt-16 pb-16 grid md:grid-cols-2 items-center gap-8">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Next.js · Technical SEO · Core Web Vitals</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05] glow-green glitch-strong">
              Sites that rank.
              <span className="mt-2 block text-3xl md:text-5xl glow-cyan">Looks that hit.</span>
            </h1>
            <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-foreground/90">
              I build on Next.js and ship the signals Google actually uses. The page is rendered
              before the crawler asks. It loads fast. The title, the headings, and the schema all
              say the same thing. Then a real person knows whether to call, visit, donate, or buy.
            </p>
            <p className="mt-4 max-w-prose text-sm md:text-base font-medium text-primary">
              From the block to the cloud. Hood-sanctified craft. Search-engine sharp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#rank">Why they rank</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#work">See the live work</a>
              </Button>
              <CalButton variant="secondary">Book a free call</CalButton>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "JSON-LD", "Sitemaps"].map((item) => (
                <li key={item}>
                  <Badge variant="secondary">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-100 md:h-124 order-1 md:order-2 mb-6 md:mb-0 overflow-hidden rounded-xl">
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
        <section id="services" className="py-12">
          <div id="rank" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-yellow">Why these sites rank higher</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Rankings are not a trick. They are a fast page, a clear offer, and technical signals that all tell Google the same story.
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "The first byte is the page",
                body: "Next.js App Router renders the real HTML before anyone arrives. Googlebot is not staring at an empty JavaScript shell waiting for your name, your city, or your service to show up.",
              },
              {
                title: "Speed Google can measure",
                body: "next/image, next/font, and static generation keep the heavy work off the first paint. Faster Largest Contentful Paint. Less layout shift. Fewer people bouncing before the page even settles.",
              },
              {
                title: "Signals that agree",
                body: "One title. One canonical URL. Headings that match the search. A sitemap and robots.txt that point at the pages worth ranking. Duplicate thin URLs do not get a vote.",
              },
              {
                title: "Schema that matches the screen",
                body: "JSON-LD for the business, the service, and the website. Phone, email, and the offer are machine-readable, and they say the same thing a person reads above the fold.",
              },
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
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            The stack under it: Next.js App Router, React, TypeScript, Tailwind, Vercel, next/image, next/font, XML sitemaps, and schema.org. The look stays hood-sanctified. The crawl stays clean.
          </p>
        </section>

        <section id="work" className="scroll-mt-24 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">Work that is live right now</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Seven production sites. Same stack. Churches, a tow yard, a veteran mission, and shops I still maintain. The screenshots are from the live pages, not a pitch deck.
          </p>
          <div className="mt-6">
            <ProjectShowcase priorityFirst />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-green">How a site gets built</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "The offer", body: "Who you serve, what they search, and the one action the page has to earn. Call, visit, donate, or buy." },
              { step: "02", title: "The build", body: "Next.js, your look, the speed budget, and the SEO layer: titles, canonicals, schema, sitemap, internal links." },
              { step: "03", title: "The launch", body: "It goes live on Vercel. I watch the crawl, and I stay on the site after the first deploy." },
            ].map((item) => (
              <li key={item.step} className="rounded-xl border border-border/60 bg-card/60 p-5">
                <p className="font-mono text-xs text-primary">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Donate */}
        <section id="donate" className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">This ain’t about fancy websites. It’s about the Kingdom.</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Every dollar goes into telling the Gospel in a way the streets can actually hear. We ain’t polished. We are real, and the work is for people who need Jesus where they already are. If you want to sow into that, this is the door.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/donate">Donate &amp; Be Part of the Movement</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 glow-green">Pretty and invisible is a build problem.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell me who you serve and what you want them to do. I’ll write back within a day with a time to talk, and a straight read on what is holding the site back.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CalButton>Book a free call</CalButton>
            <Button asChild variant="secondary">
              <a href="mailto:kristpetrov@setfreedigitaldisciples.com">Email Krist</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="content-layer border-t border-border/60 mt-10 py-6 text-center text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Set Free Digital Disciples. Crafted with prayer and precision.
        </div>
        <div className="mt-1 flex items-center justify-center gap-3">
          <a className="hover:text-primary hover:underline underline-offset-4" href="mailto:kristpetrov@setfreedigitaldisciples.com">
            kristpetrov@setfreedigitaldisciples.com
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
