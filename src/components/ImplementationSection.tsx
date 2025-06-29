'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ImplementationSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const phases = [
    {
      phase: "01",
      titleKey: "implementation.phase1.title",
      durationKey: "implementation.phase1.duration",
      descriptionKey: "implementation.phase1.description",
      activitiesKeys: [
        "implementation.phase1.activities.mapping",
        "implementation.phase1.activities.analysis", 
        "implementation.phase1.activities.audit",
        "implementation.phase1.activities.gathering"
      ],
      deliverablesKeys: [
        "implementation.phase1.deliverables.assessment",
        "implementation.phase1.deliverables.gap",
        "implementation.phase1.deliverables.requirements",
        "implementation.phase1.deliverables.roadmap"
      ]
    },
    {
      phase: "02",
      titleKey: "implementation.phase2.title",
      durationKey: "implementation.phase2.duration",
      descriptionKey: "implementation.phase2.description",
      activitiesKeys: [
        "implementation.phase2.activities.workflow",
        "implementation.phase2.activities.ai",
        "implementation.phase2.activities.bilingual",
        "implementation.phase2.activities.security"
      ],
      deliverablesKeys: [
        "implementation.phase2.deliverables.blueprint",
        "implementation.phase2.deliverables.specifications",
        "implementation.phase2.deliverables.mockups",
        "implementation.phase2.deliverables.integration"
      ]
    },
    {
      phase: "03",
      titleKey: "implementation.phase3.title",
      durationKey: "implementation.phase3.duration",
      descriptionKey: "implementation.phase3.description",
      activitiesKeys: [
        "implementation.phase3.activities.development",
        "implementation.phase3.activities.demos",
        "implementation.phase3.activities.migration",
        "implementation.phase3.activities.testing"
      ],
      deliverablesKeys: [
        "implementation.phase3.deliverables.system",
        "implementation.phase3.deliverables.data",
        "implementation.phase3.deliverables.results",
        "implementation.phase3.deliverables.documentation"
      ]
    },
    {
      phase: "04",
      titleKey: "implementation.phase4.title",
      durationKey: "implementation.phase4.duration",
      descriptionKey: "implementation.phase4.description",
      activitiesKeys: [
        "implementation.phase4.activities.training",
        "implementation.phase4.activities.support",
        "implementation.phase4.activities.monitoring",
        "implementation.phase4.activities.resolution"
      ],
      deliverablesKeys: [
        "implementation.phase4.deliverables.users",
        "implementation.phase4.deliverables.live",
        "implementation.phase4.deliverables.support",
        "implementation.phase4.deliverables.performance"
      ]
    },
    {
      phase: "05",
      titleKey: "implementation.phase5.title",
      durationKey: "implementation.phase5.duration",
      descriptionKey: "implementation.phase5.description",
      activitiesKeys: [
        "implementation.phase5.activities.reviews",
        "implementation.phase5.activities.retuning",
        "implementation.phase5.activities.upgrades",
        "implementation.phase5.activities.optimization"
      ],
      deliverablesKeys: [
        "implementation.phase5.deliverables.reports",
        "implementation.phase5.deliverables.features",
        "implementation.phase5.deliverables.enhanced",
        "implementation.phase5.deliverables.growth"
      ]
    }
  ]

  const proofPoints = [
    {
      metric: "50%",
      descriptionKey: "implementation.proof.faster",
      detailKey: "implementation.proof.fasterDesc"
    },
    {
      metric: t('implementation.proof.zero'),
      descriptionKey: "implementation.proof.zeroDesc",
      detailKey: "implementation.proof.zeroDetail"
    },
    {
      metric: "87%+",
      descriptionKey: "implementation.proof.adoption",
      detailKey: "implementation.proof.adoptionDesc"
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
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className={`text-center mb-16 ${isRTL ? 'text-center' : 'text-center'}`}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-brand-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                {t('implementation.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('implementation.title')}
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                {t('implementation.titleHighlight')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('implementation.description')}
            </motion.p>
          </div>

          {/* Implementation Timeline */}
          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className={`absolute top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 ${isRTL ? 'right-8 md:right-1/2' : 'left-8 md:left-1/2'} transform md:-translate-x-0.5`}></div>
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isRTL ? 'flex-row-reverse' : ''}`}
                  variants={itemVariants}
                >
                  {/* Phase Number */}
                  <div className={`absolute w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg transform z-10 ${
                    isRTL ? 'right-8 md:right-1/2 md:translate-x-1/2' : 'left-8 md:left-1/2 md:-translate-x-1/2'
                  }`}>
                    {phase.phase}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    isRTL 
                      ? `mr-28 md:mr-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`
                      : `ml-28 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`
                  }`}>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                          {t(phase.titleKey)}
                        </h3>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-brand-primary dark:text-brand-accent px-3 py-1 rounded-full text-sm font-medium">
                          {t(phase.durationKey)}
                        </span>
                      </div>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t(phase.descriptionKey)}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t('testimonials.labels.activities')}:
                          </h4>
                          <ul className="space-y-1">
                            {phase.activitiesKeys.map((activityKey, idx) => (
                              <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{t(activityKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {t('testimonials.labels.deliverables')}:
                          </h4>
                          <ul className="space-y-1">
                            {phase.deliverablesKeys.map((deliverableKey, idx) => (
                              <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{t(deliverableKey)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proof Points */}
          <motion.div 
            className="bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl p-12 text-white"
            variants={itemVariants}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t('implementation.provenResults')}
              </h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {t('implementation.provenDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point.metric}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {point.metric}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {t(point.descriptionKey)}
                  </div>
                  <div className="text-blue-200">
                    {t(point.detailKey)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}