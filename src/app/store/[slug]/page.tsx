import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products, formatPrice } from "@/lib/products";
import SiteHeader from "@/components/SiteHeader";
import AddToCartControls from "@/components/cart/AddToCartControls";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/store/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map((url) => ({ url, width: 1200, height: 630, alt: product.name })),
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="content-layer mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square overflow-hidden rounded border">
              <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight glow-yellow">{product.name}</h1>
            <div className="mt-2 text-lg">{formatPrice(product.priceCents)}</div>
            <p className="mt-3 text-muted-foreground">{product.description}</p>
            <div className="mt-4">
              <AddToCartControls productId={product.id} sizes={product.availableSizes} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}





