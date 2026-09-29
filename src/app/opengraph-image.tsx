import { socialImage } from "@/lib/social-image";

export const alt = "Set Free Digital Disciples — Bold websites. Real purpose. Custom web design and technical SEO.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return socialImage();
}
