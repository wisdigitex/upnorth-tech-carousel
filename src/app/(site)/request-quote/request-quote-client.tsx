'use client'

import { useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Container, Card, Badge, Button } from '@/components/ui'
import { serviceCategories } from '@/content/services'

const budgets = ['$250 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000+']
const timelines = ['1-2 Weeks', '2-4 Weeks', '1-2 Months', '2-4 Months', 'Ongoing']

type ProjectType = 'WEB APP' | 'BOT DEV' | 'GAME DEV' | 'UI/UX'
type Preferred = 'Discord' | 'Telegram'

export default function RequestQuoteClient() {
  const router = useRouter()
  const sp = useSearchParams()

  const [loading, setLoading] = useState(false)
  const [projectType, setProjectType] = useState<ProjectType>('WEB APP')
  const [preferred, setPreferred] = useState<Preferred>('Discord')

  const defaults = useMemo(() => {
    return {
      service: sp.get('service') || '',
      plan: sp.get('plan') || '',
    }
  }, [sp])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      projectType,
      service: String(form.get('service') || ''),
      plan: String(form.get('plan') || ''),
      budget: String(form.get('budget') || ''),
      timeline: String(form.get('timeline') || ''),
      preferred,
      handle: String(form.get('handle') || ''),
      description: String(form.get('description') || ''),
    }

    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setLoading(false)

    if (res.ok) {
      router.push('/request-quote/success')
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Available for new projects</Badge>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              Let&apos;s build something <span className="text-primary-400">extraordinary</span>.
            </h1>
            <p className="max-w-xl text-lg text-white/65">
              Our average response time is under 2 hours. Share your budget and timeline, then chat with us on Telegram or Discord.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5">
                <div className="text-xs text-white/60">24h</div>
                <div className="mt-1 text-sm font-semibold">Proposal delivery</div>
              </Card>
              <Card className="p-5">
                <div className="text-xs text-white/60">4.9/5</div>
                <div className="mt-1 text-sm font-semibold">Client rating</div>
              </Card>
            </div>
          </div>

          <Card className="p-6 md:p-7">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-white/60">Full Name</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/60">Email Address</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">Project Type</label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {(['WEB APP', 'BOT DEV', 'GAME DEV', 'UI/UX'] as ProjectType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setProjectType(t)}
                      className={`rounded-xl2 border px-3 py-3 text-xs font-semibold transition ${
                        projectType === t
                          ? 'border-primary-400/40 bg-primary-500/15 text-white shadow-glow'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-white/60">Budget Range</label>
                  <select
                    name="budget"
                    required
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                    defaultValue={budgets[4]}
                  >
                    {budgets.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/60">Expected Timeline</label>
                  <select
                    name="timeline"
                    required
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                    defaultValue={timelines[1]}
                  >
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-white/60">Service (optional)</label>
                  <select
                    name="service"
                    defaultValue={defaults.service}
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  >
                    <option value="">Select a service (optional)</option>
                    {serviceCategories.map((cat) => (
                      <optgroup key={cat.id} label={cat.title}>
                        {(cat.directory || []).map((s) => (
                          <option key={`${cat.id}-${s}`} value={s}>
                            {s}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-white/60">Plan (optional)</label>
                  <input
                    name="plan"
                    defaultValue={defaults.plan}
                    placeholder="e.g. Standard"
                    className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-white/60">Preferred Communication</label>
                  <div className="inline-flex rounded-xl2 border border-white/10 bg-white/5 p-1 text-xs">
                    {(['Discord', 'Telegram'] as Preferred[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPreferred(p)}
                        className={`rounded-xl2 px-3 py-2 font-semibold transition ${
                          preferred === p ? 'bg-primary-500 text-white shadow-glow' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  name="handle"
                  required
                  placeholder={preferred === 'Discord' ? 'Your handle (e.g. user#1234)' : 'Telegram username (e.g. @yourname)'}
                  className="mt-2 w-full rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">Project Description</label>
                <textarea
                  name="description"
                  required
                  rows={5}
                  placeholder="Tell us about your vision, goals, and any specific requirements..."
                  className="mt-2 w-full resize-none rounded-xl2 border border-white/10 bg-bg-900 px-4 py-3 text-sm outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-400/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white/60">Attachments (optional)</label>
                <div className="mt-2 rounded-xl2 border border-dashed border-white/15 bg-white/5 p-6 text-center text-sm text-white/60">
                  <input name="file" type="file" className="w-full text-sm" />
                  <div className="mt-2 text-xs text-white/50">
                    Max 10MB. For hosting, store files externally and share a link in description.
                  </div>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Submitting…' : 'Submit Project →'}
              </Button>

              <div className="text-center text-xs text-white/45">By clicking submit, you agree to our Terms of Service and Privacy Policy.</div>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  )
}
