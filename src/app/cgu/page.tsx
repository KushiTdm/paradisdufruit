import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "CGU — L'Éden Fruité",
};

export default function CGUPage() {
  return (
    <LegalPage
      kicker="Conditions générales"
      title="CGU"
      description="Les conditions générales d'utilisation du site edenfruite.fr et du service de commande en ligne."
      updatedAt="11 juin 2026"
      sections={[
        {
          title: "Objet",
          body: "Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site edenfruite.fr et de ses services associés (commande en ligne, carte fidélité, etc.).",
        },
        {
          title: "Acceptation",
          body: "L'utilisation du site implique l'acceptation pleine et entière des présentes conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.",
        },
        {
          title: "Comptes utilisateurs",
          body: "La création d'un compte est gratuite. Vous êtes responsable de la confidentialité de votre mot de passe et de toute activité réalisée depuis votre compte. Nous nous réservons le droit de suspendre tout compte en cas d'utilisation abusive.",
        },
        {
          title: "Commandes",
          body: "Les commandes en ligne sont fermes après validation du paiement. Toute annulation doit intervenir dans les 5 minutes suivant la confirmation. Au-delà, la commande est lancée en préparation.",
        },
        {
          title: "Responsabilité",
          body: "L'Éden Fruité ne saurait être tenu responsable de l'indisponibilité temporaire du service, de la perte de données, ou de tout dommage indirect résultant de l'utilisation du site.",
        },
      ]}
    />
  );
}
