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

  // Get animated texts based on language with different color combinations
  const getAnimatedTexts = () => {
    if (isRTL) {
      // Arabic: Three action words vertically
      return [
        { text: 'نُبتكر', startColor: '#4942E4', endColor: '#00D1B2' }, // Primary to Accent
        { text: 'نُطوّر', startColor: '#ff4d4d', endColor: '#f9cb28' }, // Red to Yellow
        { text: 'نُبسّط', startColor: '#007cf0', endColor: '#00dfd8' }  // Blue to Cyan
      ]
    } else {
      // English: "We" + three action words vertically
      return [
        { text: t('hero.title'), startColor: '#4942E4', endColor: '#00D1B2' }, // "We" - Primary to Accent
        { text: t('hero.subtitle'), startColor: '#7928ca', endColor: '#ff0080' }, // "Innovate" - Purple to Pink
        { text: t('hero.tertiary'), startColor: '#ff4d4d', endColor: '#f9cb28' }, // "Develop" - Red to Yellow
        { text: t('hero.quaternary'), startColor: '#007cf0', endColor: '#00dfd8' } // "Simplify" - Blue to Cyan
      ]
    }
  }

  const animatedTexts = getAnimatedTexts()

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Animated Background */}
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
          className="hero-title flex flex-col items-center justify-center text-center font-bold leading-tight mb-6"
          variants={itemVariants}
          aria-label={isRTL ? "نُبتكر. نُطوّر. نُبسّط." : "We Innovate. Develop. Simplify."}
        >
          {animatedTexts.map((item, index) => (
            <span 
              key={index}
              className={`animated-gradient-text-background animated-gradient-text-background-${index + 1} block`}
              style={{
                '--content': `'${item.text}'`,
                '--start-color': item.startColor,
                '--end-color': item.endColor
              } as React.CSSProperties}
            >
              <span className={`animated-gradient-text-foreground animated-gradient-text-foreground-${index + 1}`}>
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

        {/* CTA Button */}
        <motion.button 
          className="hero-gradient-button bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.querySelector('#contact')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          {t('value.cta')}
        </motion.button>
      </motion.div>

      {/* Custom Animated Gradient Text Styles - Exact Implementation */}
      <style jsx>{`
        .hero-title {
          display: flex;
          justify-content: center;
          text-align: center;
          flex-wrap: wrap;
          font-size: 5rem;
          line-height: 1;
          font-weight: 800;
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
          animation: animated-gradient-text-fade-background-1 8s infinite;
        }

        .animated-gradient-text-foreground-1 {
          animation: animated-gradient-text-fade-foreground-1 8s infinite;
        }

        .animated-gradient-text-background-2:before {
          animation: animated-gradient-text-fade-background-2 8s infinite;
        }

        .animated-gradient-text-foreground-2 {
          animation: animated-gradient-text-fade-foreground-2 8s infinite;
        }

        .animated-gradient-text-background-3:before {
          animation: animated-gradient-text-fade-background-3 8s infinite;
        }

        .animated-gradient-text-foreground-3 {
          animation: animated-gradient-text-fade-foreground-3 8s infinite;
        }

        .animated-gradient-text-background-4:before {
          animation: animated-gradient-text-fade-background-4 8s infinite;
        }

        .animated-gradient-text-foreground-4 {
          animation: animated-gradient-text-fade-foreground-4 8s infinite;
        }

        .stop-hero-animation .animated-gradient-text-background,
        .stop-hero-animation .animated-gradient-text-background:before,
        .stop-hero-animation .animated-gradient-text-foreground {
          animation: none!important;
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
          background: linear-gradient(180deg, #fff, hsla(0,0%,100%,0.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 0;
        }

        .dark .animated-gradient-text-background:before {
          background: linear-gradient(180deg, #000, hsla(0,0%,0%,0.75));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Animation Keyframes - First Word */
        @keyframes animated-gradient-text-fade-foreground-1 {
          0%, 16.667%, 100% {
            opacity: 1;
          }
          33.333%, 83.333% {
            opacity: 0;
          }
        }

        @keyframes animated-gradient-text-fade-background-1 {
          0%, 16.667%, 100% {
            opacity: 0;
          }
          25%, 91.667% {
            opacity: 1;
          }
        }

        /* Animation Keyframes - Second Word */
        @keyframes animated-gradient-text-fade-foreground-2 {
          0%, 100% {
            opacity: 0;
          }
          33.333%, 50% {
            opacity: 1;
          }
          16.667%, 66.667% {
            opacity: 0;
          }
        }

        @keyframes animated-gradient-text-fade-background-2 {
          0%, 100% {
            opacity: 1;
          }
          33.333%, 50% {
            opacity: 0;
          }
          25%, 58.333% {
            opacity: 1;
          }
        }

        /* Animation Keyframes - Third Word */
        @keyframes animated-gradient-text-fade-foreground-3 {
          0%, 50%, 100% {
            opacity: 0;
          }
          66.667%, 83.333% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text-fade-background-3 {
          0%, 58.333%, 91.667%, 100% {
            opacity: 1;
          }
          66.667%, 83.333% {
            opacity: 0;
          }
        }

        /* Animation Keyframes - Fourth Word (for English) */
        @keyframes animated-gradient-text-fade-foreground-4 {
          0%, 75%, 100% {
            opacity: 0;
          }
          83.333%, 91.667% {
            opacity: 1;
          }
        }

        @keyframes animated-gradient-text-fade-background-4 {
          0%, 75%, 100% {
            opacity: 1;
          }
          83.333%, 91.667% {
            opacity: 0;
          }
        }

        /* Button Styles */
        .hero-gradient-button {
          background-color: var(--brand-primary);
          background-clip: padding-box;
          border: 1px solid transparent;
          box-shadow: 0 4px 4px 0 #00000010;
          color: white;
          transition-property: color, background-color, box-shadow;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        .hero-gradient-button:hover {
          box-shadow: 0 4px 4px 0 #00000040;
        }

        .hero-gradient-button[data-hover] {
          --lighten-color: transparent;
          color: white;
          background-color: transparent!important;
        }

        .hero-gradient-button[data-active] {
          --lighten-color: hsla(0,0%,100%,0.5);
        }

        .hero-gradient-button[data-focus] {
          box-shadow: 0 0 0 1px var(--brand-primary), 0 0 0 3px var(--brand-accent);
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
          .animated-gradient-text-background {
            transition: transform 0.3s ease;
          }
          
          .animated-gradient-text-background:hover {
            transform: scale(1.02);
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .animated-gradient-text-background:before {
            background: currentColor;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-text-background-1:before,
          .animated-gradient-text-foreground-1,
          .animated-gradient-text-background-2:before,
          .animated-gradient-text-foreground-2,
          .animated-gradient-text-background-3:before,
          .animated-gradient-text-foreground-3,
          .animated-gradient-text-background-4:before,
          .animated-gradient-text-foreground-4 {
            animation: none;
          }
          
          .animated-gradient-text-foreground {
            opacity: 1;
          }
          
          .animated-gradient-text-background:before {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}