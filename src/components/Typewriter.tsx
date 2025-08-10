"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

type Segment = { text: string; className?: string };

export default function Typewriter({
  segments,
  charDelayMs = 28,
  segmentDelayMs = 400,
  showCaret = true,
  className = "",
  restartOnHover = true,
  restartOnReenterViewport = true,
  viewportThreshold = 0.2,
}: {
  segments: Segment[];
  charDelayMs?: number;
  segmentDelayMs?: number;
  showCaret?: boolean;
  className?: string;
  restartOnHover?: boolean;
  restartOnReenterViewport?: boolean;
  viewportThreshold?: number;
}) {
  const [typedCounts, setTypedCounts] = useState<number[]>(() =>
    segments.map(() => 0)
  );
  const segIndexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const wasVisibleRef = useRef<boolean>(false);

  const totalTyped = useMemo(
    () => typedCounts.reduce((a, b) => a + b, 0),
    [typedCounts]
  );

  const resetTypewriter = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    segIndexRef.current = 0;
    setTypedCounts(segments.map(() => 0));
  }, [segments]);

  useEffect(() => {
    function typeNextChar() {
      const i = segIndexRef.current;
      if (i >= segments.length) return;
      const seg = segments[i];
      const count = typedCounts[i];
      if (count < seg.text.length) {
        setTypedCounts((prev) => {
          const next = [...prev];
          next[i] = count + 1;
          return next;
        });
        timerRef.current = window.setTimeout(typeNextChar, charDelayMs);
      } else {
        segIndexRef.current = i + 1;
        if (segIndexRef.current < segments.length) {
          timerRef.current = window.setTimeout(typeNextChar, segmentDelayMs);
        }
      }
    }
    typeNextChar();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [segments, charDelayMs, segmentDelayMs, typedCounts]);

  useEffect(() => {
    if (!restartOnReenterViewport || !rootRef.current) return;
    const el = rootRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isNowVisible = entry.isIntersecting && entry.intersectionRatio >= viewportThreshold;
        if (isNowVisible && !wasVisibleRef.current) {
          resetTypewriter();
        }
        wasVisibleRef.current = isNowVisible;
      },
      { threshold: [viewportThreshold] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [restartOnReenterViewport, viewportThreshold, resetTypewriter]);

  return (
    <span
      ref={rootRef}
      className={className}
      aria-live="polite"
      onMouseEnter={restartOnHover ? resetTypewriter : undefined}
    >
      {segments.map((seg, idx) => (
        <span key={idx} className={seg.className}>
          {seg.text.slice(0, typedCounts[idx])}
        </span>
      ))}
      {showCaret && (
        <span
          className={
            "inline-block align-baseline translate-y-[2px] ml-1 h-[1.1em] w-[0.06em] bg-current caret-blink"
          }
          aria-hidden
          style={{ opacity: totalTyped % 2 === 0 ? 0.9 : 1 }}
        />
      )}
    </span>
  );
}