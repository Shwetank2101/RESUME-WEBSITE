import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shwetank Dixit - Portfolio & Resume',
  description: 'Software Engineer Portfolio and Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body { 
              background-color: #0f172a !important; 
              color: #f8fafc !important; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              min-height: 100vh;
            }
            .bg-dark { background-color: #0f172a !important; }
            .bg-dark-light { background-color: #1e293b !important; }
            .text-light { color: #f8fafc !important; }
            .text-primary { color: #6366f1 !important; }
            .text-text-light { color: #64748b !important; }
            .min-h-screen { min-height: 100vh !important; }
            .fixed { position: fixed; }
            .relative { position: relative; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .justify-between { justify-content: space-between; }
            .gap-4 { gap: 1rem; }
            .gap-8 { gap: 2rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .mb-2 { margin-bottom: 0.5rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-12 { margin-bottom: 3rem; }
            .text-xl { font-size: 1.25rem; }
            .text-2xl { font-size: 1.5rem; }
            .text-4xl { font-size: 2.25rem; }
            .text-6xl { font-size: 3.75rem; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .rounded-lg { border-radius: 0.5rem; }
            .rounded-xl { border-radius: 0.75rem; }
            .border { border-width: 1px; }
            .border-primary { border-color: #6366f1; }
            .bg-primary { background-color: #6366f1 !important; }
            .hover\\:bg-primary-dark:hover { background-color: #4f46e5 !important; }
            .hover\\:text-primary:hover { color: #6366f1 !important; }
            nav { top: 0; left: 0; right: 0; z-index: 50; background-color: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(99, 102, 241, 0.2); }
            nav a { text-decoration: none; }
            main { padding-top: 5rem; }
            a { color: inherit; text-decoration: none; }
            .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
            .from-primary { --tw-gradient-from: #6366f1; }
            .via-secondary { --tw-gradient-to: #ec4899; }
            .to-accent { --tw-gradient-to: #f59e0b; }
            .bg-clip-text { -webkit-background-clip: text; background-clip: text; }
            .text-transparent { color: transparent; }
            @media (min-width: 640px) {
              .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
              .sm\\:text-3xl { font-size: 1.875rem; }
              .sm\\:text-7xl { font-size: 4.5rem; }
              .sm\\:flex-row { flex-direction: row; }
            }
            @media (min-width: 1024px) {
              .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
              .lg\\:text-8xl { font-size: 6rem; }
            }
            @media (min-width: 768px) {
              .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
          `
        }} />
      </head>
      <body className="bg-dark text-light">{children}</body>
    </html>
  )
}

