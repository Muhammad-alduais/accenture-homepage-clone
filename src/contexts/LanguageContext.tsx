'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, isRTL } from '@/lib/i18n'
import { useTranslations } from '@/hooks/useTranslations'

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
  
  const { t, loading: translationsLoading } = useTranslations('global', locale)

  useEffect(() => {
    // Store locale preference
    localStorage.setItem('preferred-locale', locale)
  }, [locale])

  const switchLanguage = (newLocale: Locale) => {
    // Get current path without locale prefix
    const pathSegments = pathname.split('/')
    const currentPath = pathSegments.slice(2).join('/') // Remove empty string and current locale
    
    // Navigate to new locale
    const newPath = `/${newLocale}${currentPath ? `/${currentPath}` : ''}`
    router.push(newPath)
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