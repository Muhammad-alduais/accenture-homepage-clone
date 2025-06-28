'use client'

import { useEffect, useRef, useState } from 'react'

interface Disc {
  x: number
  y: number
  w: number
  h: number
  p: number
}

interface Particle {
  x: number
  y: number
  sx: number
  dx: number
  vy: number
  p: number
  r: number
  c: string
}

interface RenderConfig {
  width: number
  height: number
  dpi: number
}

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Detect mobile devices and reduce complexity
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      
      // Disable on very small screens or low-end devices
      if (window.innerWidth < 480 || (mobile && window.devicePixelRatio > 2)) {
        setIsVisible(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !isVisible) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true })
    if (!ctx) return

    let animationId: number
    let discs: Disc[] = []
    let particles: Particle[] = []
    let rect: DOMRect
    let render: RenderConfig
    let startDisc: Disc
    let endDisc: Disc
    let clip: { disc: Disc; path: Path2D; i: number }
    let particleArea: { sw: number; ew: number; h: number; sx: number; ex: number }
    let lastTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    // Easing function
    const easeInExpo = (t: number) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1))

    const setSize = () => {
      if (!containerRef.current || !canvas) return
      
      rect = containerRef.current.getBoundingClientRect()
      const dpi = isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio || 1
      
      render = {
        width: rect.width,
        height: rect.height,
        dpi
      }

      canvas.width = render.width * render.dpi
      canvas.height = render.height * render.dpi
      canvas.style.width = `${render.width}px`
      canvas.style.height = `${render.height}px`
      ctx.scale(render.dpi, render.dpi)
    }

    const tweenValue = (start: number, end: number, p: number, ease = false) => {
      const delta = end - start
      const easeFn = ease ? easeInExpo : (t: number) => t
      return start + delta * easeFn(p)
    }

    const setDiscs = () => {
      const { width, height } = rect
      discs = []

      startDisc = {
        x: width * 0.5,
        y: height * 0.45,
        w: width * 0.75,
        h: height * 0.7,
        p: 0
      }

      endDisc = {
        x: width * 0.5,
        y: height * 0.95,
        w: 0,
        h: 0,
        p: 1
      }

      // Reduce disc count on mobile
      const totalDiscs = isMobile ? 50 : 100
      let prevBottom = height

      for (let i = 0; i < totalDiscs; i++) {
        const p = i / totalDiscs
        const disc = tweenDisc({ ...startDisc, p })
        const bottom = disc.y + disc.h

        if (bottom <= prevBottom && !clip) {
          clip = {
            disc: { ...disc },
            i,
            path: new Path2D()
          }
          
          clip.path.ellipse(
            clip.disc.x,
            clip.disc.y,
            clip.disc.w,
            clip.disc.h,
            0,
            0,
            Math.PI * 2
          )

          clip.path.rect(
            clip.disc.x - clip.disc.w,
            0,
            clip.disc.w * 2,
            clip.disc.y
          )
        }

        prevBottom = bottom
        discs.push(disc)
      }
    }

    const setParticles = () => {
      if (!clip) return
      
      const { width, height } = rect
      particles = []

      particleArea = {
        sw: clip.disc.w * 0.5,
        ew: clip.disc.w * 2,
        h: height * 0.85,
        sx: 0,
        ex: 0
      }

      particleArea.sx = (width - particleArea.sw) / 2
      particleArea.ex = (width - particleArea.ew) / 2

      // Reduce particle count on mobile
      const totalParticles = isMobile ? 30 : 100

      for (let i = 0; i < totalParticles; i++) {
        const particle = initParticle(true)
        particles.push(particle)
      }
    }

    const initParticle = (start = false): Particle => {
      const sx = particleArea.sx + particleArea.sw * Math.random()
      const ex = particleArea.ex + particleArea.ew * Math.random()
      const dx = ex - sx
      const vx = 0.1 + Math.random() * 0.5
      const y = start ? particleArea.h * Math.random() : particleArea.h
      const r = 0.5 + Math.random() * (isMobile ? 2 : 4)
      const vy = 0.5 + Math.random()

      return {
        x: sx,
        sx,
        dx,
        y,
        vy,
        p: 0,
        r,
        c: `rgba(255, 255, 255, ${Math.random() * 0.8})`
      }
    }

    const tweenDisc = (disc: Disc): Disc => {
      return {
        ...disc,
        x: tweenValue(startDisc.x, endDisc.x, disc.p),
        y: tweenValue(startDisc.y, endDisc.y, disc.p, true),
        w: tweenValue(startDisc.w, endDisc.w, disc.p),
        h: tweenValue(startDisc.h, endDisc.h, disc.p)
      }
    }

    const drawDiscs = () => {
      if (!clip) return
      
      ctx.strokeStyle = isMobile ? "#333" : "#444"
      ctx.lineWidth = isMobile ? 1 : 2

      // Outer disc
      ctx.beginPath()
      ctx.ellipse(
        startDisc.x,
        startDisc.y,
        startDisc.w,
        startDisc.h,
        0,
        0,
        Math.PI * 2
      )
      ctx.stroke()

      // Draw fewer discs on mobile
      const step = isMobile ? 8 : 5
      discs.forEach((disc, i) => {
        if (i % step !== 0) return

        if (disc.w < clip.disc.w - 5) {
          ctx.save()
          ctx.clip(clip.path)
        }

        ctx.beginPath()
        ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2)
        ctx.stroke()

        if (disc.w < clip.disc.w - 5) {
          ctx.restore()
        }
      })
    }

    const drawParticles = () => {
      if (!clip) return
      
      ctx.save()
      ctx.clip(clip.path)

      particles.forEach(particle => {
        ctx.fillStyle = particle.c
        ctx.beginPath()
        ctx.rect(particle.x, particle.y, particle.r, particle.r)
        ctx.fill()
      })

      ctx.restore()
    }

    const moveDiscs = () => {
      const speed = isMobile ? 0.0005 : 0.001
      discs.forEach(disc => {
        disc.p = (disc.p + speed) % 1
        Object.assign(disc, tweenDisc(disc))
      })
    }

    const moveParticles = () => {
      particles.forEach(particle => {
        particle.p = 1 - particle.y / particleArea.h
        particle.x = particle.sx + particle.dx * particle.p
        particle.y -= particle.vy * (isMobile ? 0.5 : 1)

        if (particle.y < 0) {
          const newParticle = initParticle()
          particle.y = newParticle.y
        }
      })
    }

    const tick = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(tick)
        return
      }

      lastTime = currentTime

      ctx.clearRect(0, 0, render.width, render.height)

      moveDiscs()
      moveParticles()
      drawDiscs()
      drawParticles()

      animationId = requestAnimationFrame(tick)
    }

    const init = () => {
      setSize()
      setDiscs()
      setParticles()
      tick(0)
    }

    const handleResize = () => {
      setSize()
      setDiscs()
      setParticles()
    }

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout
    const throttledResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 250)
    }

    window.addEventListener('resize', throttledResize)
    init()

    return () => {
      window.removeEventListener('resize', throttledResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      clearTimeout(resizeTimeout)
    }
  }, [isMobile, isVisible])

  // Don't render on very small screens or when disabled
  if (!isVisible) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
        {/* Simple gradient fallback for mobile */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-purple-600/30 rounded-full blur-3xl" />
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <canvas 
        ref={canvasRef}
        className="block w-full h-full"
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)' // Force hardware acceleration
        }}
      />
      
      {/* Simplified aura effect for mobile */}
      <div 
        className={`absolute top-[-71.5%] left-1/2 z-[3] rounded-b-full opacity-75 mix-blend-plus-lighter ${
          isMobile ? 'w-[40%] h-[120%] blur-[30px]' : 'w-[30%] h-[140%] blur-[50px]'
        }`}
        style={{
          background: isMobile 
            ? 'linear-gradient(20deg, #00f8f1, #fe848f, #ffbd1e)'
            : 'linear-gradient(20deg, #00f8f1, #ffbd1e20 16.5%, #fe848f 33%, #fe848f20 49.5%, #00f8f1 66%, #00f8f160 85.5%, #ffbd1e 100%) 0 100%/100% 200%',
          transform: 'translate3d(-50%, 0, 0)',
          animation: isMobile ? 'none' : 'aura-glow 5s infinite linear'
        }}
      />
      
      {/* Black hole gradient overlay */}
      <div 
        className={`absolute top-1/2 left-1/2 z-[2] block ${
          isMobile ? 'w-[120%] h-[120%]' : 'w-[150%] h-[140%]'
        }`}
        style={{
          background: 'radial-gradient(ellipse at 50% 55%, transparent 10%, rgba(0,0,0,0.8) 50%)',
          transform: 'translate3d(-50%, -50%, 0)'
        }}
      />
      
      {/* Purple glow overlay */}
      <div 
        className="absolute top-1/2 left-1/2 z-[5] block w-full h-full mix-blend-overlay"
        style={{
          background: 'radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%)',
          transform: 'translate3d(-50%, -50%, 0)'
        }}
      />
      
      {/* Simplified scanline overlay for mobile */}
      {!isMobile && (
        <div 
          className="absolute top-0 left-0 z-[10] w-full h-full mix-blend-overlay opacity-30"
          style={{
            background: 'repeating-linear-gradient(transparent, transparent 2px, white 2px, white 3px)'
          }}
        />
      )}

      <style jsx>{`
        @keyframes aura-glow {
          0% { background-position: 0 100%; }
          100% { background-position: 0 300%; }
        }
      `}</style>
    </div>
  )
}