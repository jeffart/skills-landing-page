const testimonials = [
  {
    initials: 'SR',
    name: 'Sophie R.',
    role: 'COO, Nexlify',
    quote:
      'AutomateAI cut our onboarding time by 60%. The workflow automation is genuinely plug-and-play — we were live in two days.',
  },
  {
    initials: 'MK',
    name: 'Marcus K.',
    role: 'Founder, DataStack',
    quote:
      'The AI chatbot handles 80% of our support tickets without any human touch. Our team can finally focus on what matters.',
  },
  {
    initials: 'AL',
    name: 'Amara L.',
    role: 'Head of Ops, Veldra',
    quote:
      'We integrated AutomateAI with our CRM in an afternoon. The reporting dashboards alone are worth every cent.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: 'var(--ink-1)', padding: '100px 0', borderTop: '1px solid var(--bdr)' }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>
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
            02
          </span>
          <div>
            <div className="label mb-3">Client Results</div>
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
              Trusted by Teams<br />
              That Move Fast
            </h2>
            <p
              style={{
                fontFamily: 'var(--fm)',
                fontSize: '13px',
                color: 'var(--cr-2)',
                margin: 0,
                lineHeight: 1.8,
              }}
            >
              Trusted by teams that move fast and automate smarter.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="tcard flex flex-col gap-6">
              {/* Quote */}
              <p
                style={{
                  fontFamily: 'var(--fm)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'var(--cr-2)',
                  lineHeight: 1.85,
                  margin: 0,
                  paddingRight: '24px',
                }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--bdr-hi)' }} />

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '36px', height: '36px',
                    background: 'var(--amber-lo)',
                    border: '1px solid var(--amber)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--fd)',
                      fontWeight: 800,
                      fontSize: '13px',
                      color: 'var(--amber-hi)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--fd)',
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--cr)',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--fm)',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--mt)',
                      margin: '3px 0 0',
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
