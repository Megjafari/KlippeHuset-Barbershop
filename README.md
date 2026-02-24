# Klippe Huset — Website

Professionell frisørsalon-webbplats för Klippe Huset i Aalborg, Danmark.

## Tech Stack

- **Vite** + **React 18**
- Vanilla CSS (ingen ramverk)
- Deployment: Vercel / Netlify

## Starta lokalt

```bash
npm install
npm run dev
```

## Bygg

```bash
npm run build
```

## Struktur

```
src/
  App.jsx          # Huvudkomponent
  styles.css       # All CSS
  data.js          # Texter & recensioner
  hooks/
    useInView.js   # Intersection Observer hook
  components/
    Reveal.jsx     # Scroll-animationsomslutning
    Stars.jsx      # Stjärnbetyg
```

## Deploy till Vercel

1. Push till GitHub
2. Importera repo på vercel.com
3. Klart — automatisk deploy vid varje push
