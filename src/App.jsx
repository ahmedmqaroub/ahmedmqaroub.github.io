import React, { useState, useEffect } from 'react'
import { t, getCurrentLang, setLang } from './lib/i18n.js'
import { initMotion, cleanupMotion } from './lib/motion.js'
import SkipLink from './components/SkipLink.jsx'
import Navbar from './components/Navbar.jsx'
import MobileNav from './components/MobileNav.jsx'
import Hero from './components/Hero.jsx'
import Wins from './components/Wins.jsx'
import Services from './components/Services.jsx'
import ToolStack from './components/ToolStack.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentLang, setCurrentLang] = useState(getCurrentLang())
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Set initial language
    setLang(currentLang)
    
    // Initialize motion system
    requestAnimationFrame(() => {
      initMotion()
    })
    
    // Debug indicator
    if (import.meta.env.DEV || window.location.search.includes('debug=1')) {
      const debugEl = document.createElement('div')
      debugEl.className = 'debug-indicator'
      debugEl.textContent = 'Rendered ✅'
      document.body.appendChild(debugEl)
      
      setTimeout(() => {
        debugEl.remove()
      }, 3000)
    }
    
    return () => {
      cleanupMotion()
    }
  }, [])

  useEffect(() => {
    const handleLangChange = (e) => {
      setCurrentLang(e.detail.lang)
    }

    window.addEventListener('langchange', handleLangChange)
    return () => window.removeEventListener('langchange', handleLangChange)
  }, [])

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (sectionId) => {
    handleSectionClick(sectionId)
  }

  return (
    <div className="app" data-pin-type="transform">
      <SkipLink />
      <Navbar activeSection={activeSection} onSectionClick={handleNavClick} />
      <MobileNav activeSection={activeSection} onSectionClick={handleNavClick} />
      
      <main id="main-content">
        <Hero />
        <Wins />
        <Services />
        <ToolStack />
        {/* Other sections will be added here */}
      </main>
      
      <FloatingWhatsApp />
      
      {/* Ambient background effects */}
      <div className="ambient-bg">
        <div className="ambient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      {/* Grain texture overlay */}
      <div className="grain"></div>
      
      {/* Vignette effect */}
      <div className="vignette"></div>
    </div>
  )
}

export default App