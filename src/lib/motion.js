/**
 * motion.js — ALL GSAP/ScrollTrigger/Lenis logic.
 * Initialize only after first paint.
 * Wrap ALL in try/catch — fail silently, UI continues.
 * Idempotent: safe to call multiple times.
 */

import {
  DURATION_EDITORIAL,
  DURATION_SNAPPY,
  EASE_EDITORIAL,
  EASE_SNAPPY,
  STAGGER_DEFAULT,
  STAGGER_TIGHT,
  REVEAL_Y,
  REVEAL_Y_SMALL,
  CARD_SCALE_START,
  CARD_SCALE_END,
  CARD_SETTLE_Y,
  CONTACT_FLY_Y,
  BLUR_MAX_DESKTOP,
  SCRUB_DIRECT,
  SCRUB_SMOOTH,
  REVEAL_START,
  PIN_START,
  BREAKPOINT_MOBILE,
  TILT_MAX_DEG,
  INTRO_EYEBROW_DELAY,
  INTRO_EYEBROW_DUR,
  INTRO_HEADLINE_DELAY,
  INTRO_HEADLINE_DUR,
  INTRO_CARD_DELAY,
  INTRO_CARD_DUR,
  CHAPTERS,
  isMobile,
  prefersReducedMotion,
} from './motionTokens.js';

import {
  validateTween,
  isMotionAllowed,
  monitorPerformance,
  getBlurCap,
  shouldPin,
  capTilt,
} from './motionBible.js';

import { $, $$ } from './dom.js';
import { setLenisInstance } from './ui.js';

let initialized = false;
let lenisInstance = null;
let scrollTriggerInstances = [];
let tweenInstances = [];
let rafId = null;
let perfCleanup = null;

/**
 * Cleanup all motion instances. Makes init idempotent.
 */
export function cleanupMotion() {
  // Kill all ScrollTrigger instances
  scrollTriggerInstances.forEach(st => {
    try { st.kill(); } catch { /* noop */ }
  });
  scrollTriggerInstances = [];

  // Kill all tweens
  tweenInstances.forEach(tw => {
    try { tw.kill(); } catch { /* noop */ }
  });
  tweenInstances = [];

  // Destroy Lenis
  if (lenisInstance) {
    try { lenisInstance.destroy(); } catch { /* noop */ }
    lenisInstance = null;
    setLenisInstance(null);
  }

  // Cancel RAF
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Cleanup perf monitor
  if (perfCleanup) {
    perfCleanup();
    perfCleanup = null;
  }

  initialized = false;
}

/**
 * Main motion initialization. Called after first paint.
 */
export async function initMotion() {
  // Idempotent guard
  if (initialized) {
    cleanupMotion();
  }

  // If reduced motion, skip everything
  if (!isMotionAllowed()) {
    document.documentElement.dataset.motionReduced = 'true';
    initChapterHUDFallback();
    initialized = true;
    return;
  }

  try {
    // Dynamic imports for code-splitting
    const [gsapModule, ScrollTriggerModule, LenisModule] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('lenis'),
    ]);

    const gsap = gsapModule.gsap || gsapModule.default;
    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
    const Lenis = LenisModule.default || LenisModule.Lenis;

    // Register plugins exactly once per cleanup cycle
    gsap.registerPlugin(ScrollTrigger);

    // ─── Lenis Setup ─────────────────────────────────
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenisInstance);

    // Connect Lenis → ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ─── Performance Monitor ─────────────────────────
    perfCleanup = monitorPerformance(() => {
      document.documentElement.dataset.perfDegraded = 'true';
      // Degrade: disable tilt, reduce effects
      if (isMobile()) return;
      // Refresh ScrollTrigger after potential layout changes
      try { ScrollTrigger.refresh(); } catch { /* noop */ }
    });

    // ─── Intro Reveal ────────────────────────────────
    initIntroReveal(gsap);

    // ─── Hero Animations ─────────────────────────────
    initHeroScene(gsap, ScrollTrigger);

    // ─── Wins Stacking Cards ─────────────────────────
    initWinsScene(gsap, ScrollTrigger);

    // ─── Services & Tool Stack ───────────────────────
    initServicesScene(gsap, ScrollTrigger);

    // ─── Case Studies Rail ───────────────────────────
    initCaseStudiesScene(gsap, ScrollTrigger);

    // ─── Proof Library ───────────────────────────────
    initProofScene(gsap, ScrollTrigger);

    // ─── Contact Fly-in ──────────────────────────────
    initContactScene(gsap, ScrollTrigger);

    // ─── General Reveals ─────────────────────────────
    initGeneralReveals(gsap, ScrollTrigger);

    // ─── Chapter HUD ─────────────────────────────────
    initChapterHUD(gsap, ScrollTrigger);

    // ─── Pointer Tilt (desktop, non-degraded) ────────
    initPointerTilt(gsap);

    initialized = true;

  } catch (err) {
    console.warn('[motion.js] Motion init failed, continuing without animations:', err);
    initialized = true; // Mark as done so we don't retry
    initChapterHUDFallback();
  }
}

// ─── INTRO REVEAL ─────────────────────────────────────
function initIntroReveal(gsap) {
  try {
    const played = sessionStorage.getItem('introPlayed');
    if (played) return;

    const eyebrow = $('.hero__eyebrow');
    const title = $('.hero__title');
    const actions = $('.hero__actions');
    const stats = $('.hero__stats');
    const dashboard = $('.hero__dashboard');

    const tl = gsap.timeline({
      onComplete: () => {
        try { sessionStorage.setItem('introPlayed', '1'); } catch { /* noop */ }
      }
    });

    if (eyebrow) {
      tl.from(eyebrow, validateTween({
        y: REVEAL_Y_SMALL, opacity: 0,
        duration: INTRO_EYEBROW_DUR,
        ease: EASE_EDITORIAL,
      }), INTRO_EYEBROW_DELAY);
    }

    if (title) {
      tl.from(title, validateTween({
        y: REVEAL_Y, opacity: 0,
        duration: INTRO_HEADLINE_DUR,
        ease: EASE_EDITORIAL,
      }), INTRO_HEADLINE_DELAY);
    }

    if (actions) {
      tl.from(actions, validateTween({
        y: REVEAL_Y_SMALL, opacity: 0,
        duration: INTRO_CARD_DUR,
        ease: EASE_EDITORIAL,
      }), INTRO_CARD_DELAY);
    }

    if (stats) {
      tl.from(stats, validateTween({
        y: REVEAL_Y_SMALL, opacity: 0,
        duration: INTRO_CARD_DUR,
        ease: EASE_EDITORIAL,
      }), INTRO_CARD_DELAY + 0.1);
    }

    if (dashboard) {
      tl.from(dashboard, validateTween({
        y: CARD_SETTLE_Y, opacity: 0, scale: CARD_SCALE_START,
        duration: INTRO_CARD_DUR,
        ease: EASE_EDITORIAL,
      }), INTRO_CARD_DELAY);
    }

    tweenInstances.push(tl);
  } catch (err) {
    console.warn('[motion.js] Intro reveal failed:', err);
  }
}

// ─── HERO SCENE ────────────────────────────────────────
function initHeroScene(gsap, ScrollTrigger) {
  try {
    const hero = $('#home');
    if (!hero) return;

    const eyebrow = $('.hero__eyebrow', hero);
    const title = $('.hero__title', hero);
    const sub = $('.hero__sub', hero);

    // Micro parallax on scroll
    const st = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: SCRUB_SMOOTH,
      onUpdate: (self) => {
        const progress = self.progress;
        if (eyebrow) gsap.set(eyebrow, { y: progress * 20 });
        if (title) gsap.set(title, { y: progress * 40 });
        if (sub) gsap.set(sub, { y: progress * 60 });
      }
    });
    scrollTriggerInstances.push(st);

    // Dashboard settle
    const dashboard = $('.hero__dashboard', hero);
    if (dashboard) {
      const dashST = ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: '50% top',
        scrub: SCRUB_SMOOTH,
        onUpdate: (self) => {
          gsap.set(dashboard, { y: self.progress * 30, scale: 1 - self.progress * 0.05 });
        }
      });
      scrollTriggerInstances.push(dashST);
    }
  } catch (err) {
    console.warn('[motion.js] Hero scene failed:', err);
  }
}

// ─── WINS STACKING CARDS ──────────────────────────────
function initWinsScene(gsap, ScrollTrigger) {
  try {
    const section = $('#wins');
    const stack = $('#winsStack');
    if (!section || !stack) return;

    const cards = $$('.win-card', stack);
    if (!cards.length) return;

    if (shouldPin()) {
      // Desktop: pinned stacking cards
      const blurCap = getBlurCap();

      cards.forEach((card, i) => {
        const tw = gsap.fromTo(card,
          validateTween({
            scale: CARD_SCALE_START,
            opacity: 0,
            y: CARD_SETTLE_Y,
            filter: blurCap > 0 ? `blur(${blurCap}px)` : 'none',
          }),
          validateTween({
            scale: CARD_SCALE_END,
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: DURATION_EDITORIAL,
            ease: EASE_EDITORIAL,
            scrollTrigger: {
              trigger: section,
              start: `top+=${i * 25}% top`,
              end: `top+=${(i + 1) * 25}% top`,
              scrub: SCRUB_DIRECT,
              pin: i === 0 ? section : false,
              pinSpacing: i === 0,
            },
          })
        );
        tweenInstances.push(tw);
        if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
      });

    } else {
      // Mobile: simple fade-up reveals
      cards.forEach((card, i) => {
        const tw = gsap.from(card, validateTween({
          y: REVEAL_Y,
          opacity: 0,
          duration: DURATION_EDITORIAL,
          ease: EASE_EDITORIAL,
          scrollTrigger: {
            trigger: card,
            start: REVEAL_START,
            toggleActions: 'play none none none',
          },
          delay: i * STAGGER_TIGHT,
        }));
        tweenInstances.push(tw);
        if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
      });
    }

    // Star fill (runs for both desktop and mobile)
    cards.forEach(card => {
      const rating = parseFloat(card.querySelector('.win-card__rating')?.dataset.rating || '5');
      const stars = $$('.star', card);
      const fillPercent = (rating / 5) * 100;
      stars.forEach((star, i) => {
        const starFill = Math.min(100, Math.max(0, fillPercent - i * 20) * 5);
        if (starFill >= 100) {
          star.classList.add('filled');
        } else if (starFill > 0) {
          star.classList.add('half-filled');
        }
      });
    });
  } catch (err) {
    console.warn('[motion.js] Wins scene failed:', err);
  }
}

// ─── SERVICES & TOOL STACK ────────────────────────────
function initServicesScene(gsap, ScrollTrigger) {
  try {
    // Services cards drift in
    const serviceCards = $$('.service-card');
    serviceCards.forEach((card, i) => {
      const tw = gsap.from(card, validateTween({
        y: REVEAL_Y,
        opacity: 0,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: card,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_TIGHT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });

    // Tool badges drift in
    const toolBadges = $$('.tool-badge');
    toolBadges.forEach((badge, i) => {
      const tw = gsap.from(badge, validateTween({
        y: REVEAL_Y_SMALL,
        opacity: 0,
        scale: 0.9,
        duration: DURATION_SNAPPY * 2,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: badge,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_TIGHT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });
  } catch (err) {
    console.warn('[motion.js] Services scene failed:', err);
  }
}

// ─── CASE STUDIES RAIL ────────────────────────────────
function initCaseStudiesScene(gsap, ScrollTrigger) {
  try {
    const wrapper = $('#casesRailWrapper');
    const rail = $('#casesRail');
    const progressBar = $('#casesProgressBar');
    if (!wrapper || !rail) return;

    if (shouldPin()) {
      // Desktop: horizontal pinned rail
      const cards = $$('.case-card', rail);
      const totalWidth = () => rail.scrollWidth - wrapper.offsetWidth;

      const tw = gsap.to(rail, {
        x: () => -totalWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: PIN_START,
          end: () => `+=${totalWidth()}`,
          scrub: SCRUB_DIRECT,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBar) {
              progressBar.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);

    } else {
      // Mobile: vertical fallback with progress based on scroll
      wrapper.classList.add('cases--vertical');
      const cards = $$('.case-card', rail);
      cards.forEach((card, i) => {
        const tw = gsap.from(card, validateTween({
          y: REVEAL_Y,
          opacity: 0,
          duration: DURATION_EDITORIAL,
          ease: EASE_EDITORIAL,
          scrollTrigger: {
            trigger: card,
            start: REVEAL_START,
            toggleActions: 'play none none none',
          },
          delay: i * STAGGER_DEFAULT,
        }));
        tweenInstances.push(tw);
        if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
      });
    }
  } catch (err) {
    console.warn('[motion.js] Case studies scene failed:', err);
  }
}

// ─── PROOF LIBRARY ────────────────────────────────────
function initProofScene(gsap, ScrollTrigger) {
  try {
    const proofItems = $$('.proof__item');
    proofItems.forEach((item, i) => {
      const tw = gsap.from(item, validateTween({
        y: REVEAL_Y_SMALL,
        opacity: 0,
        scale: 0.95,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: item,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_TIGHT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });
  } catch (err) {
    console.warn('[motion.js] Proof scene failed:', err);
  }
}

// ─── CONTACT FLY-IN ───────────────────────────────────
function initContactScene(gsap, ScrollTrigger) {
  try {
    const fields = $$('.brief-form__field');
    const submit = $('.brief-form__submit');
    const audienceBtns = $$('.audience-btn');

    [...audienceBtns, ...fields, submit].filter(Boolean).forEach((el, i) => {
      const tw = gsap.from(el, validateTween({
        y: CONTACT_FLY_Y,
        opacity: 0,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: el,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_DEFAULT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });
  } catch (err) {
    console.warn('[motion.js] Contact scene failed:', err);
  }
}

// ─── GENERAL REVEALS ──────────────────────────────────
function initGeneralReveals(gsap, ScrollTrigger) {
  try {
    // Section titles + subs
    $$('.section__title, .section__sub').forEach((el, i) => {
      const tw = gsap.from(el, validateTween({
        y: REVEAL_Y,
        opacity: 0,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: el,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });

    // Process steps
    $$('.process__step').forEach((step, i) => {
      const tw = gsap.from(step, validateTween({
        y: REVEAL_Y,
        opacity: 0,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: step,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_DEFAULT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });

    // About highlights
    $$('.about__highlight').forEach((h, i) => {
      const tw = gsap.from(h, validateTween({
        y: REVEAL_Y_SMALL,
        opacity: 0,
        scale: 0.9,
        duration: DURATION_EDITORIAL,
        ease: EASE_EDITORIAL,
        scrollTrigger: {
          trigger: h,
          start: REVEAL_START,
          toggleActions: 'play none none none',
        },
        delay: i * STAGGER_DEFAULT,
      }));
      tweenInstances.push(tw);
      if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
    });
  } catch (err) {
    console.warn('[motion.js] General reveals failed:', err);
  }
}

// ─── CHAPTER HUD ──────────────────────────────────────
function initChapterHUD(gsap, ScrollTrigger) {
  try {
    const hud = $('#chapterHUD');
    if (!hud) return;

    const numberEl = $('.chapter-hud__number', hud);
    const labelEl = $('.chapter-hud__label', hud);
    const barEl = $('.chapter-hud__bar', hud);

    CHAPTERS.forEach((chapter, i) => {
      const section = $(chapter.section);
      if (!section) return;

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => updateHUD(chapter, numberEl, labelEl),
        onEnterBack: () => updateHUD(chapter, numberEl, labelEl),
      });
      scrollTriggerInstances.push(st);
    });

    // Overall progress
    const progressST = ScrollTrigger.create({
      trigger: '#mainContent',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (barEl) barEl.style.width = `${self.progress * 100}%`;
      },
    });
    scrollTriggerInstances.push(progressST);

    hud.classList.add('visible');
  } catch (err) {
    console.warn('[motion.js] ChapterHUD failed:', err);
    initChapterHUDFallback();
  }
}

function updateHUD(chapter, numberEl, labelEl) {
  if (numberEl) numberEl.textContent = chapter.id;
  if (labelEl) {
    labelEl.setAttribute('data-i18n', chapter.key);
    // Get current lang value
    const lang = document.documentElement.lang || 'ar';
    // Use the key directly — i18n will handle it on next toggle
    labelEl.textContent = chapter.key.replace('chapter', '');
  }
}

function initChapterHUDFallback() {
  try {
    const hud = $('#chapterHUD');
    if (!hud) return;

    const numberEl = $('.chapter-hud__number', hud);
    const labelEl = $('.chapter-hud__label', hud);

    // Use IntersectionObserver as fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const chapter = CHAPTERS.find(c => c.section === `#${id}`);
            if (chapter) {
              updateHUD(chapter, numberEl, labelEl);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    CHAPTERS.forEach(ch => {
      const section = $(ch.section);
      if (section) observer.observe(section);
    });

    hud.classList.add('visible');
  } catch {
    // ChapterHUD is non-critical, fail silently
  }
}

// ─── POINTER TILT ─────────────────────────────────────
function initPointerTilt(gsap) {
  try {
    if (isMobile() || 'ontouchstart' in window) return;
    if (document.documentElement.dataset.perfDegraded === 'true') return;

    const dashboard = $('.hero__dashboard');
    if (!dashboard) return;

    const handleMove = (e) => {
      if (document.documentElement.dataset.perfDegraded === 'true') {
        document.removeEventListener('mousemove', handleMove);
        gsap.set(dashboard, { rotateX: 0, rotateY: 0 });
        return;
      }

      const rect = dashboard.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      const tiltX = capTilt(deltaY * -TILT_MAX_DEG);
      const tiltY = capTilt(deltaX * TILT_MAX_DEG);

      gsap.to(dashboard, {
        rotateX: tiltX,
        rotateY: tiltY,
        duration: DURATION_SNAPPY,
        ease: EASE_SNAPPY,
        transformPerspective: 800,
      });
    };

    document.addEventListener('mousemove', handleMove);
  } catch (err) {
    console.warn('[motion.js] Pointer tilt failed:', err);
  }
}
