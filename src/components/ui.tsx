import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

export function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 md:px-6', className)}>{children}</div>
}

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-xl2 border border-white/10 bg-card-900 shadow-soft backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  )
}

export function Badge({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70',
        className
      )}
    >
      {children}
    </span>
  )
}

export function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost'
  }
) {
  const { className, variant = 'primary', ...rest } = props
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl2 px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-400/50'
  const variants: Record<string, string> = {
    primary: 'bg-primary-500 hover:bg-primary-400 shadow-glow',
    secondary: 'bg-white/8 hover:bg-white/12 border border-white/10',
    ghost: 'hover:bg-white/6 text-white/80',
  }
  return <button className={cn(base, variants[variant], className)} {...rest} />
}

export function ButtonLink({
  href,
  children,
  className = '',
  variant = 'primary',
}: {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl2 px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary-400/50'
  const variants: Record<string, string> = {
    primary: 'bg-primary-500 hover:bg-primary-400 shadow-glow',
    secondary: 'bg-white/8 hover:bg-white/12 border border-white/10',
    ghost: 'hover:bg-white/6 text-white/80',
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}
