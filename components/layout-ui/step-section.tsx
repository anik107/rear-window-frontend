"use client";

export default function StepsSection() {
  return (
    <section className="bg-[#f0f7ff] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            Three Simple Steps to Certainty
          </h2>
          <p className="text-gray-600 text-base">
            Moving from instinct to data-driven confidence has never been easier.
          </p>
        </div>

        {/* Steps Container - Full width for line, contained for cards */}
        <div className="relative h-[400px] md:h-[320px]">
          {/* SVG Connecting Line - FULL WIDTH, touches screen edges */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-full pointer-events-none hidden md:block z-0"
            viewBox="0 0 1400 320"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            {/* Line starts from left edge, goes through cards, ends at right edge */}
            <path
              d="M -100 160 L 350 280 L 700 80 L 1050 280 L 1500 160"
              stroke="url(#lineGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Step 1 - Search Address (Bottom Left) */}
          <div className="absolute left-0 top-[60%] md:top-[50%] z-10 w-full md:w-[340px]">
            <div 
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: "rgba(202, 226, 255, 0.85)" }}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Search Address
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Enter any property address or ZIP code to start your evaluation. No mandatory onboarding or account creation is required to begin your journey.
              </p>
            </div>
            {/* Pill marker below */}
            <div className="flex justify-center mt-3">
              <div className="w-6 h-10 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full" />
            </div>
          </div>

          {/* Step 2 - View Core Status (Top Center) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[5%] md:top-[0%] z-10 w-full md:w-[300px]">
            <div 
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: "rgba(202, 226, 255, 0.85)" }}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                View Core Status
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Explore crime levels, environmental conditions, safety insights, and nearby schools, hospitals, and So on.
              </p>
            </div>
            {/* Pill marker below - on the line */}
            <div className="flex justify-center mt-2">
              <div className="w-8 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-80" />
            </div>
          </div>

          {/* Step 3 - Take Decisions (Bottom Right) */}
          <div className="absolute right-0 top-[60%] md:top-[50%] z-10 w-full md:w-[340px]">
            <div 
              className="rounded-xl p-6 shadow-sm"
              style={{ backgroundColor: "rgba(202, 226, 255, 0.85)" }}
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Take Decisions
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Make confident relocation decisions backed by real, local insights—so every move is informed, not uncertain.
              </p>
            </div>
            {/* Pill marker below */}
            <div className="flex justify-center mt-3">
              <div className="w-6 h-10 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}