import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";

export default function SetFreeAnaheimShowcase() {
  return (
    <section id="work" className="py-16">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">
        {/* Banner image */}
        <div className="relative h-64 md:h-80 bg-black">
          <Image
            src="/digital-disciples-tron-matrix.png"
            alt="Set Free Anaheim highlight"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/0" />
          <div className="absolute bottom-4 left-4 right-4 md:left-8 md:bottom-6 flex flex-wrap items-end gap-3">
            {/* <div className="relative h-10 w-[240px] md:h-12 md:w-[320px]">
              <Image src="/digital-disciples-text.png" alt="Set Free Digital Disciples" fill className="object-contain" />
            </div> */}
            <div className="ml-auto flex gap-2">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">Vercel</Badge>
              <Badge variant="secondary">Local SEO</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: description */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold glow-cyan">Set Free Anaheim — the Magic House</h2>
            <p className="text-muted-foreground">
              Designed and built a fast, punchy site that captures Set Free Anaheim’s voice and drives action.
              I delivered custom branding assets, a modern component system, and high‑impact sections that
              convert from search and social.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li><strong>Brand & visuals</strong>: custom logo lockups and digital designs for social and print</li>
              <li><strong>Reusable components</strong>: donations box, CTA blocks, media carousel, events calendar</li>
              <li><strong>Site sections</strong>: Hero, About/Story, News & Events, Testimonials, Contact</li>
              <li><strong>Performance & SEO</strong>: image optimization, Core Web Vitals, Local SEO structure</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <Link href="https://set-free-anaheim-set-free-digital-desciples.vercel.app/" target="_blank" rel="noreferrer noopener">
                  Visit site
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link
                 href="https://maps.google.com/?q=1171%20N%20West%20St%2C%20Anaheim%2C%20CA%2092801%2C%20USA" target="_blank" rel="noreferrer noopener">
                  Map & directions
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="tel:714-400-4573">Call</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="mailto:setfreephil@aol.com">Email</Link>
              </Button>
            </div>
          </div>

          {/* Right: video thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                {/* Carousel A: branding & digital designs */}
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={3200}
                  transitionMs={900}
                  preferFadeOnMobile={true}
                  showDots={true}
                  images={[
                    { src: "/set-free-anaheim-logo.png", alt: "Branding: Set Free Anaheim logo" },
                    { src: "/breaker-of-chains.png", alt: "Design: Breaker of Chains graphic" },
                    { src: "/set-free-gangster-but-holy.png", alt: "Design: Gangster but Holy" },
                  ]}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                {/* Carousel B: functional components (screenshots) */}
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={4200}
                  transitionMs={800}
                  preferFadeOnMobile={true}
                  showDots={true}
                  images={[
                    { src: "/set-free-song-church-screenshot.png", alt: "Component: events calendar & schedule" },
                    { src: "/set-free-sunday-phil-screenshot.png", alt: "Component: testimonial / CTA block" },
                    { src: "/set-free-sandra-fieldy-phil-screenshot.png", alt: "Component: media carousel / story" },
                  ]}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60 col-span-2">
              <CardContent className="p-0 relative h-40 md:h-56">
                {/* Carousel C: full sections */}
                <AutoCarousel
                  objectFitClass="object-cover"
                  intervalMs={5500}
                  transitionMs={1100}
                  preferFadeOnMobile={true}
                  showDots={true}
                  images={[
                    { src: "/set-free-hero-screenshot.png", alt: "Section: Home Hero" },
                    { src: "/set-free-sandra-fieldy-phil-screenshot.png", alt: "Section: About / Story" },
                    { src: "/set-free-song-church-screenshot.png", alt: "Section: News & Events" },
                    { src: "/set-free-sunday-phil-screenshot.png", alt: "Section: Testimonials & Contact" },
                  ]}
                />
                <span className="scanline-overlay" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA bar */}
        <div className="border-t border-border/60 bg-black/30 p-6 flex flex-wrap gap-3 items-center justify-between">
          <p className="text-sm text-muted-foreground">Want results like this? Let’s ship something fast, holy, and high‑tech.</p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="#contact">Get a free consult</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#services">See services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
