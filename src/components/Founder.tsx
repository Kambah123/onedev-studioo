import { useScrollReveal } from '../hooks/useScrollReveal';
import SiteImage from './SiteImage';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Solana',
  'Fintech',
  'UI/UX',
  'Product design',
  'Photography',
];

const links = [
  { label: 'X', href: 'https://x.com/0xSkamber' },
  { label: 'Email', href: 'mailto:sulaimanmusa399@gmail.com' },
];

export default function Founder() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="founder"
      className="relative"
      style={{
        paddingTop: 'clamp(4rem, 8vh, 8rem)',
        paddingBottom: 'clamp(4rem, 8vh, 8rem)',
        background: 'var(--color-bg)',
      }}
    >
      <div className="content-width">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div
              className="relative w-full max-w-sm aspect-[4/5] overflow-hidden"
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <SiteImage
                src="/images/musa-sulaiman.webp"
                alt="Portrait of Musa Sulaiman, founder of OneDev Studioo and Zipa."
                width={420}
                height={420}
                sizes="(min-width: 768px) 28vw, 80vw"
                className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <span className="font-label mb-4 block" style={{ color: 'var(--color-accent)' }}>
              DEVELOPER PROFILE
            </span>

            <h3 className="font-h2 mb-2">Musa Sulaiman</h3>
            <p className="font-caption mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Founder & Principal Engineer, OneDev Studioo
              <br />
              Founder, Zipa
            </p>

            <div className="w-12 h-px mb-6" style={{ background: 'var(--color-accent)' }} />

            <p className="font-body mb-4 leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
              Musa runs OneDev Studioo, a design and software studio registered in Nigeria
              (CAC BN 9704508), from Kebbi State, Nigeria. He founded Zipa, a Solana-focused
              fintech product for simple crypto and naira payments.
            </p>

            <p className="font-body mb-8 leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
              He is also studying architecture and works as a photographer. That practice
              shapes his eye for structure, light, and detail in the interfaces he ships.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-label px-3 py-1.5"
                  style={{
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="nav-link font-nav"
                  style={{
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                  }}
                  data-hover
                >
                  {link.label}
                </a>
              ))}
              <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
                KEBBI STATE / NIGERIA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
