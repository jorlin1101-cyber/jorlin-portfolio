# Coding with Jorlin

石卓灵（Jorlin Shi）的个人 AI 应用开发作品集，中文为主，支持中英双语切换。

[中文网站](https://jorlinshi.cn/?lang=zh) · [English](https://jorlinshi.cn/?lang=en) · [完整简历](https://jorlinshi.cn/resume-public.pdf) · [一页投递版](https://jorlinshi.cn/resume-concise.pdf)

## 内容

- AI 应用开发、Agent 工程与可验证的项目案例
- SecurePR Agent、AI 销售线索决策与 CRM 自动化、FinCredit Copilot
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

- SecurePR Agent 主要开发周期：2026.05 - 2026.06；FinCredit Copilot：2026.07 - 2026.09；后续持续维护。
- 科研：2023.06 - 2025.06；北京润科通用有限公司：2025.07 - 2026.01。
- 教育：电子科技大学电子信息硕士（2022.09 - 2025.06）；西南石油大学电子信息科学与技术本科（2017.09 - 2021.06）。
- 科研成果：EI 期刊第一作者论文 1 篇；发明专利申请 1 项（第二发明人，导师第一）。
- FinCredit 使用 React / Vite、FastAPI、LangGraph 与 pgvector；作品集本身使用 Next.js。
- FinCredit 指标以 [2026-08-26 本地 P0 报告](https://github.com/jorlin1101-cyber/fincredit-copilot/blob/main/docs/evaluation-report.md)为准：30 题，Recall@5 与无答案 F1 均为 100%；引用指标是元数据检查，不代表最终答案事实准确率。
- 完整版保留技术细节；一页版用于投递，两份 PDF 的姓名、邮箱、时间与项目事实保持一致。

## 联系

- Email: jorlin1101@163.com
- GitHub: https://github.com/jorlin1101-cyber
