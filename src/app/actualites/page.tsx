import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DemoPage from "@/components/DemoPage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "Actualités — L'Éden Fruité",
};

export default function ActualitesPage() {
  return (
    <DemoPage
      kicker="Restez informés"
      title="Toutes nos actualités"
      description="Ouvertures, nouveautés, événements, distinctions… Retrouvez ici toute la vie de L'Éden Fruité."
    >
      <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <Link
                  href={`/actualites/${item.slug}`}
                  className="block group cursor-pointer h-full"
                >
                  <div
                    className="relative overflow-hidden mb-5"
                    style={{ borderRadius: "16px", aspectRatio: "16/10" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <time
                      className="font-body text-xs"
                      style={{ color: "#204D36", opacity: 0.5 }}
                    >
                      {item.date}
                    </time>
                    <span style={{ color: "#204D36", opacity: 0.25 }}>•</span>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="btn-pill text-xs py-0.5 px-2.5"
                          style={{ backgroundColor: "#FED117", color: "#204D36" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3
                    className="font-display text-xl mb-2 group-hover:text-fruit-coral transition-colors duration-200 leading-tight"
                    style={{ color: "#204D36" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: "#204D36", opacity: 0.65 }}
                  >
                    {item.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </DemoPage>
  );
}
