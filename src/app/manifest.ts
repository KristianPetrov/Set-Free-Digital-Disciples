import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Set Free Digital Disciples",
    short_name: "Set Free",
    description: "Next.js websites and technical SEO for churches, shops, and local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#050806",
    theme_color: "#3dff7a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
