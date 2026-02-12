import React, { useState, useEffect } from 'react'
import { t } from '../lib/i18n.js'
import { openWhatsAppSimple } from '../lib/whatsapp.js'
import { trackCtaClick } from '../lib/tracking.js'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleMouseMove = (e) => {
      const rect = document.querySelector('.dashboard-card')?.getBoundingClientRect()
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x: (x - 0.5) * 10, y: (y - 0.5) * 10 })
      }
    }

    const dashboardCard = document.querySelector('.dashboard-card')
    if (dashboardCard && window.matchMedia('(hover: hover)').matches) {
      dashboardCard.addEventListener('mousemove', handleMouseMove)
      return () => dashboardCard.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleWhatsAppClick = () => {
    trackCtaClick('whatsapp_hero', 'hero')
    openWhatsAppSimple('hero')
  }

  const handleCaseStudiesClick = () => {
    trackCtaClick('case_studies', 'hero')
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow">
              {t('hero.eyebrow')}
            </div>
            
            <h1 className="hero-headline">
              {t('hero.headline')}
            </h1>
            
            <p className="hero-subheadline">
              {t('hero.subheadline')}
            </p>
            
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={handleWhatsAppClick}
              >
                {t('hero.whatsapp')}
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCaseStudiesClick}
              >
                {t('hero.caseStudies')}
              </button>
            </div>
            
            <div className="hero-meta">
              <div className="hero-mini-about">
                {t('hero.miniAbout')}
              </div>
              <div className="hero-trust-note">
                {t('hero.trustNote')}
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div 
              className="dashboard-card"
              style={{
                transform: isClient ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)` : 'none'
              }}
            >
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Performance Dashboard</div>
              </div>
              
              <div className="card-content">
                <div className="metric-row">
                  <div className="metric">
                    <div className="metric-label">ROAS</div>
                    <div className="metric-value">4.2x</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">CTR</div>
                    <div className="metric-value">2.8%</div>
                  </div>
                </div>
                
                <div className="metric-row">
                  <div className="metric">
                    <div className="metric-label">CPC</div>
                    <div className="metric-value">$0.85</div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">Spend</div>
                    <div className="metric-value">$12.5K</div>
                  </div>
                </div>
                
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '45%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 6rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-eyebrow {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-mint);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-headline {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--accent-mint) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subheadline {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--muted);
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .hero-mini-about {
          font-size: 0.9rem;
          color: var(--muted);
          font-style: italic;
        }

        .hero-trust-note {
          font-size: 0.85rem;
          color: var(--accent-mint);
          font-weight: 500;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dashboard-card {
          background: var(--card);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: var(--r-card);
          padding: 2rem;
          width: 100%;
          max-width: 400px;
          box-shadow: var(--shadow-card);
          transition: transform 0.1s ease;
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .card-dots {
          display: flex;
          gap: 4px;
        }

        .card-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-hot);
        }

        .card-dots span:nth-child(2) {
          background: var(--accent-mint);
        }

        .card-dots span:nth-child(3) {
          background: var(--glow-cyan);
        }

        .card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metric-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .metric {
          text-align: center;
        }

        .metric-label {
          font-size: 0.8rem;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }

        .metric-value {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
        }

        .chart-placeholder {
          display: flex;
          align-items: end;
          justify-content: space-between;
          height: 80px;
          gap: 4px;
        }

        .chart-bar {
          flex: 1;
          background: linear-gradient(to top, var(--accent-mint), var(--glow-cyan));
          border-radius: 2px;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 5rem 0 3rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-actions {
            justify-content: center;
          }

          .dashboard-card {
            max-width: 300px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 4rem 0 2rem;
          }

          .hero-headline {
            font-size: 1.75rem;
          }

          .hero-subheadline {
            font-size: 1rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .dashboard-card {
            padding: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dashboard-card {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero