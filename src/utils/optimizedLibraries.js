// Optimized Libraries Integration - jQuery-free implementation
// Replaces the heavy jQuery-based external libraries with lightweight alternatives

import { format, parseISO } from 'date-fns'

// Constants for configuration
const SCROLL_THROTTLE_DELAY = 16 // 60fps
const ANIMATION_DELAY = 100
const CAROUSEL_AUTO_PLAY_DELAY = 5000

// Throttle utility for scroll events
const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Intersection Observer for scroll animations (replaces WOW.js)
class ScrollAnimations {
  constructor() {
    this.observer = null
    this.animatedElements = new Set()
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver not supported, animations disabled')
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
            this.animateElement(entry.target)
            this.animatedElements.add(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all elements with animation classes
    this.observeAnimationElements()
  }

  observeAnimationElements() {
    const animationSelectors = [
      '.wow',
      '.animated',
      '.fadeIn',
      '.slideInDown',
      '.zoomIn',
      '.fadeInUp',
      '.slideInLeft',
      '.slideInRight'
    ]

    animationSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        if (this.observer) {
          this.observer.observe(element)
        }
      })
    })
  }

  animateElement(element) {
    // Add animation classes based on data attributes or existing classes
    const animationClass = element.dataset.animation || 'fadeIn'
    const delay = element.dataset.delay || 0

    setTimeout(() => {
      element.classList.add('animate__animated', `animate__${animationClass}`)
      element.style.visibility = 'visible'
      element.style.opacity = '1'
    }, delay)
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.animatedElements.clear()
  }
}

// Sticky navbar functionality (replaces jQuery)
class StickyNavbar {
  constructor() {
    this.navbar = null
    this.scrollHandler = null
    this.isSticky = false
  }

  init() {
    this.navbar = document.querySelector('.navbar')
    if (!this.navbar) return

    this.scrollHandler = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      if (scrollTop > 100 && !this.isSticky) {
        this.navbar.classList.add('navbar-sticky')
        this.isSticky = true
      } else if (scrollTop <= 100 && this.isSticky) {
        this.navbar.classList.remove('navbar-sticky')
        this.isSticky = false
      }
    }, SCROLL_THROTTLE_DELAY)

    window.addEventListener('scroll', this.scrollHandler, { passive: true })
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
      this.scrollHandler = null
    }
  }
}

// Dropdown hover functionality (replaces jQuery)
class DropdownHover {
  constructor() {
    this.dropdowns = []
  }

  init() {
    const dropdownElements = document.querySelectorAll('.dropdown')
    
    dropdownElements.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle')
      const menu = dropdown.querySelector('.dropdown-menu')
      
      if (toggle && menu) {
        this.setupDropdown(dropdown, toggle, menu)
      }
    })
  }

  setupDropdown(dropdown, toggle, menu) {
    let hoverTimeout

    const showDropdown = () => {
      clearTimeout(hoverTimeout)
      menu.classList.add('show')
      toggle.setAttribute('aria-expanded', 'true')
    }

    const hideDropdown = () => {
      hoverTimeout = setTimeout(() => {
        menu.classList.remove('show')
        toggle.setAttribute('aria-expanded', 'false')
      }, 150)
    }

    // Desktop hover behavior
    if (window.innerWidth >= 992) {
      dropdown.addEventListener('mouseenter', showDropdown)
      dropdown.addEventListener('mouseleave', hideDropdown)
    }

    // Mobile click behavior
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth < 992) {
        e.preventDefault()
        menu.classList.toggle('show')
        const isExpanded = menu.classList.contains('show')
        toggle.setAttribute('aria-expanded', isExpanded)
      }
    })

    this.dropdowns.push({ dropdown, toggle, menu })
  }

  destroy() {
    this.dropdowns.forEach(({ dropdown, toggle, menu }) => {
      // Remove event listeners
      dropdown.removeEventListener('mouseenter', () => {})
      dropdown.removeEventListener('mouseleave', () => {})
      toggle.removeEventListener('click', () => {})
    })
    this.dropdowns = []
  }
}

// Date picker functionality (replaces Tempus Dominus)
class DatePicker {
  constructor() {
    this.pickers = []
  }

  init() {
    const dateInputs = document.querySelectorAll('input[type="date"], .date-picker')
    
    dateInputs.forEach(input => {
      this.setupDatePicker(input)
    })
  }

  setupDatePicker(input) {
    // Use native HTML5 date picker or react-datepicker
    if (input.type !== 'date') {
      input.type = 'date'
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0]
    input.min = today

    // Format date display
    input.addEventListener('change', (e) => {
      const date = new Date(e.target.value)
      if (date instanceof Date && !isNaN(date)) {
        const formattedDate = format(date, 'MMM dd, yyyy')
        input.setAttribute('data-formatted', formattedDate)
      }
    })

    this.pickers.push(input)
  }

  destroy() {
    this.pickers.forEach(picker => {
      picker.removeEventListener('change', () => {})
    })
    this.pickers = []
  }
}

// Back to top functionality (replaces jQuery)
class BackToTop {
  constructor() {
    this.button = null
    this.scrollHandler = null
    this.isVisible = false
  }

  init() {
    this.button = document.querySelector('.back-to-top')
    if (!this.button) return

    this.scrollHandler = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      if (scrollTop > 300 && !this.isVisible) {
        this.button.style.display = 'block'
        this.button.classList.add('show')
        this.isVisible = true
      } else if (scrollTop <= 300 && this.isVisible) {
        this.button.classList.remove('show')
        setTimeout(() => {
          if (!this.isVisible) {
            this.button.style.display = 'none'
          }
        }, 300)
        this.isVisible = false
      }
    }, SCROLL_THROTTLE_DELAY)

    window.addEventListener('scroll', this.scrollHandler, { passive: true })

    // Click handler
    this.button.addEventListener('click', (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }

  destroy() {
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler)
      this.scrollHandler = null
    }
  }
}

// Main library manager
class OptimizedLibraries {
  constructor() {
    this.scrollAnimations = new ScrollAnimations()
    this.stickyNavbar = new StickyNavbar()
    this.dropdownHover = new DropdownHover()
    this.datePicker = new DatePicker()
    this.backToTop = new BackToTop()
    this.initialized = false
  }

  init() {
    if (this.initialized) return

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeAll())
    } else {
      this.initializeAll()
    }
  }

  initializeAll() {
    try {
      console.log('🚀 Initializing optimized libraries...')
      
      // Initialize all components
      this.scrollAnimations.init()
      this.stickyNavbar.init()
      this.dropdownHover.init()
      this.datePicker.init()
      this.backToTop.init()

      this.initialized = true
      console.log('✅ All optimized libraries initialized successfully')
    } catch (error) {
      console.error('❌ Error initializing libraries:', error)
    }
  }

  destroy() {
    if (!this.initialized) return

    try {
      this.scrollAnimations.destroy()
      this.stickyNavbar.destroy()
      this.dropdownHover.destroy()
      this.datePicker.destroy()
      this.backToTop.destroy()

      this.initialized = false
      console.log('🧹 Optimized libraries cleaned up')
    } catch (error) {
      console.error('❌ Error cleaning up libraries:', error)
    }
  }

  // Re-initialize specific components (useful for dynamic content)
  reinitialize(component) {
    if (!this.initialized) return

    switch (component) {
      case 'animations':
        this.scrollAnimations.observeAnimationElements()
        break
      case 'dropdowns':
        this.dropdownHover.init()
        break
      case 'datePickers':
        this.datePicker.init()
        break
      default:
        console.warn(`Unknown component: ${component}`)
    }
  }
}

// Create singleton instance
const optimizedLibraries = new OptimizedLibraries()

// Export functions for compatibility with existing code
export const initializeAllLibraries = () => {
  optimizedLibraries.init()
}

export const cleanupLibraries = () => {
  optimizedLibraries.destroy()
}

export const reinitializeComponent = (component) => {
  optimizedLibraries.reinitialize(component)
}

// Export individual classes for advanced usage
export {
  ScrollAnimations,
  StickyNavbar,
  DropdownHover,
  DatePicker,
  BackToTop,
  throttle
}

// Export the main instance
export default optimizedLibraries