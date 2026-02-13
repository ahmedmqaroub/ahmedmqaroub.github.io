import React, { useState } from 'react'
import { t } from '../lib/i18n'
import { openWhatsApp, getStoredAudience, setStoredAudience } from '../lib/whatsapp'
import { scrollToAnchor } from '../lib/motion'
import './Hero.css'

export default function Hero() {
  const [audience, setAudience] = useState(getStoredAudience())
  const [showAudienceSelector, setShowAudienceSelector] = useState(false)

  const handleAudienceSelect = (selected) => {
    setAudience(selected)
    setStoredAudience(selected)
    setShowAudienceSelector(false)
  }

  const handleWhatsAppClick = () => {
    if (!audience) {
      setShowAudienceSelector(true)
    } else {
      openWhatsApp('hero', {})
    }
  }

  const handleCaseStudiesClick = (e) => {
    e.preventDefault()
    scrollToAnchor('#case-studies')
  }

  return (
    <section id="home" className="hero section-block">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Copy */}
          <div className="hero-content">
            <div className="hero-eyebrow reveal-on-scroll">
              {t('hero.eyebrow')}
            </div>

            <h1 className="hero-headline">
              {t('hero.headline')}
            </h1>

            <p className="hero-subheadline">
              {t('hero.subheadline')}
            </p>

            <div className="hero-ctas reveal-on-scroll">
              <button className="btn btn-primary" onClick={handleWhatsAppClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {t('hero.primaryCta')}
              </button>

              <button className="btn btn-secondary" onClick={handleCaseStudiesClick}>
                {t('hero.secondaryCta')}
              </button>
            </div>

            <div className="hero-meta reveal-on-scroll">
              <p className="hero-mini-about">{t('hero.miniAbout')}</p>
              <p className="hero-trust-note">{t('hero.trustNote')}</p>
            </div>
          </div>

          {/* Right: Dashboard Card */}
          <div className="hero-visual">
            <div className="hero-dashboard glass-card reveal-on-scroll">
              <div className="dashboard-header">
                <div className="dashboard-title">Performance Dashboard</div>
                <div className="dashboard-badge">Live</div>
              </div>

              <div className="dashboard-metrics">
                <div className="metric">
                  <div className="metric-label">ROAS</div>
                  <div className="metric-value">12.4x</div>
                  <div className="metric-change positive">+18%</div>
                </div>
                <div className="metric">
                  <div className="metric-label">CPA</div>
                  <div className="metric-value">$24</div>
                  <div className="metric-change positive">-32%</div>
                </div>
                <div className="metric">
                  <div className="metric-label">Conv. Rate</div>
                  <div className="metric-value">4.2%</div>
                  <div className="metric-change positive">+0.8%</div>
                </div>
              </div>

              <div className="dashboard-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <div className="chart-bar" style={{ height: '72%' }}></div>
                <div className="chart-bar" style={{ height: '95%' }}></div>
                <div className="chart-bar" style={{ height: '78%' }}></div>
                <div className="chart-bar" style={{ height: '88%' }}></div>
              </div>

              <div className="dashboard-platforms">
                <div className="platform-chip">Meta</div>
                <div className="platform-chip">TikTok</div>
                <div className="platform-chip">Google</div>
                <div className="platform-chip">Snapchat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audience Selector Modal */}
      {showAudienceSelector && (
        <div className="audience-modal-overlay" onClick={() => setShowAudienceSelector(false)}>
          <div className="audience-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <h3>{t('audience.label')}</h3>
            <div className="audience-options">
              <button
                className="audience-option"
                onClick={() => handleAudienceSelect('company')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                {t('audience.company')}
              </button>
              <button
                className="audience-option"
                onClick={() => handleAudienceSelect('fulltime')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {t('audience.fulltime')}
              </button>
              <button
                className="audience-option"
                onClick={() => handleAudienceSelect('agency')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {t('audience.agency')}
              </button>
              <button
                className="audience-option"
                onClick={() => handleAudienceSelect('freelance')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {t('audience.freelance')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
