import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Statement() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: 'clamp(4rem, 10vh, 8rem)',
        paddingBottom: 'clamp(4rem, 10vh, 8rem)',
        background: 'var(--color-bg)',
      }}
    >
      <div className="content-width">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1.2s var(--ease-out-expo)',
          }}
        >
          {/* Top line */}
          <div
            className="w-full h-px mb-12"
            style={{ background: 'var(--color-border)' }}
          />

          <div className="grid-12">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <p
                className="font-display text-center"
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 3.5rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-secondary)',
                }}
              >
                The most interesting problems in technology aren't being solved in
                Silicon Valley.{' '}
                <span style={{ color: 'var(--color-text)' }}>
                  They're being solved where the constraints are real,
                </span>
                {' '}the stakes are high, and the need is{' '}
                <span style={{ color: 'var(--color-accent)' }}>undeniable.</span>
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div
            className="w-full h-px mt-12"
            style={{ background: 'var(--color-border)' }}
          />
        </div>
      </div>
    </section>
  );
}