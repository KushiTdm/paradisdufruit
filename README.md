# L'Éden Fruité 🍍

Landing page du restaurant healthy & fruité **L'Éden Fruité** — frais, local, fait maison.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP + ScrollTrigger](https://gsap.com) — animations au scroll, parallax, compteurs, marquee réactif à la vélocité
- [Lenis](https://lenis.darkroom.engineering) — smooth scroll synchronisé avec ScrollTrigger
- [Motion](https://motion.dev) — micro-interactions (reveals, menu mobile)
- [Embla Carousel](https://www.embla-carousel.com) — carrousels

## Animations

| Composant | Effet |
|---|---|
| `gsap/SmoothScroll` | Smooth scroll Lenis + sync ScrollTrigger |
| `ui/AnimatedTitle` | Titres révélés mot à mot (masques) |
| `ui/Parallax` | Déplacement vertical scrubbed (badges, SVG botaniques) |
| `ui/ParallaxImage` | Parallax interne des images |
| `ui/CountUp` | Compteurs animés à l'entrée dans le viewport |
| `ui/ScaleReveal` | Zoom progressif piloté par le scroll |
| `MarqueeSection` | Marquee dont la vitesse réagit à la vélocité du scroll |
| `Hero` | Timeline d'intro + parallax du fond |

Toutes les animations respectent `prefers-reduced-motion`.

## Démarrer

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
