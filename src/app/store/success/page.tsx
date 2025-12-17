import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ClearCartOnMount from "@/components/cart/ClearCartOnMount";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Order successful",
  description: "Thank you for your order.",
  alternates: { canonical: "/store/success" },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="content-layer mx-auto max-w-6xl px-4 py-10">
        <ClearCartOnMount />
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">Order successful</h1>
        <p className="mt-2 text-muted-foreground">Thank you for your support. A receipt has been sent to your email.</p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/store">Continue shopping</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Order Success",
  description: "Thank you for your order!",
  alternates: { canonical: "/store/success" },
} as const;

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="content-layer mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-3xl font-extrabold glow-green">Thank you for your order!</h1>
        <p className="mt-3 text-muted-foreground">Your order is being processed. You’ll receive an email confirmation shortly.</p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/store">Continue shopping</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}





