"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getProjectScreens, type Project } from "@/lib/projects";

export default function ProjectGallery({ project, children, initialIndex = 0 }: {
  project: Project;
  children: ReactNode;
  initialIndex?: number;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [loadedSrc, setLoadedSrc] = useState("");
  const screens = getProjectScreens(project);
  const screen = screens[index];
  const isMobileScreen = screen.src === project.mobile;
  const previous = () => setIndex((current) => (current - 1 + screens.length) % screens.length);
  const next = () => setIndex((current) => (current + 1) % screens.length);

  return (
    <Dialog onOpenChange={(open) => { if (open) setIndex(initialIndex); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="gallery-dialog" onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
        if (event.key === "ArrowRight") { event.preventDefault(); next(); }
      }}>
        <div className="gallery-heading">
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{isMobileScreen ? "Scroll the phone screen for a closer look. Use the arrows to keep exploring." : "Explore the real screens. Use the arrows or choose a thumbnail."}</DialogDescription>
        </div>
        <div className={"gallery-image" + (isMobileScreen ? " gallery-phone-scroll" : "")} data-loaded={loadedSrc === screen.src} aria-busy={loadedSrc !== screen.src}>
          {isMobileScreen ? (
            <Image key={screen.src} src={screen.src} onLoad={() => setLoadedSrc(screen.src)} alt={screen.alt} width={390} height={844} sizes="(max-width: 767px) 90vw, 390px" className="gallery-mobile-image" />
          ) : (
            <Image key={screen.src} src={screen.src} onLoad={() => setLoadedSrc(screen.src)} alt={screen.alt} fill sizes="(max-width: 767px) 94vw, 1000px" className="object-contain" />
          )}
        </div>
        <div className="gallery-controls">
          <button type="button" onClick={previous} aria-label="Previous screen"><ChevronLeft className="size-5" /></button>
          <p aria-live="polite"><span>{screen.caption}</span><span>{index + 1} / {screens.length}</span></p>
          <button type="button" onClick={next} aria-label="Next screen"><ChevronRight className="size-5" /></button>
        </div>
        <div className="gallery-thumbnails" aria-label="Choose a project screen">
          {screens.map((shot, shotIndex) => (
            <button type="button" key={shot.src} aria-label={shot.caption} aria-pressed={index === shotIndex} onClick={() => setIndex(shotIndex)}>
              <Image src={shot.src} alt="" fill sizes="80px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
