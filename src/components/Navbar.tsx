'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { ButtonLink } from './ui'
import { DISCORD_URL, TELEGRAM_URL } from '@/lib/utils'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${active ? 'text-white' : 'text-white/70 hover:text-white'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl2 border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-flex"
          >
            Telegram
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl2 border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 md:inline-flex"
          >
            Discord
          </a>
          <ButtonLink href="/request-quote" className="px-4 py-2">Get a Quote</ButtonLink>
        </div>
      </div>

      {/* mobile */}
      <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
        <div className="flex flex-wrap gap-2">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border border-white/10 px-3 py-1 text-xs ${
                  active ? 'bg-white/10 text-white' : 'bg-white/5 text-white/70'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
