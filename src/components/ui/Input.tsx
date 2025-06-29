'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  error?: string
  helperText?: string
  clearable?: boolean
  showPasswordToggle?: boolean
  characterLimit?: number
  mask?: string
  validationPattern?: RegExp
  validationMessage?: string
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onChange?: (value: string) => void
  onValidation?: (isValid: boolean, message?: string) => void
}

export default function Input({
  label,
  error,
  helperText,
  clearable = false,
  showPasswordToggle = false,
  characterLimit,
  mask,
  validationPattern,
  validationMessage,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  type = 'text',
  value = '',
  onChange,
  onValidation,
  onFocus,
  onBlur,
  disabled,
  required,
  placeholder,
  'aria-describedby': ariaDescribedBy,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [internalValue, setInternalValue] = useState(value?.toString() || '')
  const [validationError, setValidationError] = useState<string>()
  
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`
  const helperId = `${inputId}-helper`
  const errorId = `${inputId}-error`

  // Apply input mask
  const applyMask = (value: string, mask: string) => {
    let maskedValue = ''
    let valueIndex = 0
    
    for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
      if (mask[i] === '9') {
        if (/\d/.test(value[valueIndex])) {
          maskedValue += value[valueIndex]
          valueIndex++
        } else {
          break
        }
      } else if (mask[i] === 'A') {
        if (/[a-zA-Z]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex]
          valueIndex++
        } else {
          break
        }
      } else if (mask[i] === '*') {
        maskedValue += value[valueIndex]
        valueIndex++
      } else {
        maskedValue += mask[i]
      }
    }
    
    return maskedValue
  }

  // Real-time validation
  const validateInput = (value: string) => {
    if (!validationPattern) return true

    const isValid = validationPattern.test(value)
    const message = isValid ? undefined : validationMessage

    setValidationError(message)
    onValidation?.(isValid, message)
    
    return isValid
  }

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value

    // Apply character limit
    if (characterLimit && newValue.length > characterLimit) {
      newValue = newValue.slice(0, characterLimit)
    }

    // Apply mask
    if (mask) {
      newValue = applyMask(newValue.replace(/\D/g, ''), mask)
    }

    setInternalValue(newValue)
    onChange?.(newValue)
    
    // Validate on change
    if (validationPattern && newValue) {
      validateInput(newValue)
    }
  }

  // Handle focus
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  // Handle blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    onBlur?.(e)
    
    // Validate on blur
    if (validationPattern && internalValue) {
      validateInput(internalValue)
    }
  }

  // Clear input
  const handleClear = () => {
    setInternalValue('')
    onChange?.('')
    setValidationError(undefined)
    inputRef.current?.focus()
  }

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Sync external value changes
  useEffect(() => {
    if (value !== internalValue) {
      setInternalValue(value?.toString() || '')
    }
  }, [value, internalValue])

  const inputType = type === 'password' && showPassword ? 'text' : type
  const hasError = error || validationError
  const showCharacterCount = characterLimit && isFocused
  const currentLength = internalValue.length

  return (
    <div className={cn("space-y-1", className)}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          ref={inputRef}
          id={inputId}
          type={inputType}
          value={internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled || loading}
          required={required}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
            hasError 
              ? "border-red-500 dark:border-red-400" 
              : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500",
            disabled && "opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900",
            leftIcon && "pl-10",
            (rightIcon || clearable || showPasswordToggle || loading) && "pr-10",
            isFocused && !hasError && "ring-2 ring-purple-500 border-transparent"
          )}
          aria-describedby={cn(
            ariaDescribedBy,
            helperText && helperId,
            hasError && errorId
          )}
          aria-invalid={!!hasError}
          {...props}
        />

        {/* Right Side Icons */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {loading && (
            <div className="animate-spin w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full" />
          )}
          
          {clearable && internalValue && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          
          {showPasswordToggle && type === 'password' && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1 text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
          
          {rightIcon && !clearable && !showPasswordToggle && !loading && (
            <div className="text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
      </div>

      {/* Helper Text, Error, or Character Count */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {hasError ? (
            <motion.div
              id={errorId}
              className="text-sm text-red-500 dark:text-red-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
            >
              {error || validationError}
            </motion.div>
          ) : helperText ? (
            <div 
              id={helperId}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {helperText}
            </div>
          ) : null}
        </div>
        
        {showCharacterCount && (
          <div className={cn(
            "text-sm ml-2",
            currentLength > characterLimit * 0.9 
              ? "text-red-500 dark:text-red-400" 
              : "text-gray-500 dark:text-gray-400"
          )}>
            {currentLength}/{characterLimit}
          </div>
        )}
      </div>
    </div>
  )
}