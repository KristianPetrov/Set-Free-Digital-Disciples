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
        <defs>
          <radialGradient id="hero-grid-fade" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-grid-mask"><rect width="600" height="600" fill="url(#hero-grid-fade)" stroke="none" /></mask>
          <pattern id="hero-hex" width="24" height="41.57" patternUnits="userSpaceOnUse" stroke="none">
            <circle cx="0" cy="0" r="1.1" /><circle cx="24" cy="0" r="1.1" /><circle cx="12" cy="20.78" r="1.1" />
            <circle cx="0" cy="41.57" r="1.1" /><circle cx="24" cy="41.57" r="1.1" />
          </pattern>
          <linearGradient id="hero-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="100%" stopColor="currentColor" stopOpacity=".38" />
          </linearGradient>
        </defs>
        <rect className="hero-tech-grid" width="600" height="600" fill="url(#hero-hex)" stroke="none" mask="url(#hero-grid-mask)" />
        <g className="hero-tech-circuits">
          <path d="M18 180h60l36 36v74h48M0 350h68l34-34h48M582 180h-60l-36 36v74h-48M600 350h-68l-34-34h-48M55 440h50l38-38M545 440h-50l-38-38" />
          <path d="M100 90v40l36 36M500 90v40l-36 36M210 30v44M390 30v44M40 250h40l20 20M560 250h-40l-20 20" />
          <circle cx="18" cy="180" r="4" /><circle cx="582" cy="180" r="4" />
          <circle cx="55" cy="440" r="4" /><circle cx="545" cy="440" r="4" />
          <circle cx="100" cy="90" r="3" /><circle cx="500" cy="90" r="3" />
        </g>
        <g className="hero-tech-circuits hero-tech-circuits-alt">
          <path d="M150 520h60l24-24M450 520h-60l-24-24M300 560v-40M260 540h80" />
          <circle cx="150" cy="520" r="3" /><circle cx="450" cy="520" r="3" />
        </g>
        <g className="hero-tech-data">
          <path d="M18 180h60l36 36v74h48M582 180h-60l-36 36v74h-48" pathLength="100" />
          <path className="hero-tech-data-late" d="M0 350h68l34-34h48M600 350h-68l-34-34h-48M100 90v40l36 36M500 90v40l-36 36" pathLength="100" />
          <path className="hero-tech-data-alt" d="M150 520h60l24-24M450 520h-60l-24-24M55 440h50l38-38M545 440h-50l-38-38" pathLength="100" />
        </g>
        <g className="hero-tech-ring hero-tech-ticks">
          <circle cx="300" cy="270" r="262" strokeDasharray="1 7.2" />
          <path d="M300 2v14M568 270h-14M300 538v-14M32 270h14" />
        </g>
        <g className="hero-tech-ring hero-tech-ring-outer">
          <circle cx="300" cy="270" r="238" strokeDasharray="110 22 4 22 64 36" />
          <circle cx="300" cy="270" r="226" strokeDasharray="2 18" />
          <circle className="hero-tech-node" cx="300" cy="32" r="4.5" />
          <circle className="hero-tech-node hero-tech-node-alt" cx="300" cy="508" r="3.5" />
        </g>
        <g className="hero-tech-ring hero-tech-ring-inner">
          <circle cx="300" cy="270" r="196" strokeDasharray="210 80 30 80" />
          <circle cx="300" cy="270" r="186" strokeDasharray="40 260" strokeWidth="3" className="hero-tech-arc" />
          <path d="M300 66v18M504 270h-18M300 474v-18M96 270h18" />
        </g>
        <g className="hero-tech-sweep">
          <path d="M300 270L300 40A230 230 0 0 1 462.6 107.4Z" fill="url(#hero-sweep)" stroke="none" />
          <path d="M300 270L462.6 107.4" strokeWidth="1.5" />
        </g>
        <circle className="hero-tech-ping" cx="300" cy="270" r="200" />
        <circle className="hero-tech-ping hero-tech-ping-late" cx="300" cy="270" r="200" />
        <g className="hero-tech-hud">
          <path d="M40 40h40M40 40v40M560 40h-40M560 40v40M40 560h40M40 560v-40M560 560h-40M560 560v-40" />
          <g className="hero-tech-bars">
            <rect x="52" y="486" width="4" height="22" /><rect x="60" y="486" width="4" height="22" />
            <rect x="68" y="486" width="4" height="22" /><rect x="76" y="486" width="4" height="22" />
            <rect x="520" y="486" width="4" height="22" /><rect x="528" y="486" width="4" height="22" />
            <rect x="536" y="486" width="4" height="22" /><rect x="544" y="486" width="4" height="22" />
          </g>
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
