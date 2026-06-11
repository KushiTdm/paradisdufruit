import Carousel from "@/components/ui/Carousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { engagements } from "@/data/engagements";

export default function EngagementsCarousel() {
  return (
    <section id="engagements" className="section-pad" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal delay={0}>
            <p className="subtitle-script mb-3">À l&apos;Éden Fruité</p>
          </ScrollReveal>
          <AnimatedTitle
            className="title-display"
            style={{ color: "#204D36" }}
            segments={[{ text: "Nos" }, { text: "engagements", color: "#F5BBBB" }]}
          />
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {engagements.map((eng, i) => (
            <ScrollReveal key={eng.id} delay={i * 0.1}>
              <div
                className="rounded-3xl p-8 h-full flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: "white" }}
              >
                {/* Badge circulaire */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 flex-shrink-0"
                  style={{ backgroundColor: "#FAF9F5" }}
                >
                  {eng.icon}
                </div>

                {/* Tag pill */}
                <span
                  className="btn-pill text-xs mb-4 py-1 px-3"
                  style={{ backgroundColor: "#204D36", color: "white" }}
                >
                  {eng.badge}
                </span>

                <h3
                  className="font-display text-2xl mb-3"
                  style={{ color: "#204D36" }}
                >
                  {eng.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "#204D36", opacity: 0.65 }}
                >
                  {eng.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile carousel — sans wrap ScrollReveal pour préserver la mesure embla */}
        <div className="lg:hidden">
          <Carousel slideClassName="w-[80%]" gap={16}>
            {engagements.map((eng) => (
              <div
                key={eng.id}
                className="rounded-3xl p-8 flex flex-col items-center text-center"
                style={{ backgroundColor: "white" }}
              >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-5 flex-shrink-0"
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
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
