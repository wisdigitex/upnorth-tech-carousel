import { Container, Card, ButtonLink } from '@/components/ui'

export default function NotFound() {
  return (
    <Container className="py-20">
      <Card className="p-10 text-center">
        <h1 className="text-3xl font-extrabold">Page not found</h1>
        <p className="mt-2 text-white/65">The page you are looking for doesn&apos;t exist.</p>
        <div className="mt-6">
          <ButtonLink href="/">Back Home</ButtonLink>
        </div>
      </Card>
    </Container>
  )
}
