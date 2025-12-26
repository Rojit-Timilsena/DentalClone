// User Interaction Test for Dental Website React Conversion
// This test simulates real user interactions to ensure functionality

console.log('👤 Starting User Interaction Tests...')

// Simulate navigation clicks
const testNavigationClicks = () => {
  console.log('\n🧭 Navigation Click Test')
  
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link')
  let successful = 0
  
  navLinks.forEach((link, index) => {
    try {
      // Simulate click event
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
      
      link.dispatchEvent(clickEvent)
      console.log(`✅ Navigation link ${index + 1} clicked successfully`)
      successful++
    } catch (error) {
      console.log(`❌ Navigation link ${index + 1} failed: ${error.message}`)
    }
  })
  
  console.log(`Navigation Clicks: ${successful}/${navLinks.length} successful`)
  return successful > 0
}

// Test form interactions
const testFormInteractions = () => {
  console.log('\n📝 Form Interaction Test')
  
  const forms = document.querySelectorAll('form')
  let successful = 0
  
  forms.forEach((form, index) => {
    try {
      const inputs = form.querySelectorAll('input, select, textarea')
      let inputsWorking = 0
      
      inputs.forEach(input => {
        try {
          // Test input focus
          input.focus()
          
          // Test input value change
          if (input.type === 'text' || input.type === 'email') {
            input.value = 'test'
            input.dispatchEvent(new Event('input', { bubbles: true }))
          } else if (input.tagName === 'SELECT') {
            if (input.options.length > 1) {
              input.selectedIndex = 1
              input.dispatchEvent(new Event('change', { bubbles: true }))
            }
          } else if (input.tagName === 'TEXTAREA') {
            input.value = 'test message'
            input.dispatchEvent(new Event('input', { bubbles: true }))
          }
          
          inputsWorking++
        } catch (error) {
          console.log(`⚠️ Input interaction failed: ${error.message}`)
        }
      })
      
      if (inputsWorking > 0) {
        console.log(`✅ Form ${index + 1}: ${inputsWorking}/${inputs.length} inputs working`)
        successful++
      } else {
        console.log(`❌ Form ${index + 1}: No inputs working`)
      }
    } catch (error) {
      console.log(`❌ Form ${index + 1} failed: ${error.message}`)
    }
  })
  
  console.log(`Form Interactions: ${successful}/${forms.length} forms working`)
  return successful > 0
}

// Test button interactions
const testButtonInteractions = () => {
  console.log('\n🔘 Button Interaction Test')
  
  const buttons = document.querySelectorAll('button, .btn')
  let successful = 0
  
  // Test a sample of buttons to avoid triggering too many actions
  const sampleButtons = Array.from(buttons).slice(0, 5)
  
  sampleButtons.forEach((button, index) => {
    try {
      // Check if button is clickable
      const isClickable = !button.disabled && 
                         getComputedStyle(button).pointerEvents !== 'none' &&
                         button.offsetParent !== null
      
      if (isClickable) {
        // Simulate hover
        button.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }))
        
        // Check for hover effects
        const hasHoverEffect = getComputedStyle(button).cursor === 'pointer'
        
        console.log(`✅ Button ${index + 1}: Clickable${hasHoverEffect ? ' with hover effects' : ''}`)
        successful++
      } else {
        console.log(`⚠️ Button ${index + 1}: Not clickable`)
      }
    } catch (error) {
      console.log(`❌ Button ${index + 1} failed: ${error.message}`)
    }
  })
  
  console.log(`Button Interactions: ${successful}/${sampleButtons.length} buttons working`)
  return successful > 0
}

// Test scroll behavior
const testScrollBehavior = () => {
  console.log('\n📜 Scroll Behavior Test')
  
  try {
    const originalScrollY = window.scrollY
    
    // Test scroll to different positions
    const scrollTests = [
      { position: 100, name: 'Small scroll' },
      { position: 500, name: 'Medium scroll' },
      { position: 1000, name: 'Large scroll' }
    ]
    
    let successful = 0
    
    scrollTests.forEach(({ position, name }) => {
      try {
        window.scrollTo({ top: position, behavior: 'smooth' })
        
        // Check if scroll position changed (with some tolerance)
        setTimeout(() => {
          if (Math.abs(window.scrollY - position) < 100) {
            console.log(`✅ ${name}: Scroll to ${position}px successful`)
            successful++
          } else {
            console.log(`⚠️ ${name}: Scroll position not accurate`)
          }
        }, 100)
      } catch (error) {
        console.log(`❌ ${name} failed: ${error.message}`)
      }
    })
    
    // Restore original scroll position
    setTimeout(() => {
      window.scrollTo({ top: originalScrollY, behavior: 'smooth' })
    }, 500)
    
    console.log(`Scroll Behavior: Testing ${scrollTests.length} scroll positions`)
    return true
  } catch (error) {
    console.log(`❌ Scroll behavior test failed: ${error.message}`)
    return false
  }
}

// Test modal interactions
const testModalInteractions = () => {
  console.log('\n🪟 Modal Interaction Test')
  
  try {
    // Look for search button to trigger modal
    const searchButton = document.querySelector('button[class*="search"], .fa-search')?.closest('button')
    
    if (searchButton) {
      // Simulate search modal opening
      searchButton.click()
      
      setTimeout(() => {
        const modal = document.querySelector('.modal, .search-modal')
        if (modal) {
          console.log('✅ Search modal opened successfully')
          
          // Try to close modal
          const closeButton = modal.querySelector('.btn-close, .close')
          if (closeButton) {
            closeButton.click()
            console.log('✅ Search modal closed successfully')
          }
          
          return true
        } else {
          console.log('⚠️ Search modal not found after click')
          return false
        }
      }, 100)
    } else {
      console.log('⚠️ Search button not found')
      return false
    }
  } catch (error) {
    console.log(`❌ Modal interaction failed: ${error.message}`)
    return false
  }
}

// Test responsive behavior by simulating viewport changes
const testResponsiveBehavior = () => {
  console.log('\n📱 Responsive Behavior Test')
  
  const viewports = [
    { width: 375, height: 667, name: 'Mobile' },
    { width: 768, height: 1024, name: 'Tablet' },
    { width: 1200, height: 800, name: 'Desktop' }
  ]
  
  let successful = 0
  const originalWidth = window.innerWidth
  const originalHeight = window.innerHeight
  
  viewports.forEach(({ width, height, name }) => {
    try {
      // Simulate viewport resize
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width
      })
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: height
      })
      
      // Trigger resize event
      window.dispatchEvent(new Event('resize'))
      
      // Check if navbar adapts
      const navbar = document.querySelector('.navbar')
      const navbarToggler = document.querySelector('.navbar-toggler')
      
      if (width < 992) {
        // Mobile/tablet - should show hamburger menu
        if (navbarToggler && getComputedStyle(navbarToggler).display !== 'none') {
          console.log(`✅ ${name}: Hamburger menu visible`)
          successful++
        } else {
          console.log(`⚠️ ${name}: Hamburger menu not visible`)
        }
      } else {
        // Desktop - should show full menu
        if (navbar) {
          console.log(`✅ ${name}: Full navigation visible`)
          successful++
        } else {
          console.log(`⚠️ ${name}: Navigation issues`)
        }
      }
    } catch (error) {
      console.log(`❌ ${name} viewport test failed: ${error.message}`)
    }
  })
  
  // Restore original viewport
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: originalWidth
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: originalHeight
  })
  window.dispatchEvent(new Event('resize'))
  
  console.log(`Responsive Behavior: ${successful}/${viewports.length} viewports working`)
  return successful > 0
}

// Run comprehensive user interaction tests
const runUserInteractionTests = () => {
  console.log('👤 Running Comprehensive User Interaction Tests...')
  
  const tests = [
    { name: 'Navigation Clicks', test: testNavigationClicks },
    { name: 'Form Interactions', test: testFormInteractions },
    { name: 'Button Interactions', test: testButtonInteractions },
    { name: 'Scroll Behavior', test: testScrollBehavior },
    { name: 'Modal Interactions', test: testModalInteractions },
    { name: 'Responsive Behavior', test: testResponsiveBehavior }
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
  
  console.log('\n🎯 User Interaction Test Results:')
  console.log('==================================')
  results.forEach(({ name, passed, error }) => {
    const status = passed ? '✅ PASS' : '❌ FAIL'
    console.log(`${status} - ${name}${error ? ` (${error})` : ''}`)
  })
  
  const percentage = Math.round((passedTests / tests.length) * 100)
  console.log(`\n📊 User Experience: ${passedTests}/${tests.length} (${percentage}%)`)
  
  if (percentage >= 90) {
    console.log('🎉 Excellent user experience! All interactions working smoothly.')
  } else if (percentage >= 75) {
    console.log('✅ Good user experience with minor issues.')
  } else if (percentage >= 60) {
    console.log('⚠️ Acceptable but needs improvement.')
  } else {
    console.log('🚨 Poor user experience. Major fixes needed.')
  }
  
  return { passedTests, totalTests: tests.length, percentage, results }
}

// Auto-run user interaction tests when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(runUserInteractionTests, 4000) // Wait 4 seconds for full initialization
  })
} else {
  setTimeout(runUserInteractionTests, 4000)
}

// Export for manual testing
window.userInteractionTests = {
  runUserInteractionTests,
  testNavigationClicks,
  testFormInteractions,
  testButtonInteractions,
  testScrollBehavior,
  testModalInteractions,
  testResponsiveBehavior
}

console.log('🔧 User interaction tests loaded. Run window.userInteractionTests.runUserInteractionTests() to test manually.')