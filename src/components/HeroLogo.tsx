"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroLogo() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => stage.style.setProperty("--hero-play-state",
      visible && !document.hidden && !motion.matches ? "running" : "paused");
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.1 });
    observer.observe(stage);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-stage">
      <div className="hero-logo-glow" aria-hidden="true" />
      <div className="hero-logo-frame">
        <Image src="/brand/set-free-logo.webp" alt="Set Free Digital Disciples — Jesus with a futuristic visor and cyan halo"
          fill preload sizes="(max-width: 767px) 230px, (max-width: 1023px) 320px, 430px"
          className="hero-logo-image object-contain" />
      </div>
    </div>
  );
}
