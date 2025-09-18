import { Card, CardContent } from "@/components/ui/card";
import AutoCarousel from "@/components/AutoCarousel";

export default function FromAshesShowcase() {
  return (
    <section id="work-from-ashes" className="py-12">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Left: description */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold glow-cyan">From Ashes To Angels</h3>
            <p className="text-muted-foreground">
              At From Ashes To Angels, we don’t just highlight beauty—we build a platform where transformation meets opportunity.
              Our agency combines cutting-edge web technology with a heart for creativity, ensuring our models get the visibility
              they deserve and our clients connect with rising talent effortlessly. The site is built on the latest Next.js framework,
              leveraging server-side rendering (SSR) and advanced SEO optimization to rank at the top of Google results and deliver a
              seamless experience on any device.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>🚀 Powered by Next.js 15 for blazing-fast performance and modern web standards.</li>
              <li>🌐 Server-Side Rendering (SSR) ensures dynamic content loads instantly and improves discoverability.</li>
              <li>📈 Optimized SEO architecture puts our models at the forefront of Google search results.</li>
              <li>💎 Showcase-ready design that blends elegance with a bold, holy-hood aesthetic true to our brand.</li>
              <li>🔒 Future-proof technology built to scale as our roster and opportunities grow.</li>
            </ul>
          </div>

          {/* Right: mobile showcase */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={3600}
                  transitionMs={800}
                  preferFadeOnMobile={true}
                  showDots={true}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[
                    { src: "/digital-design-mobile.png", alt: "From Ashes – Digital design mobile", caption: "Mobile: Designs" },
                    { src: "/infernal-coach-mobile.png", alt: "From Ashes – Infernal coach mobile", caption: "Mobile: Infernal coach" },
                    { src: "/hero-mobile.png", alt: "From Ashes – Hero mobile", caption: "Mobile: Hero" },
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
                    { src: "/elisabeth-holy-bling.png", alt: "From Ashes – Holy Bling", caption: "Design: Holy Bling" },
                    { src: "/elisabeth-from-ashes-to-angels.png", alt: "From Ashes – FATA", caption: "Design: FATA" },
                    { src: "/happy-sad-jester-liz.png", alt: "From Ashes – Jester", caption: "Design: Jester" },
                    { src: "/infernal-trainer-liz.png", alt: "From Ashes – Infernal Trainer", caption: "Design: Infernal Trainer" },
                    { src: "/wizard-liz.png", alt: "From Ashes – Wizard", caption: "Design: Wizard" },
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
                    { src: "/makeover-mage-desktop.png", alt: "From Ashes – Makeover Mage desktop", caption: "Desktop: Makeover Mage" },
                    { src: "/our-vision-desktop.png", alt: "From Ashes – Our Vision desktop", caption: "Desktop: Our Vision" },
                    { src: "/infernal-mage-desktop.png", alt: "From Ashes – Infernal Mage desktop", caption: "Desktop: Infernal Mage" },
                    { src: "/hero-desktop.png", alt: "From Ashes – Hero desktop", caption: "Desktop: Hero" },
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




