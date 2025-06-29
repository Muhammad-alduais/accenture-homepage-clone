'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px from top
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-24 z-40 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
            isRTL ? 'left-6' : 'right-6'
          }`}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(168, 85, 247, 0.9)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={t('nav.scrollToTop')}
        >
          <ChevronUp className="w-6 h-6" />
          
          {/* Pulse animation ring */}
          <motion.div
            className="absolute inset-0 bg-purple-600 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}