import React from 'react'
import { t } from '../lib/i18n'
import './About.css'

const aboutPoints = [
  '+2 years performance marketing experience',
  'Previously Graphic Designer + Copywriter',
  'Last role: Team Leader at a marketing company (Sheikh Zayed)',
  'Responsibilities: account management, campaign setup, team guidance (media/design), performance improvements',
  'Worked closely with designers and content creators to improve creatives and performance'
]

export default function About() {
  return (
    <section id="about" className="about section-block">
      <div className="container">
        <div className="about-content">
          <div className="about-header reveal-on-scroll">
            <h2>{t('about.heading')}</h2>
          </div>

          <div className="about-grid">
            <div className="about-image reveal-on-scroll">
              <div className="about-photo glass-card">
                <div className="photo-placeholder">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p>Ahmed Musaad</p>
                </div>
              </div>
            </div>

            <div className="about-text">
              <ul className="about-list">
                {aboutPoints.map((point, index) => (
                  <li key={index} className="about-list-item reveal-on-scroll">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
