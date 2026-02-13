// i18n system for EN/AR bilingual support
// Stores language preference in localStorage

const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      wins: 'Wins',
      services: 'Services',
      toolStack: 'Tool Stack',
      caseStudies: 'Case Studies',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      langSwitch: 'AR'
    },
    
    // Hero
    hero: {
      eyebrow: 'Growth systems. Clean tracking. Better decisions.',
      // Headline stays EXACT in English (do not translate)
      headline: 'I help businesses grow with measurable ads — not just campaigns.',
      // Subheadline stays EXACT in English (do not translate)
      subheadline: 'Multi-platform performance + tracking (Pixel/GTM/CAPI) + analysis — so you can make better decisions with your team.',
      miniAbout: '2+ years in performance marketing. Ex Team Lead (Sheikh Zayed).',
      trustNote: 'Fast response on WhatsApp. Clear next steps.',
      primaryCta: 'WhatsApp Me',
      secondaryCta: 'View Case Studies'
    },
    
    // Audience Selector
    audience: {
      label: "I'm contacting as",
      company: 'Company (Client)',
      fulltime: 'Full-time Hiring',
      agency: 'Agency Collaboration',
      freelance: 'Freelance Project'
    },
    
    // Wins
    wins: {
      heading: 'Wins you can verify',
      subtext: 'Clean numbers, clear context. No inflated claims.',
      nearWinsNote: 'Client names available if approved. Otherwise: industry-only.'
    },
    
    // Services
    services: {
      heading: 'What I do',
      subtext: 'Performance across platforms, with tracking you can trust.',
      metaAds: 'Meta Ads',
      metaAdsMicro: 'Lead gen + sales funnels with disciplined testing.',
      tiktokAds: 'TikTok Ads',
      tiktokAdsMicro: 'Creative-first iteration and audience signals.',
      googleAds: 'Google Ads',
      googleAdsMicro: 'High-intent capture with clean reporting.',
      snapchatAds: 'Snapchat Ads',
      snapchatAdsMicro: 'Gulf-ready creatives and controlled scaling.',
      tracking: 'Tracking: Pixel / GTM / CAPI',
      trackingMicro: 'Pixel/GTM/CAPI setup + QA for reliable attribution.',
      creativeDirection: 'Creative Direction Support',
      creativeDirectionMicro: 'Briefs, hooks, angles, and feedback loops.',
      reporting: 'Reporting & Insights',
      reportingMicro: 'Weekly insights → decisions, not spreadsheets.'
    },
    
    // Tool Stack
    toolStack: {
      heading: 'Tool Stack',
      subtext: 'Tracking-ready setups that reduce guesswork.'
    },
    
    // Case Studies
    caseStudies: {
      heading: 'Case Studies',
      gridNote: 'Screenshots available upon request (6 items).',
      industry: 'Industry + Country',
      goal: 'Goal',
      platforms: 'Platforms',
      tracking: 'Tracking',
      problem: 'Problem',
      whatWeDid: 'What we did',
      outcome: 'Outcome'
    },
    
    // Proof Library
    proofLibrary: {
      title: 'Proof Library',
      tabAds: 'Ad Screenshots',
      tabReviews: 'Client Reviews'
    },
    
    // Clients & Markets
    clientsMarkets: {
      heading: 'Clients & Markets',
      note: 'Selected brands shown by industry. Names available upon request.',
      marketsLine: 'Markets: Egypt, Gulf, USA, Canada'
    },
    
    // About
    about: {
      heading: 'About Ahmed'
    },
    
    // Process
    process: {
      heading: 'Process',
      auditTitle: 'Audit',
      auditMicro: 'goals, funnel, tracking readiness',
      testTitle: 'Test',
      testMicro: 'creatives, offers, audiences',
      scaleTitle: 'Scale',
      scaleMicro: 'budget to winners',
      reportTitle: 'Report',
      reportMicro: 'insights → decisions'
    },
    
    // Contact
    contact: {
      heading: "Let's talk on WhatsApp",
      subtext: "Send a quick brief and I'll reply with next steps.",
      fieldCompany: 'Company',
      fieldMarket: 'Market',
      fieldBudget: 'Budget',
      fieldGoal: 'Goal (Leads/Sales)',
      fieldWebsite: 'Website/IG',
      ctaButton: 'Open WhatsApp',
      note: 'WhatsApp is the fastest way to reach me.'
    },
    
    // Floating WhatsApp
    floatingWhatsApp: {
      ariaLabel: 'Open WhatsApp chat'
    }
  },
  
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      wins: 'النتائج',
      services: 'الخدمات',
      toolStack: 'الأدوات',
      caseStudies: 'دراسات حالة',
      about: 'نبذة',
      process: 'المنهج',
      contact: 'تواصل',
      whatsapp: 'واتساب',
      langSwitch: 'EN'
    },
    
    // Hero
    hero: {
      eyebrow: 'نمو واضح. تتبّع مظبوط. قرارات أحسن.',
      // Headline stays EXACT in English (do not translate)
      headline: 'I help businesses grow with measurable ads — not just campaigns.',
      // Subheadline stays EXACT in English (do not translate)
      subheadline: 'Multi-platform performance + tracking (Pixel/GTM/CAPI) + analysis — so you can make better decisions with your team.',
      miniAbout: 'خبرة +2 سنوات بيرفورمانس. Team Lead سابقًا (الشيخ زايد).',
      trustNote: 'رد سريع على واتساب وخطوات واضحة.',
      primaryCta: 'واتساب',
      secondaryCta: 'دراسات الحالة'
    },
    
    // Audience Selector
    audience: {
      label: 'أنا بتواصل بصفتي',
      company: 'شركة (عميل)',
      fulltime: 'توظيف فول تايم',
      agency: 'تعاون مع وكالة',
      freelance: 'مشروع فريلانسر'
    },
    
    // Wins
    wins: {
      heading: 'نتائج قابلة للتحقق',
      subtext: 'أرقام واضحة وسياق مفهوم — بدون مبالغة.',
      nearWinsNote: 'أسماء العملاء متاحة عند الموافقة — أو المجال فقط.'
    },
    
    // Services
    services: {
      heading: 'إيه اللي بقدمه',
      subtext: 'بيرفورمانس على المنصات + تتبّع تقدر تعتمد عليه.',
      metaAds: 'إعلانات ميتا',
      metaAdsMicro: 'ليدز ومبيعات بتست مبني على أرقام.',
      tiktokAds: 'إعلانات تيك توك',
      tiktokAdsMicro: 'تجارب كرياتيف سريعة وإشارات جمهور واضحة.',
      googleAds: 'إعلانات جوجل',
      googleAdsMicro: 'التقاط نية شراء عالية بتقارير نظيفة.',
      snapchatAds: 'إعلانات سناب شات',
      snapchatAdsMicro: 'كرياتيف مناسب للخليج وتوسيع محسوب.',
      tracking: 'التتبع: Pixel / GTM / CAPI',
      trackingMicro: 'Pixel/GTM/CAPI + مراجعة قياس قبل الصرف.',
      creativeDirection: 'توجيه الكرياتيف',
      creativeDirectionMicro: 'أفكار وزوايا وبريف للكرياتيف.',
      reporting: 'التقارير والإنسايتس',
      reportingMicro: 'إنسايتس أسبوعية تساعد القرار.'
    },
    
    // Tool Stack
    toolStack: {
      heading: 'الأدوات اللي بستخدمها',
      subtext: 'تتبّع مضبوط يقلل التخمين ويزود الوضوح.'
    },
    
    // Case Studies
    caseStudies: {
      heading: 'دراسات حالة',
      gridNote: 'لقطات متاحة عند الطلب (٦ مشاريع).',
      industry: 'الصناعة + البلد',
      goal: 'الهدف',
      platforms: 'المنصات',
      tracking: 'التتبع',
      problem: 'المشكلة',
      whatWeDid: 'اللي عملناه',
      outcome: 'النتيجة'
    },
    
    // Proof Library
    proofLibrary: {
      title: 'مكتبة الإثباتات',
      tabAds: 'لقطات الإعلانات',
      tabReviews: 'تقييمات العملاء'
    },
    
    // Clients & Markets
    clientsMarkets: {
      heading: 'عملاء وأسواق',
      note: 'براندات مختارة حسب الصناعة — الأسماء عند الطلب.',
      marketsLine: 'الأسواق: مصر، الخليج، أمريكا، كندا'
    },
    
    // About
    about: {
      heading: 'نبذة عن أحمد'
    },
    
    // Process
    process: {
      heading: 'المنهج',
      auditTitle: 'Audit',
      auditMicro: 'أهداف + فانل + جاهزية القياس',
      testTitle: 'Test',
      testMicro: 'كرياتيف + عروض + جماهير',
      scaleTitle: 'Scale',
      scaleMicro: 'نوسع على اللي بيكسب',
      reportTitle: 'Report',
      reportMicro: 'إنسايتس → قرارات'
    },
    
    // Contact
    contact: {
      heading: 'خلّينا نتكلم على واتساب',
      subtext: 'ابعت نبذة سريعة وهرد عليك بخطوات واضحة.',
      fieldCompany: 'الشركة',
      fieldMarket: 'السوق',
      fieldBudget: 'الميزانية',
      fieldGoal: 'الهدف (ليدز/مبيعات)',
      fieldWebsite: 'الموقع/إنستجرام',
      ctaButton: 'افتح واتساب',
      note: 'واتساب أسرع طريقة للتواصل.'
    },
    
    // Floating WhatsApp
    floatingWhatsApp: {
      ariaLabel: 'فتح محادثة واتساب'
    }
  }
}

let currentLang = 'en'

export function initI18n() {
  if (typeof window === 'undefined') return
  
  const stored = localStorage.getItem('lang')
  if (stored === 'ar' || stored === 'en') {
    currentLang = stored
  }
}

export function getCurrentLang() {
  return currentLang
}

export function setLang(lang) {
  if (lang !== 'en' && lang !== 'ar') return
  currentLang = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang)
  }
}

export function t(key) {
  const keys = key.split('.')
  let value = translations[currentLang]
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key
    }
  }
  
  return value || key
}

// React hook
import { useState, useEffect } from 'react'

export function useTranslation() {
  const [lang, setLanguage] = useState(currentLang)
  
  useEffect(() => {
    setLanguage(currentLang)
  }, [])
  
  const changeLang = (newLang) => {
    setLang(newLang)
    setLanguage(newLang)
  }
  
  return {
    lang,
    t,
    setLanguage: changeLang
  }
}
