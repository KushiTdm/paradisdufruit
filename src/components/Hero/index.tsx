"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import RotatingBadge from "@/components/ui/RotatingBadge";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !sectionRef.current) return;

      const q = gsap.utils.selector(sectionRef.current);

      // Timeline d'entrée
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(bgRef.current, { scale: 1.18, duration: 2.2, ease: "power2.out" }, 0)
        .from(q(".hero-kicker"), { y: 24, autoAlpha: 0, duration: 0.7 }, 0.3)
        .from(
          q(".hero-title .word-inner"),
          { yPercent: 115, duration: 1, ease: "power4.out", stagger: 0.09 },
          0.45
        )
        .from(q(".hero-text"), { y: 28, autoAlpha: 0, duration: 0.8 }, 0.95)
        .from(q(".hero-cta"), { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1 }, 1.1)
        .from(q(".hero-badge"), { scale: 0, autoAlpha: 0, duration: 0.8, ease: "back.out(1.6)", stagger: 0.15 }, 1.2)
        .from(q(".hero-scroll"), { autoAlpha: 0, duration: 0.6 }, 1.5);

      // Parallax du fond + sortie du contenu au scroll
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        yPercent: -12,
        autoAlpha: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "30% top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Image de fond avec parallax */}
      <div ref={bgRef} className="absolute" style={{ inset: "-18% 0 0 0" }}>
        <Image
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&q=85"
          alt="Plats frais et colorés de L'Éden Fruité"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(32,77,54,0.78) 0%, rgba(32,77,54,0.38) 60%, rgba(32,77,54,0.12) 100%)",
        }}
      />

      {/* Badge flottant gauche — float CSS sur une couche interne pour ne pas
          écraser le transform animé par GSAP sur .hero-badge */}
      <div className="hero-badge absolute left-6 top-1/3 hidden xl:block">
        <div className="animate-float">
          <RotatingBadge
            text="• FRAIS • NATUREL • SAVOUREUX •"
            emoji="🌿"
            size={140}
            bgColor="#F5BBBB"
            textColor="#204D36"
          />
        </div>
      </div>

      {/* Badge flottant droit */}
      <div className="hero-badge absolute right-8 bottom-1/3 hidden lg:block">
        <div className="animate-float" style={{ animationDelay: "1.5s" }}>
          <RotatingBadge
            text="• L'ÉDEN FRUITÉ • 2005 •"
            emoji="🍍"
            size={120}
            bgColor="#FED117"
            textColor="#204D36"
          />
        </div>
      </div>

      {/* Contenu */}
      <div ref={contentRef} className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <p className="hero-kicker font-body text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
            Bienvenue dans votre éden
          </p>

          <h1
            className="hero-title title-display text-white mb-6"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)" }}
          >
            <span className="word-mask">
              <span className="word-inner">Mangez</span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ color: "#F5BBBB" }}>
                frais,
              </span>
            </span>
            <br />
            <span className="word-mask">
              <span className="word-inner">vivez</span>
            </span>{" "}
            <span className="word-mask">
              <span className="word-inner" style={{ color: "#FED117" }}>
                mieux
              </span>
            </span>
          </h1>

          <p className="hero-text font-body text-white/85 text-lg max-w-md mb-8 leading-relaxed">
            Découvrez une cuisine saine, gourmande et colorée inspirée par les saveurs du monde
            entier. Frais, local et fait avec amour.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Wrappers animés par GSAP — la transition CSS des .btn-pill entre
                en conflit avec les tweens si GSAP anime les boutons directement */}
            <div className="hero-cta">
              <Link href="/carte" className="btn-pill btn-pill-green text-base px-8 py-3">
                Je découvre
              </Link>
            </div>
            <div className="hero-cta">
              <Link
                href="/restaurants"
                className="btn-pill text-base px-8 py-3"
                style={{ border: "2px solid white", color: "white", background: "transparent" }}
              >
                Nos restaurants
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-body text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-0.5 h-10 bg-white/30 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-white rounded-full"
            style={{
              height: "40%",
              animation: "scrollDot 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
