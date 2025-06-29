export const locales = ['ar', 'en'] as const
export type Locale = typeof locales[number]

export function isRTL(locale: Locale): boolean {
  return locale === 'ar'
}