export default function Marquee() {
  const items = [
    { text: 'PRODUCT DESIGN', filled: false },
    { text: 'ENGINEERING', filled: true },
    { text: 'FINTECH', filled: false },
    { text: 'SOLANA', filled: true },
    { text: 'UI / UX', filled: false },
    { text: 'PHOTOGRAPHY', filled: true },
    { text: 'ARCHITECTURE', filled: false },
    { text: 'ZIPA', filled: true },
  ];

  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-bg-elevated)',
      }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--color-bg-elevated), transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, var(--color-bg-elevated), transparent)',
        }}
      />

      {/* Scrolling content */}
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {repeatedItems.map((item, i) => (
          <div key={`${item.text}-${i}`} className="flex items-center mx-6 md:mx-10">
            <span
              className="font-display text-xl md:text-2xl lg:text-3xl"
              style={{
                color: item.filled ? 'var(--color-text)' : 'transparent',
                WebkitTextStroke: item.filled ? 'none' : '1px var(--color-text-muted)',
                opacity: item.filled ? 0.15 : 0.08,
                letterSpacing: '-0.02em',
              }}
            >
              {item.text}
            </span>
            <span
              className="mx-6 md:mx-10 w-1.5 h-1.5 rounded-full"
              style={{
                background: 'var(--color-accent)',
                opacity: 0.3,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}