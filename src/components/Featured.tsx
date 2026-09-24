import { useScrollReveal } from '../hooks/useScrollReveal';
import SiteImage from './SiteImage';
import { projects } from '../data/projects';

const notes = [
  { value: '@handles', label: 'Instead of wallet addresses' },
  { value: '0.3%', label: 'Send fee, live rates' },
  { value: 'Solana', label: 'Crypto and naira rails' },
  { value: 'Beta', label: 'On test networks today' },
];

export default function Featured() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);
  const zipa = projects[0];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="content-width">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="grid-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s var(--ease-out-expo)',
          }}
        >
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <a
              href={zipa.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block"
              data-hover
              style={{ textDecoration: 'none' }}
            >
              <div
                className="relative w-full aspect-[4/3] overflow-hidden"
                style={{ background: 'var(--color-bg-surface)' }}
              >
                <SiteImage
                  src={zipa.image}
                  alt={zipa.imageAlt}
                  width={zipa.width}
                  height={zipa.height}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="project-image absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </a>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <div className="md:pl-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-label px-2.5 py-1"
                  style={{
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(255, 92, 40, 0.35)',
                    background: 'var(--color-accent-soft)',
                  }}
                >
                  FEATURED
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  ZIPA
                </span>
              </div>

              <h3 className="font-h1 mb-4">Zipa</h3>

              <div className="w-12 h-px mb-6" style={{ background: 'var(--color-accent)' }} />

              <p className="font-body mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Zipa is the studio’s fintech product: a username-first way for Nigerians
                to send crypto and naira. Money goes to an @handle, with a naira wallet,
                bills, and invoicing in the same place.
              </p>

              <p className="font-body mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                It is Solana-focused, shows live rates, and is in beta on test networks —
                free to try while the rails are still being proven.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {notes.map((note) => (
                  <div key={note.label}>
                    <div className="font-h3" style={{ color: 'var(--color-accent)' }}>
                      {note.value}
                    </div>
                    <div className="font-caption" style={{ color: 'var(--color-text-muted)' }}>
                      {note.label}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={zipa.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-nav uppercase tracking-wider"
                style={{ color: 'var(--color-text)', fontSize: '0.8125rem', textDecoration: 'none' }}
                data-hover
              >
                <span className="relative">
                  Open Zipa
                  <span className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'var(--color-accent)' }} />
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
