import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Set Free Digital Disciples | Hood‑Sanctified & Scripted Web Design & SEO",
    template: "%s | Set Free Digital Disciples",
  },
  description:
    "Neon‑holy, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
  keywords: [
    "Next.js",
    "Web Design",
    "SEO",
    "Tailwind",
    "Performance",
    "Core Web Vitals",
    "Vercel",
  ],
  authors: [{ name: "Set Free Digital Disciples" }],
  creator: "Set Free Digital Disciples",
  publisher: "Set Free Digital Disciples",
  metadataBase: new URL("https://setfreedigitaldisciples.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Set Free Digital Disciples | Hood‑Sanctified & Scripted Web Design & SEO",
    description:
      "Hood‑Sanctified & Scripted, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
    type: "website",
    url: "https://setfreedigitaldisciples.com/",
    siteName: "Set Free Digital Disciples",
    locale: "en_US",
    images: [
      {
        url: "/matrix-jesus-og-image.png",
        alt: "Set Free Digital Disciples Matrix",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples | Hood‑Sanctified & Scripted Web Design & SEO",
    description:
      "Hood‑Sanctified & Scripted, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
    images: [
      {
        url: "/matrix-jesus-og-image.png",
        alt: "Set Free Digital Disciples Matrix",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Set Free Digital Disciples",
    url: "https://setfreedigitaldisciples.com",
    sameAs: [
      "https://www.instagram.com/setfreeanaheim",
      "https://www.facebook.com/setfreeanaheim",
      "https://www.youtube.com/@setfreeanaheim",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {modal}
        <Analytics />
      </body>
    </html>
  );
}
