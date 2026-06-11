import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Accessibilité — L'Éden Fruité",
};

export default function AccessibilitePage() {
  return (
    <DemoPage
      kicker="Pour tous"
      title="Accessibilité"
      description="Notre engagement : que chacun puisse profiter de nos restaurants et de notre site, quelles que soient ses capacités."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollReveal delay={0}>
              <article className="rounded-2xl p-8" style={{ backgroundColor: "white" }}>
                <h2 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                  Dans nos restaurants
                </h2>
                <ul className="space-y-2 font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.8 }}>
                  <li>• Tous nos restaurants sont accessibles aux personnes à mobilité réduite (rampes, toilettes adaptées).</li>
                  <li>• Cartes en braille disponibles sur demande.</li>
                  <li>• Personnel formé à l&apos;accueil des personnes en situation de handicap.</li>
                  <li>• Chiens guides et d&apos;assistance bienvenus.</li>
                </ul>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article className="rounded-2xl p-8" style={{ backgroundColor: "white" }}>
                <h2 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                  Sur notre site
                </h2>
                <ul className="space-y-2 font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.8 }}>
                  <li>• Conformité WCAG 2.1 niveau AA visée.</li>
                  <li>• Contraste de couleurs respectant les ratios recommandés.</li>
                  <li>• Navigation au clavier complète.</li>
                  <li>• Textes alternatifs sur toutes les images informatives.</li>
                  <li>• Respect de la préférence <code className="text-xs">prefers-reduced-motion</code> pour les animations.</li>
                </ul>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article className="rounded-2xl p-8" style={{ backgroundColor: "#FED117" }}>
                <h2 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                  Une difficulté ?
                </h2>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#204D36" }}>
                  Si vous rencontrez le moindre problème d&apos;accessibilité, écrivez-nous à <strong>accessibilite@edenfruite.fr</strong>. Nous traitons chaque retour sous 48 heures.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
