/**
 * dom.js — DOM utility helpers.
 * Safe query selectors, element creation, class manipulation.
 */

/**
 * Safe querySelector. Returns null if not found.
 */
export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Safe querySelectorAll as array.
 */
export function $$(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * Create element with attributes.
 */
export function createElement(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (key === 'className') {
      el.className = val;
    } else if (key === 'dataset') {
      for (const [dk, dv] of Object.entries(val)) {
        el.dataset[dk] = dv;
      }
    } else if (key === 'style' && typeof val === 'object') {
      Object.assign(el.style, val);
    } else if (key.startsWith('on')) {
      el.addEventListener(key.slice(2).toLowerCase(), val);
    } else {
      el.setAttribute(key, val);
    }
  }
  for (const child of children) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  }
  return el;
}

/**
 * Add event listener with automatic cleanup tracking.
 */
const listeners = [];
export function on(el, event, handler, options) {
  if (!el) return;
  el.addEventListener(event, handler, options);
  listeners.push({ el, event, handler, options });
}

/**
 * Cleanup all tracked listeners.
 */
export function cleanupListeners() {
  for (const { el, event, handler, options } of listeners) {
    try { el.removeEventListener(event, handler, options); } catch { /* noop */ }
  }
  listeners.length = 0;
}

/**
 * Wait for next frame.
 */
export function nextFrame() {
  return new Promise(resolve => requestAnimationFrame(resolve));
}

/**
 * Check if element is in viewport.
 */
export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}
