"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Compass, Languages, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { copy, profile, type Language, type Project } from "@/data/content";

export function ProjectDetail({ projects }: { projects: Record<Language, Project> }) {
  const [language, setLanguage] = useState<Language>("en");
  const [localDemoAvailable, setLocalDemoAvailable] = useState(false);
  const project = projects[language];
  const text = copy[language];
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "zh") setLanguage("zh");
    setLocalDemoAvailable(["127.0.0.1", "localhost"].includes(window.location.hostname));
  }, []);
  const demoHref = project.demo || (localDemoAvailable ? project.localDemo : undefined);
  return <main className={`project-detail-page lang-${language}`}>
    <header className="site-shell site-header"><Link href="/" className="wordmark"><span>{language === "zh" ? "作品集 / 2026" : "portfolio / 2026"}</span><strong>{language === "zh" ? "与 Jorlin 一起 Coding" : "Coding with Jorlin"}</strong></Link><div className="header-actions"><Link href="/#projects" className="nav-links">{text.backToWork}</Link><button className="language-toggle" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={language === "zh" ? "Switch to English" : "切换到中文"}><Languages size={16} />{language === "zh" ? "EN" : "中文"}</button></div></header>
    <section className="site-shell detail-hero"><p className="eyebrow">{project.index} / {project.eyebrow}</p><h1>{project.name}</h1><p className="detail-summary">{project.summary}</p><div className="detail-actions">{demoHref && <a className="button button-dark" href={demoHref} target="_blank" rel="noreferrer">{text.enterSystem} <ArrowUpRight size={16} /></a>}<a className="button" href={project.repo} target="_blank" rel="noreferrer">{text.viewGithub} <ArrowUpRight size={16} /></a></div></section>
    <section className="site-shell system-preview-section">
      <div className="system-preview-heading"><div><p className="eyebrow">{text.systemPreview}</p><h2>{project.name}</h2></div><p>{text.previewDescription}</p></div>
      {demoHref ? <a className="system-preview-browser" href={demoHref} target="_blank" rel="noreferrer" aria-label={`${text.enterSystem}: ${project.name}`}>
        <span className="browser-bar"><i /><i /><i /><span>{demoHref}</span></span>
        <span className="preview-canvas"><img src={project.previewImage} alt={`${project.name} ${text.systemPreview}`} /><strong>{text.enterSystem}<ArrowUpRight size={18} /></strong></span>
      </a> : <div className="system-preview-browser preview-disabled">
        <span className="browser-bar"><i /><i /><i /><span>{project.name}</span></span>
        <span className="preview-canvas"><img src={project.previewImage} alt={`${project.name} ${text.systemPreview}`} /><strong>{text.publicDemoPending}</strong></span>
      </div>}
    </section>
    <section className="site-shell project-orientation">
      <div className="orientation-heading"><span>{text.overview}</span><p>{project.caseStudy.context}</p></div>
      <div className="orientation-grid">
        <article><Users size={21} /><h2>{text.audience}</h2><p>{project.audience}</p></article>
        <article><CheckCircle2 size={21} /><h2>{text.capabilities}</h2><ul>{project.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><Compass size={21} /><h2>{text.quickStart}</h2><ol>{project.quickStart.map((item) => <li key={item}>{item}</li>)}</ol></article>
      </div>
      <div className="demo-guidance"><p>{project.demoNote}</p>{demoHref && <a className="button button-dark" href={demoHref} target="_blank" rel="noreferrer">{text.enterSystem}<ArrowUpRight size={16} /></a>}</div>
    </section>
    <section className="site-shell detail-body"><div><div className="detail-section"><h2>{text.challenge}</h2><p>{project.caseStudy.challenge}</p></div><div className="detail-section"><h2>{text.approach}</h2><ul>{project.caseStudy.approach.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="detail-section"><h2>{text.outcome}</h2><p>{project.caseStudy.outcome}</p></div><div className="detail-section"><h2>{text.constraints}</h2><p>{project.caseStudy.constraints}</p></div></div><aside className="metrics-box"><h2>{text.metrics}</h2>{project.metrics.map((metric) => <div className="metric-row" key={metric.label}><span>{metric.label}</span><span>{metric.value}</span></div>)}<p className="hero-note">{project.role} · {project.year}</p></aside></section>
    <footer className="site-shell site-footer"><Link href="/" className="button"><ArrowLeft size={16} /> {text.backToWork}</Link><span>{profile.email}</span></footer>
  </main>;
}
