const FRAMES = [
  "MOTION", "COLOR", "STORY", "FRAME", "CUT", "RHYTHM", "LIGHT",
  "DEPTH", "TENSION", "FLOW", "SOUND", "TIME", "SCENE", "VISION",
];

export default function FilmStrip() {
  const doubled = [...FRAMES, ...FRAMES]; // seamless loop

  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface py-0 my-0">
      {/* Sprocket holes top */}
      <div className="flex gap-0 h-3 bg-base border-b border-border">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-4 h-full flex items-center justify-center">
            <div className="w-2 h-1.5 bg-surface rounded-sm" />
          </div>
        ))}
      </div>

      {/* Scrolling text */}
      <div className="flex overflow-hidden py-3">
        <div className="film-ticker flex gap-0 whitespace-nowrap">
          {doubled.map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="font-display text-sm tracking-[0.3em] text-text-muted px-6">
                {word}
              </span>
              <span className="text-gold text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sprocket holes bottom */}
      <div className="flex gap-0 h-3 bg-base border-t border-border">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-4 h-full flex items-center justify-center">
            <div className="w-2 h-1.5 bg-surface rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
