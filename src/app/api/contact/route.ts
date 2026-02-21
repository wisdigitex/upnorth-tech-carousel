import { NextResponse } from 'next/server'
import { escapeHtml, sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const projectType = String(body.projectType || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const subject = `New Contact Message — ${projectType}`

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial; line-height:1.5">
        <h2>New Contact Message (UpNorth Tech)</h2>
        <p><b>Name:</b> ${escapeHtml(name)}<br/>
           <b>Email:</b> ${escapeHtml(email)}<br/>
           <b>Project Type:</b> ${escapeHtml(projectType)}
        </p>
        <h3>Message</h3>
        <pre style="white-space:pre-wrap; background:#0b1220; color:#e5e7eb; padding:14px; border-radius:12px; border:1px solid rgba(255,255,255,0.08)">${escapeHtml(message)}</pre>
        <p style="color:#6b7280; font-size:12px">Sent from UpNorth Tech website.</p>
      </div>
    `.trim()

    await sendEmail({ subject, html, replyTo: email })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
  }
}
