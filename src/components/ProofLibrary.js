/**
 * ProofLibrary.js — Proof tabs (ARIA compliant) + thumbnail grid.
 * Handles missing images gracefully with skeleton + shimmer + label.
 */

import { $, $$, on, createElement } from '../lib/dom.js';

const AD_IMAGES = Array.from({ length: 12 }, (_, i) =>
  `/assets/ads/ad-${String(i + 1).padStart(2, '0')}.jpg`
);
const REVIEW_IMAGES = Array.from({ length: 12 }, (_, i) =>
  `/assets/reviews/rev-${String(i + 1).padStart(2, '0')}.jpg`
);

let currentTab = 'ads';
let lightboxCallback = null;

/**
 * Set lightbox open callback.
 */
export function setLightboxCallback(cb) {
  lightboxCallback = cb;
}

/**
 * Create a proof thumbnail item.
 */
function createProofItem(src, index) {
  const item = createElement('div', {
    className: 'proof__item',
    dataset: { index: String(index), src },
    tabindex: '0',
    role: 'button',
    'aria-label': `View proof ${index + 1}`,
  });

  const img = createElement('img', {
    src,
    alt: `Proof screenshot ${index + 1}`,
    loading: 'lazy',
    className: 'proof__thumb',
  });

  // Handle missing images gracefully
  img.onerror = () => {
    img.style.display = 'none';
    item.classList.add('proof__item--placeholder');
    const placeholder = createElement('div', { className: 'proof__placeholder' });
    const shimmer = createElement('div', { className: 'proof__shimmer' });
    const label = createElement('span', { className: 'proof__placeholder-label' }, [`Expected: ${src}`]);
    placeholder.appendChild(shimmer);
    placeholder.appendChild(label);
    item.appendChild(placeholder);
  };

  item.appendChild(img);

  // Click to open lightbox
  const openLB = () => {
    const images = currentTab === 'ads' ? AD_IMAGES : REVIEW_IMAGES;
    if (lightboxCallback) {
      lightboxCallback(images, index);
    }
  };

  on(item, 'click', openLB);
  on(item, 'keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLB();
    }
  });

  return item;
}

/**
 * Populate a grid with proof items.
 */
function populateGrid(gridEl, images) {
  if (!gridEl) return;
  gridEl.innerHTML = '';
  images.forEach((src, i) => {
    gridEl.appendChild(createProofItem(src, i));
  });
}

/**
 * Initialize proof library tabs + grids.
 */
export function initProofLibrary() {
  const tabs = $$('.proof__tab');
  const panels = $$('.proof__panel');
  const adsGrid = $('#proofGridAds');
  const reviewsGrid = $('#proofGridReviews');

  // Populate grids
  populateGrid(adsGrid, AD_IMAGES);
  populateGrid(reviewsGrid, REVIEW_IMAGES);

  // Tab switching
  tabs.forEach(tab => {
    on(tab, 'click', () => {
      const targetPanel = tab.getAttribute('aria-controls');
      currentTab = tab.id === 'tab-ads' ? 'ads' : 'reviews';

      // Update tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      panels.forEach(p => {
        const isTarget = p.id === targetPanel;
        p.classList.toggle('active', isTarget);
        p.hidden = !isTarget;
      });
    });

    // Keyboard arrow navigation for tabs
    on(tab, 'keydown', (e) => {
      const tabArray = tabs;
      const currentIndex = tabArray.indexOf(tab);
      let newIndex = -1;

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = document.documentElement.dir === 'rtl'
          ? (e.key === 'ArrowRight' ? -1 : 1)
          : (e.key === 'ArrowRight' ? 1 : -1);
        newIndex = (currentIndex + dir + tabArray.length) % tabArray.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = tabArray.length - 1;
      }

      if (newIndex >= 0) {
        tabArray[newIndex].focus();
        tabArray[newIndex].click();
      }
    });
  });
}

export { AD_IMAGES, REVIEW_IMAGES, currentTab };
