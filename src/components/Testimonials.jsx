const testimonials = [
  {
    initials: 'SR',
    name: 'Sophie R.',
    role: 'COO, Nexlify',
    quote:
      '"AutomateAI cut our onboarding time by 60%. The workflow automation is genuinely plug-and-play — we were live in two days."',
  },
  {
    initials: 'MK',
    name: 'Marcus K.',
    role: 'Founder, DataStack',
    quote:
      '"The AI chatbot handles 80% of our support tickets without any human touch. Our team can finally focus on what matters."',
  },
  {
    initials: 'AL',
    name: 'Amara L.',
    role: 'Head of Ops, Veldra',
    quote:
      '"We integrated AutomateAI with our CRM in an afternoon. The reporting dashboards alone are worth every cent."',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0f1117] py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">Trusted by teams that move fast and automate smarter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1a1d2e] rounded-xl p-6 border border-white/10 flex flex-col gap-4"
            >
              <p className="text-gray-300 text-sm leading-relaxed italic">{t.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
