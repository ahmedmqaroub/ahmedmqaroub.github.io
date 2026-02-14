/**
 * Navbar.js — Sticky pill nav with active section highlight.
 */

import { $, on } from '../lib/dom.js';

export function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  let lastScroll = 0;
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const currentScroll = window.scrollY;

      // Add/remove scrolled class for styling
      navbar.classList.toggle('navbar--scrolled', currentScroll > 50);

      // Auto-hide on mobile when scrolling down, show on scroll up
      if (window.innerWidth <= 820) {
        if (currentScroll > lastScroll && currentScroll > 200) {
          navbar.classList.add('navbar--hidden');
        } else {
          navbar.classList.remove('navbar--hidden');
        }
      } else {
        navbar.classList.remove('navbar--hidden');
      }

      lastScroll = currentScroll;
      ticking = false;
    });
  };

  on(window, 'scroll', handleScroll, { passive: true });
  handleScroll(); // Initial state
}
