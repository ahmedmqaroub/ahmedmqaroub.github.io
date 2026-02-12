import { trackWhatsAppClick } from './tracking.js'

// TODO: Replace with actual WhatsApp number (digits only, no + or spaces)
export const WHATSAPP_NUMBER = '201234567890'

export const BASE_PREFILL_TEXT = `Hi Ahmed, I'm from [Company]. Market: [ ]. Budget: [ ]. Goal: [Leads/Sales]. Website/IG: [ ]. When can we talk?`

export const AUDIENCE_TEMPLATES = {
  company: {
    label: 'Company (Client)',
    extra: 'Industry: [ ].'
  },
  fulltime: {
    label: 'Full-time Hiring',
    extra: 'Role: [ ]. Start date: [ ].'
  },
  agency: {
    label: 'Agency Collaboration',
    extra: 'Monthly volume: [ ]. Collaboration: [white-label/consulting].'
  },
  freelance: {
    label: 'Freelance Project',
    extra: 'Project scope: [ ]. Timeline: [ ].'
  }
}

export const getAudience = () => {
  if (typeof window === 'undefined') return 'company'
  return localStorage.getItem('audience') || 'company'
}

export const setAudience = (audience) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('audience', audience)
  window.dispatchEvent(new CustomEvent('audiencechange', { detail: { audience } }))
}

export const buildWhatsAppMessage = (formData = {}) => {
  const audience = getAudience()
  const audienceTemplate = AUDIENCE_TEMPLATES[audience]
  
  let message = BASE_PREFILL_TEXT
  
  // Replace placeholders with form data
  if (formData.company) {
    message = message.replace('[Company]', formData.company)
  }
  
  if (formData.market) {
    message = message.replace('[ ]', `[${formData.market}]`)
  }
  
  if (formData.budget) {
    message = message.replace('[ ]', `[${formData.budget}]`)
  }
  
  if (formData.goal) {
    message = message.replace('[Leads/Sales]', formData.goal)
  }
  
  if (formData.website) {
    message = message.replace('[ ]', `[${formData.website}]`)
  }
  
  // Add audience-specific template
  if (audienceTemplate) {
    message += `\n\n${audienceTemplate.extra}`
  }
  
  return message
}

export const openWhatsApp = (position, formData = {}) => {
  try {
    // Track the WhatsApp click first
    trackWhatsAppClick(position, getAudience())
    
    // Build the message
    const message = buildWhatsAppMessage(formData)
    const encodedMessage = encodeURIComponent(message)
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    if (import.meta.env.DEV) {
      console.log(`📱 WhatsApp opened from ${position}:`, message)
    }
  } catch (error) {
    console.error('WhatsApp open error:', error)
    
    // Fallback: open WhatsApp with just the base message
    const fallbackMessage = encodeURIComponent(BASE_PREFILL_TEXT)
    const fallbackUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${fallbackMessage}`
    window.open(fallbackUrl, '_blank', 'noopener,noreferrer')
  }
}

export const openWhatsAppSimple = (position) => {
  openWhatsApp(position, {})
}

export const getAudienceLabel = (audience, lang = 'en') => {
  const template = AUDIENCE_TEMPLATES[audience]
  return template ? template.label : AUDIENCE_TEMPLATES.company.label
}

export default {
  WHATSAPP_NUMBER,
  BASE_PREFILL_TEXT,
  AUDIENCE_TEMPLATES,
  getAudience,
  setAudience,
  buildWhatsAppMessage,
  openWhatsApp,
  openWhatsAppSimple,
  getAudienceLabel
}