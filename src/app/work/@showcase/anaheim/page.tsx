import AutoCarousel from "@/components/AutoCarousel";

export default function WorkShowcaseAnaheim() {
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
          { src: "/set-free-hero-section.png", alt: "Set Free Anaheim – Hero", caption: "Hero section" },
          { src: "/set-free-about-section.png", alt: "Set Free Anaheim – About", caption: "About section" },
          { src: "/set-free-news-section.png", alt: "Set Free Anaheim – News & Events", caption: "News & Events" },
          { src: "/set-free-footer-section.png", alt: "Set Free Anaheim – Testimonials & Contact", caption: "Testimonials & Contact" },
          { src: "/set-free-donations-section.png", alt: "Set Free Anaheim – Donations", caption: "Donations" },
          { src: "/tristin-upper-room-cta-screenshot.png", alt: "Upper Room CTA", caption: "Upper Room CTA" },
          { src: "/tristin-prayer-wall-screenshot.png", alt: "Prayer Wall", caption: "Prayer Wall" },
        ]}
        showCaptions={true}
      />
    </div>
  );
}






