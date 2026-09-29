"use client";

import { useState } from "react";
import ProjectLink from "@/components/ProjectLink";
import { ArrowUpRight, Expand } from "lucide-react";
import ProjectPreview from "@/components/ProjectPreview";
import ProjectGallery from "@/components/ProjectGallery";
import { projectGroups, projects, type ProjectGroup } from "@/lib/projects";

export default function ProjectShowcase({ heading = "h3", priorityFirst = false }: {
  heading?: "h2" | "h3";
  priorityFirst?: boolean;
}) {
  const [group, setGroup] = useState<"all" | ProjectGroup>("all");
  const visible = group === "all" ? projects : projects.filter((project) => project.group === group);
  const Title = heading;

  return (
    <div>
      <div className="showcase-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {projectGroups.map((item) => <button key={item.id} type="button" aria-pressed={group === item.id} onClick={() => setGroup(item.id)}>{item.label}</button>)}
        </div>
        <span className="project-count" aria-live="polite">{visible.length} / {projects.length} projects</span>
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article id={project.slug} key={project.slug} className="project-card section-anchor" data-featured={group === "all" && index === 0 ? "true" : undefined} data-category={project.group}>
            <ProjectGallery project={project}>
              <button type="button" className="project-preview-trigger" aria-label={"Explore " + project.name + " screens"}>
                <ProjectPreview project={project} priority={priorityFirst && index === 0} sizes={group === "all" && index === 0 ? "(max-width: 767px) 94vw, 60vw" : undefined} />
                <span className="preview-hint"><Expand className="size-3.5" /> Explore screens</span>
              </button>
            </ProjectGallery>
            <div className="project-card-copy">
              <div className="project-meta"><span>{String(projects.indexOf(project) + 1).padStart(2, "0")} <i>/</i> {project.kind}</span><span className="live-label"><span className="status-dot" /> Live</span></div>
              <Title>{project.name}</Title>
              <p>{project.plain}</p>
              <div className="project-card-links">
                <ProjectLink href={"/work/" + project.slug} />
                <a href={project.url} target="_blank" rel="noreferrer noopener" className="project-live-link">Visit site <ArrowUpRight className="size-4" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
