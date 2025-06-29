'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AnimatedBackground() {
  const bgWrapRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const bgWrap = bgWrapRef.current
    if (!bgWrap) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      
      bgWrap.style.setProperty('--cursor-x', x + 'px')
      bgWrap.style.setProperty('--cursor-y', y + 'px')
    }

    // Add event listener to the entire document for better tracking
    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={bgWrapRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        '--cursor-x': '50%',
        '--cursor-y': '50%'
      } as React.CSSProperties}
    >
      {/* Main background wrapper */}
      <div className="bg-wrap">
        {/* Tiled background pattern */}
        <div className="bg-tiles" />
      </div>
      
      {/* Bottom overlay gradient */}
      <div className="home-hero-bg-bottom-overlay" />

      <style jsx>{`
        .bg-wrap {
          z-index: -1;
          background-color: ${theme === 'dark' ? '#222326' : '#f8f9fa'};
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
        }

        .bg-wrap::before {
          content: "";
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          opacity: 1;
          will-change: background, opacity;
          transition-duration: 400ms;
          transition-timing-function: ease;
          transition-delay: 0s;
          transition-property: opacity;
          background-image: radial-gradient(
            600px at var(--cursor-x) var(--cursor-y), 
            ${theme === 'dark' 
              ? 'rgba(255, 254, 241, 0.15)' 
              : 'rgba(168, 85, 247, 0.1)'
            }, 
            transparent 40%
          );
          background-size: auto;
          background-origin: padding-box;
          z-index: 1;
        }

        .bg-tiles {
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg width='142' height='71' viewBox='0 0 142 71' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71 0L142 35.5L71 71L0 35.5L71 0Z' fill='${theme === 'dark' ? '%23333' : '%23f0f0f0'}' fill-opacity='0.1'/%3E%3C/svg%3E");
          background-position: 50% 0;
          background-repeat: repeat;
          background-size: 142px 71px;
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
        }

        .home-hero-bg-bottom-overlay {
          z-index: -1;
          height: 250px;
          background-image: linear-gradient(
            ${theme === 'dark' 
              ? 'rgba(0, 0, 0, 0), #000000 36%' 
              : 'rgba(255, 255, 255, 0), #ffffff 36%'
            }
          );
          position: absolute;
          top: auto;
          bottom: 0%;
          left: 0%;
          right: 0%;
        }

        /* Enhanced visual effects */
        @media (prefers-reduced-motion: no-preference) {
          .bg-wrap::before {
            transition: background-image 0.3s ease;
          }
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .bg-wrap::before {
            background-image: radial-gradient(
              400px at var(--cursor-x) var(--cursor-y), 
              ${theme === 'dark' 
                ? 'rgba(255, 254, 241, 0.1)' 
                : 'rgba(168, 85, 247, 0.08)'
              }, 
              transparent 40%
            );
          }
          
          .bg-tiles {
            background-size: 100px 50px;
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}