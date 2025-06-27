'use client'

import { useState } from 'react'
import { ChevronDown, Search, Globe } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-purple-500 text-2xl font-bold">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 35H5L20 5Z" fill="#A100FF"/>
                </svg>
              </div>
              <span className="text-white font-medium text-lg">accenture</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-white hover:text-purple-300 cursor-pointer">
              <span>What we do</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="text-white hover:text-purple-300 cursor-pointer">
              <span>What we think</span>
            </div>
            <div className="flex items-center space-x-1 text-white hover:text-purple-300 cursor-pointer">
              <span>Who we are</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-white hover:text-purple-300 cursor-pointer">
              <span>Careers</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-white hover:text-purple-300 cursor-pointer" />
            <div className="flex items-center space-x-1 text-white hover:text-purple-300 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="text-sm">USA</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <div className="w-4 h-0.5 bg-white" />
              <div className="w-4 h-0.5 bg-white" />
              <div className="w-4 h-0.5 bg-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-2 space-y-4">
            <div className="text-white">What we do</div>
            <div className="text-white">What we think</div>
            <div className="text-white">Who we are</div>
            <div className="text-white">Careers</div>
          </div>
        </div>
      )}
    </header>
  )
}
