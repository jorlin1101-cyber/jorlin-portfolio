import { createHash } from "node:crypto";

const topics: Record<string, string> = {
  job: "工作机会 / Job opportunity",
  project: "项目合作 / Project collaboration",
  feedback: "作品集建议 / Portfolio feedback",
  hello: "打个招呼 / Hello",
};
const MAX_BYTES = 24_000;
const WINDOW_MS = 10 * 60 * 1000;
const CONTROL = /[\u0000-\u001f\u007f]/;

type Options = {
  apiKey?: string;
  from?: string;
  to: string;
  allowedOrigins: string[];
  vercel?: boolean;
  fetchImpl?: typeof fetch;
  now?: () => number;
};

// A bounded per-instance backstop; the production Vercel WAF rule handles
// rate limiting across function instances before requests reach this handler.
export function createContactHandler(options: Options) {
  const attempts = new Map<string, { count: number; until: number }>();
  const clock = options.now || Date.now;
  const send = options.fetchImpl || fetch;
  const result = (status: number, code: string, extra: Record<string, string> = {}) =>
    Response.json({ ok: status === 202, code }, { status, headers: { "Cache-Control": "no-store", ...extra } });

  return async function handleContact(request: Request): Promise<Response> {
    if (request.method !== "POST") return result(405, "method", { Allow: "POST" });
    if (!options.allowedOrigins.includes(request.headers.get("origin") || "")) return result(403, "origin");
    if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return result(415, "format");
    const timestamp = clock();
    for (const [key, value] of attempts) if (value.until <= timestamp) attempts.delete(key);
    // Vercel overwrites x-vercel-forwarded-for. Never trust a visitor's arbitrary
    // x-forwarded-for value to bypass the production limiter.
    const ip = options.vercel ? request.headers.get("x-vercel-forwarded-for") || "unknown" : "local";
    const bucketKey = createHash("sha256").update(ip).digest("hex");
    const bucket = attempts.get(bucketKey) || { count: 0, until: timestamp + WINDOW_MS };
    if (bucket.count >= 5 || (!attempts.has(bucketKey) && attempts.size >= 10_000)) {
      return result(429, "rate_limit", { "Retry-After": String(Math.ceil((bucket.until - timestamp) / 1000)) });
    }
    bucket.count += 1;
    attempts.set(bucketKey, bucket);

    let data: Record<string, unknown>;
    try {
      if (Number(request.headers.get("content-length")) > MAX_BYTES) return result(413, "too_large");
      const reader = request.body?.getReader();
      if (!reader) return result(400, "validation");
      const chunks: Uint8Array[] = [];
      let length = 0;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > MAX_BYTES) { await reader.cancel(); return result(413, "too_large"); }
        chunks.push(value);
      }
      data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
      if (!data || typeof data !== "object" || Array.isArray(data)) return result(400, "validation");
    } catch { return result(400, "validation"); }

    const fields = ["name", "email", "topic", "message"] as const;
    if (fields.some((key) => typeof data[key] !== "string")) return result(400, "validation");
    if (data.website !== undefined && data.website !== "") return result(400, "validation");
    const name = (data.name as string).trim();
    const email = (data.email as string).trim();
    const topic = data.topic as string;
    const message = (data.message as string).trim();
    if (!name || name.length > 80 || CONTROL.test(name) || email.length > 254 ||
      !/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(email) || CONTROL.test(email) ||
      !Object.hasOwn(topics, topic) || !message || message.length > 5000 || message.includes("\u0000")) {
      return result(400, "validation");
    }
    if (!options.apiKey || !options.from) return result(503, "unavailable");

    // Fixed recipient and verified sender: user input is only the Reply-To.
    // Plain text avoids interpreting visitor content as HTML.
    const payload = {
      from: options.from,
      to: [options.to],
      reply_to: email,
      subject: `[作品集留言] ${topics[topic]} — ${name}`,
      text: `姓名 / Name: ${name}\n邮箱 / Email: ${email}\n主题 / Topic: ${topics[topic]}\n\n${message}\n\n来自 / From: https://jorlinshi.cn\n直接回复此邮件即可联系留言者。`,
    };
    // Identical submissions on the same UTC day reuse a provider key, including
    // retries after an uncertain network timeout and across serverless instances.
    const idempotencyKey = "contact-" + createHash("sha256")
      .update(JSON.stringify([new Date(timestamp).toISOString().slice(0, 10), payload])).digest("hex");
    try {
      const response = await send("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${options.apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(12_000),
      });
      if (!response.ok) {
        console.error("Contact email provider rejected request", { status: response.status });
        return result(502, "send_failed");
      }
      const receipt = await response.json();
      if (typeof receipt.id !== "string" || !receipt.id) return result(502, "send_failed");
      return result(202, "accepted");
    } catch {
      console.error("Contact email provider unavailable");
      return result(502, "send_failed");
    }
  };
}
