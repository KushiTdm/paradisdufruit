import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — L'Éden Fruité",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      kicker="Informations légales"
      title="Mentions légales"
      description="Conformément à la loi du 21 juin 2004 pour la confiance dans l'économie numérique, voici les informations légales du site edenfruite.fr."
      updatedAt="11 juin 2026"
      sections={[
        {
          title: "Éditeur du site",
          body: "L'Éden Fruité SAS · 12 rue de la Verdure, 75011 Paris · Capital social : 250 000 € · RCS Paris 514 821 994 · TVA intracommunautaire FR 38 514821994 · Directeur de la publication : Camille Rivera.",
        },
        {
          title: "Hébergement",
          body: "Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. https://vercel.com",
        },
        {
          title: "Propriété intellectuelle",
          body: "L'ensemble du contenu du site (textes, images, vidéos, logos, illustrations) est protégé par le droit d'auteur. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite est strictement interdite.",
        },
        {
          title: "Crédits photos",
          body: "Les photographies utilisées sur ce site sont issues de la banque Unsplash (licence libre) ou ont été réalisées par notre équipe interne.",
        },
        {
          title: "Contact",
          body: "Pour toute question relative au site, écrivez à : bonjour@edenfruite.fr.",
        },
      ]}
    />
  );
}
