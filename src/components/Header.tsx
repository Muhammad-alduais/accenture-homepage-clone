'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const { locale, t, isRTL, switchLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const logoVariants = {
    initial: { scale: 0, rotate: isRTL ? 180 : -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const navItems = [
    { key: 'nav.solutions', hasDropdown: true },
    { key: 'nav.services', hasDropdown: false },
    { key: 'nav.industries', hasDropdown: true },
    { key: 'nav.about', hasDropdown: true }
  ]

  return (
    <>
      {/* Fixed Header Container */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Centered Rounded Navbar */}
        <motion.div 
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
            scrolled 
              ? 'bg-white/25 dark:bg-gray-900/40 backdrop-blur-xl' 
              : 'bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg'
          }`}
          style={{
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.12)'
              : '0 4px 24px rgba(0, 0, 0, 0.08)'
          }}
          animate={{
            scale: scrolled ? 0.98 : 1,
            y: scrolled ? 4 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className={`flex items-center justify-between h-16 px-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <motion.div 
                  className="text-purple-500 text-2xl font-bold"
                  variants={logoVariants}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <motion.path 
                      d="M20 5L35 35H5L20 5Z" 
                      fill="#A100FF"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <motion.span 
                  className="text-white font-bold text-xl"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  MovinWare
                </motion.span>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.key}
                  className="relative group"
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.button
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 relative overflow-hidden group"
                    style={{
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`relative z-10 font-medium ${isRTL ? 'ml-1' : 'mr-1'}`}>
                      {t(item.key)}
                    </span>
                    {item.hasDropdown && (
                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </nav>

            {/* Right side */}
            <motion.div 
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Search Button */}
              <motion.button
                className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t('nav.search')}
              >
                <Search className="w-5 h-5 text-white/90 hover:text-white transition-colors duration-300" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }} />
              </motion.button>

              {/* Language Selector */}
              <div className="relative">
                <motion.button 
                  className={`flex items-center px-3 py-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-all duration-300 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                  style={{
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {locale === 'ar' ? 'العربية' : 'English'}
                  </span>
                  <motion.div
                    animate={{ rotate: showLanguageMenu ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {showLanguageMenu && (
                    <motion.div
                      className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[120px]"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        onClick={() => {
                          switchLanguage('ar')
                          setShowLanguageMenu(false)
                        }}
                      >
                        العربية
                      </button>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                        onClick={() => {
                          switchLanguage('en')
                          setShowLanguageMenu(false)
                        }}
                      >
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button - Hidden on mobile */}
              <motion.button
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 border border-white/10"
                style={{
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 6px 20px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('nav.getStarted')}</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: isRTL ? -3 : 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className="w-6 h-6 flex flex-col justify-center items-center space-y-1"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.div 
                  className="w-5 h-0.5 bg-white rounded-full"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="w-5 h-0.5 bg-white rounded-full"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="w-5 h-0.5 bg-white rounded-full"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden mt-2 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div 
                className="bg-white/25 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                }}
              >
                <motion.div 
                  className="space-y-2 p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <motion.button 
                      key={item.key}
                      className={`w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                      style={{
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                      }}
                      initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: isRTL ? -10 : 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t(item.key)}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/10 mt-4"
                    style={{
                      boxShadow: '0 4px 15px rgba(168, 85, 247, 0.3)'
                    }}
                    initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('nav.getStarted')}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  )
}