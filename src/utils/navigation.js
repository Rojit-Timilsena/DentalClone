// Navigation utilities - Optimized for performance

// Cached DOM elements for better performance
let cachedSections = null
let cachedNavLinks = null

const getSections = () => {
  if (!cachedSections) {
    const sectionIds = ['home', 'about', 'services', 'pricing', 'team', 'testimonials', 'appointment', 'contact']
    cachedSections = sectionIds.map(id => ({
      id,
      element: document.getElementById(id)
    })).filter(section => section.element)
  }
  return cachedSections
}

const getNavLinks = () => {
  if (!cachedNavLinks) {
    cachedNavLinks = document.querySelectorAll('.navbar-nav .nav-link')
  }
  return cachedNavLinks
}

// Optimized scroll to section utility
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (!element) return

  const isMobile = window.innerWidth < 992
  const headerOffset = isMobile ? 70 : 100
  const elementPosition = element.offsetTop
  const offsetPosition = elementPosition - headerOffset

  // Use smooth scrolling for better UX
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

// Optimized active section detection with caching
export const getActiveSection = () => {
  const sections = getSections()
  const isMobile = window.innerWidth < 992
  const headerOffset = isMobile ? 70 : 100
  const scrollPosition = window.scrollY + headerOffset + 50 // Add buffer for better detection

  // Find the section that's currently in view
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.element && section.element.offsetTop <= scrollPosition) {
      return section.id
    }
  }
  
  return 'home'
}

// Optimized navigation update with minimal DOM manipulation
export const updateActiveNav = (activeSection) => {
  const navLinks = getNavLinks()
  
  // Use a single loop to update all nav items
  navLinks.forEach(link => {
    const href = link.getAttribute('href')
    const isActive = href === `#${activeSection}`
    
    if (isActive && !link.classList.contains('active')) {
      link.classList.add('active')
    } else if (!isActive && link.classList.contains('active')) {
      link.classList.remove('active')
    }
  })
}

// Track initialization state
let isInitialized = false

// Optimized smooth scrolling initialization
export const initializeSmoothScrolling = () => {
  if (isInitialized) return
  
  // Use event delegation for better performance
  const handleNavClick = (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (!target) return
    
    const href = target.getAttribute('href')
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault()
      const sectionId = href.substring(1)
      scrollToSection(sectionId)
    }
  }

  // Add single delegated event listener
  document.addEventListener('click', handleNavClick)
  
  isInitialized = true
  
  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleNavClick)
    isInitialized = false
    cachedSections = null
    cachedNavLinks = null
  }
}

// Utility to refresh cached elements (call when DOM changes)
export const refreshNavigationCache = () => {
  cachedSections = null
  cachedNavLinks = null
}

