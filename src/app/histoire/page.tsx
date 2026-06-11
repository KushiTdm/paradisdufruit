import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Notre histoire — L'Éden Fruité",
};

const timeline = [
  { year: "2005", title: "La toute première adresse", desc: "Ouverture du premier restaurant rue Vieille du Temple, Paris 3e, par Camille et Hugo Rivera." },
  { year: "2010", title: "Cap des 10 restaurants", desc: "Le concept séduit. La marque s'implante à Lyon, Bordeaux et Toulouse." },
  { year: "2015", title: "Lancement de la franchise", desc: "Les 20 premiers franchisés rejoignent le réseau. La marque prend son envol." },
  { year: "2019", title: "Engagement zéro déchet", desc: "Compostage in-situ, vaisselle réutilisable, partenariats Too Good To Go." },
  { year: "2023", title: "50 restaurants", desc: "Présent dans toutes les grandes métropoles françaises." },
  { year: "2026", title: "80+ restaurants", desc: "Et une nouvelle identité de marque : L'Éden Fruité." },
];

export default function HistoirePage() {
  return (
    <DemoPage
      kicker="Depuis 2005"
      title="Notre"
      titleAccent="histoire"
      description="20 ans d'aventure familiale. De la première petite cantine du Marais à un réseau de 80 restaurants, sans jamais perdre l'obsession du goût et du frais."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l-2 border-fruit-coral/20 pl-8 lg:pl-10 space-y-10">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 0.08}>
                  <li className="relative">
                    <span
                      className="absolute -left-[42px] lg:-left-[51px] w-5 h-5 rounded-full"
                      style={{ backgroundColor: "#EA6660", boxShadow: "0 0 0 4px #FAF9F5" }}
                    />
                    <p className="font-display text-3xl mb-2" style={{ color: "#EA6660" }}>
                      {t.year}
                    </p>
                    <h3 className="font-display text-xl mb-2" style={{ color: "#204D36" }}>
                      {t.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#204D36", opacity: 0.7 }}>
                      {t.desc}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
