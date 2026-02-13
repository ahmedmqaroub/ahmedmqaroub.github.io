// WhatsApp CTA utility with audience templates
import { trackWhatsAppClick } from './tracking'

// TODO: Replace with actual WhatsApp number (digits only, no +)
export const WHATSAPP_NUMBER = '201234567890'

// Base prefill text (EXACT - do not change)
const BASE_PREFILL_TEXT = "Hi Ahmed, I'm from [Company]. Market: [ ]. Budget: [ ]. Goal: [Leads/Sales]. Website/IG: [ ]. When can we talk?"

// Audience-specific additions (EXACT - do not change)
const AUDIENCE_ADDITIONS = {
  company: "Industry: [ ].",
  fulltime: "Role: [ ]. Start date: [ ].",
  agency: "Monthly volume: [ ]. Collaboration: [white-label/consulting].",
  freelance: "Project scope: [ ]. Timeline: [ ]."
}

export function getStoredAudience() {
  if (typeof window === 'undefined') return 'company'
  const stored = localStorage.getItem('audience')
  if (stored && AUDIENCE_ADDITIONS[stored]) {
    return stored
  }
  return 'company'
}

export function setStoredAudience(audience) {
  if (typeof window === 'undefined') return
  if (!AUDIENCE_ADDITIONS[audience]) return
  localStorage.setItem('audience', audience)
}

export function buildWhatsAppText(audience, formData = {}) {
  let text = BASE_PREFILL_TEXT
  
  // Replace form fields if provided
  if (formData.company) {
    text = text.replace('[Company]', formData.company)
  }
  if (formData.market) {
    text = text.replace('Market: [ ]', `Market: ${formData.market}`)
  }
  if (formData.budget) {
    text = text.replace('Budget: [ ]', `Budget: ${formData.budget}`)
  }
  if (formData.goal) {
    text = text.replace('[Leads/Sales]', formData.goal)
  }
  if (formData.website) {
    text = text.replace('Website/IG: [ ]', `Website/IG: ${formData.website}`)
  }
  
  // Add audience-specific line
  const addition = AUDIENCE_ADDITIONS[audience] || AUDIENCE_ADDITIONS.company
  text += ' ' + addition
  
  return text
}

export function buildWhatsAppURL(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(position, formData = {}) {
  const audience = getStoredAudience()
  
  // Track first
  trackWhatsAppClick(position, audience)
  
  // Build and open URL
  const text = buildWhatsAppText(audience, formData)
  const url = buildWhatsAppURL(text)
  
  try {
    window.open(url, '_blank', 'noopener,noreferrer')
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('WhatsApp open error:', err)
    }
    // Fallback: try direct assignment
    try {
      window.location.href = url
    } catch (err2) {
      if (import.meta.env.DEV) {
        console.error('WhatsApp fallback error:', err2)
      }
    }
  }
}
