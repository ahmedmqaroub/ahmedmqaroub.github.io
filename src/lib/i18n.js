const translations = {
  en: {
    nav: {
      home: 'Home',
      wins: 'Wins',
      services: 'Services',
      toolStack: 'Tool Stack',
      caseStudies: 'Case Studies',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
      whatsapp: 'WhatsApp'
    },
    languageToggle: {
      en: 'EN',
      ar: 'AR'
    },
    hero: {
      eyebrow: 'Growth systems. Clean tracking. Better decisions.',
      headline: 'I help businesses grow with measurable ads — not just campaigns.',
      subheadline: 'Multi-platform performance + tracking (Pixel/GTM/CAPI) + analysis — so you can make better decisions with your team.',
      whatsapp: 'WhatsApp Me',
      caseStudies: 'View Case Studies',
      miniAbout: '2+ years in performance marketing. Ex Team Lead (Sheikh Zayed).',
      trustNote: 'Fast response on WhatsApp. Clear next steps.'
    },
    wins: {
      heading: 'Wins you can verify',
      subtext: 'Clean numbers, clear context. No inflated claims.',
      wins: [
        '860K AED sales with 30K AED ad spend — Medical Center (UAE)',
        '600K+ profit with ~20K ad spend — Pharmacy / Skincare (Egypt)',
        'Supported expansion to multiple branches over 18 months — Travel Business (KSA)',
        'From zero to strong contracts — Home Services (Pest Control / Landscaping / Housekeeping)'
      ],
      note: 'Client names available if approved. Otherwise: industry-only.'
    },
    services: {
      heading: 'What I do',
      subtext: 'Performance across platforms, with tracking you can trust.',
      primary: {
        meta: {
          title: 'Meta Ads',
          desc: 'Lead gen + sales funnels with disciplined testing.'
        },
        tiktok: {
          title: 'TikTok Ads',
          desc: 'Creative-first iteration and audience signals.'
        },
        google: {
          title: 'Google Ads',
          desc: 'High-intent capture with clean reporting.'
        },
        snapchat: {
          title: 'Snapchat Ads',
          desc: 'Gulf-ready creatives and controlled scaling.'
        },
        tracking: {
          title: 'Tracking: Pixel / GTM / CAPI',
          desc: 'Pixel/GTM/CAPI setup + QA for reliable attribution.'
        }
      },
      supporting: {
        creative: {
          title: 'Creative Direction Support',
          desc: 'Briefs, hooks, angles, and feedback loops.'
        },
        reporting: {
          title: 'Reporting & Insights',
          desc: 'Weekly insights → decisions, not spreadsheets.'
        }
      }
    },
    toolStack: {
      heading: 'Tool Stack',
      subtext: 'Tracking-ready setups that reduce guesswork.',
      tools: [
        'Meta Ads Manager',
        'TikTok Ads Manager',
        'Google Ads',
        'GA4',
        'Google Tag Manager',
        'Meta CAPI',
        'Looker Studio'
      ]
    },
    caseStudies: {
      heading: 'Case Studies',
      note: 'Screenshots available upon request (6 items).',
      studies: [
        {
          industry: 'Medical — UAE',
          goal: 'Sales',
          platforms: 'Meta',
          tracking: 'Pixel + CAPI',
          problem: 'High spend, uneven quality across services.',
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
            'Unified tracking + channel naming standards.',
            'High-intent search campaigns + smart retargeting.',
            'Lead quality tagging for optimization feedback.'
          ],
          outcome: 'Improved conversion quality and clearer cross-channel reporting.'
        }
      ]
    },
    proofLibrary: {
      title: 'Proof Library',
      tabs: {
        ads: 'Ad Screenshots',
        reviews: 'Client Reviews'
      },
      testimonials: [
        {
          rating: 5,
          text: 'Clear reporting and fast iterations. We always knew what to do next.',
          industry: 'Medical — UAE'
        },
        {
          rating: 5,
          text: 'Tracking became reliable, and decisions stopped being guesses.',
          industry: 'E-commerce — Egypt'
        },
        {
          rating: 4.5,
          text: 'Creative direction improved results without overcomplicating the funnel.',
          industry: 'Services — KSA'
        },
        {
          rating: 5,
          text: 'Quality leads improved, not just volume.',
          industry: 'Travel — KSA'
        },
        {
          rating: 4.5,
          text: 'Strong process: audit, test, scale—done with discipline.',
          industry: 'Retail — Egypt'
        },
        {
          rating: 5,
          text: 'Professional, quick, and focused on measurable outcomes.',
          industry: 'Local Services — UAE'
        }
      ]
    },
    clientsMarkets: {
      heading: 'Clients & Markets',
      countries: ['EGY', 'KSA', 'UAE'],
      note: 'Selected brands shown by industry. Names available upon request.',
      markets: 'Markets: Egypt, Gulf, USA, Canada',
      industries: [
        'Healthcare',
        'Pharmacy / Skincare',
        'Travel',
        'Home Services',
        'E-commerce',
        'Local Services',
        'Retail',
        'Education'
      ]
    },
    about: {
      heading: 'About Ahmed',
      content: [
        '+2 years performance marketing experience',
        'Previously Graphic Designer + Copywriter',
        'Last role: Team Leader at a marketing company (Sheikh Zayed)',
        'Responsibilities: account management, campaign setup, team guidance (media/design), performance improvements',
        'Worked closely with designers and content creators to improve creatives and performance'
      ]
    },
    process: {
      heading: 'Process',
      steps: [
        {
          title: 'Audit',
          desc: 'goals, funnel, tracking readiness'
        },
        {
          title: 'Test',
          desc: 'creatives, offers, audiences'
        },
        {
          title: 'Scale',
          desc: 'budget to winners'
        },
        {
          title: 'Report',
          desc: 'insights → decisions'
        }
      ]
    },
    contact: {
      heading: "Let's talk on WhatsApp",
      subtext: 'Send a quick brief and I\'ll reply with next steps.',
      form: {
        company: 'Company',
        market: 'Market',
        budget: 'Budget',
        goal: 'Goal (Leads/Sales)',
        website: 'Website/IG'
      },
      cta: 'Open WhatsApp',
      note: 'WhatsApp is the fastest way to reach me.'
    },
    audience: {
      label: "I'm contacting as",
      options: {
        company: 'Company (Client)',
        fulltime: 'Full-time Hiring',
        agency: 'Agency Collaboration',
        freelance: 'Freelance Project'
      }
    },
    floatingWhatsApp: {
      ariaLabel: 'Contact via WhatsApp'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      wins: 'النتائج',
      services: 'الخدمات',
      toolStack: 'الأدوات',
      caseStudies: 'دراسات حالة',
      about: 'نبذة',
      process: 'المنهج',
      contact: 'تواصل',
      whatsapp: 'واتساب'
    },
    languageToggle: {
      en: 'EN',
      ar: 'AR'
    },
    hero: {
      eyebrow: 'نمو واضح. تتبّع مظبوط. قرارات أحسن.',
      headline: 'I help businesses grow with measurable ads — not just campaigns.',
      subheadline: 'Multi-platform performance + tracking (Pixel/GTM/CAPI) + analysis — so you can make better decisions with your team.',
      whatsapp: 'واتساب',
      caseStudies: 'عرض دراسات الحالة',
      miniAbout: 'خبرة +2 سنوات بيرفورمانس. Team Lead سابقًا (الشيخ زايد).',
      trustNote: 'رد سريع على واتساب وخطوات واضحة.'
    },
    wins: {
      heading: 'نتائج قابلة للتحقق',
      subtext: 'أرقام واضحة وسياق مفهوم — بدون مبالغة.',
      wins: [
        '860K AED sales with 30K AED ad spend — Medical Center (UAE)',
        '600K+ profit with ~20K ad spend — Pharmacy / Skincare (Egypt)',
        'Supported expansion to multiple branches over 18 months — Travel Business (KSA)',
        'From zero to strong contracts — Home Services (Pest Control / Landscaping / Housekeeping)'
      ],
      note: 'أسماء العملاء متاحة بالموافقة، وإلا: حسب الصناعة فقط.'
    },
    services: {
      heading: 'إيه اللي بقدمه',
      subtext: 'بيرفورمانس على المنصات + تتبّع تقدر تعتمد عليه.',
      primary: {
        meta: {
          title: 'Meta Ads',
          desc: 'ليدز ومبيعات بتست مبني على أرقام.'
        },
        tiktok: {
          title: 'TikTok Ads',
          desc: 'تجارب كرياتيف سريعة وإشارات جمهور واضحة.'
        },
        google: {
          title: 'Google Ads',
          desc: 'التقاط نية شراء عالية بتقارير نظيفة.'
        },
        snapchat: {
          title: 'Snapchat Ads',
          desc: 'كرياتيف مناسب للخليج وتوسيع محسوب.'
        },
        tracking: {
          title: 'Tracking: Pixel / GTM / CAPI',
          desc: 'Pixel/GTM/CAPI + مراجعة قياس قبل الصرف.'
        }
      },
      supporting: {
        creative: {
          title: 'Creative Direction Support',
          desc: 'أفكار وزوايا وبريف للكرياتيف.'
        },
        reporting: {
          title: 'Reporting & Insights',
          desc: 'إنسايتس أسبوعية تساعد القرار.'
        }
      }
    },
    toolStack: {
      heading: 'الأدوات اللي بستخدمها',
      subtext: 'تتبّع مضبوط يقلل التخمين ويزود الوضوح.',
      tools: [
        'Meta Ads Manager',
        'TikTok Ads Manager',
        'Google Ads',
        'GA4',
        'Google Tag Manager',
        'Meta CAPI',
        'Looker Studio'
      ]
    },
    caseStudies: {
      heading: 'دراسات حالة',
      note: 'لقطات متاحة عند الطلب (٦ عناصر).',
      studies: [
        {
          industry: 'Medical — UAE',
          goal: 'Sales',
          platforms: 'Meta',
          tracking: 'Pixel + CAPI',
          problem: 'High spend, uneven quality across services.',
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
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
          actions: [
            'Unified tracking + channel naming standards.',
            'High-intent search campaigns + smart retargeting.',
            'Lead quality tagging for optimization feedback.'
          ],
          outcome: 'Improved conversion quality and clearer cross-channel reporting.'
        }
      ]
    },
    proofLibrary: {
      title: 'Proof Library',
      tabs: {
        ads: 'Ad Screenshots',
        reviews: 'Client Reviews'
      },
      testimonials: [
        {
          rating: 5,
          text: 'تقارير واضحة وتجارب سريعة — كنا دايمًا عارفين الخطوة الجاية.',
          industry: 'Medical — UAE'
        },
        {
          rating: 5,
          text: 'القياس بقى مضبوط والقرارات بطلت تبقى تخمين.',
          industry: 'E-commerce — Egypt'
        },
        {
          rating: 4.5,
          text: 'توجيه الكرياتيف حسّن النتائج بدون تعقيد.',
          industry: 'Services — KSA'
        },
        {
          rating: 5,
          text: 'جودة الليدز اتحسّنت مش بس العدد.',
          industry: 'Travel — KSA'
        },
        {
          rating: 4.5,
          text: 'منهج قوي: مراجعة، تجارب، توسيع — بانضباط.',
          industry: 'Retail — Egypt'
        },
        {
          rating: 5,
          text: 'احترافي وسريع ومركز على نتائج قابلة للقياس.',
          industry: 'Local Services — UAE'
        }
      ]
    },
    clientsMarkets: {
      heading: 'عملاء وأسواق',
      countries: ['EGY', 'KSA', 'UAE'],
      note: 'براندات مختارة حسب الصناعة — الأسماء عند الطلب.',
      markets: 'الأسواق: مصر، الخليج، أمريكا، كندا',
      industries: [
        'الرعاية الصحية',
        'الصيدلية / العناية بالبشرة',
        'السفر',
        'خدمات المنزل',
        'التجارة الإلكترونية',
        'الخدمات المحلية',
        'التجزئة',
        'التعليم'
      ]
    },
    about: {
      heading: 'نبذة عن أحمد',
      content: [
        '+2 years performance marketing experience',
        'Previously Graphic Designer + Copywriter',
        'Last role: Team Leader at a marketing company (Sheikh Zayed)',
        'Responsibilities: account management, campaign setup, team guidance (media/design), performance improvements',
        'Worked closely with designers and content creators to improve creatives and performance'
      ]
    },
    process: {
      heading: 'المنهج',
      steps: [
        {
          title: 'Audit',
          desc: 'أهداف + فانل + جاهزية القياس'
        },
        {
          title: 'Test',
          desc: 'كرياتيف + عروض + جماهير'
        },
        {
          title: 'Scale',
          desc: 'نوسع على اللي بيكسب'
        },
        {
          title: 'Report',
          desc: 'إنسايتس → قرارات'
        }
      ]
    },
    contact: {
      heading: 'خلّينا نتكلم على واتساب',
      subtext: 'ابعت نبذة سريعة وهرد عليك بخطوات واضحة.',
      form: {
        company: 'الشركة',
        market: 'السوق',
        budget: 'الميزانية',
        goal: 'الهدف (ليدز/مبيعات)',
        website: 'الموقع/إنستجرام'
      },
      cta: 'افتح واتساب',
      note: 'واتساب أسرع طريقة للتواصل.'
    },
    audience: {
      label: 'أنا بتواصل بصفتي',
      options: {
        company: 'شركة (عميل)',
        fulltime: 'توظيف فول تايم',
        agency: 'تعاون مع وكالة',
        freelance: 'مشروع فريلانسر'
      }
    },
    floatingWhatsApp: {
      ariaLabel: 'تواصل عبر واتساب'
    }
  }
}

export const getCurrentLang = () => {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem('lang') || 'en'
}

export const setLang = (lang) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('lang', lang)
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }))
}

export const t = (key) => {
  const lang = getCurrentLang()
  const keys = key.split('.')
  let result = translations[lang]
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k]
    } else {
      return key
    }
  }
  
  return result || key
}

export default translations