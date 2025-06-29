'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function InteractiveGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const { theme } = useTheme()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    container.addEventListener('mousemove', handleMouseMove)

    // Grid parameters
    const gridSize = 40
    let time = 0

    // Animation loop
    const animate = () => {
      time += 0.01

      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Grid colors based on theme
      const baseColor = theme === 'dark' 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(0, 0, 0, 0.1)'
      const hoverColor = theme === 'dark'
        ? 'rgba(168, 85, 247, 0.4)'
        : 'rgba(168, 85, 247, 0.3)'
      const pulseColor = theme === 'dark'
        ? 'rgba(168, 85, 247, 0.6)'
        : 'rgba(168, 85, 247, 0.5)'

      // Draw grid lines
      ctx.strokeStyle = baseColor
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mousePos.x)
        const influence = Math.max(0, 1 - distanceFromMouse / 150)
        
        if (influence > 0) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 + influence * 0.3})`
          ctx.lineWidth = 1 + influence * 2
        } else {
          ctx.strokeStyle = baseColor
          ctx.lineWidth = 1
        }

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        const distanceFromMouse = Math.abs(y - mousePos.y)
        const influence = Math.max(0, 1 - distanceFromMouse / 150)
        
        if (influence > 0) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 + influence * 0.3})`
          ctx.lineWidth = 1 + influence * 2
        } else {
          ctx.strokeStyle = baseColor
          ctx.lineWidth = 1
        }

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw intersection dots
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          const distanceFromMouse = Math.sqrt(
            Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
          )
          
          if (distanceFromMouse < 100) {
            const influence = Math.max(0, 1 - distanceFromMouse / 100)
            const size = 2 + influence * 4
            const opacity = 0.3 + influence * 0.7
            
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()

            // Add glow effect for close dots
            if (influence > 0.5) {
              ctx.shadowColor = 'rgba(168, 85, 247, 0.8)'
              ctx.shadowBlur = 10 * influence
              ctx.beginPath()
              ctx.arc(x, y, size, 0, Math.PI * 2)
              ctx.fill()
              ctx.shadowBlur = 0
            }
          } else {
            // Regular intersection dots
            ctx.fillStyle = theme === 'dark' 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(0, 0, 0, 0.2)'
            ctx.beginPath()
            ctx.arc(x, y, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Draw animated pulse waves
      const pulseRadius = (time * 100) % 200
      const pulseOpacity = Math.max(0, 1 - pulseRadius / 200)
      
      if (pulseOpacity > 0) {
        ctx.strokeStyle = `rgba(168, 85, 247, ${pulseOpacity * 0.3})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(mousePos.x, mousePos.y, pulseRadius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw floating particles
      const particleCount = 20
      for (let i = 0; i < particleCount; i++) {
        const angle = (time + i) * 0.5
        const radius = 50 + Math.sin(time + i) * 20
        const x = mousePos.x + Math.cos(angle) * radius
        const y = mousePos.y + Math.sin(angle) * radius
        
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          const opacity = 0.3 + Math.sin(time * 2 + i) * 0.2
          ctx.fillStyle = `rgba(168, 85, 247, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme, mousePos.x, mousePos.y])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Static Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 0'
        }}
      />

      {/* Interactive Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
      />

      {/* Gradient Overlays */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${
            theme === 'dark' 
              ? 'rgba(168, 85, 247, 0.1)' 
              : 'rgba(168, 85, 247, 0.08)'
          } 0%, transparent 50%)`
        }}
      />

      {/* Corner Gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, ${
              theme === 'dark' 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(59, 130, 246, 0.05)'
            } 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, ${
              theme === 'dark' 
                ? 'rgba(168, 85, 247, 0.1)' 
                : 'rgba(168, 85, 247, 0.05)'
            } 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, ${
              theme === 'dark' 
                ? 'rgba(236, 72, 153, 0.1)' 
                : 'rgba(236, 72, 153, 0.05)'
            } 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, ${
              theme === 'dark' 
                ? 'rgba(34, 197, 94, 0.1)' 
                : 'rgba(34, 197, 94, 0.05)'
            } 0%, transparent 50%)
          `
        }}
      />

      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              ${theme === 'dark' ? 'rgba(168, 85, 247, 0.02)' : 'rgba(168, 85, 247, 0.01)'} 100px,
              ${theme === 'dark' ? 'rgba(168, 85, 247, 0.02)' : 'rgba(168, 85, 247, 0.01)'} 102px
            )
          `,
          animation: 'drift 20s linear infinite'
        }}
      />

      <style jsx>{`
        @keyframes drift {
          0% { transform: translateX(-100px) translateY(-100px); }
          100% { transform: translateX(100px) translateY(100px); }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          canvas {
            opacity: 0.7;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] {
            animation: none !important;
          }
          
          canvas {
            display: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          div[style*="backgroundImage"] {
            background-image: 
              linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 1px) !important;
          }
        }

        /* Performance optimizations */
        canvas {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}