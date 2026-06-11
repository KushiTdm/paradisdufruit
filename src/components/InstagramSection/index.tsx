import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { instaPosts } from "@/data/instagram";

function ReelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <section className="section-pad overflow-hidden" style={{ backgroundColor: "#FAF9F5" }}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-10">
          <ScrollReveal delay={0}>
            <p className="subtitle-script mb-2">Suivez nous sur Insta</p>
          </ScrollReveal>
          <AnimatedTitle
            className="title-display"
            style={{ color: "#204D36" }}
            segments={[{ text: "Notre" }, { text: "univers", color: "#EA6660" }]}
          />
        </div>

        {/* Grid décalée style masonry */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instaPosts.map((post, i) => {
              const isTall = i === 0 || i === 5;
              return (
                <div
                  key={post.id}
                  className={`relative group overflow-hidden cursor-pointer ${isTall ? "row-span-2" : ""}`}
                  style={{
                    borderRadius: "16px",
                    aspectRatio: isTall ? "1/2" : "1/1",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2"
                    style={{ backgroundColor: "rgba(32,77,54,0.7)" }}
                  >
                    <div className="flex items-center gap-1.5 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="font-body text-sm font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    {post.isReel && (
                      <div className="flex items-center gap-1.5 text-white">
                        <ReelIcon />
                        <span className="font-body text-xs">Reel</span>
                      </div>
                    )}
                  </div>

                  {/* Reel indicator */}
                  {post.isReel && (
                    <div className="absolute top-3 right-3 opacity-90">
                      <ReelIcon />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-green inline-flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Nous suivre
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
