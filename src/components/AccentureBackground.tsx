'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function AccentureBackground() {
  const bgWrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
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

  useEffect(() => {
    // Ensure video plays when component mounts
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
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
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{
          zIndex: 1,
          opacity: theme === 'dark' ? 0.3 : 0.2,
          filter: theme === 'dark' ? 'brightness(0.4) contrast(1.2)' : 'brightness(1.2) contrast(0.8)',
          transition: 'opacity 0.3s ease, filter 0.3s ease'
        }}
      >
        {/* Multiple video sources for better compatibility */}
        <source 
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" 
          type="video/mp4" 
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Video overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${
            theme === 'dark' 
              ? 'rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%'
              : 'rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.7) 100%'
          })`,
          zIndex: 2
        }}
      />
      
      {/* Animated tile pattern overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='142' height='71' viewBox='0 0 142 71' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H71V71H0V0Z' fill='%23${theme === 'dark' ? 'ffffff' : '000000'}' fill-opacity='${theme === 'dark' ? '0.03' : '0.02'}'/%3E%3C/svg%3E")`,
          backgroundPosition: '50% 0',
          backgroundRepeat: 'repeat',
          backgroundSize: '142px 71px',
          opacity: theme === 'dark' ? 0.2 : 0.15,
          transition: 'opacity 0.3s ease',
          zIndex: 3
        }}
      />
      
      {/* Interactive mouse-following gradient */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), ${
            theme === 'dark' 
              ? 'rgba(168, 85, 247, 0.2)' 
              : 'rgba(168, 85, 247, 0.15)'
          }, transparent 40%)`,
          zIndex: 4
        }}
      />
      
      {/* Bottom fade overlay for content transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `linear-gradient(to top, ${
            theme === 'dark' ? '#000000' : '#ffffff'
          } 0%, ${
            theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          } 50%, transparent 100%)`,
          zIndex: 5
        }}
      />

      {/* Additional animated elements for visual depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse 800px 400px at 20% 80%, ${
            theme === 'dark' ? 'rgba(120, 119, 198, 0.3)' : 'rgba(168, 85, 247, 0.2)'
          }, transparent)`,
          animation: 'float 8s ease-in-out infinite',
          zIndex: 3
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          background: `radial-gradient(ellipse 600px 300px at 80% 20%, ${
            theme === 'dark' ? 'rgba(255, 154, 158, 0.2)' : 'rgba(236, 72, 153, 0.15)'
          }, transparent)`,
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 3
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-30px) scale(1.1) rotate(2deg); 
            opacity: 0.2;
          }
        }

        /* Video performance optimizations */
        video {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          video {
            opacity: ${theme === 'dark' ? '0.2' : '0.15'} !important;
          }
          
          div[style*="radial-gradient(600px"] {
            background: radial-gradient(400px circle at var(--cursor-x) var(--cursor-y), ${
              theme === 'dark' 
                ? 'rgba(168, 85, 247, 0.15)' 
                : 'rgba(168, 85, 247, 0.1)'
            }, transparent 40%) !important;
          }
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          div[style*="radial-gradient(600px"] {
            background: radial-gradient(circle at 50% 50%, ${
              theme === 'dark' 
                ? 'rgba(168, 85, 247, 0.1)' 
                : 'rgba(168, 85, 247, 0.08)'
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
          
          video {
            animation: none !important;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          video {
            filter: contrast(2) brightness(0.8) !important;
          }
        }

        /* Data saver mode - pause video */
        @media (prefers-reduced-data: reduce) {
          video {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}