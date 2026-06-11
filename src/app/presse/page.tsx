import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Presse — L'Éden Fruité",
};

const resources = [
  { name: "Kit presse complet", desc: "Logos, photos haute définition, fiche d'identité.", size: "12,4 Mo · ZIP" },
  { name: "Dossier de presse 2026", desc: "Chiffres-clés, nouveautés, projets à venir.", size: "3,1 Mo · PDF" },
  { name: "Photos restaurants", desc: "Banque d'images libre d'usage presse.", size: "84 Mo · ZIP" },
];

const recentMentions = [
  { source: "Le Monde", title: "L'Éden Fruité, le pari healthy qui réussit", date: "Mai 2026" },
  { source: "Elle à Table", title: "Les 10 chaînes healthy qu'on aime", date: "Avril 2026" },
  { source: "France 3 Régions", title: "Comment Lyon a accueilli L'Éden Fruité", date: "Mai 2026" },
];

export default function PressePage() {
  return (
    <DemoPage
      kicker="Espace journalistes"
      title="Presse"
      description="Toutes les ressources dont vous avez besoin pour parler de nous. Pour toute demande spécifique, contactez Sophie Lemaire à presse@edenfruite.fr."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <ScrollReveal delay={0}>
            <h2 className="font-display text-3xl mb-6" style={{ color: "#204D36" }}>
              Ressources à télécharger
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {resources.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.08}>
                <article className="rounded-2xl p-6 h-full flex flex-col" style={{ backgroundColor: "white" }}>
                  <h3 className="font-display text-lg mb-2" style={{ color: "#204D36" }}>
                    {r.name}
                  </h3>
                  <p className="font-body text-xs mb-4 flex-1" style={{ color: "#204D36", opacity: 0.65 }}>
                    {r.desc}
                  </p>
                  <p className="font-body text-xs mb-3" style={{ color: "#EA6660" }}>
                    {r.size}
                  </p>
                  <button type="button" className="btn-pill btn-pill-outline text-xs py-2 px-4 self-start">
                    Télécharger
                  </button>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0}>
            <h2 className="font-display text-3xl mb-6" style={{ color: "#204D36" }}>
              Ils parlent de nous
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {recentMentions.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.05}>
                <div
                  className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  style={{ backgroundColor: "white" }}
                >
                  <div>
                    <p className="font-body text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#EA6660" }}>
                      {m.source}
                    </p>
                    <p className="font-display text-lg" style={{ color: "#204D36" }}>
                      {m.title}
                    </p>
                  </div>
                  <p className="font-body text-xs" style={{ color: "#204D36", opacity: 0.5 }}>
                    {m.date}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
