function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="overflow-hidden py-2">
      <div
        className={reverse ? "animate-marquee-reverse" : "animate-marquee"}
        style={{
          display: "flex",
          width: "max-content",
          gap: "0",
        }}
      >
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} style={{ display: "flex", alignItems: "center" }}>
            {items.map((i) => (
              <span
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 0 }}
              >
                <span
                  className="font-display whitespace-nowrap px-6 py-1"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    color: reverse ? "#204D36" : "#FAF9F5",
                    letterSpacing: "0.05em",
                  }}
                >
                  LE PARADIS DU FRUIT
                </span>
                <span
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 8px",
                  }}
                  aria-hidden="true"
                >
                  🍎
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="overflow-hidden py-4 select-none"
      aria-label="Le Paradis du Fruit"
      style={{ backgroundColor: "#FED117" }}
    >
      {/* Ligne 1 — gauche vers droite */}
      <div style={{ backgroundColor: "#204D36" }}>
        <MarqueeTrack />
      </div>

      {/* Ligne 2 — droite vers gauche */}
      <div style={{ backgroundColor: "#FED117" }}>
        <MarqueeTrack reverse />
      </div>
    </section>
  );
}
