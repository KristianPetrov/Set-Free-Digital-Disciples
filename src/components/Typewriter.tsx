"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Segment = { text: string; className?: string };

export default function Typewriter({
  segments,
  charDelayMs = 45,
  charJitterMs = 25,
  minCharDelayMs = 18,
  segmentDelayMs = 500,
  showCaret = true,
  className = "",
  restartOnReenterViewport = true,
  viewportThreshold = 0.2,
  preserveWidth = true,
  onComplete,
}: {
  segments: Segment[];
  charDelayMs?: number;
  charJitterMs?: number;
  minCharDelayMs?: number;
  segmentDelayMs?: number;
  showCaret?: boolean;
  className?: string;
  restartOnReenterViewport?: boolean;
  viewportThreshold?: number;
  preserveWidth?: boolean;
  onComplete?: () => void;
}) {
  const [typedCounts, setTypedCounts] = useState<number[]>(() =>
    segments.map(() => 0)
  );
  const segIndexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const wasVisibleRef = useRef<boolean>(false);
  const completedRef = useRef<boolean>(false);

  const totalTyped = useMemo(
    () => typedCounts.reduce((a, b) => a + b, 0),
    [typedCounts]
  );

  function resetTypewriter() {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    segIndexRef.current = 0;
    completedRef.current = false;
    setTypedCounts(segments.map(() => 0));
  }

  function nextCharDelay() {
    const jitter = (Math.random() * 2 - 1) * charJitterMs;
    const delay = Math.max(minCharDelayMs, Math.round(charDelayMs + jitter));
    return delay;
  }

  useEffect(() => {
    function typeNextChar() {
      const i = segIndexRef.current;
      if (i >= segments.length) {
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
        return;
      }
      const seg = segments[i];
      const count = typedCounts[i];
      if (count < seg.text.length) {
        setTypedCounts((prev) => {
          const next = [...prev];
          next[i] = count + 1;
          return next;
        });
        timerRef.current = window.setTimeout(typeNextChar, nextCharDelay());
      } else {
        segIndexRef.current = i + 1;
        if (segIndexRef.current < segments.length) {
          timerRef.current = window.setTimeout(typeNextChar, segmentDelayMs);
        } else {
          if (!completedRef.current) {
            completedRef.current = true;
            onComplete?.();
          }
        }
      }
    }
    typeNextChar();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [segments, charDelayMs, charJitterMs, minCharDelayMs, segmentDelayMs, typedCounts, onComplete]);

  useEffect(() => {
    if (!restartOnReenterViewport || !rootRef .current) return;
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
  }, [restartOnReenterViewport, viewportThreshold, segments.length]);

  return (
    <span
      ref={rootRef}
      className={className}
      aria-live="polite"
    >
      {segments.map((seg, idx) => {
        const typed = seg.text.slice(0, typedCounts[idx]);
        const remaining = seg.text.slice(typedCounts[idx]);
        return (
          <span key={idx} className={seg.className}>
            {typed}
            {preserveWidth && remaining && (
              <span aria-hidden className="opacity-0 select-none pointer-events-none">
                {remaining}
              </span>
            )}
          </span>
        );
      })}
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