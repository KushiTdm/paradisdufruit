import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { engagements } from "@/data/engagements";

export const metadata: Metadata = {
  title: "Nos engagements — L'Éden Fruité",
};

export default function EngagementsPage() {
  return (
    <DemoPage
      kicker="À l'Éden Fruité"
      title="Nos"
      titleAccent="engagements"
      description="20 ans à cuisiner pour vous, c'est aussi 20 ans à construire une chaîne plus respectueuse de la planète, des producteurs et des équipes. Voici nos engagements concrets."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((eng, i) => (
              <ScrollReveal key={eng.id} delay={i * 0.08}>
                <article
                  className="rounded-3xl p-8 h-full flex flex-col items-center text-center"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6"
                    style={{ backgroundColor: "#FAF9F5" }}
                  >
                    {eng.icon}
                  </div>
                  <span
                    className="btn-pill text-xs mb-4 py-1 px-3"
                    style={{ backgroundColor: "#204D36", color: "white" }}
                  >
                    {eng.badge}
                  </span>
                  <h3 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                    {eng.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.65 }}>
                    {eng.description}
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
