'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import GridBackground from './GridBackground'

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

  // Get animated texts based on language with exact CSS colors
  const getAnimatedTexts = () => {
    if (isRTL) {
      // Arabic: Three action words vertically
      return [
        { text: 'نُبتكر', colorStart: '#7928ca', colorEnd: '#ff0080' }, // Preview gradient
        { text: 'نُطوّر', colorStart: '#007cf0', colorEnd: '#00dfd8' }, // Develop gradient
        { text: 'نُبسّط', colorStart: '#ff4d4d', colorEnd: '#f9cb28' }  // Ship gradient
      ]
    } else {
      // English: "We" + three action words vertically
      return [
        { text: t('hero.title'), colorStart: '#7928ca', colorEnd: '#ff0080' }, // "We" - Preview gradient
        { text: t('hero.subtitle'), colorStart: '#007cf0', colorEnd: '#00dfd8' }, // "Innovate" - Develop gradient
        { text: t('hero.tertiary'), colorStart: '#ff4d4d', colorEnd: '#f9cb28' }, // "Develop" - Ship gradient
        { text: t('hero.quaternary'), colorStart: '#7928ca', colorEnd: '#ff0080' } // "Simplify" - Preview gradient
      ]
    }
  }

  const animatedTexts = getAnimatedTexts()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Grid Background */}
      <GridBackground />

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
          className={`hero-title flex flex-col items-center justify-center text-center font-bold leading-tight mb-6 text-5xl md:text-7xl lg:text-8xl`}
          variants={itemVariants}
          aria-label={isRTL ? "نُبتكر. نُطوّر. نُبسّط." : "We Innovate. Develop. Simplify."}
        >
          {animatedTexts.map((item, index) => (
            <span 
              key={index}
              className={`animated-gradient-text_background animated-gradient-text_background-${index + 1} block`}
              style={{
                '--content': `'${item.text}'`,
                '--start-color': item.colorStart,
                '--end-color': item.colorEnd
              } as React.CSSProperties}
            >
              <span className={`animated-gradient-text_foreground animated-gradient-text_foreground-${index + 1}`}>
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
      </motion.div>

      {/* Custom Animated Gradient Text Styles - Exact CSS from provided code */}
      <style jsx>{`
        .hero-title {
          display: flex;
          justify-content: center;
          text-align: center;
          flex-wrap: wrap;
          font-size: 5rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -.06em;
          margin: 0 0 40px;
        }

        .animated-gradient-text_background {
          position: relative;
          display: block;
          -webkit-user-select: none;
          user-select: none;
        }

        .animated-gradient-text_background-1:before {
          animation: animated-gradient-text_fade-background-1 8s infinite;
        }

        .animated-gradient-text_foreground-1 {
          animation: animated-gradient-text_fade-foreground-1 8s infinite;
        }

        .animated-gradient-text_background-2:before {
          animation: animated-gradient-text_fade-background-2 8s infinite;
        }

        .animated-gradient-text_foreground-2 {
          animation: animated-gradient-text_fade-foreground-2 8s infinite;
        }

        .animated-gradient-text_background-3:before {
          animation: animated-gradient-text_fade-background-3 8s infinite;
        }

        .animated-gradient-text_foreground-3 {
          animation: animated-gradient-text_fade-foreground-3 8s infinite;
        }

        .animated-gradient-text_background-4:before {
          animation: animated-gradient-text_fade-background-4 8s infinite;
        }

        .animated-gradient-text_foreground-4 {
          animation: animated-gradient-text_fade-foreground-4 8s infinite;
        }

        .animated-gradient-text_foreground {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
          position: relative;
          z-index: 1;
        }

        .animated-gradient-text_background:before {
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

        .dark .animated-gradient-text_background:before {
          background: linear-gradient(180deg, #000, hsla(0,0%,0%,.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Animation keyframes - exact from provided CSS */
        @keyframes animated-gradient-text_fade-foreground-1 {
          0%, 16.667%, to {
            opacity: 1;
          }
          33.333%, 83.333% {
            opacity: 0;
          }
        }

        @keyframes animated-gradient-text_fade-background-1 {
          0%, 16.667%, to {
            opacity: 0;
          }
          25%, 91.667% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text_fade-foreground-2 {
          0%, to {
            opacity: 0;
          }
          33.333%, 50% {
            opacity: 1;
          }
          16.667%, 66.667% {
            opacity: 0;
          }
        }

        @keyframes animated-gradient-text_fade-background-2 {
          0%, to {
            opacity: 1;
          }
          33.333%, 50% {
            opacity: 0;
          }
          25%, 58.333% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text_fade-foreground-3 {
          0%, 50%, to {
            opacity: 0;
          }
          66.667%, 83.333% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text_fade-background-3 {
          0%, 58.333%, 91.667%, to {
            opacity: 1;
          }
          66.667%, 83.333% {
            opacity: 0;
          }
        }

        @keyframes animated-gradient-text_fade-foreground-4 {
          0%, 75%, to {
            opacity: 0;
          }
          83.333%, 91.667% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text_fade-background-4 {
          0%, 75%, to {
            opacity: 1;
          }
          83.333%, 91.667% {
            opacity: 0;
          }
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
          }
        }

        /* Enhanced visual effects */
        @media (prefers-reduced-motion: no-preference) {
          .animated-gradient-text_background {
            transition: transform 0.3s ease;
          }
          
          .animated-gradient-text_background:hover {
            transform: scale(1.02);
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .animated-gradient-text_background:before {
            background: currentColor;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-text_background-1:before,
          .animated-gradient-text_foreground-1,
          .animated-gradient-text_background-2:before,
          .animated-gradient-text_foreground-2,
          .animated-gradient-text_background-3:before,
          .animated-gradient-text_foreground-3,
          .animated-gradient-text_background-4:before,
          .animated-gradient-text_foreground-4 {
            animation: none;
          }
          
          .animated-gradient-text_foreground {
            opacity: 1;
          }
          
          .animated-gradient-text_background:before {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}