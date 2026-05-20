const stats = [
  { num: '500+', label: 'Automations' },
  { num: '200+', label: 'Clients' },
  { num: '99.9%', label: 'Uptime' },
]

export default function Hero() {
  return (
    <section
      style={{
        background: 'var(--ink)',
        minHeight: '100vh',
        paddingTop: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(var(--bdr) 1px, transparent 1px), linear-gradient(90deg, var(--bdr) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.6,
        }}
      />
      {/* Radial amber glow */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 48% 38%, rgba(197,137,58,0.055) 0%, transparent 65%)',
        }}
      />

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '80px 40px',
          minHeight: 'calc(100vh - 60px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Left column ── */}
        <div className="flex flex-col gap-8">
          {/* Section label */}
          <div className="label a-up">AI Automation Agency</div>

          {/* Headline */}
          <h1
            className="a-up d1"
            style={{
              fontFamily: 'var(--fd)',
              fontWeight: 800,
              textTransform: 'uppercase',
              lineHeight: 0.93,
              margin: 0,
              color: 'var(--cr)',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(56px, 6.5vw, 88px)' }}>
              Automate
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(56px, 6.5vw, 88px)' }}>
              Your
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(56px, 6.5vw, 88px)',
                color: 'var(--amber)',
              }}
            >
              Business
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 4.5vw, 60px)',
                color: 'var(--cr-2)',
                marginTop: '4px',
              }}
            >
              — with AI
            </span>
          </h1>

          {/* Description */}
          <p
            className="a-up d2"
            style={{
              fontFamily: 'var(--fm)',
              fontSize: '13px',
              color: 'var(--cr-2)',
              lineHeight: 1.85,
              maxWidth: '380px',
              margin: 0,
            }}
          >
            We help companies streamline their operations using cutting-edge AI
            automation — saving time, reducing costs, and scaling faster.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 a-up d3">
            <a href="#services" className="btn btn-solid">Get Started →</a>
            <a href="#services" className="btn btn-ghost">Learn More</a>
          </div>

          {/* Stats */}
          <div
            className="flex gap-10 a-up d4"
            style={{
              paddingTop: '28px',
              borderTop: '1px solid var(--bdr)',
              marginTop: '4px',
            }}
          >
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--fd)',
                    fontWeight: 800,
                    fontSize: '38px',
                    color: 'var(--cr)',
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--fm)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--mt)',
                    marginTop: '6px',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Image placeholder (preserved) ── */}
        <div className="a-up d2" style={{ position: 'relative' }}>
          {/* Corner accents */}
          <div
            style={{
              position: 'absolute', top: '-12px', right: '-12px',
              width: '44px', height: '44px',
              borderTop: '2px solid var(--amber)',
              borderRight: '2px solid var(--amber)',
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: '-12px', left: '-12px',
              width: '44px', height: '44px',
              borderBottom: '2px solid var(--amber)',
              borderLeft: '2px solid var(--amber)',
            }}
          />

          <img
            src="/hero-team.jpg"
            alt="Modern team working with AI dashboards"
            style={{
              width: '100%',
              borderRadius: '0',
              objectFit: 'cover',
              height: '340px',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
