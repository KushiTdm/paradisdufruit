import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Section = { title: string; body: string };

type LegalPageProps = {
  kicker: string;
  title: string;
  description: string;
  sections: Section[];
  updatedAt: string;
};

export default function LegalPage({ kicker, title, description, sections, updatedAt }: LegalPageProps) {
  return (
    <DemoPage kicker={kicker} title={title} description={description}>
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-xs mb-8 uppercase tracking-widest" style={{ color: "#EA6660" }}>
              Dernière mise à jour : {updatedAt}
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.05}>
                  <article>
                    <h2 className="font-display text-2xl mb-3" style={{ color: "#204D36" }}>
                      {s.title}
                    </h2>
                    <p className="font-body text-sm lg:text-base leading-relaxed" style={{ color: "#204D36", opacity: 0.8 }}>
                      {s.body}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
