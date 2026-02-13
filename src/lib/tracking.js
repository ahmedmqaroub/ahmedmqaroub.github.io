// Safe tracking utility
// Guards all GA4 and Meta Pixel calls

export function trackWhatsAppClick(position, audience) {
  if (typeof window === 'undefined') return
  
  try {
    // GA4 tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        position: position,
        audience: audience,
        value: 1
      })
    }
    
    // Meta Pixel tracking
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'WhatsAppClick', {
        position: position,
        audience: audience
      })
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Tracking error:', err)
    }
  }
}

export function trackPageView() {
  if (typeof window === 'undefined') return
  
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view')
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Page view tracking error:', err)
    }
  }
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return
  
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Event tracking error:', err)
    }
  }
}
