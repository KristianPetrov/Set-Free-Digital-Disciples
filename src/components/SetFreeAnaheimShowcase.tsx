import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CalButton from "@/components/CalButton";

export default function SetFreeAnaheimShowcase() {
  return (
    <section id="work" className="py-16">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">

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
              <CalButton>Book a free strategy call</CalButton>
              <Button asChild variant="secondary">
                <Link
                 href="https://maps.google.com/?q=1171%20N%20West%20St%2C%20Anaheim%2C%20CA%2092801%2C%20USA" target="_blank" rel="noreferrer noopener">
                  Map & directions
                </Link>
              </Button>
              <CalButton variant="secondary">Schedule consult</CalButton>
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
                    {src:"/tristin-upper-room-candle-logo.png", alt: "Logo: Upper Room", caption: "Logo: Upper Room"},
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
                  {src:"/prayer-wall-prayers-section.png", alt: "Prayer Wall: Prayers Section", caption: "Prayer Wall: Prayers"},
                  {src:"/prayer-wall-submission-section.png", alt: "Prayer Wall: Submission Section", caption: "Prayer Wall: Submission"},
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
                    { src: "/tristin-upper-room-cta-screenshot.png", alt: "Section: Upper Room CTA", caption: "Upper Room CTA" },
                    { src: "/tristin-prayer-wall-screenshot.png", alt: "Section: Prayer Wall", caption: "Prayer Wall" },
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
                <Link href="mailto:kristpetrov@setfreedigitaldisciples.com">Email</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="tel:9493314471">Call</Link>
              </Button>
            </div>
          </div>
      </div>
      </section>
  );
}
