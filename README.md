# Ahmed Musaad - Growth & Performance Marketer Portfolio

A premium, production-ready portfolio website built with Vite + React, featuring industrial luxury design, smooth scroll storytelling, and comprehensive performance optimizations.

## 🌟 Features

- **Industrial Luxury Design**: Dark UI with glass cards, bold typography, and premium aesthetics
- **Smooth Scroll Storytelling**: GSAP + Lenis integration for 60fps animations
- **Bilingual Support**: English/Arabic (EN/AR) with RTL support
- **Performance Optimized**: Mobile-first, 60fps target, performance guards
- **Accessibility**: ARIA labels, keyboard navigation, skip links
- **SEO Ready**: Meta tags, JSON-LD schema, OpenGraph
- **Analytics**: GA4 and Meta Pixel integration
- **WhatsApp Integration**: Primary CTA with audience templates
- **Error Boundaries**: Blank-page-proof with fallback UI
- **GitHub Pages Ready**: Automated deployment workflow

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
cd YOUR_USERNAME.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── lib/              # Utilities (i18n, tracking, motion, whatsapp)
│   ├── styles.css        # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .github/workflows/     # GitHub Actions
├── package.json
├── vite.config.js
└── index.html
```

## 🎯 Deployment to GitHub Pages

### 1. Repository Setup
- Create a repository named `YOUR_USERNAME.github.io`
- Push your code to the `main` branch

### 2. Enable GitHub Pages
- Go to Settings → Pages
- Set Source to "GitHub Actions"
- The workflow will automatically deploy on push

### 3. Custom Domain (Optional)
- Add a `CNAME` file in the `public/` directory with your domain
- Configure DNS records as per GitHub documentation
- Enable HTTPS in repository settings

## ⚙️ Configuration

### WhatsApp Number
Edit `src/lib/whatsapp.js`:
```javascript
export const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER' // Digits only
```

### Analytics
Edit tracking IDs in `index.html`:
```html
// GA4
gtag('config', 'G-XXXXXXXXXX'); // Replace with actual ID

// Meta Pixel
fbq('init', 'YOUR_PIXEL_ID'); // Replace with actual ID
```

### Language
Default language is English. Toggle between EN/AR using the language switcher.

## 🎨 Design System

CSS Variables for consistent theming:
```css
--bg: #05060A;                    // Background
--card: rgba(11,13,20,0.75);     // Card background
--border: rgba(255,255,255,0.08);  // Borders
--text: #E8ECFF;                  // Primary text
--muted: #A9B0D6;                 // Secondary text
--accent-hot: #FF3B1D;             // Primary accent
--accent-mint: #8FE7E6;             // Secondary accent
--glow-cyan: #00F5FF;              // Cyan glow
--glow-purple: #A855F7;           // Purple glow
```

## 📱 Performance Features

- **Performance Guards**: Monitors frame rate and disables heavy animations
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Mobile Optimizations**: Touch-friendly, responsive design
- **Lazy Loading**: Components load as needed
- **Image Optimization**: WebP format with fallbacks

## 🔧 Development

### Environment Variables
Create `.env` file:
```env
VITE_DEBUG=true  # Shows debug indicators
```

### Debug Mode
Add `?debug=1` to URL to show debug indicators in production.

## 🛡️ Safety Features

- **Error Boundaries**: Prevents white screen of death
- **Image Fallbacks**: Graceful handling of missing images
- **Safe Tracking**: Guards against missing analytics
- **Performance Monitoring**: Auto-disables heavy features on slow devices

## 📊 SEO & Analytics

- **JSON-LD Schema**: Person schema for better search results
- **OpenGraph**: Social media preview cards
- **Meta Tags**: Comprehensive page metadata
- **Analytics Events**: WhatsApp clicks, page views, scroll depth

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Contact via WhatsApp (configured in the app)

## 🔄 Updates

The project uses automated GitHub Actions for:
- Continuous deployment
- Dependency updates
- Performance monitoring

---

**Live Demo**: https://YOUR_USERNAME.github.io
**Build Status**: ![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)