import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Set Free Digital Disciples",
    short_name: "Set Free",
    description: "Next.js websites and technical SEO for churches, shops, and local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#050806",
    theme_color: "#050b12",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
