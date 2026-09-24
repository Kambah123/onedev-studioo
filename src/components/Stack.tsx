import { useScrollReveal } from '../hooks/useScrollReveal';

const stacks = [
  {
    category: 'Interface',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Product',
    technologies: ['UI/UX', 'Product design', 'Prototyping'],
  },
  {
    category: 'Payments',
    technologies: ['Solana', 'Fintech', 'Naira & crypto'],
  },
  {
    category: 'Eye',
    technologies: ['Photography', 'Architecture', 'Light & detail'],
  },
];

export default function Stack() {
  const { ref, isVisible } = useScrollReveal(0.15);

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
      <div className="content-width">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s var(--ease-out-expo)',
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="rule-accent" />
            <span className="font-label" style={{ color: 'var(--color-accent)' }}>
              PRACTICE
            </span>
          </div>

          <h2 className="font-h1 mb-16">
            The tools{' '}
            <span style={{ color: 'var(--color-text-muted)' }}>actually in use.</span>
          </h2>

          <div className="grid-12">
            {stacks.map((stack, i) => (
              <div
                key={stack.category}
                className="col-span-12 md:col-span-3"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s var(--ease-out-expo) ${i * 0.1 + 0.2}s`,
                }}
              >
                <div className="pb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <h4 className="font-h3 mb-4">{stack.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-label px-3 py-1.5 transition-all duration-300 cursor-default"
                        style={{
                          background: 'var(--color-bg-elevated)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                          borderRadius: '1px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-accent)';
                          e.currentTarget.style.color = 'var(--color-accent)';
                          e.currentTarget.style.background = 'var(--color-accent-soft)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-border)';
                          e.currentTarget.style.color = 'var(--color-text-secondary)';
                          e.currentTarget.style.background = 'var(--color-bg-elevated)';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
