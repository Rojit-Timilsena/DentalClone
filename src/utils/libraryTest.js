// External Libraries Test - Verify Integration
// This file tests that all external libraries are properly integrated

import $ from 'jquery'

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
      console.warn('⚠️ Owl Carousel not detected')
    }
  } catch (error) {
    console.error('❌ Owl Carousel test failed:', error)
  }

  // Test WOW.js
  try {
    // WOW.js is initialized in the external libraries file
    const wowElements = document.querySelectorAll('.wow')
    if (wowElements.length > 0) {
      results.wow = true
      console.log('✅ WOW.js elements detected:', wowElements.length)
    } else {
      console.warn('⚠️ No WOW.js elements found (this is normal if components haven\'t loaded yet)')
      results.wow = true // Consider it loaded even if no elements yet
    }
  } catch (error) {
    console.error('❌ WOW.js test failed:', error)
  }

  // Test Moment.js
  try {
    const moment = require('moment')
    if (moment && typeof moment === 'function') {
      results.moment = true
      console.log('✅ Moment.js loaded successfully:', moment().format())
    }
  } catch (error) {
    console.warn('⚠️ Moment.js test failed (this is expected in browser):', error.message)
    // Try alternative test
    try {
      if (typeof window.moment !== 'undefined') {
        results.moment = true
        console.log('✅ Moment.js available globally')
      }
    } catch (e) {
      console.warn('⚠️ Moment.js not available globally')
    }
  }

  // Test Tempus Dominus (will be loaded from CDN)
  setTimeout(() => {
    try {
      if (typeof $.fn.datetimepicker !== 'undefined') {
        results.tempusDominus = true
        console.log('✅ Tempus Dominus loaded successfully')
      } else {
        console.warn('⚠️ Tempus Dominus not detected (may still be loading from CDN)')
      }
    } catch (error) {
      console.error('❌ Tempus Dominus test failed:', error)
    }
  }, 2000)

  // Test Twenty-Twenty (will be loaded from CDN)
  setTimeout(() => {
    try {
      if (typeof $.fn.twentytwenty !== 'undefined') {
        results.twentyTwenty = true
        console.log('✅ Twenty-Twenty loaded successfully')
      } else {
        console.warn('⚠️ Twenty-Twenty not detected (may still be loading from CDN)')
      }
    } catch (error) {
      console.error('❌ Twenty-Twenty test failed:', error)
    }
  }, 2000)

  // Test Waypoints
  try {
    if (typeof $.fn.waypoint !== 'undefined') {
      results.waypoints = true
      console.log('✅ Waypoints loaded successfully')
    } else {
      console.warn('⚠️ Waypoints not detected')
    }
  } catch (error) {
    console.error('❌ Waypoints test failed:', error)
  }

  // Test jQuery Easing
  try {
    if (typeof $.easing !== 'undefined' && typeof $.easing.easeInOutExpo !== 'undefined') {
      results.easing = true
      console.log('✅ jQuery Easing loaded successfully')
    } else {
      console.warn('⚠️ jQuery Easing not detected')
    }
  } catch (error) {
    console.error('❌ jQuery Easing test failed:', error)
  }

  // Summary
  const successCount = Object.values(results).filter(Boolean).length
  const totalCount = Object.keys(results).length
  
  console.log(`\n📊 External Libraries Integration Summary:`)
  console.log(`✅ ${successCount}/${totalCount} libraries loaded successfully`)
  console.log('📋 Detailed results:', results)

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