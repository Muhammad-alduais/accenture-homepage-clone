'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Mail, Phone, FileText, DollarSign, Calendar } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslations } from '@/hooks/useTranslations'
import { useFormValidation } from '@/hooks/useFormValidation'
import Select from '@/components/ui/Select'
import Input from '@/components/ui/Input'

interface PricingFormData {
  companyName: string
  industry: string
  companySize: string
  modules: string[]
  budget: string
  timeline: string
  currency: string
  region: string
  contactName: string
  email: string
  phone: string
  requirements: string
}

export default function PricingForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const { isRTL, locale } = useLanguage()
  const { t, translations, loading: translationsLoading } = useTranslations('forms', locale)

  const initialFormData: PricingFormData = {
    companyName: '',
    industry: '',
    companySize: '',
    modules: [],
    budget: '',
    timeline: '',
    currency: 'USD',
    region: '',
    contactName: '',
    email: '',
    phone: '',
    requirements: ''
  }

  const formConfig = {
    companyName: {
      validation: { required: true, minLength: 2, maxLength: 100 }
    },
    industry: {
      validation: { required: true }
    },
    companySize: {
      validation: { required: true }
    },
    modules: {
      validation: { 
        required: true,
        custom: (value: string[]) => value.length === 0 ? 'Please select at least one module' : undefined
      }
    },
    budget: {
      validation: { required: true }
    },
    timeline: {
      validation: { required: true }
    },
    currency: {
      validation: { required: true }
    },
    region: {
      validation: { required: true }
    },
    contactName: {
      validation: { required: true, minLength: 2, maxLength: 50 }
    },
    email: {
      validation: { required: true, email: true }
    },
    phone: {
      validation: { required: true, phone: true }
    },
    requirements: {
      validation: { maxLength: 1000 }
    }
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setTouched,
    handleSubmit,
    reset
  } = useFormValidation(initialFormData, formConfig)

  // Get options from translations
  const getOptions = (optionKey: string) => {
    if (translationsLoading || !translations) return []
    
    try {
      const options = translations?.forms?.pricing?.options?.[optionKey]
      return Array.isArray(options) ? options : []
    } catch (error) {
      console.warn(`Failed to get options for ${optionKey}:`, error)
      return []
    }
  }

  const onSubmit = async (formData: PricingFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        reset()
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  if (translationsLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className={`text-center mb-12 ${isRTL ? 'text-center' : 'text-center'}`}
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('forms.pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('forms.pricing.subtitle')}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)
              }}
              className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl space-y-8"
            >
              {/* Company Information Section */}
              <div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Building2 className={`w-6 h-6 text-brand-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  Company Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={t('forms.pricing.fields.companyName.label')}
                    placeholder={t('forms.pricing.fields.companyName.placeholder')}
                    helperText={t('forms.pricing.fields.companyName.helper')}
                    value={values.companyName}
                    onChange={(value) => setValue('companyName', value)}
                    onBlur={() => setTouched('companyName')}
                    error={touched.companyName ? errors.companyName : undefined}
                    required
                    leftIcon={<Building2 className="w-4 h-4" />}
                    clearable
                  />

                  <Select
                    options={getOptions('industries')}
                    value={values.industry}
                    onChange={(value) => setValue('industry', value)}
                    placeholder={t('forms.pricing.fields.industry.placeholder')}
                    helperText={t('forms.pricing.fields.industry.helper')}
                    error={touched.industry ? errors.industry : undefined}
                    searchable
                    aria-label={t('forms.pricing.fields.industry.label')}
                  />

                  <Select
                    options={getOptions('companySizes')}
                    value={values.companySize}
                    onChange={(value) => setValue('companySize', value)}
                    placeholder={t('forms.pricing.fields.companySize.placeholder')}
                    helperText={t('forms.pricing.fields.companySize.helper')}
                    error={touched.companySize ? errors.companySize : undefined}
                    aria-label={t('forms.pricing.fields.companySize.label')}
                  />

                  <Select
                    options={getOptions('regions')}
                    value={values.region}
                    onChange={(value) => setValue('region', value)}
                    placeholder={t('forms.pricing.fields.region.placeholder')}
                    helperText={t('forms.pricing.fields.region.helper')}
                    error={touched.region ? errors.region : undefined}
                    searchable
                    aria-label={t('forms.pricing.fields.region.label')}
                  />
                </div>
              </div>

              {/* Requirements Section */}
              <div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FileText className={`w-6 h-6 text-brand-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  Requirements & Budget
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Select
                      options={getOptions('modules')}
                      value={values.modules}
                      onChange={(value) => setValue('modules', value)}
                      placeholder={t('forms.pricing.fields.modules.placeholder')}
                      helperText={t('forms.pricing.fields.modules.helper')}
                      error={touched.modules ? errors.modules : undefined}
                      multiple
                      searchable
                      aria-label={t('forms.pricing.fields.modules.label')}
                    />
                  </div>

                  <Select
                    options={getOptions('budgets')}
                    value={values.budget}
                    onChange={(value) => setValue('budget', value)}
                    placeholder={t('forms.pricing.fields.budget.placeholder')}
                    helperText={t('forms.pricing.fields.budget.helper')}
                    error={touched.budget ? errors.budget : undefined}
                    aria-label={t('forms.pricing.fields.budget.label')}
                  />

                  <Select
                    options={getOptions('timelines')}
                    value={values.timeline}
                    onChange={(value) => setValue('timeline', value)}
                    placeholder={t('forms.pricing.fields.timeline.placeholder')}
                    helperText={t('forms.pricing.fields.timeline.helper')}
                    error={touched.timeline ? errors.timeline : undefined}
                    aria-label={t('forms.pricing.fields.timeline.label')}
                  />

                  <Select
                    options={getOptions('currencies')}
                    value={values.currency}
                    onChange={(value) => setValue('currency', value)}
                    placeholder={t('forms.pricing.fields.currency.placeholder')}
                    helperText={t('forms.pricing.fields.currency.helper')}
                    error={touched.currency ? errors.currency : undefined}
                    searchable
                    aria-label={t('forms.pricing.fields.currency.label')}
                  />
                </div>
              </div>

              {/* Contact Information Section */}
              <div>
                <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className={`w-6 h-6 text-brand-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label={t('forms.pricing.fields.contactName.label')}
                    placeholder={t('forms.pricing.fields.contactName.placeholder')}
                    helperText={t('forms.pricing.fields.contactName.helper')}
                    value={values.contactName}
                    onChange={(value) => setValue('contactName', value)}
                    onBlur={() => setTouched('contactName')}
                    error={touched.contactName ? errors.contactName : undefined}
                    required
                    leftIcon={<Mail className="w-4 h-4" />}
                    clearable
                  />

                  <Input
                    label={t('forms.pricing.fields.email.label')}
                    placeholder={t('forms.pricing.fields.email.placeholder')}
                    helperText={t('forms.pricing.fields.email.helper')}
                    value={values.email}
                    onChange={(value) => setValue('email', value)}
                    onBlur={() => setTouched('email')}
                    error={touched.email ? errors.email : undefined}
                    type="email"
                    required
                    leftIcon={<Mail className="w-4 h-4" />}
                    clearable
                  />

                  <Input
                    label={t('forms.pricing.fields.phone.label')}
                    placeholder={t('forms.pricing.fields.phone.placeholder')}
                    helperText={t('forms.pricing.fields.phone.helper')}
                    value={values.phone}
                    onChange={(value) => setValue('phone', value)}
                    onBlur={() => setTouched('phone')}
                    error={touched.phone ? errors.phone : undefined}
                    type="tel"
                    required
                    leftIcon={<Phone className="w-4 h-4" />}
                    clearable
                  />
                </div>

                {/* Special Requirements */}
                <div className="mt-6">
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('forms.pricing.fields.requirements.label')}
                  </label>
                  <textarea
                    value={values.requirements}
                    onChange={(e) => setValue('requirements', e.target.value)}
                    onBlur={() => setTouched('requirements')}
                    placeholder={t('forms.pricing.fields.requirements.placeholder')}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-vertical ${
                      errors.requirements 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  />
                  <div className={`mt-1 text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('forms.pricing.fields.requirements.helper')}
                  </div>
                  {errors.requirements && (
                    <div className={`mt-1 text-sm text-red-500 dark:text-red-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {errors.requirements}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className={`text-green-700 dark:text-green-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('forms.pricing.messages.success')}
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className={`text-red-700 dark:text-red-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('forms.pricing.messages.error')}
                  </p>
                </motion.div>
              )}

              {/* Submit Buttons */}
              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-brand-primary hover:bg-brand-primary/90 disabled:bg-brand-primary/50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                      {t('forms.pricing.buttons.submitting')}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <DollarSign className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('forms.pricing.buttons.submit')}
                    </span>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  onClick={reset}
                  disabled={isSubmitting}
                  className="px-6 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('forms.pricing.buttons.reset')}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}