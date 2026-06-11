"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type ParallaxProps = {
  children: React.ReactNode;
  /** Amplitude du déplacement : 1 ≈ 90px de débattement. Négatif = sens inverse. */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Déplace son contenu verticalement au rythme du scroll (scrub),
 * pendant toute la traversée du viewport.
 */
export default function Parallax({ children, speed = 0.5, className = "", style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      const distance = speed * 90;
      gsap.fromTo(
        ref.current,
        { y: distance },
        {
          y: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
