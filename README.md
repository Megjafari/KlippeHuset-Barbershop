# Klippe Huset — Website

Website for Klippe Huset, Aalborg's hair salon founded in 2005 by Hafizullah Mir.

## Tech Stack

- **Vite** + **React 18**
- Vanilla CSS (no framework)
- Deployment: Vercel

## Run locally

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Project structure

```
klippehuset/
├── public/
│   ├── kh-logo.jpg        # Logo (replace with final version)
│   ├── favicon.svg        # Favicon
│   └── [images]           # Add gallery images here
├── src/
│   ├── App.jsx            # Main component
│   ├── styles.css         # All CSS
│   ├── data.js            # Text, translations & reviews
│   ├── hooks/
│   │   └── useInView.js   # Intersection Observer hook
│   └── components/
│       ├── Reveal.jsx     # Scroll animation wrapper
│       └── Stars.jsx      # Star rating component
├── index.html
├── vite.config.js
└── package.json
```

## Sections

- **Hero** — Title and CTA button with Timma booking link
- **Services ticker** — Scrolling strip with services and prices
- **Gallery** — 4 image cells (replace with real photos)
- **About** — About Hafizullah Mir
- **Reviews** — 46 Google reviews (4–5 stars), 3 shown at a time
- **Contact** — Address, phone, email, Facebook link
- **Footer** — Booking button

## Language

The site supports Danish (default) and English. All text is stored in `src/data.js` under `translations.da` and `translations.en`.

## Before launch

- [ ] Update Timma booking link in `App.jsx` (2 places)
- [ ] Add real images to `/public/`
- [ ] Update phone number in `App.jsx`
- [ ] Verify Facebook link in contact section

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Done — auto deploys on every push
