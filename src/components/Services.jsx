const services = [
  {
    icon: '🤖',
    title: 'Workflow Automation',
    description:
      'Eliminate repetitive manual tasks with intelligent AI-driven workflows tailored to your business processes.',
  },
  {
    icon: '💬',
    title: 'AI Chatbots',
    description:
      'Deploy 24/7 customer support bots that understand context and resolve queries without human intervention.',
  },
  {
    icon: '📊',
    title: 'Data Processing',
    description:
      'Automatically extract, transform, and analyse data from any source to power smarter business decisions.',
  },
  {
    icon: '✉️',
    title: 'Email / CRM',
    description:
      'Sync and automate your CRM and email pipelines so no lead or follow-up ever slips through the cracks.',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description:
      'Connect your existing tools — Slack, Notion, HubSpot, and more — into a single automated ecosystem.',
  },
  {
    icon: '📈',
    title: 'Reporting',
    description:
      'Get real-time AI-generated reports and dashboards that surface the insights you actually need.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-8"
      style={{
        background:
          'linear-gradient(135deg, #e8f0fe 0%, #fce4ec 25%, #f3e5f5 50%, #e8f5e9 75%, #fff9e6 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From simple task automation to complex AI integrations, we build solutions that fit your
            workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/80 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
