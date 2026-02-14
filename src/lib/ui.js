/**
 * ui.js — UI utilities: audience selector, brief form, scroll-to, active nav.
 */

import { $, $$, on } from './dom.js';
import { openWhatsApp, getAudience, setAudience } from './whatsapp.js';
import { prefersReducedMotion } from './motionTokens.js';

let lenisInstance = null;

/**
 * Store Lenis reference for scroll-to.
 */
export function setLenisInstance(lenis) {
  lenisInstance = lenis;
}

/**
 * Scroll to element with offset. Uses Lenis if available + motion allowed.
 */
export function scrollToSection(selector, offset = -80) {
  const el = typeof selector === 'string' ? $(selector) : selector;
  if (!el) return;

  if (!prefersReducedMotion() && lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.2 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }
}

/**
 * Initialize audience selector buttons.
 */
export function initAudienceSelector() {
  const buttons = $$('.audience-btn');
  const current = getAudience();

  // Set initial state
  buttons.forEach(btn => {
    const aud = btn.dataset.audience;
    btn.classList.toggle('active', aud === current);
    btn.setAttribute('aria-checked', aud === current ? 'true' : 'false');
  });

  // Handle clicks
  buttons.forEach(btn => {
    on(btn, 'click', () => {
      const aud = btn.dataset.audience;
      setAudience(aud);
      buttons.forEach(b => {
        b.classList.toggle('active', b.dataset.audience === aud);
        b.setAttribute('aria-checked', b.dataset.audience === aud ? 'true' : 'false');
      });
    });
  });
}

/**
 * Initialize brief form submission.
 */
export function initBriefForm() {
  const form = $('#briefForm');
  if (!form) return;

  on(form, 'submit', (e) => {
    e.preventDefault();
    const formData = {
      company: form.company?.value || '',
      market:  form.market?.value || '',
      budget:  form.budget?.value || '',
      goal:    form.goal?.value || '',
      website: form.website?.value || '',
    };
    openWhatsApp('contact', formData);
  });
}

/**
 * Initialize all WhatsApp buttons (except form submit).
 */
export function initWhatsAppButtons() {
  // All buttons with data-wa-position (excluding form submit)
  $$('[data-wa-position]').forEach(btn => {
    if (btn.type === 'submit') return; // form has its own handler
    on(btn, 'click', () => {
      const position = btn.dataset.waPosition || 'floating';
      openWhatsApp(position);
    });
  });
}

/**
 * Initialize active nav highlighting.
 */
export function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link, .mobile-nav-link');

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const linkSection = link.dataset.section || link.getAttribute('href')?.replace('#', '');
            link.classList.toggle('active', linkSection === id);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/**
 * Initialize anchor link smooth scrolling.
 */
export function initAnchorScroll() {
  $$('a[href^="#"]').forEach(link => {
    on(link, 'click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      scrollToSection(href);
      // Close mobile nav if open
      closeMobileNav();
    });
  });
}

/**
 * Close mobile nav helper.
 */
function closeMobileNav() {
  const nav = $('#mobileNav');
  const btn = $('#hamburgerBtn');
  if (nav) {
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden', 'true');
  }
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
  }
  document.body.classList.remove('nav-open');
}

/**
 * Show dev sanity badge in DEV or ?debug=1.
 */
export function showDevBadge() {
  const isDev = import.meta.env?.DEV;
  const isDebug = new URLSearchParams(window.location.search).has('debug');

  if (isDev || isDebug) {
    const badge = document.createElement('div');
    badge.textContent = 'Rendered ✅';
    badge.style.cssText = `
      position:fixed;bottom:8px;left:8px;z-index:99998;
      background:rgba(143,231,230,0.15);color:#8FE7E6;
      padding:4px 10px;border-radius:8px;font-size:11px;
      font-family:'Inter',sans-serif;pointer-events:none;
      border:1px solid rgba(143,231,230,0.2);
    `;
    document.body.appendChild(badge);
  }
}
