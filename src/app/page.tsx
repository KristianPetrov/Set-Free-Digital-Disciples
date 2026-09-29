export const revalidate = 86400;
export const metadata = {
  title: { absolute: "Set Free Digital Disciples | Purpose-built Websites & Technical SEO" },
  description:
    "Faith-rooted Next.js websites and technical SEO for churches, local businesses, and purpose-led brands. Fast, clear experiences built around the people you serve.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Set Free Digital Disciples | Purpose-built Websites & Technical SEO",
    description:
      "Custom websites with clear messaging, technical SEO, and the speed people expect.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples | Purpose-built Websites & Technical SEO",
    description:
      "Custom websites with clear messaging, technical SEO, and the speed people expect.",
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
import ContactActions from "@/components/ContactActions";
import { contactEmail, contactPhoneDisplay, emailHref, textToScheduleHref } from "@/lib/contact";
import Link from "next/link";



export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />
      <main className="content-layer relative mx-auto max-w-7xl px-4">
        {/* Hero */}
        <section className="grid items-center gap-5 py-8 sm:gap-7 md:grid-cols-2 md:gap-10 md:py-12">
          <div className="order-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Faith-rooted design · Next.js · Technical SEO</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05] glow-green glitch-strong">
              Sites that rank.
              <span className="mt-2 block text-3xl md:text-5xl glow-cyan">Looks that hit.</span>
            </h1>
            <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-foreground/90">
              Fast, clear websites for churches, local businesses, and brands with a purpose. I use
              Next.js and technical SEO to help people find you, understand what you offer, and take
              the next step.
            </p>
            <p className="mt-4 max-w-prose text-sm md:text-base font-medium text-primary">
              From the block to the cloud. Faith at the center. Built for real people.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#rank">How it works</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#work">See the live work</a>
              </Button>
              <ContactActions textVariant="secondary" emailVariant="secondary" />
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              {["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "JSON-LD", "Sitemaps"].map((item) => (
                <li key={item}>
                  <Badge variant="secondary">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-2 h-48 overflow-hidden rounded-xl sm:h-64 md:h-[26rem]">
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

        {/* Work */}
        <section id="work" className="scroll-mt-24 py-10 md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Real sites. Real people.</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight glow-cyan md:text-4xl">Built with purpose. Ready for the real world.</h2>
            <p className="mt-3 text-muted-foreground">
              Seven live websites, each shaped around the people it serves—from churches and nonprofits to local businesses and online shops.
            </p>
          </div>
          <div className="mt-6">
            <ProjectShowcase priorityFirst />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 py-10 md:py-14">
          <div id="rank" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">The craft behind the screen</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight glow-yellow">Easy to find. Easy to use. Built to last.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Strong websites make sense to people first, then give search engines the clear signals they need.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Search can understand it",
                body: "Clear titles, headings, and structured data explain each page to people and Google. Under the hood: Next.js rendering, canonical URLs, schema.org, and XML sitemaps.",
              },
              {
                title: "Fast from the first tap",
                body: "A quick page feels better to use. Optimized images, responsive layouts, and Core Web Vitals help keep the experience smooth on phones and desktops.",
              },
              {
                title: "A clear next step",
                body: "Visitors should know whether to call, visit, donate, or buy. Each page puts the useful details up front and makes the next move simple.",
              },
            ].map((s) => (
              <Card key={s.title} className="site-panel border-white/10 bg-card/70">
                <CardHeader>
                  <CardTitle className="text-xl glow-yellow">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            The stack: React, TypeScript, Tailwind, Vercel, optimized images, structured data, and XML sitemaps. The goal is simple—make every page easier to find and use.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-green">From first conversation to launch</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Get clear on the goal", body: "Who you serve, what they need, and the one next step your website should make easy." },
              { step: "02", title: "Design and build", body: "Your look and content, brought together with Next.js, technical SEO, and a mobile-first experience." },
              { step: "03", title: "Launch and keep moving", body: "The site goes live, search signals get watched, and I stay available as your work grows." },
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
        <section id="donate" className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Faith guides the work</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">Technology in service of something bigger.</h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Set Free Digital Disciples uses technology to serve people and share the hope of Jesus where it is needed most. If you believe in that mission, your gift helps carry it further.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/donate">Support the mission</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 glow-green">Need a website that works harder?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell me who you serve, what your website needs to do, and what is getting in the way. I’ll reply within a day with a clear next step.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ContactActions />
          </div>
        </section>
      </main>

      <footer className="content-layer border-t border-border/60 mt-10 py-6 text-center text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Set Free Digital Disciples. Crafted with prayer and precision.
        </div>
        <div className="mt-1 flex items-center justify-center gap-3">
          <a className="hover:text-primary hover:underline underline-offset-4" href={emailHref}>
            {contactEmail}
          </a>
          <span aria-hidden>•</span>
          <a className="hover:text-primary hover:underline underline-offset-4" href={textToScheduleHref}>
            Text {contactPhoneDisplay}
          </a>
        </div>
      </footer>
    </div>
  );
}
