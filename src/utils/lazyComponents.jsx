// Lazy loading utilities for components
// This file provides lazy loading for components to improve initial bundle size

import React, { lazy, Suspense } from 'react'

// Loading fallback component
const ComponentLoader = ({ height = '200px', text = 'Loading...' }) => (
  <div 
    className="d-flex align-items-center justify-content-center"
    style={{ 
      height, 
      backgroundColor: '#f8f9fa',
      borderRadius: '0.375rem',
      margin: '1rem 0'
    }}
  >
    <div className="text-center">
      <div 
        className="spinner-border text-primary mb-2" 
        role="status"
        style={{ width: '2rem', height: '2rem' }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="text-muted small">{text}</div>
    </div>
  </div>
)

// Lazy load components that are below the fold
export const LazyBanner = lazy(() => import('../components/Banner'))
export const LazyAbout = lazy(() => import('../components/About'))
export const LazyServices = lazy(() => import('../components/Services'))
export const LazyPricing = lazy(() => import('../components/Pricing'))
export const LazyTeam = lazy(() => import('../components/Team'))
export const LazyTestimonials = lazy(() => import('../components/Testimonials'))
export const LazyAppointmentSection = lazy(() => import('../components/AppointmentSection'))
export const LazyContact = lazy(() => import('../components/Contact'))
export const LazyNewsletter = lazy(() => import('../components/Newsletter'))
export const LazyFooter = lazy(() => import('../components/Footer'))

// Higher-order component for lazy loading with custom fallback
export const withLazyLoading = (Component, fallbackProps = {}) => {
  const LazyComponent = (props) => (
    <Suspense fallback={<ComponentLoader {...fallbackProps} />}>
      <Component {...props} />
    </Suspense>
  )
  
  LazyComponent.displayName = `LazyLoaded(${Component.displayName || Component.name})`
  return LazyComponent
}

// Intersection Observer based lazy loading for sections
export class LazySection {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '50px 0px',
      ...options
    }
    this.observer = null
    this.loadedSections = new Set()
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all sections immediately
      this.loadAllSections()
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.loadedSections.has(entry.target)) {
            this.loadSection(entry.target)
            this.loadedSections.add(entry.target)
            this.observer.unobserve(entry.target)
          }
        })
      },
      this.options
    )

    // Observe all lazy sections
    document.querySelectorAll('[data-lazy-section]').forEach(section => {
      this.observer.observe(section)
    })
  }

  loadSection(section) {
    const sectionName = section.dataset.lazySection
    const event = new CustomEvent('lazyload:section', {
      detail: { section: sectionName, element: section }
    })
    document.dispatchEvent(event)
  }

  loadAllSections() {
    document.querySelectorAll('[data-lazy-section]').forEach(section => {
      this.loadSection(section)
    })
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.loadedSections.clear()
  }
}

// Image lazy loading utility
export class LazyImages {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '50px 0px',
      ...options
    }
    this.observer = null
    this.loadedImages = new Set()
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all images immediately
      this.loadAllImages()
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.loadedImages.has(entry.target)) {
            this.loadImage(entry.target)
            this.loadedImages.add(entry.target)
            this.observer.unobserve(entry.target)
          }
        })
      },
      this.options
    )

    // Observe all lazy images
    document.querySelectorAll('img[data-src], [data-bg-src]').forEach(img => {
      this.observer.observe(img)
    })
  }

  loadImage(img) {
    if (img.dataset.src) {
      // Regular image
      img.src = img.dataset.src
      img.removeAttribute('data-src')
    }
    
    if (img.dataset.bgSrc) {
      // Background image
      img.style.backgroundImage = `url(${img.dataset.bgSrc})`
      img.removeAttribute('data-bg-src')
    }

    // Add loaded class for CSS transitions
    img.classList.add('lazy-loaded')
  }

  loadAllImages() {
    document.querySelectorAll('img[data-src], [data-bg-src]').forEach(img => {
      this.loadImage(img)
    })
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.loadedImages.clear()
  }
}

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    // Preload critical fonts
    {
      href: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'"
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'"
    }
  ]

  criticalResources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.href
    link.as = resource.as
    if (resource.onload) {
      link.onload = new Function(resource.onload)
    }
    document.head.appendChild(link)
  })
}

// Performance monitoring
export const performanceMonitor = {
  marks: new Map(),
  
  mark(name) {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name)
      this.marks.set(name, performance.now())
    }
  },
  
  measure(name, startMark, endMark) {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark)
        const measure = performance.getEntriesByName(name)[0]
        console.log(`⏱️ ${name}: ${measure.duration.toFixed(2)}ms`)
        return measure.duration
      } catch (error) {
        console.warn(`Could not measure ${name}:`, error)
      }
    }
    return null
  },
  
  getMetrics() {
    if (!('performance' in window)) return null
    
    const navigation = performance.getEntriesByType('navigation')[0]
    const paint = performance.getEntriesByType('paint')
    
    return {
      domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
      loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
      marks: Object.fromEntries(this.marks)
    }
  }
}

// Export default lazy loading manager
export default class LazyLoadingManager {
  constructor() {
    this.lazySection = new LazySection()
    this.lazyImages = new LazyImages()
    this.initialized = false
  }

  init() {
    if (this.initialized) return

    // Start performance monitoring
    performanceMonitor.mark('lazy-loading-start')

    // Preload critical resources
    preloadCriticalResources()

    // Initialize lazy loading
    this.lazySection.init()
    this.lazyImages.init()

    this.initialized = true
    performanceMonitor.mark('lazy-loading-end')
    performanceMonitor.measure('lazy-loading-duration', 'lazy-loading-start', 'lazy-loading-end')
  }

  destroy() {
    if (!this.initialized) return

    this.lazySection.destroy()
    this.lazyImages.destroy()
    this.initialized = false
  }
}