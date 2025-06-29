'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ValueSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const { t, isRTL } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: "radial-gradient(circle, #4942E4 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Animated Gradient Title */}
          <motion.h2 
            className="value-title flex justify-center text-center flex-wrap text-6xl md:text-8xl font-bold mb-8"
            variants={titleVariants}
            aria-label={t('value.title')}
          >
            <span 
              className="animated-gradient-text-background animated-gradient-text-background-3"
              style={{
                '--content': `'${t('value.title')}'`,
                '--padding': '0.05em',
                '--start-color': '#4942E4',
                '--end-color': '#00D1B2'
              } as React.CSSProperties}
            >
              <span className="animated-gradient-text-foreground animated-gradient-text-foreground-3">
                {t('value.title')}
              </span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-700 dark:text-white max-w-4xl mx-auto leading-relaxed mb-12"
            variants={subtitleVariants}
          >
            {t('value.subtitle')}
            <br />
            <motion.span
              className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {t('value.subtitleHighlight')}
            </motion.span>
          </motion.p>
          
          <motion.button 
            className={`bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center mx-auto group ${isRTL ? 'flex-row-reverse' : ''}`}
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(73, 66, 228, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: isRTL ? 5 : -5 }}
              transition={{ duration: 0.3 }}
            >
              {t('value.cta')}
            </motion.span>
            <motion.svg 
              className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: isRTL ? -5 : 5 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Value Section Animated Gradient Text Styles */}
      <style jsx>{`
        .value-title {
          letter-spacing: -0.06em;
          margin: 0 0 40px;
        }

        .animated-gradient-text-background {
          position: relative;
          display: block;
          -webkit-user-select: none;
          user-select: none;
        }

        .animated-gradient-text-background-3:before {
          animation: fade-background-3 8s infinite;
        }

        .animated-gradient-text-foreground-3 {
          animation: fade-foreground-3 8s infinite;
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

        @keyframes fade-foreground-3 {
          0%, 50%, 100% { opacity: 0; }
          66.667%, 83.333% { opacity: 1; }
        }

        @keyframes fade-background-3 {
          0%, 58.333%, 91.667%, 100% { opacity: 1; }
          66.667%, 83.333% { opacity: 0; }
        }

        /* RTL Support */
        [dir="rtl"] .value-title {
          direction: rtl;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .value-title {
            font-size: 4rem;
            line-height: 1.1;
          }
        }

        @media (max-width: 480px) {
          .value-title {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  )
}