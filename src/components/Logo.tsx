import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/utils'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label={BRAND.name}>
      <Image src="/logo.svg" alt="UpNorth Tech logo" width={34} height={34} priority />
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">{BRAND.name}</div>
        <div className="text-[11px] text-white/60">Web • Bots • Automation</div>
      </div>
    </Link>
  )
}
