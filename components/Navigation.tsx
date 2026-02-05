'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, themes } from '@/contexts/ThemeContext'
import { useState, useEffect } from 'react'

function NavigationContent() {
  const pathname = usePathname()
  const { currentTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: `${currentTheme.colors.dark}CC`,
          borderBottomColor: `${currentTheme.colors.primary}33`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              SD
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/20 rounded-lg"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? 'text-primary' : 'text-text-light hover:text-light'}`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-light hover:text-light transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-dark-light border-l border-primary/20 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20">
                  <span className="text-xl font-bold text-primary">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-text-light hover:text-light transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.href
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                              isActive
                                ? 'bg-primary/20 text-primary font-semibold'
                                : 'text-text-light hover:text-light hover:bg-dark'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </nav>

                {/* Footer in Mobile Menu */}
                <div className="p-6 border-t border-primary/20">
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://www.linkedin.com/in/shwetankdixit1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-light hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="mailto:shwetankdixitt@gmail.com"
                      className="flex items-center gap-3 text-text-light hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Navigation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return default styling during SSR/hydration
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-dark/80 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              SD
            </Link>
            <div className="hidden md:flex gap-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/resume', label: 'Resume' },
                { href: '/work', label: 'Work' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors text-text-light hover:text-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="md:hidden w-10 h-10" /> {/* Spacer for mobile menu button */}
          </div>
        </div>
      </nav>
    )
  }

  return <NavigationContent />
}
