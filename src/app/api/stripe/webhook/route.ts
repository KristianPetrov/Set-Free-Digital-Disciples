import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2024-09-30.acacia",
});

export async function POST (request: Request)
{
    const sig = request.headers.get("stripe-signature");
    if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!endpointSecret) return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });

    const rawBody = await request.text();
    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            // TODO: Fulfill the order (send email, record to DB, etc.)
            console.log("Checkout completed:", session.id);
            break;
        }
        default:
            break;
    }

    return NextResponse.json({ received: true });
}







