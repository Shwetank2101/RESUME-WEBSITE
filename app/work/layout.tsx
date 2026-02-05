import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work & Experience',
  description: 'Explore Shwetank Dixit\'s professional work experience, projects, and tech stack. 4+ years building payment gateways, identity management systems, and enterprise platforms at Deutsche Telekom and Rapipay.',
  openGraph: {
    title: 'Work & Experience | Shwetank Dixit - Software Engineer',
    description: 'Explore Shwetank Dixit\'s professional work experience, projects, and tech stack.',
  },
  alternates: {
    canonical: '/work',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

