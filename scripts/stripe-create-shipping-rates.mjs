import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import Stripe from "stripe";
import dotenv from "dotenv";

// Load env from .env.local if present, fallback to .env
const envPath = fs.existsSync(path.resolve(".env.local")) ? ".env.local" : ".env";
dotenv.config({ path: envPath });

if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Missing STRIPE_SECRET_KEY. Add it to .env.local before running.");
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-09-30.acacia" });

const STANDARD_AMOUNT = Number(process.env.STANDARD_SHIPPING_AMOUNT_CENTS ?? 500);
const EXPRESS_AMOUNT = Number(process.env.EXPRESS_SHIPPING_AMOUNT_CENTS ?? 1500);

function byMetadataKind(kind) {
  return (rate) => rate.metadata && rate.metadata.kind === kind;
}

async function ensureRate({ kind, displayName, amountCents, minDays, maxDays }) {
  const list = await stripe.shippingRates.list({ active: true, limit: 100 });
  const existing = list.data.find(byMetadataKind(kind));
  if (existing) {
    return existing;
  }
  const created = await stripe.shippingRates.create({
    display_name: displayName,
    type: "fixed_amount",
    fixed_amount: { amount: amountCents, currency: "usd" },
    delivery_estimate: {
      minimum: { unit: "business_day", value: minDays },
      maximum: { unit: "business_day", value: maxDays },
    },
    metadata: { kind },
  });
  return created;
}

async function main() {
  const standard = await ensureRate({
    kind: "sfd-standard-flat",
    displayName: "Standard",
    amountCents: STANDARD_AMOUNT,
    minDays: 3,
    maxDays: 5,
  });
  const express = await ensureRate({
    kind: "sfd-express-flat",
    displayName: "Express",
    amountCents: EXPRESS_AMOUNT,
    minDays: 1,
    maxDays: 2,
  });

  const out = {
    standard: { id: standard.id, amount_cents: standard.fixed_amount?.amount ?? STANDARD_AMOUNT },
    express: { id: express.id, amount_cents: express.fixed_amount?.amount ?? EXPRESS_AMOUNT },
  };
  const outPath = path.resolve("stripe-shipping-rates.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log("Created/Found shipping rates:", out);
  console.log("Saved to:", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});







