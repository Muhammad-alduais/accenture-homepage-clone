export default function Footer() {
  const footerLinks = {
    leftColumn: [
      "Preference Center",
      "Careers",
      "About Us",
      "Contact Us",
      "Locations",
      "Sitemap"
    ],
    rightColumn: [
      "Privacy Statement",
      "Terms & Conditions",
      "Cookie Policy/Settings",
      "Accessibility Statement",
      "Do Not Sell/Share My Personal Information"
    ]
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let there be change
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {footerLinks.leftColumn.map((link) => (
                    <li key={link}>
                      <button className="text-gray-300 hover:text-white transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="space-y-4">
                  {footerLinks.rightColumn.map((link) => (
                    <li key={link}>
                      <button className="text-gray-300 hover:text-white transition-colors text-left">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Large Accenture Logo */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="text-white text-8xl md:text-9xl font-bold opacity-20">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="48" fill="white">
                  accenture
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 Accenture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
