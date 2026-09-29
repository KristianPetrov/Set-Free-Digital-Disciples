import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { socialImage } from "@/lib/social-image";

export const alt = "A live website project designed by Set Free Digital Disciples";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return socialImage({ title: project.name, subtitle: project.kind, screenshot: project.screenshot });
}
