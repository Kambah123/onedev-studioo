import { useScrollReveal } from '../hooks/useScrollReveal';
import SiteImage from './SiteImage';

const practices = [
  {
    number: '01',
    title: 'Architecture',
    description:
      'Musa is studying architecture. The work is proportion, structure, and how a space holds light — the same questions a product has to answer.',
    image: '/images/lab-architecture.webp',
    imageAlt: 'A small timber and concrete cottage model lit from the side in a dark studio.',
    width: 1152,
    height: 864,
  },
  {
    number: '02',
    title: 'Photography',
    description:
      'He also works as a photographer. Crop, light, and what you leave quiet carry straight into how an interface is composed.',
    image: '/images/lab-photography.webp',
    imageAlt: 'A black camera and a glass on a dark surface, cut by a thin warm light.',
    width: 1152,
    height: 864,
  },
  {
    number: '03',
    title: 'Payments',
    description:
      'Zipa is the payments practice in public: Solana-focused crypto and naira transfers that feel as direct as sending a message.',
    image: '/images/lab-payments.webp',
    imageAlt: 'Abstract dark field of connected points of light, suggesting a payment network.',
    width: 1152,
    height: 864,
  },
];

function PracticeCard({
  practice,
  index,
}: {
  practice: (typeof practices)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="col-span-12 md:col-span-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s var(--ease-out-expo) ${index * 0.08}s`,
      }}
    >
      <article
        className="h-full"
        style={{
          border: '1px solid var(--color-border)',
          background: 'transparent',
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
          <SiteImage
            src={practice.image}
            alt={practice.imageAlt}
            width={practice.width}
            height={practice.height}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <span className="font-mono text-xs block mb-4" style={{ color: 'var(--color-accent)' }}>
            {practice.number}
          </span>
          <h3 className="font-h3 mb-3">{practice.title}</h3>
          <p className="font-caption" style={{ color: 'var(--color-text-secondary)' }}>
            {practice.description}
          </p>
        </div>
      </article>
    </div>
  );
}

export default function Lab() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);

  return (
    <section
      id="lab"
      className="relative"
      style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}
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
              LAB
            </span>
          </div>

          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-h1 mb-6">
                Structure, light,{' '}
                <span style={{ color: 'var(--color-text-muted)' }}>and the product.</span>
              </h2>
              <p className="font-caption max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
                Architecture studies, photography, and the payments work that became Zipa.
                The same attention to structure, light, and detail runs through all three.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-width">
        <div className="grid-12 gap-y-4">
          {practices.map((practice, i) => (
            <PracticeCard key={practice.number} practice={practice} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
