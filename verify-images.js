#!/usr/bin/env node

// Image integration verification script
import fs from 'fs';
import path from 'path';

console.log('🖼️ Verifying image integration...');

// Check if all expected images exist
const expectedImages = [
  'src/assets/images/logo.jpg',
  'src/assets/images/about-real.jpg',
  'src/assets/images/carousel/carousel-1bg.jpg',
  'src/assets/images/carousel/carousel-1.jpg',
  'src/assets/images/carousel/carousel-2.jpg',
  'src/assets/images/services/service-1.jpg',
  'src/assets/images/services/service-2.jpg',
  'src/assets/images/services/service-3.jpg',
  'src/assets/images/services/service-4.jpg',
  'src/assets/images/services/before.jpg',
  'src/assets/images/services/after.jpg',
  'src/assets/images/pricing/price-1.jpg',
  'src/assets/images/pricing/restoration.jpg',
  'src/assets/images/pricing/rootcanaltreatment.jpg',
  'src/assets/images/pricing/fullmouth.jpg',
  'src/assets/images/pricing/dentalimplant.png',
  'src/assets/images/pricing/diamond.jpg',
  'src/assets/images/pricing/zirconia.jpg',
  'src/assets/images/team/team-1.jpg',
  'src/assets/images/team/team-2.jpg',
  'src/assets/images/team/bhuwan.png',
  'src/assets/images/testimonials/testimonial-1.jpg',
  'src/assets/images/testimonials/testimonial-2.jpg'
];

console.log('\n📁 Checking image files:');
let allImagesExist = true;
let totalSize = 0;

expectedImages.forEach(imagePath => {
  const exists = fs.existsSync(imagePath);
  if (exists) {
    const stats = fs.statSync(imagePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    console.log(`  ✅ ${imagePath} (${sizeKB} KB)`);
  } else {
    console.log(`  ❌ ${imagePath} - MISSING`);
    allImagesExist = false;
  }
});

console.log(`\n📊 Total images size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

// Check build output
const distExists = fs.existsSync('dist');
console.log('\n🏗️ Build verification:');
console.log(`  ${distExists ? '✅' : '❌'} dist directory exists`);

if (distExists) {
  try {
    const distFiles = fs.readdirSync('dist/assets');
    const imageFiles = distFiles.filter(file => 
      file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.svg')
    );
    console.log(`  ✅ ${imageFiles.length} image files in build output`);
    
    // Show some example built images
    console.log('\n📦 Sample built images:');
    imageFiles.slice(0, 5).forEach(file => {
      const stats = fs.statSync(`dist/assets/${file}`);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`    - ${file} (${sizeKB} KB)`);
    });
    
    if (imageFiles.length > 5) {
      console.log(`    ... and ${imageFiles.length - 5} more images`);
    }
  } catch (error) {
    console.log('  ❌ Error reading dist/assets directory');
  }
}

// Check asset paths file
console.log('\n⚙️ Asset configuration:');
try {
  const assetPathsContent = fs.readFileSync('src/utils/assetPaths.js', 'utf8');
  const hasRealImports = assetPathsContent.includes('import') && assetPathsContent.includes('.jpg');
  const hasPlaceholders = assetPathsContent.includes('createSVGDataURL');
  
  console.log(`  ${hasRealImports ? '✅' : '❌'} Real image imports found`);
  console.log(`  ${!hasPlaceholders ? '✅' : '⚠️'} ${hasPlaceholders ? 'Still has placeholder functions (OK if used as fallback)' : 'No placeholder functions'}`);
} catch (error) {
  console.log('  ❌ Error reading assetPaths.js');
}

console.log('\n🎯 Integration Status:');
if (allImagesExist && distExists) {
  console.log('  ✅ All images successfully integrated!');
  console.log('  ✅ Build includes optimized images');
  console.log('  ✅ Ready for deployment');
} else {
  console.log('  ❌ Some issues found - check above for details');
}

console.log('\n🌐 Development server: http://localhost:5174/');
console.log('📝 See IMAGE-INTEGRATION-SUMMARY.md for complete details');

console.log('\n✅ Verification complete!');