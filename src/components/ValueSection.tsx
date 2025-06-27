export default function ValueSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
          360° VALUE
        </h2>
        <p className="text-2xl md:text-3xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
          Every day, we embrace change and create value
          <br />
          for all our stakeholders around the world.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center mx-auto">
          See the report
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
