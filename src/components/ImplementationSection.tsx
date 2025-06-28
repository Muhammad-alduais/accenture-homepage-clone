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
      title: "Deep Discovery",
      duration: "1-2 Weeks",
      description: "Comprehensive analysis of your current processes, pain points, and system requirements",
      activities: ["Process Mapping", "Pain Point Analysis", "System Audit", "Requirements Gathering"],
      deliverables: ["Current State Assessment", "Gap Analysis Report", "Technical Requirements", "Project Roadmap"]
    },
    {
      phase: "02",
      title: "Smart Blueprinting",
      duration: "2-3 Weeks",
      description: "Design optimal workflows with AI readiness and bilingual planning considerations",
      activities: ["Workflow Design", "AI Integration Planning", "Bilingual Interface Design", "Security Architecture"],
      deliverables: ["System Blueprint", "Technical Specifications", "UI/UX Mockups", "Integration Plan"]
    },
    {
      phase: "03",
      title: "Agile Build",
      duration: "4-8 Weeks",
      description: "Iterative development with weekly demos, continuous testing, and data migration",
      activities: ["Module Development", "Weekly Demos", "Data Migration", "Integration Testing"],
      deliverables: ["Working System", "Migrated Data", "Test Results", "User Documentation"]
    },
    {
      phase: "04",
      title: "Launch",
      duration: "1-2 Weeks",
      description: "Role-based training, go-live support, and immediate optimization",
      activities: ["User Training", "Go-Live Support", "Performance Monitoring", "Issue Resolution"],
      deliverables: ["Trained Users", "Live System", "Support Documentation", "Performance Report"]
    },
    {
      phase: "05",
      title: "Evolution",
      duration: "Ongoing",
      description: "Continuous improvement with quarterly reviews, AI tuning, and feature upgrades",
      activities: ["Quarterly Reviews", "AI Retuning", "Feature Upgrades", "Performance Optimization"],
      deliverables: ["Optimization Reports", "New Features", "Enhanced Performance", "Growth Roadmap"]
    }
  ]

  const proofPoints = [
    {
      metric: "50%",
      description: "Faster than traditional ERP rollouts",
      detail: "Our agile methodology delivers results in weeks, not months"
    },
    {
      metric: "Zero",
      description: "Downtime transitions",
      detail: "Seamless migration with continuous business operations"
    },
    {
      metric: "87%+",
      description: "User adoption within 90 days",
      detail: "Adoption-first design ensures team engagement from day one"
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
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                {t('implementation.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('implementation.title')}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
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
            <div className={`absolute top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 ${isRTL ? 'right-8 md:right-1/2' : 'left-8 md:left-1/2'} transform md:-translate-x-0.5`}></div>
            
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
                  <div className={`absolute w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg transform z-10 ${
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
                          {phase.title}
                        </h3>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      
                      <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {phase.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>Activities:</h4>
                          <ul className="space-y-1">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>Deliverables:</h4>
                          <ul className="space-y-1">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700 dark:text-gray-300">{deliverable}</span>
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
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-white"
            variants={itemVariants}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t('implementation.provenResults')}
              </h3>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
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
                    {point.description}
                  </div>
                  <div className="text-purple-200">
                    {point.detail}
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