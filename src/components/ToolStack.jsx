import React from 'react'
import { t } from '../lib/i18n'
import './ToolStack.css'

const tools = [
  'Meta Ads Manager',
  'TikTok Ads Manager',
  'Google Ads',
  'GA4',
  'Google Tag Manager',
  'Meta CAPI',
  'Looker Studio'
]

export default function ToolStack() {
  return (
    <section id="tool-stack" className="tool-stack section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('toolStack.heading')}</h2>
          <p className="section-subtext">{t('toolStack.subtext')}</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-chip reveal-on-scroll">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
