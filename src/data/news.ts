export type NewsItem = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  slug: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "15 Mai 2026",
    title: "Nouvelle ouverture : Le Paradis du Fruit débarque à Lyon !",
    excerpt: "Après Paris, Bordeaux et Toulouse, c'est au tour de Lyon de découvrir notre univers fruité et coloré. Le restaurant ouvre ses portes le 1er juin.",
    tags: ["Ouverture", "Actualité"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    slug: "ouverture-lyon",
  },
  {
    id: 2,
    date: "3 Avril 2026",
    title: "Notre nouvelle carte printanière est arrivée",
    excerpt: "Fraises gariguette, asperges vertes, petits pois frais… Le printemps s'invite dans nos assiettes avec 8 nouvelles recettes colorées et vitaminées.",
    tags: ["Carte", "Saison"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
    slug: "carte-printemps-2026",
  },
  {
    id: 3,
    date: "18 Mars 2026",
    title: "Le Paradis du Fruit récompensé au Green Restaurant Award",
    excerpt: "Nous sommes fiers d'avoir reçu le prix de la Restauration Éco-Responsable 2026 pour nos engagements en matière de circuit court et zéro déchet.",
    tags: ["Prix", "Engagement"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
    slug: "green-restaurant-award",
  },
  {
    id: 4,
    date: "10 Février 2026",
    title: "Atelier cuisine : venez créer votre bowl signature",
    excerpt: "Rejoignez-nous le samedi 22 février pour un atelier gourmand animé par notre chef. Apprenez à composer un bowl parfaitement équilibré et savoureux.",
    tags: ["Événement", "Atelier"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    slug: "atelier-bowl-fevrier",
  },
];
