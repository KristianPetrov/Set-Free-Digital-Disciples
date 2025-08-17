import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DonationInline from "@/components/DonationInline";

export const metadata: Metadata = {
  title: "Donate",
  description: "Fuel the mission. Give to Set Free Digital Disciples.",
  alternates: { canonical: "/donate" },
};

// metadata is not exported from client components

export default function DonatePage() {
  return (
    <main className="content-layer relative mx-auto max-w-4xl px-4 py-12">
      <div className="mb-4">
        <Button asChild variant="secondary" size="sm">
          <Link href="/">← Back to home</Link>
        </Button>
      </div>
      <DonationInline
        title="Donate to Set Free Digital Disciples"
        subtitle="This ain’t about building fancy websites—it’s about building the Kingdom."
        logoSrc="/SetFreeDigitalDisciplesPortal.png"
        presetAmounts={[10,20,50,100,250,500]}
        paypalEmail="petrovkristian@ymail.com"
        cashAppTag="KristianPetrov"
      />
    </main>
  );
}


