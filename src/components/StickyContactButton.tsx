'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed bottom-6 z-50 ${isRTL ? 'left-6' : 'right-6'}`}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="relative"
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
          >
            {/* Main Button */}
            <motion.button
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              animate={{
                width: isExpanded ? 'auto' : '60px',
                paddingLeft: isExpanded ? '20px' : '0px',
                paddingRight: isExpanded ? '20px' : '0px'
              }}
              style={{ height: '60px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                animate={{ opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium whitespace-nowrap">
                  {t('contact.talkToExpert')}
                </span>
              </motion.div>
              
              <motion.div
                className="flex items-center justify-center"
                animate={{
                  width: isExpanded ? '24px' : '60px',
                  height: isExpanded ? '24px' : '60px'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>
            </motion.button>

            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-brand-primary rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}