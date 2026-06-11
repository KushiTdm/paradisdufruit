import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — L'Éden Fruité",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      kicker="Vos données, votre vie privée"
      title="Confidentialité"
      description="Nous traitons vos données personnelles dans le respect du RGPD et de la loi Informatique et Libertés. Cette page explique comment et pourquoi."
      updatedAt="11 juin 2026"
      sections={[
        {
          title: "Données que nous collectons",
          body: "Lors de l'utilisation du site, nous collectons votre adresse IP, votre navigateur, les pages visitées et la durée des visites. Si vous créez un compte, nous collectons votre nom, email, numéro de téléphone et préférences alimentaires.",
        },
        {
          title: "Finalités du traitement",
          body: "Vos données nous permettent de : gérer votre compte et vos commandes, vous envoyer nos newsletters (avec votre accord), améliorer l'expérience du site, et respecter nos obligations légales.",
        },
        {
          title: "Durée de conservation",
          body: "Vos données de compte sont conservées tant que votre compte est actif, puis archivées 3 ans après votre dernière activité. Les logs techniques sont conservés 12 mois.",
        },
        {
          title: "Vos droits",
          body: "Vous disposez à tout moment d'un droit d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation. Pour exercer ces droits : rgpd@edenfruite.fr ou via notre formulaire dédié.",
        },
        {
          title: "Délégué à la protection des données",
          body: "Notre DPO peut être contacté à dpo@edenfruite.fr pour toute question relative au traitement de vos données personnelles.",
        },
      ]}
    />
  );
}
