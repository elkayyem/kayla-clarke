import { Heart, Camera, Star } from "lucide-react";

const pillars = [
  { icon: Heart, label: "Mom-Powered Authenticity", desc: "Three kids, zero staged perfection. Real chaos, real life, real content." },
  { icon: Camera, label: "End-to-End Production", desc: "I write, film, edit, and deliver — no hand-holding required." },
  { icon: Star, label: "Brand-First Approach", desc: "I study your voice and your audience before I even pick up my phone." },
];

export function About() {
  return (
    <section id="about" style={{ background: "#EDE5CC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            About Me
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            Hi, I'm Kayla —<br />
            <em style={{ fontWeight: 400 }}>mom, creator, your brand's new best friend.</em>
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: images */}
          <div className="relative h-[480px]">
            <div className="absolute left-0 top-0 w-[65%] h-[80%] overflow-hidden" style={{ borderRadius: "2px" }}>
              <img
                src="https://images.unsplash.com/photo-1719693422103-b5171e92bf99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=500&h=600&auto=format"
                alt="Kayla at home"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute right-0 bottom-0 w-[50%] h-[52%] overflow-hidden"
              style={{ borderRadius: "2px", border: "6px solid #EDE5CC" }}
            >
              <img
                src="https://images.unsplash.com/photo-1700217300042-0e6cd2371d32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=380&auto=format"
                alt="Kayla creating content"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small stat label */}
            <div
              className="absolute"
              style={{ left: "58%", top: "14%", background: "#1C1308", color: "#F5EFDC", padding: "1rem 1.25rem" }}
            >
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>3+</p>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.08em", opacity: 0.7, marginTop: "2px" }}>YEARS CREATING</p>
            </div>
          </div>

          {/* Right: copy + pillars */}
          <div>
            <div className="space-y-4 mb-10" style={{ color: "#6B5B3E", fontSize: "0.9rem", lineHeight: 1.8 }}>
              <p>
                I started creating content because I wanted something flexible enough to fit around
                three kids and a full life — and discovered I was actually really good at it.
              </p>
              <p>
                Brands come to me because I create content that feels like a real recommendation,
                not an ad. My audience is moms, families, and everyday people — and I know exactly
                what makes them stop, watch, and buy.
              </p>
              <p>
                I've worked with 50+ brands across skincare, home, tech, fashion, and food —
                and every collaboration is built on trust, communication, and content that converts.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(28,19,8,0.15)", paddingTop: "2rem" }} className="flex flex-col gap-6">
              {pillars.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#1C1308", opacity: 0.5 }} />
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.95rem", color: "#1C1308", marginBottom: "2px" }}>{label}</p>
                    <p style={{ fontSize: "0.83rem", color: "#6B5B3E", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
