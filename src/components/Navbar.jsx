import React, { useEffect, useState } from 'react'
import { t } from '../lib/i18n'
import { scrollToAnchor } from '../lib/motion'
import { openWhatsApp } from '../lib/whatsapp'
import './Navbar.css'

export default function Navbar({ lang, onLangChange }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = ['home', 'wins', 'services', 'tool-stack', 'case-studies', 'about', 'process', 'contact']
      const scrollPos = window.scrollY + 150
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToAnchor(`#${id}`)
  }

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    openWhatsApp('top-nav', {})
  }

  const toggleLang = () => {
    onLangChange(lang === 'en' ? 'ar' : 'en')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="logo-text">Ahmed Musaad</span>
          </a>
        </div>

        <ul className="navbar-links">
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              {t('nav.home')}
            </a>
          </li>
          <li>
            <a
              href="#wins"
              onClick={(e) => handleNavClick(e, 'wins')}
              className={activeSection === 'wins' ? 'active' : ''}
            >
              {t('nav.wins')}
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={activeSection === 'services' ? 'active' : ''}
            >
              {t('nav.services')}
            </a>
          </li>
          <li>
            <a
              href="#tool-stack"
              onClick={(e) => handleNavClick(e, 'tool-stack')}
              className={activeSection === 'tool-stack' ? 'active' : ''}
            >
              {t('nav.toolStack')}
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, 'case-studies')}
              className={activeSection === 'case-studies' ? 'active' : ''}
            >
              {t('nav.caseStudies')}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className={activeSection === 'process' ? 'active' : ''}
            >
              {t('nav.process')}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              {t('nav.contact')}
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button
            className="btn btn-whatsapp"
            onClick={handleWhatsAppClick}
            aria-label={t('nav.whatsapp')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>{t('nav.whatsapp')}</span>
          </button>

          <button
            className="btn-lang"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {t('nav.langSwitch')}
          </button>
        </div>
      </div>
    </nav>
  )
}
