"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { copy, profile, type Language, type Project } from "@/data/content";

export function ProjectDetail({ projects }: { projects: Record<Language, Project> }) {
  const [language, setLanguage] = useState<Language>("zh");
  const project = projects[language];
  const text = copy[language];
  return <main>
    <header className="site-shell site-header"><Link href="/" className="wordmark"><span>portfolio / 2026</span><strong>Coding with Jorlin</strong></Link><div className="header-actions"><Link href="/#work" className="nav-links">{text.backToWork}</Link><button className="language-toggle" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={language === "zh" ? "Switch to English" : "切换到中文"}>{language === "zh" ? "EN" : "中"}</button></div></header>
    <section className="site-shell detail-hero"><p className="eyebrow">{project.index} / {project.eyebrow}</p><h1>{project.name}</h1><p className="detail-summary">{project.summary}</p><div className="detail-actions"><a className="button button-dark" href={project.repo} target="_blank" rel="noreferrer">{text.viewGithub} <ArrowUpRight size={16} /></a>{project.demo && <a className="button" href={project.demo} target="_blank" rel="noreferrer">{text.openDemo}</a>}</div></section>
    <section className="site-shell detail-body"><div><div className="detail-section"><h2>{text.challenge}</h2><p>{project.caseStudy.challenge}</p></div><div className="detail-section"><h2>{text.approach}</h2><ul>{project.caseStudy.approach.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="detail-section"><h2>{text.outcome}</h2><p>{project.caseStudy.outcome}</p></div><div className="detail-section"><h2>{text.constraints}</h2><p>{project.caseStudy.constraints}</p></div></div><aside className="metrics-box"><h2>{text.metrics}</h2>{project.metrics.map((metric) => <div className="metric-row" key={metric.label}><span>{metric.label}</span><span>{metric.value}</span></div>)}<p className="hero-note">{project.role} · {project.year}</p></aside></section>
    <footer className="site-shell site-footer"><Link href="/" className="button"><ArrowLeft size={16} /> {text.backToWork}</Link><span>{profile.email}</span></footer>
  </main>;
}
