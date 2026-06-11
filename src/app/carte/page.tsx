import Image from "next/image";
import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { menuItems } from "@/data/menu";

export const metadata: Metadata = {
  title: "La carte — L'Éden Fruité",
};

const categories = [
  { name: "Bowls signature", emoji: "🥗" },
  { name: "Salades fraîches", emoji: "🥬" },
  { name: "Smoothies & jus", emoji: "🥤" },
  { name: "Burgers végétaux", emoji: "🍔" },
  { name: "Desserts vitaminés", emoji: "🍓" },
];

export default function CartePage() {
  return (
    <DemoPage
      kicker="Fresh & Yummi"
      title="Notre carte"
      description="Une cuisine de saison, colorée et équilibrée. Chaque plat est préparé chaque jour à partir d'ingrédients frais sélectionnés auprès de nos producteurs partenaires."
      badge="Édition Printemps 2026"
    >
      {/* Catégories */}
      <section className="pb-12" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <ScrollReveal delay={0.05}>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <span
                  key={cat.name}
                  className="btn-pill text-sm"
                  style={{ backgroundColor: "white", color: "#204D36", border: "2px solid rgba(32,77,54,0.1)" }}
                >
                  <span className="mr-1.5">{cat.emoji}</span>
                  {cat.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille des plats */}
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <article className="card-radius bg-white overflow-hidden group cursor-pointer h-full flex flex-col">
                  <div className="relative" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className="absolute top-4 left-4 btn-pill text-xs py-1 px-3"
                      style={{ background: "#FED117", color: "#204D36" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl mb-2" style={{ color: "#204D36" }}>
                      {item.title}
                    </h3>
                    <p className="font-body text-sm mb-4 leading-relaxed flex-1" style={{ color: "#204D36", opacity: 0.7 }}>
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl" style={{ color: "#EA6660" }}>
                        {(9 + item.id).toFixed(2)} €
                      </span>
                      <button
                        type="button"
                        className="btn-pill btn-pill-green text-xs py-2 px-4"
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
