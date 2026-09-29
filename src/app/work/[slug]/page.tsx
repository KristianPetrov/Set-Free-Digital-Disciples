import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactActions from "@/components/ContactActions";
import ProjectPreview from "@/components/ProjectPreview";
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
    <main className="content-layer mx-auto max-w-7xl px-4 py-10 md:py-12">
      <Link href="/work" className="text-sm text-muted-foreground hover:text-primary">
        ← All projects
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge>{project.kind}</Badge>
        {project.place ? <Badge variant="secondary">{project.place}</Badge> : null}
        <Badge variant="outline">Built &amp; maintained</Badge>
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
            View live site
            <ArrowUpRight />
          </a>
        </Button>
      </header>

      <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.8fr)] lg:gap-8">
        <ProjectPreview project={project} priority showMobileOverlay={false} />
        <div className="grid items-start gap-5 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:grid-cols-1">
          <figure className="mx-auto w-full max-w-[13rem] sm:mx-0 sm:max-w-none lg:mx-auto lg:max-w-[13rem]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#05070b] p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[390/844] overflow-hidden rounded-[1.1rem]">
                <Image
                  src={project.mobile}
                  alt={`${project.name} on a phone`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 200px"
                />
              </div>
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">Designed for the phone screen, too</figcaption>
          </figure>
          <div className="space-y-4">
            <p className="text-muted-foreground">{project.built}</p>
            <p className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-relaxed">
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
          </div>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold glow-yellow">More from the live site</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        A closer look at the pages, products, and details that make {project.displayUrl} feel like itself.
      </p>
      <ul
        aria-label={`${project.name} gallery`}
        className="project-gallery mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3"
      >
        {project.gallery.map((shot) => (
          <li key={shot.src} className="w-[82vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/50 sm:w-auto">
            <div className="relative aspect-[5/4]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 30vw"
              />
            </div>
            <p className="px-4 py-3 text-sm text-muted-foreground">{shot.caption}</p>
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-2xl border border-primary/20 bg-card/50 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold glow-green">Want your site to feel this clear?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Tell me who you serve and what visitors need to do. I’ll build a clear digital front door and bring the same care to the work behind it.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <ContactActions />
          <Button asChild variant="secondary">
            <Link href="/work">All projects</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
