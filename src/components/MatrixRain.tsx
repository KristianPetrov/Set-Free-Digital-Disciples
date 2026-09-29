"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789ABCDEFZ";
const GREEN = "#3dff7a";
const HEAD = "#e9ffe8";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fontSize = 16;
    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let glyphs: string[] = [];
    let raf = 0;
    let last = 0;
    let tick = 0;

    const drawFrame = (elapsed = 40) => {
      const step = elapsed / 40;
      context.fillStyle = `rgba(0, 0, 0, ${1 - Math.pow(0.8, step)})`;
      context.fillRect(0, 0, width, height);
      context.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      tick++;
      for (let i = 0; i < drops.length; i++) {
        // Stagger glyph changes for calmer trails while keeping the original rain.
        if ((tick + i) % 4 === 0) glyphs[i] = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        context.fillStyle = (tick + i * 3) % 19 < 2 ? HEAD : GREEN;
        context.fillText(glyphs[i], i * fontSize, drops[i]);
        if (motion.matches) continue;
        drops[i] += fontSize * speeds[i] * step;
        if (drops[i] > height + fontSize * 2) {
          drops[i] = -Math.random() * height * 0.35;
          speeds[i] = 0.65 + Math.random() * 1.05;
        }
      }
    };
    const resize = () => {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      if (width === nextWidth && height === nextHeight) return;
      const previousHeight = height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.max(1, Math.ceil(width / fontSize));
      drops = Array.from({ length: columns }, (_, i) => previousHeight && drops[i] !== undefined
        ? drops[i] * height / previousHeight : Math.random() * height);
      speeds = Array.from({ length: columns }, (_, i) => speeds[i] ?? 0.65 + Math.random() * 1.05);
      glyphs = Array.from({ length: columns }, (_, i) => glyphs[i] ?? GLYPHS[(Math.random() * GLYPHS.length) | 0]);
      for (let i = 0; i < 36; i++) drawFrame();
    };
    const loop = (now: number) => {
      if (document.hidden || motion.matches) return;
      const elapsed = now - last;
      if (elapsed >= 1000 / 30) {
        last = now;
        drawFrame(Math.min(elapsed, 80));
      }
      raf = requestAnimationFrame(loop);
    };
    const resume = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      if (!document.hidden && !motion.matches) raf = requestAnimationFrame(loop);
    };
    resize();
    resume();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", resume);
    motion.addEventListener("change", resume);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", resume);
      motion.removeEventListener("change", resume);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="matrix-overlay" />;
}
