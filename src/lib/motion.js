import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

let lenis = null
let scrollTriggerInitialized = false
let performanceGuardActive = false

// Performance monitoring
let frameCount = 0
let lastTime = performance.now()
let frameTimes = []
const MAX_FRAME_TIMES = 60 // Track last 60 frames
const PERFORMANCE_THRESHOLD = 20 // 20ms per frame (50fps)

const checkPerformance = () => {
  const currentTime = performance.now()
  const frameTime = currentTime - lastTime
  frameTimes.push(frameTime)
  
  if (frameTimes.length > MAX_FRAME_TIMES) {
    frameTimes.shift()
  }
  
  const avgFrameTime = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length
  
  // If average frame time is too high, enable performance guard
  if (avgFrameTime > PERFORMANCE_THRESHOLD && !performanceGuardActive) {
    performanceGuardActive = true
    console.log('🐌 Performance guard activated - disabling heavy animations')
    disableHeavyAnimations()
  }
  
  lastTime = currentTime
  frameCount++
}

const disableHeavyAnimations = () => {
  // Disable blur effects
  document.documentElement.style.setProperty('--blur-enabled', '0')
  
  // Reduce glow intensity
  document.documentElement.style.setProperty('--glow-intensity', '0.3')
  
  // Disable pointer tilt on mobile
  if (window.innerWidth <= 820) {
    document.body.classList.add('performance-mode')
  }
  
  // Reduce ScrollTrigger scrub smoothing
  if (scrollTriggerInitialized) {
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.scrub && typeof trigger.vars.scrub === 'number') {
        trigger.vars.scrub = Math.min(trigger.vars.scrub, 0.5)
      }
    })
  }
}

export const initMotion = () => {
  if (typeof window === 'undefined') return
  
  try {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      console.log('⚡ Reduced motion detected - disabling animations')
      return
    }
    
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger)
    scrollTriggerInitialized = true
    
    // Initialize Lenis
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    
    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, 0, 0)
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      pinType: document.querySelector('[data-pin-type="transform"]').style.transform ? 'transform' : 'fixed'
    })
    
    // RAF loop
    const raf = (time) => {
      lenis.raf(time)
      checkPerformance()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    console.log('✅ Motion system initialized')
    
  } catch (error) {
    console.error('❌ Motion initialization failed:', error)
  }
}

export const cleanupMotion = () => {
  try {
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
    
    if (scrollTriggerInitialized) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      gsap.killTweensOf('*')
      scrollTriggerInitialized = false
    }
    
    console.log('🧹 Motion system cleaned up')
  } catch (error) {
    console.error('❌ Motion cleanup failed:', error)
  }
}

export const createHeroParallax = () => {
  if (!scrollTriggerInitialized) return
  
  try {
    const tl = gsap.timeline()
    
    // Hero text parallax
    tl.from('.hero-headline', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .from('.hero-subheadline', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.hero-actions', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.dashboard-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    
    return tl
  } catch (error) {
    console.error('❌ Hero parallax failed:', error)
    return null
  }
}

export const createWinsPin = () => {
  if (!scrollTriggerInitialized) return
  
  try {
    const wins = document.querySelectorAll('.win-card')
    
    wins.forEach((win, index) => {
      ScrollTrigger.create({
        trigger: win,
        start: 'top 80%',
        end: 'bottom 20%',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onEnter: () => {
          gsap.to(win, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
          })
        },
        onLeave: () => {
          gsap.to(win, {
            scale: 0.95,
            opacity: 0.7,
            duration: 0.6,
            ease: 'power2.out'
          })
        }
      })
    })
    
    console.log('✅ Wins pin animation created')
  } catch (error) {
    console.error('❌ Wins pin failed:', error)
  }
}

export const createCaseStudiesScroll = () => {
  if (!scrollTriggerInitialized) return
  
  try {
    const container = document.querySelector('.case-studies-container')
    const cards = document.querySelectorAll('.case-study-card')
    
    if (window.innerWidth > 820 && container && cards.length > 0) {
      const tl = gsap.timeline()
      
      tl.to('.case-study-card', {
        xPercent: -100 * (cards.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=300%',
          onUpdate: (self) => {
            const progress = self.progress
            document.querySelector('.progress-bar').style.width = `${progress * 100}%`
          }
        }
      })
      
      console.log('✅ Case studies scroll animation created')
    }
  } catch (error) {
    console.error('❌ Case studies scroll failed:', error)
  }
}

export const createFadeInAnimations = () => {
  if (!scrollTriggerInitialized) return
  
  try {
    const fadeElements = document.querySelectorAll('.fade-in')
    
    fadeElements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      })
    })
    
    console.log('✅ Fade in animations created')
  } catch (error) {
    console.error('❌ Fade in animations failed:', error)
  }
}

export const createStaggerAnimations = () => {
  if (!scrollTriggerInitialized) return
  
  try {
    const staggerContainers = document.querySelectorAll('.stagger-container')
    
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.stagger-item')
      
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })
    
    console.log('✅ Stagger animations created')
  } catch (error) {
    console.error('❌ Stagger animations failed:', error)
  }
}

export default {
  initMotion,
  cleanupMotion,
  createHeroParallax,
  createWinsPin,
  createCaseStudiesScroll,
  createFadeInAnimations,
  createStaggerAnimations
}