'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const { locale, t, isRTL, switchLanguage } = useLanguage()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setShowLanguageMenu(false)
        setActiveDropdown(null)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
      key: 'nav.platform', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'platform.coreModules', href: '#services' },
        { key: 'platform.aiFeatures', href: '#services' },
        { key: 'platform.integration', href: '#services' },
        { key: 'platform.mobileCloud', href: '#services' }
      ]
    },
    { 
      key: 'nav.industries', 
      href: '#industries', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'industries.education', href: '#industries' },
        { key: 'industries.retail', href: '#industries' },
        { key: 'industries.manufacturing', href: '#industries' },
        { key: 'industries.logistics', href: '#industries' },
        { key: 'industries.viewAll', href: '#industries' }
      ]
    },
    { 
      key: 'nav.whyMovinware', 
      href: '#about', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'whyMovinware.story', href: '#about' },
        { key: 'whyMovinware.methodology', href: '#about' },
        { key: 'whyMovinware.success', href: '#about' },
        { key: 'whyMovinware.expertise', href: '#about' }
      ]
    },
    { 
      key: 'nav.pricing', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'pricing.startup', href: '#contact' },
        { key: 'pricing.sme', href: '#contact' },
        { key: 'pricing.enterprise', href: '#contact' },
        { key: 'pricing.custom', href: '#contact' }
      ]
    },
    { 
      key: 'nav.resources', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'resources.documentation', href: '#contact' },
        { key: 'resources.tutorials', href: '#contact' },
        { key: 'resources.caseStudies', href: '#about' },
        { key: 'resources.blog', href: '#contact' },
        { key: 'resources.support', href: '#contact' }
      ]
    }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdownToggle = (itemKey: string) => {
    setActiveDropdown(activeDropdown === itemKey ? null : itemKey)
  }

  const handleGetDemo = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Skip to main content link */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-[60]"
      >
        {t('nav.skipToMain')}
      </a>

      {/* Fixed Header Container */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        role="banner"
      >
        {/* Centered Rounded Navbar */}
        <motion.nav 
          ref={navRef}
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
            scrolled 
              ? 'bg-white/25 dark:bg-gray-900/40 backdrop-blur-xl shadow-lg' 
              : 'bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg shadow-md'
          }`}
          style={{
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
          animate={{
            scale: scrolled ? 0.98 : 1,
            y: scrolled ? 4 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label={t('nav.mainNavigation')}
        >
          <div className={`flex items-center justify-between h-16 px-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href={`/${locale}`}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                aria-label={t('nav.homeLink')}
              >
                <motion.div 
                  className="text-purple-500 text-2xl font-bold"
                  variants={logoVariants}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                  aria-hidden="true"
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
              </a>
            </motion.div>

            {/* Navigation Items - Desktop */}
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
                    onClick={() => {
                      if (item.hasDropdown) {
                        handleDropdownToggle(item.key)
                      } else {
                        handleNavClick(item.href)
                      }
                    }}
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
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
                          className={`absolute top-full mt-2 ${isRTL ? 'right-0' : 'left-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[200px]`}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              className={`w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                              onClick={() => handleNavClick(dropdownItem.href)}
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
              
              {/* Get Demo Button */}
              <motion.button
                onClick={handleGetDemo}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 ml-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {t('nav.getDemo')}
              </motion.button>
            </nav>

            {/* Right side - Controls + Mobile Menu */}
            <motion.div 
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Language Selector */}
              <div className="relative">
                <motion.button 
                  className={`flex items-center px-3 py-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                  style={{
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  aria-label={t('nav.changeLanguage')}
                  aria-haspopup="true"
                  aria-expanded={showLanguageMenu}
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
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
                      className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[120px]`}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      role="menu"
                      aria-label={t('nav.languageMenu')}
                    >
                      <button
                        className={`w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                        onClick={() => {
                          switchLanguage('ar')
                          setShowLanguageMenu(false)
                        }}
                        role="menuitem"
                      >
                        العربية
                      </button>
                      <button
                        className={`w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                        onClick={() => {
                          switchLanguage('en')
                          setShowLanguageMenu(false)
                        }}
                        role="menuitem"
                      >
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={isMenuOpen}
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
            </motion.div>
          </div>
        </motion.nav>

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
                    <div key={item.key}>
                      <motion.button 
                        onClick={() => {
                          if (item.hasDropdown) {
                            handleDropdownToggle(item.key)
                          } else {
                            handleNavClick(item.href)
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium focus:outline-none focus:bg-white/10 flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'}`}
                        style={{
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: isRTL ? -10 : 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{t(item.key)}</span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>
                      
                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeDropdown === item.key && (
                        <motion.div
                          className="ml-4 mt-2 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              className={`w-full px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                              onClick={() => handleNavClick(dropdownItem.href)}
                            >
                              {t(dropdownItem.key)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile Get Demo Button */}
                  <motion.button
                    onClick={handleGetDemo}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('nav.getDemo')}
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