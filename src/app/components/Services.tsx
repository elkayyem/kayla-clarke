import { Video, Camera, FileText, Sparkles, Repeat2, ShoppingBag } from "lucide-react";

const services = [
  { icon: Video, title: "UGC Video Creation", description: "Scroll-stopping short-form videos — unboxings, tutorials, testimonials — shot authentically in my real home." },
  { icon: Camera, title: "Product Photography", description: "Warm, lifestyle-driven photos that show your product fitting naturally into everyday family life." },
  { icon: FileText, title: "Hook & Script Writing", description: "Punchy, conversion-driven hooks and scripts tailored to your audience and platform." },
  { icon: Sparkles, title: "Testimonial Videos", description: "Genuine, trust-building review content that turns browsers into buyers." },
  { icon: ShoppingBag, title: "Amazon / Retail UGC", description: "Optimized content for Amazon storefronts, PDPs, and retail ads that boosts rankings." },
  { icon: Repeat2, title: "Monthly Retainer", description: "Consistent, on-brand content delivered every month — the easiest way to stay ahead." },
];

export function Services() {
  return (
    <section id="services" style={{ background: "#F5EFDC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            What I Do
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            Services
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        {/* Outer top + left border on the container, plus bottom + right on every
            cell, gives a complete grid regardless of column count (1 / 2 / 3). */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-0"
          style={{
            borderTop: "1px solid rgba(28,19,8,0.15)",
            borderLeft: "1px solid rgba(28,19,8,0.15)",
          }}
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="group p-8"
                style={{
                  borderBottom: "1px solid rgba(28,19,8,0.15)",
                  borderRight: "1px solid rgba(28,19,8,0.15)",
                }}
              >
                <Icon className="w-5 h-5 mb-5" style={{ color: "#1C1308", opacity: 0.6 }} />
                <h3
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.15rem", color: "#1C1308", marginBottom: "0.75rem" }}
                >
                  {svc.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#6B5B3E", lineHeight: 1.7 }}>{svc.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
