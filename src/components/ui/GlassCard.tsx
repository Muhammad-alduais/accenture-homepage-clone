'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children?: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  logo?: string
  url?: string
  gradient?: {
    from: string
    to: string
  }
  hover?: boolean
}

export default function GlassCard({
  children,
  className,
  title,
  subtitle,
  logo,
  url,
  gradient = { from: '#4942E4', to: '#00D1B2' },
  hover = true
}: GlassCardProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Background Card */}
      <div 
        className="absolute inset-0 rounded-xl shadow-lg transform translate-x-2 translate-y-2"
        style={{
          background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
        }}
      />
      
      {/* Glass Card */}
      <motion.div
        className="relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20 shadow-xl overflow-hidden"
        whileHover={hover ? { y: -2, scale: 1.02 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Glass Border Effects */}
        <div className="absolute inset-0 rounded-xl">
          <div 
            className="absolute inset-0 rounded-xl border border-white/50"
            style={{
              maskImage: 'linear-gradient(135deg, white, transparent 50%)',
              WebkitMaskImage: 'linear-gradient(135deg, white, transparent 50%)'
            }}
          />
          <div 
            className="absolute inset-0 rounded-xl border"
            style={{
              borderColor: gradient.from,
              maskImage: 'linear-gradient(135deg, transparent 50%, white)',
              WebkitMaskImage: 'linear-gradient(135deg, transparent 50%, white)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full">
          {title || subtitle || logo || url ? (
            <div 
              className="flex flex-wrap justify-between items-start h-full"
              style={{
                background: `
                  linear-gradient(transparent 3.125em, ${gradient.to} 3.375em, ${gradient.from} 4.5em) 0 0 / calc(100% - 2em) 50%,
                  linear-gradient(90deg, ${gradient.from} 13em, ${gradient.to} calc(100% - 2em), transparent 19.1em) 0 100% / 100% 50%,
                  linear-gradient(90deg, rgba(255,255,255,0.5) 4em, rgba(255,255,255,0.2)) 0 0 / 100% 100%
                `,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundRepeat: 'no-repeat',
                color: 'transparent'
              }}
            >
              {title && (
                <h3 className="text-xl font-bold leading-tight flex-1">
                  {title}
                </h3>
              )}
              {logo && (
                <div className="text-xl font-bold text-right w-1/4">
                  {logo}
                </div>
              )}
              {subtitle && (
                <p className="text-sm mt-2 w-full">
                  {subtitle}
                </p>
              )}
              {url && (
                <p className="text-xs self-end ml-auto">
                  {url}
                </p>
              )}
            </div>
          ) : (
            children
          )}
        </div>
      </motion.div>
    </div>
  )
}