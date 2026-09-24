import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'FOUNDER', href: '#founder' },
  { label: 'LAB', href: '#lab' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-4'
            : 'py-6'
        }`}
        style={{
          background: scrolled
            ? 'rgba(5, 5, 5, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        }}
      >
        <div className="content-width flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
            data-hover
          >
            <div className="flex items-center gap-1">
              <span
                className="font-label tracking-widest"
                style={{ letterSpacing: '0.2em' }}
              >
                ONEDEV
              </span>
              <span className="font-label tracking-widest text-[var(--color-text-muted)]">
                STUDIOO
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="nav-link font-nav uppercase tracking-wide cursor-pointer bg-transparent border-none"
                style={{ letterSpacing: '0.08em', fontSize: '0.75rem' }}
                data-hover
              >
                {link.label}
              </button>
            ))}
            <div
              className="w-px h-4 mx-2"
              style={{ background: 'var(--color-border)' }}
            />
            <span
              className="font-mono text-[0.6875rem]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              KEBBI, NG
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2"
            data-hover
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
              style={{ background: 'var(--color-text)' }}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
              style={{ background: 'var(--color-text)' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(5, 5, 5, 0.97)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-4xl tracking-tight cursor-pointer bg-transparent border-none"
              style={{
                color: 'var(--color-text)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s var(--ease-out-expo) ${i * 0.08 + 0.1}s`,
              }}
            >
              {link.label}
            </button>
          ))}
          <div
            className="mt-8 font-mono text-sm"
            style={{
              color: 'var(--color-text-muted)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s var(--ease-out-expo) 0.5s`,
            }}
          >
            KEBBI STATE / NIGERIA
          </div>
        </div>
      </div>
    </>
  );
}