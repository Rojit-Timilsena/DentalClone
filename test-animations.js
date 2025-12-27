// Test script to verify carousel button animations are working
// Run this in the browser console to check animations

console.log('🎬 Testing Carousel Button Animations...');

setTimeout(() => {
  const buttons = document.querySelectorAll('.carousel-buttons button');
  
  if (buttons.length !== 2) {
    console.error('❌ Expected 2 buttons, found:', buttons.length);
    return;
  }
  
  console.log('✅ Found', buttons.length, 'buttons');
  
  // Check animation classes
  buttons.forEach((button, index) => {
    const classes = button.className;
    const hasAnimated = classes.includes('animated');
    const hasSlideIn = classes.includes('slideInLeft') || classes.includes('slideInRight');
    
    console.log(`🎭 Button ${index + 1} (${button.textContent}):`);
    console.log('  - Classes:', classes);
    console.log('  - Has animated class:', hasAnimated);
    console.log('  - Has slideIn animation:', hasSlideIn);
    
    if (hasAnimated && hasSlideIn) {
      console.log('  ✅ Animation classes present');
    } else {
      console.log('  ❌ Missing animation classes');
    }
  });
  
  // Test animation by triggering carousel slide change
  console.log('🔄 Testing animation trigger...');
  
  // Find swiper instance and trigger slide change
  const swiper = document.querySelector('.hero-carousel .swiper');
  if (swiper && swiper.swiper) {
    console.log('📱 Triggering slide change to test animations...');
    swiper.swiper.slideNext();
    
    setTimeout(() => {
      console.log('🎯 Animation test completed. Watch for slide-in effects on buttons.');
    }, 1000);
  } else {
    console.log('ℹ️ Swiper instance not found. Animations should trigger on page load and slide changes.');
  }
  
}, 2000);