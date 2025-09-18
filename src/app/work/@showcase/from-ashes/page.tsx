import AutoCarousel from "@/components/AutoCarousel";

export default function WorkShowcaseFromAshes() {
  return (
    <div className="rounded-xl border border-border/60 bg-card/70 p-4">
      <AutoCarousel
        objectFitClass="object-contain"
        intervalMs={3800}
        transitionMs={900}
        preferFadeOnMobile={true}
        showDots={true}
        sizes="(max-width: 768px) 100vw, 100vw"
        images={[
          { src: "/makeover-mage-desktop.png", alt: "From Ashes – Makeover Mage desktop", caption: "Desktop: Makeover Mage" },
          { src: "/our-vision-desktop.png", alt: "From Ashes – Our Vision desktop", caption: "Desktop: Our Vision" },
          { src: "/infernal-mage-desktop.png", alt: "From Ashes – Infernal Mage desktop", caption: "Desktop: Infernal Mage" },
          { src: "/hero-desktop.png", alt: "From Ashes – Hero desktop", caption: "Desktop: Hero" },
        ]}
        showCaptions={true}
      />
    </div>
  );
}




