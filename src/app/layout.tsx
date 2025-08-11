import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Set Free Digital Disciples | Web Design & SEO",
  description:
    "Godly, futuristic web design and SEO. We craft high‑performance, high‑tech sites with Kingdom purpose.",
  metadataBase: new URL("https://setfreedigitaldisciples.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Set Free Digital Disciples",
    description:
      "Godly, futuristic web design and SEO. We craft high‑performance, high‑tech sites with Kingdom purpose.",
    type: "website",
    url: "https://setfreedigitaldisciples.com",
    images: [
      {
        url: "/SetFreeDigitalDisciplesMatrix.png",
        alt: "Set Free Digital Disciples Matrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples",
    description:
      "Godly, futuristic web design and SEO. We craft high‑performance, high‑tech sites with Kingdom purpose.",
    images: [
      {
        url: "/SetFreeDigitalDisciplesMatrix.png",
        alt: "Set Free Digital Disciples Matrix",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
