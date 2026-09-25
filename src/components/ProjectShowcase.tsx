"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectGroups, projects, type Project, type ProjectGroup } from "@/lib/projects";

function BrowserFrame({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/70 shadow-[0_0_40px_rgba(0,255,200,0.08)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-yellow-300/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 truncate font-mono">{project.displayUrl}</span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image
            src={project.screenshot}
            alt={project.screenshotAlt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <span className="scanline-overlay" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 hidden w-[22%] min-w-24 max-w-36 md:block">
        <div className="rounded-[1.15rem] border border-white/20 bg-black p-1 shadow-2xl">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[0.9rem]">
            <Image
              src={project.mobile}
              alt={`${project.name} on a phone`}
              fill
              className="object-cover object-top"
              sizes="150px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const shots = project.gallery.slice(0, 3);

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 rounded-2xl border border-primary/20 bg-card/50 p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] md:p-6"
    >
      <div className="grid items-start gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <BrowserFrame project={project} priority={priority} />
          <ul className="mt-3 grid grid-cols-3 gap-2">
            {shots.map((shot) => (
              <li key={shot.src} className="overflow-hidden rounded-lg border border-white/10 bg-black/40">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 33vw, 18vw"
                  />
                </div>
                <p className="truncate px-2 py-1.5 text-[11px] text-muted-foreground">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.kind}</Badge>
            {project.place ? <Badge variant="secondary">{project.place}</Badge> : null}
            <Badge variant="outline">Live, and I still run it</Badge>
          </div>
          {project.logo ? (
            <div className="relative h-12 w-40">
              <Image src={project.logo} alt="" fill className="object-contain object-left" sizes="160px" />
            </div>
          ) : null}
          <Title className="text-2xl font-extrabold tracking-tight glow-cyan md:text-3xl">{project.name}</Title>
          <p className="text-base leading-relaxed text-foreground/90">{project.plain}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.built}</p>
          <p className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-foreground/90">
            <span className="font-semibold text-primary">What a visitor can do. </span>
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
              <Link href={`/work/${project.slug}`}>More of this one</Link>
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
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter the work">
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
                  ? "rounded-full border border-primary/60 bg-primary/15 px-4 py-2 text-sm font-medium text-primary"
                  : "rounded-full border border-border/70 bg-black/30 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-6 space-y-8">
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
