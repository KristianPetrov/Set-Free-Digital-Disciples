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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fontSize = 16;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let raf = 0;
    let last = 0;
    let running = true;

    const seed = () => {
      columns = Math.max(1, Math.ceil(width / fontSize));
      drops = Array.from({ length: columns }, () => Math.random() * height);
      speeds = Array.from({ length: columns }, () => 0.65 + Math.random() * 1.05);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const drawFrame = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.2)";
      context.fillRect(0, 0, width, height);
      context.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      for (let i = 0; i < columns; i++) {
        const glyph = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        const x = i * fontSize;
        const y = drops[i];
        context.fillStyle = Math.random() > 0.9 ? HEAD : GREEN;
        context.fillText(glyph, x, y);
        if (reduceMotion) continue;
        drops[i] += fontSize * speeds[i];
        if (drops[i] > height + fontSize * 2) {
          drops[i] = -Math.random() * height * 0.35;
          speeds[i] = 0.65 + Math.random() * 1.05;
        }
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      if (document.hidden) {
        raf = requestAnimationFrame(loop);
        return;
      }
      if (now - last >= 40) {
        last = now;
        drawFrame();
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    // Warm the canvas so the first painted frame is already full rain,
    // instead of one synchronized row falling from the top.
    for (let i = 0; i < 36; i++) drawFrame();

    if (!reduceMotion) {
      raf = requestAnimationFrame(loop);
    }

    const onVisibility = () => {
      if (!document.hidden) last = 0;
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="matrix-overlay opacity-40" />;
}
