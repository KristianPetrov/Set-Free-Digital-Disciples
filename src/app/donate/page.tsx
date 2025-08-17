import type { Metadata } from "next";
import DonationContent from "@/components/DonationContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Donate",
  description: "Fuel the mission. Give to Set Free Digital Disciples.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <main className="content-layer relative mx-auto max-w-4xl px-4 py-16">
      <div className="mb-6">
        <Button asChild variant="secondary">
          <Link href="/">← Return to main site</Link>
        </Button>
      </div>
      <DonationContent />
    </main>
  );
}


