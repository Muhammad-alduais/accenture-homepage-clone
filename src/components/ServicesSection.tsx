'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('services')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const tabs = [
    { id: 'services', label: t('services.tabs.services'), icon: '⚙️' },
    { id: 'solutions', label: t('services.tabs.solutions'), icon: '🏢' },
    { id: 'value', label: t('services.tabs.value'), icon: '⭐' }
  ]

  const content = {
    services: [
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
    ],
    solutions: [
      {
        title: "Accounting & Finance",
        description: "Complete financial management with local compliance including Zakat and VAT.",
        features: ["General Ledger", "Invoicing & Billing", "Financial Reporting", "Zakat/VAT Compliance"],
        icon: "💰"
      },
      {
        title: "HR & Payroll",
        description: "Comprehensive human resource management with bilingual support.",
        features: ["Employee Records", "Attendance Tracking", "Payroll Processing", "Hijri/Gregorian Sync"],
        icon: "👥"
      },
      {
        title: "Sales & CRM",
        description: "End-to-end sales and customer relationship management.",
        features: ["Lead Management", "Quote Generation", "Order Processing", "Customer Portal"],
        icon: "📈"
      },
      {
        title: "Inventory & Procurement",
        description: "Complete inventory control with Arabic labeling support.",
        features: ["Stock Management", "Warehousing", "Dynamic Pricing", "Arabic Labeling"],
        icon: "📦"
      },
      {
        title: "Manufacturing",
        description: "Production planning and quality control systems.",
        features: ["Bill of Materials", "Work Orders", "Production Planning", "Quality Inspections"],
        icon: "🏭"
      },
      {
        title: "Asset Management",
        description: "Asset lifecycle and predictive maintenance management.",
        features: ["Asset Depreciation", "Maintenance Scheduling", "QR Code Tags", "Predictive Alerts"],
        icon: "🔧"
      }
    ],
    value: [
      {
        title: "AI by Design",
        description: "Built-in automation, predictive analytics, and smart workflows that adapt to your business.",
        features: ["Predictive forecasting", "Intelligent automation", "Adaptive workflows", "Smart analytics"],
        icon: "🧠"
      },
      {
        title: "Speed-to-Value",
        description: "50% faster implementation with business value from day one.",
        features: ["Rapid deployment", "Quick ROI", "Immediate benefits", "Agile methodology"],
        icon: "⚡"
      },
      {
        title: "Cultural & Language Parity",
        description: "True Arabic/English parity with full RTL support and local compliance.",
        features: ["Bilingual interface", "RTL support", "Local compliance", "Cultural alignment"],
        icon: "🌍"
      },
      {
        title: "User Adoption Excellence",
        description: "87%+ user adoption rates through adoption-first design principles.",
        features: ["Intuitive design", "Comprehensive training", "User-friendly interface", "Ongoing support"],
        icon: "👍"
      }
    ]
  }

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
                {t('services.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('services.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('services.description')}
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12"
            variants={itemVariants}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            key={activeTab}
          >
            {content[activeTab as keyof typeof content].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {item.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}