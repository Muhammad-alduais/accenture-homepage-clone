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
        titleKey: 'services.erp.title',
        descriptionKey: 'services.erp.description',
        featuresKeys: [
          'services.erp.features.architecture',
          'services.erp.features.development',
          'services.erp.features.migration',
          'services.erp.features.training'
        ],
        icon: "⚙️"
      },
      {
        titleKey: 'services.industry.title',
        descriptionKey: 'services.industry.description',
        featuresKeys: [
          'services.industry.features.healthcare',
          'services.industry.features.education',
          'services.industry.features.fitness',
          'services.industry.features.logistics'
        ],
        icon: "🏭"
      },
      {
        titleKey: 'services.ai.title',
        descriptionKey: 'services.ai.description',
        featuresKeys: [
          'services.ai.features.forecasting',
          'services.ai.features.chatbots',
          'services.ai.features.ocr',
          'services.ai.features.automation'
        ],
        icon: "🤖"
      },
      {
        titleKey: 'services.ux.title',
        descriptionKey: 'services.ux.description',
        featuresKeys: [
          'services.ux.features.rtl',
          'services.ux.features.localization',
          'services.ux.features.accessibility',
          'services.ux.features.mobile'
        ],
        icon: "🎨"
      },
      {
        titleKey: 'services.migration.title',
        descriptionKey: 'services.migration.description',
        featuresKeys: [
          'services.migration.features.mapping',
          'services.migration.features.api',
          'services.migration.features.sync',
          'services.migration.features.backup'
        ],
        icon: "🔄"
      },
      {
        titleKey: 'services.support.title',
        descriptionKey: 'services.support.description',
        featuresKeys: [
          'services.support.features.updates',
          'services.support.features.tuning',
          'services.support.features.development',
          'services.support.features.monitoring'
        ],
        icon: "🛡️"
      }
    ],
    solutions: [
      {
        titleKey: 'solutions.accounting.title',
        descriptionKey: 'solutions.accounting.description',
        featuresKeys: [
          'solutions.accounting.features.ledger',
          'solutions.accounting.features.invoicing',
          'solutions.accounting.features.reporting',
          'solutions.accounting.features.compliance'
        ],
        icon: "💰"
      },
      {
        titleKey: 'solutions.hr.title',
        descriptionKey: 'solutions.hr.description',
        featuresKeys: [
          'solutions.hr.features.records',
          'solutions.hr.features.attendance',
          'solutions.hr.features.payroll',
          'solutions.hr.features.calendar'
        ],
        icon: "👥"
      },
      {
        titleKey: 'solutions.sales.title',
        descriptionKey: 'solutions.sales.description',
        featuresKeys: [
          'solutions.sales.features.leads',
          'solutions.sales.features.quotes',
          'solutions.sales.features.orders',
          'solutions.sales.features.portal'
        ],
        icon: "📈"
      },
      {
        titleKey: 'solutions.inventory.title',
        descriptionKey: 'solutions.inventory.description',
        featuresKeys: [
          'solutions.inventory.features.stock',
          'solutions.inventory.features.warehousing',
          'solutions.inventory.features.pricing',
          'solutions.inventory.features.labeling'
        ],
        icon: "📦"
      },
      {
        titleKey: 'solutions.manufacturing.title',
        descriptionKey: 'solutions.manufacturing.description',
        featuresKeys: [
          'solutions.manufacturing.features.bom',
          'solutions.manufacturing.features.orders',
          'solutions.manufacturing.features.planning',
          'solutions.manufacturing.features.quality'
        ],
        icon: "🏭"
      },
      {
        titleKey: 'solutions.assets.title',
        descriptionKey: 'solutions.assets.description',
        featuresKeys: [
          'solutions.assets.features.depreciation',
          'solutions.assets.features.maintenance',
          'solutions.assets.features.qr',
          'solutions.assets.features.alerts'
        ],
        icon: "🔧"
      }
    ],
    value: [
      {
        titleKey: 'value.ai.title',
        descriptionKey: 'value.ai.description',
        featuresKeys: [
          'value.ai.features.forecasting',
          'value.ai.features.automation',
          'value.ai.features.workflows',
          'value.ai.features.analytics'
        ],
        icon: "🧠"
      },
      {
        titleKey: 'value.speed.title',
        descriptionKey: 'value.speed.description',
        featuresKeys: [
          'value.speed.features.deployment',
          'value.speed.features.roi',
          'value.speed.features.benefits',
          'value.speed.features.methodology'
        ],
        icon: "⚡"
      },
      {
        titleKey: 'value.cultural.title',
        descriptionKey: 'value.cultural.description',
        featuresKeys: [
          'value.cultural.features.bilingual',
          'value.cultural.features.rtl',
          'value.cultural.features.compliance',
          'value.cultural.features.alignment'
        ],
        icon: "🌍"
      },
      {
        titleKey: 'value.adoption.title',
        descriptionKey: 'value.adoption.description',
        featuresKeys: [
          'value.adoption.features.design',
          'value.adoption.features.training',
          'value.adoption.features.interface',
          'value.adoption.features.support'
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
              <span className="bg-brand-primary text-white text-sm font-medium px-4 py-2 rounded-full">
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
                    ? 'bg-brand-primary text-white shadow-lg'
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
                key={item.titleKey}
                className="bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(item.titleKey)}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(item.descriptionKey)}
                </p>
                <ul className="space-y-2">
                  {item.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{t(featureKey)}</span>
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