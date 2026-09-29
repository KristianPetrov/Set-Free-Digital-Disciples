import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectCover, ProjectScreens } from "@/components/ProjectMedia";
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main id="main-content" tabIndex={-1} className="content-layer site-container work-page">
      <Link href="/work" className="back-link"><ArrowLeft className="size-3.5" /> All projects</Link>
      <header className="project-page-header">
        <div className="project-meta"><span>{project.kind}{project.place ? " / " + project.place : ""}</span><span className="live-label"><span className="status-dot" /> Live website</span></div>
        <h1>{project.name}</h1>
        <p>{project.plain}</p>
        <a href={project.url} target="_blank" rel="noreferrer noopener" className="text-link mt-3">Visit {project.displayUrl} <ArrowUpRight className="size-4" /></a>
      </header>
      <ProjectCover project={project} />

      <section className="project-info-grid" aria-label="The thinking behind the build">
        <div>
          <span className="eyebrow">The experience</span>
          <h2>Built around the visitor.</h2>
          <p>{project.visitor}</p>
        </div>
        <div>
          <span className="eyebrow">Design meets development</span>
          <h2>Purpose in every detail.</h2>
          <p>{project.built}</p>
          <ul>{project.points.map((point) => <li key={point}><span aria-hidden="true" /><span>{point}</span></li>)}</ul>
        </div>
      </section>

      <section className="detail-gallery">
        <header className="section-heading">
          <div><p className="eyebrow">A closer look</p><h2>Every screen has a story.</h2></div>
          <p>Real pages, imagery, and details.<br />Choose a screen to explore it full size.</p>
        </header>
        <ProjectScreens project={project} />
      </section>

      <div className="project-next">
        <p className="eyebrow">Up next</p>
        <Link href={"/work/" + nextProject.slug}>{nextProject.name}<ArrowUpRight className="size-8" /></Link>
      </div>
      <section className="contact-section">
        <p className="eyebrow">Your vision belongs here, too.</p>
        <h2>Let’s build<br /><span>your next chapter.</span></h2>
        <Link href="/#contact" className="text-link mt-5">Tell me what you have in mind <ArrowUpRight className="size-4" /></Link>
      </section>
    </main>
  );
}
