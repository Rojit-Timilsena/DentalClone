// Real images - Using actual image files
// Import all real images
import logoImg from '../assets/images/logo.jpg'
import aboutImg from '../assets/images/about-real.jpg'

// Carousel images
import carousel1bgImg from '../assets/images/carousel/carousel-1bg.jpg'
import carousel1Img from '../assets/images/carousel/carousel-1.jpg'
import carousel2Img from '../assets/images/carousel/carousel-2.jpg'

// Service images
import service1Img from '../assets/images/services/service-1.jpg'
import service2Img from '../assets/images/services/service-2.jpg'
import service3Img from '../assets/images/services/service-3.jpg'
import service4Img from '../assets/images/services/service-4.jpg'
import beforeImg from '../assets/images/services/before.jpg'
import afterImg from '../assets/images/services/after.jpg'

// Pricing images
import price1Img from '../assets/images/pricing/price-1.jpg'
import restorationImg from '../assets/images/pricing/restoration.jpg'
import rootcanaltreatmentImg from '../assets/images/pricing/rootcanaltreatment.jpg'
import fullmouthImg from '../assets/images/pricing/fullmouth.jpg'
import dentalimplantImg from '../assets/images/pricing/dentalimplant.png'
import diamondImg from '../assets/images/pricing/diamond.jpg'
import zirconiaImg from '../assets/images/pricing/zirconia.jpg'

// Team images
import team1Img from '../assets/images/team/team-1.jpg'
import team2Img from '../assets/images/team/team-2.jpg'
import bhuwanImg from '../assets/images/team/bhuwan.png'

// Testimonial images
import testimonial1Img from '../assets/images/testimonials/testimonial-1.jpg'
import testimonial2Img from '../assets/images/testimonials/testimonial-2.jpg'

// Asset path utilities with real imported images
export const ASSET_PATHS = {
  // Common images
  logo: logoImg,
  favicon: logoImg, // Using logo as favicon for now
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
    service5: service1Img, // Reusing service1 for service5
    service6: service2Img, // Reusing service2 for service6
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
    team3: team1Img, // Reusing team1 for team3
    bhuwan: bhuwanImg
  },
  
  // Testimonial images
  testimonials: {
    testimonial1: testimonial1Img,
    testimonial2: testimonial2Img
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