import { useScrollReveal } from '../hooks/useScrollReveal';
import SiteImage from './SiteImage';
import { projects, type Project } from '../data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block"
      data-hover
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `all 0.9s var(--ease-out-expo) ${index * 0.1}s`,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: 'var(--color-bg-surface)' }}>
        <SiteImage
          src={project.image}
          alt={project.imageAlt}
          width={project.width}
          height={project.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="project-image absolute inset-0 h-full w-full object-cover"
        />
        <span
          className="absolute top-4 left-4 font-label px-2.5 py-1 text-[0.5625rem]"
          style={{
            color: 'var(--color-text)',
            background: 'rgba(5,5,5,0.72)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-5 md:p-6" style={{ background: 'var(--color-bg-elevated)' }}>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-h3">{project.title}</h3>
          <span className="font-label shrink-0 mt-1" style={{ color: 'var(--color-accent)' }}>
            LIVE →
          </span>
        </div>
        <p className="font-caption mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-label px-2 py-0.5 text-[0.5625rem]"
              style={{
                background: 'var(--color-bg-muted)',
                color: 'var(--color-text-muted)',
                borderRadius: '1px',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2);

  return (
    <section id="work" className="relative" style={{ paddingTop: 'var(--section-gap)', paddingBottom: 'var(--section-gap)' }}>
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
              OUR WORKS
            </span>
          </div>

          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-h1 mb-6">
                Products and sites{' '}
                <span style={{ color: 'var(--color-text-muted)' }}>shipped in public.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-end">
              <p className="font-caption" style={{ color: 'var(--color-text-secondary)' }}>
                Zipa leads. The rest are stores, catalogues, and tools designed and built with the same standard. Each card opens the live site.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-width">
        <div className="grid-12">
          {projects.map((project, i) => (
            <div key={project.slug} className="col-span-12 md:col-span-6">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
