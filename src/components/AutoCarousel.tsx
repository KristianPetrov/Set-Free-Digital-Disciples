'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

export type CarouselImage = { src: string; alt: string };
type CSSVars = { [key: `--${string}`]: string };

export default function AutoCarousel({
  images,
  intervalMs = 3000,
  transitionMs = 600,
  objectFitClass = 'object-cover',
  preferFadeOnMobile = true,
  mobileBreakpointPx = 768,
  showDots = true,
}: {
  images: CarouselImage[];
  intervalMs?: number;
  transitionMs?: number;
  objectFitClass?: string;
  preferFadeOnMobile?: boolean;
  mobileBreakpointPx?: number;
  showDots?: boolean;
}) {
  const slides = useMemo(() => images ?? [], [images]);
  const isSingle = slides.length <= 1;

  // Track viewport to choose fade on mobile if requested
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (!preferFadeOnMobile) return;
    const mq = window.matchMedia(`(max-width: ${mobileBreakpointPx}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [preferFadeOnMobile, mobileBreakpointPx]);

  const isFadeMode = preferFadeOnMobile && isMobile;

  // Extended slides for seamless loop when sliding
  const extended = useMemo(() => {
    if (isSingle || isFadeMode) return slides;
    const first = slides[0];
    const last = slides[slides.length - 1];
    return [last, ...slides, first];
  }, [slides, isSingle, isFadeMode]);

  const [index, setIndex] = useState<number>(() => (isSingle ? 0 : isFadeMode ? 0 : 1));
  const [isTransitioning, setIsTransitioning] = useState<boolean>(() => !isSingle && !isFadeMode);
  const timerRef = useRef<number | null>(null);

  // Reset indices when mode or slide count changes
  useEffect(() => {
    setIndex(isSingle ? 0 : isFadeMode ? 0 : 1);
    setIsTransitioning(!isSingle && !isFadeMode);
  }, [isSingle, isFadeMode]);

  // Auto-advance
  useEffect(() => {
    if (isSingle) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (isFadeMode) {
        setIndex((i) => (i + 1) % slides.length);
      } else {
        setIndex((i) => i + 1);
        setIsTransitioning(true);
      }
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [intervalMs, isSingle, isFadeMode, slides.length]);

  // Handle seamless jump at edges (slide mode only)
  const handleTransitionEnd = () => {
    if (isSingle || isFadeMode) return;
    if (index === extended.length - 1) {
      setIsTransitioning(false);
      setIndex(1);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    }
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(extended.length - 2);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    }
  };

  const trackStyle: CSSProperties = isSingle || isFadeMode
    ? {}
    : {
        transform: `translateX(-${index * 100}%)`,
        transition: isTransitioning ? `transform ${transitionMs}ms ease-in-out` : 'none',
      };

  const dotCount = slides.length;
  const activeDot = isFadeMode ? index : Math.max(0, Math.min(dotCount - 1, index - 1));
  const handleDotClick = (target: number) => {
    if (isSingle) return;
    if (isFadeMode) {
      setIndex(target);
    } else {
      setIsTransitioning(true);
      setIndex(target + 1);
    }
  };

  const fadeStyle = { '--fade-ms': `${transitionMs}ms` } as CSSProperties & CSSVars;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {isSingle ? (
        <Image src={slides[0].src} alt={slides[0].alt} fill className={objectFitClass} priority />
      ) : isFadeMode ? (
        <div className="absolute inset-0">
          {slides.map((item, i) => (
            <div key={`${item.src}-${i}`} className="absolute inset-0">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`${objectFitClass} transition-opacity duration-[var(--fade-ms)] ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                priority
                style={fadeStyle}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="absolute inset-0 flex h-full"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((item, i) => (
            <div key={`${item.src}-${i}`} className="relative h-full w-full flex-shrink-0">
              <Image src={item.src} alt={item.alt} fill className={objectFitClass} priority />
            </div>
          ))}
        </div>
      )}

      {showDots && dotCount > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-1.5 pb-1">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`pointer-events-auto h-1.5 w-1.5 rounded-full transition-all ${
                i === activeDot ? 'bg-white/70 ring-1 ring-white/60 scale-105' : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(i);
              }}
            />)
          )}
        </div>
      )}
    </div>
  );
}