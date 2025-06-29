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

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
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
      {/* Background Video - Ready for Accenture's video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{
          zIndex: 1,
          opacity: theme === 'dark' ? 0.4 : 0.3,
          filter: theme === 'dark' ? 'brightness(0.6) contrast(1.1)' : 'brightness(1.1) contrast(0.9)',
          transition: 'opacity 0.3s ease, filter 0.3s ease'
        }}
      >
        {/* 
          TO USE ACCENTURE'S ACTUAL VIDEO:
          1. Download the video from Accenture's website (ensure you have permission)
          2. Place it in your public folder: /public/videos/accenture-bg.mp4
          3. Replace the src below with: "/videos/accenture-bg.mp4"
          
          Current placeholder videos (replace these):
        */}
        <source 
          src="/videos/accenture-bg.mp4" 
          type="video/mp4" 
        />
        {/* Fallback videos while you get Accenture's video */}
        <source 
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Accenture-style overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${
            theme === 'dark' 
              ? 'rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%'
              : 'rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.6) 100%'
          })`,
          zIndex: 2
        }}
      />
      
      {/* Accenture's signature tile pattern */}
      <div 
        className="bg-tiles"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/du6mfjbbd/image/upload/v1702421944/632835c8722a32c6adef674b_bg-tile_fhldhc.svg')",
          backgroundPosition: '50% 0',
          backgroundRepeat: 'repeat',
          backgroundSize: '142px 71px',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: theme === 'dark' ? 0.15 : 0.1,
          transition: 'opacity 0.3s ease',
          zIndex: 3
        }}
      />
      
      {/* Interactive gradient following cursor */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), ${
            theme === 'dark' 
              ? 'rgba(255, 254, 241, 0.15)' 
              : 'rgba(168, 85, 247, 0.12)'
          }, transparent 40%)`,
          zIndex: 4
        }}
      />
      
      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `linear-gradient(to top, ${
            theme === 'dark' ? '#000000' : '#ffffff'
          } 0%, ${
            theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'
          } 36%, transparent 100%)`,
          zIndex: 5
        }}
      />

      <style jsx>{`
        /* Video performance optimizations */
        video {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Hover effects */
        .bg-tiles:hover {
          opacity: ${theme === 'dark' ? '0.2' : '0.15'};
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          video {
            opacity: ${theme === 'dark' ? '0.3' : '0.2'} !important;
          }
          
          .bg-tiles {
            background-size: 100px 50px;
            opacity: ${theme === 'dark' ? '0.1' : '0.08'} !important;
          }
          
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

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .bg-tiles {
            opacity: ${theme === 'dark' ? '0.3' : '0.25'} !important;
          }
          
          video {
            filter: contrast(1.5) brightness(0.7) !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          div[style*="transition"] {
            transition: none !important;
          }
          
          video {
            animation: none !important;
          }
        }

        /* Data saver mode */
        @media (prefers-reduced-data: reduce) {
          video {
            display: none;
          }
        }

        /* Enhanced visual effects for better interaction */
        @media (prefers-reduced-motion: no-preference) {
          div[style*="radial-gradient(600px"] {
            transition: background-image 0.3s ease, opacity 0.3s ease;
          }
          
          .bg-tiles {
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
        }
      `}</style>
    </div>
  )
}