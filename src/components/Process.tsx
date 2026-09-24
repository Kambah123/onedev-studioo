import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We start with the problem, not the solution. Deep research into the domain, the users, and the constraints that matter.',
    detail: 'The problem first',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'Systems thinking meets product strategy. We design the technical foundation and the product experience simultaneously.',
    detail: 'Structure and interface',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Engineering with intention. Every line of code serves the product. We ship iteratively, learning from each release.',
    detail: 'Working slices',
  },
  {
    number: '04',
    title: 'Stay with it',
    description: 'A launch is a version, not an ending. Zipa and the studio sites keep moving as the work gets clearer.',
    detail: 'After it is public',
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="col-span-12 md:col-span-3"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s var(--ease-out-expo) ${index * 0.15}s`,
      }}
    >
      <div className="relative">
        {/* Number - oversized */}
        <div
          className="font-display font-light mb-4 select-none"
          style={{
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            lineHeight: 0.8,
            color: 'var(--color-border)',
            letterSpacing: '-0.05em',
          }}
        >
          {step.number}
        </div>

        {/* Connecting line */}
        {index < steps.length - 1 && (
          <div
            className="hidden md:block absolute top-8 right-0 w-full h-px"
            style={{ background: 'var(--color-border)' }}
          />
        )}

        {/* Content */}
        <div
          className="pt-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <h3 className="font-h3 mb-2">{step.title}</h3>
          <p className="font-caption mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            {step.description}
          </p>
          <span className="font-mono text-xs" style={{ color: 'var(--color-accent)' }}>
            {step.detail}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);

  return (
    <section
      className="relative"
      style={{
        paddingTop: 'var(--section-gap)',
        paddingBottom: 'var(--section-gap)',
        background: 'var(--color-bg)',
        borderTop: '1px solid var(--color-border-subtle)',
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
              APPROACH
            </span>
          </div>

          <h2 className="font-h1 max-w-3xl">
            How we build{' '}
            <span style={{ color: 'var(--color-text-muted)' }}>
              products that matter.
            </span>
          </h2>
        </div>
      </div>

      <div className="content-width">
        <div className="grid-12">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}