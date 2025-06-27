export default function CareersSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/2900598000/1677973729.svg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://ext.same-assets.com/2900598000/1677973729.svg"
              alt="Join us at the heart of change"
              className="h-16 mx-auto mb-4"
            />
            <span className="text-purple-400 text-lg font-medium">Careers</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Grow your career at the heart of change
          </h2>

          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            It's your time to shine. Bring your ingenuity, curiosity and big ideas.
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
            Join us
          </button>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        <img
          src="https://ext.same-assets.com/2900598000/3918217455.jpeg"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
