import Link from "next/link";
import RotatingBadge from "@/components/ui/RotatingBadge";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

const footerLinks = {
  "Notre univers": [
    { label: "La carte", href: "/carte" },
    { label: "Nos restaurants", href: "/restaurants" },
    { label: "Notre cuisine", href: "/cuisine" },
    { label: "Nos engagements", href: "/engagements" },
    { label: "Actualités", href: "/actualites" },
  ],
  "Le groupe": [
    { label: "Notre histoire", href: "/histoire" },
    { label: "Nos valeurs", href: "/valeurs" },
    { label: "Devenir franchisé", href: "/franchise" },
    { label: "Nous rejoindre", href: "/recrutement" },
    { label: "Presse", href: "/presse" },
  ],
  "Besoin d'aide": [
    { label: "FAQ", href: "/faq" },
    { label: "Commander en ligne", href: "/commander" },
    { label: "Carte fidélité", href: "/fidelite" },
    { label: "Contact", href: "/contact" },
    { label: "Accessibilité", href: "/accessibilite" },
  ],
};

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "CGU", href: "/cgu" },
  { label: "Cookies", href: "/cookies" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#204D36" }}>
      <div className="container-wide pt-16 pb-8">
        {/* Top row */}
        <div className="grid lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Logo + socials */}
          <div>
            <Link
              href="/"
              className="inline-block mb-6"
              aria-label="L'Éden Fruité"
            >
              <span className="font-display text-2xl text-white block">
                L&apos;Éden
              </span>
              <span className="font-script text-xl" style={{ color: "#FED117" }}>
                Fruité
              </span>
            </Link>

            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "white", opacity: 0.55 }}>
              Le restaurant healthy et fruité depuis 2005. 80+ adresses en France pour manger frais, sain et savoureux.
            </p>

            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white" }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3
                className="font-body text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "white", opacity: 0.4 }}
              >
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm transition-opacity duration-200 hover:opacity-100"
                      style={{ color: "white", opacity: 0.65 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Badge citron centré */}
        <div className="flex justify-center my-8">
          <RotatingBadge
            text="• FRAIS • NATUREL • SAVOUREUX •"
            emoji="🍋"
            size={100}
            bgColor="#FED117"
            textColor="#204D36"
          />
        </div>

        {/* Grande signature */}
        <div className="overflow-hidden my-6" aria-hidden="true">
          <AnimatedTitle
            className="font-display text-center select-none"
            style={{
              fontSize: "clamp(3rem, 11vw, 10rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.08)",
            }}
            segments={[{ text: "L'Éden" }, { text: "Fruité", color: "rgba(254,209,23,0.15)" }]}
          />
        </div>

        {/* Mentions santé */}
        <p
          className="font-body text-xs text-center leading-relaxed mb-6"
          style={{ color: "white", opacity: 0.35 }}
        >
          Pour votre santé, mangez au moins cinq fruits et légumes par jour — mangerbouger.fr
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="font-body text-xs" style={{ color: "white", opacity: 0.4 }}>
            © {new Date().getFullYear()} L&apos;Éden Fruité. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-xs transition-opacity duration-200 hover:opacity-100"
                style={{ color: "white", opacity: 0.4 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Signature agence */}
        <div className="text-center mt-6">
          <p className="font-body text-xs" style={{ color: "white", opacity: 0.4 }}>
            Conçu &amp; développé par{" "}
            <a
              href="https://neuraweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-opacity duration-200 hover:opacity-80"
              style={{ color: "#FED117" }}
            >
              NeuraWeb
            </a>
            {" "}— agence web, automatisation &amp; intégration IA
          </p>
        </div>
      </div>
    </footer>
  );
}
