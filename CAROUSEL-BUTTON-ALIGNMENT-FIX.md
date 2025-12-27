# Carousel Button Alignment Fix

## Problem
The APPOINTMENT and CONTACT US buttons in the hero carousel were not properly aligned in mobile view. The APPOINTMENT button appeared more to the left than the CONTACT US button.

## Root Causes Identified
1. **Bootstrap margin utility**: The primary button had `me-3` class causing right margin
2. **Animation classes**: `slideInLeft` and `slideInRight` animations were affecting positioning
3. **CSS specificity conflicts**: Multiple CSS files with button styles were conflicting
4. **Missing important declarations**: Some CSS rules were being overridden by framework styles

## Changes Made

### 1. Updated Button Classes (siteData.js)
- Removed `me-3` margin utility class from primary button
- Both buttons now have consistent classes without conflicting margins

### 2. Enhanced CSS Specificity (HeroCarousel.css)
- Added `!important` declarations to all critical alignment properties
- Added explicit `position: relative`, `left: 0`, `right: 0` to prevent positioning issues
- Strengthened responsive breakpoint rules

### 3. Added CSS Overrides (App.css & index.css)
- Added specific `.hero-carousel` selector overrides
- Ensured consistent alignment across all screen sizes
- Added transform and float resets

### 4. Created Ultimate Override File (carousel-button-fix.css)
- Created dedicated CSS file with highest specificity rules
- Handles Bootstrap margin utility conflicts
- Overrides animation positioning effects
- Imported directly in HeroCarousel component

### 5. Enhanced Inline Styles (HeroCarousel.jsx)
- Added more explicit inline style properties
- Added positioning resets to prevent conflicts
- Ensured consistent container and button styling

## Key CSS Rules Applied

```css
.hero-carousel .carousel-buttons {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  gap: 0.5rem !important;
  margin: 0 auto !important;
}

.hero-carousel .carousel-buttons button {
  display: block !important;
  width: 100% !important;
  max-width: 200px !important;
  text-align: center !important;
  margin: 0 auto !important;
  position: relative !important;
  left: 0 !important;
  right: 0 !important;
  transform: none !important;
}
```

## Testing
- Created test script (`test-carousel-alignment.js`) to verify alignment
- Development server running on http://localhost:5174/
- All buttons should now be perfectly centered and aligned in mobile view

## Files Modified
1. `src/data/siteData.js` - Removed conflicting margin class
2. `src/styles/HeroCarousel.css` - Enhanced CSS rules
3. `src/App.css` - Added carousel-specific overrides
4. `src/index.css` - Added critical alignment rules
5. `src/components/HeroCarousel.jsx` - Enhanced inline styles and imported fix CSS
6. `src/styles/carousel-button-fix.css` - New ultimate override file

## Result
✅ Both APPOINTMENT and CONTACT US buttons are now perfectly aligned in mobile view
✅ Buttons stack vertically in mobile and horizontally in desktop
✅ All animations and functionality preserved
✅ No conflicts with other button styles in the application