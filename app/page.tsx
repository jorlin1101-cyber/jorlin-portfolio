import { PortfolioHome } from "@/components/portfolio-home";

export default async function Home({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = await searchParams;
  return <PortfolioHome initialLanguage={lang === "en" ? "en" : "zh"} />;
}
