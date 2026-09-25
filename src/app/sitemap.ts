import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://setfreedigitaldisciples.com";
  const routes = ["", "/work", "/store", "/donate", ...projects.map((project) => `/work/${project.slug}`)];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path === "/work" ? 0.8 : 0.7,
  }));
}
