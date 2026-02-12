import React, { useState, useEffect } from 'react'
import { t, getCurrentLang, setLang } from '../lib/i18n.js'
import { openWhatsAppSimple } from '../lib/whatsapp.js'
import { trackCtaClick } from '../lib/tracking.js'

const Navbar = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleLangChange = (e) => {
      setCurrentLang(e.detail.lang)
    }

    window.addEventListener('langchange', handleLangChange)
    return () => window.removeEventListener('langchange', handleLangChange)
  }, [])

  const handleLangToggle = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en'
    setLang(newLang)
    setCurrentLang(newLang)
  }

  const handleWhatsAppClick = () => {
    trackCtaClick('whatsapp_nav', 'navbar')
    openWhatsAppSimple('top')
  }

  const handleNavClick = (id) => {
    onSectionClick(id)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => handleNavClick('home')}>
          <span className="brand-text">Ahmed Musaad</span>
          <span className="brand-badge">Growth Marketer</span>
        </div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={handleLangToggle}
            aria-label="Toggle language"
          >
            {currentLang === 'en' ? 'AR' : 'EN'}
          </button>

          <button
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
            aria-label="Contact via WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-.99c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.56 12.45c-.18.5-.95.92-1.32 1.03-.37.1-.65.14-1.04.14-.8 0-1.58-.3-2.18-.88-.8-.78-1.2-1.91-1.2-3.08 0-.89.25-1.76.72-2.5.48-.74 1.12-1.32 1.88-1.69.76-.37 1.6-.56 2.45-.56.4 0 .79.04 1.17.12.38.08.75.2 1.1.36.35.16.68.36.98.6.3.24.57.52.8.84.23.32.42.68.56 1.07.14.39.22.8.22 1.23 0 .43-.08.84-.22 1.23-.14.39-.33.75-.56 1.07-.23.32-.5.6-.8.84-.3.24-.63.44-.98.6z"/>
            </svg>
            <span>{t('nav.whatsapp')}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: var(--card);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .nav-brand:hover {
          opacity: 0.8;
        }

        .brand-text {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
        }

        .brand-badge {
          font-size: 0.75rem;
          color: var(--muted);
          font-weight: 400;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: var(--text);
        }

        .nav-link.active {
          color: var(--accent-mint);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-mint);
          border-radius: 1px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-toggle {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .lang-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #25D366;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-btn svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .nav-menu {
            display: none;
          }

          .nav-actions {
            gap: 0.75rem;
          }

          .whatsapp-btn span {
            display: none;
          }

          .brand-text {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-actions {
            gap: 0.5rem;
          }

          .lang-toggle {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }

          .whatsapp-btn {
            padding: 0.6rem 1rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar