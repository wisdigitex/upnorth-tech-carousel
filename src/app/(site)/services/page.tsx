import { Container, Card, Badge, ButtonLink } from '@/components/ui'
import { serviceCategories } from '@/content/services'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="text-center">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Our Expertise</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Precision Engineered <span className="text-primary-400">Digital Solutions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
            We bridge the gap between complex business logic and intuitive user experiences through high‑performance web and
            automation systems.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#website" variant="secondary">
              Website Development
            </ButtonLink>
            <ButtonLink href="#bots" variant="secondary">
              Bot Development
            </ButtonLink>
            <ButtonLink href="#games" variant="secondary">
              Game Development
            </ButtonLink>
            <ButtonLink href="/request-quote">Get a Quote</ButtonLink>
          </div>
        </div>

        {serviceCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mt-14">
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">{cat.title}</h2>
                <p className="mt-2 max-w-3xl text-white/60">{cat.description}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {cat.items.map((s) => (
                <Card key={s.title} className="p-6">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                  {s.bullets?.length ? (
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-white/50">{s.from ? `Starts from ${s.from}` : 'Custom quote'}</div>
                    <ButtonLink
                      href={`/request-quote?service=${encodeURIComponent(s.title)}`}
                      variant="ghost"
                      className="px-0 py-0"
                    >
                      Request <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </Card>
              ))}
            </div>

            {cat.directory?.length ? (
              <Card className="mt-6 p-6">
                <div className="text-sm font-semibold text-white/90">Full service list</div>
                <p className="mt-1 text-sm text-white/60">
                  Prefer a quick scan? Here&apos;s everything we offer under this category.
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.directory.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}
          </section>
        ))}

        <div className="mt-16 rounded-2xl bg-primary-500/90 p-10 text-center shadow-glow md:p-14">
          <h3 className="text-3xl font-extrabold md:text-4xl">Need something more specific?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            We thrive on building unique, complex solutions. If your project doesn&apos;t fit into a standard category,
            let&apos;s talk about custom development.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote" className="bg-white text-bg-950 hover:bg-white/90">
              Schedule a Call
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary" className="border-white/25 bg-white/10 text-white hover:bg-white/15">
              Download Price List
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
