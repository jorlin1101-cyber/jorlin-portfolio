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
  localDemo?: string;
  previewImage: string;
  metrics: { label: string; value: string }[];
  audience: string;
  capabilities: string[];
  quickStart: string[];
  demoNote: string;
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
const salesDemoUrl = process.env.NEXT_PUBLIC_SALES_DEMO_URL || "https://leadflow-sales-demo.onrender.com/";

export const profile = {
  nameZh: "石卓灵",
  nameEn: "Jorlin Shi",
  email: "jorlin1101@163.com",
  phone: "13208105936",
  github: "https://github.com/jorlin1101-cyber",
  intro: {
    zh: {
      title: "和 Jorlin 一起，把 AI 想法变成真正可用的产品。",
      body: "我是一名 AI 应用与 Agent 工程师，喜欢从真实业务问题出发，构建融合智能体、知识检索、流程自动化与人工协作的 AI 系统。",
    },
    en: {
      title: "Coding with Jorlin.",
      body: "I’m an AI application and Agent engineer who turns real-world workflows into AI systems people can actually use—from intelligent agents and knowledge retrieval to automation and reliable human-in-the-loop experiences.",
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
      { period: "2026.04 — 至今", title: "AI 应用项目实践", detail: "围绕 Agent、RAG、CRM 和代码安全完成三个可运行项目" },
    ],
    contactKicker: "03 — SAY HELLO",
    contactTitle: "如果你也在把 AI 变成真正能用的东西，欢迎聊聊。",
    contactBody: "不需要准备一份完美的问题。一个链接、一句想法，或者一句“这事应该可以自动化吧？”都可以。",
    viewCase: "查看案例",
    viewGithub: "查看 GitHub",
    openDemo: "打开演示",
    systemPreview: "系统界面预览",
    previewDescription: "以下为当前前端系统的真实界面。点击预览即可进入可用的演示环境。",
    enterSystem: "进入系统",
    publicDemoPending: "公网演示地址配置中，本地运行时仍可进入系统。",
    metrics: "可验证结果",
    overview: "项目概览",
    audience: "适合谁",
    capabilities: "可以完成什么",
    quickStart: "如何体验",
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
      { period: "Apr 2026 — Present", title: "Independent AI projects", detail: "Three working projects across agents, RAG, CRM, and code security" },
    ],
    contactKicker: "03 — SAY HELLO",
    contactTitle: "If you’re turning AI into something people can actually use, let’s talk.",
    contactBody: "You don’t need a perfectly formed question. A link, an idea, or a small “couldn’t this be automated?” is enough.",
    viewCase: "View case",
    viewGithub: "View GitHub",
    openDemo: "Open demo",
    systemPreview: "System preview",
    previewDescription: "A real capture of the current product interface. Select the preview to enter an available demo.",
    enterSystem: "Enter system",
    publicDemoPending: "The public demo URL is being configured. The system remains available when running locally.",
    metrics: "Verifiable results",
    overview: "Project overview",
    audience: "Who it is for",
    capabilities: "What it does",
    quickStart: "How to explore it",
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
      index: "02",
      name: "SecurePR Agent",
      eyebrow: "代码安全审查与自动修复",
      summary: "让代码审查从发现风险，走到有证据的修复建议。",
      role: "架构与全栈实现",
      year: "2026.05 - 2026.06",
      stack: ["Python", "Agent Runtime", "AST", "OpenTelemetry"],
      accent: "copper",
      repo: "https://github.com/jorlin1101-cyber/securepr-agent",
      demo: securePrDemoUrl,
      previewImage: "/assets/securepr-ui-preview.png",
      audience: "需要审查代码变更、验证修复建议并保留审计过程的研发与安全团队。",
      capabilities: ["协调多个审查角色分析 PR Diff", "基于 AST 与规则证据定位风险", "在人工确认前生成并验证修复建议"],
      quickStart: ["选择或粘贴一段待审查的 PR Diff。", "启动审查，观察不同角色的任务状态和证据。", "查看风险、修复建议、验证结果与完整运行轨迹。"],
      demoNote: "在线演示使用受控样例，不会修改真实代码仓库；建议先从预置案例开始。",
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
      index: "03",
      name: "AI 销售线索决策与 CRM 自动化",
      eyebrow: "线索判断与客户跟进",
      summary: "把零散客户事实整理成可解释、可回放的下一步动作。",
      role: "产品设计与工程实现",
      year: "2026",
      stack: ["FastAPI", "Pydantic", "BGE-M3", "BM25 + RRF"],
      accent: "blue",
      repo: "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation",
      demo: salesDemoUrl,
      localDemo: "http://127.0.0.1:8011/",
      previewImage: "/assets/sales-ui-preview.png",
      audience: "需要处理邮件、网站表单等线索，并希望统一判断、回复和沉淀客户信息的销售运营团队。",
      capabilities: ["从产品手册匹配目的地、人数和天数，展示推荐理由与证据", "保存多轮客户偏好，按邮件或聊天渠道生成回复草稿", "支持通义千问理解与草稿生成、人工审核和 CRM / Notion 同步"],
      quickStart: ["进入系统，输入例如：4个人想去云南玩7天，请推荐产品。", "查看产品推荐、适配理由和产品手册来源。", "在同一对话补充酒店等级、用车需求和导游语言，检查更新后的回复。", "公网访客仅体验隔离演示；真实模型与 Notion 写入需受保护的运营配置。"],
      demoNote: "公网版本使用离线手册检索与规则回复，不调用付费 LLM，也不写入真实 Notion。免费服务首次打开可能较慢；演示记录可能随服务重启清空，请勿提交真实客户隐私。",
      metrics: [
        { label: "标注查询 Hit@1", value: "18 / 18" },
        { label: "标注查询 Hit@3", value: "18 / 18" },
        { label: "测试通过", value: "699 项" },
      ],
      caseStudy: {
        context: "面向销售线索、评分与客户跟进场景，建立从数据清洗到 CRM 路由的端到端决策原型。",
        challenge: "客户信息分散在文本、表单和历史记录中，模型如果直接给建议，难以追溯事实来源和判断依据。",
        approach: ["使用 FastAPI / Pydantic 管理结构化事实与多轮状态；通义千问支持事实理解和有据草稿生成，规则负责最终产品约束。", "支持 BGE-M3、BM25 与 RRF 检索；公开演示采用无需外部模型的 keyword-RRF，产品信息来自同一手册快照。", "保留产品来源、适配限制与人工确认；支持 PostgreSQL 持久化和可重试 CRM 同步，访客禁止真实外部写入。"],
        outcome: "既有 18 条人工标注检索查询中，Hit@1 与 Hit@3 均为 18 / 18；本次回归 699 项测试通过，2 项 PostgreSQL 测试因本地未配置数据库跳过，覆盖率 95.21%。",
        constraints: "评测规模较小，结果用于验证方案可行性；真实部署仍需补充更多行业数据和人工复核。",
      },
    },
    {
      slug: "fincredit-copilot",
      index: "01",
      name: "FinCredit Copilot",
      eyebrow: "住房贷款智能授信辅助",
      summary: "把材料、政策、计算和人工确认放进同一条清晰的贷款流程。",
      role: "产品方案与全栈实现",
      year: "2026.07 - 2026.09",
      stack: ["React / Vite", "FastAPI", "LangGraph", "pgvector", "规则引擎"],
      accent: "green",
      repo: "https://github.com/jorlin1101-cyber/fincredit-copilot",
      demo: finCreditDemoUrl,
      previewImage: "/assets/fincredit-ui-preview.png",
      audience: "希望了解住房贷款流程的申请人，以及需要核验材料、政策和风险条件的客户经理与审批人员。",
      capabilities: ["按角色展示申请进度、材料与待办条件", "检索全国政策和成都市地方规则并提供来源", "执行 DTI / LTV 确定性计算并保留人工审批"],
      quickStart: ["在首页选择借款人、客户经理或审批人员身份。", "使用演示账号进入对应工作台。", "按页面提示查看材料、运行风险画像或咨询助手。", "最终授信选择始终由审批人员确认。"],
      demoNote: "所有人员、金额和审批结果均为虚构演示数据，不构成真实贷款建议。",
      metrics: [
        { label: "P0 评测样本", value: "30" },
        { label: "P0 Recall@5", value: "100%" },
        { label: "P0 无答案 F1", value: "100%" },
      ],
      caseStudy: {
        context: "为中国住房贷款场景设计的授信辅助平台，覆盖申请资料、政策查询、DTI / LTV 计算、风险建议和人工审批。",
        challenge: "金融流程既需要自然语言交互，也需要可解释的规则计算；模型不能直接替代最终授信结论。",
        approach: ["将材料上传、中文状态、条件处理和披露确认设计为连续的用户流程。", "将全国监管政策与成都市地方规则分开管理，回答时显示依据和适用范围。", "把 DTI / LTV 等计算交给确定性逻辑，Agent 负责解释、引导和补充信息。"],
        outcome: "完成多角色授信辅助演示。2026-08-26 本地 P0 报告中，30 条政策问答的 Recall@5 与无答案 F1 均为 100%；引用检查验证来源、条款和生效日期等元数据完整性。",
        constraints: "人员、申请、金额和内部机构规则为合成演示数据；外部政策来自公开资料。本地小样本结果不代表生产效果，引用元数据检查不等同于最终答案逐句有据。",
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
  audience: ({
    "securepr-agent": "Engineering and security teams that need to review code changes, validate proposed fixes, and preserve an auditable process.",
    "ai-sales-lead-crm-automation": "Sales operations teams handling leads from email, web forms, and other channels that need consistent decisions, replies, and CRM records.",
    "fincredit-copilot": "Housing-loan applicants, loan officers, and underwriters who need a clear view of documents, policy, calculations, and approval conditions.",
  } as Record<string, string>)[project.slug],
  capabilities: ({
    "securepr-agent": ["Coordinate specialist reviewers over a PR diff", "Locate risks with AST and rule-based evidence", "Generate and verify repair suggestions before human approval"],
    "ai-sales-lead-crm-automation": ["Match products from manuals with evidence and fit constraints", "Preserve customer preferences across turns and draft channel-aware replies", "Support Qwen-grounded drafting, human review, and CRM / Notion synchronization"],
    "fincredit-copilot": ["Show role-specific application progress, documents, and conditions", "Retrieve national policy and Chengdu rules with sources", "Run deterministic DTI / LTV calculations while reserving the decision for a human"],
  } as Record<string, string[]>)[project.slug],
  quickStart: ({
    "securepr-agent": ["Choose or paste a PR diff to review.", "Start the run and follow each reviewer’s task state and evidence.", "Inspect findings, proposed fixes, verification results, and the run trace."],
    "ai-sales-lead-crm-automation": ["Enter a request such as: Recommend a 7-day Yunnan trip for four people.", "Review the recommended product, fit reasons, and manual evidence.", "Add hotel, vehicle, and guide preferences in the same conversation and review the updated reply.", "Public visitors use an isolated demo; live models and Notion delivery require protected operator configuration."],
    "fincredit-copilot": ["Choose the borrower, loan officer, or underwriter role.", "Enter the corresponding demo workspace.", "Follow the prompts to inspect documents, run a risk profile, or ask the assistant.", "Leave the final credit decision to the authorized human reviewer."],
  } as Record<string, string[]>)[project.slug],
  demoNote: ({
    "securepr-agent": "The demo uses controlled examples and never changes a real repository. Start with a preset case.",
    "ai-sales-lead-crm-automation": "The public demo uses offline manual retrieval and rule-based replies, with no paid LLM calls or real Notion writes. Free hosting may start slowly and demo records may reset after a restart. Do not enter real customer data.",
    "fincredit-copilot": "Every person, amount, and approval outcome is fictional demo data and does not constitute lending advice.",
  } as Record<string, string>)[project.slug],
  metrics: project.metrics.map((metric) => ({
    ...metric,
    label: ({
      "固定测试集 F1": "Fixed test-set F1",
      "干净 PR 准确率": "Clean PR specificity",
      "可复现样本": "Reproducible samples",
      "标注查询 Hit@1": "Labeled queries Hit@1",
      "标注查询 Hit@3": "Labeled queries Hit@3",
      "测试通过": "Tests passing",
      "P0 评测样本": "P0 evaluation cases",
      "P0 无答案 F1": "P0 no-answer F1",
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
      "ai-sales-lead-crm-automation": ["FastAPI / Pydantic manage typed facts and conversation state; Qwen supports understanding and grounded drafting, with deterministic product constraints.", "BGE-M3, BM25, and RRF retrieval are supported; the public demo uses offline keyword-RRF and the same product manual snapshot.", "Evidence, fit constraints, human review, PostgreSQL persistence, and retryable CRM delivery are supported; public visitors cannot perform real external writes."],
      "fincredit-copilot": ["Documents, Chinese statuses, approval conditions, and disclosure acknowledgements become one continuous flow.", "National policy and Chengdu rules are managed separately, with scope and sources shown in answers.", "Deterministic logic owns DTI / LTV calculations; the agent explains and guides."],
    } as Record<string, string[]>)[project.slug],
    outcome: ({
      "securepr-agent": "On 100 synthetic, controlled PR diffs, reproducible risk-identification F1 improved from 81.9% to 91.3%.",
      "ai-sales-lead-crm-automation": "The existing 18-query retrieval evaluation reached 18 / 18 Hit@1 and Hit@3. The latest regression passed 699 tests with 95.21% coverage; two PostgreSQL tests were skipped without a local database.",
      "fincredit-copilot": "Delivered a role-based lending demo. The local P0 report dated 2026-08-26 records 100% Recall@5 and no-answer F1 on 30 policy questions. Citation checks cover provenance metadata such as source, section, and effective date.",
    } as Record<string, string>)[project.slug],
    constraints: ({
      "securepr-agent": "The evaluation set is project-built and controlled; it is not a production security conclusion. Human review remains required.",
      "ai-sales-lead-crm-automation": "The evaluation is intentionally small and validates feasibility; real deployment needs more industry data and review.",
      "fincredit-copilot": "People, applications, amounts, and internal rules are synthetic demo data; external policies come from public sources. Small local evaluations do not establish production performance. Citation metadata checks do not assess every claim in a generated answer.",
    } as Record<string, string>)[project.slug],
  },
}));
