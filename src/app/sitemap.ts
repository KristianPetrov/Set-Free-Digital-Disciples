import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/work", "/store", "/donate"];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);
  const productRoutes = products.map((product) => `/store/${product.slug}`);

  return [...staticRoutes, ...projectRoutes, ...productRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
