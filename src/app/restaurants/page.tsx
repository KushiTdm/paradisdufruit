import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Nos restaurants — L'Éden Fruité",
};

const cities = [
  { name: "Paris", count: 24, lead: "République, Marais, Montmartre, La Défense…" },
  { name: "Lyon", count: 6, lead: "Presqu'île, Part-Dieu, Confluence" },
  { name: "Marseille", count: 4, lead: "Vieux-Port, Castellane, Prado" },
  { name: "Bordeaux", count: 3, lead: "Triangle d'Or, Chartrons, Saint-Pierre" },
  { name: "Toulouse", count: 3, lead: "Capitole, Compans, Saint-Cyprien" },
  { name: "Nantes", count: 2, lead: "Centre, Île de Nantes" },
  { name: "Lille", count: 2, lead: "Vieux-Lille, Euralille" },
  { name: "Strasbourg", count: 2, lead: "Centre, Krutenau" },
];

export default function RestaurantsPage() {
  return (
    <DemoPage
      kicker="Trouvez votre adresse"
      title="Nos restaurants"
      description="80+ adresses partout en France pour vous accueillir dans une ambiance chaleureuse et végétale. Chaque restaurant a son caractère, mais tous partagent la même exigence : du frais, du local et du fait maison."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          {/* Recherche démo */}
          <ScrollReveal delay={0.05}>
            <div
              className="rounded-2xl p-6 lg:p-8 mb-10 flex flex-col sm:flex-row gap-3"
              style={{ backgroundColor: "white", boxShadow: "0 4px 24px rgba(32,77,54,0.06)" }}
            >
              <input
                type="text"
                placeholder="Ville, code postal ou adresse…"
                className="flex-1 font-body text-base px-5 py-3 rounded-full outline-none"
                style={{ backgroundColor: "#FAF9F5", color: "#204D36" }}
              />
              <button type="button" className="btn-pill btn-pill-coral whitespace-nowrap">
                Rechercher
              </button>
            </div>
          </ScrollReveal>

          {/* Grille villes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <ScrollReveal key={city.name} delay={i * 0.05}>
                <article
                  className="rounded-2xl p-6 cursor-pointer transition-shadow duration-300 hover:shadow-lg h-full"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-display text-2xl" style={{ color: "#204D36" }}>
                      {city.name}
                    </h3>
                    <span
                      className="font-display text-3xl"
                      style={{ color: "#EA6660" }}
                    >
                      {city.count}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.65 }}>
                    {city.lead}
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
