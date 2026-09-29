import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingIncludes: {
    "/work/**/opengraph-image": ["./public/brand/set-free-logo-social.png", "./public/projects/*/desktop*.jpg"],
    "/work/**/twitter-image": ["./public/brand/set-free-logo-social.png", "./public/projects/*/desktop*.jpg"],
  },
  async redirects() {
    return [
      { source: "/work/anaheim", destination: "/work/set-free-anaheim", permanent: true },
      { source: "/work/real-love", destination: "/work", permanent: false },
      { source: "/work/lemonted", destination: "/work", permanent: false },
      { source: "/work/from-ashes", destination: "/work", permanent: false },
      { source: "/store", destination: "/", permanent: false },
      { source: "/store/:path*", destination: "/", permanent: false },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
    ],
  },
};

export default nextConfig;
