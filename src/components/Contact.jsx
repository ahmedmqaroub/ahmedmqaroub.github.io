import React, { useState } from 'react'
import { t } from '../lib/i18n'
import { openWhatsApp } from '../lib/whatsapp'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    market: '',
    budget: '',
    goal: '',
    website: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    openWhatsApp('contact', formData)
  }

  return (
    <section id="contact" className="contact section-block">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header reveal-on-scroll">
            <h2>{t('contact.heading')}</h2>
            <p className="contact-subtext">{t('contact.subtext')}</p>
          </div>

          <form className="contact-form glass-card reveal-on-scroll" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="company">{t('contact.fieldCompany')}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.fieldCompany')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="market">{t('contact.fieldMarket')}</label>
                <input
                  type="text"
                  id="market"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  placeholder={t('contact.fieldMarket')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="budget">{t('contact.fieldBudget')}</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder={t('contact.fieldBudget')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="goal">{t('contact.fieldGoal')}</label>
                <input
                  type="text"
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder={t('contact.fieldGoal')}
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="website">{t('contact.fieldWebsite')}</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder={t('contact.fieldWebsite')}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              {t('contact.ctaButton')}
            </button>

            <p className="contact-note">{t('contact.note')}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
