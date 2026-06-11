import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Devenir franchisé — L'Éden Fruité",
};

const steps = [
  { n: "01", title: "Premier contact", desc: "Un échange téléphonique de 30 minutes pour comprendre votre projet et vos motivations." },
  { n: "02", title: "Étude de marché", desc: "Nous étudions ensemble la zone d'implantation et le potentiel commercial." },
  { n: "03", title: "Formation", desc: "8 semaines de formation : cuisine, management, gestion, communication." },
  { n: "04", title: "Ouverture", desc: "Accompagnement complet du chantier à l'ouverture et au-delà." },
];

const numbers = [
  { value: "150 k€", label: "Apport personnel" },
  { value: "350 k€", label: "Investissement total" },
  { value: "5 %", label: "Royalties / CA" },
  { value: "18 mois", label: "ROI moyen" },
];

export default function FranchisePage() {
  return (
    <DemoPage
      kicker="Rejoignez l'aventure"
      title="Devenir"
      titleAccent="franchisé"
      description="Rejoignez un réseau en pleine croissance et ouvrez votre propre restaurant L'Éden Fruité. Nous vous accompagnons à chaque étape, du choix du local à l'ouverture, et bien après."
    >
      {/* Chiffres-clés */}
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <ScrollReveal delay={0}>
            <div
              className="rounded-3xl p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6"
              style={{ backgroundColor: "#204D36" }}
            >
              {numbers.map((n) => (
                <div key={n.label} className="text-center">
                  <p className="font-display text-3xl lg:text-5xl mb-1" style={{ color: "#FED117" }}>
                    {n.value}
                  </p>
                  <p className="font-body text-xs lg:text-sm text-white/70">{n.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Étapes */}
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <ScrollReveal delay={0}>
            <h2 className="font-display text-3xl lg:text-4xl mb-10" style={{ color: "#204D36" }}>
              Le parcours en 4 étapes
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.08}>
                <div className="rounded-2xl p-6 h-full" style={{ backgroundColor: "white" }}>
                  <p className="font-display text-4xl mb-3" style={{ color: "#EA6660" }}>
                    {s.n}
                  </p>
                  <h3 className="font-display text-xl mb-2" style={{ color: "#204D36" }}>
                    {s.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.7 }}>
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <button type="button" className="btn-pill btn-pill-coral">
                Recevoir le dossier candidat
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </DemoPage>
  );
}
