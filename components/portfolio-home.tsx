"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
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
import { FormEvent, useEffect, useRef, useState } from "react";
import { profile, projects, type Language } from "@/data/content";

type Theme = "light" | "dark";

const sectionIds = ["home", "projects", "experience", "tools", "thoughts"] as const;
const stackIcons = [Bot, Search, Code2, Database, Workflow, ShieldCheck, ChartNoAxesCombined, Wrench];
const projectOrder = ["securepr-agent", "fincredit-copilot", "ai-sales-lead-crm-automation"];

const portfolioCopy = {
  en: {
    nav: ["Home", "Projects", "Experience", "Tools", "Case studies"],
    profileDescription: "AI agent and AI application engineer building resumable execution, tool integration, context management and human review.",
    availability: "Open to AI agent & application roles",
    heroLead: "I build AI agents with resumable execution, tool integration, context management and human review. Explore three public systems through code, demos and evaluation notes.",
    titleSolid: "AI AGENT",
    titleGhost: "ENGINEER",
    statProjects: "PROJECTS SHIPPED",
    statDomains: "APPLIED AI DOMAINS",
    statRepos: "OPEN-SOURCE APPS",
    ribbonItems: ["AGENTS, RETRIEVAL, EVALUATION", "PYTHON, FASTAPI, NEXT.JS, RAG"],
    projectsSolid: "RECENT",
    projectsGhost: "PROJECTS",
    projectIntro: "Three public AI systems for code security, financial decision support and sales operations.",
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
    thoughtsSolid: "PROJECT",
    thoughtsGhost: "CASE STUDIES",
    notesLabel: "Project case study",
    readMore: "Read case study",
    contactSolid: "LET’S WORK",
    contactGhost: "TOGETHER",
    contactIntro: "For roles, projects, or feedback, contact me by email.",
    form: {
      name: "Name", email: "Email", topic: "Topic", message: "Message",
      namePlaceholder: "Your name", emailPlaceholder: "you@example.com", topicPlaceholder: "Select a topic",
      topics: ["Job opportunity", "Project collaboration", "Portfolio feedback", "Just saying hello"],
      messagePlaceholder: "Tell me a little about what you have in mind…", submit: "Send message",
      hint: "Your message will be emailed to me. I’ll reply to the address you provide.",
      sending: "Sending…", success: "Message submitted. Thank you! I’ll reply by email.",
      error: "Your message could not be submitted. Please retry or use the email address below.",
      rateLimit: "Too many attempts. Please wait 10 minutes or contact me by email.",
      invalid: "Please check your name, email, topic and message.",
      unavailable: "The contact form is temporarily unavailable. Please use the email address below.",
      copy: "Copy email", copied: "Copied", copyError: "Select the address to copy it.",
      alternative: "You can also copy this address:",
    },
    footer: "Designed and built by Jorlin Shi.", photo: "Portrait coming soon", resume: "Detailed résumé",
    theme: "Toggle theme", language: "切换到中文",
    experiences: [
      { period: "Apr 2026 — Present", company: "Independent AI Product Practice", role: "AI Agent & AI Application Engineer", detail: "Completed three public AI systems.", highlights: ["Built a resumable agent runtime with budgets, checkpoints, specialist review, and human validation.", "Implemented hybrid RAG with BGE-M3, BM25, RRF, grounded generation, and retrieval evaluation.", "Connected typed APIs, multi-turn state, CRM automation, observability, and product-facing interfaces."], tags: ["LLM Agents", "RAG", "Evaluation", "Full-stack"] },
      { period: "Jul 2025 — Jan 2026", company: "北京润科通用技术有限公司", role: "Simulation Modeling Engineer", detail: "Delivered simulation-platform integration, charging-protocol models and real-time validation.", highlights: ["Integrated C++ / Python calls, including argument conversion, returned values and exception mapping.", "Built Simulink charging-protocol models and message prototypes; supported integration, demo review and acceptance.", "Integrated models and reflective-memory interfaces, validated a core simulation cycle below 400 μs, and prepared debugging and acceptance documents."], tags: ["C++", "Python", "Simulink", "Stateflow", "Validation"] },
      { period: "Jun 2023 — Jun 2025", company: "University of Electronic Science and Technology of China", role: "Research · Physics-guided AI Modeling", detail: "Combined physical priors with data-driven models to predict free-space optical communication performance.", highlights: ["Built simulation data pipelines in MATLAB and learned model residuals with neural networks.", "Reduced mean power-prediction error from 15.1% to 8.7%, with R² of 0.95; conditional normalizing flow reduced Wasserstein distance by 15% and per-case inference time from 12.5 s to 3 s (about 4.2×)."], tags: ["Physics-guided ML", "MATLAB", "Model evaluation"] },
    ],
    recognitions: [
      { title: "Outstanding Graduate Student", detail: "Graduate Academic Scholarship · Second Class" },
      { title: "Provincial First Prize", detail: "China Undergraduate Mathematical Contest in Modeling" },
      { title: "MCM Honorable Mention", detail: "Team captain" },
      { title: "Research & Innovation", detail: "1 EI-indexed first-author paper · 1 invention patent application (first among student inventors)" },
    ],
    stack: [
      ["LLM & Context Engineering", "Model APIs · prompting · structured output · tool calling"],
      ["Agent Orchestration", "LangGraph · runtime harness · state · checkpoints · human approval"],
      ["RAG & Retrieval", "BGE-M3 · BM25 · RRF · chunking · grounded generation"],
      ["Backend APIs", "Python · FastAPI · Pydantic · REST workflows"],
      ["Data & State", "PostgreSQL · SQLite · Redis Streams · conversation memory"],
      ["Tools & Model Configuration", "MCP / Skill · model providers · fault handling · human fallback"],
      ["Evaluation & Quality", "pytest · retrieval metrics · eval sets · Ruff · mypy"],
      ["Observability", "OpenTelemetry · Prometheus · logs · traces · failure analysis"],
      ["Product Frontend", "TypeScript · React · Next.js · bilingual interaction design"],
      ["Delivery", "Docker · CI checks · reproducible local and public demos"],
    ],
    notes: [
      { title: "SecurePR Agent", body: "PR review and repair: resumable runtime, specialist review, evidence, validation gates, and controlled evaluation.", topics: ["Runtime", "Code review", "Evaluation"], slug: "securepr-agent" },
      { title: "AI Sales Lead Decision & CRM Automation", body: "Lead interpretation and follow-up: hybrid retrieval, persistent conversations, grounded drafts, and human-reviewed CRM delivery.", topics: ["Hybrid retrieval", "Conversation state", "CRM"], slug: "ai-sales-lead-crm-automation" },
      { title: "FinCredit Copilot", body: "Housing-loan assistance: document checks, policy evidence, deterministic DTI/LTV calculations, and human confirmation.", topics: ["Policy retrieval", "Evidence", "Human approval"], slug: "fincredit-copilot" },
    ],
  },
  zh: {
    nav: ["首页", "项目", "经历", "工具", "复盘"],
    profileDescription: "AI Agent 与 AI 应用工程师，关注可恢复执行、工具集成、上下文管理与人工确认。",
    availability: "正在寻找 AI Agent 与 AI 应用方向机会",
    heroLead: "我关注 Agent 的可恢复执行、工具集成、上下文管理与人工确认。这里整理了三个公开 AI 系统的源码、演示与评测说明。",
    titleSolid: "AI Agent", titleGhost: "工程师",
    statProjects: "个已完成项目", statDomains: "类 AI 应用场景", statRepos: "个开源应用项目",
    ribbonItems: ["Agent 编排", "RAG 检索", "评测体系", "全栈交付"],
    projectsSolid: "近期", projectsGhost: "项目",
    projectIntro: "围绕代码安全、金融决策辅助和销售运营，完成了三个公开 AI 系统。",
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
    educationTags: ["985", "211"],
    bachelorLabel: "本科",
    bachelorSchool: "西南石油大学",
    bachelorDegree: "电子信息科学与技术（本科）",
    bachelorPeriod: "2017.09 — 2021.06",
    bachelorLocation: "中国 · 成都",
    bachelorTags: ["双一流"],
    recognitionTitle: "个人成果与奖项",
    thoughtsSolid: "项目", thoughtsGhost: "复盘", notesLabel: "项目案例", readMore: "查看完整案例",
    contactSolid: "一起", contactGhost: "聊聊",
    contactIntro: "如果你有合适的岗位、项目或作品集建议，欢迎通过邮件联系我。",
    form: {
      name: "姓名", email: "邮箱", topic: "联系主题", message: "留言",
      namePlaceholder: "你的姓名", emailPlaceholder: "you@example.com", topicPlaceholder: "请选择联系主题",
      topics: ["工作机会", "项目合作", "作品集建议", "只是打个招呼"],
      messagePlaceholder: "简单介绍一下你想聊的事情……", submit: "发送留言",
      hint: "留言将通过邮件发送给我，我会通过你填写的邮箱回复。",
      sending: "正在发送……", success: "留言已经提交啦~谢谢！我会用你提供的邮箱回复！",
      error: "留言暂时未能提交，请重试，或通过下方邮箱联系我。",
      rateLimit: "提交较频繁，请等 10 分钟后重试，或直接通过邮箱联系我。",
      invalid: "请检查姓名、邮箱、联系主题和留言内容。",
      unavailable: "留言功能暂时不可用，请通过下方邮箱联系我。",
      copy: "复制邮箱", copied: "已复制", copyError: "请选中邮箱地址进行复制。",
      alternative: "也可以直接复制邮箱：",
    },
    footer: "由石卓灵设计与开发。", photo: "职业照稍后更新", resume: "完整简历",
    theme: "切换明暗主题", language: "Switch to English",
    experiences: [
      { period: "2026.04 — 至今", company: "个人 AI 产品实践", role: "AI Agent 与 AI 应用工程师", detail: "完成了三个公开 AI 系统。", highlights: ["构建支持预算控制、检查点、专业角色审查与人工确认的可恢复 Agent Runtime。", "实现融合 BGE-M3、BM25、RRF、Grounded Generation 与检索评测的混合 RAG 链路。", "打通强类型 API、多轮状态、CRM 自动化、可观测性与面向用户的产品界面。"], tags: ["LLM Agent", "RAG", "评测", "全栈开发"] },
      { period: "2025.07 — 2026.01", company: "北京润科通用技术有限公司", role: "仿真建模工程师", detail: "完成仿真平台集成、充电协议建模与实时性能验证。", highlights: ["完成 C++ / Python 跨语言调用、参数转换、返回值与异常映射。", "搭建 Simulink 充电协议模型与报文原型，支持平台接入、演示评审与验收。", "集成模型与反射内存接口，验证核心仿真周期 < 400 μs，编写调试与验收文档。"], tags: ["C++", "Python", "Simulink", "Stateflow", "验证"] },
      { period: "2023.06 — 2025.06", company: "电子科技大学", role: "科研 · 物理模型引导的 AI 建模", detail: "面向自由空间光通信链路，结合物理先验与数据驱动模型开展性能预测。", highlights: ["基于 MATLAB 仿真搭建训练数据流水线，以残差网络学习理论模型与仿真的偏差。", "平均功率预测误差由 15.1% 降至 8.7%，R² 达 0.95；条件归一化流使 Wasserstein 距离下降 15%，单工况推理耗时由 12.5 s 降至 3 s（约 4.2 倍）。"], tags: ["物理先验", "MATLAB", "模型评测"] },
    ],
    recognitions: [
      { title: "优秀研究生", detail: "研究生学业二等奖学金" },
      { title: "省一等奖", detail: "全国大学生数学建模竞赛" },
      { title: "MCM H 奖", detail: "美国大学生数学建模竞赛 · 队长" },
      { title: "科研与创新", detail: "EI 期刊第一作者论文 1 篇 · 发明专利申请 1 项（学生第一）" },
    ],
    stack: [
      ["LLM 与上下文工程", "模型 API · Prompt · 结构化输出 · 工具调用"],
      ["Agent 编排", "LangGraph · Runtime Harness · 状态 · 检查点 · 人工确认"],
      ["RAG 与检索", "BGE-M3 · BM25 · RRF · 文档切分 · Grounded Generation"],
      ["后端 API", "Python · FastAPI · Pydantic · REST 工作流"],
      ["数据与状态", "PostgreSQL · SQLite · Redis Streams · 对话记忆"],
      ["工具集成与模型配置", "MCP / Skill · 多模型配置 · 服务降级 · 人工兜底"],
      ["评测与质量", "pytest · 检索指标 · 评测集 · Ruff · mypy"],
      ["可观测性", "OpenTelemetry · Prometheus · 日志 · Trace · 失败分析"],
      ["产品前端", "TypeScript · React · Next.js · 中英双语交互"],
      ["交付部署", "Docker · CI 检查 · 可复现本地与公网演示"],
    ],
    notes: [
      { title: "SecurePR Agent", body: "PR 风险审查与修复：围绕可恢复 Runtime、多角色审查、证据复核、验证门禁与受控评测展开项目复盘。", topics: ["运行恢复", "代码审查", "评测"], slug: "securepr-agent" },
      { title: "AI 销售线索决策与 CRM 自动化", body: "从线索理解到客户跟进：说明混合检索、多轮状态、有据草稿与人工审核后的 CRM 同步如何组成完整流程。", topics: ["混合检索", "对话状态", "CRM"], slug: "ai-sales-lead-crm-automation" },
      { title: "FinCredit Copilot", body: "住房金融授信辅助：展示材料核验、政策证据、DTI/LTV 确定性计算与人工确认的设计边界。", topics: ["政策检索", "证据", "人工审批"], slug: "fincredit-copilot" },
    ],
  },
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PortfolioHome({ initialLanguage = "zh" }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("home");
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error" | "rateLimit" | "invalid" | "unavailable">("idle");
  const [copyStatus, setCopyStatus] = useState<"copy" | "copied" | "copyError">("copy");
  const sendingContact = useRef(false);
  const ui = portfolioCopy[language];
  const list = [...projects[language]].sort(
    (left, right) => projectOrder.indexOf(left.slug) - projectOrder.indexOf(right.slug),
  );
  const name = language === "zh" ? profile.nameZh : profile.nameEn;

  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en"; const url = new URL(window.location.href); url.searchParams.set("lang", language); window.history.replaceState(null, "", url); }, [language]);
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

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingContact.current) return;
    const element = event.currentTarget;
    const form = new FormData(element);
    sendingContact.current = true;
    setContactStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(["name", "email", "topic", "message", "website"].map(key => [key, String(form.get(key) || "")]))),
        signal: AbortSignal.timeout(20_000),
      });
      const data = await response.json().catch(() => null);
      if (response.status === 202 && data?.ok === true) {
        setContactStatus("success");
        element.reset();
      } else {
        setContactStatus(response.status === 429 ? "rateLimit" : response.status === 400 || response.status === 413 ? "invalid" : response.status === 503 ? "unavailable" : "error");
      }
    } catch { setContactStatus("error"); }
    finally { sendingContact.current = false; }
  }

  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus("copied"); }
    catch { setCopyStatus("copyError"); }
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

          <section className="section-block" id="projects"><div className="section-title-row"><div><h2 className="section-title"><span>{ui.projectsSolid}</span> <em>{ui.projectsGhost}</em></h2><p>{ui.projectIntro}</p></div></div>
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
                  <p className="demo-wait-home" id={`demo-wait-${project.slug}`}>{language === "zh" ? "首次加载可能需要等待" : "The first load may take a moment"}</p>
                  <div className="project-link-row">
                    <a href={primaryHref}>{ui.caseStudy}<ArrowUpRight size={14} /></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-describedby={`demo-wait-${project.slug}`}>{ui.liveDemo}<ArrowUpRight size={14} /></a>}
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} — ${ui.sourceCode}`}>
                      <Github size={14} />{ui.sourceCode}
                    </a>
                  </div>
                </article>
              );
            })}</div>
          </section>

          <section className="section-block" id="experience"><div className="section-title-row"><div><h2 className="section-title"><span>{ui.experienceSolid}</span> <em>{ui.experienceGhost}</em></h2></div></div><div className="experience-list">{ui.experiences.map((item, index) => (
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
              <article className="education-card recognition-panel tilt-card">
                <div className="education-icon"><Trophy size={28} /></div>
                <div className="education-copy"><span>{ui.recognitionTitle}</span>
                <div className="recognition-list">{ui.recognitions.map((item, index) => {
                  const Icon = index === 3 ? Lightbulb : Medal;
                  return <article className="recognition-row" key={item.title}><Icon size={18} /><div><h4>{item.title}</h4><p>{item.detail}</p></div></article>;
                })}</div></div>
              </article>
            </div>
          </section>

          <section className="section-block" id="tools"><h2 className="section-title"><span>{ui.toolsSolid}</span> <em>{ui.toolsGhost}</em></h2><div className="stack-grid">{ui.stack.map(([title, description], index) => { const Icon = stackIcons[index % stackIcons.length]; return <article className="stack-card tilt-card" key={title}><Icon size={22} /><div><h3>{title}</h3><p>{description}</p></div></article>; })}</div></section>

          <section className="section-block" id="thoughts"><h2 className="section-title"><span>{ui.thoughtsSolid}</span> <em>{ui.thoughtsGhost}</em></h2><div className="notes-grid">{[...ui.notes].sort((a, b) => projectOrder.indexOf(a.slug) - projectOrder.indexOf(b.slug)).map((note) => (
            <Link href={`/projects/${note.slug}?lang=${language}`} className="note-card tilt-card" key={`${note.slug}-${note.title}`}><div className="note-meta"><span>{ui.notesLabel}</span></div><h3>{note.title}</h3><p>{note.body}</p><div className="note-topics">{note.topics.map((topic) => <span key={topic}>{topic}</span>)}</div><div className="read-more">{ui.readMore}<ArrowUpRight size={15} /></div></Link>
          ))}</div></section>

          <section className="section-block contact-section" id="contact"><h2 className="section-title"><span>{ui.contactSolid}</span> <em>{ui.contactGhost}</em></h2><p className="contact-intro">{ui.contactIntro}</p>
            <form className="contact-form" onSubmit={submitContact} aria-busy={contactStatus === "sending"}>
              <fieldset className="contact-fields" disabled={contactStatus === "sending"}>
                <div className="form-grid"><label>{ui.form.name}<input name="name" type="text" autoComplete="name" maxLength={80} placeholder={ui.form.namePlaceholder} required /></label><label>{ui.form.email}<input name="email" type="email" autoComplete="email" maxLength={254} placeholder={ui.form.emailPlaceholder} required /></label></div>
                <label>{ui.form.topic}<select name="topic" defaultValue="" required><option value="" disabled>{ui.form.topicPlaceholder}</option>{ui.form.topics.map((topic, index) => <option key={topic} value={["job", "project", "feedback", "hello"][index]}>{topic}</option>)}</select></label>
                <label>{ui.form.message}<textarea name="message" rows={5} maxLength={5000} placeholder={ui.form.messagePlaceholder} required /></label>
                <div className="contact-honeypot" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
              </fieldset>
              <p className="contact-help" id="contact-help">{ui.form.hint}</p>
              <p className="contact-status" role="status" aria-live="polite" aria-atomic="true">{contactStatus === "idle" || contactStatus === "sending" || contactStatus === "success" ? "" : ui.form[contactStatus]}</p>
              <p className="contact-email">{ui.form.alternative} <a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" className="copy-email-button" onClick={copyEmail}>{ui.form[copyStatus]}</button></p>
              <div className="contact-submit-row">
                <button type="submit" className="submit-button" disabled={contactStatus === "sending"} aria-describedby="contact-help"><Send size={16} />{contactStatus === "sending" ? ui.form.sending : ui.form.submit}</button>
                <p className="contact-status success" role="status" aria-live="polite" aria-atomic="true">{contactStatus === "success" ? ui.form.success : ""}</p>
              </div>
            </form>
          </section>
          <footer className="reference-footer">© 2026 {name} · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={`mailto:${profile.email}`}>{profile.email}</a><span>{ui.footer}</span></footer>
        </div>
      </main>
    </div>
  );
}
