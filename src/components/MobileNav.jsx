import React, { useState } from 'react'
import { t, getCurrentLang, setLang } from '../lib/i18n.js'
import { openWhatsAppSimple } from '../lib/whatsapp.js'
import { trackCtaClick, trackMobileNavToggle } from '../lib/tracking.js'

const MobileNav = ({ activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(getCurrentLang())

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'wins', label: t('nav.wins') },
    { id: 'services', label: t('nav.services') },
    { id: 'tool-stack', label: t('nav.toolStack') },
    { id: 'case-studies', label: t('nav.caseStudies') },
    { id: 'about', label: t('nav.about') },
    { id: 'process', label: t('nav.process') },
    { id: 'contact', label: t('nav.contact') }
  ]

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    trackMobileNavToggle(newState)
    
    // Lock body scroll when menu is open
    if (newState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
    trackMobileNavToggle(false)
  }

  const handleNavClick = (id) => {
    onSectionClick(id)
    closeMenu()
  }

  const handleLangToggle = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en'
    setLang(newLang)
    setCurrentLang(newLang)
  }

  const handleWhatsAppClick = () => {
    trackCtaClick('whatsapp_mobile', 'mobile_nav')
    openWhatsAppSimple('top')
    closeMenu()
  }

  return (
    <>
      <div className="mobile-nav-trigger">
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-brand">
            <span className="brand-name">Ahmed Musaad</span>
            <span className="brand-title">Growth Marketer</span>
          </div>
          <button
            className="close-btn"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-nav-content">
          <nav className="mobile-nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-actions">
              <button
                className="mobile-lang-toggle"
                onClick={handleLangToggle}
              >
                {currentLang === 'en' ? 'AR' : 'EN'}
              </button>

              <button
                className="mobile-whatsapp-btn"
                onClick={handleWhatsAppClick}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-.99c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.56 12.45c-.18.5-.95.92-1.32 1.03-.37.1-.65.14-1.04.14-.8 0-1.58-.3-2.18-.88-.8-.78-1.2-1.91-1.2-3.08 0-.89.25-1.76.72-2.5.48-.74 1.12-1.32 1.88-1.69.76-.37 1.6-.56 2.45-.56.4 0 .79.04 1.17.12.38.08.75.2 1.1.36.35.16.68.36.98.6.3.24.57.52.8.84.23.32.42.68.56 1.07.14.39.22.8.22 1.23 0 .43-.08.84-.22 1.23-.14.39-.33.75-.56 1.07-.23.32-.5.6-.8.84-.3.24-.63.44-.98.6z"/>
                </svg>
                {t('nav.whatsapp')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-nav-trigger {
          display: none;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: var(--text);
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .mobile-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
        }

        .brand-title {
          font-size: 0.7rem;
          color: var(--muted);
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
        }

        .mobile-nav-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          padding: 1rem 0;
          cursor: pointer;
          transition: color 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover {
          color: var(--text);
        }

        .mobile-nav-link.active {
          color: var(--accent-mint);
        }

        .mobile-nav-footer {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
        }

        .mobile-actions {
          display: flex;
          gap: 1rem;
        }

        .mobile-lang-toggle {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1;
        }

        .mobile-lang-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .mobile-whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #25D366;
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 2;
        }

        .mobile-whatsapp-btn:hover {
          background: #128C7E;
        }

        @media (max-width: 768px) {
          .mobile-nav-trigger {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .mobile-nav-header {
            padding: 0.75rem 1rem;
          }

          .mobile-nav-content {
            padding: 1.5rem 1rem;
          }

          .mobile-nav-link {
            font-size: 1rem;
            padding: 0.75rem 0;
          }

          .mobile-actions {
            flex-direction: column;
            gap: 0.75rem;
          }

          .mobile-lang-toggle,
          .mobile-whatsapp-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default MobileNav