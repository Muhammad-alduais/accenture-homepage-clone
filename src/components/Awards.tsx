'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Awards() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const achievements = [
    {
      color: "bg-red-600",
      title: "Speed-to-Value Champion",
      description: "Delivering 50% faster ERP implementations than traditional approaches.",
      details: "Our agile methodology and AI-first design enable rapid deployment while maintaining high quality standards and ensuring business value from day one.",
      link: "#"
    },
    {
      color: "bg-purple-700",
      title: "User Adoption Excellence",
      description: "Achieving 87%+ user adoption rates within 90 days of go-live.",
      details: "Through adoption-first design principles and comprehensive training programs, we ensure your team embraces the new system and maximizes its potential.",
      link: "#"
    },
    {
      color: "bg-blue-600",
      title: "Regional Innovation Leader",
      description: "Pioneering bilingual ERP solutions with true Arabic/English parity.",
      details: "Our deep understanding of regional requirements combined with global standards delivers culturally-aligned solutions that respect local business practices.",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white text-center mb-4"
            variants={titleVariants}
          >
            Why choose
          </motion.h2>
          <motion.h3 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white text-center mb-16"
            variants={titleVariants}
          >
            <motion.span
              className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              MovinWare?
            </motion.span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.title} 
                className={`${achievement.color} rounded-lg p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between cursor-pointer`}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Geometric pattern overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <motion.circle 
                      cx="200" cy="200" r="150" stroke="white" strokeWidth="1" fill="none"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.circle 
                      cx="100" cy="100" r="50" stroke="white" strokeWidth="1" fill="none"
                      animate={{ scale: [1, 0.9, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.circle 
                      cx="300" cy="300" r="80" stroke="white" strokeWidth="1" fill="none"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.rect 
                      x="50" y="250" width="100" height="100" stroke="white" strokeWidth="1" fill="none"
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.rect 
                      x="250" y="50" width="120" height="120" stroke="white" strokeWidth="1" fill="none"
                      animate={{ rotate: [0, -90, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>

                <motion.div 
                  className="relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                >
                  <motion.h4 
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {achievement.title}
                  </motion.h4>
                  <motion.p 
                    className="text-lg text-white mb-6 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                  >
                    {achievement.description}
                  </motion.p>
                  <motion.p 
                    className="text-white text-sm leading-relaxed opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
                  >
                    {achievement.details}
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="relative z-10 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1.1, duration: 0.6 }}
                >
                  <motion.button 
                    className="text-white hover:text-gray-200 font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Learn more
                    <motion.svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}