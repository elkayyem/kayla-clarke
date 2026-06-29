const items = [
  "Motherhood",
  "Food & Beverage",
  "Toddler & Baby",
  "Authentic UGC",
  "Short-Form Video",
  "Real Life, Real Content",
];

export function Marquee() {
  // Render the list twice inside the track so the -50% loop is seamless.
  const Group = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div className="inline-flex items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="inline-flex items-center">
          <span
            className="marquee-text"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#1C1308",
              padding: "0 1.75rem",
            }}
          >
            {item}
          </span>
          <span className="marquee-star" style={{ color: "#B87461" }}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" style={{ background: "#F5EFDC", padding: "1rem 0" }}>
      <div className="marquee-track">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
