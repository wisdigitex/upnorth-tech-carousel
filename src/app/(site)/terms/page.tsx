import { Container, Card } from '@/components/ui'

export default function TermsPage() {
  return (
    <Container className="py-14 md:py-18">
      <Card className="p-8 md:p-10">
        <h1 className="text-3xl font-extrabold">Terms of Service</h1>
        <p className="mt-4 text-white/65">
          This is a starter terms page. Replace with your final terms before launch.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-white/65">
          <li>Project scope, milestones, and payment terms are agreed before work begins.</li>
          <li>Client must provide required content/assets in a timely manner to avoid delays.</li>
          <li>Deliverables and support terms depend on the selected package or custom agreement.</li>
        </ul>
      </Card>
    </Container>
  )
}
