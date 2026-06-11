import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ — L'Éden Fruité",
};

const faqs = [
  { q: "Vos plats sont-ils faits maison ?", a: "Oui, 100 %. Tout est préparé chaque matin dans chaque restaurant, à partir d'ingrédients frais." },
  { q: "Proposez-vous des plats sans gluten ?", a: "Une carte complète sans gluten est disponible : 4 bowls, 3 salades, 2 desserts et tous nos smoothies." },
  { q: "D'où viennent vos ingrédients ?", a: "70 % de nos produits sont d'origine française, dont 40 % en circuit court avec 240 producteurs partenaires." },
  { q: "Êtes-vous adapté aux enfants ?", a: "Oui ! Une carte enfant à 8,90 € (mini-bowl + jus + dessert) est disponible dans tous nos restaurants." },
  { q: "Puis-je payer avec mes titres-restaurant ?", a: "Tous les titres-restaurant (papier et carte) sont acceptés, ainsi qu'Apple Pay, Google Pay et CB sans contact." },
  { q: "Comment fonctionne la carte fidélité ?", a: "1 € dépensé = 1 point. À 100 points, un bowl offert. Gratuit, dématérialisé, valable dans toute la France." },
  { q: "Livrez-vous à domicile ?", a: "Oui, via Uber Eats, Deliveroo et notre service direct dans 35 villes. Délai moyen : 25 minutes." },
];

export default function FAQPage() {
  return (
    <DemoPage
      kicker="Besoin d'aide"
      title="Questions"
      titleAccent="fréquentes"
      description="Les réponses aux questions qu'on nous pose le plus souvent. Si vous ne trouvez pas la vôtre, écrivez-nous : on répond sous 24h."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <details
                  className="rounded-2xl p-5 lg:p-6 group"
                  style={{ backgroundColor: "white" }}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-display text-lg list-none" style={{ color: "#204D36" }}>
                    {f.q}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="font-body text-sm leading-relaxed mt-4" style={{ color: "#204D36", opacity: 0.7 }}>
                    {f.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
