'use client'

import { useState } from 'react'
import { Container, Card, Button, Badge } from '@/components/ui'
import { DISCORD_URL, TELEGRAM_URL } from '@/lib/utils'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSent(false)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      projectType: String(form.get('projectType') || ''),
      message: String(form.get('message') || ''),
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setLoading(false)
    if (res.ok) {
      setSent(true)
      ;(e.target as HTMLFormElement).reset()
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="mb-10">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Contact</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Let&apos;s Build the <span className="text-primary-400">Future</span> Together
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/65">
            Whether you need a cutting-edge web application or a sophisticated automation bot, our team is ready to bring your vision to life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-2">
            <div className="text-xl font-bold">Send us a Message</div>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-white/60">FULL NAME</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/60">EMAIL ADDRESS</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">PROJECT TYPE</label>
                <select
                  name="projectType"
                  required
                  className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                >
                  <option value="">Select a service</option>
                  <option>Website Development</option>
                  <option>Bot Development</option>
                  <option>Automation & Integrations</option>
                  <option>UI/UX</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">MESSAGE</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project goals and timeline..."
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Sending…' : 'Launch Inquiry →'}
              </Button>

              {sent ? <div className="text-sm text-primary-200">Message sent! We’ll reply soon.</div> : null}
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-lg font-bold">Connect Instantly</div>
              <div className="mt-4 space-y-3">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl2 border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10"
                >
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-sm text-white/60">Quick support & quotes</div>
                  </div>
                  <div className="text-white/60">→</div>
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl2 border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10"
                >
                  <div>
                    <div className="font-semibold">Discord Community</div>
                    <div className="text-sm text-white/60">Tech talk & collaboration</div>
                  </div>
                  <div className="text-white/60">→</div>
                </a>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5">
                <div className="text-xs text-white/60">EMAIL US</div>
                <div className="mt-2 text-sm font-semibold">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@upnorth.tech'}</div>
              </Card>
              <Card className="p-5">
                <div className="text-xs text-white/60">GLOBAL HQ</div>
                <div className="mt-2 text-sm font-semibold">Remote • Worldwide</div>
              </Card>
            </div>

            <Card className="p-6">
              <div className="text-lg font-bold">Remote First. Global Impact.</div>
              <p className="mt-2 text-sm text-white/60">
                Our team operates across time zones to ensure your project never sleeps.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="rounded-xl2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">🔗 Integrations</span>
                <span className="rounded-xl2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">⚙️ Automation</span>
                <span className="rounded-xl2 border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">🛡️ Secure</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
