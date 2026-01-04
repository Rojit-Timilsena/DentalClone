// Template Javascript - Exact Replica of original main.js functionality
// This file contains all the JavaScript functionality from the original HTML template

// Main JavaScript functionality exactly as original template
export const initializeMainJS = () => {
  // Get jQuery from global scope
  const $ = window.$ || window.jQuery
  
  if (!$) {
    // jQuery not available for main.js functionality
    return
  }

  $(document).ready(function() {
    // Initializing main.js functionality...

    // Spinner functionality
    const spinner = () => {
      setTimeout(() => {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show')
        }
      }, 1)
    }
    spinner()

    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
      new WOW().init()
    }

    // Sticky Navbar - exactly as original
    $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm')
      } else {
        $('.navbar').removeClass('sticky-top shadow-sm')
      }
    })
    
    // Dropdown on mouse hover - exactly as original
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
    
    // Back to top button - exactly as original
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

    // Testimonials carousel - exactly as original
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

    // Price carousel - exactly as original
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

    // Date and time picker - exactly as original
    $('.date').datetimepicker({
      format: 'L'
    })
    $('.time').datetimepicker({
      format: 'LT'
    })

    // Twenty-Twenty - exactly as original
    $('.twentytwenty-container').twentytwenty({})

    // Team member hover effects - exactly as original
    $('.team-member').hover(
      function() {
        $(this).find('.member-details').fadeIn('fast')
      },
      function() {
        $(this).find('.member-details').fadeOut('fast')
      }
    )

    // Service item hover effects
    $('.service-item').hover(
      function() {
        $(this).addClass('shadow-lg').css('transform', 'translateY(-5px)')
      },
      function() {
        $(this).removeClass('shadow-lg').css('transform', 'translateY(0)')
      }
    )

    // Price item hover effects
    $('.price-item').hover(
      function() {
        $(this).addClass('shadow-lg').css('transform', 'translateY(-10px)')
      },
      function() {
        $(this).removeClass('shadow-lg').css('transform', 'translateY(0)')
      }
    )

    // Button hover effects
    $('.btn').hover(
      function() {
        $(this).css('transform', 'scale(1.05)')
      },
      function() {
        $(this).css('transform', 'scale(1)')
      }
    )

    // Smooth scrolling for all anchor links - exactly as original
    $('a[href^="#"]').on('click', function(e) {
      const target = $(this.getAttribute('href'))
      if (target.length) {
        e.preventDefault()
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 1500, 'easeInOutExpo')
      }
    })

    // Form validation and interaction
    $('form').on('submit', function(e) {
      const form = $(this)
      let isValid = true

      // Basic validation
      form.find('input[required], select[required], textarea[required]').each(function() {
        if (!$(this).val()) {
          $(this).addClass('is-invalid')
          isValid = false
        } else {
          $(this).removeClass('is-invalid')
        }
      })

      // Email validation
      form.find('input[type="email"]').each(function() {
        const email = $(this).val()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (email && !emailRegex.test(email)) {
          $(this).addClass('is-invalid')
          isValid = false
        }
      })

      if (!isValid) {
        e.preventDefault()
        // Show error message
        if (!form.find('.alert-danger').length) {
          form.prepend('<div class="alert alert-danger">Please fill in all required fields correctly.</div>')
        }
      } else {
        // Remove error message
        form.find('.alert-danger').remove()
      }
    })

    // Input focus effects
    $('input, textarea, select').on('focus', function() {
      $(this).parent().addClass('focused')
    }).on('blur', function() {
      $(this).parent().removeClass('focused')
    })

    // Main.js functionality initialized
  })
}

// Auto-initialize when imported
if (typeof window !== 'undefined') {
  initializeMainJS()
}