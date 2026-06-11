import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { newsItems } from "@/data/news";

type Params = { slug: string };

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return { title: "Article introuvable — L'Éden Fruité" };
  return {
    title: `${item.title} — L'Éden Fruité`,
    description: item.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const related = newsItems.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero article */}
        <section
          className="relative pt-32 lg:pt-40 pb-12 overflow-hidden"
          style={{ backgroundColor: "#FAF9F5" }}
        >
          <div className="container-wide">
            <ScrollReveal delay={0}>
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 font-body text-sm mb-6"
                style={{ color: "#204D36", opacity: 0.7 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Toutes les actualités
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <time className="font-body text-sm" style={{ color: "#204D36", opacity: 0.6 }}>
                  {item.date}
                </time>
                <span style={{ color: "#204D36", opacity: 0.25 }}>•</span>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="btn-pill text-xs py-1 px-3"
                      style={{ backgroundColor: "#FED117", color: "#204D36" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="title-display mb-6 max-w-4xl" style={{ color: "#204D36" }}>
                {item.title}
              </h1>
            </ScrollReveal>

            {item.author && (
              <ScrollReveal delay={0.15}>
                <p className="font-body text-sm" style={{ color: "#204D36", opacity: 0.65 }}>
                  Par <span className="font-semibold">{item.author}</span>
                </p>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Image principale */}
        <section className="pb-12" style={{ backgroundColor: "#FAF9F5" }}>
          <div className="container-wide">
            <ScrollReveal delay={0}>
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: "24px", aspectRatio: "16/9" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Corps article */}
        <section className="pb-16" style={{ backgroundColor: "#FAF9F5" }}>
          <div className="container-wide">
            <article className="max-w-3xl mx-auto">
              {item.body.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <p
                    className="font-body text-base lg:text-lg leading-relaxed mb-6"
                    style={{ color: "#204D36" }}
                  >
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </article>
          </div>
        </section>

        {/* Articles liés */}
        {related.length > 0 && (
          <section className="pb-20" style={{ backgroundColor: "white" }}>
            <div className="container-wide pt-16">
              <ScrollReveal delay={0}>
                <h2 className="font-display text-3xl lg:text-4xl mb-8" style={{ color: "#204D36" }}>
                  À lire aussi
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r, i) => (
                  <ScrollReveal key={r.id} delay={i * 0.08}>
                    <Link href={`/actualites/${r.slug}`} className="block group cursor-pointer">
                      <div
                        className="relative overflow-hidden mb-4"
                        style={{ borderRadius: "16px", aspectRatio: "16/10" }}
                      >
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="font-body text-xs mb-2" style={{ color: "#204D36", opacity: 0.5 }}>
                        {r.date}
                      </p>
                      <h3
                        className="font-display text-lg leading-tight group-hover:text-fruit-coral transition-colors duration-200"
                        style={{ color: "#204D36" }}
                      >
                        {r.title}
                      </h3>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
