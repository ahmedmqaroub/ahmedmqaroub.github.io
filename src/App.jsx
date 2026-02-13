import React, { useEffect, useLayoutEffect, useState } from 'react'
import { initI18n, useTranslation, getCurrentLang, setLang } from './lib/i18n'
import { initMotion } from './lib/motion'
import SkipLink from './components/SkipLink'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import Wins from './components/Wins'
import Services from './components/Services'
import ToolStack from './components/ToolStack'
import CaseStudies from './components/CaseStudies'
import ClientsMarkets from './components/ClientsMarkets'
import About from './components/About'
import Process from './components/Process'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [mounted, setMounted] = useState(false)
  const { lang, setLanguage } = useTranslation()

  // Initialize i18n
  useEffect(() => {
    initI18n()
    setMounted(true)
  }, [])

  // Set HTML attributes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }, [lang])

  // Initialize motion after first paint
  useLayoutEffect(() => {
    if (!mounted) return

    let cleanup = null
    
    requestAnimationFrame(() => {
      try {
        cleanup = initMotion()
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error('Motion init failed:', err)
        }
      }
    })

    return () => {
      if (cleanup && typeof cleanup === 'function') {
        try {
          cleanup()
        } catch (err) {
          if (import.meta.env.DEV) {
            console.error('Motion cleanup failed:', err)
          }
        }
      }
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#05060A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#E8ECFF'
      }}>
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <>
      <SkipLink />
      
      {/* Ambient Background Layers */}
      <div className="ambient-layers" aria-hidden="true">
        <div className="grain-overlay"></div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="vignette"></div>
      </div>

      <Navbar lang={lang} onLangChange={setLanguage} />
      <MobileNav lang={lang} onLangChange={setLanguage} />

      <main id="main-content">
        <Hero />
        <Wins />
        <Services />
        <ToolStack />
        <CaseStudies />
        <ClientsMarkets />
        <About />
        <Process />
        <Contact />
      </main>

      <FloatingWhatsApp />

      {/* DEV Indicator */}
      {(import.meta.env.DEV || window.location.search.includes('debug=1')) && (
        <div style={{
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          background: 'rgba(143, 231, 230, 0.2)',
          color: '#8FE7E6',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          fontFamily: 'monospace',
          zIndex: 999999,
          pointerEvents: 'none'
        }}>
          Rendered ✅
        </div>
      )}
    </>
  )
}

export default App
