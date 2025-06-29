'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TestimonialsSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const caseStudies = [
    {
      clientKey: 'testimonials.case1.client',
      industryKey: 'testimonials.case1.industry',
      challengeKey: 'testimonials.case1.challenge',
      solutionKey: 'testimonials.case1.solution',
      resultsKeys: [
        'testimonials.case1.results.timeline',
        'testimonials.case1.results.efficiency',
        'testimonials.case1.results.visibility',
        'testimonials.case1.results.processes'
      ],
      quoteKey: 'testimonials.case1.quote',
      authorKey: 'testimonials.case1.author',
      positionKey: 'testimonials.case1.position',
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metrics: {
        implementationKey: 'testimonials.case1.metrics.implementation',
        efficiencyKey: 'testimonials.case1.metrics.efficiency',
        adoptionKey: 'testimonials.case1.metrics.adoption'
      }
    },
    {
      clientKey: 'testimonials.case2.client',
      industryKey: 'testimonials.case2.industry',
      challengeKey: 'testimonials.case2.challenge',
      solutionKey: 'testimonials.case2.solution',
      resultsKeys: [
        'testimonials.case2.results.cultural',
        'testimonials.case2.results.communication',
        'testimonials.case2.results.exams',
        'testimonials.case2.results.management'
      ],
      quoteKey: 'testimonials.case2.quote',
      authorKey: 'testimonials.case2.author',
      positionKey: 'testimonials.case2.position',
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metrics: {
        implementationKey: 'testimonials.case2.metrics.implementation',
        efficiencyKey: 'testimonials.case2.metrics.efficiency',
        adoptionKey: 'testimonials.case2.metrics.adoption'
      }
    },
    {
      clientKey: 'testimonials.case3.client',
      industryKey: 'testimonials.case3.industry',
      challengeKey: 'testimonials.case3.challenge',
      solutionKey: 'testimonials.case3.solution',
      resultsKeys: [
        'testimonials.case3.results.reduction',
        'testimonials.case3.results.delivery',
        'testimonials.case3.results.maintenance',
        'testimonials.case3.results.tracking'
      ],
      quoteKey: 'testimonials.case3.quote',
      authorKey: 'testimonials.case3.author',
      positionKey: 'testimonials.case3.position',
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      metrics: {
        implementationKey: 'testimonials.case3.metrics.implementation',
        efficiencyKey: 'testimonials.case3.metrics.efficiency',
        adoptionKey: 'testimonials.case3.metrics.adoption'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900" role="region" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <header className={`text-center mb-16 ${isRTL ? 'text-center' : 'text-center'}`}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-brand-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                {t('testimonials.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              id="testimonials-heading"
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('testimonials.title')}
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                {t('testimonials.titleHighlight')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('testimonials.description')}
            </motion.p>
          </header>

          {/* Case Study Navigation */}
          <motion.nav 
            className="flex flex-wrap justify-center mb-12"
            variants={itemVariants}
            role="tablist"
            aria-label={t('testimonials.caseStudyNavigation')}
          >
            {caseStudies.map((study, index) => (
              <button
                key={study.clientKey}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 ${
                  activeCase === index
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={activeCase === index}
                aria-controls={`case-study-${index}`}
                id={`tab-${index}`}
              >
                {t(study.clientKey)}
              </button>
            ))}
          </motion.nav>

          {/* Active Case Study */}
          <motion.article 
            className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
            key={activeCase}
            role="tabpanel"
            id={`case-study-${activeCase}`}
            aria-labelledby={`tab-${activeCase}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${isRTL ? 'lg:grid-cols-2' : ''}`}>
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={caseStudies[activeCase].image}
                  alt={t(caseStudies[activeCase].clientKey)}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority={activeCase === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                  <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {t(caseStudies[activeCase].industryKey)}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t(caseStudies[activeCase].clientKey)}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('testimonials.labels.challenge')}
                  </h4>
                  <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(caseStudies[activeCase].challengeKey)}
                  </p>
                  
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('testimonials.labels.solution')}
                  </h4>
                  <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(caseStudies[activeCase].solutionKey)}
                  </p>
                  
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('testimonials.labels.results')}
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {caseStudies[activeCase].resultsKeys.map((resultKey, idx) => (
                      <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                        <span className="text-gray-700 dark:text-gray-300">{t(resultKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <blockquote className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                  <p className={`text-lg text-gray-700 dark:text-gray-300 italic mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    "{t(caseStudies[activeCase].quoteKey)}"
                  </p>
                  <footer className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <cite className="font-semibold text-gray-900 dark:text-white not-italic">
                        {t(caseStudies[activeCase].authorKey)}
                      </cite>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t(caseStudies[activeCase].positionKey)}
                      </div>
                    </div>
                  </footer>
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">
                      {t(caseStudies[activeCase].metrics.implementationKey)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('testimonials.labels.implementation')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">
                      {t(caseStudies[activeCase].metrics.efficiencyKey)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('testimonials.labels.efficiency')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">
                      {t(caseStudies[activeCase].metrics.adoptionKey)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('testimonials.labels.adoption')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}