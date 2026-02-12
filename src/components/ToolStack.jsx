import React from 'react'
import { t } from '../lib/i18n.js'

const ToolStack = () => {
  const tools = t('toolStack.tools')
  
  return (
    <section id="tool-stack" className="tool-stack-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('toolStack.heading')}</h2>
          <p className="section-subtitle">{t('toolStack.subtext')}</p>
        </div>
        
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-badge">
              <span className="tool-name">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tool-stack-section {
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

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .tool-badge {
          background: var(--card);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .tool-badge::before {
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

        .tool-badge:hover::before {
          opacity: 1;
        }

        .tool-badge:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .tool-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text);
          display: block;
        }

        @media (max-width: 768px) {
          .tool-stack-section {
            padding: 3rem 0;
          }

          .tools-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.75rem;
          }

          .tool-badge {
            padding: 0.75rem 1rem;
          }

          .tool-name {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .tools-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }

          .tool-badge {
            padding: 0.6rem 0.8rem;
          }

          .tool-name {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ToolStack