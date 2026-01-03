'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-primary">
              Something went wrong!
            </h1>
            <p className="text-text-light text-lg mb-8">
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={reset}
              className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

