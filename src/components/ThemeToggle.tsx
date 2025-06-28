'use client'

import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-5 h-5 text-gray-800 dark:text-yellow-400" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: theme === 'light' ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>
      </motion.div>
    </motion.button>
  )
}