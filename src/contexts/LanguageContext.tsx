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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Extract locale from pathname
    const pathSegments = pathname.split('/')
    const currentLocale = pathSegments[1] as Locale
    
    // Set locale based on pathname, default to 'ar' if not found
    if (currentLocale === 'ar' || currentLocale === 'en') {
      setLocale(currentLocale)
    } else {
      setLocale('ar')
    }
    
    setMounted(true)
  }, [pathname])

  useEffect(() => {
    if (mounted) {
      // Update document direction and lang
      document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr'
      document.documentElement.lang = locale
      
      // Update body classes for font handling
      document.body.classList.toggle('font-arabic', locale === 'ar')
      document.body.classList.toggle('font-english', locale === 'en')
    }
  }, [locale, mounted])

  const t = (key: string) => getTranslation(locale, key)

  const switchLanguage = (newLocale: Locale) => {
    // Get current path without locale prefix
    const pathSegments = pathname.split('/')
    const currentLocale = pathSegments[1]
    
    let newPath: string
    if (currentLocale === 'ar' || currentLocale === 'en') {
      // Replace existing locale
      pathSegments[1] = newLocale
      newPath = pathSegments.join('/')
    } else {
      // Add locale prefix
      newPath = `/${newLocale}${pathname}`
    }
    
    router.push(newPath)
  }

  if (!mounted) {
    return null
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