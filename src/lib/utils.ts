import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/upnorth_tech'
export const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/RM9C4JDGJQ'

export const BRAND = {
  name: 'UpNorth Tech',
  tagline: 'Professional Website & Bot Development',
}
