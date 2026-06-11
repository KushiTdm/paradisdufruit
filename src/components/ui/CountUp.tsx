"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Compteur animé au scroll : le nombre grimpe de 0 à sa valeur
 * quand il entre dans le viewport.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className = "",
  style,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const format = (v: number) =>
    `${prefix}${v.toLocaleString("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: false,
    })}${suffix}`;

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;

      const el = ref.current;
      const proxy = { v: 0 };
      gsap.to(proxy, {
        v: value,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        onUpdate: () => {
          el.textContent = format(proxy.v);
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className} style={style}>
      {format(value)}
    </span>
  );
}
