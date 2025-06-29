'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AccentureBackground() {
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
        {/* Interactive tiled background pattern */}
        <div className="bg-tiles" />
      </div>
      
      {/* Bottom overlay gradient */}
      <div className="home-hero-bg-bottom-overlay" />

      <style jsx>{`
        .bg-wrap {
          z-index: -1;
          background-color: ${theme === 'dark' ? '#0a0a0a' : '#f8f9fa'};
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
              : 'rgba(168, 85, 247, 0.12)'
            }, 
            transparent 40%
          );
          background-size: auto;
          background-origin: padding-box;
          z-index: 1;
        }

        .bg-tiles {
          z-index: 1;
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjcxIiB2aWV3Qm94PSIwIDAgMTQyIDcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAwSDcxVjcxSDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzEpIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHA+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMV8xIiB4MT0iMCIgeTE9IjAiIHgyPSI3MSIgeTI9IjcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K');
          background-position: 50% 0;
          background-repeat: repeat;
          background-size: 142px 71px;
          position: absolute;
          top: 0%;
          bottom: 0%;
          left: 0%;
          right: 0%;
          opacity: ${theme === 'dark' ? '0.3' : '0.2'};
          transition: opacity 0.3s ease;
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

        /* Enhanced visual effects for better interaction */
        @media (prefers-reduced-motion: no-preference) {
          .bg-wrap::before {
            transition: background-image 0.3s ease, opacity 0.3s ease;
          }
          
          .bg-tiles {
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
        }

        /* Hover effect enhancement */
        .bg-wrap:hover .bg-tiles {
          opacity: ${theme === 'dark' ? '0.4' : '0.3'};
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
            opacity: ${theme === 'dark' ? '0.2' : '0.15'};
          }
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          .bg-wrap::before {
            background-image: radial-gradient(
              circle at 50% 50%, 
              ${theme === 'dark' 
                ? 'rgba(255, 254, 241, 0.08)' 
                : 'rgba(168, 85, 247, 0.06)'
              }, 
              transparent 60%
            );
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-tiles {
            opacity: ${theme === 'dark' ? '0.5' : '0.4'};
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .bg-wrap::before,
          .bg-tiles {
            transition: none;
          }
        }
      `}</style>
    </div>
  )
}