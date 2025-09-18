import { Card, CardContent } from "@/components/ui/card";
import AutoCarousel from "@/components/AutoCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootedInTraditionShowcase() {
  return (
    <section id="work-rooted" className="py-12">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: description */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold glow-cyan">Rooted In Tradition</h3>
            <p className="text-muted-foreground">
              Rooted In Tradition exists to fill the gap for our Native and Indigenous brothers and sisters, creating structured sober living that heals mind, body, and spirit. We provide housing, community, and clinical support — building families, resilience, and growth through traditional values and working with natural strengths. Designed with the latest Next.js SEO and SSR features, with every design custom‑made by me to honor the mission and audience.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Structured sober living rooted in Native and Indigenous traditions</li>
              <li>Holistic healing that addresses mind, body, and spirit</li>
              <li>Housing, community, and clinical support centered on resilience</li>
              <li>Built with modern Next.js SEO architecture and server‑side rendering</li>
              <li>All branding and visuals are custom designs tailored to the mission</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild variant="secondary">
                <Link href="https://rootedintradition.org" target="_blank" rel="noreferrer noopener">Visit site</Link>
              </Button>
            </div>
          </div>

          {/* Right: preview thumbnails */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={3400}
                  transitionMs={800}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[
                    { src: "/Rooted in Tradition_ Flyer.png", alt: "Rooted In Tradition – Flyer", caption: "Flyer" },
                    { src: "/rooted-in-tradition-logo.png", alt: "Rooted In Tradition – Logo", caption: "Logo" },
                  ]}
                  showCaptions={true}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={4200}
                  transitionMs={900}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[
                    { src: "/rooted-in-tradition-mobile.png", alt: "Rooted In Tradition – Mobile", caption: "Mobile" },
                    { src: "/rooted-in-tradition-contact.png", alt: "Rooted In Tradition – Contact", caption: "Contact" },
                  ]}
                  showCaptions={true}
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60 col-span-2">
              <CardContent className="p-0 relative h-40 md:h-56">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={5400}
                  transitionMs={1100}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  images={[
                    { src: "/rooted-in-tradition-desktop-screenshot.png", alt: "Rooted In Tradition – Desktop screenshot", caption: "Desktop: Home" },
                  ]}
                  showCaptions={true}
                />
                <span className="scanline-overlay" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


