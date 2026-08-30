import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "石卓灵 / Jorlin Shi — Coding with Jorlin",
  description: "石卓灵的 AI 应用开发作品集：Agent、RAG、自动化与可验证的工程实践。",
  metadataBase: new URL("https://jorlin-portfolio.vercel.app"),
  openGraph: {
    title: "Coding with Jorlin",
    description: "把 AI 放进生活和工作里，记录那些正在跑起来的想法。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
