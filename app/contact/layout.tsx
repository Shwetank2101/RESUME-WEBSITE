import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shwetank Dixit. Send a message for project inquiries, collaborations, or just to say hello. Available via email, phone, or LinkedIn.',
  openGraph: {
    title: 'Contact | Shwetank Dixit - Software Engineer',
    description: 'Get in touch with Shwetank Dixit. Send a message for project inquiries, collaborations, or just to say hello.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


