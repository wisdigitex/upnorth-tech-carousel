import Link from 'next/link'
import { Logo } from './Logo'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-950">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-white/60">
              Premium digital studio building next‑generation websites, bots, and automation systems.
            </p>
            <p className="text-xs text-white/40">© {new Date().getFullYear()} UpNorth Tech. All rights reserved.</p>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold">Services</div>
            <ul className="space-y-2 text-sm text-white/65">
              <li><Link href="/services#website" className="hover:text-white">Website Development</Link></li>
              <li><Link href="/services#bots" className="hover:text-white">Bot Development</Link></li>
              <li><Link href="/services" className="hover:text-white">Automation & Integrations</Link></li>
              <li><Link href="/request-quote" className="hover:text-white">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold">Company</div>
            <ul className="space-y-2 text-sm text-white/65">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-white">Process</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-sm font-semibold">Legal</div>
            <ul className="space-y-2 text-sm text-white/65">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
