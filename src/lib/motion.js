// Motion initialization with GSAP, ScrollTrigger, and Lenis
// Includes performance guard and reduced-motion support

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

let lenisInstance = null
let performanceGuard = {
  blurDisabled: false,
  tiltDisabled: false,
  reducedComplexity: false
}

export function initMotion() {
  if (typeof window === 'undefined') return
  
  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    if (import.meta.env.DEV) {
      console.log('Motion disabled: prefers-reduced-motion')
    }
    return () => {}
  }
  
  try {
    // Register plugin once
    gsap.registerPlugin(ScrollTrigger)
    
    // Initialize Lenis
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })
    
    // Lenis RAF loop
    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    // Connect Lenis to ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
    
    // Update ScrollTrigger on resize
    ScrollTrigger.addEventListener('refresh', () => lenisInstance.resize())
    ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' })
    
    // Performance monitoring
    startPerformanceMonitoring()
    
    // Initialize scroll animations
    initScrollAnimations()
    
    // Return cleanup function
    return () => {
      if (lenisInstance) {
        lenisInstance.destroy()
        lenisInstance = null
      }
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Motion init error:', err)
    }
    return () => {}
  }
}

function startPerformanceMonitoring() {
  if (typeof window === 'undefined' || !window.performance) return
  
  let frameTimes = []
  let lastTime = performance.now()
  
  function checkFrame() {
    const now = performance.now()
    const delta = now - lastTime
    lastTime = now
    
    frameTimes.push(delta)
    
    if (frameTimes.length > 60) {
      const avg = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length
      const longFrames = frameTimes.filter(t => t > 32).length
      
      if (avg > 20 || longFrames > 10) {
        performanceGuard.blurDisabled = true
        performanceGuard.tiltDisabled = true
        
        if (avg > 28) {
          performanceGuard.reducedComplexity = true
        }
        
        if (import.meta.env.DEV) {
          console.warn('Performance guard activated', { avg, longFrames })
        }
        
        return // Stop monitoring
      }
      
      frameTimes = []
    }
    
    requestAnimationFrame(checkFrame)
  }
  
  requestAnimationFrame(checkFrame)
}

function initScrollAnimations() {
  // Hero parallax
  initHeroAnimations()
  
  // Wins stacking cards
  initWinsAnimations()
  
  // Case studies horizontal scroll (desktop only)
  if (window.innerWidth > 820) {
    initCaseStudiesScroll()
  }
  
  // General reveals
  initIntersectionReveals()
  
  // Refresh ScrollTrigger
  ScrollTrigger.refresh()
}

function initHeroAnimations() {
  const hero = document.querySelector('#home')
  if (!hero) return
  
  try {
    const headline = hero.querySelector('.hero-headline')
    const subheadline = hero.querySelector('.hero-subheadline')
    const dashboard = hero.querySelector('.hero-dashboard')
    
    if (headline) {
      gsap.to(headline, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
    
    if (subheadline) {
      gsap.to(subheadline, {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
    
    if (dashboard && !performanceGuard.tiltDisabled) {
      // Pointer tilt (desktop only, non-touch)
      if (window.innerWidth > 820 && !('ontouchstart' in window)) {
        let tiltX = 0
        let tiltY = 0
        
        dashboard.addEventListener('mousemove', (e) => {
          const rect = dashboard.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width
          const y = (e.clientY - rect.top) / rect.height
          
          tiltX = (x - 0.5) * 6
          tiltY = (y - 0.5) * -6
          
          gsap.to(dashboard, {
            rotateY: tiltX,
            rotateX: tiltY,
            duration: 0.5,
            ease: 'power2.out'
          })
        })
        
        dashboard.addEventListener('mouseleave', () => {
          gsap.to(dashboard, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: 'power2.out'
          })
        })
      }
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Hero animations error:', err)
    }
  }
}

function initWinsAnimations() {
  const winsSection = document.querySelector('#wins')
  if (!winsSection) return
  
  try {
    const cards = gsap.utils.toArray('.wins-card')
    if (cards.length === 0) return
    
    cards.forEach((card, i) => {
      const isActive = i === cards.length - 1
      
      ScrollTrigger.create({
        trigger: card,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to(card, {
            scale: 1,
            filter: performanceGuard.blurDisabled ? 'blur(0px)' : 'blur(0px)',
            duration: 0.4,
            ease: 'power2.out'
          })
          
          // Add mint rim
          card.classList.add('active-win')
        },
        onLeave: () => {
          gsap.to(card, {
            scale: 0.985,
            filter: performanceGuard.blurDisabled ? 'blur(0px)' : 'blur(2px)',
            duration: 0.4,
            ease: 'power2.out'
          })
          card.classList.remove('active-win')
        },
        onEnterBack: () => {
          gsap.to(card, {
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.4,
            ease: 'power2.out'
          })
          card.classList.add('active-win')
        },
        onLeaveBack: () => {
          gsap.to(card, {
            scale: 0.985,
            filter: performanceGuard.blurDisabled ? 'blur(0px)' : 'blur(2px)',
            duration: 0.4,
            ease: 'power2.out'
          })
          card.classList.remove('active-win')
        }
      })
    })
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Wins animations error:', err)
    }
  }
}

function initCaseStudiesScroll() {
  const section = document.querySelector('.case-studies-scroll-wrapper')
  if (!section) return
  
  try {
    const scrollContent = section.querySelector('.case-studies-scroll-content')
    if (!scrollContent) return
    
    const cards = scrollContent.querySelectorAll('.case-study-card')
    if (cards.length === 0) return
    
    // Calculate scroll distance
    const scrollWidth = scrollContent.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollDistance = scrollWidth - viewportWidth
    
    if (scrollDistance <= 0) return
    
    // Pin and scroll horizontally
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${scrollDistance + viewportWidth * 0.5}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        gsap.to(scrollContent, {
          x: -scrollDistance * self.progress,
          duration: 0,
          ease: 'none'
        })
        
        // Update progress bar
        const progressBar = section.querySelector('.scroll-progress-bar')
        if (progressBar) {
          gsap.to(progressBar, {
            scaleX: self.progress,
            duration: 0,
            ease: 'none'
          })
        }
      }
    })
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Case studies scroll error:', err)
    }
  }
}

function initIntersectionReveals() {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return
  
  try {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
          })
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 12 })
      observer.observe(el)
    })
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Intersection reveals error:', err)
    }
  }
}

// Smooth scroll to anchor
export function scrollToAnchor(id, offset = 80) {
  if (!lenisInstance) {
    // Fallback to native scroll
    const el = document.querySelector(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    return
  }
  
  try {
    lenisInstance.scrollTo(id, {
      offset: -offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Scroll to anchor error:', err)
    }
  }
}

export { performanceGuard }
