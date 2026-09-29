"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type DonationButtonsProps = {
  cashTag: string;
  paypalEmail: string;
  amounts?: number[];
};

export default function DonationButtons({ cashTag, paypalEmail, amounts = [10, 20, 50, 100] }: DonationButtonsProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const onSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(String(amount));
  };

  const getActiveAmount = () => {
    const fromSelected = selectedAmount ?? null;
    const fromCustom = Number(customAmount);
    if (!Number.isNaN(fromCustom) && fromCustom > 0) return fromCustom;
    return fromSelected;
  };

  function openCashApp() {
    const amt = getActiveAmount();
    const baseTag = cashTag.replace(/^\$+/, "$");
    const url = amt && amt > 0
      ? `https://cash.app/${baseTag}/${encodeURIComponent(String(amt))}`
      : `https://cash.app/${baseTag}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openPayPal() {
    const amt = getActiveAmount();
    const base = "https://www.paypal.com/donate";
    const params = new URLSearchParams({ business: paypalEmail, currency_code: "USD" });
    if (amt && amt > 0) params.set("amount", String(amt));
    const url = `${base}?${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const hasAmount = Boolean(getActiveAmount() && Number(getActiveAmount()) > 0);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {amounts.map((amount) => (
          <Button
            key={amount}
            variant="outline"
            className={`border-white/10 font-semibold py-3 transition-colors ${
              selectedAmount === amount
                ? 'ring-2 ring-primary/60 bg-primary text-primary-foreground border-primary'
                : 'bg-white/5 text-foreground hover:border-primary/50 hover:bg-primary/10'
            }`}
            onClick={(e) => {
              e.preventDefault();
              onSelect(amount);
            }}
          >
            ${amount}
          </Button>
        ))}
      </div>

      <div>
        <h4 className="text-sm text-gray-300 mb-2">Custom Amount</h4>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
            <input
              type="number"
              min={0}
              step={1}
              value={customAmount}
              onChange={(e) => {
                const val = e.target.value;
                setCustomAmount(val);
                const num = Number(val);
                if (!Number.isNaN(num)) setSelectedAmount(num);
              }}
              placeholder="Enter amount"
              className={`w-full rounded-xl border bg-black/30 py-3 pl-8 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                customAmount ? 'border-primary/70' : 'border-white/15 focus:border-primary/60'
              }`}
            />
          </div>
          <Button
            type="button"
            className="bg-primary px-6 font-semibold text-primary-foreground hover:brightness-110"
            onClick={() => {
              const num = Number(customAmount);
              if (!Number.isNaN(num) && num > 0) onSelect(num);
            }}
          >
            Set
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <Button
          variant="outline"
          className={`font-semibold py-3 transition-colors ${
            hasAmount ? 'border-primary text-primary shadow-[0_0_20px_rgba(34,211,238,0.16)]' : 'border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/10'
          }`}
          onClick={openPayPal}
        >
          PayPal
        </Button>
        <Button
          variant="outline"
          className={`font-semibold py-3 transition-colors ${
            hasAmount ? 'border-accent text-accent shadow-[0_0_20px_rgba(61,255,122,0.14)]' : 'border-white/15 text-foreground hover:border-accent/50 hover:bg-accent/10'
          }`}
          onClick={openCashApp}
        >
          Cash App
        </Button>
      </div>

      <div className="text-xs text-muted-foreground">
        Cash App: {cashTag} • PayPal: {paypalEmail}
      </div>
    </div>
  );
}

