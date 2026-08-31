export type Language = "zh" | "en";

export type Project = {
  slug: string;
  index: string;
  name: string;
  eyebrow: string;
  summary: string;
  role: string;
  year: string;
  stack: string[];
  accent: "copper" | "blue" | "green";
  repo: string;
  demo?: string;
  metrics: { label: string; value: string }[];
  caseStudy: {
    context: string;
    challenge: string;
    approach: string[];
    outcome: string;
    constraints: string;
  };
};

const securePrDemoUrl =
  process.env.NEXT_PUBLIC_SECUREPR_DEMO_URL ||
  "https://securepr-agent-demo.onrender.com/";
const finCreditDemoUrl =
  process.env.NEXT_PUBLIC_FINCREDIT_DEMO_URL ||
  "https://fincredit-copilot-demo.onrender.com/";

export const profile = {
  nameZh: "石卓灵",
  nameEn: "Jorlin Shi",
  email: "jorlin1101@outlook.com",
  phone: "13208105936",
  github: "https://github.com/jorlin1101-cyber",
  intro: {
    zh: {
      title: "把 AI 放进生活和工作里，给那些“这事应该可以自动化吧？”的问题，试着找个答案。",
      body: "我是石卓灵，一名喜欢把想法跑起来的 AI 应用开发者。这里记录我做过的 Agent、自动化工具，以及一些还在和 Bug 相处的实验。",
    },
    en: {
      title: "Bringing AI into everyday life and work — starting with the questions that sound like, “Couldn’t this be automated?”",
      body: "I’m Jorlin Shi, an AI application developer who likes turning ideas into working systems. Here, I share the agents, automation tools, and experiments I’ve built — including the bugs I’m still negotiating with.",
    },
  },
};

export const copy = {
  zh: {
    nav: { work: "作品", about: "关于我", contact: "联系", resume: "下载简历" },
    kicker: "CODING WITH JORLIN",
    heroNote: "AI 应用开发 · Agent 工程 · 产品化实践",
    workKicker: "01 — SELECTED WORK",
    workTitle: "把复杂的事，讲清楚、做出来、跑起来。",
    workDescription: "三个项目，三个真实问题。每个项目都从业务场景出发，经过工程实现，再用评测结果回答“它到底有没有用”。",
    aboutKicker: "02 — A LITTLE CONTEXT",
    aboutTitle: "我喜欢站在产品和工程的交界处。",
    aboutBody: "电子信息背景，做过仿真建模，也在持续构建 AI 应用。比起堆叠名词，我更在意一个系统是否能被理解、被验证、被真正使用。",
    skills: ["LLM / Agent", "RAG & 检索", "Python / FastAPI", "评测与可观测性"],
    timeline: [
      { period: "2025.07 — 2026.01", title: "仿真建模工程师", detail: "C++ / Python 跨语言接口、Simulink 模型与性能验证" },
      { period: "2026.04 — 2026.07", title: "AI 应用项目实践", detail: "围绕 Agent、RAG、CRM 和代码安全完成三个可运行项目" },
    ],
    contactKicker: "03 — SAY HELLO",
    contactTitle: "如果你也在把 AI 变成真正能用的东西，欢迎聊聊。",
    contactBody: "不需要准备一份完美的问题。一个链接、一句想法，或者一句“这事应该可以自动化吧？”都可以。",
    viewCase: "查看案例",
    viewGithub: "查看 GitHub",
    openDemo: "打开演示",
    metrics: "可验证结果",
    challenge: "问题",
    approach: "做法",
    outcome: "结果",
    constraints: "边界与思考",
    backToWork: "返回作品",
    footer: "一个正在持续迭代的个人作品集。",
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", resume: "Résumé" },
    kicker: "CODING WITH JORLIN",
    heroNote: "AI applications · agent engineering · product-minded building",
    workKicker: "01 — SELECTED WORK",
    workTitle: "Making complicated things clear, useful, and real.",
    workDescription: "Three projects, three real problems. Each starts with a workflow, becomes a working system, and ends with an evaluation that asks: did it actually help?",
    aboutKicker: "02 — A LITTLE CONTEXT",
    aboutTitle: "I like working where product meets engineering.",
    aboutBody: "With a background in electronic information engineering, I have built simulation systems and AI applications. I care less about collecting buzzwords and more about making systems understandable, testable, and genuinely useful.",
    skills: ["LLM / Agents", "RAG & retrieval", "Python / FastAPI", "Evaluation & observability"],
    timeline: [
      { period: "2025.07 — 2026.01", title: "Simulation Modeling Engineer", detail: "C++ / Python interfaces, Simulink models, and performance validation" },
      { period: "2026.04 — 2026.07", title: "Independent AI projects", detail: "Three working projects across agents, RAG, CRM, and code security" },
    ],
    contactKicker: "03 — SAY HELLO",
    contactTitle: "If you’re turning AI into something people can actually use, let’s talk.",
    contactBody: "You don’t need a perfectly formed question. A link, an idea, or a small “couldn’t this be automated?” is enough.",
    viewCase: "View case",
    viewGithub: "View GitHub",
    openDemo: "Open demo",
    metrics: "Verifiable results",
    challenge: "The challenge",
    approach: "The approach",
    outcome: "The outcome",
    constraints: "Boundaries & reflections",
    backToWork: "Back to work",
    footer: "A personal portfolio, still under active iteration.",
  },
};

export const projects: Record<Language, Project[]> = {
  zh: [
    {
      slug: "securepr-agent",
      index: "01",
      name: "SecurePR Agent",
      eyebrow: "代码安全审查与自动修复",
      summary: "让代码审查从发现风险，走到有证据的修复建议。",
      role: "架构与全栈实现",
      year: "2026",
      stack: ["Python", "Agent Runtime", "AST", "OpenTelemetry"],
      accent: "copper",
      repo: "https://github.com/jorlin1101-cyber/securepr-agent",
      demo: securePrDemoUrl,
      metrics: [
        { label: "固定测试集 F1", value: "81.9% → 91.3%" },
        { label: "干净 PR 准确率", value: "91.7%" },
        { label: "可复现样本", value: "100 条" },
      ],
      caseStudy: {
        context: "面向 PR 风险发现与安全修复场景，尝试把多 Agent 协作变成可中断、可恢复、可验证的工程流程。",
        challenge: "长流程 Agent 会遇到调用失败、预算耗尽和中途退出；仅靠重新运行，既浪费成本，也难以解释失败原因。",
        approach: ["用 Runtime Harness 统一管理任务状态、Token / 时间预算、Checkpoint 与断点续跑。", "通过 Lead、Specialists、Critic、Fixer 和 Verifier 形成审查与修复闭环。", "将 Prompt / Skill 版本放进 Validation 与 Holdout 双门禁，支持候选去重、审计和回滚。"],
        outcome: "在 100 条合成受控 PR Diff 上进行可复现离线评测，固定风险识别 F1 从 81.9% 提升到 91.3%。",
        constraints: "评测数据为项目自建的受控样本，不等同于生产环境安全结论；最终修复仍需要人工审查。",
      },
    },
    {
      slug: "ai-sales-lead-crm-automation",
      index: "02",
      name: "AI 销售线索决策与 CRM 自动化",
      eyebrow: "线索判断与客户跟进",
      summary: "把零散客户事实整理成可解释、可回放的下一步动作。",
      role: "产品设计与工程实现",
      year: "2026",
      stack: ["FastAPI", "Pydantic", "BGE-M3", "BM25 + RRF"],
      accent: "blue",
      repo: "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation",
      metrics: [
        { label: "标注查询 Hit@1", value: "18 / 18" },
        { label: "标注查询 Hit@3", value: "18 / 18" },
        { label: "测试通过", value: "577 项" },
      ],
      caseStudy: {
        context: "面向销售线索、评分与客户跟进场景，建立从数据清洗到 CRM 路由的端到端决策原型。",
        challenge: "客户信息分散在文本、表单和历史记录中，模型如果直接给建议，难以追溯事实来源和判断依据。",
        approach: ["使用 FastAPI / Pydantic 建立强类型数据链路，LLM 只负责提取结构化事实。", "对 H2 文档切分 47 个 Chunk，融合 BGE-M3、BM25 与 RRF 进行检索。", "将建议绑定 Top-3 证据、Reason Code 和未知状态，阻断注入与结构异常。"],
        outcome: "在 18 条人工标注查询上，Hit@1 与 Hit@3 均为 18 / 18，完成 577 项测试并达到 95% 覆盖率。",
        constraints: "评测规模较小，结果用于验证方案可行性；真实部署仍需补充更多行业数据和人工复核。",
      },
    },
    {
      slug: "fincredit-copilot",
      index: "03",
      name: "FinCredit Copilot",
      eyebrow: "住房贷款智能授信辅助",
      summary: "把材料、政策、计算和人工确认放进同一条清晰的贷款流程。",
      role: "产品方案与全栈实现",
      year: "2026",
      stack: ["Next.js", "FastAPI", "RAG", "规则引擎"],
      accent: "green",
      repo: "https://github.com/jorlin1101-cyber/fincredit-copilot",
      demo: finCreditDemoUrl,
      metrics: [
        { label: "政策范围", value: "全国 + 成都" },
        { label: "结果原则", value: "计算确定 · 人工确认" },
        { label: "证据方式", value: "来源可追溯" },
      ],
      caseStudy: {
        context: "为中国住房贷款场景设计的授信辅助平台，覆盖申请资料、政策查询、DTI / LTV 计算、风险建议和人工审批。",
        challenge: "金融流程既需要自然语言交互，也需要可解释的规则计算；模型不能直接替代最终授信结论。",
        approach: ["将材料上传、中文状态、条件处理和披露确认设计为连续的用户流程。", "将全国监管政策与成都市地方规则分开管理，回答时显示依据和适用范围。", "把 DTI / LTV 等计算交给确定性逻辑，Agent 负责解释、引导和补充信息。"],
        outcome: "完成面向借款人、客户经理和审批人员的多角色演示界面，突出“政策有据、计算确定、结论人工确认”。",
        constraints: "页面中的人员、申请、金额和政策信息均为演示数据，不构成任何真实金融机构的授信或法律意见。",
      },
    },
  ],
  en: [],
};

projects.en = projects.zh.map((project) => ({
  ...project,
  name: ({
    "securepr-agent": "SecurePR Agent",
    "ai-sales-lead-crm-automation": "AI Sales Lead Decision & CRM Automation",
    "fincredit-copilot": "FinCredit Copilot",
  } as Record<string, string>)[project.slug],
  eyebrow: ({
    "securepr-agent": "Code security review & repair",
    "ai-sales-lead-crm-automation": "Lead decisions & customer follow-up",
    "fincredit-copilot": "Housing-loan underwriting assistance",
  } as Record<string, string>)[project.slug],
  summary: ({
    "securepr-agent": "Moving code review from finding risk to evidence-backed repair suggestions.",
    "ai-sales-lead-crm-automation": "Turning scattered customer facts into explainable next actions.",
    "fincredit-copilot": "Bringing documents, policy, calculations, and human confirmation into one clear lending flow.",
  } as Record<string, string>)[project.slug],
  role: ({
    "securepr-agent": "Architecture & full-stack engineering",
    "ai-sales-lead-crm-automation": "Product design & engineering",
    "fincredit-copilot": "Product design & full-stack engineering",
  } as Record<string, string>)[project.slug],
  metrics: project.metrics.map((metric) => ({
    ...metric,
    label: ({
      "固定测试集 F1": "Fixed test-set F1",
      "干净 PR 准确率": "Clean PR precision",
      "可复现样本": "Reproducible samples",
      "标注查询 Hit@1": "Labeled queries Hit@1",
      "标注查询 Hit@3": "Labeled queries Hit@3",
      "测试通过": "Tests passing",
      "政策范围": "Policy scope",
      "结果原则": "Decision principle",
      "证据方式": "Evidence",
    } as Record<string, string>)[metric.label] ?? metric.label,
    value: ({ "全国 + 成都": "National + Chengdu", "计算确定 · 人工确认": "Deterministic · human-confirmed", "来源可追溯": "Traceable sources" } as Record<string, string>)[metric.value] ?? metric.value,
  })),
  caseStudy: {
    context: ({
      "securepr-agent": "A system for PR risk discovery and secure repair, designed to make multi-agent collaboration interruptible, recoverable, and verifiable.",
      "ai-sales-lead-crm-automation": "An end-to-end decision prototype for sales leads, scoring, customer facts, and CRM routing.",
      "fincredit-copilot": "A lending-assistance platform for the Chinese housing-loan context, covering documents, policy, DTI / LTV calculations, risk suggestions, and human approval.",
    } as Record<string, string>)[project.slug],
    challenge: ({
      "securepr-agent": "Long-running agents encounter failed calls, exhausted budgets, and interruptions. Restarting wastes cost and hides the reason for failure.",
      "ai-sales-lead-crm-automation": "Customer information is spread across text, forms, and history. A model suggestion without evidence is difficult to audit.",
      "fincredit-copilot": "Lending needs both natural-language guidance and deterministic calculations; a model must not replace the final credit decision.",
    } as Record<string, string>)[project.slug],
    approach: ({
      "securepr-agent": ["A Runtime Harness manages task state, token / time budgets, checkpoints, and resume-from-breakpoint.", "Lead, Specialists, Critic, Fixer, and Verifier form a review-and-repair loop.", "Prompt / Skill versions pass through Validation and Holdout gates for deduplication, audit, and rollback."],
      "ai-sales-lead-crm-automation": ["FastAPI / Pydantic create a typed data path; the LLM only extracts structured facts.", "47 H2 document chunks are searched with BGE-M3, BM25, and RRF.", "Recommendations are bound to Top-3 evidence, Reason Codes, and unknown states."],
      "fincredit-copilot": ["Documents, Chinese statuses, approval conditions, and disclosure acknowledgements become one continuous flow.", "National policy and Chengdu rules are managed separately, with scope and sources shown in answers.", "Deterministic logic owns DTI / LTV calculations; the agent explains and guides."],
    } as Record<string, string[]>)[project.slug],
    outcome: ({
      "securepr-agent": "On 100 synthetic, controlled PR diffs, reproducible risk-identification F1 improved from 81.9% to 91.3%.",
      "ai-sales-lead-crm-automation": "On 18 human-labeled queries, Hit@1 and Hit@3 both reached 18 / 18, with 577 tests passing and 95% coverage.",
      "fincredit-copilot": "Delivered role-based demo interfaces for borrowers, loan officers, and underwriters, centered on policy evidence, deterministic calculations, and human confirmation.",
    } as Record<string, string>)[project.slug],
    constraints: ({
      "securepr-agent": "The evaluation set is project-built and controlled; it is not a production security conclusion. Human review remains required.",
      "ai-sales-lead-crm-automation": "The evaluation is intentionally small and validates feasibility; real deployment needs more industry data and review.",
      "fincredit-copilot": "All people, applications, amounts, and policy information are fictional demo data and do not represent a real lender or credit decision.",
    } as Record<string, string>)[project.slug],
  },
}));
