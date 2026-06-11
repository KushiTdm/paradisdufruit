import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import RotatingBadge from "@/components/ui/RotatingBadge";
import Parallax from "@/components/ui/Parallax";
import { menuItems } from "@/data/menu";

export default function MenuCarousel() {
  return (
    <section id="carte" className="section-pad" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <ScrollReveal delay={0}>
              <p className="subtitle-script mb-2">Fresh &amp; Yummi</p>
            </ScrollReveal>
            <AnimatedTitle
              className="title-display"
              style={{ color: "#204D36" }}
              segments={[
                { text: "Nouvelle", br: true },
                { text: "carte", color: "#F5BBBB" },
              ]}
            />
          </div>

          <ScrollReveal delay={0.2} direction="left">
            <a
              href="#carte"
              className="hidden md:inline-flex items-center gap-2 font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
              style={{ color: "#204D36" }}
            >
              Voir la carte
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>

        {/* Decorative badge */}
        <div className="absolute right-4 lg:right-16 -mt-4 hidden lg:block">
          <Parallax speed={0.6}>
            <RotatingBadge
              text="• NOUVEAU • PRINTANIER • FRAIS •"
              emoji="🍋"
              size={110}
              bgColor="#65B330"
              textColor="white"
            />
          </Parallax>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={0.15}>
          <Carousel
            slideWidth="calc(33.333% - 1rem)"
            gap={24}
          >
            {menuItems.map((item) => (
              <div key={item.id} className="card-radius relative group cursor-pointer" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(to top, rgba(32,77,54,0.9) 0%, rgba(32,77,54,0.4) 45%, transparent 70%)",
                  }}
                />
                {/* Tag */}
                <span
                  className="absolute top-4 left-4 btn-pill text-xs py-1 px-3"
                  style={{ background: "#FED117", color: "#204D36" }}
                >
                  {item.tag}
                </span>
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-white text-2xl mb-1">{item.title}</h3>
                  <p className="font-body text-white/75 text-sm leading-snug">{item.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </ScrollReveal>

        {/* Mobile CTA */}
        <div className="mt-6 md:hidden">
          <a href="#carte" className="btn-pill btn-pill-green w-full text-center block">
            Voir toute la carte
          </a>
        </div>
      </div>
    </section>
  );
}
