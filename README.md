# Ahmed Musaad Portfolio

**Premium one-page portfolio website for a Growth & Performance Marketer**

A production-ready, high-performance portfolio built with React + Vite featuring industrial luxury design, smooth scroll storytelling with GSAP, bilingual support (EN/AR with RTL), and WhatsApp-first CTA strategy.

---

## 🚀 Live Demo

- **Production**: `https://USERNAME.github.io` (replace USERNAME with your GitHub username)
- **Custom Domain**: Supported (see Custom Domain Setup below)

---

## ✨ Features

### Design & UX
- **Industrial Luxury Theme**: Dark UI with glass morphism cards, bold editorial typography, ambient depth layers
- **Smooth Scroll Storytelling**: GSAP + ScrollTrigger + Lenis integration
  - Hero micro-parallax
  - Stacking wins cards with active highlighting
  - Horizontal pinned case studies scroll (desktop)
  - Intersection observer reveals with stagger
- **Responsive & Mobile-First**: 60fps target on mobile, performance guards active
- **Accessibility**: WCAG compliant, keyboard navigation, focus management, skip links, ARIA labels

### Internationalization
- **Bilingual EN/AR**: Full RTL support, localStorage language persistence
- **Exact Headlines**: Hero headline/subheadline remain in English in both languages per requirements

### Integrations
- **WhatsApp-First CTA**: Only call-to-action across the site
  - Top nav, hero, floating button, contact form
  - Audience selector (Company, Full-time, Agency, Freelance)
  - Smart prefill templates with form field replacement
- **Analytics Ready**:
  - Google Analytics 4 (placeholder: `G-XXXXXXXXXX`)
  - Meta Pixel (placeholder: `YOUR_PIXEL_ID`)
  - WhatsApp click tracking with position + audience

### Content
- **6 Case Studies**: Real project structures (no client names, industry-only)
- **Proof Library**: Tabs for Ad Screenshots & Client Reviews with lightbox gallery
- **4 Wins Cards**: Verified numbers with context
- **7 Services**: Meta, TikTok, Google, Snapchat Ads + Tracking + Creative + Reporting
- **Tool Stack Badges**: 7 tools (Meta Ads Manager, GA4, GTM, CAPI, etc.)
- **Process Steps**: Audit → Test → Scale → Report

### Performance
- **Blank-Page-Proof**: ErrorBoundary, safe motion init, graceful image fallbacks
- **Performance Guard**: Auto-disables blur/tilt/complexity on low-power devices
- **Reduced Motion Support**: Full disable of animations when `prefers-reduced-motion` is active
- **Lazy Loading**: Images load on demand
- **Optimized Build**: Vite production build with code splitting

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Animation**: GSAP 3 + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Styling**: CSS3 with CSS Variables
- **Deployment**: GitHub Pages (via GitHub Actions)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/USERNAME/USERNAME.github.io.git
cd USERNAME.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deployment to GitHub Pages (User Site)

### Step 1: Create Repository
1. Go to GitHub and create a new repository
2. **Name it exactly**: `USERNAME.github.io` (replace USERNAME with your actual GitHub username)
3. Set it to **Public**

### Step 2: Push Code
```bash
# Initialize git (if not already)
git init

# Add remote
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically trigger on push to `main`

### Step 4: Wait for Deployment
- Go to **Actions** tab in your repo
- Watch the "Deploy to GitHub Pages" workflow run
- Once complete (green checkmark), your site is live at `https://USERNAME.github.io`

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Add CNAME File
Create a file named `CNAME` in the `public/` folder with your domain:
```
yourdomain.com
```

### Step 2: Configure DNS
In your domain registrar, add these DNS records:

**For Apex Domain** (example.com):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For Subdomain** (www.example.com):
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

### Step 3: Enable Custom Domain in GitHub
1. Go to **Settings** → **Pages**
2. Enter your custom domain in the **Custom domain** field
3. Click **Save**
4. Check **Enforce HTTPS** (after DNS propagates)

DNS propagation can take 24-48 hours.

---

## ⚙️ Configuration

### Replace Placeholder IDs

**Google Analytics 4** (`index.html`):
```html
<!-- Replace G-XXXXXXXXXX with your GA4 measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Meta Pixel** (`index.html`):
```javascript
// Replace YOUR_PIXEL_ID with your Meta Pixel ID
fbq('init', 'YOUR_PIXEL_ID');
```

**WhatsApp Number** (`src/lib/whatsapp.js`):
```javascript
// Replace with your WhatsApp number (digits only, no + or spaces)
export const WHATSAPP_NUMBER = '201234567890'
```

### Update Open Graph Image
In `index.html`, replace the OG image URL:
```html
<meta property="og:image" content="https://USERNAME.github.io/assets/og-image.jpg" />
```

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── assets/
│   │   ├── ads/                # Expected: ad-01.jpg to ad-12.jpg
│   │   ├── reviews/            # Expected: rev-01.jpg to rev-12.jpg
│   │   ├── me.jpg              # Optional profile photo
│   │   ├── logo.svg            # Optional logo
│   │   └── og-image.jpg        # Open Graph image
│   └── CNAME                   # Optional: for custom domain
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── ClientsMarkets.jsx
│   │   ├── Contact.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── Hero.jsx
│   │   ├── Lightbox.jsx
│   │   ├── MobileNav.jsx
│   │   ├── Navbar.jsx
│   │   ├── Process.jsx
│   │   ├── ProofLibrary.jsx
│   │   ├── Services.jsx
│   │   ├── SkipLink.jsx
│   │   ├── ToolStack.jsx
│   │   ├── Wins.jsx
│   │   └── [Component].css    # Corresponding stylesheets
│   ├── lib/
│   │   ├── i18n.js             # Bilingual system (EN/AR)
│   │   ├── motion.js           # GSAP + Lenis setup
│   │   ├── tracking.js         # GA4 + Meta Pixel
│   │   └── whatsapp.js         # WhatsApp CTA logic
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css              # Global styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Variables
```css
--bg: #05060A;
--card: rgba(11,13,20,0.75);
--border: rgba(255,255,255,0.08);
--text: #E8ECFF;
--muted: #A9B0D6;
--accent-hot: #FF3B1D;
--accent-mint: #8FE7E6;
--glow-cyan: #00F5FF;
--glow-purple: #A855F7;
```

### Typography
- **Headings**: Space Grotesk (700)
- **Body**: Inter (300-900)
- **Arabic Fallback**: System fonts (Segoe UI, Tahoma, Arial)

### Radii
- Card: `22px`
- Section: `28px`

---

## 🧪 Testing Checklist

- [ ] `npm run dev` shows visible content (no blank page)
- [ ] `npm run build` succeeds without errors
- [ ] Hero headline/subheadline remain in English in both EN/AR
- [ ] WhatsApp buttons open with correct prefill text
- [ ] Language toggle switches UI and sets `html lang/dir`
- [ ] All section IDs exist and nav highlighting works
- [ ] Proof Library tabs accessible (keyboard + ARIA)
- [ ] Lightbox keyboard navigation (ESC, arrows, Tab trap)
- [ ] Mobile nav bottom bar visible on small screens
- [ ] ErrorBoundary shows styled fallback (not blank)
- [ ] Performance guard activates on slow frames
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Missing images show placeholder (not broken)

---

## 📝 Content Update Guide

### Update Wins Data
Edit `src/components/Wins.jsx` → `winsData` array

### Update Services
Edit `src/components/Services.jsx` → `servicesData` array

### Update Case Studies
Edit `src/components/CaseStudies.jsx` → `caseStudiesData` array

### Update Testimonials
Edit `src/components/ProofLibrary.jsx` and `src/components/Wins.jsx` → `testimonials` array

### Add/Remove Tools
Edit `src/components/ToolStack.jsx` → `tools` array

### Update Process Steps
Edit `src/components/Process.jsx` → `processSteps` array

### Update About Content
Edit `src/components/About.jsx` → `aboutPoints` array

---

## 🔒 Security & Privacy

- No API keys exposed in client code
- Analytics IDs are public-facing (standard practice)
- WhatsApp number visible in source (by design for CTA)
- No user data stored (except localStorage: lang, audience)
- HTTPS enforced on GitHub Pages

---

## 🐛 Troubleshooting

### Blank Page on Deploy
- Check browser console for errors
- Verify `base: '/'` in `vite.config.js`
- Ensure GitHub Pages source is set to "GitHub Actions"
- Check Actions tab for build errors

### Images Not Loading
- Ensure images are in `public/assets/` folder
- Check file paths match exactly (case-sensitive)
- Graceful placeholders should still render

### WhatsApp Not Opening
- Verify number format in `src/lib/whatsapp.js` (digits only)
- Check browser console for tracking errors (safe guards should catch)
- Test on mobile device (desktop may open WhatsApp Web)

### Animations Not Working
- Check if `prefers-reduced-motion` is enabled in OS settings
- Verify GSAP/Lenis installed: `npm install`
- Check console for motion init errors (ErrorBoundary should catch)

---

## 📄 License

This project is for personal portfolio use. Feel free to fork and customize.

---

## 🤝 Support

For issues or questions, contact via WhatsApp button on the live site.

---

**Built with ⚡ by Ahmed Musaad**
