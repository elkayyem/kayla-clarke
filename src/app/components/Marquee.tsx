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
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
              color: "#F5EFDC",
              padding: "0 1.5rem",
            }}
          >
            {item}
          </span>
          <span style={{ color: "#B87461", fontSize: "0.9rem" }}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" style={{ background: "#1C1308", padding: "0.85rem 0" }}>
      <div className="marquee-track">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
