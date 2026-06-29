import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "#1C1308", color: "#A89070" }} className="py-14">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "1.8rem", color: "#F5EFDC", letterSpacing: "-0.01em", lineHeight: 1, marginBottom: "1rem" }}
            >
              KAYLA<br />CLARKE
            </p>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#A89070", maxWidth: "220px", marginBottom: "1.25rem" }}>
              UGC content creator making authentic, scroll-stopping content that feels like a real recommendation.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/kaylaclarke.ugc" target="_blank" rel="noopener noreferrer" style={{ color: "#A89070" }} className="hover:text-[#F5EFDC] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:kayla@kaylaclarke.co" style={{ color: "#A89070" }} className="hover:text-[#F5EFDC] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" aria-label="TikTok" style={{ color: "#A89070" }} className="hover:text-[#F5EFDC] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.21 8.21 0 004.8 1.54V6.78a4.85 4.85 0 01-1.03-.09z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72rem", letterSpacing: "0.12em", color: "#A89070", textTransform: "uppercase", marginBottom: "1rem" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {[["#services", "Services"], ["#packages", "Packages"], ["#portfolio", "Portfolio"], ["#about", "About"], ["#contact", "Contact"]].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.88rem", color: "#A89070" }}
                    className="hover:text-[#F5EFDC] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72rem", letterSpacing: "0.12em", color: "#A89070", textTransform: "uppercase", marginBottom: "1rem" }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {["UGC Video Creation", "Product Photography", "Testimonial Videos", "Monthly Retainer", "Brand Partnerships"].map((s) => (
                <li key={s} style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.88rem", color: "#A89070" }}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(245,239,220,0.1)", paddingTop: "2rem" }} className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
          <p style={{ fontSize: "0.75rem", color: "rgba(168,144,112,0.6)" }}>
            © {new Date().getFullYear()} Kayla Clarke. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.75rem", color: "rgba(168,144,112,0.6)" }}>
            Real content for real people.
          </p>
        </div>
      </div>
    </footer>
  );
}
