export default function ContentGrid() {
  const content = [
    {
      type: "RESEARCH REPORT",
      title: "Resilience redefined: From readiness to reinvention",
      description: "Resilience appears to be rebounding to post-pandemic highs, but the gains mask a deeper vulnerability. Increased volatility requires adaptative resilience for competitiveness and growth.",
      image: "https://ext.same-assets.com/2900598000/4049787973.jpeg",
      link: "#"
    },
    {
      type: "RESEARCH REPORT",
      title: "Trying to scale AI? You're going to need to think big. And act bigger.",
      description: "The race to reinvent with generative AI is well underway. The time to determine if you're leading or being left behind is now. Discover the front-runners' guide to scaling AI.",
      image: "https://ext.same-assets.com/2900598000/36195040.jpeg",
      link: "#"
    },
    {
      type: "RESEARCH REPORT",
      title: "Are you ready for autonomous supply chains?",
      description: "Companies are seeing diminishing returns from classic business efficiency strategies. To create value, supply chains need to be fast, agile and sustainable, not just cost-efficient. Could AI-powered autonomy be the key to unlocking this?",
      image: "https://ext.same-assets.com/2900598000/1611683462.jpeg",
      link: "#"
    },
    {
      type: "RESEARCH REPORT",
      title: "Redefining the workplace through human, AI and robotic collaboration",
      description: "Accenture and Wharton are partnering to study how human strengths can be combined with AI and robotics, exploring the implications for individuals, economies, organizations and society.",
      image: "https://ext.same-assets.com/2900598000/3804182897.png",
      link: "#"
    },
    {
      type: "RESEARCH REPORT",
      title: "Me, my brand and AI: The new world of consumer engagement",
      description: "AI is evolving from a useful tool to a trusted guide, loyal companion and second self. Building resilient relationships between consumers, brands and AI in times of uncertainty is essential to remain seen and relevant.",
      image: "https://ext.same-assets.com/2900598000/3993689749.jpeg",
      link: "#"
    },
    {
      type: "CASE STUDY",
      title: "How the National Cyber Security Centre defends the UK's digital frontier",
      description: "The next phase of its protective domain name service blocks over 350 million threats a month, ensuring a safer digital future for UK services, people and organizations.",
      image: "https://ext.same-assets.com/2900598000/177288228.jpeg",
      link: "#"
    },
    {
      type: "RESEARCH REPORT",
      title: "The art of dealmaking in the age of AI",
      description: "New technologies can transform dealmaking—but only when firms move beyond ad hoc adoption and apply them in structured fashion. Three things separate advantaged acquirers from their peers and enable them to unlock alpha.",
      image: "https://ext.same-assets.com/2900598000/396614146.jpeg",
      link: "#"
    },
    {
      type: "CASE STUDY",
      title: "Revolutionizing the UAE's payment systems",
      description: "The United Arab Emirates is embarking on a bold transition toward a connected, digital-first economy, reinventing its financial services ecosystem and positioning itself as a leading FinTech hub.",
      image: "https://ext.same-assets.com/2900598000/3965891193.jpeg",
      link: "#"
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded">
                    {item.type}
                  </span>
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                Expand
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
