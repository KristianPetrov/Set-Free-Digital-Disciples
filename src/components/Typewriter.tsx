"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";

type Segment = { text: string; className?: string };

export default function Typewriter({
  segments,
  charDelayMs = 45,
  charJitterMs = 25,
  minCharDelayMs = 18,
  segmentDelayMs = 500,
  segmentDelaysMs,
  showCaret = true,
  className = "",
  restartOnReenterViewport = true,
  viewportThreshold = 0.2,
  preserveWidth = true,
  naturalPauses = true,
  spacePauseMs = 40,
  punctuationPauseMs = 120,
  newlinePauseMs = 220,
  onComplete,
}: {
  segments: Segment[];
  charDelayMs?: number;
  charJitterMs?: number;
  minCharDelayMs?: number;
  segmentDelayMs?: number;
  segmentDelaysMs?: number[];
  showCaret?: boolean;
  className?: string;
  restartOnReenterViewport?: boolean;
  viewportThreshold?: number;
  preserveWidth?: boolean;
  naturalPauses?: boolean;
  spacePauseMs?: number;
  punctuationPauseMs?: number;
  newlinePauseMs?: number;
  onComplete?: () => void;
}) {
  const [typedCounts, setTypedCounts] = useState<number[]>(() =>
    segments.map(() => 0)
  );
  const typedCountsRef = useRef<number[]>(typedCounts);
  const [runId, setRunId] = useState(0);
  const segIndexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const wasVisibleRef = useRef<boolean>(false);
  const completedRef = useRef<boolean>(false);

  const totalTyped = useMemo(
    () => typedCounts.reduce((a, b) => a + b, 0),
    [typedCounts]
  );

  const resetTypewriter = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    segIndexRef.current = 0;
    completedRef.current = false;
    setTypedCounts(segments.map(() => 0));
    typedCountsRef.current = segments.map(() => 0);
    setRunId((id) => id + 1);
  }, [segments]);

  const nextCharDelay = useCallback(() => {
    const jitter = (Math.random() * 2 - 1) * charJitterMs;
    const delay = Math.max(minCharDelayMs, Math.round(charDelayMs + jitter));
    return delay;
  }, [charDelayMs, charJitterMs, minCharDelayMs]);

  const nextSegmentDelay = useCallback(
    (i: number) => {
      if (segmentDelaysMs && typeof segmentDelaysMs[i] === "number") {
        return segmentDelaysMs[i] as number;
      }
      return segmentDelayMs;
    },
    [segmentDelaysMs, segmentDelayMs]
  );

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
      const count = typedCountsRef.current[i];
      if (count < seg.text.length) {
        setTypedCounts((prev) => {
          const next = [...prev];
          next[i] = count + 1;
          typedCountsRef.current = next;
          return next;
        });
        const nextChar = seg.text.charAt(count);
        let extra = 0;
        if (naturalPauses) {
          if (nextChar === "\n") extra += newlinePauseMs;
          else if (nextChar === " ") extra += spacePauseMs;
          else if (/[,.;:!?]/.test(nextChar)) extra += punctuationPauseMs;
        }
        timerRef.current = window.setTimeout(typeNextChar, nextCharDelay() + extra);
      } else {
        segIndexRef.current = i + 1;
        if (segIndexRef.current < segments.length) {
          const delay = nextSegmentDelay(i);
          timerRef.current = window.setTimeout(typeNextChar, delay);
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
  }, [
    segments,
    nextCharDelay,
    nextSegmentDelay,
    onComplete,
    naturalPauses,
    spacePauseMs,
    punctuationPauseMs,
    newlinePauseMs,
    runId,
  ]);

  // Keep ref in sync for safety (not used to trigger effects)
  useEffect(() => {
    typedCountsRef.current = typedCounts;
  }, [typedCounts]);

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

  const caretSegmentIndex = (() => {
    const active = typedCounts.findIndex((count, i) => count < segments[i].text.length);
    return active === -1 ? Math.max(0, segments.length - 1) : active;
  })();

  return (
    <span ref={rootRef} className={className} aria-live="polite">
      {segments.map((seg, idx) => {
        const typed = seg.text.slice(0, typedCounts[idx]);
        const remaining = seg.text.slice(typedCounts[idx]);
        const renderCaretHere = showCaret && idx === caretSegmentIndex;
        return (
          <span key={idx} className={seg.className}>
            {typed}
            {renderCaretHere && (
              <span
                className={
                  "inline-block align-baseline translate-y-[2px] ml-1 h-[1.1em] w-[0.06em] bg-current caret-blink"
                }
                aria-hidden
                style={{ opacity: totalTyped % 2 === 0 ? 0.9 : 1 }}
              />
            )}
            {preserveWidth && remaining && (
              <span aria-hidden className="opacity-0 select-none pointer-events-none">
                {remaining}
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}