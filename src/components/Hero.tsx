'use client'

import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BlackHole from './BlackHole'

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Black Hole Animation Background */}
      <BlackHole />

      {/* Video Background with Animation (reduced opacity to show black hole) */}
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-30"
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
          <source src="https://ext.same-assets.com/2900598000/2585685094.mp4" type="video/mp4" />
        </video>
        <motion.div 
          className="absolute inset-0 bg-white/60 dark:bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        ref={ref}
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8"
          variants={itemVariants}
        >
          AI-Powered ERP.
          <br />
          <motion.span 
            className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Designed for Your Workflow.
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-700 dark:text-white mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Streamline operations, boost efficiency, and future-proof your business with intelligent automation, 
          adaptive workflows, and seamless transformation designed for the modern enterprise.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center space-x-4"
          variants={buttonVariants}
        >
          <motion.button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.button>
          <motion.button 
            className="border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-lg font-medium transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Play button for video */}
      <motion.button 
        className="absolute bottom-8 left-8 bg-white/20 dark:bg-white/20 hover:bg-white/30 dark:hover:bg-white/30 rounded-full p-4 transition-all duration-300 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        whileHover={{ 
          scale: 1.1,
          backgroundColor: "rgba(255, 255, 255, 0.3)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Play className="w-6 h-6 text-gray-900 dark:text-white" />
      </motion.button>
    </section>
  )
}