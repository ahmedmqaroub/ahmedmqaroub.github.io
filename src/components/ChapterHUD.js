/**
 * ChapterHUD.js — Already initialized in motion.js.
 * This module provides any additional UI behavior.
 */

import { $ } from '../lib/dom.js';

export function initChapterHUD() {
  const hud = $('#chapterHUD');
  if (!hud) return;

  // HUD visibility is managed by motion.js
  // This module can add additional behaviors if needed

  // Auto-hide after inactivity (optional UX polish)
  let hideTimeout;
  const show = () => {
    hud.classList.add('visible');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      // Don't hide — keep visible for portfolio UX
    }, 5000);
  };

  // Ensure HUD is visible
  show();
}
