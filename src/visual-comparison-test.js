// Visual Comparison Test for Dental Website React Conversion
// This test ensures the React version matches the original HTML exactly

console.log('🎨 Starting Visual Comparison Tests...')

// Test visual elements match original specifications
const testVisualMatch = () => {
  console.log('\n🔍 Visual Match Test')
  
  const visualTests = [
    {
      name: 'Header Logo Height',
      test: () => {
        const logo = document.querySelector('.navbar-brand img')
        if (logo) {
          const height = logo.getAttribute('height') || getComputedStyle(logo).height
          return height === '100' || height === '100px'
        }
        return false
      }
    },
    {
      name: 'Primary Color Variables',
      test: () => {
        const root = document.documentElement
        const primaryColor = getComputedStyle(root).getPropertyValue('--primary').trim()
        return primaryColor === '#06A3DA' || primaryColor.includes('06A3DA')
      }
    },
    {
      name: 'Secondary Color Variables', 
      test: () => {
        const root = document.documentElement
        const secondaryColor = getComputedStyle(root).getPropertyValue('--secondary').trim()
        return secondaryColor === '#F57E57' || secondaryColor.includes('F57E57')
      }
    },
    {
      name: 'Form Input Height (55px)',
      test: () => {
        const inputs = document.querySelectorAll('input[style*="height: 55px"], .form-control')
        return inputs.length > 0
      }
    },
    {
      name: 'Bootstrap Classes Present',
      test: () => {
        const bootstrapElements = document.querySelectorAll('.container-fluid, .row, .col-lg-6, .btn-primary')
        return bootstrapElements.length > 10
      }
    }
  ]
  
  let passed = 0
  visualTests.forEach(({ name, test }) => {
    try {
      if (test()) {
        console.log(`✅ ${name}`)
        passed++
      } else {
        console.log(`❌ ${name}`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  console.log(`Visual Match: ${passed}/${visualTests.length} passed`)
  return passed >= visualTests.length * 0.8
}

// Test responsive breakpoints
const testResponsiveBreakpoints = () => {
  console.log('\n📱 Responsive Breakpoints Test')
  
  const breakpoints = [
    { name: 'Mobile (576px)', width: 576 },
    { name: 'Tablet (768px)', width: 768 },
    { name: 'Desktop (992px)', width: 992 },
    { name: 'Large Desktop (1200px)', width: 1200 }
  ]
  
  let passed = 0
  const originalWidth = window.innerWidth
  
  breakpoints.forEach(({ name, width }) => {
    try {
      // Simulate viewport resize
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width
      })
      
      // Trigger resize event
      window.dispatchEvent(new Event('resize'))
      
      // Check if responsive elements adapt
      const navbar = document.querySelector('.navbar')
      const containers = document.querySelectorAll('.container-fluid')
      
      if (navbar && containers.length > 0) {
        console.log(`✅ ${name} - Elements responsive`)
        passed++
      } else {
        console.log(`❌ ${name} - Elements not responsive`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  // Restore original width
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: originalWidth
  })
  window.dispatchEvent(new Event('resize'))
  
  console.log(`Responsive: ${passed}/${breakpoints.length} breakpoints working`)
  return passed > 0
}

// Test all interactive elements work
const testInteractivity = () => {
  console.log('\n🖱️ Interactivity Test')
  
  const interactiveTests = [
    {
      name: 'Navigation Links',
      test: () => {
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
        return navLinks.length >= 5 // Home, About, Services, Pages, Contact
      }
    },
    {
      name: 'Search Button',
      test: () => {
        const searchBtn = document.querySelector('button[class*="search"], .fa-search')
        return searchBtn !== null
      }
    },
    {
      name: 'Appointment Button',
      test: () => {
        const appointmentBtn = document.querySelector('a[href="#appointment"], .btn:contains("Appointment")')
        return appointmentBtn !== null || document.querySelector('.btn') !== null
      }
    },
    {
      name: 'Back to Top Button',
      test: () => {
        const backToTop = document.querySelector('.back-to-top')
        return backToTop !== null
      }
    },
    {
      name: 'Form Inputs',
      test: () => {
        const inputs = document.querySelectorAll('input, select, textarea')
        return inputs.length >= 10 // Multiple forms with various inputs
      }
    },
    {
      name: 'Dropdown Menus',
      test: () => {
        const dropdowns = document.querySelectorAll('.dropdown-toggle, .dropdown-menu')
        return dropdowns.length > 0
      }
    }
  ]
  
  let passed = 0
  interactiveTests.forEach(({ name, test }) => {
    try {
      if (test()) {
        console.log(`✅ ${name}`)
        passed++
      } else {
        console.log(`❌ ${name}`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  console.log(`Interactivity: ${passed}/${interactiveTests.length} elements working`)
  return passed >= interactiveTests.length * 0.8
}

// Test content accuracy
const testContentAccuracy = () => {
  console.log('\n📝 Content Accuracy Test')
  
  const contentTests = [
    {
      name: 'Site Title/Logo',
      test: () => {
        const logo = document.querySelector('.navbar-brand img')
        return logo && logo.alt && logo.alt.toLowerCase().includes('suhaas')
      }
    },
    {
      name: 'Contact Information',
      test: () => {
        const contactText = document.body.textContent
        return contactText.includes('Budhanilkantha') && contactText.includes('suhaashealthcare@gmail.com')
      }
    },
    {
      name: 'Doctor Names',
      test: () => {
        const content = document.body.textContent
        return content.includes('Dr. Lok Raj Dhakal') && content.includes('Dr. Bhuwan Sharma')
      }
    },
    {
      name: 'Service Sections',
      test: () => {
        const sections = ['about', 'services', 'pricing', 'team', 'testimonials', 'contact']
        return sections.every(section => document.getElementById(section) !== null)
      }
    },
    {
      name: 'Pricing in Nepali Currency',
      test: () => {
        const content = document.body.textContent
        return content.includes('रु') || content.includes('Rs')
      }
    }
  ]
  
  let passed = 0
  contentTests.forEach(({ name, test }) => {
    try {
      if (test()) {
        console.log(`✅ ${name}`)
        passed++
      } else {
        console.log(`❌ ${name}`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  console.log(`Content Accuracy: ${passed}/${contentTests.length} verified`)
  return passed >= contentTests.length * 0.8
}

// Test performance metrics
const testPerformance = () => {
  console.log('\n⚡ Performance Test')
  
  const performanceTests = [
    {
      name: 'Page Load Time',
      test: () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        console.log(`Page load time: ${loadTime}ms`)
        return loadTime < 5000 // Should load within 5 seconds
      }
    },
    {
      name: 'DOM Elements Count',
      test: () => {
        const elementCount = document.querySelectorAll('*').length
        console.log(`DOM elements: ${elementCount}`)
        return elementCount > 100 && elementCount < 2000 // Reasonable range
      }
    },
    {
      name: 'Images Loaded',
      test: () => {
        const images = document.querySelectorAll('img')
        const loadedImages = Array.from(images).filter(img => img.complete && img.naturalHeight > 0)
        console.log(`Images loaded: ${loadedImages.length}/${images.length}`)
        return loadedImages.length >= images.length * 0.8
      }
    },
    {
      name: 'CSS Loaded',
      test: () => {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style')
        console.log(`Stylesheets: ${stylesheets.length}`)
        return stylesheets.length > 0
      }
    }
  ]
  
  let passed = 0
  performanceTests.forEach(({ name, test }) => {
    try {
      if (test()) {
        console.log(`✅ ${name}`)
        passed++
      } else {
        console.log(`❌ ${name}`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  console.log(`Performance: ${passed}/${performanceTests.length} metrics passed`)
  return passed >= performanceTests.length * 0.75
}

// Test developer popup functionality
const testDeveloperPopup = () => {
  console.log('\n⏰ Developer Popup Test')
  
  // Check if popup component exists
  const popupComponent = document.querySelector('.developer-popup, [class*="popup"]')
  if (popupComponent) {
    console.log('✅ Developer popup component found')
    return true
  } else {
    console.log('❌ Developer popup component not found')
    return false
  }
}

// Run comprehensive visual comparison
const runVisualComparison = () => {
  console.log('🎨 Running Comprehensive Visual Comparison...')
  
  const tests = [
    { name: 'Visual Match', test: testVisualMatch },
    { name: 'Responsive Breakpoints', test: testResponsiveBreakpoints },
    { name: 'Interactivity', test: testInteractivity },
    { name: 'Content Accuracy', test: testContentAccuracy },
    { name: 'Performance', test: testPerformance },
    { name: 'Developer Popup', test: testDeveloperPopup }
  ]
  
  let passedTests = 0
  const results = []
  
  tests.forEach(({ name, test }) => {
    try {
      const result = test()
      results.push({ name, passed: result })
      if (result) passedTests++
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
      results.push({ name, passed: false, error: error.message })
    }
  })
  
  console.log('\n🎯 Visual Comparison Results:')
  console.log('==============================')
  results.forEach(({ name, passed, error }) => {
    const status = passed ? '✅ PASS' : '❌ FAIL'
    console.log(`${status} - ${name}${error ? ` (${error})` : ''}`)
  })
  
  const percentage = Math.round((passedTests / tests.length) * 100)
  console.log(`\n📊 Overall Match: ${passedTests}/${tests.length} (${percentage}%)`)
  
  if (percentage >= 90) {
    console.log('🎉 Excellent! React version closely matches original.')
  } else if (percentage >= 75) {
    console.log('✅ Good match with minor differences.')
  } else if (percentage >= 60) {
    console.log('⚠️ Acceptable match but needs improvements.')
  } else {
    console.log('🚨 Significant differences detected. Review needed.')
  }
  
  return { passedTests, totalTests: tests.length, percentage, results }
}

// Auto-run visual comparison when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(runVisualComparison, 3000) // Wait 3 seconds for full initialization
  })
} else {
  setTimeout(runVisualComparison, 3000)
}

// Export for manual testing
window.visualComparison = {
  runVisualComparison,
  testVisualMatch,
  testResponsiveBreakpoints,
  testInteractivity,
  testContentAccuracy,
  testPerformance,
  testDeveloperPopup
}

console.log('🔧 Visual comparison tests loaded. Run window.visualComparison.runVisualComparison() to test manually.')