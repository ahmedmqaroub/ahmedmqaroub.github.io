/**
 * Lightbox.js — Focus trap, ESC, overlay close, prev/next, swipe, body scroll lock.
 * Never crashes on missing images.
 */

import { $, on } from '../lib/dom.js';

let isOpen = false;
let currentImages = [];
let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
let previousFocus = null;

const lightbox = () => $('#lightbox');
const lbImg = () => $('.lightbox__img');
const lbPlaceholder = () => $('.lightbox__placeholder');
const lbPlaceholderLabel = () => $('.lightbox__placeholder-label');

/**
 * Open lightbox with image array and index.
 */
export function openLightbox(images, index) {
  currentImages = images || [];
  currentIndex = index || 0;
  previousFocus = document.activeElement;

  const lb = lightbox();
  if (!lb) return;

  isOpen = true;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');

  showImage(currentIndex);

  // Focus the lightbox for keyboard events
  lb.focus();
}

/**
 * Close lightbox.
 */
export function closeLightbox() {
  const lb = lightbox();
  if (!lb) return;

  isOpen = false;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');

  // Restore focus
  if (previousFocus) {
    previousFocus.focus();
    previousFocus = null;
  }
}

/**
 * Show image at index.
 */
function showImage(index) {
  if (index < 0 || index >= currentImages.length) return;
  currentIndex = index;

  const img = lbImg();
  const placeholder = lbPlaceholder();
  const label = lbPlaceholderLabel();

  if (!img) return;

  const src = currentImages[currentIndex];

  // Reset states
  img.style.display = '';
  if (placeholder) placeholder.style.display = 'none';

  img.src = src;
  img.alt = `Proof screenshot ${currentIndex + 1}`;

  // Handle load error
  img.onerror = () => {
    img.style.display = 'none';
    if (placeholder) {
      placeholder.style.display = 'flex';
      if (label) label.textContent = `Expected: ${src}`;
    }
  };
}

/**
 * Navigate to next image.
 */
function nextImage() {
  if (currentIndex < currentImages.length - 1) {
    showImage(currentIndex + 1);
  } else {
    showImage(0); // Loop
  }
}

/**
 * Navigate to previous image.
 */
function prevImage() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  } else {
    showImage(currentImages.length - 1); // Loop
  }
}

/**
 * Initialize lightbox event listeners.
 */
export function initLightbox() {
  const lb = lightbox();
  if (!lb) return;

  // Set tabindex for focus
  lb.setAttribute('tabindex', '-1');

  // Close button
  on($('.lightbox__close', lb), 'click', closeLightbox);

  // Overlay click
  on($('.lightbox__overlay', lb), 'click', closeLightbox);

  // Prev/Next buttons
  on($('.lightbox__prev', lb), 'click', (e) => {
    e.stopPropagation();
    prevImage();
  });
  on($('.lightbox__next', lb), 'click', (e) => {
    e.stopPropagation();
    nextImage();
  });

  // Keyboard navigation
  on(document, 'keydown', (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        e.preventDefault();
        document.documentElement.dir === 'rtl' ? prevImage() : nextImage();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        document.documentElement.dir === 'rtl' ? nextImage() : prevImage();
        break;
      case 'Tab':
        // Focus trap within lightbox
        e.preventDefault();
        const focusable = lb.querySelectorAll('button:not([disabled])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) last?.focus();
          else first?.focus();
        } else {
          if (document.activeElement === last) first?.focus();
          else {
            const arr = Array.from(focusable);
            const idx = arr.indexOf(document.activeElement);
            (arr[idx + 1] || first)?.focus();
          }
        }
        break;
    }
  });

  // Touch swipe
  on(lb, 'touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  on(lb, 'touchend', (e) => {
    if (!isOpen) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;

    // Only handle horizontal swipes
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      const isRTL = document.documentElement.dir === 'rtl';
      if (deltaX > 0) {
        isRTL ? nextImage() : prevImage();
      } else {
        isRTL ? prevImage() : nextImage();
      }
    }
  }, { passive: true });
}
