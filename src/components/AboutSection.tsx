'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Founding Story */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                Our Story
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8"
              variants={itemVariants}
            >
              Born from Frustration,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Built for Success
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              MovinWare was conceived in 2025 by veteran ERP consultants who were frustrated by the industry's persistent challenges: "Forever Implementations," rigid systems that couldn't adapt, ineffective AI that promised much but delivered little, and widespread user abandonment that left businesses worse off than before.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              This frustration inspired a new paradigm based on four core principles that guide everything we do.
            </motion.p>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: "Speed-to-Value",
                description: "Deliver measurable business impact from day one, not months later",
                icon: "⚡"
              },
              {
                title: "Adaptive Intelligence",
                description: "AI that learns and evolves with your business needs",
                icon: "🧠"
              },
              {
                title: "Adoption by Design",
                description: "User-first interfaces that teams actually want to use",
                icon: "👥"
              },
              {
                title: "Growth Partnership",
                description: "Success measured by your business growth, not our deployment",
                icon: "📈"
              }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Make intelligent business operations accessible to every organization, regardless of size or complexity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Democratize enterprise-grade ERP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Eliminate technology barriers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Enable global competitiveness</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Replace ERP frustration with fluid digital transformation through tailored solutions, built-in AI automation, and adoption-first design.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Success Metrics</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">Days</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">to Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">Process</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">User</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Adoption</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Regional Emphasis */}
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Local Roots, Global Outlook
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We combine deep regional understanding with global standards, delivering bilingual solutions that respect local business practices while enabling international growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-bold mb-2">Regional Understanding</h4>
                <p className="text-purple-100">Deep knowledge of MENA business culture and requirements</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🗣️</div>
                <h4 className="font-bold mb-2">Bilingual Delivery</h4>
                <p className="text-purple-100">True Arabic/English parity with full RTL support</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="font-bold mb-2">Global Standards</h4>
                <p className="text-purple-100">International best practices and compliance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}