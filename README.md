# PresenZ — Web Landing Page

Official marketing website for **PresenZ** — an app that surfaces live art, music, food, nightlife, cinema, and city culture on a real-time map. Every moment is visible only while it's happening, and disappears automatically after 48 hours.

---

## 🌐 Live Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/about` | About PresenZ — philosophy, values, CTA |

---

## ✨ Features

- **Fixed navbar** with logo, Home/About links, search overlay, language toggle, and "Get App" CTA
- **Hero section** with full-bleed background image, gradient overlay, and App Store / Google Play badge links
- **"A new way to experience culture"** section with live event cards (Art, Music, etc.)
- **Explore by category** — interactive cards (Music, Food, Night, Cinema) with aspect-ratio portrait layout, label badges, and animated pagination dots
- **iPhone Live Pulse section** — app mockup with stats row, animated Live badge, and App Store CTA
- **"No profiles. No Followers. No filters."** statement section with `bg.png` background at full opacity
- **The Experience** — full-width multi-screen app mockup image
- **About page** — fully light-themed with hover cards, frosted glass beliefs, and soft gradient CTA
- **Footer** — logo, nav links, Privacy Policy / Terms of Service, social icons (Facebook, Twitter, Instagram, LinkedIn)
- Fully responsive — mobile hamburger drawer included
- Real App Store link wired up throughout

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | ^14.2.29 |
| React | ^18 |
| TypeScript | ^5 |
| Tailwind CSS | ^3.4.1 |
| Inter Font | via `next/font/google` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
presenz-web-main/
├── public/                         # Static assets (all local — no external CDN)
│   ├── logo.png                    # PresenZ app icon (navbar logo)
│   ├── landing.png                 # Hero section background
│   ├── bg.png                      # "No profiles" section background
│   ├── iphone.jpeg                 # iPhone mockup (Live Pulse section)
│   ├── experience.png              # Multi-screen app experience image
│   ├── music.png                   # Category card — Music
│   ├── food.png                    # Category card — Food
│   ├── night.png                   # Category card — Night
│   ├── cinema.png                  # Category card — Cinema
│   ├── playstore.png               # Google Play badge
│   ├── appstore.png                # App Store badge
│   └── demo.png                    # (Demo/unused asset)
│
├── src/
│   ├── app/
│   │   ├── page.tsx                # Home — landing page (assembles all sections)
│   │   ├── layout.tsx              # Root layout (Inter font, metadata)
│   │   ├── globals.css             # Global styles + Tailwind directives
│   │   └── about/
│   │       └── page.tsx            # About page (philosophy, values, CTA)
│   │
│   ├── components/
│   │   ├── Navbar.tsx              # Fixed navbar with search overlay + mobile drawer
│   │   ├── HeroSection.tsx         # Hero with bg image, headline, app badges
│   │   ├── ExperienceSection.tsx   # "A new way to experience culture" + live event cards
│   │   ├── CategorySection.tsx     # Explore by category — 4 interactive portrait cards
│   │   ├── IPhoneSection.tsx       # "See what's happening" — iPhone mockup + stats
│   │   ├── NoProfilesSection.tsx   # "No profiles. No Followers." statement section
│   │   ├── TheExperienceSection.tsx# Full-width experience image (no text overlay)
│   │   └── Footer.tsx              # Footer with logo, nav, legal links, social icons
│   │
│   └── lib/
│       └── images.ts               # Centralised image paths + App Store / Play Store URLs
│
├── next.config.js                  # Next.js config
├── tailwind.config.ts              # Tailwind theme (presenz-blue, presenz-navy, Inter font)
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS config
└── package.json                    # Dependencies + scripts
```

---

## 🎨 Theme & Design Tokens

Defined in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `presenz-blue` | `#052dff` | Primary brand colour — buttons, links, accents |
| `presenz-navy` | `rgba(5,0,108,0.99)` | Body text on light backgrounds |
| `presenz-dark` | `#0a0a0a` | Dark text fallback |
| Font | Inter (Google Fonts) | All body and heading text |

---

## 🔗 Key Links

| Destination | URL |
|-------------|-----|
| App Store | https://apps.apple.com/fr/app/presenz/id6757540847?l=en-GB |
| Google Play | https://play.google.com/store/apps/details?id=com.presenz |

---

## 📦 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

Private project — © 2026 Presenz-IntusLab Inc. All rights reserved.
