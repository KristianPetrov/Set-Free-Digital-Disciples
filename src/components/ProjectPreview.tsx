import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectPreview({
  project,
  priority = false,
  showMobileOverlay = true,
}: {
  project: Project;
  priority?: boolean;
  showMobileOverlay?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/75 shadow-[0_0_42px_rgba(0,255,200,0.1)]">
      <div className="flex h-9 items-center gap-2 border-b border-white/10 px-3 text-[11px] text-muted-foreground">
        <span className="size-2 rounded-full bg-red-400/80" />
        <span className="size-2 rounded-full bg-yellow-300/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate font-mono">{project.displayUrl}</span>
      </div>
      <div className="relative aspect-[4/3] sm:aspect-[16/10]">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 760px"
        />
        <span className="scanline-overlay" />
      </div>
      {showMobileOverlay ? (
        <div className="absolute bottom-2 right-2 w-[32%] max-w-32 sm:bottom-3 sm:right-3 sm:w-[24%] sm:max-w-36">
          <div className="rounded-[1.15rem] border border-white/25 bg-[#05070b] p-1 shadow-[0_12px_36px_rgba(0,0,0,0.7)] sm:rounded-[1.3rem] sm:p-1.5">
            <div className="relative aspect-[390/844] overflow-hidden rounded-[0.9rem] sm:rounded-[1rem]">
              <Image
                src={project.mobile}
                alt={`${project.name} on a phone`}
                fill
                priority={priority}
                className="object-cover object-top"
                sizes="(max-width: 640px) 30vw, 140px"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
