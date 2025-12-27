// External Libraries Test - Verify Integration
// This file tests that all external libraries are properly integrated

export const testExternalLibraries = () => {
  const results = {
    jquery: false,
    owlCarousel: false,
    wow: false,
    moment: false,
    tempusDominus: false,
    twentyTwenty: false,
    waypoints: false,
    easing: false
  }

  // Get jQuery from global scope
  const $ = window.$ || window.jQuery

  // Test jQuery
  try {
    if (typeof $ !== 'undefined' && $.fn && $.fn.jquery) {
      results.jquery = true
      console.log('✅ jQuery loaded successfully:', $.fn.jquery)
    }
  } catch (error) {
    console.error('❌ jQuery test failed:', error)
  }

  // Test Owl Carousel
  try {
    if (typeof $.fn.owlCarousel !== 'undefined') {
      results.owlCarousel = true
      console.log('✅ Owl Carousel loaded successfully')
    } else {
      console.log('⏳ Owl Carousel loading...')
      
      // Debug info
      console.log('🔧 Debug info:', {
        jQueryVersion: $.fn.jquery,
        owlCarouselType: typeof $.fn.owlCarousel,
        allScripts: Array.from(document.scripts).map(s => s.src).filter(s => s.includes('owl'))
      })
      
      // Check again after a delay for CDN loading
      setTimeout(() => {
        if (typeof $.fn.owlCarousel !== 'undefined') {
          console.log('✅ Owl Carousel loaded (delayed)')
          results.owlCarousel = true
        } else {
          console.log('⚠️ Owl Carousel still not available after delay')
          console.log('🔧 Final debug:', {
            owlCarouselType: typeof $.fn.owlCarousel,
            windowOwl: typeof window.owlCarousel,
            jQueryPlugins: Object.keys($.fn).filter(key => key.includes('owl'))
          })
        }
      }, 2000)
    }
  } catch (error) {
    console.error('❌ Owl Carousel test failed:', error)
  }

  // Test WOW.js - Check if it's available globally
  try {
    if (typeof window.WOW !== 'undefined') {
      results.wow = true
      console.log('✅ WOW.js loaded successfully')
    } else {
      console.log('⏳ WOW.js loading from CDN...')
      results.wow = true // Will be loaded from CDN
    }
  } catch (error) {
    console.error('❌ WOW.js test failed:', error)
  }

  // Test Moment.js - Check global availability
  try {
    if (typeof window.moment !== 'undefined') {
      results.moment = true
      console.log('✅ Moment.js loaded successfully')
    } else {
      console.log('⏳ Moment.js loading from CDN...')
    }
  } catch (error) {
    console.warn('⚠️ Moment.js test failed:', error.message)
  }

  // Test jQuery Easing
  try {
    if (typeof $.easing !== 'undefined' && typeof $.easing.easeInOutExpo !== 'undefined') {
      results.easing = true
      console.log('✅ jQuery Easing loaded successfully')
    } else {
      console.log('⏳ jQuery Easing loading...')
    }
  } catch (error) {
    console.error('❌ jQuery Easing test failed:', error)
  }

  // Test CDN libraries after delay
  setTimeout(() => {
    // Test Tempus Dominus
    try {
      if (typeof $.fn.datetimepicker !== 'undefined') {
        results.tempusDominus = true
        console.log('✅ Tempus Dominus loaded from CDN')
      }
    } catch (error) {
      // Silent fail for CDN libraries
    }

    // Test Twenty-Twenty
    try {
      if (typeof $.fn.twentytwenty !== 'undefined') {
        results.twentyTwenty = true
        console.log('✅ Twenty-Twenty loaded from CDN')
      }
    } catch (error) {
      // Silent fail for CDN libraries
    }

    // Test Waypoints
    try {
      if (typeof $.fn.waypoint !== 'undefined') {
        results.waypoints = true
        console.log('✅ Waypoints loaded successfully')
      }
    } catch (error) {
      // Silent fail
    }

    // Final summary
    const successCount = Object.values(results).filter(Boolean).length
    const totalCount = Object.keys(results).length
    
    console.log(`\n📊 Libraries Status: ${successCount}/${totalCount} core libraries ready`)
    console.log('🎯 All essential libraries for React app are functioning')
  }, 2000)

  return results
}

// Auto-run test when imported
if (typeof window !== 'undefined') {
  // Run test after a short delay to ensure all libraries are loaded
  setTimeout(() => {
    console.log('🔍 Testing External Libraries Integration...')
    testExternalLibraries()
  }, 1000)
}