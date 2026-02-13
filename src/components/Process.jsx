import React from 'react'
import { t } from '../lib/i18n'
import './Process.css'

const processSteps = [
  {
    title: 'Audit',
    title_key: 'process.auditTitle',
    micro_key: 'process.auditMicro',
    icon: 'audit'
  },
  {
    title: 'Test',
    title_key: 'process.testTitle',
    micro_key: 'process.testMicro',
    icon: 'test'
  },
  {
    title: 'Scale',
    title_key: 'process.scaleTitle',
    micro_key: 'process.scaleMicro',
    icon: 'scale'
  },
  {
    title: 'Report',
    title_key: 'process.reportTitle',
    micro_key: 'process.reportMicro',
    icon: 'report'
  }
]

export default function Process() {
  return (
    <section id="process" className="process section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('process.heading')}</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step glass-card reveal-on-scroll">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                {getStepIcon(step.icon)}
              </div>
              <h3 className="step-title">{t(step.title_key)}</h3>
              <p className="step-micro">{t(step.micro_key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getStepIcon(type) {
  switch (type) {
    case 'audit':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      )
    case 'test':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    case 'scale':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    case 'report':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    default:
      return null
  }
}
