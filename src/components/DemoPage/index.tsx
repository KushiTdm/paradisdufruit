import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

type DemoPageProps = {
  kicker: string;
  title: string;
  titleAccent?: string;
  description: string;
  bgColor?: string;
  badge?: string;
  children?: React.ReactNode;
};

export default function DemoPage({
  kicker,
  title,
  titleAccent,
  description,
  bgColor = "#FAF9F5",
  badge,
  children,
}: DemoPageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Hero compact de la page démo */}
        <section
          className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container-wide relative z-10">
            {badge && (
              <ScrollReveal delay={0}>
                <span
                  className="btn-pill text-xs mb-4 inline-block py-1.5 px-3"
                  style={{ backgroundColor: "#FED117", color: "#204D36" }}
                >
                  {badge}
                </span>
              </ScrollReveal>
            )}
            <ScrollReveal delay={0.05}>
              <p className="subtitle-script mb-3">{kicker}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="title-display mb-6" style={{ color: "#204D36" }}>
                {title}
                {titleAccent && (
                  <>
                    <br />
                    <span style={{ color: "#EA6660" }}>{titleAccent}</span>
                  </>
                )}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="font-body text-base lg:text-lg max-w-2xl leading-relaxed"
                style={{ color: "#204D36", opacity: 0.75 }}
              >
                {description}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contenu spécifique à la page */}
        {children}

        {/* CTA retour */}
        <section className="pb-20" style={{ backgroundColor: bgColor }}>
          <div className="container-wide">
            <Link href="/" className="btn-pill btn-pill-green inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
