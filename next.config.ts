import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/resume-concise.pdf", destination: "/resume-public.pdf", permanent: false }];
  },
  images: { unoptimized: true },
};

export default nextConfig;
