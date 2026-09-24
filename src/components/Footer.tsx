const navigate = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Founder', href: '#founder' },
  { label: 'Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
];

const follow = [
  { label: 'X', href: 'https://x.com/0xSkamber' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/musa-sulaiman-8ba03b432/' },
  { label: 'Email', href: 'mailto:musa@usezipa.xyz' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)',
      }}
    >
      <button
        onClick={scrollToTop}
        className="w-full flex items-center justify-center gap-3 py-5 cursor-pointer bg-transparent border-none transition-all duration-300 group"
        style={{
          borderBottom: '1px solid var(--color-border)',
          color: 'var(--color-text-muted)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--color-bg-elevated)';
          e.currentTarget.style.color = 'var(--color-accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--color-text-muted)';
        }}
        data-hover
      >
        <span className="font-label">BACK TO TOP</span>
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
      </button>

      <div className="content-width py-12 md:py-16">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="flex items-center gap-1 mb-4">
              <span className="font-label tracking-widest" style={{ letterSpacing: '0.2em' }}>
                ONEDEV
              </span>
              <span className="font-label tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                STUDIOO
              </span>
            </div>
            <p className="font-caption mb-4" style={{ color: 'var(--color-text-muted)' }}>
              Design and software studio.
              <br />
              Registered in Nigeria, CAC BN 9704508.
            </p>
            <p className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
              KEBBI STATE / NIGERIA
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-6">
            <span className="font-label block mb-4" style={{ color: 'var(--color-text-muted)' }}>
              NAVIGATE
            </span>
            <div className="flex flex-col gap-3">
              {navigate.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link font-nav"
                  style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                  }}
                  data-hover
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <span className="font-label block mb-4" style={{ color: 'var(--color-text-muted)' }}>
              CONNECT
            </span>
            <div className="flex flex-col gap-3">
              {follow.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="nav-link font-nav"
                  style={{
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                  }}
                  data-hover
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-2">
            <span className="font-label block mb-4 mt-8 md:mt-0" style={{ color: 'var(--color-text-muted)' }}>
              STUDIO
            </span>
            <p className="font-mono text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Musa Sulaiman
              <br />
              Founder
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} OneDev Studioo. All rights reserved.
          </span>
          <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Kebbi State, Nigeria.
          </span>
        </div>
      </div>
    </footer>
  );
}
