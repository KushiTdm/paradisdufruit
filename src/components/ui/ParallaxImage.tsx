"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  imgClassName?: string;
  /** Overlays (gradients, badges…) rendus au-dessus de l'image */
  children?: React.ReactNode;
};

/**
 * Image avec parallax interne : l'image, plus haute que son cadre,
 * glisse verticalement au scroll sans jamais découvrir les bords.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  style,
  imgClassName = "",
  children,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !wrapRef.current || !innerRef.current) return;

      gsap.fromTo(
        innerRef.current,
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`} style={style}>
      <div ref={innerRef} className="absolute" style={{ inset: "-12% 0" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={`object-cover ${imgClassName}`}
        />
      </div>
      {children}
    </div>
  );
}
