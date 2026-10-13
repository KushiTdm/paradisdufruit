import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Pacifico, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/gsap/SmoothScroll";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display-loaded",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script-loaded",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Éden Fruité — Restaurant healthy : bowls, salades & smoothies frais",
  description:
    "Découvrez L'Éden Fruité : restaurant healthy, fruité et coloré. Bowls, salades, smoothies et plus — frais, local et fait maison. 80+ restaurants en France.",
  keywords: ["restaurant healthy", "bowl", "smoothie", "fruits", "salade", "cuisine saine", "Paris"],
  openGraph: {
    title: "L'Éden Fruité",
    description: "Restaurant healthy & fruité — frais, local, fait maison",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#204D36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${barlowCondensed.variable} ${pacifico.variable} ${jost.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
