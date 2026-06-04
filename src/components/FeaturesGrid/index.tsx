import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    id: 1,
    title: "Produits de saison",
    description: "Nous travaillons exclusivement avec les récoltes du moment pour vous offrir le meilleur des saveurs.",
    image: "https://images.unsplash.com/photo-1608032077018-c9afd9370d12?w=600&q=80",
    alt: "Fruits et légumes colorés de saison",
  },
  {
    id: 2,
    title: "Recettes créatives",
    description: "Nos chefs revisitent chaque saison des recettes originales alliant nutrition et plaisir gustatif.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    alt: "Chef préparant une recette créative",
  },
  {
    id: 3,
    title: "Cadre végétal",
    description: "Chaque restaurant est un écrin de verdure : plantes, lumière naturelle et matériaux durables.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
    alt: "Salle de restaurant avec végétation",
  },
  {
    id: 4,
    title: "Service rapide",
    description: "De la commande au plateau en moins de 5 minutes, sans compromis sur la qualité ni la fraîcheur.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    alt: "Plateau de plat servi rapidement",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        <ScrollReveal delay={0}>
          <div className="text-center mb-12">
            <p className="subtitle-script mb-3">Pourquoi nous choisir</p>
            <h2 className="title-display" style={{ color: "#204D36" }}>
              Nos{" "}
              <span style={{ color: "#EA6660" }}>atouts</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.id} delay={i * 0.1}>
              <div className="group">
                <div
                  className="relative overflow-hidden mb-5"
                  style={{ borderRadius: "16px", aspectRatio: "3/4" }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(32,77,54,0.5) 0%, transparent 50%)" }}
                  />
                </div>
                <h3
                  className="font-display text-2xl mb-2 transition-colors duration-200 group-hover:text-fruit-coral"
                  style={{ color: "#204D36" }}
                >
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.65 }}>
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
