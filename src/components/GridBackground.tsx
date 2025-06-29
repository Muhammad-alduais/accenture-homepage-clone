'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      
      container.style.setProperty('--cursor-x', x + 'px')
      container.style.setProperty('--cursor-y', y + 'px')
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        '--cursor-x': '50%',
        '--cursor-y': '50%'
      } as React.CSSProperties}
    >
      {/* Grid Background */}
      <div className="grid-background" />
      
      {/* Interactive Glow Effect */}
      <div className="interactive-glow" />

      <style jsx>{`
        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${theme === 'dark' ? '#0a0a0a' : '#ffffff'};
          background-image: 
            linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 1;
          z-index: -2;
        }

        .interactive-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            600px circle at var(--cursor-x) var(--cursor-y),
            ${theme === 'dark' 
              ? 'rgba(59, 130, 246, 0.2)' 
              : 'rgba(168, 85, 247, 0.15)'
            },
            transparent 40%
          );
          z-index: -1;
          transition: opacity 0.3s ease;
          opacity: 1;
        }

        /* Enhanced grid pattern for better visibility */
        @media (max-width: 768px) {
          .grid-background {
            background-size: 30px 30px;
            background-image: 
              linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px);
          }
          
          .interactive-glow {
            background: radial-gradient(
              400px circle at var(--cursor-x) var(--cursor-y),
              ${theme === 'dark' 
                ? 'rgba(59, 130, 246, 0.15)' 
                : 'rgba(168, 85, 247, 0.12)'
              },
              transparent 40%
            );
          }
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          .interactive-glow {
            background: radial-gradient(
              circle at 50% 50%,
              ${theme === 'dark' 
                ? 'rgba(59, 130, 246, 0.12)' 
                : 'rgba(168, 85, 247, 0.1)'
              },
              transparent 60%
            );
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .interactive-glow {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .grid-background {
            background-image: 
              linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'} 1px, transparent 1px);
          }
        }

        /* Hover enhancement */
        .grid-background:hover {
          background-image: 
            linear-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px);
        }
      `}</style>
    </div>
  )
}