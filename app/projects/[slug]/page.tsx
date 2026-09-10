import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { projects, type Language } from "@/data/content";

export function generateStaticParams() {
  return projects.zh.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ lang?: string }> }) {
  const [{ slug }, { lang }] = await Promise.all([params, searchParams]);
  const zh = projects.zh.find((project) => project.slug === slug);
  const en = projects.en.find((project) => project.slug === slug);
  if (!zh || !en) notFound();
  const localized: Record<Language, typeof zh> = { zh, en };
  return <ProjectDetail projects={localized} initialLanguage={lang === "en" ? "en" : "zh"} />;
}
