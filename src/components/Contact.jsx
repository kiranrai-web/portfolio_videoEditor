import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to EmailJS / Formspree etc.
    setSent(true);
  };

  const projectTypes = ["Short Film", "Commercial", "Music Video", "Documentary", "Social Content", "Other"];

  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="reveal">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-body mb-4">Get In Touch</p>
          <h2 className="font-display text-6xl md:text-8xl tracking-wider text-text-primary leading-none mb-16">
            LET'S
            <span className="text-gold mx-3">CREATE</span><br className="block md:hidden"/>
            Something
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div>
              <p className="text-text-muted font-body font-light leading-relaxed mb-10 text-base max-w-md">
                Have a project in mind? Whether it's a short film, a commercial, or something you haven't been able to describe yet — let's talk.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Email", value: "alex@krane.studio", href: "mailto:alex@krane.studio" },
                  { label: "Based in", value: "Kathmandu, Nepal" },
                  { label: "Availability", value: "Open for projects — 2025" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-text-primary font-body hover:text-gold transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-text-primary font-body">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-6 mt-10">
                {["Vimeo", "Instagram", "LinkedIn"].map((s) => (
                  <a key={s} href="#" className="text-xs tracking-widest uppercase text-text-muted hover:text-gold transition-colors font-body">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              {sent ? (
                <div className="border border-gold p-10 text-center">
                  <p className="font-display text-4xl tracking-wider text-gold mb-3">RECEIVED</p>
                  <p className="text-text-muted font-body text-sm">I'll be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { name: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary font-body placeholder-text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-2">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary font-body focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                    >
                      <option value="">Select a type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-2">
                      Tell Me About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you making? What's the vision?"
                      required
                      rows={5}
                      className="w-full bg-surface border border-border px-4 py-3 text-sm text-text-primary font-body placeholder-text-muted/50 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-base py-4 font-body font-medium tracking-[0.3em] uppercase text-sm hover:bg-gold-light transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
