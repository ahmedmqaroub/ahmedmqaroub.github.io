/**
 * main.js — Application entry point.
 * Import CSS (Vite handles it).
 * Register error overlay FIRST.
 * Initialize all modules safely.
 * Idempotent — safe if called twice (HMR).
 */

// 1. CSS import — guarantees styles load (body bg never white)
import './styles.css';

// 2. Error overlay — register BEFORE anything else
import { registerErrorOverlay } from './lib/errorOverlay.js';
registerErrorOverlay();

// 3. Core modules
import { initI18n } from './lib/i18n.js';
import { initAudienceSelector, initBriefForm, initWhatsAppButtons, initActiveNav, initAnchorScroll, showDevBadge } from './lib/ui.js';
import { initMotion, cleanupMotion } from './lib/motion.js';

// 4. Components
import { initSkipLink } from './components/SkipLink.js';
import { initNavbar } from './components/Navbar.js';
import { initMobileNav } from './components/MobileNav.js';
import { initFloatingWhatsApp } from './components/FloatingWhatsApp.js';
import { initChapterHUD } from './components/ChapterHUD.js';
import { initProofLibrary, setLightboxCallback } from './components/ProofLibrary.js';
import { initLightbox, openLightbox } from './components/Lightbox.js';
import { initCaseStudiesRail } from './components/CaseStudiesRail.js';

// ─── Idempotent init guard ──────────────────────────
let appInitialized = false;

function initApp() {
  if (appInitialized) {
    // Cleanup for HMR
    cleanupMotion();
  }

  try {
    // Language system (must be first for RTL)
    initI18n();

    // UI components
    initSkipLink();
    initNavbar();
    initMobileNav();
    initFloatingWhatsApp();
    initChapterHUD();
    initCaseStudiesRail();

    // Proof library + lightbox connection
    initLightbox();
    setLightboxCallback(openLightbox);
    initProofLibrary();

    // WhatsApp + audience + form
    initAudienceSelector();
    initBriefForm();
    initWhatsAppButtons();

    // Navigation
    initActiveNav();
    initAnchorScroll();

    // Dev badge
    showDevBadge();

    // Motion — after first paint, non-blocking
    requestAnimationFrame(() => {
      initMotion().catch((err) => {
        console.warn('[main.js] Motion init failed, UI continues:', err);
      });
    });

    appInitialized = true;
  } catch (err) {
    console.error('[main.js] App init error:', err);
    // Even if init fails, content is in HTML, WhatsApp links work
  }
}

// ─── DOM Ready ──────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ─── Vite HMR ───────────────────────────────────────
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    initApp();
  });
}
