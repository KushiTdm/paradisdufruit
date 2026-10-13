"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "La carte", href: "/carte" },
  { label: "Nos restaurants", href: "/restaurants" },
  { label: "Notre cuisine", href: "/cuisine" },
  { label: "Nos engagements", href: "/engagements" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250, 249, 245, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(32,77,54,0.08)" : "none",
        }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Burger */}
            <button
              className="flex flex-col gap-1.5 p-2 -ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-fruit-green rounded-md lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span
                className="block h-0.5 w-6 transition-colors duration-300"
                style={{ backgroundColor: scrolled ? "#204D36" : "white" }}
              />
              <span
                className="block h-0.5 w-6 transition-colors duration-300"
                style={{ backgroundColor: scrolled ? "#204D36" : "white" }}
              />
              <span
                className="block h-0.5 w-4 transition-colors duration-300"
                style={{ backgroundColor: scrolled ? "#204D36" : "white" }}
              />
            </button>

            {/* Desktop nav left */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/carte"
                className="font-body text-sm font-500 transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? "#204D36" : "white" }}
              >
                La carte
              </Link>
              <Link
                href="/restaurants"
                className="font-body text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? "#204D36" : "white" }}
              >
                Nos restaurants
              </Link>
              <Link
                href="/engagements"
                className="font-body text-sm transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? "#204D36" : "white" }}
              >
                Nos engagements
              </Link>
            </nav>

            {/* Logo centré */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 font-display text-xl lg:text-2xl tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#204D36" : "white" }}
              aria-label="L'Éden Fruité - Accueil"
            >
              <Logo color={scrolled ? "#204D36" : "white"} />
            </Link>

            {/* CTAs desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/admin"
                className="btn-pill text-sm"
                style={{
                  border: `2px solid ${scrolled ? "#204D36" : "rgba(255,255,255,.5)"}`,
                  color: scrolled ? "#204D36" : "rgba(255,255,255,.85)",
                  background: "transparent",
                  fontSize: 11,
                  letterSpacing: '.04em',
                }}
              >
                Espace franchise
              </Link>
              <Link href="/commander" className="btn-pill btn-pill-coral text-sm">
                Commander
              </Link>
            </div>

            {/* Mobile spacer */}
            <div className="w-10 lg:hidden" />
          </div>
        </div>
      </header>

      {/* Overlay menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: "#204D36" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-wide flex items-center justify-between h-16">
              <span className="font-display text-xl text-white">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
                aria-label="Fermer le menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center container-wide gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="title-display-sm text-white hover:text-fruit-pink transition-colors duration-200 py-2"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="container-wide pb-10 flex gap-4">
              <Link
                href="/carte"
                onClick={() => setMenuOpen(false)}
                className="btn-pill btn-pill-white flex-1 text-center"
              >
                La carte
              </Link>
              <Link
                href="/commander"
                onClick={() => setMenuOpen(false)}
                className="btn-pill btn-pill-coral flex-1 text-center"
              >
                Commander
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
