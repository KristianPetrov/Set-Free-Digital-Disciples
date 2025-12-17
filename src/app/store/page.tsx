import type { Metadata } from "next";
import Link from "next/link";
import { products, formatPrice } from "@/lib/products";
import SiteHeader from "@/components/SiteHeader";
import { Card, CardContent } from "@/components/ui/card";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Store",
  description: "T‑shirts, hoodies, and crewnecks by Set Free Digital Disciples.",
  alternates: { canonical: "/store" },
};

export default function StorePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="content-layer mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight glow-cyan">Store</h1>
        <p className="mt-2 text-muted-foreground">Hood‑Sanctified apparel built to bless the block.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.id} href={`/store/${p.slug}`} className="group">
              <Card className="overflow-hidden bg-card/70 border-border/60">
                <div className="aspect-square overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold leading-tight">{p.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{formatPrice(p.priceCents)}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}





