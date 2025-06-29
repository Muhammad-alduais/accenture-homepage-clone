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
        {/* Animated Gradient Hero Title */}
        <motion.h1 
          className="hero-title flex justify-center text-center flex-wrap text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          variants={itemVariants}
          aria-label={`${t('hero.title')}. ${t('hero.subtitle')}.`}
        >
          <span 
            className="animated-gradient-text-background animated-gradient-text-background-1"
            style={{
              '--content': `'${t('hero.title')}'`,
              '--padding': '0.05em',
              '--start-color': '#007cf0',
              '--end-color': '#00dfd8'
            } as React.CSSProperties}
          >
            <span className="animated-gradient-text-foreground animated-gradient-text-foreground-1">
              {t('hero.title')}
            </span>
          </span>
          <span 
            className="animated-gradient-text-background animated-gradient-text-background-2"
            style={{
              '--content': `'${t('hero.subtitle')}'`,
              '--padding': '0.05em',
              '--start-color': '#7928ca',
              '--end-color': '#ff0080'
            } as React.CSSProperties}
          >
            <span className={`${isRTL ? 'mr-4' : 'mx-4'} animated-gradient-text-foreground animated-gradient-text-foreground-2`}>
              {t('hero.subtitle')}
            </span>
          </span>
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

      {/* Animated Gradient Text Styles */}
      <style jsx>{`
        .hero-title {
          letter-spacing: -0.06em;
          margin: 0 0 40px;
        }

        .animated-gradient-text-background {
          position: relative;
          display: block;
          -webkit-user-select: none;
          user-select: none;
        }

        .animated-gradient-text-background-1:before {
          animation: fade-background-1 8s infinite;
        }

        .animated-gradient-text-foreground-1 {
          animation: fade-foreground-1 8s infinite;
        }

        .animated-gradient-text-background-2:before {
          animation: fade-background-2 8s infinite;
        }

        .animated-gradient-text-foreground-2 {
          animation: fade-foreground-2 8s infinite;
        }

        .animated-gradient-text-foreground {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
          position: relative;
          z-index: 1;
        }

        .animated-gradient-text-background:before {
          content: var(--content);
          position: absolute;
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: -10px;
          background: linear-gradient(180deg, #fff, hsla(0,0%,100%,.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
        }

        .dark .animated-gradient-text-background:before {
          background: linear-gradient(180deg, #000, hsla(0,0%,0%,.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes fade-foreground-1 {
          0%, 16.667%, 100% { opacity: 1; }
          33.333%, 83.333% { opacity: 0; }
        }

        @keyframes fade-background-1 {
          0%, 16.667%, 100% { opacity: 0; }
          25%, 91.667% { opacity: 1; }
        }

        @keyframes fade-foreground-2 {
          0%, 100% { opacity: 0; }
          33.333%, 50% { opacity: 1; }
          16.667%, 66.667% { opacity: 0; }
        }

        @keyframes fade-background-2 {
          0%, 100% { opacity: 1; }
          33.333%, 50% { opacity: 0; }
          25%, 58.333% { opacity: 1; }
        }

        /* RTL Support */
        [dir="rtl"] .hero-title {
          direction: rtl;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
            line-height: 1.1;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}