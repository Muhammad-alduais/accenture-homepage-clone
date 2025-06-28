'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { locale, t, isRTL, switchLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
      setShowLanguageMenu(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
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
    { 
      key: 'nav.solutions', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'nav.dropdown.solutions.erp', href: '#services' },
        { key: 'nav.dropdown.solutions.ai', href: '#services' },
        { key: 'nav.dropdown.solutions.integration', href: '#services' },
        { key: 'nav.dropdown.solutions.migration', href: '#services' }
      ]
    },
    { key: 'nav.services', hasDropdown: false, href: '#services' },
    { 
      key: 'nav.industries', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'nav.dropdown.industries.education', href: '#industries' },
        { key: 'nav.dropdown.industries.healthcare', href: '#industries' },
        { key: 'nav.dropdown.industries.logistics', href: '#industries' },
        { key: 'nav.dropdown.industries.retail', href: '#industries' },
        { key: 'nav.dropdown.industries.manufacturing', href: '#industries' }
      ]
    },
    { 
      key: 'nav.about', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'nav.dropdown.about.company', href: '#about' },
        { key: 'nav.dropdown.about.team', href: '#about' },
        { key: 'nav.dropdown.about.careers', href: '#contact' },
        { key: 'nav.dropdown.about.contact', href: '#contact' }
      ]
    }
  ]

  const handleDropdownClick = (e: React.MouseEvent, itemKey: string) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === itemKey ? null : itemKey)
  }

  const handleLanguageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowLanguageMenu(!showLanguageMenu)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDropdownItemClick = (href: string) => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg' 
              : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md'
          }`}
          style={{
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
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
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavClick('#hero')}
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
                  className="text-gray-900 dark:text-white font-bold text-xl"
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
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        handleDropdownClick(e, item.key)
                      } else {
                        handleNavClick(item.href!)
                      }
                    }}
                  >
                    <span className={`relative z-10 font-medium ${isRTL ? 'ml-1' : 'mr-1'}`}>
                      {t(item.key)}
                    </span>
                    {item.hasDropdown && (
                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.key && (
                        <motion.div
                          className={`absolute top-full mt-2 ${isRTL ? 'right-0' : 'left-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[200px] z-50`}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              className={`w-full block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                              onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            >
                              {t(dropdownItem.key)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
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
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={t('nav.search')}
              >
                <Search className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </motion.button>

              {/* Language Selector */}
              <div className="relative">
                <motion.button 
                  className={`flex items-center px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all duration-300 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLanguageClick}
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
                      className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[120px] z-50`}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
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
                onClick={() => handleNavClick('#contact')}
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
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                  </motion.div>
                )}
              </AnimatePresence>
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
                className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
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
                    <motion.div
                      key={item.key}
                      initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button 
                        className={`w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-medium ${isRTL ? 'text-right' : 'text-left'}`}
                        whileHover={{ x: isRTL ? -10 : 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(item.href || '#')}
                      >
                        {t(item.key)}
                      </button>
                    </motion.div>
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
                    onClick={() => handleNavClick('#contact')}
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