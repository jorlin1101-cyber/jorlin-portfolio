"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { copy, profile, projects, type Language } from "@/data/content";
import { ProjectPreview } from "@/components/project-preview";

export function PortfolioHome() {
  const [language, setLanguage] = useState<Language>("zh");
  const text = copy[language];
  const list = projects[language];
  const name = language === "zh" ? profile.nameZh : profile.nameEn;
  const intro = profile.intro[language];

  return (
    <main>
      <header className="site-shell site-header">
        <Link href="/" className="wordmark" aria-label="Coding with Jorlin home">
          <span>portfolio / 2026</span><strong>Coding with Jorlin</strong>
        </Link>
        <div className="header-actions">
          <nav className="nav-links" aria-label={language === "zh" ? "主导航" : "Main navigation"}>
            <a href="#work">{text.nav.work}</a><a href="#about">{text.nav.about}</a><a href="#contact">{text.nav.contact}</a>
          </nav>
          <button className="language-toggle" onClick={() => setLanguage(language === "zh" ? "en" : "zh")} aria-label={language === "zh" ? "Switch to English" : "切换到中文"}>
            {language === "zh" ? "EN" : "中"}
          </button>
        </div>
      </header>

      <section className="site-shell hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">01 — {text.kicker}</p>
          <h1 id="hero-title">{intro.title}</h1>
          <p className="hero-copy">{intro.body}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{text.nav.work} <ArrowUpRight size={16} /></a>
            <a className="button button-light" href="/resume-public.pdf" download>{text.nav.resume}</a>
          </div>
          <p className="hero-note">{name} · {text.heroNote}</p>
        </div>
        <aside className="identity-card" aria-label={language === "zh" ? "个人简介" : "Profile card"}>
          <div className="identity-portrait" />
          <h2>{name}</h2>
          <p>{language === "zh" ? "AI 应用开发 · Agent 工程" : "AI applications · agent engineering"}</p>
          <p>{language === "zh" ? "成都 / 远程" : "Chengdu / Remote"}</p>
          <span className="identity-mark">AI↗</span>
        </aside>
      </section>

      <section className="site-shell section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><p className="eyebrow">{text.workKicker}</p><div><h2 id="work-title">{text.workTitle}</h2><p>{text.workDescription}</p></div></div>
        <div className="project-grid">
          {list.map((project) => (
            <article className="project-card" key={project.slug}>
              <ProjectPreview project={project} />
              <div className="project-meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="project-footer"><div className="stack">{project.stack.slice(0, 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><Link href={`/projects/${project.slug}`} className="arrow" aria-label={`${text.viewCase}: ${project.name}`}>↗</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="about" aria-labelledby="about-title">
        <div className="section-heading"><p className="eyebrow">{text.aboutKicker}</p><div><h2 id="about-title">{text.aboutTitle}</h2></div></div>
        <div className="about-grid">
          <div><p className="about-copy">{text.aboutBody}</p><div className="skill-list">{text.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></div>
          <div className="timeline">{text.timeline.map((item) => <div className="timeline-row" key={item.period}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div>
        </div>
      </section>

      <section className="site-shell section contact" id="contact" aria-labelledby="contact-title">
        <div><p className="eyebrow">{text.contactKicker}</p><h2 id="contact-title">{text.contactTitle}</h2><p>{text.contactBody}</p></div>
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.email}`}><span><Mail size={16} /> {profile.email}</span><span>↗</span></a>
          <a className="contact-link" href={`tel:${profile.phone}`}><span><Phone size={16} /> {profile.phone}</span><span>↗</span></a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span><Github size={16} /> GitHub</span><span>↗</span></a>
        </div>
      </section>
      <footer className="site-shell site-footer"><span>© 2026 {name}</span><span>{text.footer}</span></footer>
    </main>
  );
}
