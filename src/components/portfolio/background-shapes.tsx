export function BackgroundShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-maroon-deep/40 blur-3xl animate-float-slow" />
      <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-green-deep/40 blur-3xl animate-float-slower" />
      <div className="absolute left-1/3 bottom-[-8rem] h-80 w-80 rounded-full bg-maroon/20 blur-3xl animate-float-slow" />

      <svg
        className="absolute right-10 top-24 h-24 w-24 text-cream/10 animate-float-slower"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg
        className="absolute left-16 bottom-16 h-32 w-32 text-green-bright/10 animate-float-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
        <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="80" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,234,212,0.05),transparent_55%)]" />
    </div>
  )
}
