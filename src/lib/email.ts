type SendEmailArgs = {
  subject: string
  html: string
  replyTo?: string
}

function must(name: string, v: string | undefined) {
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

/**
 * Sends email via Resend HTTP API.
 * Required env:
 * - RESEND_API_KEY
 * - NOTIFY_EMAIL
 * - FROM_EMAIL (must be verified in Resend)
 */
export async function sendEmail({ subject, html, replyTo }: SendEmailArgs) {
  const key = must('RESEND_API_KEY', process.env.RESEND_API_KEY)
  const to = must('NOTIFY_EMAIL', process.env.NOTIFY_EMAIL)
  const from = must('FROM_EMAIL', process.env.FROM_EMAIL)

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Resend error: ${res.status} ${text}`)
  }
}

export function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
