/**
 * whatsapp.js — WhatsApp CTA logic.
 * Audience templates, prefill text, safe open.
 */

import { trackWhatsAppClick } from './tracking.js';

// TODO: Replace with real WhatsApp number (digits only)
export const WHATSAPP_NUMBER = '201234567890';

// Base prefill — MUST remain EXACT, never translated
const BASE_PREFILL_TEXT = "Hi Ahmed, I'm from [Company]. Market: [ ]. Budget: [ ]. Goal: [Leads/Sales]. Website/IG: [ ]. When can we talk?";

// Audience-specific extra lines (English only, never translated)
const AUDIENCE_LINES = {
  company:   'Industry: [ ].',
  fulltime:  'Role: [ ]. Start date: [ ].',
  agency:    'Monthly volume: [ ]. Collaboration: [white-label/consulting].',
  freelance: 'Project scope: [ ]. Timeline: [ ].',
};

/**
 * Get stored audience or default.
 */
export function getAudience() {
  try {
    const stored = localStorage.getItem('audience');
    if (['company', 'fulltime', 'agency', 'freelance'].includes(stored)) return stored;
  } catch { /* noop */ }
  return 'company';
}

/**
 * Set audience.
 */
export function setAudience(audience) {
  try {
    localStorage.setItem('audience', audience);
  } catch { /* noop */ }
}

/**
 * Build WhatsApp prefill text with optional form data.
 * Replaces placeholders ONLY if value provided, else keeps [ ].
 */
export function buildPrefillText(formData = {}) {
  const audience = getAudience();
  let text = BASE_PREFILL_TEXT;

  // Replace [Company] if provided
  if (formData.company && formData.company.trim()) {
    text = text.replace('[Company]', formData.company.trim());
  }

  // Replace Market [ ] if provided (first occurrence after "Market: ")
  if (formData.market && formData.market.trim()) {
    text = text.replace('Market: [ ]', `Market: ${formData.market.trim()}`);
  }

  // Replace Budget [ ] if provided
  if (formData.budget && formData.budget.trim()) {
    text = text.replace('Budget: [ ]', `Budget: ${formData.budget.trim()}`);
  }

  // Replace Goal [Leads/Sales] if provided
  if (formData.goal && formData.goal.trim()) {
    text = text.replace('Goal: [Leads/Sales]', `Goal: ${formData.goal.trim()}`);
  }

  // Replace Website/IG [ ] if provided
  if (formData.website && formData.website.trim()) {
    text = text.replace('Website/IG: [ ]', `Website/IG: ${formData.website.trim()}`);
  }

  // Append audience-specific line
  const audienceLine = AUDIENCE_LINES[audience] || AUDIENCE_LINES.company;
  text = text + ' ' + audienceLine;

  return text;
}

/**
 * Build WhatsApp URL.
 */
export function buildWhatsAppURL(formData = {}) {
  const text = buildPrefillText(formData);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp safely.
 * 1) Fire tracking (guarded)
 * 2) Open WhatsApp (never blocked by tracking failure)
 * @param {string} position - "top"|"hero"|"floating"|"contact"
 * @param {object} formData - Optional form field values
 */
export function openWhatsApp(position = 'floating', formData = {}) {
  const audience = getAudience();

  // 1) Track safely (never blocks)
  trackWhatsAppClick(position, audience);

  // 2) Open WhatsApp (always executes)
  const url = buildWhatsAppURL(formData);
  window.open(url, '_blank', 'noopener,noreferrer');
}
