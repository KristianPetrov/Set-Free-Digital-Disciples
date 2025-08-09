import type { MetadataRoute } from "next";

export default function sitemap (): MetadataRoute.Sitemap
{
    const base = "https://setfreedigitaldisciples.com";
    const routes = [
        "",
        "/work",
        "/work/set-free-anaheim",
    ];
    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
    }));
}