import React from 'react'
import { t } from '../lib/i18n'
import './Services.css'

const servicesData = [
  {
    name_key: 'services.metaAds',
    micro_key: 'services.metaAdsMicro',
    icon: 'meta'
  },
  {
    name_key: 'services.tiktokAds',
    micro_key: 'services.tiktokAdsMicro',
    icon: 'tiktok'
  },
  {
    name_key: 'services.googleAds',
    micro_key: 'services.googleAdsMicro',
    icon: 'google'
  },
  {
    name_key: 'services.snapchatAds',
    micro_key: 'services.snapchatAdsMicro',
    icon: 'snapchat'
  },
  {
    name_key: 'services.tracking',
    micro_key: 'services.trackingMicro',
    icon: 'tracking'
  },
  {
    name_key: 'services.creativeDirection',
    micro_key: 'services.creativeDirectionMicro',
    icon: 'creative'
  },
  {
    name_key: 'services.reporting',
    micro_key: 'services.reportingMicro',
    icon: 'reporting'
  }
]

export default function Services() {
  return (
    <section id="services" className="services section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('services.heading')}</h2>
          <p className="section-subtext">{t('services.subtext')}</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card glass-card reveal-on-scroll">
              <div className="service-icon">
                {getServiceIcon(service.icon)}
              </div>
              <h3 className="service-name">{t(service.name_key)}</h3>
              <p className="service-micro">{t(service.micro_key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getServiceIcon(type) {
  switch (type) {
    case 'meta':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11V9a3 3 0 0 1 3-3v-2m0 0a5 5 0 0 0 5 5h0m-5-5V2M12 2v2m3 5a3 3 0 1 1-6 0m-6 7v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" />
          <circle cx="9" cy="17" r="2" />
        </svg>
      )
    case 'google':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      )
    case 'snapchat':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    case 'tracking':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    case 'creative':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    case 'reporting':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    default:
      return null
  }
}
