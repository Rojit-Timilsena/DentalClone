// Test script to verify carousel button alignment
// This script can be run in the browser console to check button alignment

console.log('🔍 Testing Carousel Button Alignment...');

// Wait for DOM to be ready
setTimeout(() => {
  const carouselButtons = document.querySelector('.carousel-buttons');
  const buttons = document.querySelectorAll('.carousel-buttons button');
  
  if (!carouselButtons) {
    console.error('❌ Carousel buttons container not found');
    return;
  }
  
  if (buttons.length !== 2) {
    console.error('❌ Expected 2 buttons, found:', buttons.length);
    return;
  }
  
  console.log('✅ Found carousel buttons container');
  console.log('✅ Found', buttons.length, 'buttons');
  
  // Check container styles
  const containerStyles = window.getComputedStyle(carouselButtons);
  console.log('📊 Container styles:');
  console.log('  - display:', containerStyles.display);
  console.log('  - flex-direction:', containerStyles.flexDirection);
  console.log('  - align-items:', containerStyles.alignItems);
  console.log('  - justify-content:', containerStyles.justifyContent);
  console.log('  - width:', containerStyles.width);
  
  // Check button alignment
  buttons.forEach((button, index) => {
    const buttonStyles = window.getComputedStyle(button);
    const rect = button.getBoundingClientRect();
    
    console.log(`📊 Button ${index + 1} (${button.textContent}):`);
    console.log('  - width:', buttonStyles.width);
    console.log('  - max-width:', buttonStyles.maxWidth);
    console.log('  - margin:', buttonStyles.margin);
    console.log('  - text-align:', buttonStyles.textAlign);
    console.log('  - position:', buttonStyles.position);
    console.log('  - left:', buttonStyles.left);
    console.log('  - right:', buttonStyles.right);
    console.log('  - transform:', buttonStyles.transform);
    console.log('  - rect.left:', rect.left);
    console.log('  - rect.width:', rect.width);
  });
  
  // Check if buttons are aligned (same left position in mobile view)
  const isMobile = window.innerWidth < 576;
  if (isMobile && buttons.length === 2) {
    const button1Rect = buttons[0].getBoundingClientRect();
    const button2Rect = buttons[1].getBoundingClientRect();
    const leftDiff = Math.abs(button1Rect.left - button2Rect.left);
    
    console.log('📱 Mobile alignment check:');
    console.log('  - Button 1 left:', button1Rect.left);
    console.log('  - Button 2 left:', button2Rect.left);
    console.log('  - Difference:', leftDiff);
    
    if (leftDiff < 5) { // Allow 5px tolerance
      console.log('✅ Buttons are properly aligned in mobile view!');
    } else {
      console.log('❌ Buttons are NOT aligned in mobile view');
    }
  }
  
  console.log('🎯 Test completed. Check the alignment visually in the browser.');
  
}, 2000);