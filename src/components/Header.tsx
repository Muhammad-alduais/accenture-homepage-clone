'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Search, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    initial: { scale: 0, rotate: -180 },
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
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out relative ${
            scrolled 
              ? 'bg-white/20 dark:bg-gray-900/30 backdrop-blur-2xl' 
              : 'bg-white/15 dark:bg-gray-900/25 backdrop-blur-xl'
          }`}
          style={{
            borderRadius: '28px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: scrolled 
              ? '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              : '0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}
          animate={{
            scale: scrolled ? 0.98 : 1,
            y: scrolled ? 8 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-[28px] opacity-60"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0.1) 100%)',
              filter: 'blur(1px)'
            }}
            animate={{
              opacity: scrolled ? 0.8 : 0.6
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-[28px] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.3))',
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'exclude',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude'
            }}
            animate={{
              opacity: scrolled ? 0.8 : 0.6
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="text-purple-500 text-2xl font-bold relative"
                  variants={logoVariants}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path 
                      d="M20 5L35 35H5L20 5Z" 
                      fill="#A100FF"
                      filter="url(#glow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <motion.span 
                  className="text-white font-bold text-xl drop-shadow-lg"
                  style={{
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.3)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  MovinWare
                </motion.span>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {['Solutions', 'Services', 'Industries', 'About'].map((item, index) => (
                <motion.div 
                  key={item}
                  className="relative group"
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.button
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
                    style={{
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 border border-white/10"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10 font-medium">{item}</span>
                    {(item === 'Solutions' || item === 'Industries' || item === 'About') && (
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
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Search Button */}
              <motion.button
                className="p-2 rounded-full hover:bg-white/15 transition-colors duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5 text-white/90 hover:text-white transition-colors duration-300" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }} />
              </motion.button>

              {/* Language Selector */}
              <motion.button 
                className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-white/15 text-white/90 hover:text-white transition-all duration-300 backdrop-blur-sm"
                style={{
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">UAE</span>
                <motion.div
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
              
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button - Hidden on mobile */}
              <motion.button
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
                style={{
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(168, 85, 247, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-full hover:bg-white/15 transition-colors duration-300 backdrop-blur-sm"
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
                className="bg-white/20 dark:bg-gray-900/30 backdrop-blur-2xl rounded-2xl relative"
                style={{
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Mobile menu glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(168, 85, 247, 0.1) 100%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                <motion.div 
                  className="relative space-y-4 p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {['Solutions', 'Services', 'Industries', 'About'].map((item, index) => (
                    <motion.button 
                      key={item}
                      className="w-full text-left px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 font-medium backdrop-blur-sm"
                      style={{
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border border-white/20"
                    style={{
                      boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
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