'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          {/* Founding Story */}
          <div className={`max-w-4xl mx-auto mb-20 ${isRTL ? 'text-center' : 'text-center'}`}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                {t('about.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
              variants={itemVariants}
            >
              {t('about.title')}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {t('about.titleHighlight')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              {t('about.description1')}
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {t('about.description2')}
            </motion.p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                titleKey: 'about.principles.speed.title',
                descriptionKey: 'about.principles.speed.description',
                icon: "⚡"
              },
              {
                titleKey: 'about.principles.intelligence.title',
                descriptionKey: 'about.principles.intelligence.description',
                icon: "🧠"
              },
              {
                titleKey: 'about.principles.adoption.title',
                descriptionKey: 'about.principles.adoption.description',
                icon: "👥"
              },
              {
                titleKey: 'about.principles.growth.title',
                descriptionKey: 'about.principles.growth.description',
                icon: "📈"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.titleKey}
                className={`p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ${isRTL ? 'text-center' : 'text-center'}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(principle.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(principle.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div variants={itemVariants}>
              <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.vision.title')}
              </h3>
              <p className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.vision.description')}
              </p>
              <div className="space-y-4">
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.vision.points.democratize')}</span>
                </div>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.vision.points.eliminate')}</span>
                </div>
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.vision.points.enable')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.mission.title')}
              </h3>
              <p className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('about.mission.description')}
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className={`font-bold text-gray-900 dark:text-white mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('about.mission.metrics.title')}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{t('about.mission.metrics.days')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t('about.mission.metrics.daysDesc')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{t('about.mission.metrics.process')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t('about.mission.metrics.processDesc')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{t('about.mission.metrics.user')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t('about.mission.metrics.userDesc')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Regional Emphasis */}
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.regional.title')}
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t('about.regional.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">{t('about.regional.understanding.title')}</h4>
                <p className="text-purple-100">{t('about.regional.understanding.description')}</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🗣️</div>
                <h4 className="font-bold mb-2">{t('about.regional.bilingual.title')}</h4>
                <p className="text-purple-100">{t('about.regional.bilingual.description')}</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="font-bold mb-2">{t('about.regional.standards.title')}</h4>
                <p className="text-purple-100">{t('about.regional.standards.description')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}