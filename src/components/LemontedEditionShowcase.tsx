import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AutoCarousel from "@/components/AutoCarousel";
import CalButton from "@/components/CalButton";

export default function LemontedEditionShowcase() {
  return (
    <section id="work-lemonted" className="py-16">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-yellow-400/10 via-background/60 to-accent/10">


        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: description */}
          <div className="space-y-4">
            <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
              <div className="absolute inset-0 -z-10 opacity-35">
                <Image src="/lemonted-edition-hero.png" alt="Set Free Lemonted Edition" fill className="object-cover" />
              </div>
              <Image src="/lemonted-edition-hero.png" alt="Set Free Lemonted Edition" fill className="object-contain" />
            </div>
            <p className="text-muted-foreground">
              Set Free Lemonted Edition is more than just streetwear—it’s a lifestyle squeezed straight from the grind and served lemonted fresh. Born out of hustle, faith, and raw creativity, we design pieces that hit like fresh lemonade on a hot day: sharp, refreshing, and impossible to ignore.
            </p>
            <p className="text-muted-foreground">
              Our clothes carry the DNA of the streets—skater cuts, hood-inspired designs, and unapologetic statements—blended with a touch of light and hope. Every drop is limited, every release is a statement, and every piece is built to stand out while staying true.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <CalButton>Book a free strategy call</CalButton>
              <Button asChild variant="secondary">
                <Link href="https://setfreelemontededition.com" target="_blank" rel="noreferrer noopener">Visit site</Link>
              </Button>
            </div>
          </div>

          {/* Right: preview thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={3200}
                  transitionMs={900}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[{ src: "/lemonted-edition-playa-made-lemonade-section.png", alt: "Playa‑made lemonade section", caption: "Playa‑made lemonade" }]}
                  showCaptions={true}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={4200}
                  transitionMs={800}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[{ src: "/lemonted-edition-notify-me.png", alt: "Notify me section", caption: "Notify me" }]}
                  showCaptions={true}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60 col-span-2">
              <CardContent className="p-0 relative h-40 md:h-56">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={5500}
                  transitionMs={1100}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  images={[
                    { src: "/lemonted-edition-about.png", alt: "About Lemonted Edition", caption: "About" },
                    { src: "/lemonted-edition-footer.png", alt: "Footer Lemonted Edition", caption: "Footer" },
                    { src: "/lemonted-edition-hero.png", alt: "Hero Lemonted Edition", caption: "Hero" },
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






