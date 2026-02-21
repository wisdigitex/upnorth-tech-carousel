'use client'

import { useMemo, useState } from 'react'
import { Container, Card, Badge, ButtonLink } from '@/components/ui'

export default function PricingPage() {
  const [yearly, setYearly] = useState(false)

  const plans = useMemo(() => {
    const mult = yearly ? 10 : 1
    return [
      {
        name: 'Basic',
        price: 49 * mult,
        badge: '',
        features: ['Simple landing pages', 'Basic bot setup', 'Email support', 'Custom UI components'],
      },
      {
        name: 'Standard',
        price: 99 * mult,
        badge: 'Most Popular',
        features: ['Full web applications', 'AI-integrated bots', 'Priority email support', 'Custom UI components', '5 revision cycles'],
      },
      {
        name: 'Premium',
        price: 199 * mult,
        badge: '',
        features: ['Enterprise solutions', 'Custom API integrations', '24/7 priority support', 'Dedicated manager', 'Unlimited revisions'],
      },
    ]
  }, [yearly])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="text-center">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Pricing</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Flexible Plans for Every <span className="text-primary-400">Stage of Growth</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
            Professional web, bot, and game development tailored to your needs. Scale your digital presence with high-performance solutions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/70">
            <span>Monthly</span>
            <button
              onClick={() => setYearly((v) => !v)}
              className={`relative h-7 w-14 rounded-full border border-white/10 ${yearly ? 'bg-primary-500' : 'bg-white/10'}`}
              aria-label="Toggle yearly"
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${yearly ? 'left-8' : 'left-1'}`}
              />
            </button>
            <span>Yearly</span>
            <span className="ml-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs">2 months free</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={`p-7 ${p.badge ? 'border-primary-400/35 bg-primary-500/10' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/80">{p.name}</div>
                {p.badge ? (
                  <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-bold">{p.badge}</span>
                ) : null}
              </div>
              <div className="mt-5 flex items-end gap-1">
                <div className="text-4xl font-extrabold">${p.price}</div>
                <div className="pb-1 text-white/55">/mo</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <ButtonLink
                  href={`/request-quote?plan=${encodeURIComponent(p.name)}`}
                  className={p.badge ? 'w-full justify-center' : 'w-full justify-center bg-white/8 hover:bg-white/12 border border-white/10'}
                  variant={p.badge ? 'primary' : 'secondary'}
                >
                  {p.badge ? 'Get Started' : `Get ${p.name}`}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto mt-5 max-w-3xl space-y-3">
            {[{
              q: 'Can I upgrade or downgrade my plan anytime?',
              a: 'Yes. We can adjust scope as your needs change. Changes are prorated based on the remaining work.',
            },{
              q: 'What is included in “Bot Setup”?',
              a: 'Bot setup includes core commands/flows and basic integrations (where applicable). More complex automation is quoted separately.',
            },{
              q: 'Do you offer custom enterprise pricing?',
              a: 'Absolutely. If standard tiers don’t fit, request a quote and we’ll craft a plan based on your requirements.',
            }].map((item) => (
              <details key={item.q} className="group rounded-xl2 border border-white/10 bg-white/5 px-5 py-4 text-left">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
                  <div className="flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="text-white/50 group-open:rotate-45 transition">+</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-white/60">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-primary-500/90 p-10 text-center shadow-glow md:p-14">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready to accelerate your growth?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">Join founders worldwide building the future with UpNorth Tech.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote" className="bg-white text-bg-950 hover:bg-white/90">Get Started Now</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="border-white/25 bg-white/10 text-white hover:bg-white/15">Book a Consultation</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
