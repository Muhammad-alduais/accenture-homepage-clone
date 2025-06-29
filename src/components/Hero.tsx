'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-huly-blue-400/20 to-huly-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-huly-purple-400/20 to-huly-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      {/* Content */}
      <motion.div 
        ref={ref}
        className="relative z-20 px-4 max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
          variants={itemVariants}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered ERP Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
          variants={itemVariants}
        >
          <span className="block text-foreground">
            {isRTL ? 'نُبتكر. نُطوّر.' : 'We Innovate.'}
          </span>
          <span className="block text-gradient-blue">
            {isRTL ? 'نُبسّط.' : 'We Develop.'}
          </span>
          <span className="block text-gradient-purple">
            {isRTL ? '' : 'We Simplify.'}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
          variants={itemVariants}
        >
          <motion.button
            className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-huly-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="btn-ghost px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 border border-border"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50%</div>
            <div className="text-muted-foreground">{t('hero.metrics.implementation')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">87%</div>
            <div className="text-muted-foreground">{t('hero.metrics.adoption')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">{t('hero.metrics.support')}</div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-huly-blue-400 to-huly-blue-600 rounded-2xl opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-huly-purple-400 to-huly-purple-600 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}