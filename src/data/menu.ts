export type MenuItem = {
  id: number;
  title: string;
  description: string;
  tag: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Bowl Tropical",
    description: "Riz basmati, mangue fraîche, avocat, crevettes marinées et sauce coco",
    tag: "Nouveauté",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    id: 2,
    title: "Salade Arc-en-Ciel",
    description: "Mesclun bio, fraises, myrtilles, noix de cajou et vinaigrette à la framboise",
    tag: "Best-seller",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    id: 3,
    title: "Smoothie Paradis",
    description: "Ananas, mangue, gingembre, lait de coco et graines de chia",
    tag: "Fraîcheur",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&q=80",
  },
  {
    id: 4,
    title: "Burger Végétal",
    description: "Steak de pois chiches, avocat écrasé, tomates confites et mayo basilic",
    tag: "Végétarien",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
  },
  {
    id: 5,
    title: "Acai Bowl",
    description: "Base acai, granola maison, banane, fruits rouges et miel d'acacia",
    tag: "Healthy",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
  },
];
