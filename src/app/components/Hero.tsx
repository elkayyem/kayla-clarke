import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#F5EFDC" }}
    >
      {/* Main hero layout — mirroring inspo1 */}
      <div className="max-w-5xl mx-auto px-8 pt-12 pb-0 flex flex-col">

        {/* Top strip: name + photos side by side */}
        <div className="flex items-start justify-between gap-6">

          {/* Left: Masthead name block */}
          <div className="flex flex-col gap-0 flex-1">
            {/* Big serif stacked name — fills the space like inspo1 */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(4.5rem, 12vw, 9.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                color: "#1C1308",
                textTransform: "uppercase",
              }}
            >
              KAYLA<br />CLARKE
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                color: "#1C1308",
                marginTop: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              CONTENT CREATOR · UGC MOM OF 3
            </p>

            {/* Email */}
            <a
              href="mailto:kayla@kaylaclarke.co"
              className="flex items-center gap-2 mt-3 group"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(0.7rem, 1.4vw, 0.9rem)",
                letterSpacing: "0.08em",
                color: "#1C1308",
                textDecoration: "none",
              }}
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              KAYLA@KAYLACLARKE.CO
            </a>

            {/* Social handles */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(0.65rem, 1.2vw, 0.82rem)",
                letterSpacing: "0.08em",
                color: "#6B5B3E",
                marginTop: "0.4rem",
              }}
            >
              @KAYLACLARKE.UGC
            </p>

            {/* Divider + trusted by */}
            <div className="mt-8 mb-0">
              <div style={{ width: "100%", height: "1px", background: "rgba(28,19,8,0.2)" }} />
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  color: "#6B5B3E",
                  marginTop: "0.75rem",
                }}
              >
                TRUSTED BY TOP BRANDS ↓
              </p>
            </div>
          </div>

          {/* Right: Two photos stacked like inspo1 */}
          <div className="flex flex-col gap-3 flex-shrink-0" style={{ width: "clamp(200px, 30vw, 340px)" }}>
            {/* Top photo — portrait/selfie style */}
            <div
              className="overflow-hidden"
              style={{ borderRadius: "4px", aspectRatio: "3/2" }}
            >
              <img
                src="https://images.unsplash.com/photo-1695408247109-3bf125ad0538?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=500&h=340&auto=format"
                alt="Kayla Clarke filming content"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom photo — lifestyle outdoor */}
            <div
              className="overflow-hidden"
              style={{ borderRadius: "4px", aspectRatio: "3/2.4" }}
            >
              <img
                src="https://images.unsplash.com/photo-1665327475815-afea816da76a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=500&h=400&auto=format"
                alt="Kayla lifestyle content creation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Portfolio sections — styled like inspo1 category headers + grid */}
        <div className="mt-14">
          <PortfolioCategory
            title="MOM + LIFESTYLE"
            items={momItems}
          />
          <PortfolioCategory
            title="BEAUTY + SKINCARE"
            items={beautyItems}
          />
          <PortfolioCategory
            title="FOOD + HOME"
            items={foodItems}
          />
        </div>

        {/* CTA to rest of page */}
        <div className="text-center py-12">
          <a
            href="#services"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              color: "#1C1308",
              borderBottom: "1px solid rgba(28,19,8,0.4)",
              paddingBottom: "2px",
            }}
          >
            View Full Services & Packages ↓
          </a>
        </div>
      </div>
    </section>
  );
}

const momItems = [
  {
    img: "https://images.unsplash.com/photo-1694813646506-135688fc24e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Kitchen UGC",
  },
  {
    img: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Day-in-the-Life",
  },
  {
    img: "https://images.unsplash.com/photo-1665327469792-cf91f5b8d74c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Mom Morning Routine",
  },
  {
    img: "https://images.unsplash.com/photo-1694754920848-8855ee3ff364?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Cozy Home",
  },
];

const beautyItems = [
  {
    img: "https://images.unsplash.com/photo-1779056904689-ff99fd0045a4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Skincare Ritual",
  },
  {
    img: "https://images.unsplash.com/photo-1505252912265-4e83cec30e2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Flatlay Styling",
  },
  {
    img: "https://images.unsplash.com/photo-1612529378924-5d9afa8fe407?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "GRWM",
  },
  {
    img: "https://images.unsplash.com/photo-1606987481980-f8029d617991?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Product Review",
  },
];

const foodItems = [
  {
    img: "https://images.unsplash.com/photo-1580978021233-a08315b01771?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Morning Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1719693422103-b5171e92bf99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Home Lifestyle",
  },
  {
    img: "https://images.unsplash.com/photo-1700217300042-0e6cd2371d32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format",
    label: "Kitchen Scenes",
  },
  {
    img: "https://images.unsplash.com/photo-1580978021233-a08315b01771?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=320&h=400&auto=format&sig=2",
    label: "Recipe UGC",
  },
];

function PortfolioCategory({
  title,
  items,
}: {
  title: string;
  items: { img: string; label: string }[];
}) {
  return (
    <div className="mb-12">
      {/* Category title — large italic serif like inspo1 */}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.01em",
          color: "#1C1308",
          textAlign: "center",
          marginBottom: "1.25rem",
        }}
      >
        {title}
      </h2>

      {/* 4-column photo grid matching inspo1 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "4/5", borderRadius: "2px" }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Play button overlay like inspo1 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(28,19,8,0.25)" }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.9)" }}
              >
                <svg className="w-4 h-4 ml-0.5" fill="#1C1308" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
