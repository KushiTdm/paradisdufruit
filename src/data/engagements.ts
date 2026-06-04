export type Engagement = {
  id: number;
  icon: string;
  title: string;
  description: string;
  badge: string;
};

export const engagements: Engagement[] = [
  {
    id: 1,
    icon: "🌱",
    title: "100% Naturel",
    description: "Tous nos ingrédients sont soigneusement sélectionnés auprès de producteurs locaux et biologiques pour garantir fraîcheur et saveur.",
    badge: "Bio",
  },
  {
    id: 2,
    icon: "🌍",
    title: "Éco-responsable",
    description: "Emballages 100% compostables, zéro déchet plastique en salle et cuisine. Nous mesurons et compensons notre empreinte carbone chaque année.",
    badge: "Green",
  },
  {
    id: 3,
    icon: "🧑‍🍳",
    title: "Fait Maison",
    description: "Chaque préparation est réalisée chaque matin dans nos cuisines. Aucune sauce industrielle, aucun additif — juste du bon fait avec passion.",
    badge: "Fresh",
  },
  {
    id: 4,
    icon: "❤️",
    title: "Bien-être Avant Tout",
    description: "Nos recettes sont élaborées avec une nutritionniste pour vous offrir des repas équilibrés, gourmands et respectueux de votre santé.",
    badge: "Healthy",
  },
];
