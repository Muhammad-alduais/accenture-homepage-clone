'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function BlackHoleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Black hole animation parameters
    let time = 0
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      angle: number
      distance: number
      originalDistance: number
    }> = []

    // Create particles
    const createParticles = () => {
      particles.length = 0
      const particleCount = Math.min(150, Math.floor(canvas.width * canvas.height / 8000))
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.8 + 100
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        
        particles.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: 0,
          vy: 0,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: theme === 'dark' 
            ? `hsl(${Math.random() * 60 + 200}, 70%, ${Math.random() * 30 + 50}%)` // Blues and purples
            : `hsl(${Math.random() * 60 + 260}, 60%, ${Math.random() * 20 + 30}%)`, // Darker purples
          angle,
          distance,
          originalDistance: distance
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      time += 0.016 // ~60fps

      // Clear canvas with fade effect
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const blackHoleRadius = 80

      // Draw black hole event horizon
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, blackHoleRadius * 2)
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
        gradient.addColorStop(0.3, 'rgba(20, 0, 40, 0.9)')
        gradient.addColorStop(0.6, 'rgba(60, 0, 120, 0.6)')
        gradient.addColorStop(0.8, 'rgba(100, 50, 200, 0.3)')
        gradient.addColorStop(1, 'rgba(150, 100, 255, 0.1)')
      } else {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.9)')
        gradient.addColorStop(0.3, 'rgba(40, 20, 60, 0.7)')
        gradient.addColorStop(0.6, 'rgba(80, 40, 120, 0.5)')
        gradient.addColorStop(0.8, 'rgba(120, 80, 180, 0.3)')
        gradient.addColorStop(1, 'rgba(160, 120, 220, 0.1)')
      }

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, blackHoleRadius * 2, 0, Math.PI * 2)
      ctx.fill()

      // Draw accretion disk
      for (let i = 0; i < 3; i++) {
        const diskRadius = blackHoleRadius * (2.5 + i * 0.8)
        const diskGradient = ctx.createRadialGradient(centerX, centerY, diskRadius * 0.7, centerX, centerY, diskRadius)
        
        if (theme === 'dark') {
          diskGradient.addColorStop(0, `rgba(255, 150, 50, ${0.3 - i * 0.1})`)
          diskGradient.addColorStop(0.5, `rgba(255, 100, 150, ${0.2 - i * 0.05})`)
          diskGradient.addColorStop(1, 'rgba(100, 50, 200, 0)')
        } else {
          diskGradient.addColorStop(0, `rgba(200, 100, 50, ${0.4 - i * 0.1})`)
          diskGradient.addColorStop(0.5, `rgba(150, 50, 100, ${0.3 - i * 0.05})`)
          diskGradient.addColorStop(1, 'rgba(80, 40, 120, 0)')
        }

        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(time * (0.5 + i * 0.2))
        ctx.fillStyle = diskGradient
        ctx.beginPath()
        ctx.ellipse(0, 0, diskRadius, diskRadius * 0.3, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Gravitational pull
        const force = Math.min(5000 / (distance * distance), 10)
        const angle = Math.atan2(dy, dx)
        
        // Add spiral motion
        const spiralForce = 0.02
        const spiralAngle = angle + Math.PI / 2
        
        particle.vx += Math.cos(angle) * force + Math.cos(spiralAngle) * spiralForce
        particle.vy += Math.sin(angle) * force + Math.sin(spiralAngle) * spiralForce
        
        // Apply velocity with damping
        particle.vx *= 0.99
        particle.vy *= 0.99
        
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Reset particle if it gets too close to black hole or too far
        if (distance < blackHoleRadius || distance > Math.max(canvas.width, canvas.height)) {
          const newAngle = Math.random() * Math.PI * 2
          const newDistance = Math.random() * Math.min(canvas.width, canvas.height) * 0.6 + 200
          particle.x = centerX + Math.cos(newAngle) * newDistance
          particle.y = centerY + Math.sin(newAngle) * newDistance
          particle.vx = 0
          particle.vy = 0
          particle.opacity = Math.random() * 0.8 + 0.2
        }
        
        // Draw particle with trail effect
        const trailLength = 5
        for (let i = 0; i < trailLength; i++) {
          const trailX = particle.x - particle.vx * i * 2
          const trailY = particle.y - particle.vy * i * 2
          const trailOpacity = particle.opacity * (1 - i / trailLength) * 0.7
          
          ctx.fillStyle = particle.color.replace(')', `, ${trailOpacity})`)
          ctx.beginPath()
          ctx.arc(trailX, trailY, particle.size * (1 - i / trailLength * 0.5), 0, Math.PI * 2)
          ctx.fill()
        }
        
        // Draw main particle
        ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add glow effect for particles near the black hole
        if (distance < blackHoleRadius * 3) {
          const glowIntensity = (1 - distance / (blackHoleRadius * 3)) * 0.5
          ctx.shadowColor = particle.color
          ctx.shadowBlur = 20 * glowIntensity
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Draw gravitational lensing effect
      const lensGradient = ctx.createRadialGradient(centerX, centerY, blackHoleRadius * 0.8, centerX, centerY, blackHoleRadius * 1.5)
      lensGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      lensGradient.addColorStop(0.7, theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')
      lensGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.fillStyle = lensGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, blackHoleRadius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Draw the actual black hole
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2)
      ctx.fill()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)'
            : 'radial-gradient(ellipse at center, #f8f9fa 0%, #e9ecef 100%)'
        }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 70%)'
            : 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.4) 70%)'
        }}
      />
    </div>
  )
}