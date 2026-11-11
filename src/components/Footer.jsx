const links = {
  Navigate: ["Work", "Reels", "About", "Contact"],
  Services: ["Short Film", "Commercial", "Music Video", "Color Grade"],
  Social: ["Vimeo", "Instagram", "LinkedIn", "YouTube"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">


      {/* Middle — links grid */}
      <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-border">
        {/* Brand col */}
        <div>
          <span className="font-display text-3xl tracking-widest text-gold block mb-4">ALEX KRANE</span>
          <p className="text-text-muted font-body font-light text-xs leading-relaxed max-w-[180px]">
            Video editor & motion designer based in Kathmandu, Nepal.
          </p>
        </div>

        {/* Link cols */}
        {Object.entries(links).map(([heading, items]) => (
          <div key={heading}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-text-muted font-body mb-5">{heading}</p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xs font-body text-text-muted hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom — legal */}
<p className="text-[10px] tracking-widest uppercase text-text-muted font-body text-center leading-5">
  © {new Date().getFullYear()} Kiran Rai. All rights reserved. <br />
  Designed & developed with React, Tailwind & caffeine 
</p>

    </footer>
  );
}