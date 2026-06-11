import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Notre cuisine — L'Éden Fruité",
};

const principles = [
  { title: "Préparations fraîches chaque jour", desc: "Aucun plat n'attend en chambre froide. Nos cuisiniers découpent, mixent et dressent chaque matin." },
  { title: "Recettes nutritionnistes", desc: "Chaque création est validée par notre équipe de diététiciens-nutritionnistes." },
  { title: "Zéro additif", desc: "Pas de conservateurs, pas de colorants, pas de glutamate. Que des ingrédients vrais." },
  { title: "Allergènes transparents", desc: "Chaque plat affiche ses 14 allergènes. Une carte sans gluten est aussi disponible." },
];

export default function CuisinePage() {
  return (
    <DemoPage
      kicker="À l'Éden Fruité"
      title="Notre"
      titleAccent="cuisine"
      description="Une cuisine simple, honnête et joyeuse. Voilà notre obsession depuis 20 ans : prouver que manger sain peut être un vrai plaisir, sans compromis."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <article
                  className="rounded-3xl p-8 h-full"
                  style={{ backgroundColor: "white" }}
                >
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
                    style={{ backgroundColor: "#65B330" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                    {p.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.7 }}>
                    {p.desc}
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
