// Quick test to verify the fixes
console.log('🔧 Testing fixes...')

// Test 1: Check if jQuery is available
if (typeof window.$ !== 'undefined') {
  console.log('✅ jQuery is available')
} else {
  console.log('❌ jQuery not available')
}

// Test 2: Check if Owl Carousel is available
setTimeout(() => {
  if (typeof window.$.fn.owlCarousel !== 'undefined') {
    console.log('✅ Owl Carousel is available')
  } else {
    console.log('❌ Owl Carousel not available')
  }
}, 1000)

// Test 3: Check for React warnings
console.log('🔍 Checking for React warnings...')
const originalWarn = console.warn
console.warn = function(...args) {
  if (args[0] && args[0].includes('jsx')) {
    console.log('⚠️ JSX warning detected:', args[0])
  }
  originalWarn.apply(console, args)
}

console.log('✅ Fix verification complete')