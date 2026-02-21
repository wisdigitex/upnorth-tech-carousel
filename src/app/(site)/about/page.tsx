import Image from 'next/image'
import { Container, Card, Badge, ButtonLink } from '@/components/ui'

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-14 md:py-18">
        <div className="text-center">
          <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">About UpNorth Tech</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            We Build the <span className="text-primary-400">Future</span> of Web, Bots & Games
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/65">
            Bridging the gap between human creativity and technological efficiency with premium digital solutions that scale.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote">Work With Us</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">View Portfolio</ButtonLink>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="text-xs font-semibold text-primary-300">OUR MISSION</div>
            <h2 className="text-3xl font-extrabold">Empowering businesses through innovative web development, automation, and game systems.</h2>
            <p className="text-white/65">
              We believe that technology should be an enabler, not a barrier. Our goal is to craft digital experiences that are
              not only beautiful but also performant and automated.
            </p>
            <p className="text-white/65">
              By leveraging the latest in AI and bot frameworks, we reduce operational friction, allowing our clients to focus
              on what they do best: creating value.
            </p>
          </div>
          <Card className="overflow-hidden p-4">
            <div className="relative rounded-xl2 border border-white/10 bg-bg-900">
              <Image src="/about-visual.png" alt="Visual" width={1000} height={700} className="h-auto w-full" />
            </div>
          </Card>
        </div>

        <div className="mt-14">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Why Leading Brands Choose Us</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Expertise',
                d: 'Deep technical knowledge across web stacks, APIs, integrations, and scalable cloud architecture.',
              },
              {
                t: 'Reliability',
                d: 'A track record of 99.9% uptime and mission-critical reliability for enterprise clients.',
              },
              {
                t: 'Innovation',
                d: 'We constantly push boundaries with custom tooling, LLM agents, bots, and modern front-end frameworks.',
              },
            ].map((s) => (
              <Card key={s.t} className="p-6">
                <div className="text-lg font-semibold">{s.t}</div>
                <p className="mt-2 text-sm text-white/60">{s.d}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Our Journey</h2>
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="relative border-l border-white/10 pl-8">
              {[
                { year: '2020', title: 'The Foundation', desc: 'Started with a small team focused on custom web apps and bespoke API integrations.' },
                { year: '2022', title: 'Scale & Automation', desc: 'Launched our automation suite, helping clients reduce operational costs by up to 40%.' },
                { year: '2024', title: 'Global Expansion', desc: 'Now serving partners across 3 continents, setting the standard for digital excellence.' },
              ].map((e) => (
                <div key={e.year} className="mb-10">
                  <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-primary-500" />
                  <div className="text-sm font-semibold text-primary-300">{e.year}</div>
                  <div className="mt-1 text-lg font-semibold">{e.title}</div>
                  <div className="mt-1 text-sm text-white/60">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-primary-500/90 p-10 text-center shadow-glow md:p-14">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready to Join Our Journey?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            Whether you have a groundbreaking idea or want to streamline your operations, let&apos;s build something extraordinary together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote" className="bg-white text-bg-950 hover:bg-white/90">Start a Project</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="border-white/25 bg-white/10 text-white hover:bg-white/15">Contact Sales</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}
