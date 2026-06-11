import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Nous rejoindre — L'Éden Fruité",
};

const jobs = [
  { title: "Chef de cuisine", city: "Paris 11e", type: "CDI", new: true },
  { title: "Équipier polyvalent", city: "Lyon Presqu'île", type: "CDI temps plein" },
  { title: "Responsable de salle", city: "Bordeaux", type: "CDI", new: true },
  { title: "Barista smoothies", city: "Toulouse Capitole", type: "CDI 30h" },
  { title: "Plongeur", city: "Marseille Vieux-Port", type: "CDI temps plein" },
  { title: "Manager adjoint", city: "Lille Vieux-Lille", type: "CDI" },
];

export default function RecrutementPage() {
  return (
    <DemoPage
      kicker="On recrute !"
      title="Nous"
      titleAccent="rejoindre"
      description="Passionné(e) par la cuisine saine, le service ou le management ? Vous avez l'envie de transmettre et de progresser ? Rejoignez une enseigne engagée qui prend soin de ses équipes."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <ScrollReveal delay={0}>
            <h2 className="font-display text-3xl lg:text-4xl mb-8" style={{ color: "#204D36" }}>
              Offres en cours
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {jobs.map((j, i) => (
              <ScrollReveal key={`${j.title}-${j.city}`} delay={i * 0.05}>
                <article
                  className="rounded-2xl p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-shadow duration-300 hover:shadow-md"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-display text-xl" style={{ color: "#204D36" }}>
                        {j.title}
                      </h3>
                      {j.new && (
                        <span
                          className="btn-pill text-xs py-0.5 px-2.5"
                          style={{ backgroundColor: "#EA6660", color: "white" }}
                        >
                          Nouveau
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm" style={{ color: "#204D36", opacity: 0.65 }}>
                      {j.city} · {j.type}
                    </p>
                  </div>
                  <button type="button" className="btn-pill btn-pill-outline text-xs py-2 px-5 self-start sm:self-auto">
                    Postuler
                  </button>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div
              className="rounded-3xl p-8 lg:p-10 mt-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
              style={{ backgroundColor: "#FED117" }}
            >
              <div>
                <p className="font-script text-xl mb-1" style={{ color: "#204D36", opacity: 0.7 }}>
                  Candidature spontanée
                </p>
                <h3 className="font-display text-2xl lg:text-3xl" style={{ color: "#204D36" }}>
                  Pas trouvé votre poste ?
                </h3>
              </div>
              <button type="button" className="btn-pill btn-pill-green">
                Envoyer mon CV
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </DemoPage>
  );
}
