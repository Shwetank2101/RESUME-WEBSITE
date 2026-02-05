import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download or view Shwetank Dixit\'s professional resume. Software Engineer with 4+ years of experience in Java, Spring Boot, Microservices, Kafka, and AWS. Specialized in building scalable backend systems.',
  openGraph: {
    title: 'Resume | Shwetank Dixit - Software Engineer',
    description: 'Download or view Shwetank Dixit\'s professional resume. Software Engineer with 4+ years of experience.',
  },
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


