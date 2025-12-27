#!/usr/bin/env node

// Deployment verification script
import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying deployment configuration...');

// Check Node.js version
console.log('📋 Current Node.js version:', process.version);

// Check if required files exist
const requiredFiles = [
  '.nvmrc',
  'package.json',
  'netlify.toml',
  'vercel.json',
  'dist/index.html'
];

console.log('\n📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check package.json engines
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n⚙️ Package.json engines:');
  if (packageJson.engines) {
    console.log('  Node.js:', packageJson.engines.node || 'Not specified');
    console.log('  npm:', packageJson.engines.npm || 'Not specified');
  } else {
    console.log('  ❌ No engines specified');
  }
} catch (error) {
  console.log('  ❌ Error reading package.json:', error.message);
}

// Check .nvmrc
try {
  const nvmrc = fs.readFileSync('.nvmrc', 'utf8').trim();
  console.log('\n🔧 .nvmrc version:', nvmrc);
} catch (error) {
  console.log('\n❌ .nvmrc not found or unreadable');
}

// Check build output
const distExists = fs.existsSync('dist');
console.log('\n🏗️ Build status:');
console.log(`  ${distExists ? '✅' : '❌'} dist directory exists`);

if (distExists) {
  const indexExists = fs.existsSync('dist/index.html');
  console.log(`  ${indexExists ? '✅' : '❌'} index.html exists`);
  
  if (indexExists) {
    const stats = fs.statSync('dist/index.html');
    console.log(`  📊 index.html size: ${stats.size} bytes`);
    console.log(`  📅 Last modified: ${stats.mtime}`);
  }
}

console.log('\n🎯 Deployment recommendations:');
console.log('  1. Use Node.js 20.x (current LTS)');
console.log('  2. Build command: npm run build');
console.log('  3. Publish directory: dist');
console.log('  4. Ensure .nvmrc is committed to git');

console.log('\n✅ Verification complete!');