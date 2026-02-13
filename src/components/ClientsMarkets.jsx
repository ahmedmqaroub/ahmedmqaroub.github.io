import React, { useState } from 'react'
import { t } from '../lib/i18n'
import './ClientsMarkets.css'

const industries = [
  'Healthcare',
  'Pharmacy / Skincare',
  'Travel',
  'Home Services',
  'E-commerce',
  'Local Services',
  'Retail',
  'Education',
  'Healthcare',
  'Pharmacy / Skincare',
  'Travel',
  'Home Services'
]

const countries = ['EGY', 'KSA', 'UAE']

export default function ClientsMarkets() {
  const [activeCountry, setActiveCountry] = useState('EGY')

  return (
    <section id="clients-markets" className="clients-markets section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('clientsMarkets.heading')}</h2>
          <p className="section-subtext">{t('clientsMarkets.note')}</p>
        </div>

        {/* Country Tabs */}
        <div className="country-tabs">
          {countries.map((country) => (
            <button
              key={country}
              className={`country-tab ${activeCountry === country ? 'active' : ''}`}
              onClick={() => setActiveCountry(country)}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="clients-grid">
          {industries.map((industry, index) => (
            <div key={index} className="client-logo-tile glass-card reveal-on-scroll">
              <div className="client-industry">{industry}</div>
            </div>
          ))}
        </div>

        <div className="markets-line reveal-on-scroll">
          <p>{t('clientsMarkets.marketsLine')}</p>
        </div>
      </div>
    </section>
  )
}
