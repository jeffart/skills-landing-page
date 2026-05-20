export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12"
      style={{
        height: '60px',
        background: 'rgba(6,6,10,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--bdr)',
      }}
    >
      {/* Wordmark */}
      <a href="#" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="1" y="1" width="18" height="18" stroke="var(--amber)" strokeWidth="1.5" />
          <line x1="10" y1="1" x2="10" y2="19" stroke="var(--amber)" strokeWidth="1.5" />
          <line x1="1" y1="10" x2="19" y2="10" stroke="var(--amber)" strokeWidth="1.5" />
          <rect x="6.5" y="6.5" width="7" height="7" fill="var(--amber)" />
        </svg>
        <span
          style={{
            fontFamily: 'var(--fd)',
            fontWeight: 800,
            fontSize: '17px',
            letterSpacing: '.06em',
            textTransform: 'uppercase',
            color: 'var(--cr)',
          }}
        >
          Automate<span style={{ color: 'var(--amber)' }}>AI</span>
        </span>
      </a>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-9 m-0 p-0 list-none">
        {[
          ['Services', '#services'],
          ['Testimonials', '#testimonials'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={label}>
            <a href={href} className="nl">{label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="hidden md:block">
        <a href="#contact" className="btn btn-solid">
          Book a Call →
        </a>
      </div>
    </nav>
  )
}
