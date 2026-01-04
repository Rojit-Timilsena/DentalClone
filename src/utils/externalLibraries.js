// External Libraries Integration - Optimized
import $ from 'jquery'
window.$ = window.jQuery = $

import 'wowjs/css/libs/animate.css'
import moment from 'moment'
import 'moment-timezone'
import 'jquery.easing'

// Lazy load external scripts for better performance
const loadScript = (src, onLoad) => {
  const existingScript = document.querySelector(`script[src="${src}"]`)
  if (existingScript) {
    if (onLoad) onLoad()
    return
  }
  
  const script = document.createElement('script')
  script.src = src
  script.async = true
  if (onLoad) script.onload = onLoad
  document.head.appendChild(script)
}

const loadStylesheet = (href) => {
  const existingLink = document.querySelector(`link[href="${href}"]`)
  if (existingLink) return
  
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

// Optimized WOW.js loader
const loadWOWjs = () => {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', () => {
    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null,
        resetAnimation: true
      })
      wow.init()
    }
  })
}

// Optimized Waypoints loader
const loadWaypoints = () => {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js')
}

// Optimized Tempus Dominus loader
const loadTempusDominus = () => {
  loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/css/tempusdominus-bootstrap-4.min.css')
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/js/tempusdominus-bootstrap-4.min.js')
}

// Initialize WOW.js animations
export const initializeWOW = () => {
  loadWOWjs()
}

// Initialize back to top functionality
export const initializeBackToTop = () => {
  // Handled by React BackToTop component
}

// Initialize pricing carousel
export const initializePricingCarousel = () => {
  // Uses Swiper React component
}

// Initialize testimonial carousel
export const initializeTestimonialCarousel = () => {
  // Uses React-based carousel
}

// Optimized Tempus Dominus initialization
export const initializeTempusDominus = () => {
  loadTempusDominus()
  
  // Use requestIdleCallback for non-critical initialization
  const initDatePickers = () => {
    try {
      if (typeof $.fn.datetimepicker !== 'undefined') {
        const commonConfig = {
          format: 'L',
          defaultDate: false,
          useCurrent: false,
          collapse: true,
          locale: moment.locale(),
          debug: false
        }

        $('#date, #date1').each(function() {
          if ($(this).length) {
            $(this).datetimepicker(commonConfig)
          }
        })

        if ($('#time1').length) {
          $('#time1').datetimepicker({
            ...commonConfig,
            format: 'LT',
            viewMode: 'times'
          })
        }
      } else {
        // Fallback to native HTML5 inputs
        $('#date input, #date1 input').attr('type', 'date')
        $('#time1 input').attr('type', 'time')
      }
    } catch (error) {
      // Fallback to native HTML5 inputs
      $('#date input, #date1 input').attr('type', 'date')
      $('#time1 input').attr('type', 'time')
    }
  }

  if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
      setTimeout(initDatePickers, 1000)
    })
  } else {
    setTimeout(initDatePickers, 1000)
  }
}

// Optimized main template JS initialization
export const initializeMainTemplateJS = () => {
  let ticking = false
  
  // Throttled scroll handler for navbar
  const handleNavbarScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = $(window).scrollTop()
        const navbar = $('.navbar')
        
        if (scrollTop > 45) {
          navbar.addClass('sticky-top shadow-sm')
        } else {
          navbar.removeClass('sticky-top shadow-sm')
        }
        ticking = false
      })
      ticking = true
    }
  }

  $(window).on('scroll', handleNavbarScroll, { passive: true })
  
  // Optimized dropdown hover
  const $dropdown = $('.dropdown')
  const showClass = 'show'
  
  const handleDropdownHover = () => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      $dropdown.hover(
        function() {
          const $this = $(this)
          $this.addClass(showClass)
          $this.find('.dropdown-toggle').attr('aria-expanded', 'true')
          $this.find('.dropdown-menu').addClass(showClass)
        },
        function() {
          const $this = $(this)
          $this.removeClass(showClass)
          $this.find('.dropdown-toggle').attr('aria-expanded', 'false')
          $this.find('.dropdown-menu').removeClass(showClass)
        }
      )
    } else {
      $dropdown.off('mouseenter mouseleave')
    }
  }

  $(window).on('load resize', handleDropdownHover)
  handleDropdownHover() // Initialize immediately
}

// Initialize all external libraries with performance optimization
export const initializeAllLibraries = () => {
  $(document).ready(() => {
    // Use requestIdleCallback for non-critical initializations
    const initNonCritical = () => {
      loadWaypoints()
      initializeWOW()
      initializeTempusDominus()
    }

    // Initialize critical functionality immediately
    initializeMainTemplateJS()
    
    // Defer non-critical initializations
    if (window.requestIdleCallback) {
      window.requestIdleCallback(initNonCritical)
    } else {
      setTimeout(initNonCritical, 100)
    }
  })
}

// Optimized cleanup function
export const cleanupLibraries = () => {
  try {
    // Clean up Tempus Dominus instances
    $('#date, #date1, #time1').each(function() {
      if ($(this).data('DateTimePicker')) {
        $(this).datetimepicker('destroy')
      }
    })
    
    // Remove event listeners
    $(window).off('scroll resize')
    $('.dropdown').off('mouseenter mouseleave')
  } catch (error) {
    // Silent cleanup failure
  }
}