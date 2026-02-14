# Motion Bible — Ahmed Musaad Portfolio

> This document defines ALL motion rules. Code in `motionBible.js` enforces them at runtime.
> Written BEFORE implementation. Every animation must comply.

---

## 1. Core Philosophy

- **Meaning over decoration**: Every animation must communicate information (hierarchy, state change, spatial relationship). No motion for motion's sake.
- **Render-first**: Content is visible in HTML before JS runs. JS only enhances.
- **Cheap transforms only**: `translate`, `scale`, `rotate`, `opacity`. Never animate `width`, `height`, `margin`, `padding`, `top`, `left`, `box-shadow`.
- **No jank**: 60fps on mobile is non-negotiable. Degrade gracefully.

---

## 2. Allowed CSS Properties (Animation/Transition)

| Allowed           | FORBIDDEN                                 |
|-------------------|-------------------------------------------|
| `transform`       | `width`, `height`                         |
| `opacity`         | `margin`, `padding`                       |
| `clip-path`       | `top`, `left`, `right`, `bottom`          |
| `filter` (capped) | `box-shadow`                              |
| `background-position` (ambient only) | `border-radius` (animation) |

### Filter/Blur Caps
- Desktop: `blur(2px)` max during transitions, 0 at rest
- Mobile (≤820px): `blur(0)` always
- Perf-degraded: `blur(0)` always

---

## 3. Timing Rules

### Editorial (sections, reveals, hero)
- Duration: 600–900ms
- Easing: `power3.out` or custom cubic-bezier
- Stagger: 80–120ms between items

### Snappy (UI, tabs, toggles, hover)
- Duration: 200–350ms
- Easing: `power2.out`
- No stagger needed

### Scrub (scroll-tied)
- Scrub value: `1` (direct) for pinned scenes
- Scrub value: `0.8` for parallax
- Scrub value: `true` for progress bars

---

## 4. Scroll Rules

### Pinned Scenes (Desktop ≥ 821px ONLY)
- **Wins stack**: 4 cards pin and stack. Scale settle. Blur 2→0 (desktop only).
- **Case studies rail**: Horizontal scroll pinned. Progress bar tracks position.

### Mobile (≤ 820px)
- NO pinned scenes
- Wins: vertical stack, simple fade-up reveals
- Case studies: vertical scroll, no horizontal rail
- Simplified all scroll-tied animations

### ScrollTrigger Conventions
- All triggers use `#mainContent` or section IDs as triggers
- `start: "top 80%"` for reveals
- `start: "top top"` for pins
- All ScrollTrigger instances tracked for cleanup

---

## 5. Fallback Rules

### If GSAP/Lenis fails:
- UI renders fully (content in HTML)
- WhatsApp buttons work (no dependency on motion)
- Navigation works via native anchor behavior
- ChapterHUD hides or uses IntersectionObserver fallback

### If images fail:
- Skeleton shimmer + path label shown
- Lightbox shows placeholder, never crashes
- No `onerror` throws

---

## 6. Reduced Motion Policy (`prefers-reduced-motion: reduce`)

Disable ALL of the following:
- [ ] Lenis smooth scroll → native scroll
- [ ] ALL GSAP ScrollTrigger animations
- [ ] IntersectionObserver reveal animations
- [ ] Ambient CSS keyframe animations (orbs, grain movement)
- [ ] Parallax effects
- [ ] Pointer tilt effects
- [ ] Smooth anchor scrolling → native jump
- [ ] Intro reveal animation → content immediately visible
- [ ] ChapterHUD progress animation → static or hidden

Keep ENABLED:
- [x] Tab switching (instant)
- [x] Lightbox open/close (instant, no transition)
- [x] Mobile nav open/close (instant)
- [x] Hover state changes (color only, no transform)
- [x] Focus outlines

---

## 7. Performance Guard

Monitor frame time during first 1–2s of scroll:
- If average frame > 20ms OR 3+ frames > 33ms:
  - Disable `filter: blur()`
  - Disable pointer tilt
  - Reduce scrub smoothing to direct (scrub: true)
  - Reduce ambient orb count/opacity
  - Switch horizontal pinned case rail to vertical fallback
- Set `document.documentElement.dataset.perfDegraded = "true"` for CSS hooks

---

## 8. Intro Reveal

- Once per session (`sessionStorage.introPlayed`)
- Max duration: 700–900ms total
- Sequence: eyebrow fade+rise (200ms) → headline stagger (400ms) → card settle (300ms)
- NO heavy blur, NO mask animations
- Content visible immediately; animation is enhancement only

---

## 9. Testing Checklist

- [ ] `npm run dev` → content visible before JS hydrates
- [ ] Kill JS → content still readable, WhatsApp links work
- [ ] `prefers-reduced-motion` → no animation, no scroll hijack
- [ ] Resize 820px boundary → pinned scenes toggle correctly
- [ ] Missing images → skeleton + label, no console errors
- [ ] AR/EN toggle → motion doesn't break, RTL layout holds
- [ ] Throttle CPU 4x → perf guard triggers, no jank
- [ ] Tab through entire page → focus visible, logical order
- [ ] Lightbox → focus trap works, ESC closes, swipe works on mobile
- [ ] Hot reload (Vite HMR) → no duplicate ScrollTrigger registrations

---

## 10. Token Reference

All numeric values come from `motionTokens.js`. NO magic numbers in animation code.

| Token | Value | Usage |
|-------|-------|-------|
| `DURATION_EDITORIAL` | 800 | Section reveals |
| `DURATION_SNAPPY` | 250 | UI interactions |
| `EASE_EDITORIAL` | "power3.out" | Section reveals |
| `EASE_SNAPPY` | "power2.out" | UI interactions |
| `STAGGER_DEFAULT` | 0.1 | Card staggers |
| `STAGGER_TIGHT` | 0.06 | Fast sequences |
| `BLUR_MAX_DESKTOP` | 2 | px, desktop only |
| `BLUR_MOBILE` | 0 | Always 0 on mobile |
| `SCRUB_DIRECT` | 1 | Pinned scenes |
| `SCRUB_SMOOTH` | 0.8 | Parallax |
| `REVEAL_START` | "top 80%" | IO/ST trigger |
| `PIN_START` | "top top" | Pinned scenes |
| `BREAKPOINT_MOBILE` | 820 | px |
| `TILT_MAX_DEG` | 6 | Pointer tilt cap |
| `INTRO_TOTAL_MS` | 800 | Intro reveal |
| `PERF_FRAME_BUDGET` | 20 | ms per frame |
| `PERF_LONG_FRAME` | 33 | ms threshold |
| `ORB_DURATION_MIN` | 14 | seconds |
| `ORB_DURATION_MAX` | 22 | seconds |
