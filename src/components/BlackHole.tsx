'use client'

import { useEffect, useRef } from 'react'

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let discs: any[] = []
    let lines: any[] = []
    let particles: any[] = []
    let rect: DOMRect
    let render: any
    let startDisc: any
    let endDisc: any
    let clip: any
    let particleArea: any

    // Easing function
    const easeInExpo = (t: number) => t === 0 ? 0 : Math.pow(2, 10 * (t - 1))

    const setSize = () => {
      if (!containerRef.current || !canvas) return
      
      rect = containerRef.current.getBoundingClientRect()
      render = {
        width: rect.width,
        height: rect.height,
        dpi: window.devicePixelRatio || 1
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
        h: height * 0.7
      }

      endDisc = {
        x: width * 0.5,
        y: height * 0.95,
        w: 0,
        h: 0
      }

      const totalDiscs = 100
      let prevBottom = height
      clip = {}

      for (let i = 0; i < totalDiscs; i++) {
        const p = i / totalDiscs
        const disc = tweenDisc({ p })
        const bottom = disc.y + disc.h

        if (bottom <= prevBottom) {
          clip = {
            disc: { ...disc },
            i
          }
        }

        prevBottom = bottom
        discs.push(disc)
      }

      clip.path = new Path2D()
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

    const setLines = () => {
      const { width, height } = rect
      lines = []

      const totalLines = 100
      const linesAngle = Math.PI * 2 / totalLines

      for (let i = 0; i < totalLines; i++) {
        lines.push([])
      }

      discs.forEach(disc => {
        for (let i = 0; i < totalLines; i++) {
          const angle = i * linesAngle
          const p = {
            x: disc.x + Math.cos(angle) * disc.w,
            y: disc.y + Math.sin(angle) * disc.h
          }
          lines[i].push(p)
        }
      })
    }

    const setParticles = () => {
      const { width, height } = rect
      particles = []

      particleArea = {
        sw: clip.disc.w * 0.5,
        ew: clip.disc.w * 2,
        h: height * 0.85
      }

      particleArea.sx = (width - particleArea.sw) / 2
      particleArea.ex = (width - particleArea.ew) / 2

      const totalParticles = 100

      for (let i = 0; i < totalParticles; i++) {
        const particle = initParticle(true)
        particles.push(particle)
      }
    }

    const initParticle = (start = false) => {
      const sx = particleArea.sx + particleArea.sw * Math.random()
      const ex = particleArea.ex + particleArea.ew * Math.random()
      const dx = ex - sx
      const vx = 0.1 + Math.random() * 0.5
      const y = start ? particleArea.h * Math.random() : particleArea.h
      const r = 0.5 + Math.random() * 4
      const vy = 0.5 + Math.random()

      return {
        x: sx,
        sx,
        dx,
        y,
        vy,
        p: 0,
        r,
        c: `rgba(255, 255, 255, ${Math.random()})`
      }
    }

    const tweenDisc = (disc: any) => {
      disc.x = tweenValue(startDisc.x, endDisc.x, disc.p)
      disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, true)
      disc.w = tweenValue(startDisc.w, endDisc.w, disc.p)
      disc.h = tweenValue(startDisc.h, endDisc.h, disc.p)
      return disc
    }

    const drawDiscs = () => {
      ctx.strokeStyle = "#444"
      ctx.lineWidth = 2

      // Outer disc
      const outerDisc = startDisc
      ctx.beginPath()
      ctx.ellipse(
        outerDisc.x,
        outerDisc.y,
        outerDisc.w,
        outerDisc.h,
        0,
        0,
        Math.PI * 2
      )
      ctx.stroke()
      ctx.closePath()

      // Discs
      discs.forEach((disc, i) => {
        if (i % 5 !== 0) return

        if (disc.w < clip.disc.w - 5) {
          ctx.save()
          ctx.clip(clip.path)
        }

        ctx.beginPath()
        ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.closePath()

        if (disc.w < clip.disc.w - 5) {
          ctx.restore()
        }
      })
    }

    const drawLines = () => {
      lines.forEach((line) => {
        ctx.save()
        let lineIsIn = false

        line.forEach((p1: any, j: number) => {
          if (j === 0) return

          const p0 = line[j - 1]

          if (!lineIsIn && ctx.isPointInPath(clip.path, p1.x, p1.y)) {
            lineIsIn = true
          } else if (lineIsIn) {
            ctx.clip(clip.path)
          }

          ctx.beginPath()
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.strokeStyle = "#444"
          ctx.lineWidth = 2
          ctx.stroke()
          ctx.closePath()
        })

        ctx.restore()
      })
    }

    const drawParticles = () => {
      ctx.save()
      ctx.clip(clip.path)

      particles.forEach(particle => {
        ctx.fillStyle = particle.c
        ctx.beginPath()
        ctx.rect(particle.x, particle.y, particle.r, particle.r)
        ctx.closePath()
        ctx.fill()
      })

      ctx.restore()
    }

    const moveDiscs = () => {
      discs.forEach(disc => {
        disc.p = (disc.p + 0.001) % 1
        tweenDisc(disc)
      })
    }

    const moveParticles = () => {
      particles.forEach(particle => {
        particle.p = 1 - particle.y / particleArea.h
        particle.x = particle.sx + particle.dx * particle.p
        particle.y -= particle.vy

        if (particle.y < 0) {
          const newParticle = initParticle()
          particle.y = newParticle.y
        }
      })
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      moveDiscs()
      moveParticles()

      drawDiscs()
      drawLines()
      drawParticles()

      animationId = requestAnimationFrame(tick)
    }

    const init = () => {
      setSize()
      setDiscs()
      setLines()
      setParticles()
      tick()
    }

    const handleResize = () => {
      setSize()
      setDiscs()
      setLines()
      setParticles()
    }

    window.addEventListener('resize', handleResize)
    init()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'transparent'
      }}
    >
      <canvas 
        ref={canvasRef}
        className="block w-full h-full"
      />
      
      {/* Aura effect */}
      <div 
        className="absolute top-[-71.5%] left-1/2 z-[3] w-[30%] h-[140%] rounded-b-full opacity-75 mix-blend-plus-lighter blur-[50px]"
        style={{
          background: 'linear-gradient(20deg, #00f8f1, #ffbd1e20 16.5%, #fe848f 33%, #fe848f20 49.5%, #00f8f1 66%, #00f8f160 85.5%, #ffbd1e 100%) 0 100%/100% 200%',
          transform: 'translate3d(-50%, 0, 0)',
          animation: 'aura-glow 5s infinite linear'
        }}
      />
      
      {/* Black hole gradient overlay */}
      <div 
        className="absolute top-1/2 left-1/2 z-[2] block w-[150%] h-[140%]"
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
      
      {/* Scanline overlay */}
      <div 
        className="absolute top-0 left-0 z-[10] w-full h-full mix-blend-overlay opacity-50"
        style={{
          background: 'repeating-linear-gradient(transparent, transparent 1px, white 1px, white 2px)'
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
      `}</style>
    </div>
  )
}