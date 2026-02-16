export function WaveDivider({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function DecorativeBlob({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-[0.07] pointer-events-none ${className}`}
      style={{ background: "var(--gradient-primary)" }}
    />
  );
}

export function DecorativeDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.4] ${className}`}>
      <div className="grid grid-cols-6 gap-3">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    </div>
  );
}
