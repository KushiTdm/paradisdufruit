import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookies — L'Éden Fruité",
};

export default function CookiesPage() {
  return (
    <LegalPage
      kicker="Petits gâteaux numériques"
      title="Cookies"
      description="Nous utilisons des cookies pour faire fonctionner le site, mesurer l'audience et améliorer votre expérience. Voici lesquels et pourquoi."
      updatedAt="11 juin 2026"
      sections={[
        {
          title: "Cookies essentiels",
          body: "Indispensables au fonctionnement du site (session, panier, préférences). Ils ne nécessitent pas votre consentement et ne peuvent pas être désactivés.",
        },
        {
          title: "Cookies de mesure d'audience",
          body: "Nous utilisons Plausible Analytics (hébergé en Europe, sans cookies tiers ni données personnelles) pour comprendre comment notre site est utilisé. Aucune information n'est partagée avec des tiers.",
        },
        {
          title: "Cookies de personnalisation",
          body: "Si vous êtes connecté, nous mémorisons vos préférences (langue, restaurant favori, allergènes). Vous pouvez les effacer à tout moment depuis votre compte.",
        },
        {
          title: "Cookies tiers",
          body: "Nous n'utilisons aucun cookie publicitaire ni de réseaux sociaux. Vos données restent chez nous.",
        },
        {
          title: "Gérer vos préférences",
          body: "Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies. Notez que cela peut limiter certaines fonctionnalités du site.",
        },
      ]}
    />
  );
}
