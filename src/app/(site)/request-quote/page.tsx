import { Suspense } from 'react'
import RequestQuoteClient from './request-quote-client'

// `useSearchParams()` requires a Suspense boundary in the App Router.
// This wrapper ensures the page can be pre-rendered on Vercel without build errors.

export default function RequestQuotePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-6 py-16 text-white/70">
          Loading…
        </div>
      }
    >
      <RequestQuoteClient />
    </Suspense>
  )
}
