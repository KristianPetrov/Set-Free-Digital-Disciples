import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type DonationContentProps = {
  headingClassName?: string;
  hideHeader?: boolean;
};

export default function DonationContent({ headingClassName, hideHeader }: DonationContentProps) {
  return (
    <div className="space-y-6">
      {!hideHeader && (
        <div className="text-center space-y-3">
          <h1 className={`text-2xl md:text-3xl font-extrabold tracking-tight glow-green ${headingClassName ?? ""}`}>
            Fuel the Mission
          </h1>
          <p className="text-muted-foreground">
            This ain’t about building fancy websites—it’s about building the Kingdom. Every dollar you drop here goes straight into spreading the Gospel in a way the streets, the broken, and the lost can understand. We ain’t polished, we ain’t perfect, but we’re real—and we’re out here bringing Jesus where He’s needed most. You wanna sow into something that actually changes lives? This is it.
          </p>
        </div>
      )}

      <div className="rounded-lg border border-border/60 bg-card/70 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 items-center">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold glow-yellow">Give Online</h2>
            <p className="text-sm text-muted-foreground">
              Secure giving processed by your provider of choice. Choose an option below. You can replace these links with your live giving platform when ready.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">
                  Give via PayPal
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="mailto:petrovkristianpishka@gmail.com?subject=Donation%20to%20Set%20Free%20Digital%20Disciples&body=Hey%20fam%2C%20I%27d%20like%20to%20sow%20into%20the%20mission.%20Please%20follow%20up%20with%20secure%20giving%20options.%20%F0%9F%94%A5%20%F0%9F%8F%86">
                  Pledge &amp; We’ll Reach Out
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-border/50 bg-background/60 p-4">
            <p className="text-sm text-muted-foreground">
              Prefer in-person or alternative ways to give? We got you.
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>
                Cash or check at Set Free Anaheim gatherings
              </li>
              <li>
                Prefer to talk first? Use the scheduler above to book a quick call.
              </li>
              <li>
                Email <Link className="underline underline-offset-4 hover:text-primary" href="mailto:petrovkristianpishka@gmail.com">petrovkristianpishka@gmail.com</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-xs text-muted-foreground text-center">
          100% of gifts fuel Gospel work through Set Free Digital Disciples and partner ministries.
        </div>
      </div>
    </div>
  );
}


