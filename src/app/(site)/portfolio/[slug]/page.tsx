import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Container, Card, Badge, ButtonLink } from '@/components/ui'
import { projects } from '@/content/portfolio'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="py-12 md:py-16">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span className="text-primary-300">Portfolio</span>
          <span>•</span>
          <span>{project.title}</span>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <Badge className="border-primary-400/30 bg-primary-500/10 text-primary-200">{project.heroLabel}</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-white/65">{project.subtitle}</p>
          </div>
          <ButtonLink href="/request-quote">Start a Similar Project</ButtonLink>
        </div>

        <Card className="mt-8 overflow-hidden">
          <div className="relative h-72 md:h-[420px]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-950/75 via-bg-950/10 to-transparent" />
          </div>
        </Card>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold">Project Overview</h2>
              <p className="mt-2 text-white/65">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">The Challenge</h2>
              <p className="mt-2 text-white/65">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold">The Solution</h2>
              <p className="mt-2 text-white/65">{project.solution}</p>
            </section>
          </div>

          <Card className="p-6">
            <div className="text-sm text-white/60">Client</div>
            <div className="mt-1 font-semibold">UpNorth Tech Partner</div>

            <div className="mt-5 text-sm text-white/60">Timeline</div>
            <div className="mt-1 font-semibold">{project.timeline}</div>

            <div className="mt-5 text-sm text-white/60">Tools</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold">Measurable Impact</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-4">
            {project.metrics.map((m) => (
              <Card key={m.label} className="p-6">
                <div className="text-2xl font-extrabold text-primary-300">{m.value}</div>
                <div className="mt-1 text-sm text-white/60">{m.label}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold">Visual Gallery</h2>
          <p className="mt-2 text-white/60">A quick look at key screens, systems, and UI components.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {project.galleryImages.map((src) => (
              <Card key={src} className="overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-14 p-10 text-center md:p-12">
          <h3 className="text-3xl font-extrabold md:text-4xl">Ready for a similar project?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/65">Let&apos;s build something extraordinary together.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
            <ButtonLink href="/services" variant="secondary">View Services</ButtonLink>
          </div>
        </Card>
      </Container>
    </div>
  )
}
