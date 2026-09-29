import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DonationInline from "@/components/DonationInline";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Set Free Digital Disciples and a faith-rooted mission that serves people online and in the community.",
  alternates: { canonical: "/donate" },
  twitter: { card: "summary_large_image", title: "Support Set Free Digital Disciples", description: "Support a faith-rooted mission that serves people online and in the community." },
  openGraph: {
    type: "website",
    siteName: "Set Free Digital Disciples",
    title: "Donate | Set Free Digital Disciples",
    description: "Support Set Free Digital Disciples and a faith-rooted mission that serves people online and in the community.",
    url: "/donate",
  },
};

// metadata is not exported from client components

export default function DonatePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
    <main id="main-content" tabIndex={-1} className="content-layer relative mx-auto max-w-4xl px-4 py-10 md:py-12">
      <div className="mb-4">
        <Button asChild variant="secondary" size="sm">
          <Link href="/">← Back to home</Link>
        </Button>
      </div>
      <DonationInline
        title="Support Set Free Digital Disciples"
        subtitle="Your gift helps us use technology to serve people and share the hope of Jesus."
        logoSrc="/SetFreeDigitalDisciplesPortal.png"
        presetAmounts={[10,20,50,100,250,500]}
        paypalEmail="petrovkristian@ymail.com"
        cashAppTag="KristianPetrov"
      />
    </main>
      <SiteFooter />
    </div>
  );
}

