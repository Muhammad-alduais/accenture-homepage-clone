'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const footerSections = {
    platform: [
      { labelKey: 'platform.coreModules', href: '#services' },
      { labelKey: 'platform.aiFeatures', href: '#services' },
      { labelKey: 'platform.integration', href: '#services' },
      { labelKey: 'platform.mobileCloud', href: '#services' }
    ],
    company: [
      { labelKey: 'whyMovinware.story', href: '#about' },
      { labelKey: 'footer.links.careers', href: '#contact' },
      { labelKey: 'whyMovinware.success', href: '#about' },
      { labelKey: 'footer.links.contact', href: '#contact' }
    ],
    support: [
      { labelKey: 'resources.documentation', href: '#contact' },
      { labelKey: 'resources.tutorials', href: '#contact' },
      { labelKey: 'resources.support', href: '#contact' },
      { labelKey: 'footer.links.partner', href: '#contact' }
    ],
    legal: [
      { labelKey: 'footer.links.privacy', href: '#' },
      { labelKey: 'footer.links.terms', href: '#' },
      { labelKey: 'footer.links.cookies', href: '#' },
      { labelKey: 'footer.links.support', href: '#contact' }
    ]
  }

  const handleNavClick = (href: string) => {
    if (href === '#') return
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Left Side - Tagline and Links */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 whitespace-pre-line">
              {t('footer.tagline')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Platform Links */}
              <div>
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('nav.platform')}
                </h3>
                <ul className="space-y-3">
                  {footerSections.platform.map((link) => (
                    <li key={link.labelKey}>
                      <button 
                        onClick={() => handleNavClick(link.href)}
                        className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t(link.labelKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerSections.company.map((link) => (
                    <li key={link.labelKey}>
                      <button 
                        onClick={() => handleNavClick(link.href)}
                        className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t(link.labelKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Support Links */}
              <div>
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('nav.resources')}
                </h3>
                <ul className="space-y-3">
                  {footerSections.support.map((link) => (
                    <li key={link.labelKey}>
                      <button 
                        onClick={() => handleNavClick(link.href)}
                        className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t(link.labelKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className={`text-lg font-semibold text-gray-900 dark:text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerSections.legal.map((link) => (
                    <li key={link.labelKey}>
                      <button 
                        onClick={() => handleNavClick(link.href)}
                        className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t(link.labelKey)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Large MovinWare Logo */}
          <div className={`flex items-center ${isRTL ? 'justify-start lg:justify-start' : 'justify-center lg:justify-end'}`}>
            <div className="text-gray-900 dark:text-white text-8xl md:text-9xl font-bold opacity-20">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fill="currentColor">
                  MovinWare
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className={`text-gray-600 dark:text-gray-400 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}