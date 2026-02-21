import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/'
export const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.com/'

export const BRAND = {
  name: 'UpNorth Tech',
  tagline: 'Professional Website & Bot Development',
}
