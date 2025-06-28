'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function NewsSection() {
  const [currentNews, setCurrentNews] = useState(0)

  const news = [
    {
      date: "January 15, 2025",
      title: "MovinWare Launches AI-Powered ERP Suite with Built-in Automation",
      link: "#"
    },
    {
      date: "February 03, 2025",
      title: "Breaking Language Barriers: MovinWare Introduces True Bilingual ERP with RTL Support",
      link: "#"
    },
    {
      date: "February 20, 2025",
      title: "Speed-to-Value Revolution: MovinWare Achieves 50% Faster ERP Implementations",
      link: "#"
    },
    {
      date: "March 10, 2025",
      title: "Regional Expansion: MovinWare Opens New Innovation Hub in Dubai",
      link: "#"
    },
    {
      date: "March 25, 2025",
      title: "Industry Recognition: MovinWare Wins 'Best ERP Innovation' Award at TechMENA 2025",
      link: "#"
    },
    {
      date: "April 08, 2025",
      title: "Partnership Announcement: MovinWare Collaborates with Leading Cloud Providers",
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
          MovinWare updates
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

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to transform your operations?
          </h3>
          <p className="text-xl text-white mb-8">
            Connect with our ERP experts and discover how MovinWare can accelerate your digital transformation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
              Get Started Today
            </button>
            <button className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}