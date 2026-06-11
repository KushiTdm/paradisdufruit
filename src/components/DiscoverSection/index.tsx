import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import RotatingBadge from "@/components/ui/RotatingBadge";
import ScaleReveal from "@/components/ui/ScaleReveal";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function DiscoverSection() {
  return (
    <section className="section-pad overflow-hidden" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        <div className="text-center mb-10">
          <ScrollReveal delay={0}>
            <p className="subtitle-script mb-2">Le goût du moment</p>
          </ScrollReveal>
          <AnimatedTitle
            className="title-display"
            style={{ color: "#204D36" }}
            segments={[
              { text: "À" },
              { text: "découvrir", br: true },
              { text: "cette", color: "#5CADC7" },
              { text: "saison", color: "#5CADC7" },
            ]}
          />
        </div>

        <ScaleReveal>
          <div
            className="relative overflow-hidden"
            style={{ backgroundColor: "#5CADC7", borderRadius: "32px" }}
          >
            <div className="grid lg:grid-cols-2 items-center">
              {/* Image side */}
              <ParallaxImage
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=85"
                alt="Le burger végétal de la saison"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ minHeight: "420px" }}
              >
                {/* Badge rotatif sur l'image */}
                <div className="absolute top-6 right-6">
                  <RotatingBadge
                    text="• NOUVEAUTÉ • PRINTEMPS 2026 •"
                    emoji="🌸"
                    size={120}
                    bgColor="#FED117"
                    textColor="#204D36"
                  />
                </div>
              </ParallaxImage>

              {/* Texte side */}
              <div className="p-8 lg:p-12">
                <span
                  className="btn-pill text-xs mb-4 inline-block"
                  style={{ background: "rgba(255,255,255,0.25)", color: "white" }}
                >
                  Édition limitée
                </span>

                <h3 className="title-display-sm text-white mb-4">
                  Le Bowl<br />Florentin
                </h3>

                <p className="font-body text-white/80 text-base leading-relaxed mb-6">
                  Quinoa aux herbes fraîches, légumes printaniers rôtis, pesto de roquette maison et copeaux de parmesan. Un voyage en Toscane dans votre assiette.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Végétarien", "Sans gluten", "500 kcal"].map((tag) => (
                    <span
                      key={tag}
                      className="btn-pill text-xs py-1.5 px-3"
                      style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#carte"
                  className="btn-pill btn-pill-white inline-block"
                >
                  Commander maintenant
                </a>
              </div>
            </div>
          </div>
        </ScaleReveal>
      </div>
    </section>
  );
}
