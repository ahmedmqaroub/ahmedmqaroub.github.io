/**
 * tracking.js — Safe GA4 + Meta Pixel tracking.
 * ALL calls guarded. Never throws. Never blocks WhatsApp.
 */

/**
 * Fire GA4 event safely.
 */
export function trackGA4(eventName, params = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch {
    // Silent fail — tracking must never break UX
  }
}

/**
 * Fire Meta Pixel event safely.
 */
export function trackPixel(eventName, params = {}) {
  try {
    if (typeof window.fbq === 'function') {
      if (eventName.startsWith('track')) {
        // Standard events like 'trackCustom'
        window.fbq('trackCustom', eventName.replace('trackCustom', '').trim() || eventName, params);
      } else {
        window.fbq('trackCustom', eventName, params);
      }
    }
  } catch {
    // Silent fail
  }
}

/**
 * Track WhatsApp click on both platforms.
 * @param {string} position - "top"|"hero"|"floating"|"contact"
 * @param {string} audience - "company"|"fulltime"|"agency"|"freelance"
 */
export function trackWhatsAppClick(position, audience) {
  trackGA4('whatsapp_click', {
    position,
    audience,
    value: 1,
  });

  trackPixel('WhatsAppClick', {
    position,
    audience,
  });
}
