'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      title: "ERP Implementation & Core Configuration",
      description: "Complete ERP deployment with industry-specific customizations and seamless data migration.",
      features: ["System architecture design", "Custom module development", "Data migration", "User training"],
      icon: "⚙️"
    },
    {
      title: "Industry-Specific Module Development",
      description: "Tailored solutions for clinics, schools, gyms, logistics, and other specialized industries.",
      features: ["Healthcare management", "Education systems", "Fitness club operations", "Logistics optimization"],
      icon: "🏭"
    },
    {
      title: "AI Automation Enhancements",
      description: "Built-in intelligence that transforms your operations with predictive capabilities.",
      features: ["Smart forecasting", "ERP-integrated chatbots", "Advanced OCR", "Workflow automation"],
      icon: "🤖"
    },
    {
      title: "UX/UI Bilingual Enhancement",
      description: "RTL-compliant, culturally-aligned interfaces with true Arabic/English parity.",
      features: ["RTL interface design", "Cultural localization", "Accessibility compliance", "Mobile optimization"],
      icon: "🎨"
    },
    {
      title: "Legacy Data Migration & Integrations",
      description: "Seamless transition from legacy systems with comprehensive third-party integrations.",
      features: ["Data mapping & validation", "API integrations", "System synchronization", "Backup & recovery"],
      icon: "🔄"
    },
    {
      title: "Continuous Lifecycle Support",
      description: "Ongoing optimization, updates, and performance monitoring for sustained success.",
      features: ["Regular updates", "Performance tuning", "New feature development", "24/7 monitoring"],
      icon: "🛡️"
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
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                Our Services
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Comprehensive ERP Solutions
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              From initial implementation to ongoing optimization, we provide end-to-end services that ensure your ERP investment delivers maximum value.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button 
                  className="mt-6 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}