'use client'

import { useState, useCallback } from 'react'

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | undefined
  email?: boolean
  phone?: boolean
  url?: boolean
}

export interface FieldConfig {
  validation?: ValidationRule
  transform?: (value: any) => any
}

export interface FormConfig {
  [fieldName: string]: FieldConfig
}

export interface FormErrors {
  [fieldName: string]: string
}

export interface FormState {
  [fieldName: string]: any
}

export function useFormValidation<T extends FormState>(
  initialState: T,
  config: FormConfig = {}
) {
  const [values, setValues] = useState<T>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, _setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    url: /^https?:\/\/.+/
  }

  // Validate single field
  const validateField = useCallback((name: string, value: any): string | undefined => {
    const fieldConfig = config[name]
    if (!fieldConfig?.validation) return undefined

    const { validation } = fieldConfig
    
    // Required validation
    if (validation.required && (!value || value.toString().trim() === '')) {
      return 'This field is required'
    }

    // Skip other validations if field is empty and not required
    if (!value || value.toString().trim() === '') {
      return undefined
    }

    const stringValue = value.toString()

    // Length validations
    if (validation.minLength && stringValue.length < validation.minLength) {
      return `Minimum length is ${validation.minLength} characters`
    }

    if (validation.maxLength && stringValue.length > validation.maxLength) {
      return `Maximum length is ${validation.maxLength} characters`
    }

    // Pattern validations
    if (validation.pattern && !validation.pattern.test(stringValue)) {
      return 'Invalid format'
    }

    // Email validation
    if (validation.email && !patterns.email.test(stringValue)) {
      return 'Please enter a valid email address'
    }

    // Phone validation
    if (validation.phone && !patterns.phone.test(stringValue.replace(/\s/g, ''))) {
      return 'Please enter a valid phone number'
    }

    // URL validation
    if (validation.url && !patterns.url.test(stringValue)) {
      return 'Please enter a valid URL'
    }

    // Custom validation
    if (validation.custom) {
      return validation.custom(value)
    }

    return undefined
  }, [config])

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(config).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [values, config, validateField])

  // Set field value
  const setValue = useCallback((name: string, value: any) => {
    const fieldConfig = config[name]
    const transformedValue = fieldConfig?.transform ? fieldConfig.transform(value) : value

    setValues(prev => ({
      ...prev,
      [name]: transformedValue
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }, [config, errors])

  // Set field as touched
  const setTouched = useCallback((name: string) => {
    _setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate field on blur if it's been touched
    const error = validateField(name, values[name])
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }, [validateField, values, _setTouched, setErrors])

  // Reset form
  const reset = useCallback(() => {
    setValues(initialState)
    setErrors({})
    _setTouched({})
    setIsSubmitting(false)
  }, [initialState])

  // Handle form submission
  const handleSubmit = useCallback(async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    setIsSubmitting(true)
    
    try {
      const isValid = validateForm()
      if (!isValid) {
        // Mark all fields as touched to show errors
        const allTouched = Object.keys(config).reduce((acc, key) => ({
          ...acc,
          [key]: true
        }), {})
        _setTouched(allTouched)
        return false
      }

      await onSubmit(values)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [values, config, validateForm, _setTouched])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setTouched,
    validateField,
    validateForm,
    reset,
    handleSubmit,
    setIsSubmitting
  }
}