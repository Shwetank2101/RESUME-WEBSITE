'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-dark">
      {/* Animated background gradient */}
      {isMounted && (
        <div
          className="fixed inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Floating particles */}
      {isMounted && typeof window !== 'undefined' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>
      )}

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Shwetank Dixit
              </h1>

              <p className="text-2xl sm:text-3xl text-text-light mb-8">
                Software Engineer
              </p>

              <p className="text-lg sm:text-xl text-text-light mb-12 max-w-2xl mx-auto">
                Building innovative solutions with cutting-edge technology
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/resume"
                  className="px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/50"
                >
                  View Resume
                </Link>
                <Link
                  href="/work"
                  className="px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary/10 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore My Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Projects', value: '4+' },
                { label: 'Technologies', value: '14+' },
                { label: 'Experience', value: '3+ Years' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-dark-light p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

