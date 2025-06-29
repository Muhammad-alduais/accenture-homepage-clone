'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function IndustriesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const industries = [
    {
      titleKey: 'industries.education.title',
      descriptionKey: 'industries.education.description',
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featuresKeys: [
        'industries.education.features.student',
        'industries.education.features.academic',
        'industries.education.features.parent',
        'industries.education.features.fee'
      ],
      clientTypesKeys: [
        'industries.education.clients.schools',
        'industries.education.clients.universities',
        'industries.education.clients.training',
        'industries.education.clients.online'
      ]
    },
    {
      titleKey: 'industries.logistics.title',
      descriptionKey: 'industries.logistics.description',
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featuresKeys: [
        'industries.logistics.features.fleet',
        'industries.logistics.features.route',
        'industries.logistics.features.inventory',
        'industries.logistics.features.customs'
      ],
      clientTypesKeys: [
        'industries.logistics.clients.shipping',
        'industries.logistics.clients.3pl',
        'industries.logistics.clients.distribution',
        'industries.logistics.clients.freight'
      ]
    },
    {
      titleKey: 'industries.retail.title',
      descriptionKey: 'industries.retail.description',
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featuresKeys: [
        'industries.retail.features.pos',
        'industries.retail.features.sync',
        'industries.retail.features.loyalty',
        'industries.retail.features.multichannel'
      ],
      clientTypesKeys: [
        'industries.retail.clients.chains',
        'industries.retail.clients.online',
        'industries.retail.clients.fashion',
        'industries.retail.clients.electronics'
      ]
    },
    {
      titleKey: 'industries.manufacturing.title',
      descriptionKey: 'industries.manufacturing.description',
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featuresKeys: [
        'industries.manufacturing.features.planning',
        'industries.manufacturing.features.quality',
        'industries.manufacturing.features.supply',
        'industries.manufacturing.features.maintenance'
      ],
      clientTypesKeys: [
        'industries.manufacturing.clients.manufacturers',
        'industries.manufacturing.clients.assembly',
        'industries.manufacturing.clients.food',
        'industries.manufacturing.clients.textile'
      ]
    }
  ]

  const targetClients = [
    {
      titleKey: 'industries.startups.title',
      descriptionKey: 'industries.startups.description',
      icon: "🚀",
      benefitsKeys: [
        'industries.startups.benefits.implementation',
        'industries.startups.benefits.scalable',
        'industries.startups.benefits.cost',
        'industries.startups.benefits.growth'
      ]
    },
    {
      titleKey: 'industries.smes.title',
      descriptionKey: 'industries.smes.description',
      icon: "🏢",
      benefitsKeys: [
        'industries.smes.benefits.featured',
        'industries.smes.benefits.customization',
        'industries.smes.benefits.integration',
        'industries.smes.benefits.support'
      ]
    },
    {
      titleKey: 'industries.enterprises.title',
      descriptionKey: 'industries.enterprises.description',
      icon: "🏭",
      benefitsKeys: [
        'industries.enterprises.benefits.analytics',
        'industries.enterprises.benefits.multi',
        'industries.enterprises.benefits.compliance',
        'industries.enterprises.benefits.support247'
      ]
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
    <section className="py-24 bg-gray-50 dark:bg-gray-900" role="region" aria-labelledby="industries-heading">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <header className={`text-center mb-16 ${isRTL ? 'text-center' : 'text-center'}`}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                {t('industries.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              id="industries-heading"
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('industries.title')}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('industries.description')}
            </motion.p>
          </header>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.titleKey}
                className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={t(industry.titleKey)}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(industry.titleKey)}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(industry.descriptionKey)}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.featuresKeys.map((featureKey, idx) => (
                        <div key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" aria-hidden="true"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{t(featureKey)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>Client Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clientTypesKeys.map((typeKey, idx) => (
                        <span key={idx} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs">
                          {t(typeKey)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Target Clients */}
          <header className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('industries.clientSize.title')}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('industries.clientSize.description')}
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetClients.map((client, index) => (
              <motion.article
                key={client.titleKey}
                className="bg-white dark:bg-black rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4" aria-hidden="true">{client.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(client.titleKey)}
                </h4>
                <p className={`text-gray-600 dark:text-gray-300 mb-6 ${isRTL ? 'text-center' : 'text-center'}`}>
                  {t(client.descriptionKey)}
                </p>
                <ul className="space-y-2">
                  {client.benefitsKeys.map((benefitKey, idx) => (
                    <li key={idx} className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" aria-hidden="true"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}