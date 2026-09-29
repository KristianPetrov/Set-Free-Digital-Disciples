"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';

type DonationInlineProps = {
  title?: string;
  subtitle?: string;
  logoSrc?: string;
  scripture?: string;
  message?: string;
  presetAmounts?: number[];
  initialAmount?: number;
  currencySymbol?: string;
  paypalMe?: string;
  paypalEmail?: string;
  cashAppTag?: string; // without $
};

export default function DonationInline({
  title = 'Support Set Free Digital Disciples',
  subtitle = 'Your gift helps carry a faith-rooted mission into the places and spaces where people need hope.',
  logoSrc = '/SetFreeDigitalDisciplesPortal.png',
  scripture = 'Every gift helps make room for outreach that meets people where they are.',
  message = 'Thank you for being part of this work.',
  presetAmounts = [10, 20, 50, 100, 250, 500],
  initialAmount,
  currencySymbol = '$',
  paypalMe,
  paypalEmail = 'petrovkristian@ymail.com',
  cashAppTag = 'KristianPetrov',
}: DonationInlineProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(initialAmount ?? null);
  const [customAmount, setCustomAmount] = useState<string>('');

  const amount = useMemo(() => selectedAmount ?? (customAmount ? Number(customAmount) : 0), [selectedAmount, customAmount]);
  const hasAmount = amount > 0;

  const handlePayPal = () => {
    if (paypalMe) {
      const url = `https://www.paypal.com/paypalme/${paypalMe}/${hasAmount ? amount : ''}`;
      window.open(url, '_blank');
      return;
    }
    const base = 'https://www.paypal.com/donate';
    const params = new URLSearchParams({ business: paypalEmail, currency_code: 'USD' });
    if (hasAmount) params.set('amount', String(amount));
    const url = `${base}?${params.toString()}`;
    window.open(url, '_blank');
  };

  const handleCashApp = () => {
    const url = `https://cash.app/$${cashAppTag}/${hasAmount ? amount : ''}`;
    window.open(url, '_blank');
  };

  return (
    <section className="content-layer">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center mb-4">
          <Image src={logoSrc} alt="Set Free Digital Disciples" width={240} height={180} className="h-36 w-auto object-contain" />
        </div>
        <h1 className="text-center text-3xl font-extrabold tracking-tight glow-green">{title}</h1>
        {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-center leading-relaxed text-muted-foreground">{subtitle}</p> : null}

        <div className="site-panel mt-6 space-y-6 rounded-2xl border border-white/10 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.38)] sm:p-7">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Choose an amount</h3>
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  className={`rounded-xl border font-semibold py-3 transition-colors ${
                    selectedAmount === preset
                      ? 'ring-2 ring-primary/60 bg-primary text-primary-foreground border-primary'
                      : 'border-white/10 bg-white/5 text-foreground hover:border-primary/50 hover:bg-primary/10'
                  }`}
                  onClick={() => {
                    setSelectedAmount(preset);
                    setCustomAmount('');
                  }}
                >
                  {currencySymbol}{preset}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Custom amount</h3>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const num = Number(customAmount);
                if (!Number.isNaN(num) && num > 0) setSelectedAmount(num);
              }}
            >
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">{currencySymbol}</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className={`w-full rounded-xl border bg-black/30 py-3 pl-8 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                    customAmount ? 'border-primary/70' : 'border-white/15 focus:border-primary/60'
                  }`}
                />
              </div>
              <button type="submit" className="rounded-xl bg-primary px-6 font-semibold text-primary-foreground hover:brightness-110">
                Set
              </button>
            </form>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Payment methods {hasAmount ? <span className="text-accent">· {currencySymbol}{amount} selected</span> : null}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                className={`rounded-xl border py-3 font-semibold transition-colors ${
                  hasAmount
                    ? 'border-primary text-primary shadow-[0_0_20px_rgba(34,211,238,0.16)]'
                    : 'border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/10'
                }`}
                onClick={handlePayPal}
              >
                PayPal
              </button>
              <button
                className={`rounded-xl border py-3 font-semibold transition-colors ${
                  hasAmount
                    ? 'border-accent text-accent shadow-[0_0_20px_rgba(61,255,122,0.14)]'
                    : 'border-white/15 text-foreground hover:border-accent/50 hover:bg-accent/10'
                }`}
                onClick={handleCashApp}
              >
                Cash App
              </button>
            </div>
          </div>

          {(scripture || message) && (
            <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
              {scripture ? <p className="text-center italic text-foreground/85">{scripture}</p> : null}
              {message ? <p className="mt-2 text-center text-sm text-muted-foreground">{message}</p> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
