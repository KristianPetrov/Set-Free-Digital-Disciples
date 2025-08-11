"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx as CanvasRenderingContext2D;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initialize();
    };

    window.addEventListener("resize", resize);

    const characters = "アカサタナペシぷはハマヤラぞぬオワ0123456789ABCDEFGHIへJKLMNOPQRSTUVWXYZ".split(
      ""
    );
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    function initialize() {
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    }

    function draw() {
      context.fillStyle = "rgba(0, 0, 0, 0.15)";
      context.fillRect(0, 0, width, height);

      context.fillStyle = getComputedStyle(document.documentElement)
        .getPropertyValue("--neon-green")
        .trim();
      context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        context.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="matrix-overlay opacity-30 [mix-blend-mode:screen]"
    />
  );
}