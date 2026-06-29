import { Mail, Instagram } from "lucide-react";
import { Marquee } from "./Marquee";

export function Hero() {
  const contactLineStyle = {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic" as const,
    fontWeight: 400,
    fontSize: "clamp(0.75rem, 1.4vw, 0.92rem)",
    letterSpacing: "0.08em",
    color: "#1C1308",
    textDecoration: "none",
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#F5EFDC" }}
    >
      {/* Main hero layout */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 pb-0 flex flex-col">

        {/* Top strip: name + photos. Stacks on mobile so both photos stay visible. */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-6">

          {/* Left: Masthead name block */}
          <div className="flex flex-col gap-0 flex-1 min-w-0">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 13vw, 9.5rem)",
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
              UGC CONTENT CREATOR
            </p>

            {/* Contact lines — email + instagram share identical styling */}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="mailto:kayla@kaylaclarke.co"
                className="flex items-center gap-2"
                style={contactLineStyle}
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                KAYLA@KAYLACLARKE.CO
              </a>
              <a
                href="https://instagram.com/kaylaclarke.ugc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                style={contactLineStyle}
              >
                <Instagram className="w-4 h-4 flex-shrink-0" />
                KAYLACLARKE.UGC
              </a>
            </div>
          </div>

          {/* Right: Two photos. 2-up grid on mobile, stacked column on desktop. */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 w-full md:w-[290px] lg:w-[330px] flex-shrink-0">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "4px", aspectRatio: "3/2" }}
            >
              <img
                src="https://images.unsplash.com/photo-1695408247109-3bf125ad0538?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=500&h=340&auto=format"
                alt="Kayla Clarke filming content"
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 hover:-translate-y-1"
              />
            </div>
            <div
              className="overflow-hidden"
              style={{ borderRadius: "4px", aspectRatio: "3/2.4" }}
            >
              <img
                src="https://images.unsplash.com/photo-1665327475815-afea816da76a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=500&h=400&auto=format"
                alt="Kayla lifestyle content creation"
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed moving banner */}
      <div className="mt-12">
        <Marquee />
      </div>

      {/* Portfolio video categories */}
      <div id="portfolio" className="max-w-5xl mx-auto px-6 sm:px-8 mt-16 scroll-mt-8">
        {categories.map((cat) => (
          <VideoCategory key={cat.title} title={cat.title} items={cat.items} />
        ))}
      </div>

      {/* CTA to rest of page */}
      <div className="text-center pb-12">
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
          View Services & Packages ↓
        </a>
      </div>
    </section>
  );
}

type VideoItem = { img: string; title: string; type: string };

const categories: { title: string; items: VideoItem[] }[] = [
  {
    title: "Motherhood",
    items: [
      { img: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Day-in-the-Life", type: "Reel" },
      { img: "https://images.unsplash.com/photo-1665327469792-cf91f5b8d74c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Morning Routine", type: "Reel" },
      { img: "https://images.unsplash.com/photo-1694754920848-8855ee3ff364?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Cozy Home Edit", type: "UGC Video" },
    ],
  },
  {
    title: "Food & Beverage",
    items: [
      { img: "https://images.unsplash.com/photo-1694813646506-135688fc24e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Kitchen Content", type: "UGC Video" },
      { img: "https://images.unsplash.com/photo-1580978021233-a08315b01771?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Morning Coffee", type: "Reel" },
      { img: "https://images.unsplash.com/photo-1719693422103-b5171e92bf99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Recipe in Real Time", type: "Reel" },
    ],
  },
  {
    title: "Toddler & Baby",
    items: [
      { img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Snack Time Faves", type: "UGC Video" },
      { img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Nursery Must-Haves", type: "Reel" },
      { img: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=400&h=500&auto=format", title: "Playtime Picks", type: "Reel" },
    ],
  },
];

function VideoCategory({ title, items }: { title: string; items: VideoItem[] }) {
  return (
    <div className="mb-16">
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.01em",
          color: "#1C1308",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden"
            style={{ aspectRatio: "4/5", borderRadius: "4px" }}
          >
            <img
              src={item.img}
              alt={`${title} — ${item.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover overlay (matches the play-button card style) */}
            <div
              className="absolute inset-0 flex flex-col p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(28,19,8,0.45)" }}
            >
              {/* Category label */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  color: "rgba(245,239,220,0.85)",
                }}
              >
                {title}
              </p>

              {/* Centered play button */}
              <div className="flex-1 flex items-center justify-center">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: "56px", height: "56px", background: "rgba(245,239,220,0.92)" }}
                >
                  <svg className="w-5 h-5 ml-1" fill="#1C1308" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Title + type */}
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#F5EFDC",
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: "rgba(245,239,220,0.75)",
                    marginTop: "4px",
                  }}
                >
                  {item.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
