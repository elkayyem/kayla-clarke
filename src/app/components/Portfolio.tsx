import { useState } from "react";

const portfolioItems = [
  { image: "https://images.unsplash.com/photo-1779056904689-ff99fd0045a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=700&auto=format", category: "Skincare", title: "Skincare Morning Ritual", type: "Video + Photo" },
  { image: "https://images.unsplash.com/photo-1694813646506-135688fc24e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=500&auto=format", category: "Food & Lifestyle", title: "Kitchen Content Series", type: "UGC Video" },
  { image: "https://images.unsplash.com/photo-1505252912265-4e83cec30e2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=600&auto=format", category: "Lifestyle", title: "Morning Routine Flatlay", type: "Photography" },
  { image: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=750&auto=format", category: "Fashion & Beauty", title: "GRWM Testimonial", type: "UGC Video" },
  { image: "https://images.unsplash.com/photo-1694754920848-8855ee3ff364?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=600&auto=format", category: "Home & Wellness", title: "Cozy Home Edit", type: "Photo + Reel" },
  { image: "https://images.unsplash.com/photo-1606987481980-f8029d617991?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=600&h=500&auto=format", category: "Tech / App", title: "App Demo Walkthrough", type: "Screen + UGC" },
];

const categories = ["All", "Skincare", "Food & Lifestyle", "Lifestyle", "Fashion & Beauty", "Home & Wellness", "Tech / App"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="portfolio" style={{ background: "#F5EFDC" }} className="py-24">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#6B5B3E" }}
            className="mb-3 uppercase"
          >
            Portfolio
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1C1308", lineHeight: 1.1 }}
            >
              More work
            </h2>
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "0.78rem",
                    letterSpacing: "0.06em",
                    color: active === cat ? "#F5EFDC" : "#1C1308",
                    background: active === cat ? "#1C1308" : "transparent",
                    border: "1px solid rgba(28,19,8,0.3)",
                    padding: "4px 14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)", marginTop: "1.5rem" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/3" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(28,19,8,0.6)" }}
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.72rem", letterSpacing: "0.1em", color: "rgba(245,239,220,0.7)", marginBottom: "4px" }}>
                  {item.category}
                </p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#F5EFDC" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,239,220,0.7)", marginTop: "4px" }}>{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
