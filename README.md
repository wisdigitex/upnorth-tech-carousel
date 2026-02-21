# UpNorth Tech Website (Ready to Host)

A production-ready Next.js (App Router) website matching your dark + blue agency UI style, with:
- Pages: Home, Services, Portfolio (+ case study pages), Pricing, Process, About, Contact, Request a Quote (+ success)
- Unified **single logo** (UpNorth Tech) across navbar/footer
- Proper navigation menu + CTA button
- Quote/contact forms that send **email notifications** (no admin panel)
- Floating Telegram + Discord buttons

## Tech stack
- Next.js 14 (App Router) + React 18
- TailwindCSS
- Resend (email API) via HTTP (no extra SDK)

## 1) Install

```bash
npm install
npm run dev
```

## 2) Environment variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

### Email notifications
This project uses **Resend**.
- Create a Resend account
- Verify your domain
- Create an API key
- Set `FROM_EMAIL` to a verified sender

Required:
- `RESEND_API_KEY`
- `NOTIFY_EMAIL` (where you want to receive lead notifications)
- `FROM_EMAIL`

## 3) Deploy (Vercel)
1. Push this project to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.local`.
4. Deploy.

## Notes
- The UI includes an attachment input, but files are not uploaded/sent by email in this starter (most hosts require an upload provider).
  If you want attachments, use an upload service (UploadThing/S3) and include the link in the email.
