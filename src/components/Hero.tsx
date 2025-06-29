'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import BlackHole from './BlackHole'

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
      {/* Black Hole Animation Background */}
      <BlackHole />

      {/* Video Background with Animation */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" type="video/mp4" />
        </video>
        <motion.div 
          className="absolute inset-0 bg-white/40 dark:bg-black/50"
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
        >
          {t('hero.description')}
        </motion.p>

        {/* Key Benefits - Increased z-index to ensure visibility */}
        <motion.div 
          className="relative z-30 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2 arabic-numbers">50%</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.implementation')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2 arabic-numbers">87%</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.adoption')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-700 dark:text-gray-300">{t('hero.metrics.support')}</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}