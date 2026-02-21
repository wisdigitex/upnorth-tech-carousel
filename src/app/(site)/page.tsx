import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { Container, Card, Badge, ButtonLink } from '@/components/ui'
import { projects } from '@/content/portfolio'
import { serviceCategories } from '@/content/services'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary-500/15 blur-[90px]" />

      <Container className="py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">
              Available for new projects
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Professional <span className="text-primary-400">Web, Bot & Game</span> Development
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              High‑performance digital solutions tailored to your business needs — premium web experiences, automated Telegram/Discord bots, and Roblox/FiveM game systems built for modern teams.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/request-quote">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl2 border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
              >
                Chat on Telegram <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex gap-8 pt-3 text-sm">
              <div>
                <div className="text-lg font-bold">150+</div>
                <div className="text-white/55">Projects delivered</div>
              </div>
              <div>
                <div className="text-lg font-bold">99%</div>
                <div className="text-white/55">Client satisfaction</div>
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden p-4 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-transparent" />
            <div className="relative rounded-xl2 border border-white/10 bg-bg-900 p-4">
              <Image
                src="/hero.png"
                alt="Code preview"
                width={900}
                height={650}
                className="h-auto w-full rounded-xl2 opacity-95"
                priority
              />
            </div>
          </Card>
        </div>
      </Container>

      <Container className="py-10 md:py-14">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Core Services</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/60">
            Specializing in high-performance websites, intelligent automation bots, and Roblox/FiveM game development built with modern production standards.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCategories.slice(0, 3).map((cat) => (
            <Card key={cat.id} className="p-6">
              <div className="mb-4 text-lg font-semibold">{cat.title}</div>
              <p className="text-sm text-white/60">{cat.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {cat.items.slice(0, 3).map((s) => (
                  <li key={s.title} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary-400" />
                    <span>{s.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/services#${cat.id}`} className="text-sm font-semibold text-primary-300 hover:text-primary-200">
                  Learn more →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-12 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">How It Works</h2>
            <p className="mt-2 max-w-2xl text-white/60">A simple, transparent process with fast communication.</p>
          </div>
          <ButtonLink href="/process" variant="secondary" className="hidden md:inline-flex">
            View Process <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: 'Discovery Call',
              d: 'We review your requirements, scope, and goals to outline the best technical strategy.',
            },
            {
              t: 'Agile Build',
              d: 'We ship in iterations with frequent updates and quick feedback loops.',
            },
            {
              t: 'Launch & Grow',
              d: 'We deploy to high-performance servers and offer ongoing support and improvements.',
            },
          ].map((s) => (
            <Card key={s.t} className="p-6">
              <div className="mb-2 text-lg font-semibold">{s.t}</div>
              <p className="text-sm text-white/60">{s.d}</p>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-12 md:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-white/60">Showcasing our latest work in high-end development.</p>
          </div>
          <ButtonLink href="/portfolio" variant="secondary" className="hidden md:inline-flex">
            View Portfolio <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        {/* Carousel (swipe on mobile) */}
        {(() => {
          const featured = [
            projects.find((p) => p.slug === 'upnorth-roblox-rpg-systems'),
            projects.find((p) => p.slug === 'nexus-ecommerce-platform'),
            projects.find((p) => p.slug === 'supportlink-ai'),
          ].filter((p): p is (typeof projects)[number] => Boolean(p))

          return (
            <div className="mt-8 flex gap-6 overflow-x-auto pb-3 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group min-w-[280px] snap-start md:min-w-[360px]"
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-44">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover opacity-95"
                        sizes="(max-width: 768px) 280px, 360px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-950/70 via-bg-950/10 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-primary-300">{p.heroLabel}</div>
                      <div className="mt-1 text-lg font-semibold group-hover:text-primary-200">{p.title}</div>
                      <p className="mt-2 text-sm text-white/60">{p.subtitle}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )
        })()}
      </Container>

      <Container className="py-12 md:py-16">
        <Card className="p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold md:text-3xl">What Our Partners Say About Us</h2>
              <p className="mt-2 text-white/60">
                We treat every project as a partnership. Our success is tied directly to the impact our solutions have on
                your business.
              </p>
            </div>
            <Card className="p-6">
              <div className="text-sm text-white/60">“UpNorth Tech transformed our automation workflows. Telegram bot + web app saved our team hours every week.”</div>
              <div className="mt-4 text-sm font-semibold">Alex Rivers</div>
              <div className="text-xs text-white/50">COO • Growth Studio</div>
            </Card>
          </div>
        </Card>
      </Container>

      <Container className="py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/60">Quick answers about timelines, hosting, and upgrades.</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {[{
            q: 'How long does a typical bot development take?',
            a: 'Basic utility bots take 1–2 weeks. Complex bots with AI and integrations typically take 4–6 weeks depending on scope.',
          },{
            q: 'Do you provide hosting for the websites and bots?',
            a: 'We can deploy to your preferred platform (Vercel, AWS, etc.) and set up monitoring. Hosting costs are paid directly to the provider.',
          },{
            q: 'Can you upgrade our existing website or React application?',
            a: 'Yes. We can optimize performance, refactor code, improve UI, and add new features without rebuilding everything from scratch.',
          }].map((item) => (
            <details key={item.q} className="group rounded-xl2 border border-white/10 bg-white/5 px-5 py-4">
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
      </Container>

      <Container className="pb-20">
        <div className="rounded-2xl bg-primary-500/90 p-10 text-center shadow-glow md:p-14">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready to scale your business?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            Get a free consultation today and find out how our solutions can drive your growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote" className="bg-white text-bg-950 hover:bg-white/90">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" className="border-white/25 bg-white/10 text-white hover:bg-white/15">
              View Pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
