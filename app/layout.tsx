import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shwetankdixit.in'),
  title: {
    default: 'Shwetank Dixit - Software Engineer | Portfolio & Resume',
    template: '%s | Shwetank Dixit',
  },
  description: 'Software Engineer with 4+ years of experience building scalable backend systems. Specialized in Java, Spring Boot, Microservices, Kafka, and AWS. View my portfolio, resume, and work experience.',
  keywords: [
    'Shwetank Dixit',
    'Software Engineer',
    'Backend Developer',
    'Java Developer',
    'Spring Boot',
    'Microservices',
    'Kafka',
    'AWS',
    'Portfolio',
    'Resume',
    'Full Stack Developer',
    'Deutsche Telekom',
    'Rapipay',
  ],
  authors: [{ name: 'Shwetank Dixit' }],
  creator: 'Shwetank Dixit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Shwetank Dixit - Portfolio',
    title: 'Shwetank Dixit - Software Engineer | Portfolio & Resume',
    description: 'Software Engineer with 4+ years of experience building scalable backend systems. Specialized in Java, Spring Boot, Microservices, Kafka, and AWS.',
    images: [
      {
        url: '/og-image.png', // You can add this later
        width: 1200,
        height: 630,
        alt: 'Shwetank Dixit - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shwetank Dixit - Software Engineer | Portfolio & Resume',
    description: 'Software Engineer with 4+ years of experience building scalable backend systems.',
    creator: '@shwetankdixit', // Update with your Twitter handle if you have one
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
  },
}

// Structured Data (JSON-LD) for Person Schema
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shwetank Dixit',
  jobTitle: 'Software Engineer',
  description: 'Software Engineer with 4+ years of experience building scalable backend systems',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shwetankdixit.in',
  email: 'shwetankdixitt@gmail.com',
  telephone: '+91-8178311674',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/shwetankdixit1/',
    // Add other social profiles here
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Your University', // Update with your university name
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Deutsche Telekom Digital Labs',
      jobTitle: 'Software Engineer',
      startDate: '2024-06',
    },
    {
      '@type': 'Organization',
      name: 'Rapipay Fintech Pvt. Ltd.',
      jobTitle: 'Software Engineer II',
      startDate: '2021-09',
      endDate: '2024-06',
    },
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'Microservices',
    'Apache Kafka',
    'AWS',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'CI/CD',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
