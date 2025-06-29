'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

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

interface ClipData {
  disc: Disc
  i: number
  path: Path2D
}

export default function AccentureBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const { theme } = useTheme()

  // Animation state
  const stateRef = useRef({
    discs: [] as Disc[],
    lines: [] as number[][][],
    particles: [] as Particle[],
    startDisc: { x: 0, y: 0, w: 0, h: 0 },
    endDisc: { x: 0, y: 0, w: 0, h: 0 },
    clip: {} as ClipData,
    particleArea: { sx: 0, ex: 0, sw: 0, ew: 0, h: 0 },
    linesCanvas: null as OffscreenCanvas | null,
    rect: { width: 0, height: 0 },
    render: { width: 0, height: 0, dpi: 1 }
  })

  // Easing functions
  const easing = {
    linear: (t: number) => t,
    inExpo: (t: number) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1))
  }

  const tweenValue = useCallback((start: number, end: number, p: number, ease = 'linear') => {
    const delta = end - start
    const easeFn = easing[ease as keyof typeof easing] || easing.linear
    return start + delta * easeFn(p)
  }, [])

  const tweenDisc = useCallback((disc: Disc) => {
    const state = stateRef.current
    disc.x = tweenValue(state.startDisc.x, state.endDisc.x, disc.p)
    disc.y = tweenValue(state.startDisc.y, state.endDisc.y, disc.p, 'inExpo')
    disc.w = tweenValue(state.startDisc.w, state.endDisc.w, disc.p)
    disc.h = tweenValue(state.startDisc.h, state.endDisc.h, disc.p)
    return disc
  }, [tweenValue])

  const setSize = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const state = stateRef.current

    state.rect = { width: rect.width, height: rect.height }
    state.render = {
      width: rect.width,
      height: rect.height,
      dpi: window.devicePixelRatio || 1
    }

    canvas.width = state.render.width * state.render.dpi
    canvas.height = state.render.height * state.render.dpi
    canvas.style.width = `${state.render.width}px`
    canvas.style.height = `${state.render.height}px`
  }, [])

  const setDiscs = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    state.discs = []

    state.startDisc = {
      x: width * 0.5,
      y: height * 0.45,
      w: width * 0.375, // Half of 0.75
      h: height * 0.35   // Half of 0.7
    }

    state.endDisc = {
      x: width * 0.5,
      y: height * 0.95,
      w: 0,
      h: 0
    }

    const totalDiscs = 100
    let prevBottom = height

    for (let i = 0; i < totalDiscs; i++) {
      const p = i / totalDiscs
      const disc = { x: 0, y: 0, w: 0, h: 0, p }
      tweenDisc(disc)

      const bottom = disc.y + disc.h

      if (bottom <= prevBottom) {
        state.clip = {
          disc: { ...disc },
          i,
          path: new Path2D()
        }
      }

      prevBottom = bottom
      state.discs.push(disc)
    }

    // Create clip path
    if (state.clip.disc) {
      state.clip.path = new Path2D()
      state.clip.path.ellipse(
        state.clip.disc.x,
        state.clip.disc.y,
        state.clip.disc.w,
        state.clip.disc.h,
        0,
        0,
        Math.PI * 2
      )
      state.clip.path.rect(
        state.clip.disc.x - state.clip.disc.w,
        0,
        state.clip.disc.w * 2,
        state.clip.disc.y
      )
    }
  }, [tweenDisc])

  const setLines = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    state.lines = []
    const totalLines = 50 // Reduced for performance
    const linesAngle = (Math.PI * 2) / totalLines

    for (let i = 0; i < totalLines; i++) {
      state.lines.push([])
    }

    state.discs.forEach((disc) => {
      for (let i = 0; i < totalLines; i++) {
        const angle = i * linesAngle
        const p = {
          x: disc.x + Math.cos(angle) * disc.w,
          y: disc.y + Math.sin(angle) * disc.h
        }
        state.lines[i].push([p.x, p.y])
      }
    })

    // Create lines canvas
    if (typeof OffscreenCanvas !== 'undefined') {
      state.linesCanvas = new OffscreenCanvas(width, height)
    }
  }, [])

  const setParticles = useCallback(() => {
    const state = stateRef.current
    const { width, height } = state.rect

    if (!state.clip.disc) return

    state.particles = []
    state.particleArea = {
      sw: state.clip.disc.w * 0.5,
      ew: state.clip.disc.w * 2,
      h: height * 0.85,
      sx: 0,
      ex: 0
    }
    state.particleArea.sx = (width - state.particleArea.sw) / 2
    state.particleArea.ex = (width - state.particleArea.ew) / 2

    const totalParticles = 50 // Reduced for performance

    for (let i = 0; i < totalParticles; i++) {
      const particle = initParticle(true)
      state.particles.push(particle)
    }
  }, [])

  const initParticle = useCallback((start = false): Particle => {
    const state = stateRef.current
    const sx = state.particleArea.sx + state.particleArea.sw * Math.random()
    const ex = state.particleArea.ex + state.particleArea.ew * Math.random()
    const dx = ex - sx
    const y = start ? state.particleArea.h * Math.random() : state.particleArea.h
    const r = 0.5 + Math.random() * 2
    const vy = 0.5 + Math.random()

    return {
      x: sx,
      sx,
      dx,
      y,
      vy,
      p: 0,
      r,
      c: `rgba(${theme === 'dark' ? '255, 255, 255' : '100, 100, 100'}, ${0.3 + Math.random() * 0.7})`
    }
  }, [theme])

  const drawDiscs = useCallback((ctx: CanvasRenderingContext2D) => {
    const state = stateRef.current
    
    ctx.strokeStyle = theme === 'dark' ? '#444' : '#ccc'
    ctx.lineWidth = 1

    // Outer disc
    const outerDisc = state.startDisc
    ctx.beginPath()
    ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()

    // Inner discs
    state.discs.forEach((disc, i) => {
      if (i % 10 !== 0) return // Reduced frequency for performance

      if (state.clip.disc && disc.w < state.clip.disc.w - 5) {
        ctx.save()
        ctx.clip(state.clip.path)
      }

      ctx.beginPath()
      ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.closePath()

      if (state.clip.disc && disc.w < state.clip.disc.w - 5) {
        ctx.restore()
      }
    })
  }, [theme])

  const drawLines = useCallback((ctx: CanvasRenderingContext2D) => {
    const state = stateRef.current
    
    ctx.strokeStyle = theme === 'dark' ? '#333' : '#ddd'
    ctx.lineWidth = 1

    state.lines.forEach((line, i) => {
      if (i % 3 !== 0) return // Reduced frequency for performance

      ctx.save()
      let lineIsIn = false

      line.forEach((point, j) => {
        if (j === 0) return

        const [x1, y1] = point
        const [x0, y0] = line[j - 1]

        if (!lineIsIn && state.clip.path && ctx.isPointInPath(state.clip.path, x1, y1)) {
          lineIsIn = true
        } else if (lineIsIn && state.clip.path) {
          ctx.clip(state.clip.path)
        }

        ctx.beginPath()
        ctx.moveTo(x0, y0)
        ctx.lineTo(x1, y1)
        ctx.stroke()
        ctx.closePath()
      })

      ctx.restore()
    })
  }, [theme])

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    const state = stateRef.current
    
    if (!state.clip.path) return

    ctx.save()
    ctx.clip(state.clip.path)

    state.particles.forEach((particle) => {
      ctx.fillStyle = particle.c
      ctx.beginPath()
      ctx.rect(particle.x, particle.y, particle.r, particle.r)
      ctx.fill()
      ctx.closePath()
    })

    ctx.restore()
  }, [])

  const moveDiscs = useCallback(() => {
    const state = stateRef.current
    state.discs.forEach((disc) => {
      disc.p = (disc.p + 0.0005) % 1 // Slower animation
      tweenDisc(disc)
    })
  }, [tweenDisc])

  const moveParticles = useCallback(() => {
    const state = stateRef.current
    state.particles.forEach((particle, index) => {
      particle.p = 1 - particle.y / state.particleArea.h
      particle.x = particle.sx + particle.dx * particle.p
      particle.y -= particle.vy

      if (particle.y < 0) {
        state.particles[index] = initParticle()
      }
    })
  }, [initParticle])

  const tick = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const state = stateRef.current

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.scale(state.render.dpi, state.render.dpi)

    moveDiscs()
    moveParticles()

    drawDiscs(ctx)
    drawLines(ctx)
    drawParticles(ctx)

    ctx.restore()

    animationRef.current = requestAnimationFrame(tick)
  }, [moveDiscs, moveParticles, drawDiscs, drawLines, drawParticles])

  const initAnimation = useCallback(() => {
    setSize()
    setDiscs()
    setLines()
    setParticles()
    tick()
  }, [setSize, setDiscs, setLines, setParticles, tick])

  const handleResize = useCallback(() => {
    initAnimation()
  }, [initAnimation])

  useEffect(() => {
    initAnimation()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initAnimation, handleResize])

  // Restart animation when theme changes
  useEffect(() => {
    if (stateRef.current.particles.length > 0) {
      setParticles()
    }
  }, [theme, setParticles])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Canvas for the hole animation */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          display: 'block',
          background: 'transparent'
        }}
      />
      
      {/* Aura effect */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-1/3 h-full opacity-75 pointer-events-none"
        style={{
          background: `linear-gradient(20deg, 
            #00f8f1, 
            rgba(255, 189, 30, 0.2) 16.5%, 
            #fe848f 33%, 
            rgba(254, 132, 143, 0.2) 49.5%, 
            #00f8f1 66%, 
            rgba(0, 248, 241, 0.6) 85.5%, 
            #ffbd1e 100%) 0 100% / 100% 200%`,
          borderRadius: '0 0 100% 100%',
          filter: 'blur(50px)',
          mixBlendMode: 'plus-lighter',
          animation: 'aura-glow 5s infinite linear',
          zIndex: 2
        }}
      />
      
      {/* Overlay effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            transparent,
            transparent 1px,
            ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px,
            ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 2px
          )`,
          mixBlendMode: 'overlay',
          zIndex: 3
        }}
      />

      {/* Radial gradient overlays */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 55%, transparent 10%, ${theme === 'dark' ? 'black' : 'white'} 50%)`,
          zIndex: 4
        }}
      />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%)`,
          mixBlendMode: 'overlay',
          zIndex: 5
        }}
      />

      <style jsx>{`
        @keyframes aura-glow {
          0% {
            background-position: 0 100%;
          }
          100% {
            background-position: 0 300%;
          }
        }

        /* Performance optimizations */
        canvas {
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] {
            animation: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          canvas {
            opacity: 0.7;
          }
          
          div[style*="blur(50px)"] {
            filter: blur(30px) !important;
          }
        }
      `}</style>
    </div>
  )
}