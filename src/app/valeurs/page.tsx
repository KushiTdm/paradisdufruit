import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Nos valeurs — L'Éden Fruité",
};

const values = [
  { emoji: "🌱", title: "La fraîcheur, sans excuse", desc: "Si c'est pas frais, c'est pas dans nos cuisines. Point." },
  { emoji: "🤝", title: "Le respect du producteur", desc: "Des partenariats longs, des prix justes, des relations directes." },
  { emoji: "🎨", title: "Le plaisir avant tout", desc: "Un plat sain qui n'est pas bon, c'est un échec. On ne transige pas." },
  { emoji: "♻️", title: "L'empreinte minimum", desc: "Zéro déchet en cuisine, vaisselle réutilisable, compostage in-situ." },
  { emoji: "💛", title: "L'humain au centre", desc: "Équipes formées, payées au-dessus du marché, parcours d'évolution clairs." },
  { emoji: "🔬", title: "L'exigence nutritionnelle", desc: "Chaque recette validée par nos diététiciens. Aucun additif, aucun compromis." },
];

export default function ValeursPage() {
  return (
    <DemoPage
      kicker="Ce qui nous guide"
      title="Nos"
      titleAccent="valeurs"
      description="Six convictions qui guident chacune de nos décisions, du choix d'un producteur au design d'un nouveau restaurant."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <article
                  className="rounded-3xl p-8 h-full"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="text-5xl mb-4">{v.emoji}</div>
                  <h3 className="font-display text-xl mb-3" style={{ color: "#204D36" }}>
                    {v.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.7 }}>
                    {v.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
