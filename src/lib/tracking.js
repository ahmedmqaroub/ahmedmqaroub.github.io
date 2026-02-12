export const trackEvent = (eventName, params = {}) => {
  try {
    // GA4 tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
    
    // Meta Pixel tracking
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params)
    }
    
    // Console log for development
    if (import.meta.env.DEV) {
      console.log(`📊 Tracking: ${eventName}`, params)
    }
  } catch (error) {
    console.error('Tracking error:', error)
  }
}

export const trackWhatsAppClick = (position, audience) => {
  trackEvent('whatsapp_click', {
    position,
    audience,
    value: 1
  })
  
  // Also track with Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'WhatsAppClick', {
      position,
      audience
    })
  }
}

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  })
}

export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  })
}

export const trackCtaClick = (ctaName, section) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    section: section
  })
}

export const trackFormSubmit = (formName, formData) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData
  })
}

export const trackVideoPlay = (videoName, duration) => {
  trackEvent('video_play', {
    video_name: videoName,
    duration: duration
  })
}

export const trackLightboxOpen = (imageName) => {
  trackEvent('lightbox_open', {
    image_name: imageName
  })
}

export const trackTabClick = (tabName, section) => {
  trackEvent('tab_click', {
    tab_name: tabName,
    section: section
  })
}

export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName
  })
}

export const trackLanguageChange = (oldLang, newLang) => {
  trackEvent('language_change', {
    old_language: oldLang,
    new_language: newLang
  })
}

export const trackAudienceChange = (oldAudience, newAudience) => {
  trackEvent('audience_change', {
    old_audience: oldAudience,
    new_audience: newAudience
  })
}

export const trackCaseStudyView = (caseStudyTitle) => {
  trackEvent('case_study_view', {
    case_study_title: caseStudyTitle
  })
}

export const trackCaseStudyExpand = (caseStudyTitle) => {
  trackEvent('case_study_expand', {
    case_study_title: caseStudyTitle
  })
}

export const trackMobileNavToggle = (isOpen) => {
  trackEvent('mobile_nav_toggle', {
    action: isOpen ? 'open' : 'close'
  })
}

export const trackScrollProgress = (progress) => {
  const progressBuckets = [25, 50, 75, 90]
  const bucket = progressBuckets.find(p => progress <= p)
  
  if (bucket && !sessionStorage.getItem(`scroll_${bucket}`)) {
    sessionStorage.setItem(`scroll_${bucket}`, 'true')
    trackEvent('scroll_progress', {
      progress_percentage: bucket
    })
  }
}

export default {
  trackEvent,
  trackWhatsAppClick,
  trackPageView,
  trackScrollDepth,
  trackCtaClick,
  trackFormSubmit,
  trackVideoPlay,
  trackLightboxOpen,
  trackTabClick,
  trackSectionView,
  trackLanguageChange,
  trackAudienceChange,
  trackCaseStudyView,
  trackCaseStudyExpand,
  trackMobileNavToggle,
  trackScrollProgress
}