import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import RotatingBadge from "@/components/ui/RotatingBadge";
import Parallax from "@/components/ui/Parallax";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function CuisineSection() {
  return (
    <section id="cuisine" className="section-pad overflow-hidden" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Texte */}
          <div className="order-2 lg:order-1">
            <ScrollReveal delay={0}>
              <p className="subtitle-script mb-3">À l&apos;Éden Fruité</p>
            </ScrollReveal>

            <AnimatedTitle
              className="title-display mb-6"
              style={{ color: "#204D36" }}
              segments={[
                { text: "Notre", br: true },
                { text: "cuisine", color: "#F5BBBB" },
              ]}
            />

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#204D36", opacity: 0.75 }}>
                Chaque matin, nos cuisiniers sélectionnent les meilleurs fruits et légumes du marché pour composer des assiettes colorées, équilibrées et savoureuses. Notre carte change au fil des saisons pour respecter la nature et sublimer les goûts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <ul className="space-y-3 mb-8">
                {[
                  "Préparations fraîches chaque jour",
                  "Recettes développées avec nos nutritionnistes",
                  "Zéro conservateur, zéro additif",
                  "Allergènes affichés pour chaque plat",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-sm" style={{ color: "#204D36" }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#65B330" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href="/carte" className="btn-pill btn-pill-green inline-block">
                Voir notre carte
              </Link>
            </ScrollReveal>
          </div>

          {/* Image + badge */}
          <ScrollReveal delay={0.1} direction="left" className="order-1 lg:order-2">
            <div className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=85"
                alt="Notre cuisine fraîche et colorée"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ borderRadius: "16px 48px 16px 48px", aspectRatio: "1/1" }}
              />

              {/* Badge rotatif */}
              <div className="absolute -top-6 -right-6 lg:-right-10">
                <Parallax speed={-0.4}>
                  <RotatingBadge
                    text="• FAIT MAISON • CHAQUE JOUR •"
                    emoji="🧑‍🍳"
                    size={140}
                    bgColor="#EA6660"
                    textColor="white"
                  />
                </Parallax>
              </div>

              {/* Tag flottant bas */}
              <Parallax speed={0.35} className="absolute -bottom-4 left-6">
                <div
                  className="rounded-2xl px-5 py-3 shadow-lg"
                  style={{ backgroundColor: "#FED117" }}
                >
                  <p className="font-display text-lg" style={{ color: "#204D36" }}>
                    Ouvert 7j/7
                  </p>
                  <p className="font-body text-xs" style={{ color: "#204D36", opacity: 0.7 }}>
                    11h30 – 22h00
                  </p>
                </div>
              </Parallax>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
