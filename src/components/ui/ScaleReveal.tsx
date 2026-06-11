"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type ScaleRevealProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Zoom progressif piloté par le scroll (scrub) : la carte grossit
 * de 92 % à 100 % en entrant dans le viewport.
 */
export default function ScaleReveal({ children, className = "" }: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      gsap.fromTo(
        ref.current,
        { scale: 0.92, y: 48 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 95%",
            end: "top 45%",
            scrub: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
