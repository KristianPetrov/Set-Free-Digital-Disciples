"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectPreview from "@/components/ProjectPreview";
import { getProjectScreens, type Project } from "@/lib/projects";

export function ProjectCover({ project }: { project: Project }) {
  return (
    <ProjectGallery project={project}>
      <button type="button" className="project-preview-trigger project-page-cover" aria-label={"Explore " + project.name + " screens"}>
        <ProjectPreview project={project} priority sizes="(max-width: 767px) 94vw, 90vw" />
        <span className="preview-hint"><Expand className="size-4" /> Take a closer look</span>
      </button>
    </ProjectGallery>
  );
}

export function ProjectScreens({ project }: { project: Project }) {
  const screens = getProjectScreens(project);
  return (
    <ul className="detail-gallery-grid" aria-label={project.name + " project screens"}>
      {screens.slice(1).map((shot, index) => (
        <li key={shot.src} className="detail-gallery-item">
          <ProjectGallery project={project} initialIndex={index + 1}>
            <button type="button" className="detail-gallery-trigger" aria-label={"Enlarge " + shot.caption}>
              <span className="detail-gallery-image"><Image src={shot.src} alt={shot.alt} fill className="object-contain" sizes="(max-width: 767px) 80vw, 30vw" /></span>
              <span className="detail-gallery-caption">{shot.caption}<Expand className="size-3.5" aria-hidden="true" /></span>
            </button>
          </ProjectGallery>
        </li>
      ))}
    </ul>
  );
}
