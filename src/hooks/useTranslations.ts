'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface TranslationBundle {
  [key: string]: any
}

export function useTranslations(namespace: string) {
  const { locale } = useLanguage()
  const [translations, setTranslations] = useState<TranslationBundle>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTranslations = async () => {
      setLoading(true)
      setError(null)
      
      try {
        // Dynamic import based on namespace and locale
        const translationModule = await import(`@/lib/translations/${namespace}/${locale}.json`)
        setTranslations(translationModule.default || translationModule)
      } catch (err) {
        console.error(`Failed to load translations for ${namespace}/${locale}:`, err)
        setError(`Failed to load translations`)
        
        // Fallback to English if available
        if (locale !== 'en') {
          try {
            const fallbackModule = await import(`@/lib/translations/${namespace}/en.json`)
            setTranslations(fallbackModule.default || fallbackModule)
          } catch (fallbackErr) {
            console.error(`Failed to load fallback translations:`, fallbackErr)
          }
        }
      } finally {
        setLoading(false)
      }
    }

    loadTranslations()
  }, [namespace, locale])

  // Translation function with dot notation support
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    if (typeof value !== 'string') {
      return key
    }
    
    // Replace parameters in translation
    if (params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return params[paramKey]?.toString() || match
      })
    }
    
    return value
  }

  return { t, loading, error, translations }
}