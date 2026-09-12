# Contact form

The home page posts JSON to `/api/contact`. The server sends a plain-text notification through Resend to the fixed address in `profile.email`. The visitor's address is used only as `reply_to`; request fields cannot override the recipient or sender.

Production-only environment variables:

- `RESEND_API_KEY`: managed by the Resend/Vercel integration; never expose it with `NEXT_PUBLIC_`.
- `CONTACT_FROM_EMAIL`: `Jorlin Portfolio <contact@mail.jorlinshi.cn>`; the sending domain must be verified in Resend.

The UI shows progress and disables edits during submission, retains input after errors, and clears the form only after an accepted response with a provider receipt. Acceptance does not guarantee inbox placement. A copy-email button and normal email link remain available.

Abuse controls include a fixed recipient, exact allowed origins, a honeypot, 24 KB request-body cap, field length/type checks, plain-text delivery, and timeouts. A Vercel WAF rule limits POST `/api/contact` to 5 requests per IP in 600 seconds. WAF counters are regional; an in-process limiter is only a bounded backstop, not a shared global counter. Identical submissions on the same UTC day reuse a Resend idempotency key, including across function instances. Errors log status only, without credentials or visitor message bodies.

Local handler tests (Node 22.18+ or 24):

```sh
node --test tests/contact.test.mjs
pnpm build
```

For local integration testing, use `pnpm dev` at `http://localhost:3000` with server-only credentials in ignored `.env.local`. Unit tests inject a fake delivery transport and never send email. Do not use a real visitor's details for tests; clearly label a real owner-approved delivery test and check the provider's delivery event.
