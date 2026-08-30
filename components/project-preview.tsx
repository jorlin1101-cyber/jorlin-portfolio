import type { Project } from "@/data/content";

export function ProjectPreview({ project }: { project: Project }) {
  const coverBySlug: Record<string, string> = {
    "securepr-agent": "/assets/securepr-cover.png",
    "ai-sales-lead-crm-automation": "/assets/crm-cover.png",
    "fincredit-copilot": "/assets/fincredit-cover.png",
  };
  return (
    <div className={`project-preview ${project.accent}`} style={{ backgroundImage: `linear-gradient(180deg, rgba(20,25,25,.08), rgba(20,25,25,.28)), url(${coverBySlug[project.slug]})`, backgroundSize: "cover", backgroundPosition: "center" }} aria-hidden="true">
      <div className="preview-top"><span>{project.index} / {project.name}</span><span>↗</span></div>
      <div className="preview-window">
        <div className="preview-line" />
        <div className="preview-line short" />
        <div className="preview-grid">
          <div className="preview-block" />
          <div className="preview-block" />
        </div>
        <div className="preview-line" />
      </div>
    </div>
  );
}
