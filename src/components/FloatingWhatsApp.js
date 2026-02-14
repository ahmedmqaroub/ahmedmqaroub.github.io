/**
 * FloatingWhatsApp.js — Floating bottom-right WhatsApp button.
 * Aria-label + keyboard focus. Shows after scroll.
 */

import { $, on } from '../lib/dom.js';
import { openWhatsApp } from '../lib/whatsapp.js';

export function initFloatingWhatsApp() {
  const btn = $('#floatingWA');
  if (!btn) return;

  // Click handler
  on(btn, 'click', () => {
    openWhatsApp('floating');
  });

  // Keyboard enter/space
  on(btn, 'keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openWhatsApp('floating');
    }
  });

  // Show after scrolling past hero
  let visible = false;
  const handleScroll = () => {
    const shouldShow = window.scrollY > 400;
    if (shouldShow !== visible) {
      visible = shouldShow;
      btn.classList.toggle('visible', visible);
    }
  };

  on(window, 'scroll', handleScroll, { passive: true });
  handleScroll();
}
