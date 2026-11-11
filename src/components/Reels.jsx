import { useEffect, useRef, useState } from "react";

const reels = [
  {
    id: 1,
    title: "URBAN PULSE",
    category: "Brand Reel",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80",
  },
  {
    id: 2,
    title: "GOLDEN HOUR",
    category: "Event Reel",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
  },
  {
    id: 3,
    title: "NEON DRIFT",
    category: "Music Reel",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
  },
  {
    id: 4,
    title: "COLD OPEN",
    category: "Cinematic Reel",
    videoId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  },
];

function ReelCard({ reel, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal flex-shrink-0 group cursor-pointer"
      style={{ transitionDelay: `${index * 80}ms`, width: "200px" }}
    >
      {/* 9:16 portrait ratio — Instagram Reels format */}
      <div className="relative overflow-hidden" style={{ width: "200px", height: "355px" }}>
        <img
          src={reel.thumb}
          alt={reel.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
{/* Play button */}
<a
  href={`https://www.youtube.com/watch?v=${reel.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center backdrop-blur-sm bg-base/30 hover:bg-gold/20 transition-colors">
            <svg className="w-4 h-4 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[9px] tracking-[0.25em] uppercase text-gold font-body mb-0.5">{reel.category}</p>
          <p className="font-display text-xl tracking-wider text-text-primary leading-none">{reel.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reels() {
  const headerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reels" className="py-24 border-t border-border overflow-hidden">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT — text side */}
        <div
          ref={headerRef}
className="reveal lg:w-[55%] flex-shrink-0 px-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-12 flex flex-col justify-center mb-12 lg:mb-0"
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">Short Form</p>
          <h2 className="font-display text-6xl md:text-7xl tracking-wider text-text-primary leading-none mb-6">
            REELS &amp; SHORTS
          </h2>
          <p className="text-text-muted font-body font-light leading-relaxed text-sm max-w-xs">
            Quick-cut, high-impact vertical content built for social. Every second earns its place.
          </p>
          <div className="mt-8 w-8 h-px bg-gold" />
          <p className="text-[10px] tracking-widest uppercase text-text-muted font-body mt-4">
            {reels.length} reels
          </p>
        </div>

{/* RIGHT — animated auto-scroll reels */}
<div className="lg:w-[45%] overflow-hidden relative">
  {/* fade edges */}
  <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-base to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-base to-transparent pointer-events-none" />

  <div
    className="flex gap-6 px-6"
    style={{
      width: "max-content",
      animation: "reelScroll 12s linear infinite",
    }}
    onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
    onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
  >
    {[...reels, ...reels].map((r, i) => (
      <ReelCard key={i} reel={r} index={i % reels.length} />
    ))}
  </div>
</div>

      </div>

{/* Show All */}
<div className="border-t border-border/40 mt-10">
  <div className="px-6 py-6 flex justify-center">
    <button
      onClick={() => setShowAll(s => !s)}
      className="flex items-center gap-3 text-xs tracking-widest uppercase font-body text-text-muted border border-border hover:border-gold hover:text-gold px-6 py-3 transition-all duration-300"
    >
      {showAll ? "Show Less ↑" : "Show All Reels ↓"}
    </button>
  </div>

  {showAll && (
    <div className="px-6 pb-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {reels.map((r, i) => (
        <a
          key={r.id}
          href={`https://www.youtube.com/watch?v=${r.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden bg-surface border border-border hover:border-gold/40 transition-all duration-500"
          style={{
            aspectRatio: "9/16",
            animation: `slideUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`,
          }}
        >
          <img
            src={r.thumb}
            alt={r.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-[9px] tracking-[0.25em] uppercase text-gold font-body mb-0.5">{r.category}</p>
            <p className="font-display text-lg tracking-wider text-text-primary leading-none">{r.title}</p>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 border border-gold rounded-full flex items-center justify-center bg-base/40 backdrop-blur-sm">
              <svg className="w-3 h-3 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  )}
</div>

    </section>
  );
}