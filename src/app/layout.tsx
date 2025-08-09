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
  openGraph: {
    title: "Set Free Digital Disciples",
    description:
      "Godly, futuristic web design and SEO. We craft high‑performance, high‑tech sites with Kingdom purpose.",
    type: "website",
    url: "https://setfreedigitaldisciples.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Free Digital Disciples",
    description:
      "Godly, futuristic web design and SEO. We craft high‑performance, high‑tech sites with Kingdom purpose.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
