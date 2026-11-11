import { useEffect, useRef } from "react";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "3", label: "Festival Awards" },
  { value: "4K", label: "Max Resolution" },
];

const tools = ["Premiere Pro", "DaVinci Resolve", "After Effects", "Cinema 4D", "Audition", "Photoshop"];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden max-w-sm mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&q=80"
                alt="Alex Krane — Video Editor"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-px bg-gold" />
              <div className="absolute top-0 left-0 w-px h-12 bg-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-px bg-gold" />
              <div className="absolute bottom-0 right-0 w-px h-12 bg-gold" />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">About</p>
            <h2 className="font-display text-6xl md:text-7xl tracking-wider text-text-primary leading-none mb-8">
              THE<br />EDITOR
            </h2>
            <p className="text-text-muted font-body font-light leading-relaxed mb-5 text-base">
              I'm Alex Krane — a video editor and motion designer based in Kathmandu. I've spent the last 8 years shaping raw footage into stories that hold attention, from intimate short films to high-volume commercial content.
            </p>
            <p className="text-text-muted font-body font-light leading-relaxed mb-10 text-base">
              Every edit is a conversation between time, rhythm, and emotion. I don't just cut — I listen to what the material wants to say, then find the fastest, most honest way to say it.
            </p>

            {/* Tools */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-4">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-xs border border-border text-text-muted px-3 py-1.5 font-body hover:border-gold hover:text-gold transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl text-gold tracking-wider">{s.value}</p>
                  <p className="text-[10px] tracking-widest uppercase text-text-muted font-body mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
