'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
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
  const [locale, setLocale] = useState<Locale>('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (router.locale) {
      setLocale(router.locale as Locale)
    }
    setMounted(true)
  }, [router.locale])

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
    router.push(router.pathname, router.asPath, { locale: newLocale })
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