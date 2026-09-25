import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CalButton from "@/components/CalButton";
import { getProject, projects } from "@/lib/projects";

export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.plain,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Set Free Digital Disciples`,
      description: project.plain,
      url: `/work/${project.slug}`,
      images: [{ url: project.screenshot, alt: project.screenshotAlt, width: 1440, height: 1000 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Set Free Digital Disciples`,
      description: project.plain,
      images: [project.screenshot],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="content-layer mx-auto max-w-6xl px-4 py-12">
      <Link href="/work" className="text-sm text-muted-foreground hover:text-primary">
        ← All the work
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge>{project.kind}</Badge>
        {project.place ? <Badge variant="secondary">{project.place}</Badge> : null}
        <Badge variant="outline">Live, and I still run it</Badge>
      </div>
      <header className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          {project.logo ? (
            <div className="relative mb-3 h-14 w-48">
              <Image src={project.logo} alt="" fill className="object-contain object-left" sizes="192px" />
            </div>
          ) : null}
          <h1 className="text-3xl font-extrabold tracking-tight glow-cyan md:text-5xl">{project.name}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">{project.plain}</p>
        </div>
        <Button asChild>
          <a href={project.url} target="_blank" rel="noreferrer noopener">
            Visit {project.displayUrl}
            <ArrowUpRight />
          </a>
        </Button>
      </header>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black/70">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[11px] text-muted-foreground">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-yellow-300/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono">{project.displayUrl}</span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image
            src={project.screenshot}
            alt={project.screenshotAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
          <span className="scanline-overlay" />
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mx-auto w-full max-w-56 overflow-hidden rounded-[1.4rem] border border-white/15 bg-black p-1.5">
            <div className="relative aspect-[390/844] overflow-hidden rounded-[1.1rem]">
              <Image
                src={project.mobile}
                alt={`${project.name} on a phone`}
                fill
                className="object-cover object-top"
                sizes="224px"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">The same site on a phone</p>
        </div>
        <div className="space-y-4 md:col-span-8">
          <p className="text-muted-foreground">{project.built}</p>
          <p className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
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
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold glow-yellow">From the live site</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Photos, product shots, and sections pulled from {project.displayUrl}.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.gallery.map((shot) => (
          <li key={shot.src} className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
            <div className="relative aspect-[4/3]">
              <Image src={shot.src} alt={shot.alt} fill className="object-contain" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
            <p className="px-3 py-2 text-sm text-muted-foreground">{shot.caption}</p>
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-2xl border border-primary/20 bg-card/50 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold glow-green">Want a site that feels like yours?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Tell me who you serve. I’ll build the front door so a stranger gets it, then I’ll stick around.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <CalButton>Book a free call</CalButton>
          <Button asChild variant="secondary">
            <Link href="/work">See the rest</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
