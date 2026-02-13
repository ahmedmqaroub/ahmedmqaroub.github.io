import React, { useState } from 'react'
import { t } from '../lib/i18n'
import { scrollToAnchor } from '../lib/motion'
import { openWhatsApp } from '../lib/whatsapp'
import './MobileNav.css'

export default function MobileNav({ lang, onLangChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      scrollToAnchor(`#${id}`)
    }, 100)
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    setIsOpen(false)
    openWhatsApp('mobile-nav', {})
  }

  const toggleLang = () => {
    onLangChange(lang === 'en' ? 'ar' : 'en')
  }

  return (
    <>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <div className="mobile-nav-container">
          <button
            className="mobile-nav-item"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label={t('nav.home')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{t('nav.home')}</span>
          </button>

          <button
            className="mobile-nav-item"
            onClick={(e) => handleNavClick(e, 'case-studies')}
            aria-label={t('nav.caseStudies')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span>{t('nav.caseStudies')}</span>
          </button>

          <button
            className="mobile-nav-item mobile-nav-whatsapp"
            onClick={handleWhatsAppClick}
            aria-label={t('nav.whatsapp')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>

          <button
            className="mobile-nav-item"
            onClick={(e) => handleNavClick(e, 'services')}
            aria-label={t('nav.services')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>{t('nav.services')}</span>
          </button>

          <button
            className="mobile-nav-item"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span>Menu</span>
          </button>
        </div>
      </nav>

      {/* Full Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h2>Menu</h2>
              <button
                className="mobile-menu-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="mobile-menu-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t('nav.home')}</a></li>
              <li><a href="#wins" onClick={(e) => handleNavClick(e, 'wins')}>{t('nav.wins')}</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>{t('nav.services')}</a></li>
              <li><a href="#tool-stack" onClick={(e) => handleNavClick(e, 'tool-stack')}>{t('nav.toolStack')}</a></li>
              <li><a href="#case-studies" onClick={(e) => handleNavClick(e, 'case-studies')}>{t('nav.caseStudies')}</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>{t('nav.about')}</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, 'process')}>{t('nav.process')}</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('nav.contact')}</a></li>
            </ul>

            <div className="mobile-menu-footer">
              <button className="btn-lang-mobile" onClick={toggleLang}>
                {lang === 'en' ? 'العربية' : 'English'} ({t('nav.langSwitch')})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
