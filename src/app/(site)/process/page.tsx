import { Container, Card, Badge, ButtonLink } from '@/components/ui'

export default function ProcessPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="text-center">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">Process</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Built for speed, clarity, and <span className="text-primary-400">quality</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
            A proven delivery flow that keeps you informed, reduces risk, and ships fast.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: '1) Discovery',
              d: 'We align on goals, scope, budget, and technical constraints. You get a clear plan and timeline.',
            },
            {
              t: '2) Design + Architecture',
              d: 'We map UX flows, create a clean UI, and define the best architecture for scaling and performance.',
            },
            {
              t: '3) Build + Iterate',
              d: 'Weekly milestones, demos, and feedback loops. We keep shipping until it’s ready to launch.',
            },
            {
              t: '4) QA + Launch',
              d: 'Cross-device testing, performance checks, and deployment to your hosting (Vercel/AWS/etc).',
            },
            {
              t: '5) Support + Growth',
              d: 'Monitoring, improvements, new features, and automation expansions as your needs grow.',
            },
            {
              t: '6) Fast Chat Handoff',
              d: 'After you request a quote, jump into Telegram or Discord for immediate project discussion.',
            },
          ].map((s) => (
            <Card key={s.t} className="p-6">
              <div className="text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-white/60">{s.d}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-14 p-10 text-center md:p-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">Let&apos;s build something extraordinary.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/65">
            Tell us what you&apos;re planning, your budget, and timeline — we&apos;ll reply quickly and you can chat instantly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
            <ButtonLink href="/services" variant="secondary">Explore Services</ButtonLink>
          </div>
        </Card>
      </Container>
    </div>
  )
}
