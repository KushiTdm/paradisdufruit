"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode[];
  /** Tailwind responsive classes pour la largeur des slides, ex. `"w-[85%] sm:w-[48%] lg:w-[31%]"` */
  slideClassName?: string;
  gap?: number;
  showArrows?: boolean;
  className?: string;
};

export default function Carousel({
  children,
  slideClassName = "w-[85%] sm:w-[48%] lg:w-[31%]",
  gap = 24,
  showArrows = true,
  className = "",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      <div className="embla" ref={emblaRef}>
        <div
          className="embla__container"
          style={{ gap: `${gap}px` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={`embla__slide flex-shrink-0 ${slideClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="flex gap-3 mt-6">
          <button
            className="arrow-btn disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Précédent"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="arrow-btn disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Suivant"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
