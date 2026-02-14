/**
 * MobileNav.js — Premium compact mobile nav drawer.
 */

import { $, on } from '../lib/dom.js';

export function initMobileNav() {
  const hamburger = $('#hamburgerBtn');
  const mobileNav = $('#mobileNav');
  if (!hamburger || !mobileNav) return;

  const overlay = $('.mobile-nav__overlay', mobileNav);
  const drawer = $('.mobile-nav__drawer', mobileNav);

  function openNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');

    // Focus trap: focus first link
    const firstLink = mobileNav.querySelector('.mobile-nav-link');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    hamburger.focus();
  }

  function toggleNav() {
    if (mobileNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  }

  // Hamburger click
  on(hamburger, 'click', toggleNav);

  // Overlay click
  if (overlay) {
    on(overlay, 'click', closeNav);
  }

  // Link clicks close nav
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    on(link, 'click', () => {
      setTimeout(closeNav, 100);
    });
  });

  // WA button in mobile nav
  const waBtn = mobileNav.querySelector('.mobile-nav__wa');
  if (waBtn) {
    on(waBtn, 'click', closeNav);
  }

  // ESC key
  on(document, 'keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeNav();
    }
  });

  // Close on resize to desktop
  on(window, 'resize', () => {
    if (window.innerWidth > 820 && mobileNav.classList.contains('open')) {
      closeNav();
    }
  });
}
