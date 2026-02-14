/**
 * CaseStudiesRail.js — Manages case studies display mode.
 * Desktop: horizontal pinned rail (handled by motion.js)
 * Mobile: vertical stack
 * This component handles any non-motion UI aspects.
 */

import { $ } from '../lib/dom.js';
import { isMobile } from '../lib/motionTokens.js';

export function initCaseStudiesRail() {
  const wrapper = $('#casesRailWrapper');
  if (!wrapper) return;

  // Set initial mode class
  updateMode(wrapper);

  // Update on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => updateMode(wrapper), 200);
  });
}

function updateMode(wrapper) {
  if (isMobile()) {
    wrapper.classList.add('cases--vertical');
    wrapper.classList.remove('cases--horizontal');
  } else {
    wrapper.classList.remove('cases--vertical');
    wrapper.classList.add('cases--horizontal');
  }
}
