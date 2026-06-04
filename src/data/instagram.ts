export type InstaPost = {
  id: number;
  image: string;
  alt: string;
  likes: number;
  isReel?: boolean;
};

export const instaPosts: InstaPost[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    alt: "Bowl tropical coloré",
    likes: 1243,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=400&q=80",
    alt: "Smoothie framboise et mangue",
    likes: 987,
    isReel: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    alt: "Salade de fruits frais",
    likes: 2104,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    alt: "Pizza végétarienne aux légumes grillés",
    likes: 1568,
    isReel: true,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    alt: "Salade arc-en-ciel printanière",
    likes: 3021,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
    alt: "Légumes frais de saison",
    likes: 891,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=400&q=80",
    alt: "Smoothie tropical du paradis",
    likes: 1756,
    isReel: true,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
    alt: "Acai bowl vitaminé",
    likes: 2389,
  },
];
