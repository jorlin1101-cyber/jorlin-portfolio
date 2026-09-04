# Coding with Jorlin

石卓灵（Jorlin Shi）的个人 AI 应用开发作品集，中文为主，支持中英双语切换。

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

未配置销售项目公网地址时，本地作品集会回退到 `http://127.0.0.1:8010/`；线上页面只展示真实界面预览和“公网演示地址配置中”的提示，不会把无效的本机地址提供给访客。

## 联系

- Email: jorlin1101@163.com
- GitHub: https://github.com/jorlin1101-cyber
