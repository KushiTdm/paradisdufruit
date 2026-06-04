import Image from "next/image";
import RotatingBadge from "@/components/ui/RotatingBadge";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Image de fond */}
      <Image
        src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&q=85"
        alt="Plats frais et colorés du Paradis du Fruit"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(32,77,54,0.75) 0%, rgba(32,77,54,0.35) 60%, rgba(32,77,54,0.1) 100%)",
        }}
      />

      {/* Badge flottant gauche */}
      <div className="absolute left-6 top-1/3 hidden xl:block animate-float">
        <RotatingBadge
          text="• FRAIS • NATUREL • SAVOUREUX •"
          emoji="🌿"
          size={140}
          bgColor="#F5BBBB"
          textColor="#204D36"
        />
      </div>

      {/* Badge flottant droit */}
      <div className="absolute right-8 bottom-1/3 hidden lg:block animate-float" style={{ animationDelay: "1.5s" }}>
        <RotatingBadge
          text="• LE PARADIS DU FRUIT • 2005 •"
          emoji="🍍"
          size={120}
          bgColor="#FED117"
          textColor="#204D36"
        />
      </div>

      {/* Contenu */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <p className="font-body text-sm font-semibold tracking-widest uppercase text-white/80 mb-4">
            Bienvenue au paradis
          </p>

          <h1 className="title-display text-white mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
            Mangez{" "}
            <span className="block" style={{ color: "#F5BBBB" }}>
              frais,
            </span>
            vivez{" "}
            <span style={{ color: "#FED117" }}>mieux</span>
          </h1>

          <p className="font-body text-white/85 text-lg max-w-md mb-8 leading-relaxed">
            Découvrez une cuisine saine, gourmande et colorée inspirée par les saveurs du monde entier. Frais, local et fait avec amour.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#carte" className="btn-pill btn-pill-green text-base px-8 py-3">
              Je découvre
            </a>
            <a
              href="#restaurants"
              className="btn-pill text-base px-8 py-3"
              style={{ border: "2px solid white", color: "white", background: "transparent" }}
            >
              Nos restaurants
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="font-body text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-0.5 h-10 bg-white/30 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 w-full bg-white rounded-full"
            style={{
              height: "40%",
              animation: "scrollDot 1.6s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
