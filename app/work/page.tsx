'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { useState } from 'react'

export const dynamic = 'force-dynamic'

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Professional projects with detailed information
  const projects = [
    {
      id: 1,
      title: 'Payment Gateway System',
      description: 'Developed internal payment gateway which receives nearly Rs 70 lakhs of transactions daily on average. Integrated payment modes such as UPI Intent, UPI Collect, Wallet, E-Collect and CASA. Worked on reducing the occurrence of failed transactions from 6% to 0.002% in the first quarter. Automated the reconciliation process by releasing the funds of users in real time.',
      tech: ['Java', 'Kotlin', 'Spring Web Flux', 'REST APIs', 'MongoDB', 'Kafka'],
      category: 'web',
      company: 'Rapipay Fintech',
      year: '2022-2024',
      link: '#',
      achievements: ['Rs 70 lakh daily transactions', 'Reduced failures from 6% to 0.002%', 'Real-time reconciliation', 'Multiple payment modes'],
    },
    {
      id: 2,
      title: 'Identity Management System',
      description: 'Created an Identity management system which works as an authorization server for banking application. 80 thousand users have been registered using the system with an average of 22 thousand daily logins. Implemented robust alerting mechanisms for login failures and registrations failures. Used Keycloak for managing user session and identity and implemented industry standards encryptions and hashing for security.',
      tech: ['Kotlin', 'Spring Web Flux', 'REST APIs', 'Keycloak', 'PostgreSQL', 'Redis'],
      category: 'web',
      company: 'Rapipay Fintech',
      year: '2022-2024',
      link: '#',
      achievements: ['80K+ registered users', '22K daily logins', 'Industry-standard security', 'Multiple SDK support'],
    },
    {
      id: 3,
      title: 'Internal Users Application',
      description: 'Created a system for internal users with custom role-based authorizations. This service powers refunds, message tracking, transaction tracking, audit logs dashboard and other efficient user tracking within the application. Integrated Microsoft single sign-On (SSO) as authentication server for smooth login.',
      tech: ['Kotlin', 'Spring Web Flux', 'Azure AD', 'Spring Security', 'REST APIs', 'PostgreSQL'],
      category: 'web',
      company: 'Rapipay Fintech',
      year: '2022-2024',
      link: '#',
      achievements: ['Role-based authorization', 'Microsoft SSO integration', 'Audit logs dashboard', 'Transaction tracking'],
    },
    {
      id: 4,
      title: 'Credit Card Management System',
      description: 'Built backend services for credit card management in the T-Life app, handling spending, saving, rewards, and billing data for 40 million credit card customers. Implemented scalable microservices architecture for high availability and performance.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Kafka', 'AWS'],
      category: 'web',
      company: 'Deutsche Telekom',
      year: '2024',
      link: '#',
      achievements: ['40M+ customers served', 'Microservices architecture', 'Real-time data processing', 'High availability'],
    },
  ]

  const companies = [
    {
      name: 'Deutsche Telekom Digital Labs',
      role: 'Software Engineer',
      period: 'June 2024 - Present',
      location: 'Gurgaon, Haryana',
      description: 'Building backend services for credit card management in the T-Life app, handling spending, saving, rewards, and billing data for 40 million credit card customers.',
      achievements: [
        'Serving 40M+ credit card customers',
        'Backend services for T-Life app',
        'Credit card management system',
        'Real-time data processing',
      ],
    },
    {
      name: 'Rapipay Fintech Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Mar 2022 – June 2024',
      location: 'Noida',
      description: 'Designed and developed Payment Gateway System providing various payment methods to end users, enhancing system reliability using Kafka queues for supporting nearly Rs 70 lakh of transactions daily. Collaborated with key vendors like Paytm, PhonePe, Yes Bank and Cashfree. Worked on Identity Management System for banking application with Keycloak, enforcing advanced security measures for user onboarding with more than 80 thousand users.',
      achievements: [
        'Rs 70 lakh daily transactions',
        '80K+ registered users',
        'Reduced failed transactions from 6% to 0.002%',
        'Microservices architecture implementation',
      ],
    },
    {
      name: 'Rapipay Fintech Pvt. Ltd.',
      role: 'Product Engineering Intern',
      period: 'Sep 2021 - Mar 2022',
      location: 'Noida',
      description: 'Implemented Java Spring Boot APIs with PostgreSQL and MongoDB databases, using Hibernate JDBC for data processing. Utilized AWS services for application deployment and management, with working knowledge in Grafana, Prometheus, and JMeter for application performance monitoring and load testing.',
      achievements: [
        'Spring Boot API development',
        'AWS deployment and management',
        'Performance monitoring setup',
        'Database optimization',
      ],
    },
  ]

  const techStack = [
    { name: 'Java', level: 95, category: 'Language', years: '4+' },
    { name: 'Kotlin', level: 90, category: 'Language', years: '3+' },
    { name: 'Python', level: 85, category: 'Language', years: '3+' },
    { name: 'Spring Boot', level: 95, category: 'Framework', years: '4+' },
    { name: 'Spring Web Flux', level: 88, category: 'Framework', years: '3+' },
    { name: 'Hibernate', level: 90, category: 'ORM', years: '4+' },
    { name: 'Spring Data JPA', level: 92, category: 'ORM', years: '4+' },
    { name: 'PostgreSQL', level: 90, category: 'Database', years: '4+' },
    { name: 'MongoDB', level: 88, category: 'Database', years: '4+' },
    { name: 'Redis', level: 85, category: 'Cache', years: '3+' },
    { name: 'Apache Kafka', level: 90, category: 'Messaging', years: '3+' },
    { name: 'AWS (EC2, S3)', level: 85, category: 'Cloud', years: '3+' },
    { name: 'Keycloak', level: 85, category: 'Security', years: '2+' },
    { name: 'Git', level: 95, category: 'Version Control', years: '4+' },
  ]

  const categories = ['all', 'web']

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />

      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              My Work & Experience
            </h1>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              A showcase of my projects, companies I&apos;ve worked with, and
              technologies I master
            </p>
          </motion.div>

          {/* Companies Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-primary">Companies</h2>
            <div className="space-y-6">
              {companies.map((company, i) => (
                <motion.div
                  key={i}
                  className="bg-dark-light p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.01, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-1 text-light">
                        {company.name}
                      </h3>
                      <p className="text-primary font-medium text-lg mb-2">
                        {company.role}
                      </p>
                      <p className="text-text-light text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {company.location}
                      </p>
                    </div>
                    <span className="text-primary font-semibold text-sm bg-primary/10 px-4 py-2 rounded-lg">
                      {company.period}
                    </span>
                  </div>
                  <p className="text-text-light mb-4 leading-relaxed">
                    {company.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {company.achievements.map((achievement, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-text-light text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  className="bg-dark-light p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-light group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-text-light">{tech.category}</p>
                        <span className="text-xs text-primary/70">•</span>
                        <p className="text-xs text-primary/70">{tech.years} years</p>
                      </div>
                    </div>
                    <span className="text-primary font-bold text-lg">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-dark rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary">Projects</h2>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === cat
                        ? 'bg-primary text-white'
                        : 'bg-dark-light text-text-light hover:bg-dark-light/80'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="bg-dark-light p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer flex flex-col"
                  whileHover={{ scale: 1.03, y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {project.company}
                    </span>
                    <span className="text-xs text-text-light">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-light">
                    {project.title}
                  </h3>
                  <p className="text-text-light mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  {project.achievements && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.achievements.map((achievement, j) => (
                          <span
                            key={j}
                            className="text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

