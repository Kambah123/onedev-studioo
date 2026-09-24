import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Work from './components/Work';
import Process from './components/Process';
import Statement from './components/Statement';
import About from './components/About';
import Founder from './components/Founder';
import Marquee from './components/Marquee';
import Lab from './components/Lab';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="noise-overlay">
      {/* Custom cursor - desktop only */}
      <CustomCursor />

      {/* Preloader */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{
          background: 'var(--color-bg)',
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? 'all' : 'none',
          transition: 'opacity 0.6s var(--ease-out-expo)',
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <span
            className="font-label tracking-[0.3em]"
            style={{
              opacity: loading ? 1 : 0,
              transform: loading ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.5s var(--ease-out-expo)',
            }}
          >
            ONEDEV STUDIOO
          </span>
          <div
            className="w-8 h-px"
            style={{
              background: 'var(--color-accent)',
              animation: loading ? 'pulse 1.5s ease-in-out infinite' : 'none',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <Featured />
        <Work />
        <Process />
        <Statement />
        <About />
        <Founder />
        <Marquee />
        <Lab />
        <Stack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}