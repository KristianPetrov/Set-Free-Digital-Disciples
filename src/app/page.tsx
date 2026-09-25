export const revalidate = 86400;
export const metadata = {
  title: "Websites that look like you",
  description:
    "I build and look after websites for churches, shops, and local businesses. Bold enough to stop someone. Clear enough that a first-time visitor knows what to do.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Set Free Digital Disciples | Websites that look like you",
    description:
      "Websites for churches, shops, and local businesses. Bold on the surface. Easy to understand the moment you land.",
    url: "/",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
  twitter: {
    title: "Set Free Digital Disciples | Websites that look like you",
    description:
      "Websites for churches, shops, and local businesses. Bold on the surface. Easy to understand the moment you land.",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
} as const;

// import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectShowcase from "@/components/ProjectShowcase";
import MatrixRain from "@/components/MatrixRain";
import Typewriter from "@/components/Typewriter";
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Set Free Digital Disciples</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05] glow-green glitch-strong">
              Websites that look like you.
              <span className="mt-2 block text-3xl md:text-5xl glow-cyan">Clear the second you land.</span>
            </h1>
            <p className="mt-5 max-w-prose text-base md:text-lg leading-relaxed text-foreground/90">
              I build and look after sites for churches, shops, and local businesses.
              The look stays bold. The words stay human. A stranger can tell what you do,
              and what to do next, without a tour.
            </p>
            <p className="relative mt-4 max-w-prose text-sm md:text-base font-medium text-primary">
              <Typewriter
                segments={[
                  { text: "From the block to the cloud. Still preaching — just in a language everybody gets." },
                ]}
                charDelayMs={18}
                charJitterMs={6}
                minCharDelayMs={8}
                showCaret={true}
                naturalPauses={true}
              />
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#work">See the live work</a>
              </Button>
              <CalButton variant="secondary">Book a free call</CalButton>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="secondary">Churches</Badge>
              <Badge variant="secondary">Shops</Badge>
              <Badge variant="secondary">Local businesses</Badge>
              <Badge variant="outline">I stay after launch</Badge>
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
        <section id="services" className="py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-yellow">What you actually get</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            You do not need to know how websites are built. You need one that feels like you and tells people what to do.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "A look that is yours",
                body: "Your photos, your words, your people. Not a template that could belong to anyone on the block.",
              },
              {
                title: "A next step nobody misses",
                body: "Call. Visit Sunday. Donate. Order. The button is obvious, and it says what it does.",
              },
              {
                title: "Someone who stays",
                body: "I do not vanish after launch. The sites below are live, and I still look after them.",
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
          <p className="mt-4 text-xs text-muted-foreground">
            For the curious: they load fast, show up on Google, and are built to last. The craft stays in the background so your people never have to think about it.
          </p>
        </section>

        <section id="work" className="scroll-mt-24 py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">Work that is live right now</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These are not mockups. I pulled the screens and photos from the sites themselves. Churches, a tow yard, a veteran mission, and shops I still maintain.
          </p>
          <div className="mt-6">
            <ProjectShowcase priorityFirst />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-green">How it goes</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "You talk. I listen.", body: "Tell me who you serve and what you want them to do. A call, a visit, a gift, an order." },
              { step: "02", title: "I build it in your voice.", body: "It should feel like walking into your place. A first-timer should get it in a few seconds." },
              { step: "03", title: "It goes live. I stay.", body: "We put it on the internet, then I keep it running. Questions later are part of the job." },
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
          <h2 className="text-3xl font-bold mb-4 glow-green">Got something that needs a front door?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell me what you do and who you want to reach. I’ll write back within a day with a time to talk. No tech quiz. No pitch deck.
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
