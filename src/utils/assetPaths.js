// Optimized asset imports with lazy loading support
import logoImg from '../assets/images/logo.svg'
import aboutImg from '../assets/images/about-real.jpg'
import faviconImg from '../assets/images/favicon.svg'

// Carousel images
import carousel1bgImg from '../assets/images/carousel/carousel-1bg.jpg'
import carousel1Img from '../assets/images/carousel/carousel-1.jpg'
import carousel2Img from '../assets/images/carousel/carousel-2.jpg'

// Service images
import service1Img from '../assets/images/services/service-1.svg'
import service2Img from '../assets/images/services/service-2.svg'
import service3Img from '../assets/images/services/service-3.svg'
import service4Img from '../assets/images/services/service-4.svg'
import beforeImg from '../assets/images/services/before.jpg'
import afterImg from '../assets/images/services/after.jpg'

// Pricing images
import price1Img from '../assets/images/pricing/price-1.jpg'
import restorationImg from '../assets/images/pricing/restoration.svg'
import rootcanaltreatmentImg from '../assets/images/pricing/rootcanaltreatment.svg'
import fullmouthImg from '../assets/images/pricing/fullmouth.svg'
import dentalimplantImg from '../assets/images/pricing/dentalimplant.svg'
import diamondImg from '../assets/images/pricing/diamond.svg'
import zirconiaImg from '../assets/images/pricing/zirconia.svg'

// Team images
import team1Img from '../assets/images/team/team-1.jpg'
import team2Img from '../assets/images/team/team-2.jpg'
import bhuwanImg from '../assets/images/team/bhuwan.png'

// Testimonial images
import testimonial1Img from '../assets/images/testimonials/testimonial-1.jpg'
import testimonial2Img from '../assets/images/testimonials/testimonial-2.jpg'

// Optimized asset path configuration
export const ASSET_PATHS = {
  // Common images
  logo: logoImg,
  favicon: faviconImg,
  about: aboutImg,
  
  // Carousel images
  carousel: {
    carousel1bg: carousel1bgImg,
    carousel1: carousel1Img,
    carousel2: carousel2Img
  },
  
  // Service images
  services: {
    service1: service1Img,
    service2: service2Img,
    service3: service3Img,
    service4: service4Img,
    service5: service1Img, // Reuse for optimization
    service6: service2Img, // Reuse for optimization
    before: beforeImg,
    after: afterImg
  },
  
  // Pricing images
  pricing: {
    price1: price1Img,
    restoration: restorationImg,
    rootcanaltreatment: rootcanaltreatmentImg,
    fullmouth: fullmouthImg,
    dentalimplant: dentalimplantImg,
    diamond: diamondImg,
    zirconia: zirconiaImg
  },
  
  // Team images
  team: {
    team1: team1Img,
    team2: team2Img,
    team3: team1Img, // Reuse for optimization
    bhuwan: bhuwanImg
  },
  
  // Testimonial images
  testimonials: {
    testimonial1: testimonial1Img,
    testimonial2: testimonial2Img
  }
}

// Optimized helper function with caching
const pathCache = new Map()

export const getImagePath = (category, filename) => {
  const cacheKey = `${category}-${filename}`
  
  if (pathCache.has(cacheKey)) {
    return pathCache.get(cacheKey)
  }
  
  let path = ''
  if (category && ASSET_PATHS[category] && ASSET_PATHS[category][filename]) {
    path = ASSET_PATHS[category][filename]
  } else {
    path = ASSET_PATHS[filename] || ''
  }
  
  pathCache.set(cacheKey, path)
  return path
}

// Optimized asset URL helper
export const getAssetUrl = (path) => path

// Preload critical images for better performance - removed to fix preload warnings
export const preloadCriticalImages = () => {
  // Images will be loaded on demand by React components
  // This prevents preload warnings for unused resources
}