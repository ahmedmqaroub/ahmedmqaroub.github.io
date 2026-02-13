import React, { useState } from 'react'
import { t } from '../lib/i18n'
import Lightbox from './Lightbox'
import './ProofLibrary.css'

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

const adPaths = Array.from({ length: 12 }, (_, i) => `/assets/ads/ad-${String(i + 1).padStart(2, '0')}.jpg`)
const reviewPaths = Array.from({ length: 12 }, (_, i) => `/assets/reviews/rev-${String(i + 1).padStart(2, '0')}.jpg`)

export default function ProofLibrary() {
  const [activeTab, setActiveTab] = useState('ads')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const currentLang = t('nav.home') === 'Home' ? 'en' : 'ar'
  const currentImages = activeTab === 'ads' ? adPaths : reviewPaths

  const handleImageError = (path) => {
    setImageErrors(prev => ({ ...prev, [path]: true }))
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      callback()
    }
  }

  return (
    <div className="proof-library">
      <div className="container">
        <h2 className="proof-library-title reveal-on-scroll">{t('proofLibrary.title')}</h2>

        {/* Tabs */}
        <div className="proof-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'ads'}
            aria-controls="proof-panel-ads"
            id="proof-tab-ads"
            className={`proof-tab ${activeTab === 'ads' ? 'active' : ''}`}
            onClick={() => setActiveTab('ads')}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault()
                setActiveTab(activeTab === 'ads' ? 'reviews' : 'ads')
              }
            }}
          >
            {t('proofLibrary.tabAds')}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'reviews'}
            aria-controls="proof-panel-reviews"
            id="proof-tab-reviews"
            className={`proof-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault()
                setActiveTab(activeTab === 'ads' ? 'reviews' : 'ads')
              }
            }}
          >
            {t('proofLibrary.tabReviews')}
          </button>
        </div>

        {/* Ads Panel */}
        {activeTab === 'ads' && (
          <div
            role="tabpanel"
            id="proof-panel-ads"
            aria-labelledby="proof-tab-ads"
            className="proof-panel"
          >
            <div className="proof-grid">
              {adPaths.map((path, index) => (
                <div
                  key={path}
                  className="proof-item reveal-on-scroll"
                  onClick={() => !imageErrors[path] && openLightbox(index)}
                  onKeyDown={(e) => handleKeyDown(e, () => !imageErrors[path] && openLightbox(index))}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ad screenshot ${index + 1}`}
                >
                  {imageErrors[path] ? (
                    <div className="proof-placeholder shimmer">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <div className="placeholder-label">Expected: {path}</div>
                    </div>
                  ) : (
                    <img
                      src={path}
                      alt={`Ad screenshot ${index + 1}`}
                      onError={() => handleImageError(path)}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Panel */}
        {activeTab === 'reviews' && (
          <div
            role="tabpanel"
            id="proof-panel-reviews"
            aria-labelledby="proof-tab-reviews"
            className="proof-panel"
          >
            {/* Testimonial Cards */}
            <div className="reviews-testimonials">
              {testimonials.map((test, index) => (
                <div key={index} className="review-testimonial-card glass-card reveal-on-scroll">
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

            {/* Review Screenshots Grid */}
            <div className="proof-grid">
              {reviewPaths.map((path, index) => (
                <div
                  key={path}
                  className="proof-item reveal-on-scroll"
                  onClick={() => !imageErrors[path] && openLightbox(index)}
                  onKeyDown={(e) => handleKeyDown(e, () => !imageErrors[path] && openLightbox(index))}
                  tabIndex={0}
                  role="button"
                  aria-label={`View client review ${index + 1}`}
                >
                  {imageErrors[path] ? (
                    <div className="proof-placeholder shimmer">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <div className="placeholder-label">Expected: {path}</div>
                    </div>
                  ) : (
                    <img
                      src={path}
                      alt={`Client review ${index + 1}`}
                      onError={() => handleImageError(path)}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={currentImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          imageErrors={imageErrors}
          onImageError={handleImageError}
        />
      )}
    </div>
  )
}
