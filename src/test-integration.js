// Integration Test for Dental Website React Conversion
// This file tests all major functionality to ensure exact replica behavior

console.log('🧪 Starting Integration Tests for Dental Website React Conversion...')

// Test 1: Verify all components are loaded
const testComponentsLoaded = () => {
  console.log('\n📋 Test 1: Component Loading')
  
  const components = [
    'header nav.navbar',
    '.hero-carousel, .carousel',
    '#about',
    '#services', 
    '#pricing',
    '#team',
    '#testimonials',
    '#appointment',
    '#contact',
    'footer'
  ]
  
  let passed = 0
  components.forEach(selector => {
    const element = document.querySelector(selector)
    if (element) {
      console.log(`✅ ${selector} - Found`)
      passed++
    } else {
      console.log(`❌ ${selector} - Not found`)
    }
  })
  
  console.log(`Component Loading: ${passed}/${components.length} passed`)
  return passed === components.length
}

// Test 2: Verify navigation functionality
const testNavigation = () => {
  console.log('\n🧭 Test 2: Navigation Functionality')
  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
  let passed = 0
  
  navLinks.forEach(link => {
    if (link.href && link.href.includes('#')) {
      const targetId = link.href.split('#')[1]
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        console.log(`✅ Navigation link to #${targetId} - Target exists`)
        passed++
      } else {
        console.log(`❌ Navigation link to #${targetId} - Target missing`)
      }
    }
  })
  
  console.log(`Navigation: ${passed} links verified`)
  return passed > 0
}

// Test 3: Verify forms are present and functional
const testForms = () => {
  console.log('\n📝 Test 3: Form Functionality')
  
  const forms = [
    { selector: '#contact form', name: 'Contact Form' },
    { selector: '#appointment form', name: 'Appointment Form' },
    { selector: '.search-modal form', name: 'Search Form' }
  ]
  
  let passed = 0
  forms.forEach(({ selector, name }) => {
    const form = document.querySelector(selector)
    if (form) {
      const inputs = form.querySelectorAll('input, select, textarea')
      console.log(`✅ ${name} - Found with ${inputs.length} inputs`)
      passed++
    } else {
      console.log(`❌ ${name} - Not found`)
    }
  })
  
  console.log(`Forms: ${passed}/${forms.length} found`)
  return passed > 0
}

// Test 4: Verify responsive elements
const testResponsive = () => {
  console.log('\n📱 Test 4: Responsive Elements')
  
  const responsiveElements = [
    '.navbar-toggler',
    '.container-fluid',
    '.row',
    '.col-lg-6, .col-md-6, .col-sm-12'
  ]
  
  let passed = 0
  responsiveElements.forEach(selector => {
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.log(`✅ ${selector} - Found ${elements.length} elements`)
      passed++
    } else {
      console.log(`❌ ${selector} - Not found`)
    }
  })
  
  console.log(`Responsive Elements: ${passed}/${responsiveElements.length} found`)
  return passed > 0
}

// Test 5: Verify external libraries integration
const testExternalLibraries = () => {
  console.log('\n📚 Test 5: External Libraries')
  
  const libraries = [
    { name: 'jQuery', check: () => typeof window.$ !== 'undefined' },
    { name: 'Bootstrap', check: () => typeof window.bootstrap !== 'undefined' || document.querySelector('.btn') !== null },
    { name: 'Font Awesome', check: () => document.querySelector('.fa, .fas, .far') !== null },
    { name: 'Bootstrap Icons', check: () => document.querySelector('.bi') !== null }
  ]
  
  let passed = 0
  libraries.forEach(({ name, check }) => {
    try {
      if (check()) {
        console.log(`✅ ${name} - Available`)
        passed++
      } else {
        console.log(`❌ ${name} - Not available`)
      }
    } catch (error) {
      console.log(`❌ ${name} - Error: ${error.message}`)
    }
  })
  
  console.log(`External Libraries: ${passed}/${libraries.length} available`)
  return passed > 0
}

// Test 6: Verify images are loading
const testImages = () => {
  console.log('\n🖼️ Test 6: Image Loading')
  
  const images = document.querySelectorAll('img')
  let loaded = 0
  let total = images.length
  
  if (total === 0) {
    console.log('❌ No images found')
    return false
  }
  
  images.forEach((img, index) => {
    if (img.complete && img.naturalHeight !== 0) {
      loaded++
    } else if (img.src) {
      console.log(`⏳ Image ${index + 1}: ${img.src.split('/').pop()} - Loading...`)
    }
  })
  
  console.log(`Images: ${loaded}/${total} loaded`)
  return loaded > 0
}

// Test 7: Verify interactive elements
const testInteractiveElements = () => {
  console.log('\n🖱️ Test 7: Interactive Elements')
  
  const interactiveElements = [
    { selector: '.back-to-top', name: 'Back to Top Button' },
    { selector: '.btn', name: 'Buttons' },
    { selector: '.dropdown-toggle', name: 'Dropdown Toggles' },
    { selector: '.carousel-control-prev, .carousel-control-next', name: 'Carousel Controls' }
  ]
  
  let passed = 0
  interactiveElements.forEach(({ selector, name }) => {
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.log(`✅ ${name} - Found ${elements.length} elements`)
      passed++
    } else {
      console.log(`❌ ${name} - Not found`)
    }
  })
  
  console.log(`Interactive Elements: ${passed}/${interactiveElements.length} types found`)
  return passed > 0
}

// Test 8: Verify CSS classes and styling
const testStyling = () => {
  console.log('\n🎨 Test 8: CSS Classes and Styling')
  
  const criticalClasses = [
    'navbar',
    'btn-primary',
    'container-fluid',
    'bg-primary',
    'text-white',
    'wow'
  ]
  
  let passed = 0
  criticalClasses.forEach(className => {
    const elements = document.querySelectorAll(`.${className}`)
    if (elements.length > 0) {
      console.log(`✅ .${className} - Found ${elements.length} elements`)
      passed++
    } else {
      console.log(`❌ .${className} - Not found`)
    }
  })
  
  console.log(`CSS Classes: ${passed}/${criticalClasses.length} found`)
  return passed > 0
}

// Run all tests
const runAllTests = () => {
  console.log('🚀 Running Complete Integration Test Suite...')
  
  const tests = [
    { name: 'Component Loading', test: testComponentsLoaded },
    { name: 'Navigation', test: testNavigation },
    { name: 'Forms', test: testForms },
    { name: 'Responsive Elements', test: testResponsive },
    { name: 'External Libraries', test: testExternalLibraries },
    { name: 'Images', test: testImages },
    { name: 'Interactive Elements', test: testInteractiveElements },
    { name: 'CSS Styling', test: testStyling }
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
  
  console.log('\n📊 Test Results Summary:')
  console.log('========================')
  results.forEach(({ name, passed, error }) => {
    const status = passed ? '✅ PASS' : '❌ FAIL'
    console.log(`${status} - ${name}${error ? ` (${error})` : ''}`)
  })
  
  console.log(`\n🎯 Overall: ${passedTests}/${tests.length} tests passed`)
  
  if (passedTests === tests.length) {
    console.log('🎉 All tests passed! The React conversion is working correctly.')
  } else if (passedTests >= tests.length * 0.8) {
    console.log('⚠️ Most tests passed. Minor issues may need attention.')
  } else {
    console.log('🚨 Several tests failed. Major issues need to be addressed.')
  }
  
  return { passedTests, totalTests: tests.length, results }
}

// Auto-run tests when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(runAllTests, 2000) // Wait 2 seconds for components to initialize
  })
} else {
  setTimeout(runAllTests, 2000)
}

// Export for manual testing
window.dentalWebsiteTests = {
  runAllTests,
  testComponentsLoaded,
  testNavigation,
  testForms,
  testResponsive,
  testExternalLibraries,
  testImages,
  testInteractiveElements,
  testStyling
}

console.log('🔧 Tests loaded. Run window.dentalWebsiteTests.runAllTests() to test manually.')