'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const footerSections = [
    {
      titleKey: 'footer.sections.solutions.title',
      links: [
        { labelKey: 'footer.sections.solutions.erp', href: '#erp' },
        { labelKey: 'footer.sections.solutions.ai', href: '#ai' },
        { labelKey: 'footer.sections.solutions.integration', href: '#integration' },
        { labelKey: 'footer.sections.solutions.migration', href: '#migration' }
      ]
    },
    {
      titleKey: 'footer.sections.services.title',
      links: [
        { labelKey: 'footer.sections.services.implementation', href: '#implementation' },
        { labelKey: 'footer.sections.services.consulting', href: '#consulting' },
        { labelKey: 'footer.sections.services.support', href: '#support' },
        { labelKey: 'footer.sections.services.training', href: '#training' }
      ]
    },
    {
      titleKey: 'footer.sections.industries.title',
      links: [
        { labelKey: 'footer.sections.industries.education', href: '#education' },
        { labelKey: 'footer.sections.industries.healthcare', href: '#healthcare' },
        { labelKey: 'footer.sections.industries.logistics', href: '#logistics' },
        { labelKey: 'footer.sections.industries.retail', href: '#retail' }
      ]
    },
    {
      titleKey: 'footer.sections.company.title',
      links: [
        { labelKey: 'footer.sections.company.about', href: '#about' },
        { labelKey: 'footer.sections.company.careers', href: '#careers' },
        { labelKey: 'footer.sections.company.contact', href: '#contact' },
        { labelKey: 'footer.sections.company.blog', href: '#blog' }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      labelKey: 'footer.contact.email',
      value: 'hello@movinware.com',
      href: 'mailto:hello@movinware.com'
    },
    {
      icon: Phone,
      labelKey: 'footer.contact.phone',
      value: '+971 4 XXX XXXX',
      href: 'tel:+97144XXXXXX'
    },
    {
      icon: MapPin,
      labelKey: 'footer.contact.location',
      value: 'Dubai, UAE',
      href: '#location'
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'GitHub', href: '#', icon: '💻' }
  ]

  const legalLinks = [
    { labelKey: 'footer.legal.privacy', href: '#privacy' },
    { labelKey: 'footer.legal.terms', href: '#terms' },
    { labelKey: 'footer.legal.cookies', href: '#cookies' },
    { labelKey: 'footer.legal.security', href: '#security' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Company Info */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className={`flex items-center mb-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <div className="text-purple-500 text-2xl font-bold mr-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 5L35 35H5L20 5Z" fill="#A100FF" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  MovinWare
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {t('footer.tagline')}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.labelKey}
                    href={contact.href}
                    className={`flex items-center group hover:text-purple-600 dark:hover:text-purple-400 transition-colors ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                      <contact.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {t(contact.labelKey)}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300" dir={contact.labelKey === 'footer.contact.email' ? 'ltr' : undefined}>
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${isRTL ? 'text-right' : 'text-left'}`}
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('footer.cta.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('footer.cta.description')}
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-colors text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('footer.cta.demo')}
                </motion.button>
                <motion.button
                  className="w-full border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-4 rounded-lg font-medium transition-colors text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('footer.cta.consultation')}
                </motion.button>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('footer.stats.faster')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">87%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('footer.stats.adoption')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t('footer.stats.support')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <h5 className="font-bold text-gray-900 dark:text-white mb-4">
                  {t(section.titleKey)}
                </h5>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.labelKey}>
                      <motion.a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        whileHover={{ x: isRTL ? -3 : 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t(link.labelKey)}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {/* Copyright */}
            <motion.p 
              className={`text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0 ${isRTL ? 'text-right md:text-right' : 'text-left md:text-left'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('footer.copyright')}
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} mb-4 md:mb-0`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div 
              className={`flex flex-wrap justify-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {legalLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}