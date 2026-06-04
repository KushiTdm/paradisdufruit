import ScrollReveal from "@/components/ui/ScrollReveal";
import RotatingBadge from "@/components/ui/RotatingBadge";

export default function PreFooter() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bloc jaune — Devenir franchisé */}
          <ScrollReveal delay={0}>
            <div
              className="relative overflow-hidden rounded-3xl p-10 lg:p-14 flex flex-col justify-between min-h-72"
              style={{ backgroundColor: "#FED117" }}
            >
              {/* Déco palme SVG */}
              <div
                className="absolute right-0 top-0 bottom-0 opacity-20 pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg width="180" height="100%" viewBox="0 0 180 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120 380 C120 380 115 260 110 200 C105 140 80 90 50 40 C35 15 15 -5 0 -15" stroke="#204D36" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  <ellipse cx="55" cy="35" rx="55" ry="22" fill="#204D36" transform="rotate(-30 55 35)"/>
                  <ellipse cx="155" cy="60" rx="50" ry="20" fill="#204D36" transform="rotate(25 155 60)"/>
                  <ellipse cx="20" cy="100" rx="45" ry="18" fill="#204D36" transform="rotate(-55 20 100)"/>
                </svg>
              </div>

              <div>
                <p className="font-script text-xl mb-3" style={{ color: "#204D36", opacity: 0.7 }}>
                  Rejoignez l&apos;aventure
                </p>
                <h3
                  className="font-display mb-4"
                  style={{ color: "#204D36", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 0.92, textTransform: "uppercase" }}
                >
                  Devenir<br />franchisé
                </h3>
                <p className="font-body text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "#204D36", opacity: 0.75 }}>
                  Rejoignez un réseau en pleine expansion et ouvrez votre propre restaurant Paradis du Fruit avec notre accompagnement complet.
                </p>
              </div>

              <a
                href="#franchise"
                className="btn-pill btn-pill-green inline-block self-start"
              >
                En savoir plus
              </a>

              {/* Badge ananas */}
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
                <RotatingBadge
                  text="• FRANCHISE • OPPORTUNITÉ •"
                  emoji="🍍"
                  size={100}
                  bgColor="#65B330"
                  textColor="white"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bloc vert — Nous rejoindre */}
          <ScrollReveal delay={0.15}>
            <div
              className="relative overflow-hidden rounded-3xl p-10 lg:p-14 flex flex-col justify-between min-h-72"
              style={{ backgroundColor: "#204D36" }}
            >
              {/* Déco SVG script */}
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none select-none"
                aria-hidden="true"
              >
                <p
                  className="font-script"
                  style={{ fontSize: "5rem", color: "white", whiteSpace: "nowrap", transform: "rotate(-15deg)" }}
                >
                  Fresh &amp; yummi
                </p>
              </div>

              <div>
                <p className="font-script text-xl mb-3" style={{ color: "#FED117" }}>
                  On recrute !
                </p>
                <h3
                  className="font-display text-white mb-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 0.92, textTransform: "uppercase" }}
                >
                  Nous<br />rejoindre
                </h3>
                <p className="font-body text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "white", opacity: 0.75 }}>
                  Passionné(e) par la cuisine saine et le contact humain ? Rejoignez notre équipe et participez à la croissance d&apos;une enseigne engagée.
                </p>
              </div>

              <a
                href="#recrutement"
                className="btn-pill btn-pill-coral inline-block self-start"
              >
                Voir les offres
              </a>

              {/* Badge citron */}
              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
                <RotatingBadge
                  text="• REJOINS • L'ÉQUIPE •"
                  emoji="🌿"
                  size={100}
                  bgColor="#F5BBBB"
                  textColor="#204D36"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
