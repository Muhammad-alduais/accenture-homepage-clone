'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const footerLinks = {
    leftColumn: [
      "Solutions",
      "Services", 
      "Industries",
      "About Us",
      "Contact Us",
      "Careers"
    ],
    rightColumn: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Support Center",
      "Documentation",
      "Partner Program"
    ]
  }

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              {t('footer.tagline')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {footerLinks.leftColumn.map((link) => (
                    <li key={link}>
                      <button className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-4">
                  {footerLinks.rightColumn.map((link) => (
                    <li key={link}>
                      <button className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                        {link}
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