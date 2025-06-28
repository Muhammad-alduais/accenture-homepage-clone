'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, getTranslation, isRTL } from '@/lib/i18n'

interface LanguageContextType {
  locale: Locale
  t: (key: string) => string
  isRTL: boolean
  switchLanguage: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children, 
  initialLocale 
}: { 
  children: React.ReactNode
  initialLocale: Locale 
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocale(initialLocale)
    setMounted(true)
  }, [initialLocale])

  useEffect(() => {
    if (mounted) {
      // Update document direction and lang
      document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr'
      document.documentElement.lang = locale
      
      // Update body classes for font handling
      document.body.classList.remove('font-arabic', 'font-english')
      document.body.classList.add(locale === 'ar' ? 'font-arabic' : 'font-english')
      
      // Store locale preference
      localStorage.setItem('preferred-locale', locale)
    }
  }, [locale, mounted])

  const t = (key: string) => {
    const translation = getTranslation(locale, key)
    console.log(`Translation for "${key}" in "${locale}":`, translation) // Debug log
    return translation
  }

  const switchLanguage = (newLocale: Locale) => {
    // Get current path without locale prefix
    const pathSegments = pathname.split('/')
    const currentPath = pathSegments.slice(2).join('/') // Remove empty string and current locale
    
    // Navigate to new locale
    const newPath = `/${newLocale}${currentPath ? `/${currentPath}` : ''}`
    router.push(newPath)
  }

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return <div>{children}</div>
  }

  return (
    <LanguageContext.Provider value={{ 
      locale, 
      t, 
      isRTL: isRTL(locale), 
      switchLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}