import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorlin Shi — AI Application Engineer",
  description: "Jorlin Shi's portfolio: AI agents, RAG, automation, evaluation, and product-minded engineering.",
  metadataBase: new URL("https://jorlin-portfolio.vercel.app"),
  openGraph: {
    title: "Jorlin Shi — AI Application Engineer",
    description: "AI agents, retrieval systems, automation, and engineering evidence that shows what actually works.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
