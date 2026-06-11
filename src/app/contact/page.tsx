import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — L'Éden Fruité",
};

const contacts = [
  { label: "Service client", value: "01 84 60 02 00", help: "Du lundi au vendredi, 9h-19h" },
  { label: "Email général", value: "bonjour@edenfruite.fr", help: "Réponse sous 24h" },
  { label: "Presse", value: "presse@edenfruite.fr", help: "Dossier de presse disponible" },
  { label: "Franchise", value: "franchise@edenfruite.fr", help: "Pour rejoindre le réseau" },
];

export default function ContactPage() {
  return (
    <DemoPage
      kicker="On vous écoute"
      title="Nous contacter"
      description="Une question, une suggestion, un projet ? Notre équipe vous répond avec plaisir."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Formulaire */}
            <ScrollReveal delay={0.05}>
              <ContactForm />
            </ScrollReveal>

            {/* Coordonnées */}
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-3xl mb-6" style={{ color: "#204D36" }}>
                  Nos coordonnées
                </h2>
              </ScrollReveal>

              <ul className="space-y-5 mb-10">
                {contacts.map((c, i) => (
                  <ScrollReveal key={c.label} delay={0.15 + i * 0.05}>
                    <li
                      className="rounded-2xl p-5"
                      style={{ backgroundColor: "white" }}
                    >
                      <p className="font-body text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#EA6660" }}>
                        {c.label}
                      </p>
                      <p className="font-display text-xl mb-1" style={{ color: "#204D36" }}>
                        {c.value}
                      </p>
                      <p className="font-body text-xs" style={{ color: "#204D36", opacity: 0.6 }}>
                        {c.help}
                      </p>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <ScrollReveal delay={0.35}>
                <div
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: "#204D36" }}
                >
                  <p className="font-script text-lg mb-1" style={{ color: "#FED117" }}>
                    Siège social
                  </p>
                  <p className="font-body text-sm text-white/90 leading-relaxed">
                    L&apos;Éden Fruité<br />
                    12 rue de la Verdure<br />
                    75011 Paris, France
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
