import { useState } from "react";
import { Mail, Instagram } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", brand: "", pkg: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(28,19,8,0.3)",
    padding: "0.6rem 0",
    fontSize: "0.88rem",
    color: "#1C1308",
    outline: "none",
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic" as const,
  };

  const labelStyle = {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic" as const,
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    color: "#6B5B3E",
    textTransform: "uppercase" as const,
    display: "block" as const,
    marginBottom: "4px",
  };

  return (
    <section id="contact" style={{ background: "#EDE5CC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            Let's Connect
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
          >
            Ready to create something<br />
            <em style={{ fontWeight: 400 }}>people actually watch?</em>
          </h2>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: copy + contact methods */}
          <div>
            <p style={{ fontSize: "0.9rem", color: "#6B5B3E", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Tell me about your brand, your product, and your goals. I'll get back to you within
              24 hours with whether we're a fit — and what I'd create for you.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:kayla@kaylaclarke.co"
                className="flex items-center gap-4 group"
                style={{ borderBottom: "1px solid rgba(28,19,8,0.15)", paddingBottom: "1.25rem" }}
              >
                <Mail className="w-4 h-4" style={{ color: "#1C1308", opacity: 0.5 }} />
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#6B5B3E", textTransform: "uppercase" }}>Email</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#1C1308" }}>kayla@kaylaclarke.co</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 group"
                style={{ borderBottom: "1px solid rgba(28,19,8,0.15)", paddingBottom: "1.25rem" }}
              >
                <Instagram className="w-4 h-4" style={{ color: "#1C1308", opacity: 0.5 }} />
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72rem", letterSpacing: "0.1em", color: "#6B5B3E", textTransform: "uppercase" }}>Instagram</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#1C1308" }}>@kaylaclarke.ugc</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="flex flex-col gap-4 py-12">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "2rem", color: "#1C1308" }}>Message sent.</h3>
                <p style={{ fontSize: "0.88rem", color: "#6B5B3E", lineHeight: 1.7 }}>
                  I'll be in touch within 24 hours. Can't wait to work together!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input style={inputStyle} placeholder="Jane Smith" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input style={inputStyle} type="email" placeholder="jane@brand.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={labelStyle}>Brand / Company</label>
                  <input style={inputStyle} placeholder="Your brand name" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} />
                </div>
                <div>
                  <label style={labelStyle}>Package Interest</label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.pkg}
                    onChange={e => setForm({ ...form, pkg: e.target.value })}
                  >
                    <option value="">Select a package...</option>
                    <option>Starter ($250)</option>
                    <option>Creator ($650/mo)</option>
                    <option>Brand Partner (Custom)</option>
                    <option>Custom / One-Off</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tell me about your project</label>
                  <textarea
                    style={{ ...inputStyle, resize: "none", borderBottom: "1px solid rgba(28,19,8,0.3)" }}
                    placeholder="Product, goals, timeline..."
                    rows={4}
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      letterSpacing: "0.06em",
                      color: "#F5EFDC",
                      background: "#1C1308",
                      border: "none",
                      padding: "0.85rem 2.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Send message →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
