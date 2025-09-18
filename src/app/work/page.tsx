export const revalidate = 86400;

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies crafted with Hood‑Sanctified & Scripted precision.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Set Free Digital Disciples",
    description: "Selected projects and case studies crafted with Hood‑Sanctified & Scripted precision.",
    url: "/work",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
  twitter: {
    title: "Work | Set Free Digital Disciples",
    description: "Selected projects and case studies crafted with Hood‑Sanctified & Scripted precision.",
    images: [
      { url: "/matrix-jesus-og-image.png", width: 1200, height: 630, alt: "Set Free Digital Disciples" },
    ],
  },
} as const;

import { redirect } from "next/navigation";

export default function WorkPage() {
  redirect("/work/anaheim");
}