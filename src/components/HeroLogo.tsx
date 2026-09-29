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
      <svg className="hero-tech" viewBox="0 0 600 600" fill="none" aria-hidden="true">
        <g className="hero-tech-circuits">
          <path d="M18 180h60l36 36v74h48M0 350h68l34-34h48M582 180h-60l-36 36v74h-48M600 350h-68l-34-34h-48M55 440h50l38-38M545 440h-50l-38-38" />
          <path d="M100 90v40l36 36M500 90v40l-36 36M210 30v44M390 30v44" />
          <circle cx="18" cy="180" r="4" /><circle cx="582" cy="180" r="4" />
          <circle cx="55" cy="440" r="4" /><circle cx="545" cy="440" r="4" />
        </g>
        <g className="hero-tech-ring hero-tech-ring-outer">
          <circle cx="300" cy="270" r="230" strokeDasharray="110 22 4 22 64 36" />
          <circle cx="300" cy="270" r="220" strokeDasharray="2 18" />
        </g>
        <g className="hero-tech-ring hero-tech-ring-inner">
          <circle cx="300" cy="270" r="192" strokeDasharray="210 80 30 80" />
          <path d="M300 66v18M504 270h-18M300 474v-18M96 270h18" />
        </g>
        <g className="hero-tech-data">
          <path d="M18 180h60l36 36v74h48M582 180h-60l-36 36v74h-48M0 350h68l34-34h48M600 350h-68l-34-34h-48" pathLength="100" />
        </g>
      </svg>
      <div className="hero-logo-frame">
        <Image src="/brand/set-free-logo.webp" alt="Set Free Digital Disciples — Jesus with a futuristic visor and cyan halo"
          fill preload sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1023px) 560px, 640px"
          className="hero-logo-image object-contain" />
      </div>
    </div>
  );
}
