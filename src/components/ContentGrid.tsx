'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContentGrid() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const content = [
    {
      type: "CASE STUDY",
      title: "HealthPlus Clinics: Complete Digital Transformation",
      description: "Streamlined HR, accounting, and inventory management with bilingual dashboards deployed in under 60 days. Achieved improved efficiency and real-time visibility across all operations.",
      image: "https://ext.same-assets.com/2900598000/4049787973.jpeg",
      link: "#"
    },
    {
      type: "SUCCESS STORY",
      title: "EduTrack School Group: Culturally-Aligned ERP Solution",
      description: "Implemented comprehensive student information system with exam management and parent portal. Delivered culturally aligned solution with Arabic/English parity and Hijri calendar support.",
      image: "https://ext.same-assets.com/2900598000/36195040.jpeg",
      link: "#"
    },
    {
      type: "CASE STUDY",
      title: "LogixPro Logistics: AI-Powered Fleet Optimization",
      description: "Optimized fleet management and route planning with predictive analytics. Reduced operational overhead by 30% and improved delivery times through intelligent automation.",
      image: "https://ext.same-assets.com/2900598000/1611683462.jpeg",
      link: "#"
    },
    {
      type: "SOLUTION BRIEF",
      title: "AI by Design: Built-in Automation for Modern Business",
      description: "Discover how MovinWare's AI-first approach delivers predictive analytics, smart workflows, and adaptive chatbots that learn and evolve with your business needs.",
      image: "https://ext.same-assets.com/2900598000/3804182897.png",
      link: "#"
    },
    {
      type: "WHITEPAPER",
      title: "The Future of ERP: Speed-to-Value in Digital Transformation",
      description: "Learn how modern ERP implementations can achieve 50% faster deployment times while maintaining 87%+ user adoption rates through adoption-first design principles.",
      image: "https://ext.same-assets.com/2900598000/3993689749.jpeg",
      link: "#"
    },
    {
      type: "INDUSTRY INSIGHT",
      title: "Bilingual ERP: Breaking Language Barriers in Business",
      description: "Explore how true Arabic/English parity with full RTL support and local compliance features transforms user experience and operational efficiency in the MENA region.",
      image: "https://ext.same-assets.com/2900598000/177288228.jpeg",
      link: "#"
    },
    {
      type: "SOLUTION GUIDE",
      title: "From Legacy to Leading: ERP Modernization Strategies",
      description: "A comprehensive guide to transforming outdated systems into intelligent, cloud-native platforms that drive business growth and operational excellence.",
      image: "https://ext.same-assets.com/2900598000/396614146.jpeg",
      link: "#"
    },
    {
      type: "IMPLEMENTATION GUIDE",
      title: "Zero Downtime ERP Transitions: A Proven Methodology",
      description: "Discover MovinWare's agile implementation approach that delivers business value from day one while ensuring seamless transitions and continuous operations.",
      image: "https://ext.same-assets.com/2900598000/3965891193.jpeg",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {content.map((item, index) => (
            <motion.div 
              key={item.title} 
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-lg mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded">
                    {item.type}
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-white text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-sm leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item.description}
              </motion.p>
              
              <motion.button 
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ x: 5 }}
              >
                Read More
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
          ))}
        </motion.div>
      </div>
    </section>
  )
}