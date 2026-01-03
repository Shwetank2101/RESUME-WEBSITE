'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Something went wrong!
          </h1>
          <p className="text-text-light text-lg mb-8">
            {error.message || 'An unexpected error occurred'}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try again
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

