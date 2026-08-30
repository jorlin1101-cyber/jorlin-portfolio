"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Clock3,
  Code2,
  Database,
  FileText,
  FolderKanban,
  GraduationCap,
  Github,
  Home,
  Languages,
  Lightbulb,
  Mail,
  Medal,
  MessageSquareText,
  Moon,
  Search,
  Send,
  ShieldCheck,
  Sun,
  Trophy,
  Workflow,
  Wrench,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { profile, projects, type Language } from "@/data/content";

type Theme = "light" | "dark";

const sectionIds = ["home", "projects", "experience", "tools", "thoughts"] as const;
const stackIcons = [Bot, Search, Code2, Database, Workflow, ShieldCheck, ChartNoAxesCombined, Wrench];

const portfolioCopy = {
  en: {
    nav: ["Home", "Projects", "Experience", "Tools", "Thoughts"],
    profileDescription: "AI application engineer in Chengdu, building agents, retrieval systems, and automation that move from demos to dependable workflows.",
    availability: "Open to AI application & agent roles",
    heroLead: "Hi, I’m Jorlin — I turn ambiguous AI ideas into working products, with the engineering evidence to show what actually works.",
    titleSolid: "AI APPLICATION",
    titleGhost: "ENGINEER",
    statProjects: "PROJECTS SHIPPED",
    statDomains: "APPLIED AI DOMAINS",
    statRepos: "PUBLIC REPOSITORIES",
    ribbonOne: "AGENTS, RETRIEVAL, EVALUATION",
    ribbonTwo: "PYTHON, FASTAPI, NEXT.JS, RAG",
    projectsSolid: "RECENT",
    projectsGhost: "PROJECTS",
    projectIntro: "Three end-to-end systems built around code security, sales operations, and financial decision support.",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    caseStudy: "Case study",
    experienceSolid: "MY",
    experienceGhost: "EXPERIENCE",
    educationSolid: "EDUCATION",
    educationGhost: "& RECOGNITION",
    educationLabel: "Academic background",
    masterLabel: "Master’s degree",
    educationSchool: "University of Electronic Science and Technology of China",
    educationDegree: "Master’s in Electronic Information",
    educationPeriod: "Sep 2022 — Jun 2025",
    educationLocation: "Chengdu, China",
    bachelorLabel: "Bachelor’s degree",
    bachelorSchool: "Southwest Petroleum University",
    bachelorDegree: "B.Sc. in Electronic Information Science and Technology",
    bachelorPeriod: "Sep 2017 — Jun 2021",
    bachelorLocation: "Chengdu, China",
    recognitionTitle: "Selected recognition",
    toolsSolid: "CORE",
    toolsGhost: "STACK",
    thoughtsSolid: "BUILD",
    thoughtsGhost: "NOTES",
    notesLabel: "Engineering note",
    readMore: "Read case study",
    contactSolid: "LET’S WORK",
    contactGhost: "TOGETHER",
    contactIntro: "Have a role, a project, or an awkward workflow that might benefit from AI? Send me a note.",
    form: {
      name: "Name", email: "Email", topic: "Topic", message: "Message",
      namePlaceholder: "Your name", emailPlaceholder: "you@example.com", topicPlaceholder: "Select a topic",
      topics: ["Job opportunity", "Project collaboration", "Portfolio feedback", "Just saying hello"],
      messagePlaceholder: "Tell me a little about what you have in mind…", submit: "Send message",
    },
    footer: "Designed and built by Jorlin Shi.", photo: "Portrait coming soon", resume: "Résumé",
    theme: "Toggle theme", language: "切换到中文",
    experiences: [
      { period: "Apr 2026 — Present", company: "Independent AI Projects", role: "AI Application Developer", detail: "Designed and shipped three public AI systems spanning agent runtimes, hybrid retrieval, workflow automation, evaluation, and human-in-the-loop decision support.", tags: ["LLM Agents", "RAG", "Evaluation", "Full-stack"] },
      { period: "Jul 2025 — Jan 2026", company: "Simulation & Modeling", role: "Simulation Modeling Engineer", detail: "Built C++ / Python interfaces, Simulink models, and validation workflows, developing the systems thinking now applied to dependable AI products.", tags: ["C++", "Python", "Simulink", "Validation"] },
    ],
    recognitions: [
      { title: "Outstanding Graduate Student", detail: "Graduate Academic Scholarship · Second Class" },
      { title: "Provincial First Prize", detail: "China Undergraduate Mathematical Contest in Modeling" },
      { title: "MCM Honorable Mention", detail: "Team captain" },
      { title: "Research & Innovation", detail: "1 EI-indexed first-author paper · 1 invention patent application (second inventor)" },
    ],
    stack: [
      ["LLM Agents", "Orchestration & tool use"], ["RAG", "Hybrid retrieval & citations"],
      ["Python", "Services, evaluation & data"], ["FastAPI", "Typed APIs and workflows"],
      ["Next.js", "Product-facing interfaces"], ["Security", "Guardrails & auditability"],
      ["Evaluation", "Metrics, tests & traces"], ["Docker", "Reproducible environments"],
    ],
    notes: [
      { minutes: "6 min read", title: "Why an agent needs a runtime, not just a clever prompt", body: "Budgets, checkpoints, retries, and validation gates turn a fragile demo into a workflow you can inspect and resume.", slug: "securepr-agent" },
      { minutes: "5 min read", title: "What hybrid retrieval changed in a small CRM knowledge base", body: "A practical look at combining embeddings, BM25, and reciprocal rank fusion while keeping every recommendation tied to evidence.", slug: "ai-sales-lead-crm-automation" },
      { minutes: "7 min read", title: "Where an LLM should stop in a lending workflow", body: "Natural language is useful for guidance; calculations and final credit decisions need deterministic rules and accountable humans.", slug: "fincredit-copilot" },
    ],
  },
  zh: {
    nav: ["首页", "项目", "经历", "工具", "笔记"],
    profileDescription: "坐标成都的 AI 应用开发者，专注 Agent、检索与自动化，让 AI 从演示走向可靠的工作流。",
    availability: "正在寻找 AI 应用与 Agent 方向机会",
    heroLead: "你好，我是 Jorlin。我把模糊的 AI 想法做成真正能运行的产品，也用工程证据说明它到底有没有效果。",
    titleSolid: "AI 应用", titleGhost: "工程师",
    statProjects: "个已完成项目", statDomains: "类 AI 应用场景", statRepos: "个公开代码仓库",
    ribbonOne: "AGENT、检索、评测", ribbonTwo: "PYTHON、FASTAPI、NEXT.JS、RAG",
    projectsSolid: "近期", projectsGhost: "项目",
    projectIntro: "围绕代码安全、销售运营和金融决策辅助，完成三个端到端 AI 系统。",
    liveDemo: "打开项目界面",
    sourceCode: "查看源码",
    caseStudy: "查看项目详情",
    experienceSolid: "我的", experienceGhost: "经历", toolsSolid: "核心", toolsGhost: "技术栈",
    educationSolid: "教育", educationGhost: "与荣誉",
    educationLabel: "教育经历",
    masterLabel: "硕士研究生",
    educationSchool: "电子科技大学",
    educationDegree: "电子信息（硕士）",
    educationPeriod: "2022.09 — 2025.06",
    educationLocation: "中国 · 成都",
    bachelorLabel: "本科",
    bachelorSchool: "西南石油大学",
    bachelorDegree: "电子信息科学与技术（本科）",
    bachelorPeriod: "2017.09 — 2021.06",
    bachelorLocation: "中国 · 成都",
    recognitionTitle: "个人成果与奖项",
    thoughtsSolid: "构建", thoughtsGhost: "笔记", notesLabel: "工程笔记", readMore: "查看项目复盘",
    contactSolid: "一起", contactGhost: "聊聊",
    contactIntro: "如果你有合适的岗位、项目，或者一个可能被 AI 改善的麻烦流程，欢迎给我留言。",
    form: {
      name: "姓名", email: "邮箱", topic: "联系主题", message: "留言",
      namePlaceholder: "你的姓名", emailPlaceholder: "you@example.com", topicPlaceholder: "请选择联系主题",
      topics: ["工作机会", "项目合作", "作品集建议", "只是打个招呼"],
      messagePlaceholder: "简单介绍一下你想聊的事情……", submit: "发送邮件",
    },
    footer: "由石卓灵设计与开发。", photo: "职业照稍后更新", resume: "个人简历",
    theme: "切换明暗主题", language: "Switch to English",
    experiences: [
      { period: "2026.04 — 至今", company: "个人 AI 项目实践", role: "AI 应用开发者", detail: "设计并交付三个公开 AI 系统，覆盖 Agent Runtime、混合检索、流程自动化、评测以及人工确认的决策辅助。", tags: ["LLM Agent", "RAG", "评测", "全栈开发"] },
      { period: "2025.07 — 2026.01", company: "仿真与建模", role: "仿真建模工程师", detail: "完成 C++ / Python 接口、Simulink 模型与验证流程，并将系统化建模思维延伸到可靠 AI 应用开发中。", tags: ["C++", "Python", "Simulink", "验证"] },
    ],
    recognitions: [
      { title: "优秀研究生", detail: "研究生学业二等奖学金" },
      { title: "省一等奖", detail: "全国大学生数学建模竞赛" },
      { title: "MCM H 奖", detail: "美国大学生数学建模竞赛 · 队长" },
      { title: "科研与创新", detail: "EI 期刊第一作者论文 1 篇 · 发明专利申请 1 项（第二发明人）" },
    ],
    stack: [
      ["LLM Agent", "编排与工具调用"], ["RAG", "混合检索与引用"], ["Python", "服务、评测与数据"],
      ["FastAPI", "强类型 API 与流程"], ["Next.js", "面向产品的交互界面"], ["安全", "护栏与可审计性"],
      ["评测", "指标、测试与追踪"], ["Docker", "可复现运行环境"],
    ],
    notes: [
      { minutes: "约 6 分钟", title: "为什么 Agent 需要 Runtime，而不只是一个聪明的 Prompt", body: "预算、检查点、重试与验证门禁，如何把容易失控的演示变成可以检查和恢复的工程流程。", slug: "securepr-agent" },
      { minutes: "约 5 分钟", title: "混合检索为小型 CRM 知识库带来了什么", body: "结合向量、BM25 与 RRF，同时让每一条客户建议都能回到真实证据。", slug: "ai-sales-lead-crm-automation" },
      { minutes: "约 7 分钟", title: "在住房贷款流程中，大模型应该在哪里停下来", body: "自然语言适合解释与引导，但计算和最终授信决定仍应交给确定性规则与有责任主体的人。", slug: "fincredit-copilot" },
    ],
  },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioHome() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("home");
  const ui = portfolioCopy[language];
  const list = projects[language];
  const name = language === "zh" ? profile.nameZh : profile.nameEn;

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "zh") setLanguage("zh");
  }, []);
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; }, [language]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { threshold: [0.2, 0.45, 0.7], rootMargin: "-20% 0px -55%" });
    sectionIds.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  function updateGlow(event: React.PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`);
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const sender = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const topic = String(form.get("topic") || "Portfolio contact");
    const message = String(form.get("message") || "");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`[Portfolio] ${topic} — ${sender}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${sender}\nEmail: ${email}`)}`;
  }

  const navIcons = [Home, FolderKanban, BriefcaseBusiness, Wrench, MessageSquareText];

  return (
    <div className={`portfolio-root ${theme}`} onPointerMove={updateGlow}>
      <div className="ambient ambient-orange" /><div className="ambient ambient-lime" /><div className="cursor-glow" />
      <nav className="floating-nav" aria-label={language === "zh" ? "页面导航" : "Page navigation"}>
        {sectionIds.map((id, index) => { const Icon = navIcons[index]; return (
          <button type="button" className={activeSection === id ? "nav-icon active" : "nav-icon"} key={id} onClick={() => scrollToSection(id)} aria-label={ui.nav[index]}>
            <Icon size={19} /><span className="tooltip">{ui.nav[index]}</span>
          </button>
        ); })}
        <span className="nav-separator" />
        <button type="button" className="nav-icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={ui.theme}>{theme === "light" ? <Moon size={19} /> : <Sun size={19} />}<span className="tooltip">{ui.theme}</span></button>
        <button type="button" className="language-switch" onClick={() => setLanguage(language === "en" ? "zh" : "en")} aria-label={ui.language}><Languages size={17} /><span>{language === "en" ? "中文" : "EN"}</span></button>
      </nav>

      <main className="portfolio-layout" id="home">
        <aside className="profile-column"><div className="profile-card reveal-card">
          <div className="orbit orbit-top" aria-hidden="true" />
          <div className="profile-photo-placeholder"><img src="/assets/profile-photo.jpg" alt={language === "zh" ? "石卓灵职业形象照" : "Professional portrait of Jorlin Shi"} /></div>
          <h1>{name}</h1><p>{ui.profileDescription}</p>
          <div className="profile-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a><a href="/resume-public.pdf" target="_blank" aria-label={ui.resume}><FileText size={20} /></a></div>
          <div className="availability"><span />{ui.availability}</div><div className="orbit orbit-bottom" aria-hidden="true" />
        </div></aside>

        <div className="content-column">
          <section className="mobile-profile reveal-card"><div className="mobile-photo"><img src="/assets/profile-photo.jpg" alt={language === "zh" ? "石卓灵职业形象照" : "Professional portrait of Jorlin Shi"} /></div><div><h1>{name}</h1><p>{ui.profileDescription}</p></div></section>
          <section className="hero-panel section-block"><p className="hero-intro">{ui.heroLead}</p><h2 className="display-heading"><span>{ui.titleSolid}</span><em>{ui.titleGhost}</em></h2>
            <div className="stats-grid"><div><strong>3</strong><span>{ui.statProjects}</span></div><div><strong>3</strong><span>{ui.statDomains}</span></div><div><strong>3</strong><span>{ui.statRepos}</span></div></div>
            <div className="ribbon-row"><span>{ui.ribbonOne}</span><span>{ui.ribbonTwo}</span></div>
          </section>

          <section className="section-block" id="projects"><div className="section-title-row"><div><h2 className="section-title"><span>{ui.projectsSolid}</span> <em>{ui.projectsGhost}</em></h2><p>{ui.projectIntro}</p></div><span className="section-count">03</span></div>
            <div className="reference-project-grid">{list.map((project) => {
              const primaryHref = project.demo || `/projects/${project.slug}?lang=${language}`;
              const primaryExternal = Boolean(project.demo);
              return (
                <article className="reference-project-card tilt-card" key={project.slug}>
                  <a
                    className="project-primary-link"
                    href={primaryHref}
                    target={primaryExternal ? "_blank" : undefined}
                    rel={primaryExternal ? "noreferrer" : undefined}
                    aria-label={`${project.name} — ${project.demo ? ui.liveDemo : ui.caseStudy}`}
                  >
                    <div className={`project-visual ${project.accent}`}>
                      <span className="project-visual-title">{project.name}</span>
                      <span className="visual-square" /><span className="visual-circle" />
                      <span className="image-arrow"><ArrowUpRight size={18} /></span>
                    </div>
                    <div className="reference-project-body"><h3>{project.name}</h3><p>{project.stack.slice(0, 3).join(" · ")}</p></div>
                  </a>
                  <div className="project-link-row">
                    <a href={primaryHref} target={primaryExternal ? "_blank" : undefined} rel={primaryExternal ? "noreferrer" : undefined}>
                      {project.demo ? ui.liveDemo : ui.caseStudy}<ArrowUpRight size={14} />
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${ui.sourceCode}`}>
                      <Github size={14} />{ui.sourceCode}
                    </a>
                  </div>
                </article>
              );
            })}</div>
          </section>

          <section className="section-block" id="experience"><h2 className="section-title"><span>{ui.experienceSolid}</span> <em>{ui.experienceGhost}</em></h2><div className="experience-list">{ui.experiences.map((item, index) => (
            <article className="experience-card tilt-card" key={item.period}><span className="experience-index">0{index + 1}</span><div className="experience-main"><p className="experience-period">{item.period}</p><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.detail}</p><div className="project-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
          ))}</div></section>

          <section className="section-block education-section" id="education">
            <h2 className="section-title"><span>{ui.educationSolid}</span> <em>{ui.educationGhost}</em></h2>
            <div className="education-recognition-grid">
              <article className="education-card tilt-card">
                <div className="education-icon"><GraduationCap size={28} /></div>
                <div className="education-copy"><span>{ui.educationLabel}</span><div className="degree-list">
                  <article className="degree-entry"><small>{ui.masterLabel}</small><h3>{ui.educationSchool}</h3><p>{ui.educationDegree}</p><div><time>{ui.educationPeriod}</time><span>{ui.educationLocation}</span></div></article>
                  <article className="degree-entry"><small>{ui.bachelorLabel}</small><h3>{ui.bachelorSchool}</h3><p>{ui.bachelorDegree}</p><div><time>{ui.bachelorPeriod}</time><span>{ui.bachelorLocation}</span></div></article>
                </div></div>
                <strong>EDU</strong>
              </article>
              <div className="recognition-panel">
                <div className="recognition-heading"><Trophy size={19} /><h3>{ui.recognitionTitle}</h3></div>
                <div className="recognition-list">{ui.recognitions.map((item, index) => {
                  const Icon = index === 3 ? Lightbulb : Medal;
                  return <article className="recognition-row" key={item.title}><Icon size={18} /><div><h4>{item.title}</h4><p>{item.detail}</p></div></article>;
                })}</div>
              </div>
            </div>
          </section>

          <section className="section-block" id="tools"><h2 className="section-title"><span>{ui.toolsSolid}</span> <em>{ui.toolsGhost}</em></h2><div className="stack-grid">{ui.stack.map(([title, description], index) => { const Icon = stackIcons[index]; return <article className="stack-card tilt-card" key={title}><Icon size={22} /><div><h3>{title}</h3><p>{description}</p></div></article>; })}</div></section>

          <section className="section-block" id="thoughts"><h2 className="section-title"><span>{ui.thoughtsSolid}</span> <em>{ui.thoughtsGhost}</em></h2><div className="notes-grid">{ui.notes.map((note) => (
            <Link href={`/projects/${note.slug}?lang=${language}`} className="note-card tilt-card" key={note.slug}><div className="note-meta"><span>{ui.notesLabel}</span><span>·</span><Clock3 size={13} /><span>{note.minutes}</span></div><h3>{note.title}</h3><p>{note.body}</p><div className="read-more">{ui.readMore}<ArrowUpRight size={15} /></div></Link>
          ))}</div></section>

          <section className="section-block contact-section" id="contact"><h2 className="section-title"><span>{ui.contactSolid}</span> <em>{ui.contactGhost}</em></h2><p className="contact-intro">{ui.contactIntro}</p>
            <form className="contact-form" onSubmit={submitContact}><div className="form-grid"><label>{ui.form.name}<input name="name" type="text" placeholder={ui.form.namePlaceholder} required /></label><label>{ui.form.email}<input name="email" type="email" placeholder={ui.form.emailPlaceholder} required /></label></div><label>{ui.form.topic}<select name="topic" defaultValue="" required><option value="" disabled>{ui.form.topicPlaceholder}</option>{ui.form.topics.map((topic) => <option key={topic}>{topic}</option>)}</select></label><label>{ui.form.message}<textarea name="message" rows={5} placeholder={ui.form.messagePlaceholder} required /></label><button type="submit" className="submit-button"><Send size={16} />{ui.form.submit}</button></form>
          </section>
          <footer className="reference-footer">© 2026 {name} · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={`mailto:${profile.email}`}>{profile.email}</a><span>{ui.footer}</span></footer>
        </div>
      </main>
    </div>
  );
}
