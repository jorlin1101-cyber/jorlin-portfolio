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
  technical?: { title: string; body: string }[];
  resources?: { label: string; href: string }[];
  evaluation?: { title: string; intro: string; headers: string[]; rows: string[][]; note: string; source: string };
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
  "nameZh": "石卓灵",
  "nameEn": "Jorlin Shi",
  "email": "jorlin1101@163.com",
  "phone": "13208105936",
  "github": "https://github.com/jorlin1101-cyber",
  "intro": {
    "zh": {
      "title": "和 Jorlin 一起，把 AI 想法变成真正可用的产品。",
      "body": "我是一名 AI Agent 与 AI 应用工程师，关注可恢复执行、工具集成、上下文管理与人工确认，完成了三个公开 AI 系统。"
    },
    "en": {
      "title": "Coding with Jorlin.",
      "body": "I am an AI agent and AI application engineer focused on resumable execution, tool integration, context management and human review. I have completed three public AI systems."
    }
  }
};

export const copy = {
  "zh": {
    "nav": {
      "work": "作品",
      "about": "关于我",
      "contact": "联系",
      "resume": "下载简历"
    },
    "kicker": "CODING WITH JORLIN",
    "heroNote": "AI Agent 工程 · 知识检索 · 工具集成与人工协作",
    "workKicker": "01 — SELECTED WORK",
    "workTitle": "把复杂的事，讲清楚、做出来、跑起来。",
    "workDescription": "三个项目，三个真实问题。每个项目都从业务场景出发，经过工程实现，再用评测结果回答“它到底有没有用”。",
    "aboutKicker": "02 — A LITTLE CONTEXT",
    "aboutTitle": "我喜欢站在产品和工程的交界处。",
    "aboutBody": "电子信息背景，做过仿真建模，也在持续构建 AI 应用。比起堆叠名词，我更在意一个系统是否能被理解、被验证、被真正使用。",
    "skills": [
      "LLM / Agent",
      "RAG & 检索",
      "Python / FastAPI",
      "评测与可观测性"
    ],
    "timeline": [
      {
        "period": "2025.07 — 2026.01",
        "title": "仿真建模工程师",
        "detail": "C++ / Python 跨语言接口、Simulink 模型与性能验证"
      },
      {
        "period": "2026.04 — 至今",
        "title": "AI 应用项目实践",
        "detail": "围绕 Agent、RAG、CRM 和代码安全完成三个可运行项目"
      }
    ],
    "contactKicker": "03 — SAY HELLO",
    "contactTitle": "如果你也在把 AI 变成真正能用的东西，欢迎聊聊。",
    "contactBody": "不需要准备一份完美的问题。一个链接、一句想法，或者一句“这事应该可以自动化吧？”都可以。",
    "viewCase": "查看案例",
    "viewGithub": "查看 GitHub",
    "openDemo": "打开演示",
    "systemPreview": "系统界面预览",
    "previewDescription": "以下为系统静态截图。首次加载可能需要等待；可以先阅读案例，再进入演示。",
    "enterSystem": "进入系统",
    "publicDemoPending": "公网演示地址配置中，本地运行时仍可进入系统。",
    "metrics": "可验证结果",
    "overview": "项目概览",
    "audience": "适合谁",
    "capabilities": "可以完成什么",
    "quickStart": "如何体验",
    "challenge": "问题",
    "approach": "做法",
    "outcome": "结果",
    "constraints": "边界与思考",
    "backToWork": "返回作品",
    "footer": "一个正在持续迭代的个人作品集。",
    "technical": "关键技术与设计取舍",
    "evidence": "源码、来源与评测",
    "coldStart": "首次加载可能需要等待"
  },
  "en": {
    "nav": {
      "work": "Work",
      "about": "About",
      "contact": "Contact",
      "resume": "Résumé"
    },
    "kicker": "CODING WITH JORLIN",
    "heroNote": "AI agent engineering · retrieval · tools and human review",
    "workKicker": "01 — SELECTED WORK",
    "workTitle": "Making complicated things clear, useful, and real.",
    "workDescription": "Three projects, three real problems. Each starts with a workflow, becomes a working system, and ends with an evaluation that asks: did it actually help?",
    "aboutKicker": "02 — A LITTLE CONTEXT",
    "aboutTitle": "I like working where product meets engineering.",
    "aboutBody": "With a background in electronic information engineering, I have built simulation systems and AI applications. I care less about collecting buzzwords and more about making systems understandable, testable, and genuinely useful.",
    "skills": [
      "LLM / Agents",
      "RAG & retrieval",
      "Python / FastAPI",
      "Evaluation & observability"
    ],
    "timeline": [
      {
        "period": "2025.07 — 2026.01",
        "title": "Simulation Modeling Engineer",
        "detail": "C++ / Python interfaces, Simulink models, and performance validation"
      },
      {
        "period": "Apr 2026 — Present",
        "title": "Independent AI projects",
        "detail": "Three working projects across agents, RAG, CRM, and code security"
      }
    ],
    "contactKicker": "03 — SAY HELLO",
    "contactTitle": "If you’re turning AI into something people can actually use, let’s talk.",
    "contactBody": "You don’t need a perfectly formed question. A link, an idea, or a small “couldn’t this be automated?” is enough.",
    "viewCase": "View case",
    "viewGithub": "View GitHub",
    "openDemo": "Open demo",
    "systemPreview": "System preview",
    "previewDescription": "Static screenshots of the system. The first load may take a moment; you can read the case study before opening the demo.",
    "enterSystem": "Enter system",
    "publicDemoPending": "The public demo URL is being configured. The system remains available when running locally.",
    "metrics": "Verifiable results",
    "overview": "Project overview",
    "audience": "Who it is for",
    "capabilities": "What it does",
    "quickStart": "How to explore it",
    "challenge": "The challenge",
    "approach": "The approach",
    "outcome": "The outcome",
    "constraints": "Boundaries & reflections",
    "backToWork": "Back to work",
    "footer": "A personal portfolio, still under active iteration.",
    "technical": "Technical design and trade-offs",
    "evidence": "Code, provenance and evaluation",
    "coldStart": "The first load may take a moment"
  }
};

export const projects: Record<Language, Project[]> = {
  "zh": [
    {
      "slug": "securepr-agent",
      "index": "01",
      "name": "SecurePR Agent",
      "eyebrow": "代码安全审查与自动修复",
      "summary": "让代码审查从发现风险，走到有证据的修复建议。",
      "role": "架构与全栈实现",
      "year": "2026.05 - 2026.07",
      "stack": [
        "Python",
        "Agent Runtime",
        "AST",
        "OpenTelemetry"
      ],
      "accent": "copper",
      "repo": "https://github.com/jorlin1101-cyber/securepr-agent",
      "demo": securePrDemoUrl,
      "previewImage": "/assets/securepr-ui-preview.png",
      "audience": "需要审查代码变更、验证修复建议并保留审计过程的研发与安全团队。",
      "capabilities": [
        "协调多个审查角色分析 PR Diff",
        "基于 AST 与规则证据定位风险",
        "在人工确认前生成并验证修复建议"
      ],
      "quickStart": [
        "首次进入选择访客入口，再选择预置 PR Diff 案例。",
        "启动审查，观察不同角色的任务状态和证据。",
        "查看风险、修复建议、验证结果与完整运行轨迹。"
      ],
      "demoNote": "访客可查看受控样例并发起审查；修复与管理操作需要更高权限。首次加载可能需要等待。",
      "metrics": [
        {
          "label": "固定测试集 F1",
          "value": "81.9% → 91.3%"
        },
        {
          "label": "干净 PR 准确率",
          "value": "91.7%"
        },
        {
          "label": "可复现样本",
          "value": "100 条"
        }
      ],
      "caseStudy": {
        "context": "面向 PR 风险发现与安全修复场景，尝试把多 Agent 协作变成可中断、可恢复、可验证的工程流程。",
        "challenge": "长流程 Agent 会遇到调用失败、预算耗尽和中途退出；仅靠重新运行，既浪费成本，也难以解释失败原因。",
        "approach": [
          "用 Runtime Harness 统一管理任务状态、Token / 时间预算、Checkpoint 与断点续跑。",
          "通过 Lead、Specialists、Critic、Fixer 和 Verifier 形成审查与修复闭环。",
          "将 Prompt / Skill 版本放进 Validation 与 Holdout 双门禁，支持候选去重、审计和回滚。",
          "按 Token 预算保留高风险证据、历史观察与 Critic 反馈；Working / Episodic / Semantic 三层记忆按租户和仓库隔离。"
        ],
        "outcome": "在 100 条合成受控 PR Diff（40 条风险、60 条干净样本）上按路径、行号和 CWE 匹配：固定口径 F1 从 81.9% 提升至 91.3%，高风险召回率从 84.2% 提升至 94.7%，干净 PR 准确率为 91.7%。",
        "constraints": "评测数据为项目自建的受控样本，不等同于生产环境安全结论；最终修复仍需要人工审查。"
      },
      "resources": [
        {
          "label": "源码与运行说明",
          "href": "https://github.com/jorlin1101-cyber/securepr-agent/blob/main/README.md"
        }
      ]
    },
    {
      "slug": "fincredit-copilot",
      "index": "02",
      "name": "FinCredit Copilot",
      "eyebrow": "住房贷款智能授信辅助",
      "summary": "把材料、政策、计算和人工确认放进同一条清晰的贷款流程。",
      "role": "中国场景改造与工程实现",
      "year": "2026.07 - 2026.09",
      "stack": [
        "LangGraph",
        "MCP",
        "FastAPI",
        "pgvector",
        "React / Vite"
      ],
      "accent": "green",
      "repo": "https://github.com/jorlin1101-cyber/fincredit-copilot",
      "demo": finCreditDemoUrl,
      "previewImage": "/assets/fincredit-ui-preview.png",
      "audience": "希望了解住房贷款流程的申请人，以及需要核验材料、政策和风险条件的客户经理与审批人员。",
      "capabilities": [
        "逐页核验中文材料，查看字段置信度、证据位置与跨材料冲突",
        "按角色限制工具和数据范围，查询适用政策并追溯版本",
        "由确定性工具计算 DTI / LTV，经过提案和人工确认完成决策"
      ],
      "quickStart": [
        "在首页选择借款人、客户经理或审批人员身份。",
        "使用演示账号进入对应工作台。",
        "按页面提示查看材料、运行风险画像或咨询助手。",
        "最终授信选择始终由审批人员确认。"
      ],
      "demoNote": "首次加载可能需要等待。演示使用虚构人员、材料和金额；最终授信由有权限的人员确认。",
      "metrics": [
        {
          "label": "政策问答样本",
          "value": "30 题"
        },
        {
          "label": "B 组 MRR",
          "value": "70.00%"
        },
        {
          "label": "C 组无答案 F1",
          "value": "100%"
        }
      ],
      "caseStudy": {
        "context": "基于 Red Hat AI Quickstart 的 multi-agent-loan-origination（Apache-2.0）二次开发，面向中国住房贷款场景完成材料核验、政策检索、确定性工具和人工审批适配。",
        "challenge": "材料字段分散在不同文件，政策又受地域、版本和生效期约束。需要让 Agent 帮助理解与编排，同时把数值计算、权限检查和最终授信保留在可验证的流程中。",
        "approach": [
          "先明确材料、政策、计算与最终决策的职责，再将中文材料和规则接入已有角色流程。",
          "将证据、字段修改、计算公式与人工确认保留在同一条可追溯链路中。",
          "通过对照评测观察检索排名与拒答之间的取舍，再决定启用哪些控制。"
        ],
        "outcome": "形成材料核验、政策证据、规则计算与人工确认的多角色演示流程。2026-08-26 本地 30 题评测中，B 组 MRR 为 70.00%；C 组无答案 F1 为 100%、MRR 为 65.00%，同时带来更高的 P95 检索时延。下表分别展示各组结果。",
        "constraints": "人员、申请、金额和内部机构规则均为演示数据；外部政策来自公开资料。评测为历史小样本记录，原始逐题 JSON 未公开，仓库提供数据集、脚本和汇总报告。引用元数据检查不代表最终答案逐句正确；本地/远程模型配置也不代表已实现终端小模型与云模型的动态调度。"
      },
      "technical": [
        {
          "title": "多模态材料核验",
          "body": "针对身份证、收入证明与银行流水的信息分散问题，采用逐页文本与视觉双通道抽取，输出字段置信度、页码及证据位置。跨材料核验标记冲突和缺失，低置信度字段转人工复核；修订历史保留原值、修改结果与依据。"
        },
        {
          "title": "角色权限与人工决策",
          "body": "在上游多角色架构基础上限定工具和数据范围。DTI、LTV、完整性及一致性由确定性代码计算，保留输入、公式和规则版本；Agent 生成提案后，由有权限的人员确认，模型无法自动批准或拒绝授信。"
        },
        {
          "title": "MCP 工具集成与服务容错",
          "body": "通过 MCP Streamable HTTP 与 langchain-mcp-adapters 将中国场景工具接入 Agent。分别配置文本、视觉、向量模型以及本地/远程 embedding，增加维度校验和懒加载；将超时、限流、连接失败与 5xx 归为结构化错误，标记是否可重试并保留人工处理路径。"
        },
        {
          "title": "受控 Agentic RAG",
          "body": "将全国政策、成都地方规则和内部演示规则分开管理，使用 pgvector、PostgreSQL 全文检索与 RRF 融合，再按辖区、版本及生效期过滤。证据不足时最多进行一次受控改写；版本无法核验或证据仍不充分时拒答并转人工。"
        },
        {
          "title": "评测与可追溯审计",
          "body": "以同一政策库和 30 题数据集比较 A/B/C，分别记录检索排名、拒答与时延，避免把不同方案的最优指标拼接。trace_id 串联模型调用、政策检索、规则计算和人工决策，方便从结果回看依据与执行步骤。"
        }
      ],
      "evaluation": {
        "title": "政策问答 A/B/C 对照",
        "intro": "2026-08-26 本地 P0 记录：30 题，其中 24 题可回答、6 题不应回答（5 题无答案类别，1 题过期/冲突类别）。各组在相同政策库上运行。",
        "headers": [
          "方案",
          "Recall@5",
          "MRR",
          "无答案 F1",
          "P95 时延"
        ],
        "rows": [
          [
            "A · 纯向量",
            "100%",
            "64.17%",
            "0%",
            "1202.84 ms"
          ],
          [
            "B · 混合检索 + RRF",
            "100%",
            "70.00%",
            "0%",
            "2360.91 ms"
          ],
          [
            "C · 核验 / 拒答 / 受控改写",
            "100%",
            "65.00%",
            "100%",
            "4236.46 ms"
          ]
        ],
        "note": "Recall@5 计算中无来源标注的无答案题记为 1；引用元数据检查验证来源、条款和生效日期，不评估生成答案逐句正确性。B 的排名更好，C 增加拒答能力并付出时延代价；以上为已有报告，本次文案更新未重跑模型评测。",
        "source": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md"
      },
      "resources": [
        {
          "label": "上游来源 · UPSTREAM",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/UPSTREAM.md"
        },
        {
          "label": "改造与贡献 · CONTRIBUTIONS",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/CONTRIBUTIONS.md"
        },
        {
          "label": "评测数据与方法",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md"
        },
        {
          "label": "模型配置与调用",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/packages/api/src/inference/client.py"
        }
      ]
    },
    {
      "slug": "ai-sales-lead-crm-automation",
      "index": "03",
      "name": "AI 销售线索决策与 CRM 自动化",
      "eyebrow": "线索判断与客户跟进",
      "summary": "把零散客户事实整理成可解释、可回放的下一步动作。",
      "role": "产品设计与工程实现",
      "year": "2026.04 - 2026.05 · 后续持续维护",
      "stack": [
        "FastAPI",
        "Pydantic",
        "RAG",
        "n8n",
        "PostgreSQL"
      ],
      "accent": "blue",
      "repo": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation",
      "demo": salesDemoUrl,
      "localDemo": "http://127.0.0.1:8011/",
      "previewImage": "/assets/sales-ui-preview.png",
      "audience": "需要处理邮件、网站表单等线索，并希望统一判断、回复和沉淀客户信息的销售运营团队。",
      "capabilities": [
        "从产品手册匹配目的地、人数和天数，展示推荐理由与证据",
        "保存多轮客户偏好，按邮件或聊天渠道生成回复草稿",
        "支持通义千问理解与草稿生成、人工审核和 CRM / Notion 同步"
      ],
      "quickStart": [
        "进入系统，输入例如：4个人想去云南玩7天，请推荐产品。",
        "查看产品推荐、适配理由和产品手册来源。",
        "在同一对话补充酒店等级、用车需求和导游语言，检查更新后的回复。",
        "公网访客仅体验隔离演示；真实模型与 Notion 写入需受保护的运营配置。"
      ],
      "demoNote": "首次加载可能需要等待。公网访客使用离线 keyword-RRF 检索与规则回复，不调用付费模型，不写入真实 CRM；演示记录可能随重启清空。",
      "metrics": [
        {
          "label": "检索评测",
          "value": "18 条查询"
        },
        {
          "label": "测试通过 / 跳过",
          "value": "699 / 2"
        },
        {
          "label": "代码覆盖率",
          "value": "95.21%"
        }
      ],
      "caseStudy": {
        "context": "面向销售线索、评分与客户跟进场景，建立从数据清洗到 CRM 路由的端到端决策原型。",
        "challenge": "客户信息分散在文本、表单和历史记录中，模型如果直接给建议，难以追溯事实来源和判断依据。",
        "approach": [
          "将多轮客户事实与本轮消息分开保存；明确更正更新当前值并保留历史，简短确认不会清空已有需求。LLM 只抽取受约束事实和起草回复，确定性引擎负责最终评分。",
          "支持 BGE-M3、BM25 与 RRF；公网采用离线 keyword-RRF。依据同一产品手册快照匹配目的地、人数和天数，展示来源及适配限制，检索结果不能反向改写评分。",
          "跟进草稿经人工审核后同步 CRM，使用版本校验、消息幂等和重试机制；n8n 分为 High、Medium、Low、Invalid、API Error、Suppressed、Manual Review 七路。公网访客禁止真实外部写入。"
        ],
        "outcome": "2026-09-08 复核记录为 699 项通过、2 项 PostgreSQL 实机测试跳过、覆盖率 95.21%。既有 18 条人工标注查询中，Hit@1、Hit@3 均为 18/18，MRR@3 为 1.0000，nDCG@3 为 0.8331。历史检索基线与当前公网离线演示分别说明。",
        "constraints": "18 条查询用于小样本检索验证，测试数量和覆盖率不等于业务答案准确率。Notion 同步通过模拟接口验证；公开访客为隔离演示，真实渠道、PostgreSQL 实机和 CRM 联调仍需单独验收。"
      },
      "resources": [
        {
          "label": "2026-09-08 复核记录",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/docs/workflow-implementation-review.md"
        },
        {
          "label": "七路工作流与人工审核",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/docs/n8n-workflow.md"
        },
        {
          "label": "检索与运行说明",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/README.md"
        }
      ]
    }
  ],
  "en": [
    {
      "slug": "securepr-agent",
      "index": "01",
      "name": "SecurePR Agent",
      "eyebrow": "Code security review & repair",
      "summary": "Moving code review from finding risk to evidence-backed repair suggestions.",
      "role": "Architecture & full-stack engineering",
      "year": "2026.05 - 2026.07",
      "stack": [
        "Python",
        "Agent Runtime",
        "AST",
        "OpenTelemetry"
      ],
      "accent": "copper",
      "repo": "https://github.com/jorlin1101-cyber/securepr-agent",
      "demo": securePrDemoUrl,
      "previewImage": "/assets/securepr-ui-preview.png",
      "audience": "Engineering and security teams that need to review code changes, validate proposed fixes, and preserve an auditable process.",
      "capabilities": [
        "Coordinate specialist reviewers over a PR diff",
        "Locate risks with AST and rule-based evidence",
        "Generate and verify repair suggestions before human approval"
      ],
      "quickStart": [
        "Choose guest access on first entry, then select a preset PR diff.",
        "Start the run and follow each reviewer’s task state and evidence.",
        "Inspect findings, proposed fixes, verification results, and the run trace."
      ],
      "demoNote": "Guests can inspect controlled examples and start reviews; repair and administration require additional permissions. The first load may take a moment.",
      "metrics": [
        {
          "label": "Fixed test-set F1",
          "value": "81.9% → 91.3%"
        },
        {
          "label": "Clean PR specificity",
          "value": "91.7%"
        },
        {
          "label": "Reproducible samples",
          "value": "100 cases"
        }
      ],
      "caseStudy": {
        "context": "A system for PR risk discovery and secure repair, designed to make multi-agent collaboration interruptible, recoverable, and verifiable.",
        "challenge": "Long-running agents encounter failed calls, exhausted budgets, and interruptions. Restarting wastes cost and hides the reason for failure.",
        "approach": [
          "A Runtime Harness manages task state, token / time budgets, checkpoints, and resume-from-breakpoint.",
          "Lead, Specialists, Critic, Fixer, and Verifier form a review-and-repair loop.",
          "Prompt / Skill versions pass through Validation and Holdout gates for deduplication, audit, and rollback.",
          "Preserve high-risk evidence, prior observations and Critic feedback within the token budget; isolate Working, Episodic and Semantic memory by tenant and repository."
        ],
        "outcome": "On 100 synthetic, controlled PR diffs (40 risky and 60 clean), findings are matched by path, line and CWE. Under the stated evaluation setup, F1 increased from 81.9% to 91.3%, high-risk recall from 84.2% to 94.7%, and clean-PR specificity reached 91.7%.",
        "constraints": "The evaluation set is project-built and controlled; it is not a production security conclusion. Human review remains required."
      },
      "resources": [
        {
          "label": "Source and run guide",
          "href": "https://github.com/jorlin1101-cyber/securepr-agent/blob/main/README.md"
        }
      ]
    },
    {
      "slug": "fincredit-copilot",
      "index": "02",
      "name": "FinCredit Copilot",
      "eyebrow": "Housing-loan underwriting assistance",
      "summary": "Bringing documents, policy, calculations, and human confirmation into one clear lending flow.",
      "role": "China-scenario adaptation and engineering",
      "year": "2026.07 - 2026.09",
      "stack": [
        "LangGraph",
        "MCP",
        "FastAPI",
        "pgvector",
        "React / Vite"
      ],
      "accent": "green",
      "repo": "https://github.com/jorlin1101-cyber/fincredit-copilot",
      "demo": finCreditDemoUrl,
      "previewImage": "/assets/fincredit-ui-preview.png",
      "audience": "Housing-loan applicants, loan officers, and underwriters who need a clear view of documents, policy, calculations, and approval conditions.",
      "capabilities": [
        "Inspect Chinese documents page by page, including confidence, evidence locations and conflicts",
        "Scope tools and data by role, and retrieve policies with applicability and version evidence",
        "Calculate DTI / LTV with deterministic tools, then complete proposal and human-confirmation steps"
      ],
      "quickStart": [
        "Choose the borrower, loan officer, or underwriter role.",
        "Enter the corresponding demo workspace.",
        "Follow the prompts to inspect documents, run a risk profile, or ask the assistant.",
        "Leave the final credit decision to the authorized human reviewer."
      ],
      "demoNote": "The first load may take a moment. People, documents and amounts are fictional; authorized reviewers retain the final credit decision.",
      "metrics": [
        {
          "label": "Policy questions",
          "value": "30 cases"
        },
        {
          "label": "B: MRR",
          "value": "70.00%"
        },
        {
          "label": "C: no-answer F1",
          "value": "100%"
        }
      ],
      "caseStudy": {
        "context": "An adaptation of Red Hat AI Quickstart’s multi-agent-loan-origination (Apache-2.0) for Chinese housing-loan workflows, covering document checks, policy retrieval, deterministic tools and human approval.",
        "challenge": "Facts are spread across documents, while policies vary by jurisdiction, version and effective date. Agents support interpretation and orchestration; calculations, access checks and final credit decisions need verifiable controls.",
        "approach": [
          "Define responsibilities for documents, policy, calculations and final decisions before adapting Chinese materials and rules to the existing role workflow.",
          "Keep evidence, field revisions, formulas and human confirmations in one traceable flow.",
          "Use controlled comparisons to inspect ranking and abstention trade-offs before choosing which controls to enable."
        ],
        "outcome": "Delivered a multi-role demo connecting document checks, policy evidence, rule calculations and human confirmation. In the local 30-question evaluation on 2026-08-26, B reached 70.00% MRR; C reached 100% no-answer F1 and 65.00% MRR, with higher P95 retrieval latency. The table reports each configuration separately.",
        "constraints": "People, applications, amounts and internal rules are demo data; external policies come from public sources. These are historical small-sample results; per-question JSON is not published, while the dataset, script and summary report are available. Citation metadata checks do not establish sentence-level answer accuracy. Local/remote model configuration does not establish dynamic routing between an on-device small model and a cloud model."
      },
      "technical": [
        {
          "title": "Multimodal document checks",
          "body": "For facts spread across identity documents, income proof and bank statements, extract text and visual evidence page by page, retaining confidence, page numbers and locations. Flag conflicts and missing fields across documents, route uncertain fields to human review and retain the revision history."
        },
        {
          "title": "Role-scoped tools and human decisions",
          "body": "Build on the upstream role architecture to scope tools and data. Deterministic code owns DTI, LTV, completeness and consistency checks, preserving inputs, formulas and rule versions. An agent proposes an action and an authorized reviewer confirms it; the model cannot approve or reject credit on its own."
        },
        {
          "title": "MCP integration and service fault handling",
          "body": "Connect China-scenario tools through MCP Streamable HTTP and langchain-mcp-adapters. Configure text, vision and embedding models plus local/remote embedding providers, with dimension checks and lazy loading. Classify timeouts, rate limits, connection failures and 5xx errors, mark retryability and retain a human-handling path."
        },
        {
          "title": "Controlled Agentic RAG",
          "body": "Manage national policies, Chengdu rules and internal demo rules separately. Combine pgvector and PostgreSQL full-text retrieval using RRF, then filter by jurisdiction, version and effective date. Allow at most one controlled rewrite when evidence is insufficient; abstain and hand off when policy versions or evidence cannot be confirmed."
        },
        {
          "title": "Evaluation and traceable audit",
          "body": "Compare A/B/C on the same policy collection and 30-question dataset, reporting ranking, abstention and latency separately. Use trace_id to connect model calls, retrieval, rule calculations and human decisions so a result can be traced back to its evidence and execution steps."
        }
      ],
      "evaluation": {
        "title": "Policy retrieval: A/B/C comparison",
        "intro": "Local P0 record dated 2026-08-26: 30 questions, with 24 answerable and 6 requiring abstention (5 in the no-answer category and 1 in the expired/conflicting category). All configurations used the same policy collection.",
        "headers": [
          "Configuration",
          "Recall@5",
          "MRR",
          "No-answer F1",
          "P95 latency"
        ],
        "rows": [
          [
            "A · Vector only",
            "100%",
            "64.17%",
            "0%",
            "1202.84 ms"
          ],
          [
            "B · Hybrid + RRF",
            "100%",
            "70.00%",
            "0%",
            "2360.91 ms"
          ],
          [
            "C · Checks / abstention / controlled rewrite",
            "100%",
            "65.00%",
            "100%",
            "4236.46 ms"
          ]
        ],
        "note": "The Recall@5 calculation assigns 1 to no-answer questions without labeled sources. Citation checks cover provenance metadata, not sentence-level answer accuracy. B ranks better; C adds abstention at a latency cost. These are existing reported results; this content update did not rerun model evaluation.",
        "source": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md"
      },
      "resources": [
        {
          "label": "Upstream provenance · UPSTREAM",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/UPSTREAM.md"
        },
        {
          "label": "Adaptation and contributions · CONTRIBUTIONS",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/CONTRIBUTIONS.md"
        },
        {
          "label": "Evaluation data and method",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md"
        },
        {
          "label": "Model configuration and calls",
          "href": "https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/packages/api/src/inference/client.py"
        }
      ]
    },
    {
      "slug": "ai-sales-lead-crm-automation",
      "index": "03",
      "name": "AI Sales Lead Decision & CRM Automation",
      "eyebrow": "Lead decisions & customer follow-up",
      "summary": "Turning scattered customer facts into explainable next actions.",
      "role": "Product design & engineering",
      "year": "2026.04 - 2026.05 · maintained thereafter",
      "stack": [
        "FastAPI",
        "Pydantic",
        "RAG",
        "n8n",
        "PostgreSQL"
      ],
      "accent": "blue",
      "repo": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation",
      "demo": salesDemoUrl,
      "localDemo": "http://127.0.0.1:8011/",
      "previewImage": "/assets/sales-ui-preview.png",
      "audience": "Sales operations teams handling leads from email, web forms, and other channels that need consistent decisions, replies, and CRM records.",
      "capabilities": [
        "Match products from manuals with evidence and fit constraints",
        "Preserve customer preferences across turns and draft channel-aware replies",
        "Support Qwen-grounded drafting, human review, and CRM / Notion synchronization"
      ],
      "quickStart": [
        "Enter a request such as: Recommend a 7-day Yunnan trip for four people.",
        "Review the recommended product, fit reasons, and manual evidence.",
        "Add hotel, vehicle, and guide preferences in the same conversation and review the updated reply.",
        "Public visitors use an isolated demo; live models and Notion delivery require protected operator configuration."
      ],
      "demoNote": "The first load may take a moment. Public visitors use offline keyword-RRF retrieval and rule-based replies, with no paid model calls or real CRM writes. Demo records may reset after a restart.",
      "metrics": [
        {
          "label": "Retrieval evaluation",
          "value": "18 queries"
        },
        {
          "label": "Tests passed / skipped",
          "value": "699 / 2"
        },
        {
          "label": "Code coverage",
          "value": "95.21%"
        }
      ],
      "caseStudy": {
        "context": "An end-to-end decision prototype for sales leads, scoring, customer facts, and CRM routing.",
        "challenge": "Customer information is spread across text, forms, and history. A model suggestion without evidence is difficult to audit.",
        "approach": [
          "Store accumulated customer facts separately from the current message. Explicit corrections update values with history; brief acknowledgements preserve prior requirements. The LLM extracts constrained facts and drafts replies; deterministic code owns the final score.",
          "Support BGE-M3, BM25 and RRF, while the public demo uses offline keyword-RRF. Match destination, group size and duration from one product-manual snapshot, showing sources and fit constraints. Retrieval cannot overwrite the score.",
          "Review drafts before CRM synchronization, with version checks, message idempotency and retries. n8n routes to High, Medium, Low, Invalid, API Error, Suppressed or Manual Review. Public visitors cannot perform real external writes."
        ],
        "outcome": "The 2026-09-08 review records 699 passing tests, 2 skipped PostgreSQL integration tests and 95.21% coverage. The existing 18 labeled retrieval queries reached 18/18 Hit@1 and Hit@3, MRR@3 of 1.0000 and nDCG@3 of 0.8331. The historical retrieval baseline is separate from the current offline public demo.",
        "constraints": "The 18-query set is a small retrieval check; test counts and coverage do not measure business answer accuracy. Notion synchronization was checked through mocks. Public visitors use an isolated demo; live channels, PostgreSQL integration and real CRM delivery require separate acceptance."
      },
      "resources": [
        {
          "label": "Review record · 2026-09-08",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/docs/workflow-implementation-review.md"
        },
        {
          "label": "Seven routes and human review",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/docs/n8n-workflow.md"
        },
        {
          "label": "Retrieval and run guide",
          "href": "https://github.com/jorlin1101-cyber/ai-sales-lead-crm-automation/blob/main/README.en.md"
        }
      ]
    }
  ]
};
