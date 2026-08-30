import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects, type Language } from "@/data/content";

export function generateStaticParams() {
  return projects.zh.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const zh = projects.zh.find((project) => project.slug === slug);
  const en = projects.en.find((project) => project.slug === slug);
  if (!zh || !en) notFound();
  const localized: Record<Language, typeof zh> = { zh, en };
  return <ProjectDetail projects={localized} />;
}
