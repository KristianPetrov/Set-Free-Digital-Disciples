import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Checkout canceled",
  description: "Your checkout was canceled.",
  alternates: { canonical: "/store/canceled" },
};

export default function CanceledPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="content-layer mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-yellow">Checkout canceled</h1>
        <p className="mt-2 text-muted-foreground">No charge was made. Your cart is saved if you want to try again.</p>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/store">Return to store</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}





