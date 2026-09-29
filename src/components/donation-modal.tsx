"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

type DonationModalProps = {
  open: boolean
  onClose: () => void

  // Branding/content
  title?: string
  subtitle?: string
  logoSrc?: string
  scripture?: string
  message?: string

  // Amounts/config
  presetAmounts?: number[]
  initialAmount?: number
  currencySymbol?: string

  // Payment configuration
  paypalMe?: string // e.g. "username" (PayPal.me handle)
  paypalEmail?: string // e.g. "user@example.com" (falls back to Donate link)
  cashAppTag?: string // e.g. "KristianPetrov" (without $)
}

export function DonationModal({
  open,
  onClose,
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
}: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(initialAmount ?? null)
  const [customAmount, setCustomAmount] = useState<string>('')

  const amount = useMemo(() => {
    return selectedAmount ?? (customAmount ? Number(customAmount) : 0)
  }, [selectedAmount, customAmount])

  const hasAmount = amount > 0

  const handlePayPal = () => {
    if (paypalMe) {
      const url = `https://www.paypal.com/paypalme/${paypalMe}/${hasAmount ? amount : ''}`
      window.open(url, '_blank')
      return
    }
    const base = 'https://www.paypal.com/donate'
    const params = new URLSearchParams({ business: paypalEmail, currency_code: 'USD' })
    if (hasAmount) params.set('amount', String(amount))
    const url = `${base}?${params.toString()}`
    window.open(url, '_blank')
  }

  const handleCashApp = () => {
    const url = `https://cash.app/$${cashAppTag}/${hasAmount ? amount : ''}`
    window.open(url, '_blank')
  }

  // Removed Venmo/Zelle per site configuration

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="site-panel rounded-2xl border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close donation modal"
            >
              <X className="h-6 w-6" />
            </button>

            {logoSrc ? (
              <div className="flex justify-center mb-4">
                <Image
                  src={logoSrc}
                  alt="Set Free Digital Disciples"
                  width={280}
                  height={210}
                  className="h-40 w-auto object-contain"
                />
              </div>
            ) : null}

            <h2 className="text-center text-2xl font-bold tracking-tight glow-green">{title}</h2>
            {subtitle ? (
              <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>

          <div className="p-6 pt-0 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Choose an amount</h3>
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
                      setSelectedAmount(preset)
                      setCustomAmount('')
                    }}
                  >
                    {currencySymbol}{preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Custom amount</h3>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  const num = Number(customAmount)
                  if (!Number.isNaN(num) && num > 0) setSelectedAmount(num)
                }}
              >
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">{currencySymbol}</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
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
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Payment methods {hasAmount ? <span className="text-accent">· {currencySymbol}{amount} selected</span> : null}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                    className={`rounded-xl border font-semibold py-3 transition-colors ${
                      hasAmount
                        ? 'border-primary text-primary shadow-[0_0_20px_rgba(34,211,238,0.16)]'
                        : 'border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/10'
                  }`}
                  onClick={handlePayPal}
                >
                  PayPal
                </button>
                <button
                    className={`rounded-xl border font-semibold py-3 transition-colors ${
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
                {scripture ? (
                  <p className="text-center italic text-foreground/85">{scripture}</p>
                ) : null}
                {message ? (
                  <p className="mt-2 text-center text-sm text-muted-foreground">{message}</p>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationModal
