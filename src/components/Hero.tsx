import { useEffect, useRef, useState } from 'react';
import SiteImage from './SiteImage';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      id="hero"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 80%, rgba(255, 92, 40, 0.03), transparent),
          radial-gradient(ellipse 60% 40% at 80% 20%, rgba(100, 100, 255, 0.02), transparent),
          var(--color-bg)
        `,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255, 92, 40, 0.06), transparent 50%)`,
          opacity: loaded ? 1 : 0,
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[48%]"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.4s ease 0.3s',
        }}
      >
        <SiteImage
          src="/images/hero-atmosphere.webp"
          alt="Dark studio interior with a warm edge of light across a black geometric plane."
          width={1280}
          height={720}
          priority
          sizes="48vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--color-bg) 0%, rgba(5,5,5,0.55) 22%, rgba(5,5,5,0.15) 55%, rgba(5,5,5,0.45) 100%)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: loaded ? 0.025 : 0,
          transition: 'opacity 2s ease',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div className="content-width relative z-10 pt-28 md:pt-0">
        <div
          className="md:hidden mb-10 overflow-hidden"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s',
            border: '1px solid var(--color-border)',
          }}
        >
          <div className="relative aspect-[16/9]">
            <SiteImage
              src="/images/hero-atmosphere.webp"
              alt="Dark studio interior with a warm edge of light across a black geometric plane."
              width={1280}
              height={720}
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div
          className="flex items-center gap-3 mb-10 md:mb-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s var(--ease-out-expo) 0.2s',
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: 'var(--color-accent)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
              CURRENTLY BUILDING ZIPA
            </span>
          </div>
        </div>

        <h1 className="font-display max-w-[12ch] mb-8 md:mb-12">
          <span
            className="block overflow-hidden"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 1.2s var(--ease-out-expo) 0.4s',
            }}
          >
            WE BUILD
          </span>
          <span
            className="block overflow-hidden"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(100%)',
              transition: 'all 1.2s var(--ease-out-expo) 0.6s',
            }}
          >
            WHAT'S{' '}
            <span className="gradient-text">NEXT.</span>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
          <div className="max-w-lg">
            <p
              className="font-body leading-relaxed mb-8"
              style={{
                color: 'var(--color-text-secondary)',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s var(--ease-out-expo) 0.8s',
              }}
            >
              OneDev Studioo is a design and software studio in Suleja, building
              products — including Zipa — from Nigeria for the world.
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s var(--ease-out-expo) 1s',
              }}
            >
              <button
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 font-nav uppercase tracking-wider cursor-pointer border-none bg-transparent"
                style={{ color: 'var(--color-text)', fontSize: '0.8125rem' }}
                data-hover
              >
                <span className="relative">
                  Explore our work
                  <span
                    className="absolute bottom-0 left-0 w-full h-px"
                    style={{ background: 'var(--color-accent)' }}
                  />
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <div className="w-px h-4 self-center" style={{ background: 'var(--color-border)' }} />

              <button
                onClick={() => document.querySelector('#founder')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-nav uppercase tracking-wider cursor-pointer border-none bg-transparent"
                style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem' }}
                data-hover
              >
                Musa Sulaiman
              </button>
            </div>
          </div>

          <div
            className="flex flex-col items-start md:items-end gap-2"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-out-expo) 1.2s',
            }}
          >
            <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
              SULEJA / NIGER STATE
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--color-text-muted)' }}>
              — BUILDING GLOBALLY
            </span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: 'opacity 1s var(--ease-out-expo) 1.5s',
        }}
      >
        <span
          className="font-label text-[0.5rem] tracking-widest"
          style={{ color: 'var(--color-text-muted)', writingMode: 'vertical-rl' }}
        >
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{
            background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50% { opacity: 0.8; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
