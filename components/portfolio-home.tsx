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
const projectOrder = ["fincredit-copilot", "securepr-agent", "ai-sales-lead-crm-automation"];

const portfolioCopy = {
  en: {
    nav: ["Home", "Projects", "Experience", "Tools", "Thoughts"],
    profileDescription: "AI application and Agent engineer turning real-world workflows into AI systems people can actually use.",
    availability: "Open to AI application & agent roles",
    heroLead: "Coding with Jorlin. I build intelligent agents, knowledge retrieval, workflow automation, and reliable human-in-the-loop experiences.",
    titleSolid: "AI APPLICATION",
    titleGhost: "ENGINEER",
    statProjects: "PROJECTS SHIPPED",
    statDomains: "APPLIED AI DOMAINS",
    statRepos: "PUBLIC REPOSITORIES",
    ribbonItems: ["AGENTS, RETRIEVAL, EVALUATION", "PYTHON, FASTAPI, NEXT.JS, RAG"],
    projectsSolid: "RECENT",
    projectsGhost: "PROJECTS",
    projectIntro: "Three end-to-end systems built around code security, sales operations, and financial decision support.",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    caseStudy: "Case study",
    experienceSolid: "MY",
    experienceGhost: "EXPERIENCE",
    experienceIntro: "A compact record of the problems I owned, the systems I built, and the evidence that the work held up.",
    educationSolid: "EDUCATION",
    educationGhost: "& RECOGNITION",
    educationLabel: "Academic background",
    masterLabel: "Master’s degree",
    educationSchool: "University of Electronic Science and Technology of China",
    educationDegree: "Master’s in Electronic Information",
    educationPeriod: "Sep 2022 — Jun 2025",
    educationLocation: "Chengdu, China",
    educationTags: ["Project 985", "Project 211"],
    bachelorLabel: "Bachelor’s degree",
    bachelorSchool: "Southwest Petroleum University",
    bachelorDegree: "B.Sc. in Electronic Information Science and Technology",
    bachelorPeriod: "Sep 2017 — Jun 2021",
    bachelorLocation: "Chengdu, China",
    bachelorTags: ["Double First-Class"],
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
      { period: "Apr 2026 — Present", company: "Independent AI Product Practice", role: "AI Application & Agent Engineer", detail: "Owned the path from problem framing and architecture to interface design, evaluation, and reproducible delivery across three public AI systems.", highlights: ["Built a resumable agent runtime with budgets, checkpoints, specialist review, and human validation.", "Implemented hybrid RAG with BGE-M3, BM25, RRF, grounded generation, and retrieval evaluation.", "Connected typed APIs, multi-turn state, CRM automation, observability, and product-facing interfaces."], tags: ["LLM Agents", "RAG", "Evaluation", "Full-stack"] },
      { period: "Jul 2025 — Jan 2026", company: "Simulation & Modeling", role: "Simulation Modeling Engineer", detail: "Translated engineering requirements into executable models and validation workflows, building the systems mindset now applied to reliable AI products.", highlights: ["Developed and validated C++ / Python integration interfaces for simulation workflows.", "Built Simulink / Stateflow models and supported verification against expected behavior.", "Worked across requirements, implementation, debugging, and delivery rather than treating modeling as an isolated artifact."], tags: ["C++", "Python", "Simulink", "Stateflow", "Validation"] },
    ],
    recognitions: [
      { title: "Outstanding Graduate Student", detail: "Graduate Academic Scholarship · Second Class" },
      { title: "Provincial First Prize", detail: "China Undergraduate Mathematical Contest in Modeling" },
      { title: "MCM Honorable Mention", detail: "Team captain" },
      { title: "Research & Innovation", detail: "1 EI-indexed first-author paper · 1 invention patent application (second inventor)" },
    ],
    stack: [
      ["LLM & Context Engineering", "Model APIs · prompting · structured output · tool calling"],
      ["Agent Orchestration", "LangGraph · runtime harness · state · checkpoints · human approval"],
      ["RAG & Retrieval", "BGE-M3 · BM25 · RRF · chunking · grounded generation"],
      ["Backend APIs", "Python · FastAPI · Pydantic · REST workflows"],
      ["Data & State", "PostgreSQL · SQLite · Redis Streams · conversation memory"],
      ["Workflow Integration", "n8n · CRM / Notion sync · webhooks · idempotency"],
      ["Evaluation & Quality", "pytest · retrieval metrics · eval sets · Ruff · mypy"],
      ["Observability", "OpenTelemetry · Prometheus · logs · traces · failure analysis"],
      ["Product Frontend", "TypeScript · React · Next.js · bilingual interaction design"],
      ["Delivery", "Docker · CI checks · reproducible local and public demos"],
    ],
    notes: [
      { minutes: "9 min read", title: "A reliable agent needs a runtime, not just a better prompt", body: "A practical architecture for long-running agents: explicit state, token and time budgets, idempotent tools, checkpoints, retries, and validation gates. The key question is not whether an agent can finish once, but whether a failed run can be explained, resumed, and evaluated without repeating completed work.", topics: ["Durable execution", "Checkpoint", "HITL"], slug: "securepr-agent" },
      { minutes: "10 min read", title: "Hybrid retrieval is only useful when you can measure the retrieval", body: "Why dense vectors and BM25 fail in different ways, how reciprocal rank fusion combines them without pretending their scores are comparable, and how Hit@k, MRR, nDCG, citation coverage, and answer faithfulness reveal different failure modes in a small production-minded RAG system.", topics: ["BGE-M3", "BM25 + RRF", "RAG evaluation"], slug: "ai-sales-lead-crm-automation" },
      { minutes: "8 min read", title: "Designing multi-turn agents without duplicating messages or losing context", body: "A conversation is not a single request. This note separates conversation IDs, message IDs, and idempotency keys; models a PostgreSQL-backed event history; controls context windows; and uses a transactional handoff so CRM or Notion writes remain replayable instead of becoming hidden side effects.", topics: ["PostgreSQL", "Idempotency", "Memory"], slug: "ai-sales-lead-crm-automation" },
      { minutes: "9 min read", title: "Where the LLM should stop in a high-stakes lending workflow", body: "An engineering boundary for financial AI: use retrieval for policy evidence and language models for explanation, but keep DTI / LTV calculations, policy versions, approval permissions, and final decisions in deterministic and auditable components with explicit human checkpoints.", topics: ["Rule engine", "Evidence", "Human approval"], slug: "fincredit-copilot" },
    ],
  },
  zh: {
    nav: ["首页", "项目", "经历", "工具", "笔记"],
    profileDescription: "AI 应用与 Agent 工程师，致力于把真实业务流程变成真正可用的 AI 系统。",
    availability: "正在寻找 AI 应用与 Agent 方向机会",
    heroLead: "和 Jorlin 一起，把 AI 想法变成真正可用的产品。我从真实业务问题出发，构建融合智能体、知识检索、流程自动化与人工协作的 AI 系统。",
    titleSolid: "AI 应用", titleGhost: "工程师",
    statProjects: "个已完成项目", statDomains: "类 AI 应用场景", statRepos: "个公开代码仓库",
    ribbonItems: ["Agent 编排", "RAG 检索", "评测体系", "全栈交付"],
    projectsSolid: "近期", projectsGhost: "项目",
    projectIntro: "围绕代码安全、销售运营和金融决策辅助，完成三个端到端 AI 系统。",
    liveDemo: "打开项目界面",
    sourceCode: "查看源码",
    caseStudy: "查看项目详情",
    experienceSolid: "我的", experienceGhost: "经历", toolsSolid: "核心", toolsGhost: "技术栈",
    experienceIntro: "不只列出做过什么，也说明我负责的问题、采取的工程方法，以及可以被验证的结果。",
    educationSolid: "教育", educationGhost: "与荣誉",
    educationLabel: "教育经历",
    masterLabel: "硕士研究生",
    educationSchool: "电子科技大学",
    educationDegree: "电子信息（硕士）",
    educationPeriod: "2022.09 — 2025.06",
    educationLocation: "中国 · 成都",
    educationTags: ["985", "211"],
    bachelorLabel: "本科",
    bachelorSchool: "西南石油大学",
    bachelorDegree: "电子信息科学与技术（本科）",
    bachelorPeriod: "2017.09 — 2021.06",
    bachelorLocation: "中国 · 成都",
    bachelorTags: ["双一流"],
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
      { period: "2026.04 — 至今", company: "个人 AI 产品实践", role: "AI 应用与 Agent 工程师", detail: "独立负责问题定义、架构设计、交互实现、效果评测与可复现交付，完成三个公开 AI 系统。", highlights: ["构建支持预算控制、检查点、专业角色审查与人工确认的可恢复 Agent Runtime。", "实现融合 BGE-M3、BM25、RRF、Grounded Generation 与检索评测的混合 RAG 链路。", "打通强类型 API、多轮状态、CRM 自动化、可观测性与面向用户的产品界面。"], tags: ["LLM Agent", "RAG", "评测", "全栈开发"] },
      { period: "2025.07 — 2026.01", company: "仿真与建模", role: "仿真建模工程师", detail: "将工程需求转化为可执行模型和验证流程，并把系统化建模思维延伸到可靠 AI 产品开发中。", highlights: ["开发并验证面向仿真流程的 C++ / Python 跨语言集成接口。", "使用 Simulink / Stateflow 构建模型，并依据预期行为完成验证与问题定位。", "覆盖需求理解、实现、调试和交付支持，而不是把模型作为孤立产物。"], tags: ["C++", "Python", "Simulink", "Stateflow", "验证"] },
    ],
    recognitions: [
      { title: "优秀研究生", detail: "研究生学业二等奖学金" },
      { title: "省一等奖", detail: "全国大学生数学建模竞赛" },
      { title: "MCM H 奖", detail: "美国大学生数学建模竞赛 · 队长" },
      { title: "科研与创新", detail: "EI 期刊第一作者论文 1 篇 · 发明专利申请 1 项（第二发明人）" },
    ],
    stack: [
      ["LLM 与上下文工程", "模型 API · Prompt · 结构化输出 · 工具调用"],
      ["Agent 编排", "LangGraph · Runtime Harness · 状态 · 检查点 · 人工确认"],
      ["RAG 与检索", "BGE-M3 · BM25 · RRF · 文档切分 · Grounded Generation"],
      ["后端 API", "Python · FastAPI · Pydantic · REST 工作流"],
      ["数据与状态", "PostgreSQL · SQLite · Redis Streams · 对话记忆"],
      ["流程集成", "n8n · CRM / Notion 同步 · Webhook · 幂等处理"],
      ["评测与质量", "pytest · 检索指标 · 评测集 · Ruff · mypy"],
      ["可观测性", "OpenTelemetry · Prometheus · 日志 · Trace · 失败分析"],
      ["产品前端", "TypeScript · React · Next.js · 中英双语交互"],
      ["交付部署", "Docker · CI 检查 · 可复现本地与公网演示"],
    ],
    notes: [
      { minutes: "约 9 分钟", title: "可靠的 Agent 需要 Runtime，而不只是更聪明的 Prompt", body: "从显式状态、Token 与时间预算、幂等工具、Checkpoint、重试到验证门禁，拆解长流程 Agent 的工程骨架。真正需要回答的不是“它能否成功一次”，而是失败能否解释、是否能从断点继续，以及如何避免重复执行已经完成的步骤。", topics: ["持久化执行", "检查点", "人工确认"], slug: "securepr-agent" },
      { minutes: "约 10 分钟", title: "混合检索的价值，必须通过评测才能成立", body: "分析向量检索与 BM25 各自容易漏掉什么，RRF 为什么能在不直接比较分数的情况下融合排序，以及 Hit@k、MRR、nDCG、引用覆盖率和答案忠实度分别能暴露 RAG 链路中的哪一种失败。", topics: ["BGE-M3", "BM25 + RRF", "RAG 评测"], slug: "ai-sales-lead-crm-automation" },
      { minutes: "约 8 分钟", title: "怎样让多轮 Agent 既不丢上下文，也不重复处理消息", body: "区分 conversation_id、message_id 与 idempotency_key，用 PostgreSQL 保存可回放的对话事件，控制上下文窗口，并通过事务化交接让 CRM / Notion 写入可重试、可追踪，而不是藏在模型调用后的不可控副作用里。", topics: ["PostgreSQL", "幂等", "对话记忆"], slug: "ai-sales-lead-crm-automation" },
      { minutes: "约 9 分钟", title: "在高风险住房贷款流程中，大模型应该在哪里停下来", body: "给金融 AI 划定工程边界：政策依据交给检索，解释与引导交给大模型；DTI / LTV、政策版本、审批权限和最终决定则保留在确定性、可审计的组件中，并设置明确的人工检查点。", topics: ["规则引擎", "证据链", "人工审批"], slug: "fincredit-copilot" },
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
  const list = [...projects[language]].sort(
    (left, right) => projectOrder.indexOf(left.slug) - projectOrder.indexOf(right.slug),
  );
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
    <div className={`portfolio-root ${theme} lang-${language}`} onPointerMove={updateGlow}>
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
          <div className="profile-photo-placeholder"><img src="/assets/profile-photo-natural.jpg" alt={language === "zh" ? "石卓灵职业形象照" : "Professional portrait of Jorlin Shi"} /></div>
          <h1>{name}</h1><p>{ui.profileDescription}</p>
          <div className="profile-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a><a href="/resume-public.pdf" target="_blank" aria-label={ui.resume}><FileText size={20} /></a></div>
          <div className="availability"><span />{ui.availability}</div><div className="orbit orbit-bottom" aria-hidden="true" />
        </div></aside>

        <div className="content-column">
          <section className="mobile-profile reveal-card"><div className="mobile-photo"><img src="/assets/profile-photo-natural.jpg" alt={language === "zh" ? "石卓灵职业形象照" : "Professional portrait of Jorlin Shi"} /></div><div><h1>{name}</h1><p>{ui.profileDescription}</p></div></section>
          <section className="hero-panel section-block"><p className="hero-intro">{ui.heroLead}</p><h2 className="display-heading"><span>{ui.titleSolid}</span><em>{ui.titleGhost}</em></h2>
            <div className="stats-grid"><div><strong>3</strong><span>{ui.statProjects}</span></div><div><strong>3</strong><span>{ui.statDomains}</span></div><div><strong>3</strong><span>{ui.statRepos}</span></div></div>
            <div className="ribbon-row" aria-label={language === "zh" ? "核心能力" : "Core capabilities"}>
              {ui.ribbonItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          </section>

          <section className="section-block" id="projects"><div className="section-title-row"><div><h2 className="section-title"><span>{ui.projectsSolid}</span> <em>{ui.projectsGhost}</em></h2><p>{ui.projectIntro}</p></div><span className="section-count">03</span></div>
            <div className="reference-project-grid">{list.map((project) => {
              const primaryHref = `/projects/${project.slug}?lang=${language}`;
              return (
                <article className="reference-project-card tilt-card" key={project.slug}>
                  <a
                    className="project-primary-link"
                    href={primaryHref}
                    aria-label={`${project.name} — ${ui.caseStudy}`}
                  >
                    <div className={`project-visual ${project.accent}`}>
                      <span className="project-visual-title">{project.name}</span>
                      <span className="visual-square" /><span className="visual-circle" />
                      <span className="image-arrow"><ArrowUpRight size={18} /></span>
                    </div>
                    <div className="reference-project-body"><h3>{project.name}</h3><p>{project.stack.slice(0, 3).join(" · ")}</p></div>
                  </a>
                  <div className="project-link-row">
                    <a href={primaryHref}>{ui.caseStudy}<ArrowUpRight size={14} /></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{ui.liveDemo}<ArrowUpRight size={14} /></a>}
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${ui.sourceCode}`}>
                      <Github size={14} />{ui.sourceCode}
                    </a>
                  </div>
                </article>
              );
            })}</div>
          </section>

          <section className="section-block" id="experience"><div className="section-title-row"><div><h2 className="section-title"><span>{ui.experienceSolid}</span> <em>{ui.experienceGhost}</em></h2><p>{ui.experienceIntro}</p></div></div><div className="experience-list">{ui.experiences.map((item, index) => (
            <article className="experience-card tilt-card" key={item.period}><span className="experience-index">0{index + 1}</span><div className="experience-main"><p className="experience-period">{item.period}</p><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.detail}</p><ul className="experience-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="project-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
          ))}</div></section>

          <section className="section-block education-section" id="education">
            <h2 className="section-title"><span>{ui.educationSolid}</span> <em>{ui.educationGhost}</em></h2>
            <div className="education-recognition-grid">
              <article className="education-card tilt-card">
                <div className="education-icon"><GraduationCap size={28} /></div>
                <div className="education-copy"><span>{ui.educationLabel}</span><div className="degree-list">
                  <article className="degree-entry"><small>{ui.masterLabel}</small><div className="degree-title-row"><h3>{ui.educationSchool}</h3><div className="school-badges">{ui.educationTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><p>{ui.educationDegree}</p><div><time>{ui.educationPeriod}</time><span>{ui.educationLocation}</span></div></article>
                  <article className="degree-entry"><small>{ui.bachelorLabel}</small><div className="degree-title-row"><h3>{ui.bachelorSchool}</h3><div className="school-badges">{ui.bachelorTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><p>{ui.bachelorDegree}</p><div><time>{ui.bachelorPeriod}</time><span>{ui.bachelorLocation}</span></div></article>
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

          <section className="section-block" id="tools"><h2 className="section-title"><span>{ui.toolsSolid}</span> <em>{ui.toolsGhost}</em></h2><div className="stack-grid">{ui.stack.map(([title, description], index) => { const Icon = stackIcons[index % stackIcons.length]; return <article className="stack-card tilt-card" key={title}><Icon size={22} /><div><h3>{title}</h3><p>{description}</p></div></article>; })}</div></section>

          <section className="section-block" id="thoughts"><h2 className="section-title"><span>{ui.thoughtsSolid}</span> <em>{ui.thoughtsGhost}</em></h2><div className="notes-grid">{ui.notes.map((note) => (
            <Link href={`/projects/${note.slug}?lang=${language}`} className="note-card tilt-card" key={`${note.slug}-${note.title}`}><div className="note-meta"><span>{ui.notesLabel}</span><span>·</span><Clock3 size={13} /><span>{note.minutes}</span></div><h3>{note.title}</h3><p>{note.body}</p><div className="note-topics">{note.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><div className="read-more">{ui.readMore}<ArrowUpRight size={15} /></div></Link>
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
