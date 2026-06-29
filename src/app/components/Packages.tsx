import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for testing UGC",
    description: "New to UGC or want to dip your toes in? A no-commitment starting point — you'll walk away with polished, ready-to-use content.",
    includes: [
      "3 UGC videos (15–30 sec each)",
      "1 hook variation per video",
      "Raw + edited files delivered",
      "7-day turnaround",
      "1 revision round",
    ],
    color: "#C98B7A",
    bg: "#F6E7E1",
    featured: false,
  },
  {
    name: "Creator",
    tagline: "Most popular for growing brands",
    description: "A monthly content partnership built to keep you consistent. I handle the ideas, scripts, filming, and editing — you get results.",
    includes: [
      "8 UGC videos per month",
      "Script + hook writing included",
      "Platform-optimized edits",
      "Lifestyle photos (3 hero shots)",
      "5-day turnaround",
      "Unlimited revisions",
    ],
    color: "#B87461",
    bg: "#EFD7CC",
    featured: true,
  },
  {
    name: "Brand Partner",
    tagline: "Full campaign collaboration",
    description: "More than content — a creative partner. We'll co-develop the strategy, build a content calendar, and produce everything together.",
    includes: [
      "15+ content pieces / month",
      "Campaign strategy & planning",
      "Dedicated content calendar",
      "Whitelisting rights available",
      "Rush delivery available",
      "Priority response & booking",
    ],
    color: "#8C9A78",
    bg: "#E7EBDC",
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="packages" style={{ background: "#EDE5CC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            Packages
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            Ways we can<br />
            <em style={{ fontWeight: 400 }}>work together.</em>
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        {/* Colorful package cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col"
              style={{
                background: pkg.bg,
                borderRadius: "10px",
                overflow: "hidden",
                border: pkg.featured ? `2px solid ${pkg.color}` : "1px solid rgba(28,19,8,0.08)",
                boxShadow: pkg.featured ? "0 18px 40px -24px rgba(28,19,8,0.45)" : "none",
              }}
            >
              {/* Colored top bar */}
              <div style={{ height: "6px", background: pkg.color }} />

              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.7rem", color: "#1C1308", lineHeight: 1 }}
                  >
                    {pkg.name}
                  </h3>
                  {pkg.featured && (
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontSize: "0.68rem",
                        letterSpacing: "0.08em",
                        color: "#FFFFFF",
                        background: pkg.color,
                        padding: "3px 10px",
                        borderRadius: "9999px",
                      }}
                    >
                      popular
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.86rem", color: "#6B5B3E", marginBottom: "1.25rem" }}>{pkg.tagline}</p>

                <p style={{ fontSize: "0.9rem", color: "#5A4A38", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {pkg.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="flex items-center justify-center flex-shrink-0"
                        style={{ width: "18px", height: "18px", borderRadius: "9999px", background: pkg.color, marginTop: "2px" }}
                      >
                        <Check className="w-3 h-3" style={{ color: "#FFFFFF" }} strokeWidth={3} />
                      </span>
                      <span style={{ fontSize: "0.88rem", color: "#1C1308", lineHeight: 1.45 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto text-center"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "0.92rem",
                    letterSpacing: "0.04em",
                    color: "#FFFFFF",
                    background: pkg.color,
                    padding: "0.7rem 1.25rem",
                    borderRadius: "9999px",
                  }}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
