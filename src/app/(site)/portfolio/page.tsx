'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Card, Badge, ButtonLink } from '@/components/ui'
import { projects } from '@/content/portfolio'

const tabs = ['All Projects', 'Custom Websites', 'AI & Bots', 'Games'] as const

type Tab = (typeof tabs)[number]

export default function PortfolioPage() {
  const [tab, setTab] = useState<Tab>('All Projects')

  const filtered = useMemo(() => {
    if (tab === 'All Projects') return projects
    if (tab === 'Custom Websites') return projects.filter((p) => p.category === 'Web')
    if (tab === 'AI & Bots') return projects.filter((p) => p.category === 'Bots' || p.category === 'Automation')
    return projects.filter((p) => p.category === 'Games')
  }, [tab])

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="text-center">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Portfolio</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Selected <span className="text-primary-400">Works</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
            We design and build bespoke digital experiences ranging from high‑converting marketing sites to complex
            automation engines and game experiences.
          </p>

          <div className="mx-auto mt-7 inline-flex rounded-xl2 border border-white/10 bg-white/5 p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-xl2 px-4 py-2 text-sm font-semibold transition ${
                  tab === t ? 'bg-primary-500 text-white shadow-glow' : 'text-white/70 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group">
              <Card className="overflow-hidden">
                <div className="relative h-44">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover opacity-95"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-950/70 via-bg-950/10 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-primary-300">{p.heroLabel}</div>
                  <div className="mt-1 text-lg font-semibold group-hover:text-primary-200">{p.title}</div>
                  <p className="mt-2 text-sm text-white/60">{p.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="mt-14 p-10 text-center md:p-12">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready to build your next <span className="text-primary-400">vision</span>?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/65">
            Whether it&apos;s a world‑class website or an intelligent automation system, we&apos;re here to craft it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote">Work With Us</ButtonLink>
            <ButtonLink href="/services" variant="secondary">View Services</ButtonLink>
          </div>
        </Card>
      </Container>
    </div>
  )
}
