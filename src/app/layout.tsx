import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Set Free Digital Disciples | Neon‑Holy Web Design & SEO",
  description:
    "Neon‑holy, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
  metadataBase: new URL("https://setfreedigitaldisciples.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Set Free Digital Disciples | Neon‑Holy Web Design & SEO",
    description:
      "Neon‑holy, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
    type: "website",
    url: "https://magichousesetfree.com",
    images: [
      {
        url: "/futuristic-jesus-portal-og.png",
        alt: "Set Free Digital Disciples Matrix",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples | Neon‑Holy Web Design & SEO",
    description:
      "Neon‑holy, high‑performance web design and SEO. Clean commits, kingdom outcomes.",
    images: [
      {
        url: "/futuristic-jesus-portal-og.png",
        alt: "Set Free Digital Disciples Matrix",
        width: 1200,
        height: 630,
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
        <Script id="cal-embed" src="https://cal.com/embed.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
