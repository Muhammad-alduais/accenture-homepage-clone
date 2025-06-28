export default function CareersSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-purple-500 text-2xl font-bold">
                <svg width="50" height="50" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 35H5L20 5Z" fill="#A100FF"/>
                </svg>
              </div>
              <span className="text-purple-400 text-lg font-medium">Partnership</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Let's work together to transform your business
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to experience intelligent operations? Our ERP experts are here to guide your transformation journey with personalized solutions designed for your unique needs.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-900 dark:text-white">Free consultation and system assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-900 dark:text-white">Customized implementation roadmap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-900 dark:text-white">Dedicated success team support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg flex items-center justify-center">
                Talk to an ERP Expert
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg flex items-center justify-center">
                Schedule Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden rounded-lg">
                <img
                  src="https://ext.same-assets.com/2900598000/3918217455.jpeg"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Two smaller images */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://ext.same-assets.com/2900598000/958512902.jpeg"
                  alt="Digital transformation"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://ext.same-assets.com/2900598000/2573060216.jpeg"
                  alt="Business innovation"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Floating contact card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Ready to get started?</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Book a free consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
            <div className="text-gray-900 dark:text-white font-medium">Faster Implementation</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Than traditional ERP rollouts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">87%</div>
            <div className="text-gray-900 dark:text-white font-medium">User Adoption Rate</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Within 90 days of go-live</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-900 dark:text-white font-medium">Expert Support</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Dedicated success team</div>
          </div>
        </div>
      </div>
    </section>
  )
}