'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

export type CarouselImage = { src: string; alt: string; caption?: string };
type CSSVars = { [key: `--${string}`]: string };

export default function AutoCarousel({
  images,
  intervalMs = 3000,
  transitionMs = 600,
  objectFitClass = 'object-cover',
  preferFadeOnMobile = true,
  mobileBreakpointPx = 768,
  showDots = true,
  showCaptions = true,
  priority = false,
  sizes,
  showArrows = true,
  swipeThresholdPx = 40,
}: {
  images: CarouselImage[];
  intervalMs?: number;
  transitionMs?: number;
  objectFitClass?: string;
  preferFadeOnMobile?: boolean;
  mobileBreakpointPx?: number;
  showDots?: boolean;
  showCaptions?: boolean;
  priority?: boolean;
  sizes?: string;
  showArrows?: boolean;
  swipeThresholdPx?: number;
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
  const touchStartXRef = useRef<number | null>(null);
  const touchMovedRef = useRef<boolean>(false);

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

  const goNext = () => {
    if (isSingle) return;
    if (isFadeMode) {
      setIndex((i) => (i + 1) % slides.length);
    } else {
      setIsTransitioning(true);
      setIndex((i) => i + 1);
    }
  };

  const goPrev = () => {
    if (isSingle) return;
    if (isFadeMode) {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
    } else {
      setIsTransitioning(true);
      setIndex((i) => i - 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    touchStartXRef.current = clientX;
    touchMovedRef.current = false;
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartXRef.current == null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    if (Math.abs(clientX - touchStartXRef.current) > 5) touchMovedRef.current = true;
  };

  const onTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartXRef.current == null) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const delta = clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(delta) >= swipeThresholdPx) {
      if (delta > 0) goPrev();
      else goNext();
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
  const visibleIndex = isFadeMode ? index : ((index - 1 + slides.length) % Math.max(1, slides.length));
  const visibleCaption = slides[visibleIndex]?.caption;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEnd}
    >
      {isSingle ? (
        <Image src={slides[0].src} alt={slides[0].alt} fill className={objectFitClass} priority={priority} sizes={sizes} />
      ) : isFadeMode ? (
        <div className="absolute inset-0">
          {slides.map((item, i) => (
            <div key={`${item.src}-${i}`} className="absolute inset-0">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`${objectFitClass} transition-opacity duration-[var(--fade-ms)] ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                priority={priority && i === index}
                sizes={sizes}
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
              <Image src={item.src} alt={item.alt} fill className={objectFitClass} priority={priority && i === index} sizes={sizes} />
            </div>
          ))}
        </div>
      )}

      {showCaptions && visibleCaption && (
        <div className="pointer-events-none absolute left-1 bottom-5 md:bottom-6 z-20">
          <span className="rounded bg-black/50 text-white text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 backdrop-blur-sm">
            {visibleCaption}
          </span>
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

      {showArrows && dotCount > 1 && (
        <div className="pointer-events-none absolute inset-y-0 inset-x-0 z-10 hidden md:flex items-center justify-between px-1 md:px-2">
          <button
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex items-center justify-center h-7 w-7 md:h-8 md:w-8 rounded-full bg-black/35 text-white hover:bg-black/50 ring-1 ring-white/25"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            className="pointer-events-auto inline-flex items-center justify-center h-7 w-7 md:h-8 md:w-8 rounded-full bg-black/35 text-white hover:bg-black/50 ring-1 ring-white/25"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}