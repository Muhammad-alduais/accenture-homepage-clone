'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import AnimatedBackground from './AnimatedBackground'

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

  // Arabic animated text content
  const animatedTexts = isRTL ? [
    { text: 'نُبتكر.', colorStart: '#007cf0', colorEnd: '#00dfd8' },
    { text: 'نُطوّر.', colorStart: '#7928ca', colorEnd: '#ff0080' },
    { text: 'نُبسّط.', colorStart: '#ff4d4d', colorEnd: '#f9cb28' }
  ] : [
    { text: t('hero.title'), colorStart: '#007cf0', colorEnd: '#00dfd8' },
    { text: t('hero.subtitle'), colorStart: '#7928ca', colorEnd: '#ff0080' }
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Interactive Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div 
        ref={ref}
        className="relative z-20 px-4 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Custom Animated Gradient Hero Title */}
        <motion.h1 
          className={`hero-title flex justify-center text-center flex-wrap font-bold leading-tight mb-6 ${
            isRTL ? 'text-5xl md:text-7xl lg:text-8xl' : 'text-5xl md:text-7xl lg:text-8xl'
          }`}
          variants={itemVariants}
          aria-label={isRTL ? "نُبتكر. نُطوّر. نُبسّط." : `${t('hero.title')}. ${t('hero.subtitle')}.`}
        >
          {animatedTexts.map((item, index) => (
            <span 
              key={index}
              className={`animated-text text-${index + 1}`}
              style={{
                '--content': `'${item.text}'`,
                '--start-color': item.colorStart,
                '--end-color': item.colorEnd
              } as React.CSSProperties}
            >
              <span className={`foreground ${index === 1 && !isRTL ? 'mx-4' : index === 1 && isRTL ? 'mx-2' : ''}`}>
                {item.text}
              </span>
            </span>
          ))}
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

      {/* Custom Animated Gradient Text Styles */}
      <style jsx>{`
        .hero-title {
          letter-spacing: -0.06em;
          margin: 0 0 40px;
          line-height: 1.2;
          font-weight: 800;
        }

        .animated-text {
          position: relative;
          display: block;
          -webkit-user-select: none;
          user-select: none;
        }

        .animated-text:before {
          content: var(--content);
          position: absolute;
          width: 100%;
          text-align: center;
          background: linear-gradient(180deg, #fff, hsla(0,0%,100%,0.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
        }

        .dark .animated-text:before {
          background: linear-gradient(180deg, #000, hsla(0,0%,0%,0.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .foreground {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
          background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
        }

        .text-1:before {
          animation: fade-bg-1 8s infinite;
        }
        .text-1 .foreground {
          animation: fade-fg-1 8s infinite;
        }

        .text-2:before {
          animation: fade-bg-2 8s infinite;
        }
        .text-2 .foreground {
          animation: fade-fg-2 8s infinite;
        }

        .text-3:before {
          animation: fade-bg-3 8s infinite;
        }
        .text-3 .foreground {
          animation: fade-fg-3 8s infinite;
        }

        @keyframes fade-fg-1 {
          0%, 16.667%, 100% { opacity: 1; }
          33.333%, 83.333% { opacity: 0; }
        }

        @keyframes fade-bg-1 {
          0%, 16.667%, 100% { opacity: 0; }
          25%, 91.667% { opacity: 1; }
        }

        @keyframes fade-fg-2 {
          0%, 100% { opacity: 0; }
          33.333%, 50% { opacity: 1; }
          16.667%, 66.667% { opacity: 0; }
        }

        @keyframes fade-bg-2 {
          0%, 100% { opacity: 1; }
          33.333%, 50% { opacity: 0; }
          25%, 58.333% { opacity: 1; }
        }

        @keyframes fade-fg-3 {
          0%, 50%, 100% { opacity: 0; }
          66.667%, 83.333% { opacity: 1; }
        }

        @keyframes fade-bg-3 {
          0%, 58.333%, 91.667%, 100% { opacity: 1; }
          66.667%, 83.333% { opacity: 0; }
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

        /* Enhanced visual effects */
        @media (prefers-reduced-motion: no-preference) {
          .animated-text {
            transition: transform 0.3s ease;
          }
          
          .animated-text:hover {
            transform: scale(1.02);
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .animated-text:before {
            background: currentColor;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .text-1:before,
          .text-1 .foreground,
          .text-2:before,
          .text-2 .foreground,
          .text-3:before,
          .text-3 .foreground {
            animation: none;
          }
          
          .foreground {
            opacity: 1;
          }
          
          .animated-text:before {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}