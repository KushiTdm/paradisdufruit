"use client";

import { useRef, createElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export type TitleSegment = {
  text: string;
  color?: string;
  /** Saut de ligne après ce segment */
  br?: boolean;
};

type AnimatedTitleProps = {
  segments: TitleSegment[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

/**
 * Titre révélé mot par mot au scroll : chaque mot glisse hors d'un masque
 * (overflow hidden) avec un léger stagger — effet "rideau" éditorial.
 */
export default function AnimatedTitle({
  segments,
  as = "h2",
  className = "",
  style,
  delay = 0,
}: AnimatedTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      gsap.from(ref.current.querySelectorAll<HTMLElement>(".word-inner"), {
        yPercent: 115,
        duration: 0.85,
        ease: "power4.out",
        stagger: 0.07,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
        },
      });
    },
    { scope: ref }
  );

  const content: React.ReactNode[] = [];
  segments.forEach((seg, i) => {
    content.push(
      <span key={i} className="word-mask">
        <span className="word-inner" style={seg.color ? { color: seg.color } : undefined}>
          {seg.text}
        </span>
      </span>
    );
    if (seg.br) content.push(<br key={`br-${i}`} />);
    else content.push(" ");
  });

  return createElement(as, { ref, className, style }, content);
}
