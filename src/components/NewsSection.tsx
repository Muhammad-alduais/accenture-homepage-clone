'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function NewsSection() {
  const [currentNews, setCurrentNews] = useState(0)

  const news = [
    {
      date: "January 06, 2025",
      title: "Accenture Launches AI Refinery for Industry to Reinvent Processes and Accelerate Agentic AI Journeys",
      link: "#"
    },
    {
      date: "January 07, 2025",
      title: "Accenture Technology Vision 2025: New Age of AI to Bring Unprecedented Autonomy to Business",
      link: "#"
    },
    {
      date: "March 18, 2025",
      title: "Accenture Expands AI Refinery and Launches New Industry Agent Solutions to Accelerate Agentic AI Adoption",
      link: "#"
    },
    {
      date: "April 01, 2025",
      title: "Accenture and Schaeffler Pave the Way for Industrial Humanoid Robots with NVIDIA and Microsoft Technologies",
      link: "#"
    },
    {
      date: "May 13, 2025",
      title: "Telstra and Accenture Launch Silicon Valley Hub to Rapidly Advance Benefits of AI for Telstra Customers and People",
      link: "#"
    },
    {
      date: "June 20, 2025",
      title: "Accenture Reports Third-Quarter Fiscal 2025 Results",
      link: "#"
    }
  ]

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % news.length)
  }

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + news.length) % news.length)
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Accenture news
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured News */}
          <div>
            <div className="text-gray-400 text-sm mb-2">
              {news[currentNews].date}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {news[currentNews].title}
            </h3>
            <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors">
              <Play className="w-5 h-5" />
            </button>
          </div>

          {/* News List */}
          <div className="space-y-8">
            {news.slice(1, 4).map((item) => (
              <div key={item.title} className="border-b border-gray-800 pb-6">
                <div className="text-gray-400 text-sm mb-2">
                  {item.date}
                </div>
                <h4 className="text-xl font-semibold text-white hover:text-purple-300 cursor-pointer transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end mt-12 space-x-4">
          <button
            onClick={prevNews}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextNews}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* App Download Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Like this content?
          </h3>
          <p className="text-xl text-white mb-8">
            Stay ahead of change by downloading the Accenture Foresight App.
          </p>
          <div className="flex justify-center space-x-4">
            <img
              src="https://ext.same-assets.com/2900598000/4220347965.png"
              alt="Download on App Store"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://ext.same-assets.com/2900598000/4220347965.png"
              alt="Get it on Google Play"
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
