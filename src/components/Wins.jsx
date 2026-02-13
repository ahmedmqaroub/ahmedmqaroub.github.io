import React from 'react'
import { t } from '../lib/i18n'
import './Wins.css'

const winsData = [
  {
    number: '860K',
    unit: 'AED',
    label: 'sales with 30K AED ad spend',
    industry: 'Medical Center (UAE)'
  },
  {
    number: '600K+',
    unit: '',
    label: 'profit with ~20K ad spend',
    industry: 'Pharmacy / Skincare (Egypt)'
  },
  {
    number: '18',
    unit: 'months',
    label: 'supported expansion to multiple branches',
    industry: 'Travel Business (KSA)'
  },
  {
    number: 'Zero',
    unit: '→',
    label: 'strong contracts',
    industry: 'Home Services (Pest / Landscape / Housekeeping)'
  }
]

const testimonials = [
  {
    rating: 5,
    quote_en: 'Clear reporting and fast iterations. We always knew what to do next.',
    quote_ar: 'تقارير واضحة وتجارب سريعة — كنا دايمًا عارفين الخطوة الجاية.',
    industry: 'Medical — UAE'
  },
  {
    rating: 5,
    quote_en: 'Tracking became reliable, and decisions stopped being guesses.',
    quote_ar: 'القياس بقى مضبوط والقرارات بطلت تبقى تخمين.',
    industry: 'E-commerce — Egypt'
  },
  {
    rating: 4.5,
    quote_en: 'Creative direction improved results without overcomplicating the funnel.',
    quote_ar: 'توجيه الكرياتيف حسّن النتائج بدون تعقيد.',
    industry: 'Services — KSA'
  },
  {
    rating: 5,
    quote_en: 'Quality leads improved, not just volume.',
    quote_ar: 'جودة الليدز اتحسّنت مش بس العدد.',
    industry: 'Travel — KSA'
  },
  {
    rating: 4.5,
    quote_en: 'Strong process: audit, test, scale—done with discipline.',
    quote_ar: 'منهج قوي: مراجعة، تجارب، توسيع — بانضباط.',
    industry: 'Retail — Egypt'
  },
  {
    rating: 5,
    quote_en: 'Professional, quick, and focused on measurable outcomes.',
    quote_ar: 'احترافي وسريع ومركز على نتائج قابلة للقياس.',
    industry: 'Local Services — UAE'
  }
]

export default function Wins() {
  const currentLang = t('nav.home') === 'Home' ? 'en' : 'ar'

  return (
    <section id="wins" className="wins section-block">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <h2>{t('wins.heading')}</h2>
          <p className="section-subtext">{t('wins.subtext')}</p>
        </div>

        {/* Stacking Wins Cards */}
        <div className="wins-stack">
          {winsData.map((win, index) => (
            <div key={index} className="wins-card glass-card">
              <div className="win-number">
                <span className="number">{win.number}</span>
                {win.unit && <span className="unit">{win.unit}</span>}
              </div>
              <div className="win-label">{win.label}</div>
              <div className="win-industry">{win.industry}</div>
            </div>
          ))}
        </div>

        <div className="wins-note reveal-on-scroll">
          <p>{t('wins.nearWinsNote')}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-section">
          <h3 className="testimonials-heading reveal-on-scroll">What Clients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-card glass-card reveal-on-scroll">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(test.rating) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ color: '#FFB800' }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-quote">
                  "{currentLang === 'en' ? test.quote_en : test.quote_ar}"
                </p>
                <div className="testimonial-industry">{test.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
