import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 200);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background video embed as ambient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-base via-base/80 to-base absolute z-10" />
        <iframe
          className="w-full h-full object-cover scale-150"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Background reel"
          allow="autoplay; encrypted-media"
          style={{ pointerEvents: "none", border: "none", opacity: 0.25 }}
        />
      </div>

      {/* Main content */}
      <div ref={ref} className="reveal relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6 font-body font-medium">
          Video Editor & Motion Designer
        </p>
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-wider text-text-primary mb-8">
          FRAMES<br />
          <span className="text-gold">THAT FEEL</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto font-body font-light leading-relaxed mb-12">
          Cinematic storytelling through precise cuts, bold color, and motion that breathes life into every second.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-3.5 bg-gold text-base font-body font-medium tracking-widest uppercase text-xs hover:bg-gold-light transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
className="relative px-8 py-3.5 text-text-muted font-body font-medium tracking-widest uppercase text-xs transition-colors duration-300 overflow-hidden group hover:border-gold hover:text-black hover:bg-gold"
  style={{ isolation: "isolate" }}
>
  {/* animated border */}
  <span
    aria-hidden="true"
    className="absolute inset-0 rounded-[1px]"
    style={{
      padding: "1px",
      background: "conic-gradient(from var(--angle), transparent 60%, #C8A96E 75%, #E2C98A 82%, #C8A96E 89%, transparent 100%)",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      animation: "borderSpin 2.5s linear infinite",
    }}
  />
  Hire Me
</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className=" absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-body">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
