import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SetFreeAnaheimShowcase() {
  return (
    <section id="work" className="py-16">
      <div className="relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10">
        {/* Banner image */}
        <div className="relative h-56 md:h-72">
          <Image
            src="/SetFreeDigitalDisciplesPortal.png"
            alt="Set Free Anaheim highlight"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 right-4 md:left-8 md:bottom-6 flex flex-wrap items-end gap-3">
            <div className="relative h-10 w-[240px] md:h-12 md:w-[320px]">
              <Image src="/digital-disciples-text.png" alt="Set Free Digital Disciples" fill className="object-contain" />
            </div>
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
              An urban church and outreach hub in Anaheim, CA. The site blends holy‑hood energy with clear
              next steps: weekly schedule, maps, stories, and contact touchpoints. Built for speed, clarity,
              and conversions from search and social.
            </p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Weekly gatherings: Sunday Service 10AM; Sunday Night Recovery 7PM; Wellbriety Mondays 7PM</li>
              <li>Locations: 1171 N West St and 1567 W Embassy St, Anaheim CA</li>
              <li>Media: Story videos, press features, and social embeds</li>
              <li>Performance: Vercel hosting, image optimization, clean IA</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <a href="https://set-free-anaheim-set-free-digital-desciples.vercel.app/" target="_blank" rel="noreferrer noopener">
                  Visit site
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://maps.google.com/?q=1171%20N%20West%20St%2C%20Anaheim%2C%20CA%2092801%2C%20USA" target="_blank" rel="noreferrer noopener">
                  Map & directions
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:714-400-4573">Call</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="mailto:setfreephil@aol.com">Email</a>
              </Button>
            </div>
          </div>

          {/* Right: visual tiles */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <Image src="/setfree-anaheim-ministry.jpg" alt="Ministry video preview" fill className="object-cover" />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60">
              <CardContent className="p-0 relative h-40 md:h-44">
                <Image src="/phil-holding-blocks.jpeg" alt="Sunday Service" fill className="object-cover" />
              </CardContent>
            </Card>
            <Card className="overflow-hidden bg-card/70 border-border/60 col-span-2">
              <CardContent className="p-0 relative h-40 md:h-56">
                <Image src="/godfather.JPG" alt="Set Free culture" fill className="object-cover" />
                <span className="scanline-overlay" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
