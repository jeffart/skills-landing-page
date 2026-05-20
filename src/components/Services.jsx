const IconWorkflow = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 014-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
)

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <circle cx="9" cy="11" r="0.5" fill="var(--amber)" stroke="none" />
    <circle cx="12" cy="11" r="0.5" fill="var(--amber)" stroke="none" />
    <circle cx="15" cy="11" r="0.5" fill="var(--amber)" stroke="none" />
  </svg>
)

const IconData = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

const services = [
  {
    Icon: IconWorkflow,
    num: '01',
    title: 'Workflow Automation',
    description:
      'Eliminate repetitive manual tasks with intelligent AI-driven workflows tailored to your business processes.',
  },
  {
    Icon: IconChat,
    num: '02',
    title: 'AI Chatbots',
    description:
      'Deploy 24/7 customer support bots that understand context and resolve queries without human intervention.',
  },
  {
    Icon: IconData,
    num: '03',
    title: 'Data Processing',
    description:
      'Automatically extract, transform, and analyse data from any source to power smarter business decisions.',
  },
  {
    Icon: IconMail,
    num: '04',
    title: 'Email / CRM',
    description:
      'Sync and automate your CRM and email pipelines so no lead or follow-up ever slips through the cracks.',
  },
  {
    Icon: IconLink,
    num: '05',
    title: 'Integrations',
    description:
      'Connect your existing tools — Slack, Notion, HubSpot, and more — into a single automated ecosystem.',
  },
  {
    Icon: IconChart,
    num: '06',
    title: 'Reporting',
    description:
      'Get real-time AI-generated reports and dashboards that surface the insights you actually need.',
  },
]

const tickerItems = [
  '500+ Automations Deployed',
  '200+ Clients Worldwide',
  '99.9% Uptime',
  '3× Average ROI',
  '60% Cost Reduction',
  '24/7 AI Support',
]

export default function Services() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <section id="services" style={{ background: 'var(--ink)', paddingBottom: '100px' }}>
      {/* ── Stats ticker ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {items.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--fm)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--cr-2)',
                padding: '0 40px',
              }}
            >
              {item}
              <span style={{ marginLeft: '40px', color: 'var(--amber)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Section content ── */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '80px 40px 0',
        }}
      >
        {/* Section header */}
        <div className="flex items-start gap-6 mb-16">
          <span
            style={{
              fontFamily: 'var(--fd)',
              fontWeight: 800,
              fontSize: '96px',
              color: 'var(--bdr)',
              lineHeight: 1,
              userSelect: 'none',
              flexShrink: 0,
              marginTop: '-12px',
            }}
          >
            01
          </span>
          <div>
            <div className="label mb-3">What We Offer</div>
            <h2
              style={{
                fontFamily: 'var(--fd)',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 50px)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 0.95,
                color: 'var(--cr)',
                margin: '0 0 16px',
              }}
            >
              AI-Powered Solutions<br />
              For Every Workflow
            </h2>
            <p
              style={{
                fontFamily: 'var(--fm)',
                fontSize: '13px',
                color: 'var(--cr-2)',
                maxWidth: '440px',
                margin: 0,
                lineHeight: 1.8,
              }}
            >
              From simple task automation to complex AI integrations, we build
              solutions that fit your workflow — not the other way around.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: '1px solid var(--bdr)', background: 'var(--bdr)' }}>
          {services.map(({ Icon, num, title, description }) => (
            <div key={title} className="scard">
              <div className="flex items-start justify-between mb-5">
                <Icon />
                <span
                  style={{
                    fontFamily: 'var(--fd)',
                    fontWeight: 800,
                    fontSize: '28px',
                    color: 'var(--bdr-hi)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {num}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--fd)',
                  fontWeight: 700,
                  fontSize: '22px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--cr)',
                  margin: '0 0 10px',
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--fm)',
                  fontSize: '12px',
                  color: 'var(--cr-2)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
