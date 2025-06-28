import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ar', 'en']
const defaultLocale = 'ar'

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return pathname.split('/')[1]

  // Check for stored preference
  const storedLocale = request.cookies.get('preferred-locale')?.value
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => {
        if (lang.startsWith('ar')) return 'ar'
        if (lang.startsWith('en')) return 'en'
        return null
      })
    
    if (preferredLocale === 'ar') return 'ar'
    if (preferredLocale === 'en') return 'en'
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    // Redirect to the appropriate locale
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    
    // Set cookie for future visits
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('preferred-locale', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })
    
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)' 
  ]
}