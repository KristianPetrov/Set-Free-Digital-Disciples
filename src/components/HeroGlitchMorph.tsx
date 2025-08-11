"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  imageA: string;
  imageB: string;
  alt?: string;
  transitionMs?: number;
  intervalMs?: number;
  glitchDurationMs?: number;
  startOn?: "A" | "B";
  priority?: boolean;
  sizes?: string;
  objectFitClass?: string;
  imageBScaleClass?: string;
};

export default function HeroGlitchMorph({
  imageA,
  imageB,
  alt = "",
  transitionMs = 1200,
  intervalMs = 8000,
  glitchDurationMs = 450,
  startOn = "A",
  priority = false,
  sizes,
  objectFitClass = "object-contain",
  imageBScaleClass = "scale-110",
}: Props) {
  const [activeIsA, setActiveIsA] = useState(startOn === "A");
  const [isGlitching, setIsGlitching] = useState(false);
  const timerRef = useRef<number | null>(null);
  const glitchRef = useRef<number | null>(null);

  useEffect(() => {
    // Crossfade toggle
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActiveIsA((v) => !v);
      // trigger a brief glitch during switch
      setIsGlitching(true);
      if (glitchRef.current) window.clearTimeout(glitchRef.current);
      glitchRef.current = window.setTimeout(() => setIsGlitching(false), glitchDurationMs);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (glitchRef.current) window.clearTimeout(glitchRef.current);
    };
  }, [intervalMs, glitchDurationMs]);

  const transitionStyle = { transition: `opacity ${transitionMs}ms ease-in-out` } as const;
  const zoomStyle = { animationDuration: `${intervalMs}ms`, animationTimingFunction: 'ease-in-out' } as const;

  return (
    <div className={`absolute inset-0 ${isGlitching ? "glitch-strong" : ""}`}>
      <div className="absolute inset-0">
        <Image
          src={imageA}
          alt={alt || ""}
          fill
          priority={priority}
          sizes={sizes}
          className={`${objectFitClass} ${activeIsA ? "opacity-100 hero-zoom-in" : "opacity-0"} drop-shadow-[0_0_40px_var(--neon-cyan)]`}
          style={{ ...transitionStyle, ...zoomStyle }}
        />
      </div>
      <div className="absolute inset-0">
        <Image
          src={imageB}
          alt={alt || ""}
          fill
          priority={priority}
          sizes={sizes}
          className={`${objectFitClass} ${imageBScaleClass} ${!activeIsA ? "opacity-100 hero-zoom-out" : "opacity-0"} drop-shadow-[0_0_40px_var(--neon-cyan)]`}
          style={{ ...transitionStyle, ...zoomStyle }}
        />
      </div>
    </div>
  );
}


