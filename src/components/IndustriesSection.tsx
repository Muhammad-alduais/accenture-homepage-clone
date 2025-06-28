'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function IndustriesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const industries = [
    {
      title: "Educational Institutions",
      description: "Comprehensive student information systems, scheduling, and parent portals",
      image: "https://ext.same-assets.com/2900598000/36195040.jpeg",
      features: ["Student Management", "Academic Planning", "Parent Communication", "Fee Management"],
      clientTypes: ["Schools", "Universities", "Training Centers", "Online Academies"]
    },
    {
      title: "Logistics & Warehousing",
      description: "Fleet management, route optimization, and supply chain visibility",
      image: "https://ext.same-assets.com/2900598000/1611683462.jpeg",
      features: ["Fleet Tracking", "Route Planning", "Inventory Control", "Customs Integration"],
      clientTypes: ["Shipping Companies", "3PL Providers", "Distribution Centers", "Freight Forwarders"]
    },
    {
      title: "Retail & E-commerce",
      description: "Omnichannel retail operations with integrated POS and online platforms",
      image: "https://ext.same-assets.com/2900598000/4049787973.jpeg",
      features: ["POS Integration", "Inventory Sync", "Customer Loyalty", "Multi-channel Sales"],
      clientTypes: ["Retail Chains", "Online Stores", "Fashion Brands", "Electronics Retailers"]
    },
    {
      title: "Manufacturing & Production",
      description: "Production planning, quality control, and supply chain management",
      image: "https://ext.same-assets.com/2900598000/3965891193.jpeg",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Equipment Maintenance"],
      clientTypes: ["Manufacturers", "Assembly Plants", "Food Processing", "Textile Companies"]
    }
  ]

  const targetClients = [
    {
      type: "Startups",
      description: "Rapid deployment solutions that scale with your growth",
      icon: "🚀",
      benefits: ["Quick implementation", "Scalable architecture", "Cost-effective", "Growth-ready"]
    },
    {
      type: "SMEs",
      description: "Comprehensive ERP solutions tailored for mid-market businesses",
      icon: "🏢",
      benefits: ["Full-featured ERP", "Industry customization", "Integration capabilities", "Expert support"]
    },
    {
      type: "Enterprises",
      description: "Enterprise-grade solutions with advanced features and compliance",
      icon: "🏭",
      benefits: ["Advanced analytics", "Multi-entity support", "Compliance tools", "24/7 support"]
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
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                Industries We Serve
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Specialized Solutions for Every Industry
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Deep industry expertise combined with flexible technology to deliver solutions that understand your unique business challenges.
            </motion.p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Client Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clientTypes.map((type, idx) => (
                        <span key={idx} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Target Clients */}
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Built for Every Business Size
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              From ambitious startups to established enterprises, our solutions scale with your business needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetClients.map((client, index) => (
              <motion.div
                key={client.type}
                className="bg-white dark:bg-black rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{client.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {client.type}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {client.description}
                </p>
                <div className="space-y-2">
                  {client.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}