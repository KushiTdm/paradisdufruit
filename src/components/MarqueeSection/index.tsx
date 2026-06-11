"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      if (prefersReducedMotion()) return;

      // Boucle infinie dont la vitesse réagit à la vélocité du scroll
      const tween = gsap.fromTo(
        trackRef.current,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, ease: "none", duration: 28, repeat: -1 }
      );

      let velocity = 0;
      let timeScale = 1;

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          velocity = self.getVelocity();
        },
      });

      const tick = () => {
        const target = gsap.utils.clamp(1, 5, 1 + Math.abs(velocity) / 350);
        timeScale += (target - timeScale) * 0.08;
        tween.timeScale(timeScale);
        velocity *= 0.9;
      };
      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
        st.kill();
      };
    },
    { scope: trackRef }
  );

  const items = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="overflow-hidden py-2">
      <div
        ref={trackRef}
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
                  L&apos;ÉDEN FRUITÉ
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
      aria-label="L'Éden Fruité"
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
