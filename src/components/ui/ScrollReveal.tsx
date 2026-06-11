"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  distance?: number;
};

const directionMap = {
  up: { axis: "y", sign: 1 },
  down: { axis: "y", sign: -1 },
  left: { axis: "x", sign: 1 },
  right: { axis: "x", sign: -1 },
  none: { axis: "y", sign: 0 },
} as const;

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      const { axis, sign } = directionMap[direction];
      gsap.from(ref.current, {
        [axis]: sign * distance,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
