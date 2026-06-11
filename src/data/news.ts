export type NewsItem = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  tags: string[];
  image: string;
  slug: string;
  author?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "15 Mai 2026",
    title: "Nouvelle ouverture : L'Éden Fruité débarque à Lyon !",
    excerpt: "Après Paris, Bordeaux et Toulouse, c'est au tour de Lyon de découvrir notre univers fruité et coloré. Le restaurant ouvre ses portes le 1er juin.",
    body: [
      "C'est une grande première pour la capitale des Gaules : L'Éden Fruité installe son 81e restaurant en plein cœur de la Presqu'île, rue de la République. Sur 220 m², le lieu accueille jusqu'à 80 couverts dans une ambiance végétale signée par l'agence d'architecture Studio Fé.",
      "Comme dans toutes nos adresses, la carte met en avant les producteurs locaux : maraîchers de la Drôme, fruitiers d'Ardèche, miel de l'Ain. Une dizaine de plats exclusifs à l'adresse seront proposés en complément de la carte nationale.",
      "Pour fêter l'ouverture, les 100 premiers clients du 1er juin se verront offrir un smoothie signature et l'inscription à notre carte fidélité.",
    ],
    tags: ["Ouverture", "Actualité"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    slug: "ouverture-lyon",
    author: "Léa Marchand",
  },
  {
    id: 2,
    date: "3 Avril 2026",
    title: "Notre nouvelle carte printanière est arrivée",
    excerpt: "Fraises gariguette, asperges vertes, petits pois frais… Le printemps s'invite dans nos assiettes avec 8 nouvelles recettes colorées et vitaminées.",
    body: [
      "Le printemps, c'est notre saison préférée : un kaléidoscope de couleurs et de textures qui inspire nos chefs. Cette année, ils ont imaginé 8 nouvelles créations qui font la part belle aux fruits et légumes français de saison.",
      "Au menu : un bowl florentin aux légumes verts rôtis, une salade gariguette-burrata, un wrap aux asperges et houmous de petits pois, et un smoothie « Sunrise » à la fraise et au gingembre frais.",
      "Notre engagement zéro additif et notre approvisionnement court (70 % de produits locaux) restent intacts. Toutes les recettes sont disponibles à partir du 5 avril dans l'ensemble du réseau.",
    ],
    tags: ["Carte", "Saison"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=85",
    slug: "carte-printemps-2026",
    author: "Thomas Bernier",
  },
  {
    id: 3,
    date: "18 Mars 2026",
    title: "L'Éden Fruité récompensé au Green Restaurant Award",
    excerpt: "Nous sommes fiers d'avoir reçu le prix de la Restauration Éco-Responsable 2026 pour nos engagements en matière de circuit court et zéro déchet.",
    body: [
      "Le 17 mars, lors de la cérémonie annuelle du Green Restaurant Award à Paris, L'Éden Fruité a été nommé « Restaurant Éco-Responsable de l'Année 2026 » dans la catégorie chaîne nationale.",
      "Le jury a salué notre démarche complète : compostage in-situ dans 90 % des établissements, vaisselle 100 % réutilisable depuis 2023, panneaux photovoltaïques sur les nouveaux restaurants, et partenariats locaux avec 240 producteurs partout en France.",
      "Cette distinction nous engage à aller encore plus loin. Notre objectif 2027 : zéro emballage plastique sur l'ensemble de la chaîne et 80 % d'approvisionnement local.",
    ],
    tags: ["Prix", "Engagement"],
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=85",
    slug: "green-restaurant-award",
    author: "Sophie Lemaire",
  },
  {
    id: 4,
    date: "10 Février 2026",
    title: "Atelier cuisine : venez créer votre bowl signature",
    excerpt: "Rejoignez-nous le samedi 22 février pour un atelier gourmand animé par notre chef. Apprenez à composer un bowl parfaitement équilibré et savoureux.",
    body: [
      "Vous rêvez de reproduire nos bowls à la maison ? Notre chef exécutif Marc Bouchard vous ouvre les portes de la cuisine pour un atelier de 2h30, le samedi 22 février à 10h dans notre restaurant Paris-Marais.",
      "Au programme : sélection des ingrédients de saison, équilibre des saveurs, dressage et photogénie. Vous repartirez avec votre bowl signature et le livret recettes maison.",
      "Tarif : 45 € par personne (incluant ingrédients, dégustation et un smoothie). Places limitées à 12 participants. Inscription via notre formulaire en ligne.",
    ],
    tags: ["Événement", "Atelier"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&q=85",
    slug: "atelier-bowl-fevrier",
    author: "Marc Bouchard",
  },
];
