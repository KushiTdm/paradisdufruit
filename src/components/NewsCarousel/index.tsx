import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/ui/Carousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { newsItems } from "@/data/news";

export default function NewsCarousel() {
  return (
    <section id="actualites" className="section-pad" style={{ backgroundColor: "white" }}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <ScrollReveal delay={0}>
              <p className="subtitle-script mb-2">Restez informés</p>
            </ScrollReveal>
            <AnimatedTitle
              className="title-display"
              style={{ color: "#204D36" }}
              segments={[
                { text: "Nos", br: true },
                { text: "actualités", color: "#EA6660" },
              ]}
            />
          </div>

          <ScrollReveal delay={0.2} direction="left">
            <Link
              href="/actualites"
              className="hidden md:inline-flex items-center gap-2 font-body font-semibold text-sm group"
              style={{ color: "#204D36" }}
            >
              Toutes les actualités
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Carousel — sans wrap ScrollReveal pour préserver la mesure embla */}
        <Carousel slideClassName="w-[82%] sm:w-[55%] md:w-[42%] lg:w-[calc(33.333%-1rem)]" gap={24}>
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/actualites/${item.slug}`}
              className="block group cursor-pointer"
            >
                {/* Image */}
                <div
                  className="relative overflow-hidden mb-5"
                  style={{ borderRadius: "16px", aspectRatio: "16/10" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <time
                    className="font-body text-xs"
                    style={{ color: "#204D36", opacity: 0.5 }}
                    dateTime={item.date}
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

                <span
                  className="inline-flex items-center gap-1.5 font-body text-sm font-semibold"
                  style={{ color: "#EA6660" }}
                >
                  Lire la suite
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </Carousel>

        {/* Mobile CTA */}
        <div className="mt-6 md:hidden">
          <Link href="/actualites" className="btn-pill btn-pill-outline w-full text-center block">
            Toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}
