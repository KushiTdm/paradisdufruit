"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Smooth scrolling global via Lenis, synchronisé avec GSAP ScrollTrigger.
 * Désactivé si l'utilisateur préfère réduire les animations.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      lerp: 0.12,
      anchors: { offset: -80 },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recalcule les positions une fois que tout est monté (images, layout shifts…)
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      window.clearTimeout(refreshTimer);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // Sur changement de route Next, on remonte en haut et on rafraîchit ScrollTrigger
  useEffect(() => {
    if (prefersReducedMotion()) return;
    window.scrollTo(0, 0);
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
