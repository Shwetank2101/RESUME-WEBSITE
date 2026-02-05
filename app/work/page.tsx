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
      description: 'Designed and developed a high-performance Payment Gateway handling ₹70 lakh daily transactions on average, supporting multiple payment methods. Implemented Kafka-based asynchronous processing to achieve fault tolerance, scalability, and reliable message delivery. Integrated major payment partners including Paytm, PhonePe, Yes Bank, and Cashfree. Reduced transaction failure rate from 6% to 0.002% within one quarter by improving retry strategies, idempotency handling, and payment flow optimization.',
      tech: ['Java', 'Spring Web Flux', 'REST APIs', 'MongoDB', 'Kafka'],
      category: 'web',
      company: 'Rapipay Fintech',
      year: '2021-2024',
      link: '#',
      achievements: ['₹70 lakh daily transactions', 'Reduced failures from 6% to 0.002%', 'Automated real-time reconciliation', 'Multiple payment partners'],
    },
    {
      id: 2,
      title: 'Identity Management System',
      description: 'Designed and built an Identity Management System using Spring WebFlux and Keycloak, serving as a centralized authorization server for banking applications. Scaled the identity platform to 1.8 lakh registered users with ~80,000 daily active users, implementing encryption, hashing, secure token management, and session handling.',
      tech: ['Spring Web Flux', 'REST APIs', 'Keycloak', 'PostgreSQL', 'Redis'],
      category: 'web',
      company: 'Rapipay Fintech',
      year: '2021-2024',
      link: '#',
      achievements: ['1.8 lakh registered users', '~80K daily active users', 'Industry-standard security', 'Centralized authorization server'],
    },
    {
      id: 3,
      title: 'Enterprise Product Catalog (EPC)',
      description: 'Built and enhanced a large-scale Enterprise Product Catalog platform using microservices and event-driven architecture to manage product offerings, pricing, promotions, and quotes. Developed catalog, pricing, and management services using Spring Boot, supporting versioning, locking, snapshot, and revert workflows for enterprise-grade consistency.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'Event-Driven Architecture'],
      category: 'web',
      company: 'Deutsche Telekom',
      year: '2024-Present',
      link: '#',
      achievements: ['Large-scale EPC platform', 'Event-driven architecture', 'Versioning and snapshot workflows', 'Kafka-based event propagation'],
    },
    {
      id: 4,
      title: 'T-Life App Backend Services',
      description: 'Designed and developed backend services for the T-Life (T-Mobile) application, enabling broadband management and performance diagnostics by integrating multiple downstream systems. Built performance diagnostic workflows with strong observability, enabling faster issue detection and resolution for broadband customers.',
      tech: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Kafka', 'AWS'],
      category: 'web',
      company: 'Deutsche Telekom',
      year: '2024-Present',
      link: '#',
      achievements: ['Broadband management', 'Performance diagnostics', 'Strong observability', 'Multiple downstream integrations'],
    },
  ]

  const companies = [
    {
      name: 'Deutsche Telekom Digital Labs',
      role: 'Software Engineer',
      period: 'June 2024 - Present',
      location: 'Gurgaon, India',
      description: 'Designed and developed backend services for the T-Life (T-Mobile) application, enabling broadband management and performance diagnostics by integrating multiple downstream systems. Built and enhanced a large-scale Enterprise Product Catalog (EPC) platform using microservices and event-driven architecture to manage product offerings, pricing, promotions, and quotes.',
      achievements: [
        'Enterprise Product Catalog (EPC) platform',
        'T-Life app backend services',
        'Kafka-based event propagation',
        'Performance diagnostic workflows',
        'Award: Future Maker of the Quarter – Q2 2025',
      ],
    },
    {
      name: 'Rapipay Fintech Pvt. Ltd.',
      role: 'Software Engineer II',
      period: 'Sep 2021 – Jun 2024',
      location: 'Noida, India',
      description: 'Designed and developed a high-performance Payment Gateway handling ₹70 lakh daily transactions on average, supporting multiple payment methods. Implemented Kafka-based asynchronous processing to achieve fault tolerance, scalability, and reliable message delivery. Integrated major payment partners including Paytm, PhonePe, Yes Bank, and Cashfree. Designed and built an Identity Management System using Spring WebFlux and Keycloak, serving as a centralized authorization server for banking applications.',
      achievements: [
        '₹70 lakh daily transactions',
        '1.8 lakh registered users, ~80K daily active users',
        'Reduced failed transactions from 6% to 0.002%',
        'Automated real-time reconciliation and fund release',
        'Identity Management System with Keycloak',
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
    { name: 'Python', level: 85, category: 'Language', years: '4+' },
    { name: 'SQL', level: 90, category: 'Language', years: '4+' },
    { name: 'Spring Boot', level: 95, category: 'Framework', years: '4+' },
    { name: 'Spring Web Flux', level: 88, category: 'Framework', years: '4+' },
    { name: 'Hibernate', level: 90, category: 'ORM', years: '4+' },
    { name: 'Spring Data JPA', level: 92, category: 'ORM', years: '4+' },
    { name: 'PostgreSQL', level: 90, category: 'Database', years: '4+' },
    { name: 'MongoDB', level: 88, category: 'Database', years: '4+' },
    { name: 'Redis', level: 85, category: 'Cache', years: '4+' },
    { name: 'Apache Kafka', level: 90, category: 'Messaging', years: '4+' },
    { name: 'AWS', level: 85, category: 'Cloud', years: '4+' },
    { name: 'Docker', level: 80, category: 'DevOps', years: '3+' },
    { name: 'CI/CD', level: 80, category: 'DevOps', years: '3+' },
    { name: 'Keycloak', level: 85, category: 'Security', years: '3+' },
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

          {/* Awards & Achievements Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Awards & Achievements
            </h2>
            <div className="bg-dark-light p-8 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-light mb-2">
                    Future Maker of the Quarter – Q2 2025
                  </h3>
                  <p className="text-text-light">
                    Recognized at Deutsche Telekom Digital Labs for demonstrating exceptional ownership, leadership skills, and driving measurable team impact.
                  </p>
                </div>
              </div>
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

