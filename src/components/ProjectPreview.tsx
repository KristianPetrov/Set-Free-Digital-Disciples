import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectPreview({ project, priority = false, showMobileOverlay = true, sizes = "(max-width: 767px) 94vw, (max-width: 1440px) 48vw, 680px" }: {
  project: Project;
  priority?: boolean;
  showMobileOverlay?: boolean;
  sizes?: string;
}) {
  return (
    <div className={"project-preview " + (showMobileOverlay ? "has-phone" : "")}>
      <div className="preview-chrome">
        <div className="browser-dots" aria-hidden="true"><span /><span /><span /></div>
        <span>{project.displayUrl}</span>
        <ArrowUpRight className="size-3" aria-hidden="true" />
      </div>
      <div className="preview-screen">
        <Image src={project.screenshot} alt={project.screenshotAlt} fill preload={priority} loading={priority ? undefined : "eager"} fetchPriority={priority ? undefined : "low"} className="object-cover object-top" sizes={sizes} />
      </div>
      {showMobileOverlay ? (
        <div className="preview-phone" aria-hidden="true">
          <div className="phone-screen"><Image src={project.mobile} alt="" fill loading="eager" fetchPriority="low" className="object-cover object-top" sizes="(max-width: 767px) 27vw, 160px" /></div>
        </div>
      ) : null}
    </div>
  );
}
