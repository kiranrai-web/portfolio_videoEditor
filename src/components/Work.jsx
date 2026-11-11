import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "EMBER",
    category: "Short Film",
    year: "2024",
    desc: "A 12-minute narrative exploring grief and memory through visual metaphor and rhythmic editing.",
    thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=80",
    videoId: "dQw4w9WgXcQ",
    tags: ["Color Grade", "Narrative", "DaVinci Resolve"],
  },
  {
    id: 2,
    title: "KINETIC",
    category: "Commercial",
    year: "2024",
    desc: "High-energy product campaign for a sportswear brand — motion-matched cuts synced to a custom score.",
    thumb: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
    videoId: "dQw4w9WgXcQ",
    tags: ["Motion Graphics", "VFX", "Premiere Pro"],
  },
  {
    id: 3,
    title: "SOLSTICE",
    category: "Music Video",
    year: "2023",
    desc: "Visual poetry for an indie artist — abstract compositions layered over intimate performances.",
    thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
    videoId: "dQw4w9WgXcQ",
    tags: ["Creative Direction", "Color", "After Effects"],
  },
  {
    id: 4,
    title: "VOID",
    category: "Experimental",
    year: "2023",
    desc: "An exploration of negative space and silence — a festival piece that played at three international showcases.",
    thumb: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
    videoId: "dQw4w9WgXcQ",
    tags: ["Experimental", "Sound Design", "Festival"],
  },
];

export default function Work() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const goTo = (index) => {
    if (animating || index === active) return;
    setPrev(active);
    setAnimating(true);
    setActive(index);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 700);
  };

  // auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % projects.length;
        setPrev(a);
        setAnimating(true);
        setTimeout(() => { setPrev(null); setAnimating(false); }, 700);
        return next;
      });
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % projects.length;
        setPrev(a);
        setAnimating(true);
        setTimeout(() => { setPrev(null); setAnimating(false); }, 700);
        return next;
      });
    }, 4000);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const project = projects[active];

  return (
    <section id="work" className="relative py-0 overflow-hidden" style={{ minHeight: "100vh" }}>

      {/* Full-bleed background images — crossfade */}
      <div className="absolute inset-0 z-0">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <img
              src={p.thumb}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.22) saturate(0.6)" }}
            />
          </div>
        ))}
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-base/95 via-base/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-base/40" />
      </div>

      {/* Content */}
      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-between" style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-3">Selected Work</p>
            <h2 className="font-display text-6xl md:text-8xl tracking-wider text-text-primary leading-none">
              PROJECTS
            </h2>
          </div>
          <p className="hidden md:block text-text-muted font-body text-xs tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        {/* Main content — left detail + right list */}
        <div className="flex flex-col lg:flex-row gap-8 flex-1 items-end">

          {/* LEFT — active project detail */}
          <div className="w-fulllg:w-1/2">
            {/* Category + year */}
            <div className="flex items-center gap-4 mb-6 overflow-hidden">
              <div
                key={`cat-${active}`}
                className="flex items-center gap-4"
                style={{ animation: "slideUp 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-body border border-gold/40 px-3 py-1">
                  {project.category}
                </span>
                <span className="text-[10px] tracking-widest text-text-muted font-body">{project.year}</span>
              </div>
            </div>

            {/* Title */}
            <div className="overflow-hidden mb-6">
              <h3
                key={`title-${active}`}
                className="font-display leading-none text-text-primary"
                style={{
                  fontSize: "clamp(4rem, 9vw, 8rem)",
                  letterSpacing: "0.05em",
                  animation: "slideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.05s both",
                }}
              >
                {project.title}
              </h3>
            </div>

            {/* Desc */}
            <div className="overflow-hidden mb-8">
              <p
                key={`desc-${active}`}
                className="text-text-muted font-body font-light leading-relaxed text-base max-w-md"
                style={{ animation: "slideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
              >
                {project.desc}
              </p>
            </div>

            {/* Tags */}
            <div
              key={`tags-${active}`}
              className="flex flex-wrap gap-2 mb-10"
              style={{ animation: "slideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
            >
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] tracking-widest uppercase border border-border text-text-muted px-2.5 py-1 font-body">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              key={`cta-${active}`}
              href={`https://www.youtube.com/watch?v=${project.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
             className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-body text-gold border border-gold/40 hover:border-gold hover:bg-gold/10 px-5 py-3 transition-all duration-300 group"
              style={{ animation: "slideUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
            >
              <span className="w-8 h-px bg-gold group-hover:w-14 transition-all duration-300" />
              Watch Project
            </a>
          </div>

          {/* RIGHT — project list */}
          <div className="w-full lg:w-1/2 flex flex-col gap-0 border-t border-border/40 lg:border-t-0">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => { goTo(i); resetTimer(); }}
                className={`group text-left border-t border-border py-5 flex items-center justify-between transition-all duration-300 ${
                  i === active ? "border-t-gold/60" : "hover:border-t-gold/30"
                }`}
                style={{ borderTopColor: i === active ? "#C8A96E40" : undefined }}
              >
                <div className="flex items-center gap-5">
                  <span className={`font-display text-sm tracking-widest transition-colors duration-300 ${i === active ? "text-gold" : "text-text-muted"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-display text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${i === active ? "text-text-primary" : "text-text-muted/50 group-hover:text-text-muted"}`}>
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] tracking-widest uppercase font-body hidden md:block transition-colors duration-300 ${i === active ? "text-gold" : "text-text-muted/40"}`}>
                    {p.category}
                  </span>
                  {/* progress bar */}
                  {i === active && (
                    <div className="w-16 h-px bg-border overflow-hidden">
                      <div
                        className="h-full bg-gold"
                        style={{ animation: "progressBar 4s linear forwards" }}
                      />
                    </div>
                  )}
                </div>
              </button>
            ))}
            {/* last border */}
            <div className="border-t border-border" />
          </div>

        </div>
      </div>
      {/* Show All */}
<div className="relative z-10 border-t border-border/40">
  <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
    <button
      onClick={() => setShowAll(s => !s)}
      className="flex items-center gap-3 text-xs tracking-widest uppercase font-body text-text-muted border border-border hover:border-gold hover:text-gold px-6 py-3 transition-all duration-300"
    >
      {showAll ? "Show Less ↑" : "Show All Projects ↓"}
    </button>
  </div>

  {showAll && (
    <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <a
          key={p.id}
          href={`https://www.youtube.com/watch?v=${p.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden aspect-video bg-surface border border-border hover:border-gold/40 transition-all duration-500"
          style={{ animation: `slideUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` }}
        >
          <img
            src={p.thumb}
            alt={p.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-body mb-1">{p.category} · {p.year}</p>
            <p className="font-display text-2xl tracking-wider text-text-primary">{p.title}</p>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-9 h-9 border border-gold rounded-full flex items-center justify-center bg-base/40 backdrop-blur-sm">
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