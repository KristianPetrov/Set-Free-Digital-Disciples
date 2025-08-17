"use client";

import { useMemo, useState } from 'react';

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
  title = 'Donate to Set Free Digital Disciples',
  subtitle = 'This ain’t about building fancy websites—it’s about building the Kingdom.',
  logoSrc = '/SetFreeDigitalDisciplesPortal.png',
  scripture = 'Every dollar fuels outreach that meets people where they are.',
  message = 'You wanna sow into something that actually changes lives? This is it.',
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
          <img src={logoSrc} alt="Logo" className="h-[180px] object-contain" />
        </div>
        <h1 className="text-center text-3xl font-extrabold glow-green">{title}</h1>
        {subtitle ? <p className="text-center text-muted-foreground mt-2">{subtitle}</p> : null}

        <div className="mt-6 bg-gray-900 border border-red-900/50 rounded-lg shadow-xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Choose an Amount</h3>
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  className={`border rounded-md border-red-900/50 font-bold py-3 transition-all duration-300 ${
                    selectedAmount === preset
                      ? 'ring-2 ring-red-500 bg-red-600 text-white border-red-600'
                      : preset > 100
                        ? 'text-yellow-400 hover:bg-yellow-600 hover:border-yellow-600 hover:text-black'
                        : 'text-red-400 hover:bg-red-600 hover:border-red-600 hover:text-white'
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
            <h3 className="text-lg font-semibold text-white mb-4">Custom Amount</h3>
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
                  className={`w-full pl-8 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                    customAmount ? 'border-red-500 ring-2 ring-red-500/50' : 'border-gray-600 focus:border-red-500'
                  }`}
                />
              </div>
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 rounded-md">
                Set
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Payment Methods {hasAmount ? <span className="text-green-400">- Ready for {currencySymbol}{amount}</span> : null}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                className={`border rounded-md font-bold py-3 transition-all duration-300 ${
                  hasAmount
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white shadow-lg shadow-blue-500/50 animate-pulse'
                    : 'border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={handlePayPal}
              >
                PayPal
              </button>
              <button
                className={`border rounded-md font-bold py-3 transition-all duration-300 ${
                  hasAmount
                    ? 'border-green-500 text-green-400 hover:bg-green-600 hover:text-white shadow-lg shadow-green-500/50 animate-pulse'
                    : 'border-green-500/50 text-green-400 hover:bg-green-600 hover:text-white'
                }`}
                onClick={handleCashApp}
              >
                Cash App
              </button>
            </div>
          </div>

          {(scripture || message) && (
            <div className="bg-gray-800/50 rounded-lg p-4 border border-red-900/30">
              {scripture ? <p className="text-gray-300 text-center italic">{scripture}</p> : null}
              {message ? <p className="text-gray-400 text-sm text-center mt-2">{message}</p> : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


