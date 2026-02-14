/**
 * motionTokens.js — Single source of truth for ALL motion values.
 * NO magic numbers anywhere else. Import from here.
 */

// ─── Durations (ms) ─────────────────────────────────
export const DURATION_EDITORIAL = 0.8;   // seconds for GSAP
export const DURATION_SNAPPY    = 0.25;
export const DURATION_INTRO     = 0.8;
export const DURATION_SETTLE    = 0.6;

// ─── Easings ─────────────────────────────────────────
export const EASE_EDITORIAL = 'power3.out';
export const EASE_SNAPPY    = 'power2.out';
export const EASE_BOUNCE    = 'back.out(1.2)';
export const EASE_SMOOTH    = 'power2.inOut';

// ─── Stagger (seconds) ──────────────────────────────
export const STAGGER_DEFAULT = 0.1;
export const STAGGER_TIGHT   = 0.06;
export const STAGGER_WIDE    = 0.15;

// ─── Distances (px) ─────────────────────────────────
export const REVEAL_Y         = 40;
export const REVEAL_Y_SMALL   = 20;
export const PARALLAX_Y       = 30;
export const CARD_SETTLE_Y    = 60;
export const CONTACT_FLY_Y    = 50;

// ─── Scale ──────────────────────────────────────────
export const CARD_SCALE_START = 0.92;
export const CARD_SCALE_END   = 1;

// ─── Blur (px) ──────────────────────────────────────
export const BLUR_MAX_DESKTOP = 2;
export const BLUR_MOBILE      = 0;

// ─── Scrub ──────────────────────────────────────────
export const SCRUB_DIRECT     = 1;
export const SCRUB_SMOOTH     = 0.8;
export const SCRUB_PROGRESS   = true;

// ─── ScrollTrigger positions ────────────────────────
export const REVEAL_START     = 'top 85%';
export const REVEAL_END       = 'top 20%';
export const PIN_START        = 'top top';

// ─── Breakpoints ────────────────────────────────────
export const BREAKPOINT_MOBILE = 820;
export const BREAKPOINT_SM     = 480;

// ─── Tilt ───────────────────────────────────────────
export const TILT_MAX_DEG = 6;

// ─── Performance thresholds ─────────────────────────
export const PERF_FRAME_BUDGET     = 20;  // ms
export const PERF_LONG_FRAME       = 33;  // ms
export const PERF_SAMPLE_DURATION  = 2000; // ms (2s)
export const PERF_MAX_LONG_FRAMES  = 3;

// ─── Ambient ────────────────────────────────────────
export const ORB_DURATION_MIN = 14; // seconds
export const ORB_DURATION_MAX = 22;
export const ORB_OPACITY      = 0.15;

// ─── Intro reveal ───────────────────────────────────
export const INTRO_EYEBROW_DELAY  = 0;
export const INTRO_EYEBROW_DUR    = 0.3;
export const INTRO_HEADLINE_DELAY = 0.15;
export const INTRO_HEADLINE_DUR   = 0.5;
export const INTRO_CARD_DELAY     = 0.35;
export const INTRO_CARD_DUR       = 0.45;

// ─── Chapter thresholds ─────────────────────────────
export const CHAPTERS = [
  { id: '01', key: 'chapterSignal', section: '#home' },
  { id: '02', key: 'chapterProof',  section: '#wins' },
  { id: '03', key: 'chapterSystem', section: '#services' },
  { id: '04', key: 'chapterCases',  section: '#case-studies' },
  { id: '05', key: 'chapterTrust',  section: '#proof-library' },
  { id: '06', key: 'chapterBrief',  section: '#contact' },
];

// ─── Helper: is mobile ──────────────────────────────
export const isMobile = () => window.innerWidth <= BREAKPOINT_MOBILE;

// ─── Helper: prefers reduced motion ─────────────────
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
