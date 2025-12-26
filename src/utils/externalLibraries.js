// External Libraries Integration - Exact Replica
// This file integrates all external JavaScript libraries exactly as in the original HTML

// Import jQuery and make it available globally
import $ from 'jquery'
window.$ = window.jQuery = $

// Import Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'owl.carousel'

// Import WOW.js - Load from CDN for compatibility
// import { WOW } from 'wowjs/dist/wow.js'
import 'wowjs/css/libs/animate.css'

// Import Moment.js
import moment from 'moment'
import 'moment-timezone'

// Import Waypoints and Easing
import 'waypoints/lib/jquery.waypoints.min.js'
import 'jquery.easing'

// Load Tempus Dominus CSS and JS exactly as original
const loadTempusDominus = () => {
  // Create and append CSS link
  const tempusCss = document.createElement('link')
  tempusCss.rel = 'stylesheet'
  tempusCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/css/tempusdominus-bootstrap-4.min.css'
  document.head.appendChild(tempusCss)

  // Load Tempus Dominus JS
  const tempusScript = document.createElement('script')
  tempusScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/js/tempusdominus-bootstrap-4.min.js'
  tempusScript.onload = () => {
    console.log('✅ Tempus Dominus loaded from CDN')
  }
  document.head.appendChild(tempusScript)
}

// Load WOW.js from CDN exactly as original
const loadWOWjs = () => {
  const wowScript = document.createElement('script')
  wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
  wowScript.onload = () => {
    console.log('✅ WOW.js loaded from CDN')
    // Initialize WOW after loading
    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
          // Callback after animation
        },
        scrollContainer: null,
        resetAnimation: true
      })
      wow.init()
      console.log('✅ WOW.js initialized with exact settings')
    }
  }
  document.head.appendChild(wowScript)
}

// Initialize WOW.js animations with exact delay timings
export const initializeWOW = () => {
  // Load WOW.js from CDN for exact replica
  loadWOWjs()
}

// Initialize back to top functionality exactly as original
export const initializeBackToTop = () => {
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow')
    } else {
      $('.back-to-top').fadeOut('slow')
    }
  })
  
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo')
    return false
  })
}

// Initialize Owl Carousel for pricing section exactly as original
export const initializePricingCarousel = () => {
  if ($('.price-carousel').length) {
    $('.price-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: false,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    })
  }
}

// Initialize Owl Carousel for testimonials section exactly as original
export const initializeTestimonialCarousel = () => {
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    })
  }
}

// Initialize Tempus Dominus date/time pickers exactly as original
export const initializeTempusDominus = () => {
  // Load Tempus Dominus from CDN for exact replica
  loadTempusDominus()
  
  // Initialize after a delay to ensure library is loaded
  setTimeout(() => {
    try {
      // Check if Tempus Dominus is available
      if (typeof $.fn.datetimepicker !== 'undefined') {
        // Initialize date pickers exactly as original
        if ($('#date').length) {
          $('#date').datetimepicker({
            format: 'L',
            defaultDate: false,
            disabledDates: false,
            daysOfWeekDisabled: false,
            calendarWeeks: false,
            viewMode: 'days',
            toolbarPlacement: 'default',
            buttons: {
              showToday: true,
              showClear: true,
              showClose: true
            },
            widgetPositioning: {
              horizontal: 'auto',
              vertical: 'auto'
            },
            useCurrent: false,
            collapse: true,
            locale: moment.locale(),
            debug: false
          })
        }

        if ($('#date1').length) {
          $('#date1').datetimepicker({
            format: 'L',
            defaultDate: false,
            disabledDates: false,
            daysOfWeekDisabled: false,
            calendarWeeks: false,
            viewMode: 'days',
            toolbarPlacement: 'default',
            buttons: {
              showToday: true,
              showClear: true,
              showClose: true
            },
            widgetPositioning: {
              horizontal: 'auto',
              vertical: 'auto'
            },
            useCurrent: false,
            collapse: true,
            locale: moment.locale(),
            debug: false
          })
        }

        // Initialize time pickers exactly as original
        if ($('#time1').length) {
          $('#time1').datetimepicker({
            format: 'LT',
            defaultDate: false,
            disabledDates: false,
            daysOfWeekDisabled: false,
            calendarWeeks: false,
            viewMode: 'times',
            toolbarPlacement: 'default',
            buttons: {
              showToday: false,
              showClear: true,
              showClose: true
            },
            widgetPositioning: {
              horizontal: 'auto',
              vertical: 'auto'
            },
            useCurrent: false,
            collapse: true,
            locale: moment.locale(),
            debug: false
          })
        }
        
        console.log('✅ Tempus Dominus initialized for date/time pickers')
      } else {
        console.warn('⚠️ Tempus Dominus not available, using native HTML5 inputs')
        // Fallback to native HTML5 date/time inputs
        $('#date input, #date1 input').attr('type', 'date')
        $('#time1 input').attr('type', 'time')
      }
    } catch (error) {
      console.warn('⚠️ Tempus Dominus initialization failed, using native HTML5 inputs:', error)
      // Fallback to native HTML5 date/time inputs
      $('#date input, #date1 input').attr('type', 'date')
      $('#time1 input').attr('type', 'time')
    }
  }, 1000) // Wait 1 second for CDN to load
}

// Initialize all external libraries exactly as in original HTML
export const initializeAllLibraries = () => {
  // Wait for DOM to be ready
  $(document).ready(() => {
    console.log('🚀 Initializing all external libraries exactly as original HTML...')
    
    // Initialize WOW.js animations
    initializeWOW()
    
    // NOTE: Smooth scrolling is now handled by navigation.js to avoid conflicts
    
    // Initialize back to top functionality
    initializeBackToTop()
    
    // Initialize carousels
    initializePricingCarousel()
    initializeTestimonialCarousel()
    
    // Initialize Tempus Dominus
    initializeTempusDominus()
    
    // Initialize main template functionality
    initializeMainTemplateJS()
    
    console.log('✅ All external libraries initialized exactly as original')
  })
}

// Initialize main template JavaScript functionality exactly as original
export const initializeMainTemplateJS = () => {
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-sm')
    } else {
      $('.navbar').removeClass('sticky-top shadow-sm')
    }
  })
  
  // Dropdown on mouse hover
  const $dropdown = $('.dropdown')
  const $dropdownToggle = $('.dropdown-toggle')
  const $dropdownMenu = $('.dropdown-menu')
  const showClass = 'show'
  
  $(window).on('load resize', function() {
    if (this.matchMedia('(min-width: 992px)').matches) {
      $dropdown.hover(
        function() {
          const $this = $(this)
          $this.addClass(showClass)
          $this.find($dropdownToggle).attr('aria-expanded', 'true')
          $this.find($dropdownMenu).addClass(showClass)
        },
        function() {
          const $this = $(this)
          $this.removeClass(showClass)
          $this.find($dropdownToggle).attr('aria-expanded', 'false')
          $this.find($dropdownMenu).removeClass(showClass)
        }
      )
    } else {
      $dropdown.off('mouseenter mouseleave')
    }
  })
  
  console.log('✅ Main template JavaScript functionality initialized')
}

// Cleanup function for component unmounting
export const cleanupLibraries = () => {
  // Destroy Owl Carousel instances
  if ($('.price-carousel').length && $('.price-carousel').data('owl.carousel')) {
    $('.price-carousel').trigger('destroy.owl.carousel')
  }
  if ($('.testimonial-carousel').length && $('.testimonial-carousel').data('owl.carousel')) {
    $('.testimonial-carousel').trigger('destroy.owl.carousel')
  }
  
  // Destroy Tempus Dominus instances
  try {
    if ($('#date').length && $('#date').data('DateTimePicker')) {
      $('#date').datetimepicker('destroy')
    }
    if ($('#date1').length && $('#date1').data('DateTimePicker')) {
      $('#date1').datetimepicker('destroy')
    }
    if ($('#time1').length && $('#time1').data('DateTimePicker')) {
      $('#time1').datetimepicker('destroy')
    }
  } catch (error) {
    console.warn('Tempus Dominus cleanup failed:', error)
  }
}