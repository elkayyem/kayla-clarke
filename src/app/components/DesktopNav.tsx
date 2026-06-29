const links: [string, string][] = [
  ["#portfolio", "Work"],
  ["#services", "Services"],
  ["#packages", "Packages"],
  ["#about", "About"],
  ["#contact", "Contact"],
];

/** Desktop/laptop navbar. Hidden on mobile (the hamburger nav takes over there). */
export function DesktopNav() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="hidden md:block sticky top-0 z-50"
      style={{ background: "#F5EFDC", borderBottom: "1px solid rgba(28,19,8,0.12)" }}
    >
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-between" style={{ height: "4rem" }}>
        <a
          href="#"
          onClick={scrollTop}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: "1.2rem",
            letterSpacing: "0.04em",
            color: "#1C1308",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Kayla Clarke
        </a>
        <nav className="flex items-center gap-8">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="transition-opacity hover:opacity-60"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "1rem",
                letterSpacing: "0.03em",
                color: "#1C1308",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
