'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import DynamicGradientBackground from './DynamicGradientBackground'

export default function Hero() {
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
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Dynamic Gradient Background */}
      <DynamicGradientBackground />

      {/* Video Background with Animation */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-15 z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://ext.same-assets.com/2900598000/2585685094.mp4" type="video/mp4" />
        </video>
        <motion.div 
          className="absolute inset-0 bg-white/30 dark:bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        ref={ref}
        className="relative z-20 px-4 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          variants={itemVariants}
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {t('hero.title')}
          <br />
          <motion.span 
            className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
          }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          variants={itemVariants}
        >
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('hero.cta.primary')}</span>
            <motion.svg 
              className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: isRTL ? -3 : 3 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </motion.svg>
          </motion.button>

          <motion.button
            className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta.secondary')}
          </motion.button>
        </motion.div>

        {/* Key Benefits - Increased z-index to ensure visibility */}
        <motion.div 
          className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-lg p-6 border border-white/20"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2 arabic-numbers">50%</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.implementation')}</div>
          </motion.div>
          
          <motion.div 
            className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-lg p-6 border border-white/20"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2 arabic-numbers">87%</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.adoption')}</div>
          </motion.div>
          
          <motion.div 
            className="text-center backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-lg p-6 border border-white/20"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.support')}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}