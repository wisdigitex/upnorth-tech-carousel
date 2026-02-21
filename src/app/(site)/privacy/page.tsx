import { Container, Card } from '@/components/ui'

export default function PrivacyPage() {
  return (
    <Container className="py-14 md:py-18">
      <Card className="p-8 md:p-10">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mt-4 text-white/65">
          This is a starter privacy policy page. Replace this with your final legal text before going live.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-white/65">
          <li>We collect information you submit via forms (name, email, project details) to respond to your request.</li>
          <li>We do not sell your information.</li>
          <li>We may store emails and messages for support and record keeping.</li>
        </ul>
      </Card>
    </Container>
  )
}
