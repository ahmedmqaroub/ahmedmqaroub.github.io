import React from 'react'
import { t } from '../lib/i18n.js'

const Services = () => {
  const primaryServices = t('services.primary')
  const supportingServices = t('services.supporting')
  
  const primaryServicesList = [
    { key: 'meta', ...primaryServices.meta },
    { key: 'tiktok', ...primaryServices.tiktok },
    { key: 'google', ...primaryServices.google },
    { key: 'snapchat', ...primaryServices.snapchat },
    { key: 'tracking', ...primaryServices.tracking }
  ]
  
  const supportingServicesList = [
    { key: 'creative', ...supportingServices.creative },
    { key: 'reporting', ...supportingServices.reporting }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('services.heading')}</h2>
          <p className="section-subtitle">{t('services.subtext')}</p>
        </div>
        
        <div className="services-grid">
          <div className="services-primary">
            <h3 className="services-category-title">Primary Services</h3>
            <div className="services-cards">
              {primaryServicesList.map((service) => (
                <div key={service.key} className="service-card primary">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="services-supporting">
            <h3 className="services-category-title">Supporting Capabilities</h3>
            <div className="services-cards">
              {supportingServicesList.map((service) => (
                <div key={service.key} className="service-card supporting">
                  <div className="service-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 5rem 0;
          position: relative;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .services-category-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--text);
        }

        .services-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          background: var(--card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: var(--r-card);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card.primary {
          border-top: 3px solid var(--accent-hot);
        }

        .service-card.supporting {
          border-top: 3px solid var(--accent-mint);
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--glow-cyan), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--accent-hot), var(--accent-mint));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }

        .service-card.supporting .service-icon {
          background: linear-gradient(135deg, var(--accent-mint), var(--glow-cyan));
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 0;
          }

          .services-cards {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            gap: 2rem;
          }

          .services-category-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services