/**
 * motionBible.js — Runtime enforcement of Motion Bible rules.
 * Validates animation configs before they run.
 * Logs warnings in DEV, silently caps in PROD.
 */

import {
  BLUR_MAX_DESKTOP,
  BLUR_MOBILE,
  BREAKPOINT_MOBILE,
  TILT_MAX_DEG,
  PERF_FRAME_BUDGET,
  PERF_LONG_FRAME,
  PERF_SAMPLE_DURATION,
  PERF_MAX_LONG_FRAMES,
  prefersReducedMotion,
  isMobile,
} from './motionTokens.js';

const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV;

// ─── Forbidden animated properties ──────────────────
const FORBIDDEN_PROPS = [
  'width', 'height', 'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'top', 'left', 'right', 'bottom', 'boxShadow', 'borderRadius',
];

/**
 * Validate a GSAP tween config object.
 * Returns a sanitised copy. Logs warnings in DEV.
 */
export function validateTween(config) {
  if (!config || typeof config !== 'object') return config;

  const clean = { ...config };

  // Block forbidden props
  for (const prop of FORBIDDEN_PROPS) {
    if (prop in clean) {
      if (isDev) console.warn(`[MotionBible] Forbidden property "${prop}" removed from tween.`);
      delete clean[prop];
    }
  }

  // Cap blur
  if (clean.filter && typeof clean.filter === 'string') {
    const blurMatch = clean.filter.match(/blur\((\d+(?:\.\d+)?)px\)/);
    if (blurMatch) {
      const val = parseFloat(blurMatch[1]);
      const cap = isMobile() ? BLUR_MOBILE : BLUR_MAX_DESKTOP;
      if (val > cap) {
        clean.filter = clean.filter.replace(
          /blur\(\d+(?:\.\d+)?px\)/,
          `blur(${cap}px)`
        );
        if (isDev) console.warn(`[MotionBible] Blur capped to ${cap}px.`);
      }
    }
  }

  return clean;
}

/**
 * Check if motion should be allowed at all.
 */
export function isMotionAllowed() {
  return !prefersReducedMotion();
}

/**
 * Cap tilt degrees.
 */
export function capTilt(deg) {
  return Math.min(Math.abs(deg), TILT_MAX_DEG) * Math.sign(deg);
}

/**
 * Performance monitor.
 * Calls onDegrade() if frame budget exceeded.
 */
export function monitorPerformance(onDegrade) {
  if (prefersReducedMotion()) {
    onDegrade();
    return;
  }

  const frames = [];
  let lastTime = performance.now();
  let rafId = null;
  const startTime = lastTime;

  function measure(now) {
    const delta = now - lastTime;
    lastTime = now;
    frames.push(delta);

    if (now - startTime < PERF_SAMPLE_DURATION) {
      rafId = requestAnimationFrame(measure);
    } else {
      // Evaluate
      const avg = frames.reduce((a, b) => a + b, 0) / frames.length;
      const longFrames = frames.filter(f => f > PERF_LONG_FRAME).length;

      if (avg > PERF_FRAME_BUDGET || longFrames >= PERF_MAX_LONG_FRAMES) {
        if (isDev) console.warn(`[MotionBible] Perf degraded: avg=${avg.toFixed(1)}ms, longFrames=${longFrames}`);
        onDegrade();
      }
    }
  }

  rafId = requestAnimationFrame(measure);

  // Return cleanup
  return () => {
    if (rafId) cancelAnimationFrame(rafId);
  };
}

/**
 * Get blur value based on current state.
 */
export function getBlurCap() {
  if (isMobile() || document.documentElement.dataset.perfDegraded === 'true') {
    return BLUR_MOBILE;
  }
  return BLUR_MAX_DESKTOP;
}

/**
 * Should pin scenes (desktop only, no reduced motion, no perf degraded).
 */
export function shouldPin() {
  return !isMobile() && isMotionAllowed() && document.documentElement.dataset.perfDegraded !== 'true';
}
