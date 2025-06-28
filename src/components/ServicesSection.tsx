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
        title: t('services.erp.title'),
        description: t('services.erp.description'),
        features: [
          t('services.erp.features.architecture'),
          t('services.erp.features.development'),
          t('services.erp.features.migration'),
          t('services.erp.features.training')
        ],
        icon: "⚙️"
      },
      {
        title: t('services.industry.title'),
        description: t('services.industry.description'),
        features: [
          t('services.industry.features.healthcare'),
          t('services.industry.features.education'),
          t('services.industry.features.fitness'),
          t('services.industry.features.logistics')
        ],
        icon: "🏭"
      },
      {
        title: t('services.ai.title'),
        description: t('services.ai.description'),
        features: [
          t('services.ai.features.forecasting'),
          t('services.ai.features.chatbots'),
          t('services.ai.features.ocr'),
          t('services.ai.features.automation')
        ],
        icon: "🤖"
      },
      {
        title: t('services.ux.title'),
        description: t('services.ux.description'),
        features: [
          t('services.ux.features.rtl'),
          t('services.ux.features.localization'),
          t('services.ux.features.accessibility'),
          t('services.ux.features.mobile')
        ],
        icon: "🎨"
      },
      {
        title: t('services.migration.title'),
        description: t('services.migration.description'),
        features: [
          t('services.migration.features.mapping'),
          t('services.migration.features.api'),
          t('services.migration.features.sync'),
          t('services.migration.features.backup')
        ],
        icon: "🔄"
      },
      {
        title: t('services.support.title'),
        description: t('services.support.description'),
        features: [
          t('services.support.features.updates'),
          t('services.support.features.tuning'),
          t('services.support.features.features'),
          t('services.support.features.monitoring')
        ],
        icon: "🛡️"
      }
    ],
    solutions: [
      {
        title: t('solutions.accounting.title'),
        description: t('solutions.accounting.description'),
        features: [
          t('solutions.accounting.features.ledger'),
          t('solutions.accounting.features.invoicing'),
          t('solutions.accounting.features.reporting'),
          t('solutions.accounting.features.compliance')
        ],
        icon: "💰"
      },
      {
        title: t('solutions.hr.title'),
        description: t('solutions.hr.description'),
        features: [
          t('solutions.hr.features.records'),
          t('solutions.hr.features.attendance'),
          t('solutions.hr.features.payroll'),
          t('solutions.hr.features.calendar')
        ],
        icon: "👥"
      },
      {
        title: t('solutions.sales.title'),
        description: t('solutions.sales.description'),
        features: [
          t('solutions.sales.features.leads'),
          t('solutions.sales.features.quotes'),
          t('solutions.sales.features.orders'),
          t('solutions.sales.features.portal')
        ],
        icon: "📈"
      },
      {
        title: t('solutions.inventory.title'),
        description: t('solutions.inventory.description'),
        features: [
          t('solutions.inventory.features.stock'),
          t('solutions.inventory.features.warehousing'),
          t('solutions.inventory.features.pricing'),
          t('solutions.inventory.features.labeling')
        ],
        icon: "📦"
      },
      {
        title: t('solutions.manufacturing.title'),
        description: t('solutions.manufacturing.description'),
        features: [
          t('solutions.manufacturing.features.bom'),
          t('solutions.manufacturing.features.orders'),
          t('solutions.manufacturing.features.planning'),
          t('solutions.manufacturing.features.quality')
        ],
        icon: "🏭"
      },
      {
        title: t('solutions.assets.title'),
        description: t('solutions.assets.description'),
        features: [
          t('solutions.assets.features.depreciation'),
          t('solutions.assets.features.maintenance'),
          t('solutions.assets.features.qr'),
          t('solutions.assets.features.alerts')
        ],
        icon: "🔧"
      }
    ],
    value: [
      {
        title: t('value.ai.title'),
        description: t('value.ai.description'),
        features: [
          t('value.ai.features.forecasting'),
          t('value.ai.features.automation'),
          t('value.ai.features.workflows'),
          t('value.ai.features.analytics')
        ],
        icon: "🧠"
      },
      {
        title: t('value.speed.title'),
        description: t('value.speed.description'),
        features: [
          t('value.speed.features.deployment'),
          t('value.speed.features.roi'),
          t('value.speed.features.benefits'),
          t('value.speed.features.methodology')
        ],
        icon: "⚡"
      },
      {
        title: t('value.cultural.title'),
        description: t('value.cultural.description'),
        features: [
          t('value.cultural.features.bilingual'),
          t('value.cultural.features.rtl'),
          t('value.cultural.features.compliance'),
          t('value.cultural.features.alignment')
        ],
        icon: "🌍"
      },
      {
        title: t('value.adoption.title'),
        description: t('value.adoption.description'),
        features: [
          t('value.adoption.features.design'),
          t('value.adoption.features.training'),
          t('value.adoption.features.interface'),
          t('value.adoption.features.support')
        ],
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