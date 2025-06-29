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
      className="absolute inset-0 overflow-hidden z-0"
      style={{
        '--cursor-x': '50vw',
        '--cursor-y': '50vh'
      } as React.CSSProperties}
    >
      {/* Main background layer */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f8f9fa',
          zIndex: 1
        }}
      />
      
      {/* Animated tile pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='142' height='71' viewBox='0 0 142 71' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H71V71H0V0Z' fill='%23${theme === 'dark' ? 'ffffff' : '000000'}' fill-opacity='${theme === 'dark' ? '0.05' : '0.03'}'/%3E%3C/svg%3E")`,
          backgroundPosition: '50% 0',
          backgroundRepeat: 'repeat',
          backgroundSize: '142px 71px',
          opacity: theme === 'dark' ? 0.3 : 0.2,
          transition: 'opacity 0.3s ease',
          zIndex: 2
        }}
      />
      
      {/* Interactive mouse-following gradient */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), ${
            theme === 'dark' 
              ? 'rgba(255, 254, 241, 0.15)' 
              : 'rgba(168, 85, 247, 0.12)'
          }, transparent 40%)`,
          zIndex: 3
        }}
      />
      
      {/* Bottom fade overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `linear-gradient(to top, ${
            theme === 'dark' ? '#000000' : '#ffffff'
          }, transparent)`,
          zIndex: 4
        }}
      />

      {/* Additional animated elements for more visual interest */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse 800px 400px at 20% 80%, ${
            theme === 'dark' ? 'rgba(120, 119, 198, 0.1)' : 'rgba(168, 85, 247, 0.05)'
          }, transparent)`,
          animation: 'float 6s ease-in-out infinite',
          zIndex: 2
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse 600px 300px at 80% 20%, ${
            theme === 'dark' ? 'rgba(255, 154, 158, 0.1)' : 'rgba(236, 72, 153, 0.05)'
          }, transparent)`,
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 2
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          div[style*="radial-gradient(600px"] {
            background: radial-gradient(400px circle at var(--cursor-x) var(--cursor-y), ${
              theme === 'dark' 
                ? 'rgba(255, 254, 241, 0.1)' 
                : 'rgba(168, 85, 247, 0.08)'
            }, transparent 40%) !important;
          }
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          div[style*="radial-gradient(600px"] {
            background: radial-gradient(circle at 50% 50%, ${
              theme === 'dark' 
                ? 'rgba(255, 254, 241, 0.08)' 
                : 'rgba(168, 85, 247, 0.06)'
            }, transparent 60%) !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] {
            animation: none !important;
          }
          
          div[style*="transition"] {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}