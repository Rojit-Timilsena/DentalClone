// External Libraries Integration - React-only version
// Removed jQuery dependencies to prevent conflicts

import 'wowjs/css/libs/animate.css'

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

// React-based WOW.js loader
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

// Initialize WOW.js animations
export const initializeWOW = () => {
  loadWOWjs()
}

// React-based navbar scroll handler
export const initializeNavbarScroll = () => {
  let ticking = false
  
  const handleNavbarScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        try {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const navbar = document.querySelector('.navbar')
          
          if (navbar) {
            if (scrollTop > 45) {
              navbar.classList.add('sticky-top', 'shadow-sm')
            } else {
              navbar.classList.remove('sticky-top', 'shadow-sm')
            }
          }
        } catch (error) {
          console.warn('Error in navbar scroll handler:', error)
        }
        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true })
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleNavbarScroll)
  }
}

// React-based dropdown hover handler
export const initializeDropdownHover = () => {
  const handleDropdownHover = () => {
    try {
      const dropdowns = document.querySelectorAll('.dropdown')
      const showClass = 'show'
      
      if (window.matchMedia('(min-width: 992px)').matches) {
        dropdowns.forEach(dropdown => {
          const handleMouseEnter = () => {
            dropdown.classList.add(showClass)
            const toggle = dropdown.querySelector('.dropdown-toggle')
            const menu = dropdown.querySelector('.dropdown-menu')
            if (toggle) toggle.setAttribute('aria-expanded', 'true')
            if (menu) menu.classList.add(showClass)
          }
          
          const handleMouseLeave = () => {
            dropdown.classList.remove(showClass)
            const toggle = dropdown.querySelector('.dropdown-toggle')
            const menu = dropdown.querySelector('.dropdown-menu')
            if (toggle) toggle.setAttribute('aria-expanded', 'false')
            if (menu) menu.classList.remove(showClass)
          }
          
          dropdown.addEventListener('mouseenter', handleMouseEnter)
          dropdown.addEventListener('mouseleave', handleMouseLeave)
          
          // Store cleanup functions
          dropdown._cleanupHover = () => {
            dropdown.removeEventListener('mouseenter', handleMouseEnter)
            dropdown.removeEventListener('mouseleave', handleMouseLeave)
          }
        })
      } else {
        // Clean up hover listeners on mobile
        dropdowns.forEach(dropdown => {
          if (dropdown._cleanupHover) {
            dropdown._cleanupHover()
          }
        })
      }
    } catch (error) {
      console.warn('Error in dropdown hover handler:', error)
    }
  }

  const handleResize = () => {
    handleDropdownHover()
  }

  window.addEventListener('load', handleDropdownHover)
  window.addEventListener('resize', handleResize)
  handleDropdownHover() // Initialize immediately
  
  // Return cleanup function
  return () => {
    window.removeEventListener('load', handleDropdownHover)
    window.removeEventListener('resize', handleResize)
    
    // Clean up dropdown listeners
    const dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(dropdown => {
      if (dropdown._cleanupHover) {
        dropdown._cleanupHover()
      }
    })
  }
}

// Initialize all external libraries with React-only approach
export const initializeAllLibraries = () => {
  const cleanupFunctions = []
  
  try {
    // Initialize WOW.js
    initializeWOW()
    
    // Initialize navbar scroll with cleanup
    const navbarCleanup = initializeNavbarScroll()
    cleanupFunctions.push(navbarCleanup)
    
    // Initialize dropdown hover with cleanup
    const dropdownCleanup = initializeDropdownHover()
    cleanupFunctions.push(dropdownCleanup)
    
    // Store cleanup functions globally for later use
    window._libraryCleanupFunctions = cleanupFunctions
    
  } catch (error) {
    console.warn('Error in library initialization:', error)
  }
}

// React-based cleanup function
export const cleanupLibraries = () => {
  try {
    // Run all stored cleanup functions
    if (window._libraryCleanupFunctions) {
      window._libraryCleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup()
        }
      })
      window._libraryCleanupFunctions = []
    }
  } catch (error) {
    console.warn('Error in library cleanup:', error)
  }
}