import React from 'react'
import { t } from '../lib/i18n'
import ProofLibrary from './ProofLibrary'
import './CaseStudies.css'

const caseStudiesData = [
  {
    industry: 'Medical — UAE',
    goal: 'Sales',
    platforms: 'Meta',
    tracking: 'Pixel + CAPI',
    problem: 'High spend, uneven quality across services.',
    whatWeDid: [
      'Segmented offers by service line and intent.',
      'Creative testing loop (hooks → proof → CTA).',
      'Budget reallocation to highest-margin services.'
    ],
    outcome: 'More stable sales volume and clearer performance by service.'
  },
  {
    industry: 'Pharmacy / Skincare — Egypt',
    goal: 'Sales',
    platforms: 'Meta + Google',
    tracking: 'Pixel + GTM',
    problem: 'Cart drop-offs and unclear attribution.',
    whatWeDid: [
      'Checkout and event QA to fix measurement gaps.',
      'Product angle matrix (benefit-led vs ingredient-led).',
      'Search capture for high-intent queries.'
    ],
    outcome: 'Improved conversion quality and more consistent purchase flow.'
  },
  {
    industry: 'Travel — KSA',
    goal: 'Leads',
    platforms: 'Meta',
    tracking: 'Pixel',
    problem: 'Leads coming in, but low qualification rate.',
    whatWeDid: [
      'Lead form questions aligned to trip readiness.',
      'Creative tailored by destination + seasonality.',
      'Retargeting split by engagement depth.'
    ],
    outcome: 'Cleaner lead quality and smoother handoff to sales.'
  },
  {
    industry: 'Home Services — Egypt',
    goal: 'Leads',
    platforms: 'Meta',
    tracking: 'Pixel',
    problem: 'New brand with low trust signals.',
    whatWeDid: [
      'Trust-first creatives (before/after, process, guarantees).',
      'Landing page sections: FAQs + service coverage.',
      'Geo targeting + schedule-based budget control.'
    ],
    outcome: 'Consistent lead flow and stronger conversion confidence.'
  },
  {
    industry: 'E-commerce (Accessories) — Egypt',
    goal: 'Sales',
    platforms: 'Meta + TikTok',
    tracking: 'Pixel + GTM',
    problem: 'Creative fatigue and rising CPA.',
    whatWeDid: [
      'Weekly creative refresh system (3 angles, 2 formats).',
      'Offer positioning by audience temperature.',
      'Scaled winners, paused losers fast.'
    ],
    outcome: 'Lower volatility and better cost control during scaling.'
  },
  {
    industry: 'Local Services — UAE',
    goal: 'Leads',
    platforms: 'Google + Meta',
    tracking: 'GTM + GA4',
    problem: 'Leads split across channels with no unified view.',
    whatWeDid: [
      'Unified tracking + channel naming standards.',
      'High-intent search campaigns + smart retargeting.',
      'Lead quality tagging for optimization feedback.'
    ],
    outcome: 'Improved conversion quality and clearer cross-channel reporting.'
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('caseStudies.heading')}</h2>
          <p className="section-subtext">{t('caseStudies.gridNote')}</p>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="case-studies-scroll-wrapper">
          <div className="case-studies-scroll-content">
            {caseStudiesData.map((study, index) => (
              <div key={index} className="case-study-card glass-card">
                <div className="case-study-header">
                  <div className="case-study-industry">{study.industry}</div>
                  <div className="case-study-badges">
                    <span className="badge goal">{study.goal}</span>
                  </div>
                </div>

                <div className="case-study-meta">
                  <div className="meta-item">
                    <div className="meta-label">{t('caseStudies.platforms')}</div>
                    <div className="meta-value">{study.platforms}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">{t('caseStudies.tracking')}</div>
                    <div className="meta-value">{study.tracking}</div>
                  </div>
                </div>

                <div className="case-study-section">
                  <h4>{t('caseStudies.problem')}</h4>
                  <p>{study.problem}</p>
                </div>

                <div className="case-study-section">
                  <h4>{t('caseStudies.whatWeDid')}</h4>
                  <ul>
                    {study.whatWeDid.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-section outcome">
                  <h4>{t('caseStudies.outcome')}</h4>
                  <p>{study.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar for Desktop Scroll */}
          <div className="scroll-progress">
            <div className="scroll-progress-bar"></div>
          </div>
        </div>
      </div>

      {/* Proof Library */}
      <ProofLibrary />
    </section>
  )
}
