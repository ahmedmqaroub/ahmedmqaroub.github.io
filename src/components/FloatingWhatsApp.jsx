import React from 'react'
import { t } from '../lib/i18n.js'

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const WHATSAPP_NUMBER = '201234567890' // TODO: Replace with actual number
    const message = encodeURIComponent('Hi Ahmed, I\'m from [Company]. Market: [ ]. Budget: [ ]. Goal: [Leads/Sales]. Website/IG: [ ]. When can we talk?')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <button
        className="floating-whatsapp"
        onClick={handleClick}
        aria-label={t('floatingWhatsApp.ariaLabel')}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-.99c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.56 12.45c-.18.5-.95.92-1.32 1.03-.37.1-.65.14-1.04.14-.8 0-1.58-.3-2.18-.88-.8-.78-1.2-1.91-1.2-3.08 0-.89.25-1.76.72-2.5.48-.74 1.12-1.32 1.88-1.69.76-.37 1.6-.56 2.45-.56.4 0 .79.04 1.17.12.38.08.75.2 1.1.36.35.16.68.36.98.6.3.24.57.52.8.84.23.32.42.68.56 1.07.14.39.22.8.22 1.23 0 .43-.08.84-.22 1.23-.14.39-.33.75-.56 1.07-.23.32-.5.6-.8.84-.3.24-.63.44-.98.6z"/>
        </svg>
      </button>

      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .floating-whatsapp:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);
        }

        .floating-whatsapp:focus {
          outline: 2px solid var(--accent-mint);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .floating-whatsapp {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 50px;
            height: 50px;
          }

          .floating-whatsapp svg {
            width: 24px;
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .floating-whatsapp {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }

          .floating-whatsapp svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default FloatingWhatsApp