import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products, type ProductSize } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-09-30.acacia",
});

export async function POST (request: Request)
{
    try {
        const body = await request.json().catch(() => null) as null | { items?: Array<{ productId: string; size?: ProductSize; quantity: number }> };
        const cartItems = body?.items ?? [];

        const line_items = (cartItems.length > 0 ? cartItems : products.slice(0, 1).map((p) => ({ productId: p.id, quantity: 1 })))
            .map(({ productId, size, quantity }) =>
            {
                const p = products.find((x) => x.id === productId);
                if (!p) return null;
                const priceId = size ? p.priceIdBySize?.[size] : undefined;
                if (priceId) {
                    return {
                        price: priceId,
                        quantity: Math.max(1, quantity || 1),
                        adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
                    } as const;
                }
                return {
                    price_data: {
                        currency: p.currency,
                        product_data: { name: p.name + (size ? ` – Size ${size}` : ""), images: p.images },
                        unit_amount: p.priceCents,
                    },
                    quantity: Math.max(1, quantity || 1),
                    adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
                } as const;
            })
            .filter(Boolean) as Stripe.Checkout.SessionCreateParams.LineItem[];

        const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

        const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] = [];
        const rateStandard = process.env.STRIPE_SHIPPING_RATE_STANDARD;
        const rateExpress = process.env.STRIPE_SHIPPING_RATE_EXPRESS;
        if (rateStandard) shippingOptions.push({ shipping_rate: rateStandard });
        if (rateExpress) shippingOptions.push({ shipping_rate: rateExpress });

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items,
            success_url: `${origin}/store/success`,
            cancel_url: `${origin}/store/canceled`,
            shipping_address_collection: { allowed_countries: ["US", "CA"] },
            automatic_tax: { enabled: true },
            billing_address_collection: "required",
            phone_number_collection: { enabled: true },
            tax_id_collection: { enabled: true },
            customer_creation: "always",
            ...(shippingOptions.length > 0 ? { shipping_options: shippingOptions } : {}),
        });

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to initiate checkout" }, { status: 500 });
    }
}


