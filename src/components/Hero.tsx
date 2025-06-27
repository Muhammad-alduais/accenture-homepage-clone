'use client'

import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://ext.same-assets.com/2900598000/2585685094.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
          Together We
          <br />
          <span className="italic">Reinvented</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
          The supply chains we need, the special effects that wow, the stadiums we fill,
          the food we eat, the clothes we wear, the cars we drive, the homes where we live,
          the holidays we take, the trees we grow—together, we can reinvent anything.
        </p>

        <div className="flex items-center justify-center space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">
            See what we do
          </button>
        </div>
      </div>

      {/* Play button for video */}
      <button className="absolute bottom-8 left-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all">
        <Play className="w-6 h-6 text-white" />
      </button>
    </section>
  )
}
