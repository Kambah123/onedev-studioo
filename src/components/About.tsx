import { useScrollReveal } from '../hooks/useScrollReveal';
import SiteImage from './SiteImage';

const capabilities = [
  {
    number: '01',
    title: 'Product Design',
    description: 'Research, interface design, and the visual system a product actually ships with.',
  },
  {
    number: '02',
    title: 'Engineering',
    description: 'React, Next.js, and TypeScript, taken through to a site or product people can open.',
  },
  {
    number: '03',
    title: 'Fintech',
    description: 'Zipa: Solana-focused crypto and naira payments built for how Nigerians actually send money.',
  },
  {
    number: '04',
    title: 'Brand & Identity',
    description: 'Stores, catalogues, and redesigns where the brand and the interface are the same job.',
  },
];

const facts = [
  { value: 'Kebbi', label: 'Kebbi State, Nigeria' },
  { value: 'BN 9704508', label: 'CAC registration' },
  { value: 'Zipa', label: 'Fintech product' },
  { value: 'Design + code', label: 'The studio’s work' },
];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);
  const { ref: manifestoRef, isVisible: manifestoVisible } = useScrollReveal(0.15);
  const { ref: capsRef, isVisible: capsVisible } = useScrollReveal(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);

  return (
    <section
      id="about"
      className="relative"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="content-width mb-16 md:mb-24">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="rule-accent" />
            <span className="font-label" style={{ color: 'var(--color-accent)' }}>
              ABOUT
            </span>
          </div>

          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-h1">
                A design and software{' '}
                <span style={{ color: 'var(--color-text-muted)' }}>studio.</span>
                <br />
                Products, and the{' '}
                <span style={{ color: 'var(--color-accent)' }}>sites around them.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="content-width mb-20 md:mb-32">
        <div
          ref={manifestoRef as React.RefObject<HTMLDivElement>}
          className="grid-12"
          style={{
            opacity: manifestoVisible ? 1 : 0,
            transform: manifestoVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <div className="col-span-12 md:col-span-5 md:col-start-1">
            <div className="w-full h-px mb-8" style={{ background: 'var(--color-border)' }} />
            <p className="font-body leading-[1.8] mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              OneDev Studioo is a registered design and software studio based in Kebbi
              State, Nigeria. The work is products we own — starting with Zipa — and design
              and engineering for stores, catalogues, and tools.
            </p>
            <p className="font-body leading-[1.8] mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Zipa is a Solana-focused fintech product for simple crypto and naira
              payments. The rest of the portfolio is public: fashion, compact homes,
              plan visualization, and brand sites you can open today.
            </p>
            <p className="font-body leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
              The studio is led by Musa Sulaiman, who is studying architecture and works
              as a photographer. Structure, light, and detail are not a slogan here.
              They are how the work gets judged.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 mt-10 md:mt-0">
            <div
              className="relative aspect-[4/3] overflow-hidden mb-8"
              style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}
            >
              <SiteImage
                src="/images/about-studio.webp"
                alt="Night desk in a design studio: a laptop, tracing paper, and a small timber architectural model."
                width={1152}
                height={864}
                sizes="(min-width: 768px) 46vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className="font-display text-4xl md:text-5xl mb-4"
              style={{ color: 'var(--color-accent)', lineHeight: 0.95 }}
            >
              "From Nigeria. For the world."
            </div>
            <p className="font-caption" style={{ color: 'var(--color-text-muted)' }}>
              — Kebbi State, Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className="content-width mb-20 md:mb-32">
        <div
          ref={capsRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: capsVisible ? 1 : 0,
            transform: capsVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <span className="font-label block mb-10" style={{ color: 'var(--color-text-muted)' }}>
            CAPABILITIES
          </span>

          <div className="grid-12">
            {capabilities.map((cap, i) => (
              <div
                key={cap.number}
                className="col-span-12 md:col-span-3"
                style={{
                  opacity: capsVisible ? 1 : 0,
                  transform: capsVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s var(--ease-out-expo) ${i * 0.1 + 0.2}s`,
                }}
              >
                <div className="pb-6 mb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <span className="font-mono text-xs block mb-4" style={{ color: 'var(--color-accent)' }}>
                    {cap.number}
                  </span>
                  <h3 className="font-h3 mb-3">{cap.title}</h3>
                  <p className="font-caption" style={{ color: 'var(--color-text-secondary)' }}>
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-width">
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid-12"
          style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className="col-span-6 md:col-span-3 text-center"
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s var(--ease-out-expo) ${i * 0.1 + 0.2}s`,
              }}
            >
              <div className="font-display text-3xl md:text-4xl mb-2" style={{ color: 'var(--color-text)' }}>
                {fact.value}
              </div>
              <div className="font-label" style={{ color: 'var(--color-text-muted)' }}>
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
