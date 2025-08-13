import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CalButton from "@/components/CalButton";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";

export default function SetFreeAnaheimShowcase() {
  return (
    <section id="work" className="py-16">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">
        {/* Banner image */}
        <div className="relative h-72 md:h-86 bg-black"></div>
          <Image
            src="/faith-works-showcase.png"
            alt="Faith Works showcase artwork"
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
              <Badge variant="secondary">Branding</Badge>
              <Badge variant="secondary">Design</Badge>
              <Badge variant="secondary">Artwork</Badge>
              <Badge variant="secondary">Neon‑Holy</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                      {/* Left: description */}
            <div className="space-y-4">
             <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
               <div className="absolute inset-0 -z-10 opacity-35">
                 <Image src="/god-father-phil.png" alt="" fill className="object-cover" />
               </div>
               <Image src="/set-free-anaheim-logo.png" alt="Set Free Anaheim" fill className="object-contain" />
             </div>
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
                <Link href="https://magichousesetfree.com/" target="_blank" rel="noreferrer noopener">
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
                                     sizes="(max-width: 768px) 50vw, 33vw"
                   images={[

                    { src: "/holy-hood.png", alt: "Design: Breaker of Chains graphic", caption: "Design: Holy but Hood" },
                    {src:"/holy-hood-congregation.png", alt: "Design: Holy Hood Congregation", caption: "Design: Holy Hood Congregation"},
                    {src:"/jesus-unconditional-love.png", alt: "Design: Jesus Unconditional Love", caption: "Design: Jesus Unconditional Love"},
                  ]}
                  showCaptions={true}
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
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[
                    {src:"/set-free-donations-screenshot.png", alt: "Design: Donations box", caption: "Design: Donations box"},
                  {src:"/set-free-phil-blocks-screenshot.png", alt: "Design: Phil blocks", caption: "Design: Image Carousel"},
                  ]}
                  showCaptions={true}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60 col-span-2">
              <CardContent className="p-0 relative h-40 md:h-56">
                {/* Carousel C: full sections */}
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={5500}
                  transitionMs={1100}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority={false}
                  images={[
                    { src: "/set-free-hero-section.png", alt: "Section: Home Hero", caption: "Hero section" },
                    {src:"/set-free-stories-section.png", alt: "Section: Stories", caption: "Stories section"},
                    { src: "/set-free-about-section.png", alt: "Section: About / Story", caption: "About section" },
                    { src: "/set-free-news-section.png", alt: "Section: News & Events", caption: "News & Events" },
                    { src: "/set-free-footer-section.png", alt: "Section: Testimonials & Contact", caption: "Testimonials & Contact" },
                  ]}
                  showCaptions={true}
                />
                <span className="scanline-overlay" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA bar */}
          <div className="border-t border-border/60 bg-black/30 p-6 flex flex-wrap gap-3 items-center justify-between">
            <p className="text-sm text-muted-foreground">Want results like this? Let’s ship something fast, holy, and high‑tech.</p>
            <div className="flex flex-wrap gap-3">
              <CalButton>Get a free consult</CalButton>
              <Button asChild variant="secondary">
                <Link href="mailto:petrovkristianpishka@gmail.com">Email</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="tel:9493314471">Call</Link>
              </Button>
            </div>
          </div>
      </section>
  );
}
