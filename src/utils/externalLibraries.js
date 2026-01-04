// External Libraries Integration
import $ from 'jquery'
window.$ = window.jQuery = $

import 'wowjs/css/libs/animate.css'
import moment from 'moment'
import 'moment-timezone'
import 'jquery.easing'

// Load Waypoints from CDN
const loadWaypoints = () => {
  const waypointsScript = document.createElement('script')
  waypointsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js'
  document.head.appendChild(waypointsScript)
}

// Load Tempus Dominus
const loadTempusDominus = () => {
  const tempusCss = document.createElement('link')
  tempusCss.rel = 'stylesheet'
  tempusCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/css/tempusdominus-bootstrap-4.min.css'
  document.head.appendChild(tempusCss)

  const tempusScript = document.createElement('script')
  tempusScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/js/tempusdominus-bootstrap-4.min.js'
  document.head.appendChild(tempusScript)
}

// Load WOW.js from CDN
const loadWOWjs = () => {
  const wowScript = document.createElement('script')
  wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
  wowScript.onload = () => {
    if (window.WOW) {
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {},
        scrollContainer: null,
        resetAnimation: true
      })
      wow.init()
    }
  }
  document.head.appendChild(wowScript)
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

// Initialize Tempus Dominus date/time pickers
export const initializeTempusDominus = () => {
  loadTempusDominus()
  
  setTimeout(() => {
    try {
      if (typeof $.fn.datetimepicker !== 'undefined') {
        if ($('#date').length) {
          $('#date').datetimepicker({
            format: 'L',
            defaultDate: false,
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
            useCurrent: false,
            collapse: true,
            locale: moment.locale(),
            debug: false
          })
        }

        if ($('#time1').length) {
          $('#time1').datetimepicker({
            format: 'LT',
            defaultDate: false,
            viewMode: 'times',
            useCurrent: false,
            collapse: true,
            locale: moment.locale(),
            debug: false
          })
        }
      } else {
        $('#date input, #date1 input').attr('type', 'date')
        $('#time1 input').attr('type', 'time')
      }
    } catch (error) {
      $('#date input, #date1 input').attr('type', 'date')
      $('#time1 input').attr('type', 'time')
    }
  }, 1000)
}

// Initialize all external libraries
export const initializeAllLibraries = () => {
  $(document).ready(() => {
    loadWaypoints()
    initializeWOW()
    initializeBackToTop()
    initializeTempusDominus()
    initializeMainTemplateJS()
  })
}

// Initialize main template JavaScript functionality
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
}

// Cleanup function for component unmounting
export const cleanupLibraries = () => {
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
    // Silent cleanup failure
  }
}