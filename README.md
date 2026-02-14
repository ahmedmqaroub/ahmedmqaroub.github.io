# Ahmed Musaad — Portfolio

Premium one-page portfolio for **Ahmed Musaad — Growth & Performance Marketer**.

Industrial Luxury design: dark UI, glass cards, editorial typography, strong grid. Built with Vite + Vanilla JS + GSAP + Lenis.

---

## Tech Stack

| Layer       | Technology                                   |
|-------------|----------------------------------------------|
| Build       | Vite 6 (Vanilla)                             |
| Animation   | GSAP 3 + ScrollTrigger                       |
| Smooth Scroll | Lenis                                      |
| Styling     | Custom CSS (no framework)                    |
| Fonts       | Inter + Space Grotesk (Google Fonts)         |
| Deployment  | GitHub Pages (via Actions)                   |

## Quick Start

```bash
# Clone
git clone https://github.com/your-username/ahmed-musaad-portfolio.git
cd ahmed-musaad-portfolio

# Install
npm install

# Dev server (port 3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── index.html                    # Main HTML (all content, SEO, GA4, Pixel)
├── package.json
├── vite.config.js               # Vite config (base: "/")
├── public/
│   ├── CNAME                    # Custom domain (optional)
│   └── assets/
│       ├── logo.svg             # Logo (SVG placeholder included)
│       ├── me.jpg               # Photo (optional, graceful fallback)
│       ├── ads/                 # Ad screenshots (ad-01.jpg .. ad-12.jpg)
│       └── reviews/             # Review screenshots (rev-01.jpg .. rev-12.jpg)
├── src/
│   ├── main.js                  # App entry point
│   ├── styles.css               # Full design system
│   ├── lib/
│   │   ├── i18n.js              # Bilingual (AR/EN) content + toggle
│   │   ├── tracking.js          # Safe GA4 + Meta Pixel
│   │   ├── whatsapp.js          # WhatsApp CTA + audience templates
│   │   ├── motion.js            # GSAP + ScrollTrigger + Lenis
│   │   ├── motionTokens.js      # Reusable motion tokens (no magic numbers)
│   │   ├── motionBible.js       # Runtime motion rules enforcement
│   │   ├── errorOverlay.js      # Global error overlay (vanilla ErrorBoundary)
│   │   ├── ui.js                # UI utilities
│   │   └── dom.js               # DOM helpers
│   └── components/
│       ├── SkipLink.js
│       ├── Navbar.js
│       ├── MobileNav.js
│       ├── FloatingWhatsApp.js
│       ├── ChapterHUD.js
│       ├── ProofLibrary.js
│       ├── Lightbox.js
│       └── CaseStudiesRail.js
├── docs/
│   └── MOTION_BIBLE.md          # Motion rules documentation
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Pages deploy action
```

## Features

### ✅ Implemented

- **Bilingual (AR/EN)** — Egyptian Arabic default, English toggle, RTL/LTR
- **WhatsApp-only CTA** — 4 positions (nav, hero, floating, contact), audience templates
- **8 sections** — #home #wins #services #tool-stack #case-studies #about #process #contact
- **Chapter HUD** — Scroll-driven chapter indicator with progress
- **Pinned Wins** — 4 stacking cards (desktop), fade reveals (mobile)
- **Horizontal Case Rail** — Pinned scroll (desktop), vertical stack (mobile)
- **Proof Library** — ARIA tabs, keyboard arrows, thumbnail grid
- **Lightbox** — Focus trap, ESC, prev/next, swipe, body scroll lock
- **Intro Reveal** — Once per session, fast (≤800ms)
- **Performance Guard** — Frame monitoring, auto-degrade (blur, tilt, orbs)
- **Reduced Motion** — Full `prefers-reduced-motion` compliance
- **Error Overlay** — Premium dark theme, reload + WhatsApp buttons
- **SEO** — Meta tags, OG, JSON-LD Person schema
- **GA4 + Meta Pixel** — Placeholder IDs, safe tracking calls
- **Responsive** — Mobile-first, 820px breakpoint
- **Accessibility** — Skip link, focus outlines, ARIA, keyboard nav

### 🔧 Configuration Required

Before going live, update these placeholders:

1. **WhatsApp Number**: `src/lib/whatsapp.js` → `WHATSAPP_NUMBER`
2. **GA4 ID**: `index.html` → Replace `G-XXXXXXXXXX`
3. **Meta Pixel ID**: `index.html` → Replace `YOUR_PIXEL_ID`
4. **Canonical URL**: `index.html` → Update `href` values
5. **OG Image**: Add `public/assets/og-image.jpg`
6. **CNAME**: Update `public/CNAME` with your domain
7. **Images**: Add actual screenshots to `public/assets/ads/` and `public/assets/reviews/`
8. **Photo**: Add your photo as `public/assets/me.jpg`

### 📱 Section IDs (Navigation)

| Section       | ID              |
|---------------|-----------------|
| Hero          | `#home`         |
| Wins          | `#wins`         |
| Services      | `#services`     |
| Tool Stack    | `#tool-stack`   |
| Case Studies  | `#case-studies` |
| About         | `#about`        |
| Process       | `#process`      |
| Contact       | `#contact`      |

## Deployment

### GitHub Pages (Automatic)

Push to `main` → GitHub Actions builds and deploys automatically.

### Custom Domain

1. Update `public/CNAME` with your domain
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repo settings

### Manual Deploy

```bash
npm run build
# Upload contents of dist/ to your hosting provider
```

## Motion Bible

See `docs/MOTION_BIBLE.md` for complete animation rules, timing, and constraints.

Key principles:
- Meaning over decoration
- Render-first (content visible without JS)
- Cheap transforms only (translate, scale, rotate, opacity)
- 60fps mobile target
- Full `prefers-reduced-motion` compliance

## Debug Mode

Add `?debug=1` to URL to show the "Rendered ✅" sanity badge.

## License

Private. © 2026 Ahmed Musaad. All rights reserved.
