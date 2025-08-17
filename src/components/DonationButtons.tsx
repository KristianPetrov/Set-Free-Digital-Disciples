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
            className={`border-red-900/50 font-bold py-3 transition-all duration-300 ${
              selectedAmount === amount
                ? 'ring-2 ring-red-500 bg-red-600 text-white border-red-600'
                : amount > 100
                  ? 'text-yellow-400 hover:bg-yellow-600 hover:border-yellow-600 hover:text-black'
                  : 'text-red-400 hover:bg-red-600 hover:border-red-600 hover:text-white'
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
              className={`w-full pl-8 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                customAmount ? 'border-red-500 ring-2 ring-red-500/50' : 'border-gray-600 focus:border-red-500'
              }`}
            />
          </div>
          <Button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6"
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
          className={`font-bold py-3 transition-all duration-300 ${
            hasAmount ? 'border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white shadow-lg shadow-blue-500/50 animate-pulse' : 'border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white'
          }`}
          onClick={openPayPal}
        >
          PayPal
        </Button>
        <Button
          variant="outline"
          className={`font-bold py-3 transition-all duration-300 ${
            hasAmount ? 'border-green-500 text-green-400 hover:bg-green-600 hover:text-white shadow-lg shadow-green-500/50 animate-pulse' : 'border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white'
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


