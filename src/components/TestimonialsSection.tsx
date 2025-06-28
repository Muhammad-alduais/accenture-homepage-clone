'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
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
      client: "HealthPlus Clinics",
      industry: "Healthcare",
      challenge: "Managing multiple clinic locations with disparate systems for HR, accounting, and inventory",
      solution: "Integrated ERP with bilingual dashboards and real-time reporting across all locations",
      results: [
        "60-day implementation timeline",
        "40% improvement in operational efficiency",
        "Real-time visibility across all clinics",
        "Streamlined HR and payroll processes"
      ],
      quote: "MovinWare transformed our operations completely. The bilingual interface was crucial for our diverse team, and the real-time dashboards give us visibility we never had before.",
      author: "Dr. Sarah Al-Mahmoud",
      position: "Chief Operations Officer",
      image: "https://ext.same-assets.com/2900598000/4049787973.jpeg",
      metrics: {
        implementation: "60 days",
        efficiency: "+40%",
        adoption: "92%"
      }
    },
    {
      client: "EduTrack School Group",
      industry: "Education",
      challenge: "Complex student information management across multiple schools with Arabic/English requirements",
      solution: "Comprehensive student information system with exam management, parent portal, and cultural alignment",
      results: [
        "Culturally aligned solution with Hijri calendar",
        "Improved parent-school communication",
        "Streamlined exam and grading processes",
        "Enhanced student data management"
      ],
      quote: "The cultural understanding MovinWare brought to our project was exceptional. The system works exactly how our schools operate, not the other way around.",
      author: "Ahmed Al-Rashid",
      position: "IT Director",
      image: "https://ext.same-assets.com/2900598000/36195040.jpeg",
      metrics: {
        implementation: "45 days",
        efficiency: "+35%",
        adoption: "89%"
      }
    },
    {
      client: "LogixPro Logistics",
      industry: "Logistics",
      challenge: "Inefficient fleet management and route planning leading to high operational costs",
      solution: "AI-powered fleet optimization with predictive analytics and route planning",
      results: [
        "30% reduction in operational overhead",
        "Improved delivery times and customer satisfaction",
        "Predictive maintenance for fleet vehicles",
        "Real-time tracking and optimization"
      ],
      quote: "The AI-powered route optimization has been a game-changer. We're saving thousands monthly while improving our service quality.",
      author: "Khalid Al-Mansouri",
      position: "Operations Manager",
      image: "https://ext.same-assets.com/2900598000/1611683462.jpeg",
      metrics: {
        implementation: "75 days",
        efficiency: "+30%",
        adoption: "95%"
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
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
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
                {t('testimonials.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('testimonials.title')}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {t('testimonials.titleHighlight')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('testimonials.description')}
            </motion.p>
          </div>

          {/* Case Study Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12"
            variants={itemVariants}
          >
            {caseStudies.map((study, index) => (
              <button
                key={study.client}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {study.client}
              </button>
            ))}
          </motion.div>

          {/* Active Case Study */}
          <motion.div 
            className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-xl"
            variants={itemVariants}
            key={activeCase}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${isRTL ? 'lg:grid-cols-2' : ''}`}>
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {caseStudies[activeCase].industry}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {caseStudies[activeCase].client}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>Challenge</h4>
                  <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {caseStudies[activeCase].challenge}
                  </p>
                  
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>Solution</h4>
                  <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {caseStudies[activeCase].solution}
                  </p>
                  
                  <h4 className={`text-lg font-semibold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>Results</h4>
                  <ul className="space-y-2 mb-8">
                    {caseStudies[activeCase].results.map((result, idx) => (
                      <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                  <blockquote className={`text-lg text-gray-700 dark:text-gray-300 italic mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    "{caseStudies[activeCase].quote}"
                  </blockquote>
                  <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {caseStudies[activeCase].author}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {caseStudies[activeCase].position}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudies[activeCase].metrics.implementation}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Implementation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudies[activeCase].metrics.efficiency}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency Gain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {caseStudies[activeCase].metrics.adoption}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">User Adoption</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}