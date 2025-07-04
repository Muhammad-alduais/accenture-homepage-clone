'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react'

export default function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "AI Refinery: Smarter, faster marketing",
      description: "Accenture's marketers can focus on more creative, strategic work with AI agents, thanks to a strong digital core that paved the way for agentic architecture.",
      image: "https://ext.same-assets.com/2900598000/3218290035.jpeg",
      link: "#"
    },
    {
      title: "The future of work is here",
      description: "Discover how leading organizations are transforming their workforce with AI and automation to create new opportunities for growth.",
      image: "https://ext.same-assets.com/2900598000/958512902.jpeg",
      link: "#"
    },
    {
      title: "Digital transformation at scale",
      description: "Learn how enterprises are leveraging cloud technologies and data analytics to drive innovation and competitive advantage.",
      image: "https://ext.same-assets.com/2900598000/2573060216.jpeg",
      link: "#"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.title} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                  <div className="order-2 lg:order-1 px-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center">
                      Read more
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
            <Pause className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-white font-medium">
              {currentSlide + 1}/{slides.length}
            </span>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
