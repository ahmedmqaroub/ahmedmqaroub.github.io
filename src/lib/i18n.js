/**
 * i18n.js — Bilingual content dictionary (AR base, EN alt).
 * Tech terms stay English in BOTH languages.
 * Bind via data-i18n attributes.
 */

const CONTENT = {
  // ─── Navigation ───
  skipLink:       { ar: 'تخطي إلى المحتوى', en: 'Skip to content' },
  logoFallback:   { ar: 'AM', en: 'AM' },
  navHome:        { ar: 'الرئيسية', en: 'Home' },
  navWins:        { ar: 'الإنجازات', en: 'Wins' },
  navServices:    { ar: 'الخدمات', en: 'Services' },
  navTools:       { ar: 'الأدوات', en: 'Tool Stack' },
  navCases:       { ar: 'دراسات حالة', en: 'Case Studies' },
  navAbout:       { ar: 'عن أحمد', en: 'About' },
  navProcess:     { ar: 'المنهجية', en: 'Process' },
  navContact:     { ar: 'تواصل', en: 'Contact' },
  navCTA:         { ar: 'ابدأ Brief', en: 'Start Brief' },

  // ─── Hero ───
  heroEyebrow:    { ar: 'Growth & Performance Marketer', en: 'Growth & Performance Marketer' },
  heroTitle:      { ar: 'ميزانيتك تستاهل تشتغل <span class="text-accent">صح</span>', en: 'Your Ad Spend deserves to <span class="text-accent">perform</span>' },
  heroSub:        { ar: 'بحول الـ Ad Spend لنتائج حقيقية — Leads, Sales, و Growth مستمر. Meta Ads · Google Ads · TikTok Ads', en: 'I turn Ad Spend into real results — Leads, Sales, and sustained Growth. Meta Ads · Google Ads · TikTok Ads' },
  heroCTA:        { ar: 'ابدأ Brief مجاني', en: 'Start Free Brief' },
  statAdSpend:    { ar: 'Ad Spend Managed', en: 'Ad Spend Managed' },
  statROAS:       { ar: 'Avg ROAS Improvement', en: 'Avg ROAS Improvement' },
  statClients:    { ar: 'Clients Served', en: 'Clients Served' },

  // ─── Wins ───
  winsTitle:      { ar: 'إنجازات تتكلم', en: 'Wins that speak' },
  winsSub:        { ar: 'نتائج حقيقية من حملات حقيقية', en: 'Real results from real campaigns' },
  win1Quote:      { ar: '"أحمد حوّل حملاتنا من خسارة لربح في أقل من شهر. ROAS طلع من 1.2x لـ 4.8x"', en: '"Ahmed turned our campaigns from loss to profit in under a month. ROAS went from 1.2x to 4.8x"' },
  win1Author:     { ar: 'محمد — CEO, E-commerce Brand', en: 'Mohammed — CEO, E-commerce Brand' },
  win2Quote:      { ar: '"الـ Cost per Lead نزل 60% والـ Quality اتحسنت. شغل محترف جداً"', en: '"Cost per Lead dropped 60% and Quality improved dramatically. Very professional work"' },
  win2Author:     { ar: 'سارة — Marketing Director, Real Estate', en: 'Sarah — Marketing Director, Real Estate' },
  win3Quote:      { ar: '"بعد ما جرّبنا 3 agencies، أحمد هو اللي فعلاً فهم الـ Funnel بتاعنا وظبطه"', en: '"After trying 3 agencies, Ahmed is the one who truly understood our Funnel and fixed it"' },
  win3Author:     { ar: 'خالد — Founder, SaaS Startup', en: 'Khaled — Founder, SaaS Startup' },
  win4Quote:      { ar: '"مش بس Ads — أحمد بنالنا Tracking setup كامل: GTM, Pixel, CAPI, GA4. كل حاجة measurable"', en: '"Not just Ads — Ahmed built our full Tracking setup: GTM, Pixel, CAPI, GA4. Everything measurable"' },
  win4Author:     { ar: 'ليلى — COO, Fashion Brand', en: 'Layla — COO, Fashion Brand' },

  // ─── Services ───
  servicesTitle:  { ar: 'الخدمات', en: 'Services' },
  servicesSub:    { ar: 'كل اللي محتاجه عشان الـ Ads تشتغل صح', en: 'Everything you need for Ads that actually work' },
  svc1Title:      { ar: 'Media Buying & Management', en: 'Media Buying & Management' },
  svc1Desc:       { ar: 'Meta Ads · Google Ads · TikTok Ads · Snapchat Ads — إدارة كاملة من الاستراتيجية للتنفيذ والتحسين اليومي', en: 'Meta Ads · Google Ads · TikTok Ads · Snapchat Ads — Full management from strategy to execution and daily optimization' },
  svc2Title:      { ar: 'Tracking & Attribution', en: 'Tracking & Attribution' },
  svc2Desc:       { ar: 'GTM · Pixel · CAPI · GA4 · Looker Studio — Setup كامل عشان كل Conversion يتتبع صح', en: 'GTM · Pixel · CAPI · GA4 · Looker Studio — Complete setup so every Conversion is tracked properly' },
  svc3Title:      { ar: 'Growth Strategy', en: 'Growth Strategy' },
  svc3Desc:       { ar: 'تحليل الـ Funnel · Audience Research · Budget Allocation · Scaling Plan', en: 'Funnel Analysis · Audience Research · Budget Allocation · Scaling Plan' },
  svc4Title:      { ar: 'Creative Strategy', en: 'Creative Strategy' },
  svc4Desc:       { ar: 'Ad Copy · Creative Direction · A/B Testing Frameworks · UGC Briefs', en: 'Ad Copy · Creative Direction · A/B Testing Frameworks · UGC Briefs' },
  svc5Title:      { ar: 'Reporting & Dashboards', en: 'Reporting & Dashboards' },
  svc5Desc:       { ar: 'Looker Studio dashboards مخصصة — بتشوف الأرقام اللي فعلاً بتأثر على الـ Business', en: 'Custom Looker Studio dashboards — see the numbers that actually impact your Business' },
  svc6Title:      { ar: 'Account Audit', en: 'Account Audit' },
  svc6Desc:       { ar: 'تحليل شامل للـ Ad Accounts الحالية مع خطة تحسين واضحة', en: 'Comprehensive audit of current Ad Accounts with a clear improvement plan' },

  // ─── Tool Stack ───
  toolsTitle:     { ar: 'Tool Stack', en: 'Tool Stack' },
  toolsSub:       { ar: 'الأدوات اللي بشتغل بيها كل يوم', en: 'Tools I use every day' },

  // ─── Case Studies ───
  casesTitle:     { ar: 'دراسات حالة', en: 'Case Studies' },
  casesSub:       { ar: 'من التحدي للنتيجة — القصة الكاملة', en: 'From challenge to result — the full story' },
  caseIndustry1:  { ar: 'E-commerce', en: 'E-commerce' },
  case1Title:     { ar: 'Fashion Brand — ROAS من 1.2x لـ 4.8x', en: 'Fashion Brand — ROAS from 1.2x to 4.8x' },
  case1Desc:      { ar: 'إعادة هيكلة كاملة للـ Ad Account: Audience Segmentation, Creative Testing, CAPI Setup. النتيجة: ROAS اتضاعف 4 مرات في 45 يوم.', en: 'Complete Ad Account restructure: Audience Segmentation, Creative Testing, CAPI Setup. Result: ROAS quadrupled in 45 days.' },
  caseIndustry2:  { ar: 'Real Estate', en: 'Real Estate' },
  case2Title:     { ar: 'Developer — CPL من $25 لـ $10', en: 'Developer — CPL from $25 to $10' },
  case2Desc:      { ar: 'Funnel Redesign + Lead Scoring + Retargeting Strategy. الـ Lead Quality اتحسنت 3 أضعاف والتكلفة نزلت 60%.', en: 'Funnel Redesign + Lead Scoring + Retargeting Strategy. Lead Quality improved 3x and cost dropped 60%.' },
  caseIndustry3:  { ar: 'SaaS', en: 'SaaS' },
  case3Title:     { ar: 'B2B SaaS — Pipeline +180%', en: 'B2B SaaS — Pipeline +180%' },
  case3Desc:      { ar: 'Google Ads + LinkedIn Strategy مع Full-funnel Tracking. الـ Pipeline زاد 180% في 3 شهور.', en: 'Google Ads + LinkedIn Strategy with Full-funnel Tracking. Pipeline grew 180% in 3 months.' },
  caseIndustry4:  { ar: 'F&B', en: 'F&B' },
  case4Title:     { ar: 'Restaurant Chain — Orders +220%', en: 'Restaurant Chain — Orders +220%' },
  case4Desc:      { ar: 'TikTok Ads + Snapchat Ads مع Location Targeting. الـ Orders زادت 220% والـ CPO وصل $3.2.', en: 'TikTok Ads + Snapchat Ads with Location Targeting. Orders grew 220% with $3.2 CPO.' },
  caseIndustry5:  { ar: 'Healthcare', en: 'Healthcare' },
  case5Title:     { ar: 'Clinic — Bookings +340%', en: 'Clinic — Bookings +340%' },
  case5Desc:      { ar: 'Meta Ads + Google Ads مع Booking Funnel Optimization. الـ Bookings زادت 340%.', en: 'Meta Ads + Google Ads with Booking Funnel Optimization. Bookings grew 340%.' },
  caseIndustry6:  { ar: 'Education', en: 'Education' },
  case6Title:     { ar: 'EdTech — Enrollments +400%', en: 'EdTech — Enrollments +400%' },
  case6Desc:      { ar: 'Full-funnel Strategy: Awareness → Consideration → Enrollment. Meta + Google + TikTok. النتيجة: 4x Enrollments في أول Quarter.', en: 'Full-funnel Strategy: Awareness → Consideration → Enrollment. Meta + Google + TikTok. Result: 4x Enrollments in first Quarter.' },

  // ─── Proof Library ───
  proofTitle:     { ar: 'مكتبة الإثبات', en: 'Proof Library' },
  proofSub:       { ar: 'Screenshots حقيقية من Dashboards و Ad Accounts', en: 'Real screenshots from Dashboards and Ad Accounts' },
  proofTabAds:    { ar: 'Ad Results', en: 'Ad Results' },
  proofTabReviews:{ ar: 'Client Reviews', en: 'Client Reviews' },

  // ─── About ───
  aboutTitle:     { ar: 'عن أحمد', en: 'About Ahmed' },
  aboutP1:        { ar: 'متخصص في Performance Marketing و Growth من أكتر من 5 سنين. شغلت مع Brands في مصر والسعودية والإمارات والكويت وقطر والبحرين وعمان والأردن.', en: 'Performance Marketing and Growth specialist with 5+ years of experience. Worked with Brands in Egypt, Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, and Jordan.' },
  aboutP2:        { ar: 'فلسفتي بسيطة: كل جنيه Ad Spend لازم يكون Measurable و Accountable. مش بشتغل بالإحساس — بشتغل بالـ Data.', en: 'My philosophy is simple: every dollar of Ad Spend must be Measurable and Accountable. I don\'t work by gut feeling — I work with Data.' },
  aboutP3:        { ar: 'بتعامل مع كل Client كأنه Partner — هدفي إن الـ Growth يكون مستدام مش مؤقت.', en: 'I treat every Client as a Partner — my goal is sustainable Growth, not temporary spikes.' },
  aboutYears:     { ar: 'سنين خبرة', en: 'Years Experience' },
  aboutMarkets:   { ar: 'أسواق', en: 'Markets' },
  aboutSpend:     { ar: 'Ad Spend', en: 'Ad Spend' },

  // ─── Process ───
  processTitle:   { ar: 'المنهجية', en: 'Process' },
  processSub:     { ar: 'خطوات واضحة من أول Brief لحد الـ Scale', en: 'Clear steps from Brief to Scale' },
  step1Title:     { ar: 'Brief & Audit', en: 'Brief & Audit' },
  step1Desc:      { ar: 'بنفهم الـ Business وبنعمل Audit كامل للـ Current Setup', en: 'We understand the Business and conduct a full Audit of the Current Setup' },
  step2Title:     { ar: 'Strategy & Setup', en: 'Strategy & Setup' },
  step2Desc:      { ar: 'بنحط الخطة وبنظبط الـ Tracking والـ Audiences والـ Creatives', en: 'We set the plan and configure Tracking, Audiences, and Creatives' },
  step3Title:     { ar: 'Launch & Optimize', en: 'Launch & Optimize' },
  step3Desc:      { ar: 'بنطلق الحملات وبنعمل Daily Optimization based on Data', en: 'We launch campaigns and perform Daily Optimization based on Data' },
  step4Title:     { ar: 'Scale & Report', en: 'Scale & Report' },
  step4Desc:      { ar: 'بنكبّر اللي بيشتغل وبنقدم Reports واضحة كل أسبوع', en: 'We scale what works and deliver clear Reports every week' },

  // ─── Contact ───
  contactTitle:   { ar: 'ابدأ Brief', en: 'Start Brief' },
  contactSub:     { ar: 'املا البيانات وهتوصلني مباشرة على WhatsApp', en: 'Fill in the details and reach me directly on WhatsApp' },
  audCompany:     { ar: 'شركة / Brand', en: 'Company / Brand' },
  audFulltime:    { ar: 'وظيفة Full-time', en: 'Full-time Role' },
  audAgency:      { ar: 'Agency', en: 'Agency' },
  audFreelance:   { ar: 'مشروع Freelance', en: 'Freelance Project' },
  formCompany:    { ar: 'اسم الشركة', en: 'Company Name' },
  formMarket:     { ar: 'السوق', en: 'Market' },
  formBudget:     { ar: 'الميزانية الشهرية', en: 'Monthly Budget' },
  formGoal:       { ar: 'الهدف', en: 'Goal' },
  formWebsite:    { ar: 'Website / Instagram', en: 'Website / Instagram' },
  formSubmit:     { ar: 'أرسل Brief على WhatsApp', en: 'Send Brief on WhatsApp' },

  // ─── Footer ───
  footerText:     { ar: '© 2026 Ahmed Musaad. All rights reserved.', en: '© 2026 Ahmed Musaad. All rights reserved.' },

  // ─── Chapter HUD labels ───
  chapterSignal:  { ar: 'Signal', en: 'Signal' },
  chapterProof:   { ar: 'Proof', en: 'Proof' },
  chapterSystem:  { ar: 'System', en: 'System' },
  chapterCases:   { ar: 'Cases', en: 'Cases' },
  chapterTrust:   { ar: 'Trust', en: 'Trust' },
  chapterBrief:   { ar: 'Brief', en: 'Brief' },
};

let currentLang = 'ar';

/**
 * Get stored or default language.
 */
export function getLang() {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'ar' || stored === 'en') return stored;
  } catch { /* localStorage blocked */ }
  return 'ar';
}

/**
 * Set language and update DOM.
 */
export function setLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'ar';
  try { localStorage.setItem('lang', currentLang); } catch { /* noop */ }

  // Update html attributes
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = CONTENT[key];
    if (!entry) return;
    const text = entry[currentLang] || entry.ar;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });

  // Update toggle button text
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  }
}

/**
 * Get a content value by key for current language.
 */
export function t(key) {
  const entry = CONTENT[key];
  if (!entry) return key;
  return entry[currentLang] || entry.ar;
}

/**
 * Initialize i18n system.
 */
export function initI18n() {
  currentLang = getLang();
  setLang(currentLang);

  // Language toggle
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLang(currentLang === 'ar' ? 'en' : 'ar');
    });
  }
}

export { CONTENT, currentLang };
