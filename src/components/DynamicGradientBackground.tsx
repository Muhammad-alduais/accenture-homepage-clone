'use client'

import { useEffect, useState, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function DynamicGradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      // Return to center when mouse leaves
      setMousePosition({ x: 50, y: 50 })
    }

    container.addEventListener('mousemove', handleMouseMove, { passive: true })
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Theme-aware gradient colors
  const gradientColors = theme === 'dark' 
    ? {
        primary: 'rgba(168, 85, 247, 0.4)',    // Purple
        secondary: 'rgba(59, 130, 246, 0.3)',  // Blue
        tertiary: 'rgba(236, 72, 153, 0.3)',   // Pink
        quaternary: 'rgba(16, 185, 129, 0.2)', // Emerald
        background: 'rgba(0, 0, 0, 0.8)'
      }
    : {
        primary: 'rgba(168, 85, 247, 0.2)',    // Purple
        secondary: 'rgba(59, 130, 246, 0.15)', // Blue
        tertiary: 'rgba(236, 72, 153, 0.15)',  // Pink
        quaternary: 'rgba(16, 185, 129, 0.1)', // Emerald
        background: 'rgba(255, 255, 255, 0.6)'
      }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: gradientColors.background,
        cursor: 'none'
      }}
    >
      {/* Main Interactive Gradient */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%, 
              ${gradientColors.primary} 0%, 
              ${gradientColors.secondary} 25%, 
              ${gradientColors.tertiary} 50%, 
              ${gradientColors.quaternary} 75%, 
              transparent 100%
            )
          `,
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
          filter: isHovering ? 'blur(0px)' : 'blur(1px)',
          animation: 'gradient-breathe 8s ease-in-out infinite'
        }}
      />

      {/* Secondary Gradient Layer */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(
              ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
              ${gradientColors.secondary} 0%, 
              ${gradientColors.tertiary} 30%, 
              transparent 70%
            )
          `,
          animation: 'gradient-breathe 12s ease-in-out infinite reverse'
        }}
      />

      {/* Animated Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-30 animate-float"
          style={{
            background: `radial-gradient(circle, ${gradientColors.primary} 0%, transparent 70%)`,
            left: '10%',
            top: '20%',
            animationDelay: '0s',
            animationDuration: '6s'
          }}
        />
        
        {/* Orb 2 */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-25 animate-float"
          style={{
            background: `radial-gradient(circle, ${gradientColors.secondary} 0%, transparent 70%)`,
            right: '15%',
            top: '10%',
            animationDelay: '2s',
            animationDuration: '8s'
          }}
        />
        
        {/* Orb 3 */}
        <div
          className="absolute w-72 h-72 rounded-full opacity-20 animate-float"
          style={{
            background: `radial-gradient(circle, ${gradientColors.tertiary} 0%, transparent 70%)`,
            left: '20%',
            bottom: '15%',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        />
        
        {/* Orb 4 */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 animate-float"
          style={{
            background: `radial-gradient(circle, ${gradientColors.quaternary} 0%, transparent 70%)`,
            right: '25%',
            bottom: '20%',
            animationDelay: '1s',
            animationDuration: '7s'
          }}
        />
      </div>

      {/* Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            conic-gradient(
              from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
              ${gradientColors.primary}, 
              ${gradientColors.secondary}, 
              ${gradientColors.tertiary}, 
              ${gradientColors.quaternary}, 
              ${gradientColors.primary}
            )
          `,
          filter: 'blur(60px)',
          animation: 'gradient-rotate 20s linear infinite'
        }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px'
        }}
      />

      {/* Interactive Cursor Effect */}
      {isHovering && (
        <div
          className="absolute pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${gradientColors.primary} 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(20px)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />
      )}
    </div>
  )
}