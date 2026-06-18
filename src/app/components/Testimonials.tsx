const testimonials = [
  {
    quote: "Kayla's content felt so natural — our customers couldn't tell it was a paid partnership. Conversion rates went up 45% on the campaign she created.",
    name: "Sarah Johnson",
    role: "Marketing Director, GlowSkin Beauty",
    initials: "SJ",
  },
  {
    quote: "We've worked with a dozen UGC creators. Kayla is the only one who reads the brief, delivers on time, and actually sounds like a human being.",
    name: "Michael Chen",
    role: "Brand Manager, TechLife",
    initials: "MC",
  },
  {
    quote: "As a small brand, I needed content that punched above our weight. Kayla delivered 10 videos in a week that looked like they cost triple what we paid.",
    name: "Emma Williams",
    role: "Founder, Sustainable Style Co.",
    initials: "EW",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#F5EFDC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            Kind Words
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            What brands say
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="py-8"
              style={{
                paddingRight: i < 2 ? "2.5rem" : undefined,
                paddingLeft: i > 0 ? "2.5rem" : undefined,
                borderRight: i < 2 ? "1px solid rgba(28,19,8,0.15)" : undefined,
              }}
            >
              <p
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#1C1308", lineHeight: 1.7, marginBottom: "1.5rem" }}
              >
                "{t.quote}"
              </p>
              <div style={{ borderTop: "1px solid rgba(28,19,8,0.12)", paddingTop: "1.25rem" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.9rem", color: "#1C1308" }}>{t.name}</p>
                <p style={{ fontSize: "0.78rem", color: "#6B5B3E", marginTop: "2px" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
