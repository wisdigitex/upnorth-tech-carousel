import { DISCORD_URL, TELEGRAM_URL } from '@/lib/utils'
import { MessageCircle, MessagesSquare } from 'lucide-react'

export function FloatingChat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-850/80 px-4 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur hover:bg-bg-850"
      >
        <MessageCircle className="h-5 w-5 text-primary-400" />
        <span>Telegram</span>
      </a>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg-850/80 px-4 py-3 text-sm font-semibold text-white shadow-soft backdrop-blur hover:bg-bg-850"
      >
        <MessagesSquare className="h-5 w-5 text-primary-400" />
        <span>Discord</span>
      </a>
    </div>
  )
}
