import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for testing UGC",
    price: "$250",
    per: "one-time",
    description: "New to UGC or want to dip your toes in? This is your no-commitment starting point. You'll walk away with polished, ready-to-use content.",
    includes: [
      "3 UGC videos (15–30 sec each)",
      "1 hook variation per video",
      "Raw + edited files delivered",
      "7-day turnaround",
      "1 revision round",
    ],
    featured: false,
  },
  {
    name: "Creator",
    tagline: "Most popular for growing brands",
    price: "$650",
    per: "/ month",
    description: "A monthly content partnership built for brands that want to stay consistent. I handle the ideas, scripts, filming, and editing — you get results.",
    includes: [
      "8 UGC videos per month",
      "Script + hook writing included",
      "Platform-optimized edits (TikTok, Reels, Amazon)",
      "Lifestyle photos (3 hero shots)",
      "5-day turnaround",
      "Unlimited revisions",
      "Direct messaging access",
    ],
    featured: true,
  },
  {
    name: "Brand Partner",
    tagline: "Full campaign collaboration",
    price: "Custom",
    per: "",
    description: "You need more than content — you need a creative partner. We'll co-develop a strategy, build a content calendar, and produce everything together.",
    includes: [
      "15+ content pieces / month",
      "Campaign strategy & planning",
      "Dedicated content calendar",
      "Whitelisting rights available",
      "Rush delivery available",
      "Monthly performance review",
      "Priority response & booking",
    ],
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="packages" style={{ background: "#EDE5CC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            Packages & Pricing
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            Straightforward packages,<br />
            <em style={{ fontWeight: 400 }}>no surprises.</em>
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        {/* Package rows */}
        <div className="flex flex-col">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              style={{
                borderBottom: "1px solid rgba(28,19,8,0.15)",
                background: pkg.featured ? "rgba(28,19,8,0.05)" : "transparent",
              }}
            >
              <div className="grid md:grid-cols-3 gap-0 py-10">
                {/* Col 1: Name + price */}
                <div className="px-0 md:pr-8 mb-6 md:mb-0">
                  <div className="flex items-start gap-3 mb-2">
                    <h3
                      style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.6rem", color: "#1C1308", lineHeight: 1 }}
                    >
                      {pkg.name}
                    </h3>
                    {pkg.featured && (
                      <span
                        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.7rem", letterSpacing: "0.08em", color: "#6B5B3E", border: "1px solid rgba(28,19,8,0.3)", padding: "2px 8px", marginTop: "4px" }}
                      >
                        popular
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#6B5B3E", marginBottom: "1.25rem" }}>{pkg.tagline}</p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 900, color: "#1C1308", lineHeight: 1 }}>
                    {pkg.price}
                    {pkg.per && (
                      <span style={{ fontSize: "1rem", fontWeight: 400, fontStyle: "italic", color: "#6B5B3E", marginLeft: "4px" }}>
                        {pkg.per}
                      </span>
                    )}
                  </div>
                </div>

                {/* Col 2: Description */}
                <div className="px-0 md:px-8 mb-6 md:mb-0" style={{ borderLeft: "1px solid rgba(28,19,8,0.12)" }}>
                  <p style={{ fontSize: "0.88rem", color: "#6B5B3E", lineHeight: 1.75, paddingLeft: "2rem" }}>{pkg.description}</p>
                </div>

                {/* Col 3: Includes + CTA */}
                <div className="px-0 md:pl-8 flex flex-col justify-between gap-6" style={{ borderLeft: "1px solid rgba(28,19,8,0.12)" }}>
                  <ul className="flex flex-col gap-2" style={{ paddingLeft: "2rem" }}>
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "#1C1308", opacity: 0.5 }} />
                        <span style={{ fontSize: "0.82rem", color: "#1C1308", lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ paddingLeft: "2rem" }}>
                    <a
                      href="#contact"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#1C1308",
                        borderBottom: "1px solid rgba(28,19,8,0.5)",
                        paddingBottom: "2px",
                      }}
                    >
                      {pkg.price === "Custom" ? "Get in touch →" : "Book this package →"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance note */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(28,19,8,0.15)" }}>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.4rem", color: "#1C1308", marginBottom: "0.5rem" }}
              >
                Need something custom?
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#6B5B3E", lineHeight: 1.7, maxWidth: "520px" }}>
                I also take on a limited number of one-off freelance projects each month — product launches,
                seasonal campaigns, trade show content, and more.
              </p>
            </div>
            <a
              href="#contact"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                color: "#1C1308",
                border: "1px solid rgba(28,19,8,0.4)",
                padding: "0.65rem 1.5rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Get a custom quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
