import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Carte fidélité — L'Éden Fruité",
};

const perks = [
  { points: "+100", title: "Bowl offert", desc: "Le bowl signature de votre choix" },
  { points: "+250", title: "Atelier cuisine", desc: "Une place pour notre atelier mensuel" },
  { points: "+500", title: "Repas en duo", desc: "Une expérience signature pour 2" },
];

export default function FidelitePage() {
  return (
    <DemoPage
      kicker="Plus on vous voit, plus on vous gâte"
      title="Carte"
      titleAccent="fidélité"
      description="Gratuite, dématérialisée, valable partout en France. 1 € dépensé = 1 point. Et plein de surprises tout au long de l'année."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          {/* Carte démo */}
          <ScrollReveal delay={0}>
            <div className="max-w-md mx-auto mb-12">
              <div
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #204D36, #2d6849)" }}
              >
                <p className="font-script text-xl mb-1" style={{ color: "#FED117" }}>
                  Bonjour Camille
                </p>
                <p className="font-body text-white/70 text-sm mb-8">Membre Éden depuis mars 2024</p>
                <p className="font-display text-5xl mb-1 text-white">347</p>
                <p className="font-body text-xs text-white/60 uppercase tracking-widest">points cumulés</p>
                <p className="font-script text-3xl absolute bottom-6 right-6" style={{ color: "#FED117", opacity: 0.4 }}>
                  Éden
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Récompenses */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl mb-6 text-center" style={{ color: "#204D36" }}>
              Vos récompenses
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.15 + i * 0.08}>
                <article className="rounded-3xl p-8 text-center h-full" style={{ backgroundColor: "white" }}>
                  <p className="font-display text-4xl mb-2" style={{ color: "#EA6660" }}>
                    {p.points}
                  </p>
                  <p className="font-body text-xs uppercase tracking-widest mb-3" style={{ color: "#204D36", opacity: 0.55 }}>
                    points
                  </p>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#204D36" }}>
                    {p.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "#204D36", opacity: 0.7 }}>
                    {p.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <button type="button" className="btn-pill btn-pill-coral">
                Créer ma carte fidélité
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </DemoPage>
  );
}
