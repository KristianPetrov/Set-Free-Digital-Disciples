import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AutoCarousel from "@/components/AutoCarousel";

export default function RealLoveShowcase() {
  return (
    <section id="work-real-love" className="py-12">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/70 to-accent/10">
        <div className="grid gap-6 p-6 md:p-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold glow-cyan">Real Love Studio</h3>
              <p className="text-muted-foreground">
                Ryan Ellis’s Real Love collective is part ministry, part creative house, all movement. I designed and engineered
                <span className="font-semibold text-foreground"> reallove.studio</span> from scratch in Next.js so the identity feels
                sacred and street—dual themes, cinematic typography, and motion cues that mirror their worship nights and community outreach.
              </p>
              <p className="text-muted-foreground">
                Under the hood it leans on server components, optimized media, and reusable sections for testimonies, artist submissions,
                and events—ready for whatever cities Real Love hits next.
              </p>
            </div>

            <div className="rounded-lg border border-border/60 bg-card/70 p-4 shadow-inner">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Identity &amp; Vision</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                “Real Love is more than an organization—it’s a movement. Spaces where people encounter love through community, support,
                creativity, and faith.”
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Core mission</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>
                  <strong>Community outreach</strong>: Showing up in streets, schools, rehabs, and churches with tangible support.
                </li>
                <li>
                  <strong>Artist development</strong>: Mentoring independent creatives beyond industry traps.
                </li>
                <li>
                  <strong>Family support</strong>: Serving households facing rare hardships or rebuilding stability.
                </li>
                <li>
                  <strong>Spiritual renewal</strong>: Worship nights, storytelling, and connection that invite authentic encounters.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Build highlights</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                <li>Dark + light art direction with scroll-reactive storytelling and micro-interactions.</li>
                <li>Custom Real Love logotype + pillars emblem packaged for merch, stages, and socials.</li>
                <li>Next.js 15 + Tailwind + shadcn/ui stack with image optimization and CMS-ready slots.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <a href="https://www.reallove.studio" target="_blank" rel="noreferrer noopener">
                  Visit reallove.studio
                </a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/work">See all work</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden border-border/60 bg-card/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Brand system</CardTitle>
                <p className="text-xs text-muted-foreground">Custom logotype + pillars badge package.</p>
              </CardHeader>
              <CardContent className="relative flex h-40 md:h-44 items-center justify-center gap-2">
                <div className="relative h-full w-1/2 rounded-lg bg-muted/15 p-2">
                  <Image
                    src="/real-love.png"
                    alt="Real Love wordmark"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 45vw, 20vw"
                    priority
                  />
                </div>
                <div className="relative h-full w-1/2 rounded-lg bg-muted/15 p-2">
                  <Image
                    src="/real-love-pillars.png"
                    alt="Real Love pillars emblem"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-border/60 bg-card/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Mobile-first ministry</CardTitle>
                <p className="text-xs text-muted-foreground">Touch-friendly sections for outreach and events.</p>
              </CardHeader>
              <CardContent className="relative h-40 md:h-44">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={3600}
                  transitionMs={800}
                  preferFadeOnMobile
                  showDots
                  sizes="(max-width: 768px) 50vw, 33vw"
                  images={[
                    {
                      src: "/real-love-mobile-dark.png",
                      alt: "Real Love mobile dark layout",
                      caption: "Mobile · Dark storytelling",
                    },
                    {
                      src: "/real-love-mobile-light.png",
                      alt: "Real Love mobile light layout",
                      caption: "Mobile · Light storytelling",
                    },
                  ]}
                  showCaptions
                />
              </CardContent>
            </Card>

            <Card className="col-span-2 overflow-hidden border-border/60 bg-card/70">
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg">Desktop storytelling</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Dual theme hero flows keep the tone aligned whether the night is worship or creative workshops.
                </p>
              </CardHeader>
              <CardContent className="relative h-48 md:h-60">
                <AutoCarousel
                  objectFitClass="object-contain"
                  intervalMs={4200}
                  transitionMs={900}
                  preferFadeOnMobile
                  showDots
                  sizes="(max-width: 768px) 100vw, 66vw"
                  images={[
                    {
                      src: "/real-love-desktop-dark.png",
                      alt: "Real Love desktop dark theme",
                      caption: "Desktop · Dark experience",
                    },
                    {
                      src: "/real-love-desktop-light.png",
                      alt: "Real Love desktop light theme",
                      caption: "Desktop · Light experience",
                    },
                  ]}
                  showCaptions
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

