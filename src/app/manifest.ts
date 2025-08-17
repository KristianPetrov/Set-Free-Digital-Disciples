import type { MetadataRoute } from "next";

export default function manifest (): MetadataRoute.Manifest
{
    return {
        name: "Set Free Digital Disciples",
        short_name: "SFDD",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#00E5FF",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}


