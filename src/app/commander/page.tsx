import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Commander en ligne — L'Éden Fruité",
};

const channels = [
  { name: "Click & Collect", desc: "Préparez votre commande, récupérez-la en 15 min en restaurant.", icon: "🥡", cta: "Choisir un restaurant" },
  { name: "Livraison", desc: "Livrée chez vous en moins de 30 minutes par nos partenaires.", icon: "🛵", cta: "Voir la zone" },
  { name: "Repas d'équipe", desc: "Plateaux-repas, buffets, traiteur d'entreprise sur mesure.", icon: "🍱", cta: "Demander un devis" },
];

export default function CommanderPage() {
  return (
    <DemoPage
      kicker="Click, Collect & Yummi"
      title="Commander"
      titleAccent="en ligne"
      description="Trois façons de profiter de notre cuisine sans bouger. Choisissez votre mode, votre restaurant et composez votre commande en quelques clics."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.08}>
                <article
                  className="rounded-3xl p-8 h-full flex flex-col"
                  style={{ backgroundColor: "white", boxShadow: "0 4px 24px rgba(32,77,54,0.06)" }}
                >
                  <div className="text-5xl mb-5">{c.icon}</div>
                  <h3 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                    {c.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#204D36", opacity: 0.7 }}>
                    {c.desc}
                  </p>
                  <button type="button" className="btn-pill btn-pill-coral self-start">
                    {c.cta}
                  </button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
