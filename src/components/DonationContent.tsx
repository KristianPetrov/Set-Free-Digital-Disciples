import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import DonationButtons from "@/components/DonationButtons";

type DonationContentProps = {
  headingClassName?: string;
  hideHeader?: boolean;
};

export default function DonationContent({ headingClassName, hideHeader }: DonationContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="relative w-44 h-14 md:w-56 md:h-16">
          <Image
            src="/SetFreeDigitalDisciplesPortal.png"
            alt="Set Free Digital Disciples"
            fill
            className="object-contain drop-shadow-[0_0_18px_rgba(0,255,200,0.25)]"
            priority={false}
          />
        </div>
      </div>
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

      <div className="rounded-lg border border-border/60 bg-card/70 p-5 md:p-8 shadow-[0_0_40px_rgba(0,255,160,0.06)]">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 items-center">
          <div className="space-y-3">
            <h2 className="text-xl font-extrabold tracking-tight glow-yellow">Give Online</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Secure giving processed by your provider of choice. Choose an option below. You can replace these links with your live giving platform when ready.
            </p>
            <DonationButtons cashTag="$KristianPetrov" paypalEmail="petrovkristian@ymail.com" />
          </div>

          <div className="rounded-md border border-border/50 bg-background/60 p-4 shadow-[0_0_24px_rgba(0,200,255,0.05)]">
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
                Email <Link className="underline underline-offset-4 hover:text-primary" href="mailto:kristpetrov@setfreedigitaldisciples.com">kristpetrov@setfreedigitaldisciples.com</Link>
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


