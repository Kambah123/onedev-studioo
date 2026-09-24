import { useScrollReveal } from '../hooks/useScrollReveal';

const links = [
  { label: 'GitHub', href: 'https://github.com/Kambah123' },
  { label: 'X', href: 'https://x.com/Skambermuser' },
  { label: 'Email', href: 'mailto:sulaimanmusa399@gmail.com' },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(8rem, 25vw, 25rem)',
          fontWeight: 300,
          color: 'var(--color-border-subtle)',
          opacity: 0.3,
          whiteSpace: 'nowrap',
          lineHeight: 0.85,
        }}
      >
        CONNECT
      </div>

      <div className="content-width relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="rule-accent" />
              <span className="font-label" style={{ color: 'var(--color-accent)' }}>
                CONTACT
              </span>
              <div className="rule-accent" />
            </div>

            <h2 className="font-h1 mb-6">
              Let's build something{' '}
              <span style={{ color: 'var(--color-accent)' }}>together.</span>
            </h2>

            <p className="font-body mb-12 max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              For a product, a site, or a conversation about Zipa — write to Musa directly.
            </p>

            <div
              className="inline-block group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s var(--ease-out-expo) 0.3s',
              }}
              data-hover
            >
              <a
                href="mailto:sulaimanmusa399@gmail.com"
                className="flex items-center gap-4 px-6 py-5 transition-all duration-400"
                style={{
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.background = 'var(--color-accent-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span className="font-h3 text-left break-all">sulaimanmusa399@gmail.com</span>
                <span
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  →
                </span>
              </a>
            </div>

            <div
              className="flex items-center justify-center gap-8 mt-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s var(--ease-out-expo) 0.5s',
              }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="nav-link font-nav"
                  style={{
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                  data-hover
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
