import type { MetadataRoute } from "next";

const baseUrl = "https://jorlinshi.cn";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/fincredit-copilot`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/securepr-agent`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/ai-sales-lead-crm-automation`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
