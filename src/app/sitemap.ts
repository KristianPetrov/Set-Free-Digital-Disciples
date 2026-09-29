import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl, siteUpdatedAt } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/donate"];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: siteUpdatedAt,
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
