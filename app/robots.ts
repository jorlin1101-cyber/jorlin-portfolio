import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jorlinshi.cn/sitemap.xml",
    host: "https://jorlinshi.cn",
  };
}
