export type ProductSize = "S" | "M" | "L" | "XL" | "XXL";

export interface Product
{
    id: string;
    slug: string;
    name: string;
    description: string;
    priceCents: number;
    currency: "usd";
    images: string[];
    availableSizes: ProductSize[];
    tags?: string[];
    /** Optional Stripe Price IDs by size. If provided, checkout will use these. */
    priceIdBySize?: Partial<Record<ProductSize, string>>;
}

export const products: Product[] = [
    {
        id: "holy-hood-mary-white-tee",
        slug: "holy-hood-mary-white-tee",
        name: "Holy Hood Tatted Mother Mary Tee (White)",
        description:
            "White tee featuring the Holy Hood Tatted Mother Mary design. Soft cotton, regular fit.",
        priceCents: 2900,
        currency: "usd",
        images: ["/set-free-holy-hood-mary-white-tshirt.jpg"],
        availableSizes: ["S", "M", "L", "XL", "XXL"],
        tags: ["tshirt", "holy-hood", "mary"],
        // priceIdBySize: { S: "price_...", M: "price_...", L: "price_...", XL: "price_...", XXL: "price_..." },
    },
    {
        id: "set-free-black-gold-tee",
        slug: "set-free-black-gold-tee",
        name: "Set Free Old English Tee (Black/Gold)",
        description:
            "Black tee with ‘Set Free’ in gold Old English and a subtle cross.",
        priceCents: 2900,
        currency: "usd",
        images: ["/set-free-black-gold-tshirt.jpg"], // Please add this image under public/
        availableSizes: ["S", "M", "L", "XL", "XXL"],
        tags: ["tshirt", "set-free", "gold"],
        // priceIdBySize: { S: "price_...", M: "price_...", L: "price_...", XL: "price_...", XXL: "price_..." },
    },
    {
        id: "set-free-olive-gold-crewneck",
        slug: "set-free-olive-gold-crewneck",
        name: "Set Free Crewneck (Olive/Gold)",
        description:
            "Olive long sleeve crewneck with ‘Set Free’ in gold Old English and subtle cross.",
        priceCents: 4500,
        currency: "usd",
        images: ["/set-free-olive-gold-crewneck.jpg"],
        availableSizes: ["S", "M", "L", "XL", "XXL"],
        tags: ["crewneck", "set-free", "gold"],
        // priceIdBySize: { S: "price_...", M: "price_...", L: "price_...", XL: "price_...", XXL: "price_..." },
    },
    {
        id: "set-free-purple-psalms37-tee",
        slug: "set-free-purple-psalms37-tee",
        name: "Psalms 37:4 Tee (Purple)",
        description:
            "Purple tee with ‘Pastor Phil – Catch These Blessings’ front and Psalms 37:4 back print.",
        priceCents: 3200,
        currency: "usd",
        images: ["/set-free-purple-gold-psalms-37-4-tshirt.jpg"],
        availableSizes: ["S", "M", "L", "XL", "XXL"],
        tags: ["tshirt", "psalms", "purple"],
        // priceIdBySize: { S: "price_...", M: "price_...", L: "price_...", XL: "price_...", XXL: "price_..." },
    },
];

export function getProductBySlug (slug: string): Product | undefined
{
    return products.find((p) => p.slug === slug);
}

export function formatPrice (cents: number, currency: string = "usd"): string
{
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        minimumFractionDigits: 2,
    }).format(cents / 100);
}


