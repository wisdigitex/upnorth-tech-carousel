import '../globals.css'
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingChat } from '@/components/FloatingChat'

export const metadata: Metadata = {
  title: 'UpNorth Tech — Websites, Bots & Game Development',
  description:
    'UpNorth Tech builds high-performance websites, Telegram/Discord bots, automation systems, and Roblox/FiveM game experiences. Request a quote and chat instantly.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  )
}
