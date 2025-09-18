import AutoCarousel from "@/components/AutoCarousel";

export default function WorkShowcaseLemonted() {
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
          { src: "/lemonted-edition-playa-made-lemonade-section.png", alt: "Lemonted Edition – Playa Made Lemonade", caption: "Playa‑made lemonade" },
          { src: "/lemonted-edition-notify-me.png", alt: "Lemonted Edition – Notify me", caption: "Notify me" },
          { src: "/lemonted-edition-about.png", alt: "Lemonted Edition – About", caption: "About" },
          { src: "/lemonted-edition-footer.png", alt: "Lemonted Edition – Footer", caption: "Footer" },
          { src: "/lemonted-edition-hero.png", alt: "Lemonted Edition – Hero", caption: "Hero" },
        ]}
        showCaptions={true}
      />
    </div>
  );
}






