export default function Hero() {
  return (
    <section className="bg-[#0f1117] min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Automate Your Business<br />with AI
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            We help companies streamline their operations using cutting-edge AI automation — saving time, reducing costs, and scaling faster.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border border-gray-500 hover:border-white text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: image placeholder */}
        <div className="bg-[#1e2130] rounded-xl flex flex-col items-center justify-center h-72 md:h-80 border border-white/10">
          <svg
            className="w-10 h-10 text-gray-500 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
            <path d="M3 9l4-4 4 4 4-6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <p className="text-gray-500 text-sm">Image Coming Soon</p>
        </div>
      </div>
    </section>
  )
}
