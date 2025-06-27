export default function Awards() {
  const awards = [
    {
      color: "bg-red-600",
      title: "A Great Place to Work®",
      description: "Ranked No. 6 on the Great Place To Work World's Best Workplaces list.",
      details: "This recognition is based on feedback from our people—measuring their level of trust, pride and camaraderie at work.",
      link: "#"
    },
    {
      color: "bg-purple-700",
      title: "The Top Consulting Firm",
      description: "Earned the top spot among the World's Best Management Consulting Firms.",
      details: "Forbes recognized Accenture as the management consulting firm most recommended by consultants and clients, across industries and functional areas, around the world.",
      link: "#"
    },
    {
      color: "bg-blue-600",
      title: "An Influential Innovator",
      description: "Our Chair and CEO, Julie Sweet, ranked No. 2 on Fortune's Most Powerful Women in Business in 2025.",
      details: "Every day, Julie and all of us at Accenture help the world's leading companies embrace continuous reinvention, with innovation and people at the center.",
      link: "#"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          Global recognition
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          and awards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award) => (
            <div key={award.title} className={`${award.color} rounded-lg p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between`}>
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="1" fill="none" />
                  <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="1" fill="none" />
                  <circle cx="300" cy="300" r="80" stroke="white" strokeWidth="1" fill="none" />
                  <rect x="50" y="250" width="100" height="100" stroke="white" strokeWidth="1" fill="none" />
                  <rect x="250" y="50" width="120" height="120" stroke="white" strokeWidth="1" fill="none" />
                </svg>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {award.title}
                </h4>
                <p className="text-lg text-white mb-6 font-medium">
                  {award.description}
                </p>
                <p className="text-white text-sm leading-relaxed opacity-90">
                  {award.details}
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <button className="text-white hover:text-gray-200 font-medium flex items-center">
                  See related awards
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
