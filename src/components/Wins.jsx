import React from 'react'
import { t } from '../lib/i18n.js'

const Wins = () => {
  const wins = t('wins.wins')
  
  return (
    <section id="wins" className="wins-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('wins.heading')}</h2>
          <p className="section-subtitle">{t('wins.subtext')}</p>
        </div>
        
        <div className="wins-container">
          {wins.map((win, index) => (
            <div key={index} className="win-card">
              <div className="win-content">
                <div className="win-number">{index + 1}</div>
                <div className="win-text">{win}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="wins-note">
          <p>{t('wins.note')}</p>
        </div>
      </div>

      <style jsx>{`
        .wins-section {
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

        .wins-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .win-card {
          background: var(--card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: var(--r-card);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .win-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-hot), var(--accent-mint));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .win-card:hover::before {
          opacity: 1;
        }

        .win-content {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .win-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--accent-hot), var(--accent-mint));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .win-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text);
          font-weight: 500;
        }

        .wins-note {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--r-card);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wins-note p {
          color: var(--muted);
          font-size: 0.9rem;
          font-style: italic;
          margin: 0;
        }

        @media (max-width: 768px) {
          .wins-section {
            padding: 3rem 0;
          }

          .win-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .win-number {
            margin-bottom: 1rem;
          }

          .win-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .win-card {
            padding: 1.5rem;
          }

          .win-number {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Wins