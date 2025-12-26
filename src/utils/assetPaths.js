// Dummy/Placeholder images - Using CSS-based colored backgrounds with centered text
// Helper function to create SVG data URLs
const createSVGDataURL = (width, height, backgroundColor, text, textColor = 'white', fontSize = '16') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
      ${text ? `<text x="${width/2}" y="${height/2 + parseInt(fontSize)/3}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${textColor}" text-anchor="middle">${text}</text>` : ''}
    </svg>
  `
  return 'data:image/svg+xml;base64,' + btoa(svg)
}

// Helper function to create solid color backgrounds without text
const createSolidColorSVG = (width, height, backgroundColor) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
    </svg>
  `
  return 'data:image/svg+xml;base64,' + btoa(svg)
}

// Helper function to create person SVG
const createPersonSVG = (width, height, backgroundColor, text) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
      <circle cx="${width/2}" cy="${height/2 - 30}" r="25" fill="white"/>
      <rect x="${width/2 - 20}" y="${height/2 + 10}" width="40" height="50" fill="white"/>
      ${text ? `<text x="${width/2}" y="${height - 20}" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">${text}</text>` : ''}
    </svg>
  `
  return 'data:image/svg+xml;base64,' + btoa(svg)
}

// Common placeholder images
const logo = createSVGDataURL(200, 100, '#0d6efd', 'Dental Logo', 'white', '16')
const favicon = createSVGDataURL(32, 32, '#0d6efd', 'D', 'white', '18')
const about = createSVGDataURL(600, 800, '#f8f9fa', 'About Us Image', '#333333', '24')

// Carousel placeholder images - solid colors without text
const carousel1bg = createSolidColorSVG(1920, 1080, '#0d6efd')
const carousel2 = createSolidColorSVG(1920, 1080, '#198754')

// Service placeholder images
const service1 = createSVGDataURL(500, 400, '#0d6efd', 'Oral Examination', 'white', '20')
const service2 = createSVGDataURL(500, 400, '#198754', 'Dental X-Ray', 'white', '20')
const service3 = createSVGDataURL(500, 400, '#dc3545', 'Teeth Whitening', 'white', '20')
const service4 = createSVGDataURL(500, 400, '#fd7e14', 'Dental Filling', 'white', '20')
const before = createSVGDataURL(600, 600, '#6c757d', 'Before Treatment', 'white', '24')
const after = createSVGDataURL(600, 600, '#198754', 'After Treatment', 'white', '24')

// Pricing placeholder images
const price1 = createSVGDataURL(400, 300, '#0d6efd', 'Registration', 'white', '18')
const restoration = createSVGDataURL(400, 300, '#198754', 'Restoration', 'white', '18')
const rootcanaltreatment = createSVGDataURL(400, 300, '#dc3545', 'Root Canal', 'white', '18')
const fullmouth = createSVGDataURL(400, 300, '#fd7e14', 'Full Mouth', 'white', '18')
const dentalimplant = createSVGDataURL(400, 300, '#6f42c1', 'Dental Implant', 'white', '18')
const diamond = createSVGDataURL(400, 300, '#e83e8c', 'Diamond Placement', 'white', '16')
const zirconia = createSVGDataURL(400, 300, '#20c997', 'Zirconia Crown', 'white', '18')

// Team placeholder images with person icons
const team1 = createPersonSVG(300, 300, '#0d6efd', 'Team Member')
const team2 = createPersonSVG(300, 300, '#198754', 'Dr. John Smith')
const team3 = createPersonSVG(300, 300, '#dc3545', 'Team Member')
const bhuwan = createPersonSVG(300, 300, '#fd7e14', 'Dr. Sarah Johnson')

// Testimonial placeholder images with person icons
const testimonial1 = createPersonSVG(200, 200, '#6c757d', '')
const testimonial2 = createPersonSVG(200, 200, '#6f42c1', '')

// Asset path utilities with proper imports
export const ASSET_PATHS = {
  // Common images
  logo,
  favicon,
  about,
  
  // Carousel images
  carousel: {
    carousel1bg,
    carousel2
  },
  
  // Service images
  services: {
    service1,
    service2,
    service3,
    service4,
    before,
    after
  },
  
  // Pricing images
  pricing: {
    price1,
    restoration,
    rootcanaltreatment,
    fullmouth,
    dentalimplant,
    diamond,
    zirconia
  },
  
  // Team images
  team: {
    team1,
    team2,
    team3,
    bhuwan
  },
  
  // Testimonial images
  testimonials: {
    testimonial1,
    testimonial2
  }
}

// Helper function to get image path
export const getImagePath = (category, filename) => {
  if (category && ASSET_PATHS[category] && ASSET_PATHS[category][filename]) {
    return ASSET_PATHS[category][filename]
  }
  return ASSET_PATHS[filename] || ''
}

// Helper function to get full asset URL (for backwards compatibility)
export const getAssetUrl = (path) => {
  return path
}