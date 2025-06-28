'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('core')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const tabs = [
    { id: 'core', label: 'Core ERP Modules', icon: '⚙️' },
    { id: 'industry', label: 'Industry Solutions', icon: '🏢' },
    { id: 'digital', label: 'Digital Transformation', icon: '🚀' }
  ]

  const solutions = {
    core: [
      {
        title: "Accounting & Finance",
        features: ["General Ledger", "Invoicing & Billing", "Financial Reporting", "Zakat/VAT Compliance"],
        description: "Complete financial management with local compliance"
      },
      {
        title: "HR & Payroll",
        features: ["Employee Records", "Attendance Tracking", "Payroll Processing", "Hijri/Gregorian Sync"],
        description: "Comprehensive human resource management"
      },
      {
        title: "Sales & CRM",
        features: ["Lead Management", "Quote Generation", "Order Processing", "Customer Portal"],
        description: "End-to-end sales and customer relationship management"
      },
      {
        title: "Inventory & Procurement",
        features: ["Stock Management", "Warehousing", "Dynamic Pricing", "Arabic Labeling"],
        description: "Complete inventory control and procurement"
      },
      {
        title: "Projects & Timesheets",
        features: ["Task Management", "Time Tracking", "Resource Allocation", "Project Reporting"],
        description: "Project management and resource optimization"
      },
      {
        title: "Manufacturing",
        features: ["Bill of Materials", "Work Orders", "Production Planning", "Quality Inspections"],
        description: "Manufacturing operations and quality control"
      },
      {
        title: "Asset Management",
        features: ["Asset Depreciation", "Maintenance Scheduling", "QR Code Tags", "Predictive Alerts"],
        description: "Asset lifecycle and maintenance management"
      }
    ],
    industry: [
      {
        title: "Retail & E-commerce",
        features: ["POS Integration", "Online Store", "Inventory Sync", "Loyalty Programs"],
        description: "Omnichannel retail operations"
      },
      {
        title: "Education",
        features: ["Student Information", "Class Scheduling", "Exam Management", "Parent Portal"],
        description: "Complete educational institution management"
      },
      {
        title: "Fitness Clubs",
        features: ["Member Management", "Class Booking", "Payment Processing", "Equipment Maintenance"],
        description: "Fitness and wellness facility operations"
      },
      {
        title: "Logistics & Warehouse",
        features: ["Fleet Management", "Route Optimization", "Shipment Tracking", "Customs Integration"],
        description: "Supply chain and logistics optimization"
      }
    ],
    digital: [
      {
        title: "Digital Presence",
        features: ["Website Development", "Brand Identity", "E-commerce Platform", "Digital Marketing"],
        description: "Establish your digital foundation"
      },
      {
        title: "Process Automation",
        features: ["Workflow Design", "Mobile Applications", "API Development", "Integration Hub"],
        description: "Automate and streamline operations"
      },
      {
        title: "Smart Systems",
        features: ["AI Analytics", "OCR Processing", "Predictive Forecasting", "Intelligent Chatbots"],
        description: "AI-powered business intelligence"
      },
      {
        title: "End-to-End Transformation",
        features: ["Legacy Modernization", "Cloud Migration", "Scalability Planning", "Change Management"],
        description: "Complete digital transformation journey"
      }
    ]
  }

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
    <section className="py-24 bg-white dark:bg-black">
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
                Solutions Overview
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Complete Business Solutions
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              From core ERP modules to industry-specific solutions and digital transformation services.
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center mb-12"
            variants={itemVariants}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Solutions Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            key={activeTab}
          >
            {solutions[activeTab as keyof typeof solutions].map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}