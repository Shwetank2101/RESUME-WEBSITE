'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Resume
            </h1>
            <p className="text-text-light text-lg">
              Download or view my professional resume
            </p>
          </motion.div>

          {/* Resume Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-light rounded-xl p-6 shadow-2xl border border-primary/20"
          >
            <div className="flex justify-end mb-4">
              <a
                href="/ShwetankDixit.pdf"
                download
                className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            {isClient && (
              <div className="w-full h-[800px] rounded-lg overflow-hidden border border-primary/20">
                <iframe
                  src="/ShwetankDixit.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                />
              </div>
            )}
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Quick Contact
              </h3>
              <div className="space-y-4 text-text-light">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Gurgaon, Haryana</span>
                </div>
                <a
                  href="mailto:shwetankdixitt@gmail.com"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>shwetankdixitt@gmail.com</span>
                </a>
                <a
                  href="tel:+918178311674"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 8178311674</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shwetankdixit1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Key Skills
              </h3>
              <div className="space-y-3 text-text-light">
                <div>
                  <p className="font-semibold text-light mb-1">Programming Languages:</p>
                  <p>Java, Kotlin, Python</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Frameworks:</p>
                  <p>Spring Boot, Spring Web Flux</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">ORM:</p>
                  <p>Hibernate, Spring Data JPA</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Databases:</p>
                  <p>PostgreSQL, MongoDB, Redis</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Cloud & Tools:</p>
                  <p>AWS (EC2, S3), Apache Kafka, Git, Maven</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Others:</p>
                  <p>Data Structures & Algorithms, Design Patterns</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

