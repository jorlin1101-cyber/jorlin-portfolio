# Coding with Jorlin

石卓灵（Jorlin Shi）的个人 AI Agent 工程作品集，中文为主，支持中英双语切换。

[中文网站](https://jorlinshi.cn/?lang=zh) · [English](https://jorlinshi.cn/?lang=en) · [完整简历](https://jorlinshi.cn/resume-public.pdf)

## 内容

- AI 应用开发、Agent 工程与可验证的项目案例
- SecurePR Agent、FinCredit Copilot、AI 销售线索决策与 CRM 自动化
- 个人经历、技术方向、联系方式与公开简历

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000` 即可查看。

## 部署

项目可直接导入 Vercel，构建命令使用 `pnpm run build`。三个项目的演示入口通过以下公开环境变量配置：

- `NEXT_PUBLIC_FINCREDIT_DEMO_URL`
- `NEXT_PUBLIC_SECUREPR_DEMO_URL`
- `NEXT_PUBLIC_SALES_DEMO_URL`

三个项目均有默认公网演示地址，可通过上述环境变量覆盖；本机回退地址仅在本地访问时使用。首页与项目页支持 `?lang=zh` / `?lang=en`，默认中文。联系表单通过 `mailto:` 打开访客的邮件应用，访客需在应用内确认并发送。

## 公开信息与项目口径

- SecurePR Agent 主要开发周期：2026.05 - 2026.07；FinCredit Copilot：2026.07 - 2026.09；后续持续维护。
- 科研：2023.06 - 2025.06；北京润科通用技术有限公司：2025.07 - 2026.01。
- 教育：电子科技大学电子信息硕士（2022.09 - 2025.06）；西南石油大学电子信息科学与技术本科（2017.09 - 2021.06）。
- 科研成果：EI 期刊第一作者论文 1 篇；发明专利申请 1 项（学生第一）。
- FinCredit 使用 React / Vite、FastAPI、LangGraph 与 pgvector；作品集本身使用 Next.js。
- FinCredit 指标以 [2026-08-26 本地 P0 报告](https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md)为准：30 题，B 组 MRR 70.00%，C 组 MRR 65.00%、无答案 F1 100%；完整 A/B/C 排名、拒答和时延分别展示，引用指标不代表答案逐句正确。
- 下载 PDF 由修订后的 V6.1 HTML 生成；编辑版支持修改正文、保存 HTML 与导出 PDF。旧的一页下载地址重定向至同一份完整简历。

## 联系

- Email: jorlin1101@163.com
- GitHub: https://github.com/jorlin1101-cyber

## 2026-09-13 内容同步

- 首页优先展示 AI Agent，项目顺序为 SecurePR、FinCredit、AI 销售线索。
- FinCredit 案例补充 Red Hat 上游、五项工程设计、MCP / 模型配置与服务容错、评测对照和贡献直链。
- 销售项目沿用 2026-09-08 复核记录：699 通过、2 项 PostgreSQL 测试跳过、95.21% 覆盖率；当前 n8n 为七路分支。
- 三个演示保留静态截图与案例，入口均提示首次加载可能等待；中文、英文使用一致的事实和评测条件。
