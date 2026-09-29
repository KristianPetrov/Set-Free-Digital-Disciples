"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectPreview from "@/components/ProjectPreview";
import { projectGroups, projects, type Project, type ProjectGroup } from "@/lib/projects";

function ProjectCard({
  project,
  heading,
  priority = false,
}: {
  project: Project;
  heading: "h2" | "h3";
  priority?: boolean;
}) {
  const Title = heading;

  return (
    <article
      id={project.slug}
      className="project-card scroll-mt-24 overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.45)] transition-colors md:rounded-3xl md:p-5"
    >
      <div className="grid items-start gap-5 lg:grid-cols-12 lg:gap-7">
        <div className="lg:col-span-7">
          <ProjectPreview project={project} priority={priority} />
          <ul
            aria-label={`${project.name} project gallery`}
            className="project-gallery mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible"
          >
            {project.gallery.slice(0, 5).map((shot) => (
              <li
                key={shot.src}
                className="w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-black/50 sm:w-auto"
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 30vw, 260px"
                  />
                </div>
                <p className="truncate px-3 py-2 text-xs text-muted-foreground">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 px-1 pb-1 pt-1 lg:col-span-5 lg:px-1 lg:pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.kind}</Badge>
            {project.place ? <Badge variant="secondary">{project.place}</Badge> : null}
            <Badge variant="outline">Built &amp; maintained</Badge>
          </div>
          {project.logo ? (
            <div className="relative h-12 w-40">
              <Image src={project.logo} alt="" fill className="object-contain object-left" sizes="160px" />
            </div>
          ) : null}
          <Title className="text-2xl font-extrabold tracking-tight glow-cyan md:text-3xl">{project.name}</Title>
          <p className="text-base leading-relaxed text-foreground/90">{project.plain}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.built}</p>
          <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground/90">
            <span className="font-semibold text-primary">The experience: </span>
            {project.visitor}
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {project.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-1 flex flex-wrap gap-3">
            <Button asChild>
              <a href={project.url} target="_blank" rel="noreferrer noopener">
                Visit the live site
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/work/${project.slug}`}>View project details</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase({
  heading = "h3",
  priorityFirst = false,
}: {
  heading?: "h2" | "h3";
  priorityFirst?: boolean;
}) {
  const [group, setGroup] = useState<"all" | ProjectGroup>("all");
  const visible = useMemo(
    () => (group === "all" ? projects : projects.filter((project) => project.group === group)),
    [group],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectGroups.map((item) => {
          const active = group === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setGroup(item.id)}
              className={
                active
                  ? "shrink-0 rounded-full border border-primary/60 bg-primary/15 px-4 py-2.5 text-sm font-medium text-primary"
                  : "shrink-0 rounded-full border border-border/70 bg-black/30 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 space-y-6 md:space-y-8" aria-live="polite">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            heading={heading}
            priority={priorityFirst && index === 0}
          />
        ))}
      </div>
    </div>
  );
}
