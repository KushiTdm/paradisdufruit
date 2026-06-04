import ScrollReveal from "@/components/ui/ScrollReveal";

function PalmSvg() {
  return (
    <svg width="320" height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M160 460 C160 460 155 350 150 280 C145 210 120 160 80 100 C60 70 30 40 10 20" stroke="#65B330" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M150 280 C130 260 90 240 50 250 C20 258 0 270 -10 290" stroke="#65B330" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M152 300 C170 275 210 260 250 268 C280 274 300 285 310 305" stroke="#65B330" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
      <ellipse cx="80" cy="95" rx="50" ry="22" fill="#65B330" opacity="0.4" transform="rotate(-30 80 95)"/>
      <ellipse cx="200" cy="120" rx="55" ry="20" fill="#65B330" opacity="0.35" transform="rotate(20 200 120)"/>
      <ellipse cx="40" cy="160" rx="45" ry="18" fill="#65B330" opacity="0.3" transform="rotate(-50 40 160)"/>
      <ellipse cx="240" cy="170" rx="48" ry="19" fill="#65B330" opacity="0.3" transform="rotate(40 240 170)"/>
      <ellipse cx="100" cy="80" rx="40" ry="16" fill="#65B330" opacity="0.35" transform="rotate(-15 100 80)"/>
    </svg>
  );
}

function FlowerSvg() {
  return (
    <svg width="200" height="280" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M100 260 C100 260 98 180 96 140 C94 100 88 70 80 40" stroke="#EA6660" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
      <circle cx="80" cy="38" r="22" fill="#EA6660" opacity="0.5"/>
      <circle cx="80" cy="38" r="12" fill="#FED117" opacity="0.6"/>
      {[0,60,120,180,240,300].map((angle, i) => (
        <ellipse
          key={i}
          cx={80 + Math.cos((angle * Math.PI) / 180) * 22}
          cy={38 + Math.sin((angle * Math.PI) / 180) * 22}
          rx="10"
          ry="16"
          fill="#EA6660"
          opacity="0.45"
          transform={`rotate(${angle} ${80 + Math.cos((angle * Math.PI) / 180) * 22} ${38 + Math.sin((angle * Math.PI) / 180) * 22})`}
        />
      ))}
      <path d="M96 140 C80 130 60 128 45 135" stroke="#65B330" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M97 160 C115 150 130 148 145 155" stroke="#65B330" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
  );
}

export default function BotanicSection() {
  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#204D36" }}
    >
      {/* Decorative botanics */}
      <div className="absolute left-0 top-0 bottom-0 opacity-40 pointer-events-none select-none hidden lg:block">
        <PalmSvg />
      </div>
      <div className="absolute right-0 top-0 opacity-35 pointer-events-none select-none hidden lg:block">
        <FlowerSvg />
      </div>
      <div className="absolute right-8 bottom-0 opacity-25 pointer-events-none select-none hidden xl:block" style={{ transform: "scaleX(-1)" }}>
        <FlowerSvg />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal delay={0}>
            <p className="subtitle-script mb-4" style={{ color: "#FED117" }}>
              Notre philosophie
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="title-display text-white mb-6">
              Bien manger<br />
              est un{" "}
              <span style={{ color: "#F5BBBB" }}>plaisir</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Chez Le Paradis du Fruit, nous croyons que manger sain ne rime pas avec ennuyeux. Chaque plat est une invitation au voyage, une explosion de saveurs qui prend soin de vous.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="#cuisine"
              className="inline-flex items-center gap-2 font-body font-semibold text-base text-white group"
            >
              Découvrir notre cuisine
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={0.25}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
            {[
              { value: "100%", label: "Ingrédients frais" },
              { value: "0", label: "Additif artificiel" },
              { value: "70%", label: "Produits locaux" },
              { value: "20", label: "Ans d'expertise" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl lg:text-5xl mb-1" style={{ color: "#FED117" }}>
                  {stat.value}
                </p>
                <p className="font-body text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
