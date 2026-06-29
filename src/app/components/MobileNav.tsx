import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: [string, string][] = [
  ["#portfolio", "Work"],
  ["#services", "Services"],
  ["#packages", "Packages"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

/** Mobile-only sticky top bar with a hamburger menu. Hidden on md+ screens. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className="md:hidden sticky top-0 z-50"
      style={{ background: "#F5EFDC", borderBottom: "1px solid rgba(28,19,8,0.12)" }}
    >
      <div className="flex items-center justify-between px-6" style={{ height: "3.5rem" }}>
        <a
          href="#"
          onClick={scrollTop}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "1.05rem",
            letterSpacing: "0.03em",
            color: "#1C1308",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Kayla Clarke
        </a>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: "#1C1308", background: "transparent", border: "none", padding: "4px", cursor: "pointer", lineHeight: 0 }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <>
          {/* Backdrop below the bar to close on tap-away */}
          <div
            onClick={() => setOpen(false)}
            className="fixed left-0 right-0 bottom-0"
            style={{ top: "3.5rem", background: "rgba(28,19,8,0.25)", zIndex: 40 }}
          />
          {/* Dropdown panel */}
          <nav
            className="absolute left-0 right-0"
            style={{ background: "#F5EFDC", borderBottom: "1px solid rgba(28,19,8,0.12)", zIndex: 50 }}
          >
            <ul className="flex flex-col px-6">
              {links.map(([href, label], i) => (
                <li key={href} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(28,19,8,0.08)" }}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      letterSpacing: "0.02em",
                      color: "#1C1308",
                      textDecoration: "none",
                      padding: "0.95rem 0",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
