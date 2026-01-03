import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-9xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-light">
            Page Not Found
          </h2>
          <p className="text-text-light text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Go back home
          </Link>
        </div>
      </main>
    </div>
  )
}

