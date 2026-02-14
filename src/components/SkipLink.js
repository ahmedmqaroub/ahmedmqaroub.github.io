/**
 * SkipLink.js — Already in HTML. This enhances focus behavior.
 */

import { $, on } from '../lib/dom.js';
import { scrollToSection } from '../lib/ui.js';

export function initSkipLink() {
  const link = $('.skip-link');
  if (!link) return;

  on(link, 'click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    scrollToSection(target);
    // Move focus to main content
    const mainEl = $(target) || $('#mainContent');
    if (mainEl) {
      mainEl.setAttribute('tabindex', '-1');
      mainEl.focus();
    }
  });
}
