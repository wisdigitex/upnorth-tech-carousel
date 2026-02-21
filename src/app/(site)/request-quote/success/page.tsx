import { Container, Card, ButtonLink, Badge } from '@/components/ui'
import { DISCORD_URL, TELEGRAM_URL } from '@/lib/utils'

export default function SuccessPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-500/20 text-3xl">✓</div>
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Request Received!</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/65">
            Our team is reviewing your details. For a faster response, join our community channels below.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl2 bg-primary-500 px-5 py-3 text-sm font-semibold shadow-glow hover:bg-primary-400"
            >
              Open Telegram
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl2 border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
            >
              Open Discord
            </a>
          </div>

          <div className="mt-6 text-xs text-white/50">Expect an email response within 24 hours</div>
          <div className="mt-2">
            <ButtonLink href="/" variant="ghost">← Back to Homepage</ButtonLink>
          </div>
        </div>

        <Card className="mt-14 overflow-hidden">
          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
            <div>
              <Badge className="border-white/10 bg-white/5 text-white/70">Case Study</Badge>
              <h2 className="mt-3 text-2xl font-extrabold">While you wait, see how we scaled a partner&apos;s infrastructure.</h2>
              <p className="mt-2 text-white/60">Read our latest success story in automated bot deployment and cloud scaling.</p>
              <div className="mt-6">
                <ButtonLink href="/portfolio" variant="secondary">View Case Studies</ButtonLink>
              </div>
            </div>
            <div className="h-48 rounded-xl2 border border-white/10 bg-gradient-to-br from-primary-500/20 via-white/5 to-transparent md:h-auto" />
          </div>
        </Card>
      </Container>
    </div>
  )
}
