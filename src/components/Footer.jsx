export default function Footer() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section
        style={{
          background: 'var(--ink-2)',
          borderTop: '1px solid var(--bdr)',
          borderBottom: '1px solid var(--bdr)',
          padding: '80px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage:
              'linear-gradient(var(--bdr) 1px, transparent 1px), linear-gradient(90deg, var(--bdr) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.5,
          }}
        />
        {/* Amber radial accent */}
        <div
          style={{
            position: 'absolute', inset: 0,
            background:
              'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(197,137,58,0.07) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '28px',
          }}
        >
          <div className="label" style={{ justifyContent: 'center' }}>
            Get Started Today
          </div>
          <h2
            style={{
              fontFamily: 'var(--fd)',
              fontWeight: 800,
              fontSize: 'clamp(38px, 5vw, 66px)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              color: 'var(--cr)',
              margin: 0,
            }}
          >
            Ready to Automate<br />
            <span style={{ color: 'var(--amber)' }}>Your Workflow?</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--fm)',
              fontSize: '13px',
              color: 'var(--cr-2)',
              maxWidth: '420px',
              margin: 0,
              lineHeight: 1.85,
            }}
          >
            Book a free 30-minute strategy call. We'll map out exactly which
            processes to automate first and what ROI you can expect.
          </p>
          <a href="mailto:hello@automateai.io" className="btn btn-solid" style={{ fontSize: '12px' }}>
            Book a Free Call →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        id="contact"
        style={{
          background: 'var(--ink)',
          borderTop: '1px solid var(--bdr)',
          padding: '60px 40px 0',
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          style={{ maxWidth: '1180px', margin: '0 auto' }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4" style={{ textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="1" width="18" height="18" stroke="var(--amber)" strokeWidth="1.5" />
                <line x1="10" y1="1" x2="10" y2="19" stroke="var(--amber)" strokeWidth="1.5" />
                <line x1="1" y1="10" x2="19" y2="10" stroke="var(--amber)" strokeWidth="1.5" />
                <rect x="6.5" y="6.5" width="7" height="7" fill="var(--amber)" />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--fd)',
                  fontWeight: 800,
                  fontSize: '16px',
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: 'var(--cr)',
                }}
              >
                Automate<span style={{ color: 'var(--amber)' }}>AI</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--fm)',
                fontSize: '12px',
                color: 'var(--mt)',
                lineHeight: 1.85,
                margin: 0,
                maxWidth: '240px',
              }}
            >
              AI-powered automation for modern businesses. Save time, cut costs,
              scale faster.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p
              style={{
                fontFamily: 'var(--fd)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cr)',
                margin: '0 0 20px',
              }}
            >
              Product
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Services', 'Testimonials', 'Pricing', 'Documentation'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Services' ? '#services' : item === 'Testimonials' ? '#testimonials' : '#'}
                    className="nl"
                    style={{ fontSize: '11px' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: 'var(--fd)',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cr)',
                margin: '0 0 20px',
              }}
            >
              Contact
            </p>
            <ul
              style={{
                listStyle: 'none', margin: 0, padding: 0,
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}
            >
              {[
                'hello@automateai.io',
                '+1 (555) 000-0000',
                'San Francisco, CA',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: 'var(--fm)',
                    fontSize: '11px',
                    color: 'var(--mt)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '48px auto 0',
            padding: '20px 0',
            borderTop: '1px solid var(--bdr)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--fm)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: 'var(--mt)',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} AutomateAI. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: 'var(--fm)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'var(--bdr-hi)',
              textTransform: 'uppercase',
            }}
          >
            Built with precision
          </span>
        </div>
      </footer>
    </>
  )
}
