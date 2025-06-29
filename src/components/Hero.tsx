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

  // Get animated texts based on language
  const getAnimatedTexts = () => {
    if (isRTL) {
      // Arabic: Three action words vertically like English
      return [
        { text: 'نُبتكر', colorStart: '#4942E4', colorEnd: '#00D1B2' },
        { text: 'نُطوّر', colorStart: '#00D1B2', colorEnd: '#4942E4' },
        { text: 'نُبسّط', colorStart: '#4942E4', colorEnd: '#00D1B2' }
      ]
    } else {
      // English: "We" + three action words vertically
      return [
        { text: t('hero.title'), colorStart: '#4942E4', colorEnd: '#00D1B2' }, // "We"
        { text: t('hero.subtitle'), colorStart: '#00D1B2', colorEnd: '#4942E4' }, // "Innovate"
        { text: t('hero.tertiary'), colorStart: '#4942E4', colorEnd: '#00D1B2' }, // "Develop"
        { text: t('hero.quaternary'), colorStart: '#00D1B2', colorEnd: '#4942E4' } // "Simplify"
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
              className={`animated-text text-${index + 1} block`}
              style={{
                '--content': `'${item.text}'`,
                '--start-color': item.colorStart,
                '--end-color': item.colorEnd
              } as React.CSSProperties}
            >
              <span className="foreground">
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
          margin-bottom: 0.1em;
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

        ${isRTL ? `
        /* Arabic - Three action words vertically */
        .text-1:before {
          animation: fade-bg-ar-1 12s infinite;
        }
        .text-1 .foreground {
          animation: fade-fg-ar-1 12s infinite;
        }

        .text-2:before {
          animation: fade-bg-ar-2 12s infinite;
        }
        .text-2 .foreground {
          animation: fade-fg-ar-2 12s infinite;
        }

        .text-3:before {
          animation: fade-bg-ar-3 12s infinite;
        }
        .text-3 .foreground {
          animation: fade-fg-ar-3 12s infinite;
        }

        /* "نُبتكر" - First word */
        @keyframes fade-fg-ar-1 {
          0%, 25%, 100% { opacity: 1; }
          40%, 85% { opacity: 0; }
        }

        @keyframes fade-bg-ar-1 {
          0%, 25%, 100% { opacity: 0; }
          35%, 90% { opacity: 1; }
        }

        /* "نُطوّر" - Second word */
        @keyframes fade-fg-ar-2 {
          0%, 30% { opacity: 0; }
          40%, 60% { opacity: 1; }
          70%, 100% { opacity: 0; }
        }

        @keyframes fade-bg-ar-2 {
          0%, 35% { opacity: 1; }
          40%, 60% { opacity: 0; }
          65%, 100% { opacity: 1; }
        }

        /* "نُبسّط" - Third word */
        @keyframes fade-fg-ar-3 {
          0%, 65% { opacity: 0; }
          75%, 95% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fade-bg-ar-3 {
          0%, 70% { opacity: 1; }
          75%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        ` : `
        /* English - "We" + three action words vertically */
        .text-1:before {
          animation: fade-bg-en-1 12s infinite;
        }
        .text-1 .foreground {
          animation: fade-fg-en-1 12s infinite;
        }

        .text-2:before {
          animation: fade-bg-en-2 12s infinite;
        }
        .text-2 .foreground {
          animation: fade-fg-en-2 12s infinite;
        }

        .text-3:before {
          animation: fade-bg-en-3 12s infinite;
        }
        .text-3 .foreground {
          animation: fade-fg-en-3 12s infinite;
        }

        .text-4:before {
          animation: fade-bg-en-4 12s infinite;
        }
        .text-4 .foreground {
          animation: fade-fg-en-4 12s infinite;
        }

        /* "We" - Always visible */
        @keyframes fade-fg-en-1 {
          0%, 100% { opacity: 1; }
        }

        @keyframes fade-bg-en-1 {
          0%, 100% { opacity: 0; }
        }

        /* "Innovate" */
        @keyframes fade-fg-en-2 {
          0%, 20%, 100% { opacity: 1; }
          35%, 85% { opacity: 0; }
        }

        @keyframes fade-bg-en-2 {
          0%, 20%, 100% { opacity: 0; }
          30%, 90% { opacity: 1; }
        }

        /* "Develop" */
        @keyframes fade-fg-en-3 {
          0%, 30% { opacity: 0; }
          40%, 60% { opacity: 1; }
          70%, 100% { opacity: 0; }
        }

        @keyframes fade-bg-en-3 {
          0%, 35% { opacity: 1; }
          40%, 60% { opacity: 0; }
          65%, 100% { opacity: 1; }
        }

        /* "Simplify" */
        @keyframes fade-fg-en-4 {
          0%, 65% { opacity: 0; }
          75%, 95% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fade-bg-en-4 {
          0%, 70% { opacity: 1; }
          75%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        `}

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
          
          .animated-text {
            margin-bottom: 0.05em;
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
          .text-3 .foreground,
          .text-4:before,
          .text-4 .foreground {
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