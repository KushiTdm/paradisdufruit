import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import RotatingBadge from "@/components/ui/RotatingBadge";
import Parallax from "@/components/ui/Parallax";
import ParallaxImage from "@/components/ui/ParallaxImage";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 80, suffix: "+", label: "Restaurants" },
  { value: 12, suffix: "M+", label: "Clients / an" },
  { value: 2005, label: "Fondé en" },
] as const;

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="section-pad overflow-hidden" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Bloc texte */}
          <div>
            <ScrollReveal delay={0}>
              <p className="subtitle-script mb-3">Nos restaurants</p>
            </ScrollReveal>

            <AnimatedTitle
              className="title-display mb-6"
              style={{ color: "#204D36" }}
              segments={[
                { text: "Un" },
                { text: "lieu" },
                { text: "de", br: true },
                { text: "vie", color: "#F5BBBB" },
                { text: "et" },
                { text: "de", br: true },
                { text: "saveurs", color: "#EA6660" },
              ]}
            />

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base leading-relaxed mb-8 max-w-lg" style={{ color: "#204D36", opacity: 0.75 }}>
                Depuis 2005, nos restaurants vous accueillent dans un cadre chaleureux et végétal pour une pause gourmande et ressourçante. Plus de 80 adresses à travers la France, chacune avec son caractère unique.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <CountUp
                      value={stat.value}
                      suffix={"suffix" in stat ? stat.suffix : ""}
                      className="font-display text-4xl block"
                      style={{ color: "#204D36" }}
                    />
                    <p className="font-body text-sm" style={{ color: "#204D36", opacity: 0.6 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <a href="#restaurants" className="btn-pill btn-pill-coral inline-block">
                Trouver un restaurant
              </a>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                alt="Salle de restaurant L'Éden Fruité"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ borderRadius: "48px 16px 48px 16px", aspectRatio: "4/5" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(32,77,54,0.2), transparent 50%)" }}
                />
              </ParallaxImage>

              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 lg:-left-10">
                <Parallax speed={0.45}>
                  <RotatingBadge
                    text="• BON APPÉTIT • DEPUIS 2005 •"
                    emoji="🌱"
                    size={130}
                    bgColor="#F5BBBB"
                    textColor="#204D36"
                  />
                </Parallax>
              </div>

              {/* Info card flottante */}
              <Parallax
                speed={-0.35}
                className="absolute top-6 -right-4 lg:-right-8"
              >
                <div
                  className="rounded-2xl p-4 shadow-xl"
                  style={{ backgroundColor: "#FED117", maxWidth: "160px" }}
                >
                  <p className="font-display text-3xl" style={{ color: "#204D36" }}>
                    <CountUp value={4.8} decimals={1} />
                  </p>
                  <div className="flex gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#204D36">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-xs font-semibold" style={{ color: "#204D36" }}>
                    +24 000 avis
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
