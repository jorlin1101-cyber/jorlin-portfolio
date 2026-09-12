import { createContactHandler } from "@/lib/contact";
import { profile } from "@/data/content";

export const runtime = "nodejs";
export const maxDuration = 20;

export const POST = createContactHandler({
  apiKey: process.env.RESEND_API_KEY,
  from: process.env.CONTACT_FROM_EMAIL,
  to: profile.email,
  allowedOrigins: [
    "https://jorlinshi.cn",
    "https://www.jorlinshi.cn",
    ...(process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
    ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000", "http://127.0.0.1:3000"] : []),
  ],
  vercel: process.env.VERCEL === "1",
});
