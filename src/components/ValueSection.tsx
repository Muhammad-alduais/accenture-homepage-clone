'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRight, Zap, Brain, Globe, Users } from 'lucide-react'

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const valueProps = [
    {
      icon: Brain,
      titleKey: 'value.ai.title',
      descriptionKey: 'value.ai.description',
      color: 'from-huly-blue-500 to-huly-blue-700',
      features: [
        'value.ai.features.forecasting',
        'value.ai.features.automation',
        'value.ai.features.workflows',
        'value.ai.features.analytics'
      ]
    },
    {
      icon: Zap,
      titleKey: 'value.speed.title',
      descriptionKey: 'value.speed.description',
      color: 'from-huly-purple-500 to-huly-purple-700',
      features: [
        'value.speed.features.deployment',
        'value.speed.features.roi',
        'value.speed.features.benefits',
        'value.speed.features.methodology'
      ]
    },
    {
      icon: Globe,
      titleKey: 'value.cultural.title',
      descriptionKey: 'value.cultural.description',
      color: 'from-emerald-500 to-emerald-700',
      features: [
        'value.cultural.features.bilingual',
        'value.cultural.features.rtl',
        'value.cultural.features.compliance',
        'value.cultural.features.alignment'
      ]
    },
    {
      icon: Users,
      titleKey: 'value.adoption.title',
      descriptionKey: 'value.adoption.description',
      color: 'from-orange-500 to-orange-700',
      features: [
        'value.adoption.features.design',
        'value.adoption.features.training',
        'value.adoption.features.interface',
        'value.adoption.features.support'
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-huly-blue-400/10 to-huly-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-huly-purple-400/10 to-huly-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
              variants={itemVariants}
            >
              <span className="text-sm font-medium">360° VALUE</span>
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              <span className="block text-foreground mb-2">
                {t('value.subtitle')}
              </span>
              <span className="block text-gradient">
                {t('value.subtitleHighlight')}
              </span>
            </motion.h2>
            
            <motion.button 
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 mx-auto shadow-huly-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('value.cta')}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.titleKey}
                className="card-hover bg-card border border-border rounded-2xl p-8 relative overflow-hidden group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.color} flex items-center justify-center mb-6 relative z-10`}>
                  <prop.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold text-card-foreground mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(prop.titleKey)}
                  </h3>
                  <p className={`text-muted-foreground mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(prop.descriptionKey)}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {prop.features.map((featureKey, idx) => (
                      <li key={idx} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prop.color}`} />
                        <span className="text-card-foreground text-sm font-medium">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderImage: `linear-gradient(135deg, ${prop.color.split(' ')[1]}, ${prop.color.split(' ')[3]}) 1`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}