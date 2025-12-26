#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Simple function to create a placeholder image as SVG
function createColoredPlaceholder(width, height, color, label) {
  const canvas = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustBrightness(color, -20)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">${label}</text>
</svg>`.trim();
  
  return canvas;
}

function adjustBrightness(color, amount) {
  const usePound = color[0] === '#';
  const col = usePound ? color.slice(1) : color;
  const num = parseInt(col, 16);
  let r = (num >> 16) + amount;
  let g = (num >> 8 & 0x00FF) + amount;
  let b = (num & 0x0000FF) + amount;
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  b = b > 255 ? 255 : b < 0 ? 0 : b;
  return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

// Image specifications
const images = [
  // Logo and favicon
  { path: 'src/assets/images/logo.jpg', width: 200, height: 100, color: '#0066cc', label: 'Suhaas Dental Logo' },
  { path: 'src/assets/images/favicon.jpg', width: 32, height: 32, color: '#0066cc', label: 'SD' },
  { path: 'src/assets/images/about.jpg', width: 600, height: 400, color: '#4a90e2', label: 'About Us' },
  
  // Carousel images
  { path: 'src/assets/images/carousel/carousel-1bg.jpg', width: 1920, height: 800, color: '#2c5aa0', label: 'Dental Care Excellence' },
  { path: 'src/assets/images/carousel/carousel-2.jpg', width: 1920, height: 800, color: '#1e4080', label: 'Modern Dental Solutions' },
  
  // Service images
  { path: 'src/assets/images/services/service-1.jpg', width: 400, height: 300, color: '#28a745', label: 'Oral Examination' },
  { path: 'src/assets/images/services/service-2.jpg', width: 400, height: 300, color: '#17a2b8', label: 'Dental X-ray' },
  { path: 'src/assets/images/services/service-3.jpg', width: 400, height: 300, color: '#ffc107', label: 'Dental Filling' },
  { path: 'src/assets/images/services/service-4.jpg', width: 400, height: 300, color: '#dc3545', label: 'Teeth Whitening' },
  { path: 'src/assets/images/services/before.jpg', width: 400, height: 400, color: '#6c757d', label: 'Before Treatment' },
  { path: 'src/assets/images/services/after.jpg', width: 400, height: 400, color: '#28a745', label: 'After Treatment' },
  
  // Pricing images
  { path: 'src/assets/images/pricing/price-1.jpg', width: 300, height: 200, color: '#007bff', label: 'Registration' },
  { path: 'src/assets/images/pricing/restoration.jpg', width: 300, height: 200, color: '#28a745', label: 'Restoration' },
  { path: 'src/assets/images/pricing/rootcanaltreatment.jpg', width: 300, height: 200, color: '#dc3545', label: 'Root Canal' },
  { path: 'src/assets/images/pricing/fullmouth.jpg', width: 300, height: 200, color: '#6f42c1', label: 'Full Mouth' },
  { path: 'src/assets/images/pricing/dentalimplant.png', width: 300, height: 200, color: '#fd7e14', label: 'Dental Implant' },
  { path: 'src/assets/images/pricing/diamond.jpg', width: 300, height: 200, color: '#e83e8c', label: 'Diamond' },
  { path: 'src/assets/images/pricing/zirconia.jpg', width: 300, height: 200, color: '#20c997', label: 'Zirconia Crown' },
  
  // Team images
  { path: 'src/assets/images/team/team-1.jpg', width: 300, height: 400, color: '#6f42c1', label: 'DH. Anjana' },
  { path: 'src/assets/images/team/team-2.jpg', width: 300, height: 400, color: '#007bff', label: 'Dr. Lok Raj' },
  { path: 'src/assets/images/team/team-3.jpg', width: 300, height: 400, color: '#28a745', label: 'Team Member' },
  { path: 'src/assets/images/team/bhuwan.png', width: 300, height: 400, color: '#fd7e14', label: 'Dr. Bhuwan' },
  
  // Testimonial images
  { path: 'src/assets/images/testimonials/testimonial-1.jpg', width: 150, height: 150, color: '#17a2b8', label: 'Client 1' },
  { path: 'src/assets/images/testimonials/testimonial-2.jpg', width: 150, height: 150, color: '#ffc107', label: 'Client 2' }
];

console.log('Generating placeholder images...');

images.forEach(img => {
  const dir = path.dirname(img.path);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Generate SVG content
  const svgContent = createColoredPlaceholder(img.width, img.height, img.color, img.label);
  
  // Write SVG file (we'll rename to .jpg/.png later)
  fs.writeFileSync(img.path, svgContent);
  console.log(`Created: ${img.path}`);
});

console.log('All placeholder images generated successfully!');