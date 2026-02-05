'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { useEffect, useState } from 'react'

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false)
  const [showLinkedInModal, setShowLinkedInModal] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showLinkedInModal) {
        setShowLinkedInModal(false)
      }
    }
    if (showLinkedInModal) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showLinkedInModal])

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
                href="/ShwetankDixit2026.pdf"
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
                  src="/ShwetankDixit2026.pdf"
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
                <button
                  onClick={() => setShowLinkedInModal(true)}
                  className="flex items-center gap-3 hover:text-primary transition-colors group w-full text-left"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </button>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Key Skills
              </h3>
              <div className="space-y-3 text-text-light">
                <div>
                  <p className="font-semibold text-light mb-1">Languages:</p>
                  <p>Java, Python, SQL</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Backend & Frameworks:</p>
                  <p>Spring Boot, Spring WebFlux, Hibernate, Spring Data JPA</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Databases:</p>
                  <p>MongoDB, PostgreSQL, Redis</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Messaging:</p>
                  <p>Apache Kafka</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Cloud & DevOps:</p>
                  <p>AWS, Git, Docker, CI/CD</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">System Design:</p>
                  <p>Problem Solving, Distributed Systems, Microservice Architecture, HLD, LLD</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Monitoring & Reliability:</p>
                  <p>Centralized Logging, Metrics, Alerts, Fault Tolerance, Retry & Idempotency</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Security:</p>
                  <p>Keycloak, OAuth2, JWT, Authentication & Authorization, Secure Token Management</p>
                </div>
                <div>
                  <p className="font-semibold text-light mb-1">Tools & Platforms:</p>
                  <p>Maven, Jira, Postman</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Modal */}
          {showLinkedInModal && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowLinkedInModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-light rounded-xl p-6 shadow-2xl border border-primary/20 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-primary">LinkedIn Profile</h3>
                  <button
                    onClick={() => setShowLinkedInModal(false)}
                    className="text-text-light hover:text-light transition-colors p-2 hover:bg-dark rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex-1 overflow-hidden rounded-lg border border-primary/20 bg-dark">
                  {/* LinkedIn Profile Preview Box */}
                  <div className="p-8 h-full min-h-[600px] flex flex-col items-center justify-center">
                    <div className="mb-8 text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-light mb-2">Shwetank Dixit</h4>
                      <p className="text-primary font-semibold text-lg mb-4">Software Engineer</p>
                      <p className="text-text-light mb-2">4+ years of experience building and scaling</p>
                      <p className="text-text-light mb-2">low-latency, fault-tolerant backend systems</p>
                      <div className="mt-6 pt-6 border-t border-primary/20">
                        <p className="text-text-light text-sm mb-4">Deutsche Telekom Digital Labs • Gurgaon, India</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">Java</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">Spring Boot</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">Microservices</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">Kafka</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end gap-4">
                  <a
                    href="https://www.linkedin.com/in/shwetankdixit1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Open in LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

