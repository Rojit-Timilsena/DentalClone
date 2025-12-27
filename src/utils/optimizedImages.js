// Optimized image utilities
// Provides WebP support, lazy loading, and responsive images

// Image format detection
const supportsWebP = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

// Generate responsive image URLs
export const generateResponsiveImageUrl = (baseUrl, width, format = 'jpg') => {
  if (!baseUrl) return ''
  
  // If it's already a data URL or external URL, return as is
  if (baseUrl.startsWith('data:') || baseUrl.startsWith('http')) {
    return baseUrl
  }
  
  // For local images, generate responsive variants
  const extension = format === 'webp' && supportsWebP() ? 'webp' : 'jpg'
  const baseName = baseUrl.replace(/\.[^/.]+$/, '')
  
  return `${baseName}-${width}w.${extension}`
}

// Generate srcset for responsive images
export const generateSrcSet = (baseUrl, sizes = [400, 800, 1200, 1600]) => {
  if (!baseUrl) return ''
  
  const format = supportsWebP() ? 'webp' : 'jpg'
  
  return sizes
    .map(size => `${generateResponsiveImageUrl(baseUrl, size, format)} ${size}w`)
    .join(', ')
}

// Optimized image component props
export const getOptimizedImageProps = (src, alt, options = {}) => {
  const {
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading = 'lazy',
    decoding = 'async',
    width,
    height,
    className = '',
    style = {}
  } = options

  const props = {
    src,
    alt,
    loading,
    decoding,
    className: `img-fluid ${className}`.trim(),
    style: {
      ...style,
      imageRendering: '-webkit-optimize-contrast'
    }
  }

  // Add responsive attributes if not a data URL
  if (!src.startsWith('data:')) {
    props.srcSet = generateSrcSet(src)
    props.sizes = sizes
  }

  // Add dimensions if provided
  if (width) props.width = width
  if (height) props.height = height

  return props
}

// Placeholder image generator (optimized SVG)
export const generatePlaceholderImage = (width, height, text = '', bgColor = '#f8f9fa', textColor = '#6c757d') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: ${text || `${width}x${height}`}">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      ${text ? `<text x="50%" y="50%" fill="${textColor}" dy=".3em" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.1}">${text}</text>` : ''}
    </svg>
  `
  
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

// Image preloader utility
export class ImagePreloader {
  constructor() {
    this.cache = new Map()
    this.loading = new Set()
  }

  preload(src, priority = 'low') {
    if (this.cache.has(src) || this.loading.has(src)) {
      return Promise.resolve()
    }

    this.loading.add(src)

    return new Promise((resolve, reject) => {
      const img = new Image()
      
      img.onload = () => {
        this.cache.set(src, img)
        this.loading.delete(src)
        resolve(img)
      }
      
      img.onerror = () => {
        this.loading.delete(src)
        reject(new Error(`Failed to load image: ${src}`))
      }

      // Set loading priority
      if (priority === 'high') {
        img.fetchPriority = 'high'
      }
      
      img.src = src
    })
  }

  preloadMultiple(sources, priority = 'low') {
    return Promise.allSettled(
      sources.map(src => this.preload(src, priority))
    )
  }

  isLoaded(src) {
    return this.cache.has(src)
  }

  clear() {
    this.cache.clear()
    this.loading.clear()
  }
}

// Create singleton preloader
export const imagePreloader = new ImagePreloader()

// Optimized image data for the dental website
export const OPTIMIZED_IMAGES = {
  // Logo
  logo: {
    src: generatePlaceholderImage(200, 80, 'SUHAAS DENTAL', '#06A3DA', '#ffffff'),
    alt: 'Suhaas Dental Care Logo',
    width: 200,
    height: 80
  },

  // Carousel images
  carousel: [
    {
      id: 1,
      src: generatePlaceholderImage(1920, 1080, 'Dental Care Excellence', '#06A3DA', '#ffffff'),
      alt: 'Professional dental care services',
      width: 1920,
      height: 1080
    },
    {
      id: 2,
      src: generatePlaceholderImage(1920, 1080, 'Modern Dental Technology', '#FF6600', '#ffffff'),
      alt: 'State-of-the-art dental equipment',
      width: 1920,
      height: 1080
    }
  ],

  // Service images
  services: [
    {
      id: 'oral-examination',
      src: generatePlaceholderImage(400, 300, 'Oral Exam', '#f8f9fa', '#6c757d'),
      alt: 'Comprehensive oral examination',
      width: 400,
      height: 300
    },
    {
      id: 'dental-xray',
      src: generatePlaceholderImage(400, 300, 'X-Ray', '#f8f9fa', '#6c757d'),
      alt: 'Advanced dental X-ray imaging',
      width: 400,
      height: 300
    },
    {
      id: 'teeth-whitening',
      src: generatePlaceholderImage(400, 300, 'Whitening', '#f8f9fa', '#6c757d'),
      alt: 'Professional teeth whitening',
      width: 400,
      height: 300
    },
    {
      id: 'dental-filling',
      src: generatePlaceholderImage(400, 300, 'Filling', '#f8f9fa', '#6c757d'),
      alt: 'Quality dental filling services',
      width: 400,
      height: 300
    }
  ],

  // Before/after images
  beforeAfter: {
    before: generatePlaceholderImage(400, 300, 'Before', '#dc3545', '#ffffff'),
    after: generatePlaceholderImage(400, 300, 'After', '#28a745', '#ffffff')
  },

  // Team images
  team: [
    {
      id: 'dr-john-smith',
      src: generatePlaceholderImage(300, 400, 'Dr. John Smith', '#f8f9fa', '#6c757d'),
      alt: 'Dr. John Smith - Principal Dentist',
      width: 300,
      height: 400
    },
    {
      id: 'dr-sarah-johnson',
      src: generatePlaceholderImage(300, 400, 'Dr. Sarah Johnson', '#f8f9fa', '#6c757d'),
      alt: 'Dr. Sarah Johnson - Dental Surgeon',
      width: 300,
      height: 400
    },
    {
      id: 'dh-emily-davis',
      src: generatePlaceholderImage(300, 400, 'DH. Emily Davis', '#f8f9fa', '#6c757d'),
      alt: 'DH. Emily Davis - Dental Hygienist',
      width: 300,
      height: 400
    },
    {
      id: 'dh-michael-wilson',
      src: generatePlaceholderImage(300, 400, 'DH. Michael Wilson', '#f8f9fa', '#6c757d'),
      alt: 'DH. Michael Wilson - Dental Hygienist',
      width: 300,
      height: 400
    }
  ],

  // Testimonial images
  testimonials: [
    {
      id: 'rajesh-sharma',
      src: generatePlaceholderImage(100, 100, 'RS', '#06A3DA', '#ffffff'),
      alt: 'Rajesh Sharma - Patient',
      width: 100,
      height: 100
    },
    {
      id: 'priya-patel',
      src: generatePlaceholderImage(100, 100, 'PP', '#FF6600', '#ffffff'),
      alt: 'Priya Patel - Patient',
      width: 100,
      height: 100
    }
  ],

  // About section image
  about: {
    src: generatePlaceholderImage(600, 400, 'About Us', '#f8f9fa', '#6c757d'),
    alt: 'About Suhaas Dental Care',
    width: 600,
    height: 400
  },

  // Pricing images
  pricing: [
    {
      id: 'registration',
      src: generatePlaceholderImage(80, 80, '₹100', '#28a745', '#ffffff'),
      alt: 'Registration & Examination',
      width: 80,
      height: 80
    },
    {
      id: 'restoration',
      src: generatePlaceholderImage(80, 80, '₹1K', '#17a2b8', '#ffffff'),
      alt: 'Dental Restoration',
      width: 80,
      height: 80
    },
    {
      id: 'root-canal',
      src: generatePlaceholderImage(80, 80, '₹5K', '#ffc107', '#000000'),
      alt: 'Root Canal Treatment',
      width: 80,
      height: 80
    },
    {
      id: 'denture',
      src: generatePlaceholderImage(80, 80, '₹22K', '#fd7e14', '#ffffff'),
      alt: 'Full Mouth Denture',
      width: 80,
      height: 80
    },
    {
      id: 'implant',
      src: generatePlaceholderImage(80, 80, '₹60K', '#dc3545', '#ffffff'),
      alt: 'Dental Implant',
      width: 80,
      height: 80
    },
    {
      id: 'diamond',
      src: generatePlaceholderImage(80, 80, '₹2K', '#6f42c1', '#ffffff'),
      alt: 'Diamond Placement',
      width: 80,
      height: 80
    },
    {
      id: 'crown',
      src: generatePlaceholderImage(80, 80, '₹16K', '#20c997', '#ffffff'),
      alt: 'Zirconia Crown',
      width: 80,
      height: 80
    }
  ]
}

// Preload critical images
export const preloadCriticalImages = async () => {
  const criticalImages = [
    OPTIMIZED_IMAGES.logo.src,
    ...OPTIMIZED_IMAGES.carousel.map(img => img.src)
  ]

  try {
    await imagePreloader.preloadMultiple(criticalImages, 'high')
    console.log('✅ Critical images preloaded')
  } catch (error) {
    console.warn('⚠️ Some critical images failed to preload:', error)
  }
}

// Lazy load non-critical images
export const preloadNonCriticalImages = async () => {
  const nonCriticalImages = [
    ...OPTIMIZED_IMAGES.services.map(img => img.src),
    ...OPTIMIZED_IMAGES.team.map(img => img.src),
    ...OPTIMIZED_IMAGES.testimonials.map(img => img.src),
    OPTIMIZED_IMAGES.about.src,
    ...OPTIMIZED_IMAGES.pricing.map(img => img.src)
  ]

  try {
    await imagePreloader.preloadMultiple(nonCriticalImages, 'low')
    console.log('✅ Non-critical images preloaded')
  } catch (error) {
    console.warn('⚠️ Some non-critical images failed to preload:', error)
  }
}

// Export optimized image component
export const OptimizedImage = ({ src, alt, className = '', style = {}, ...props }) => {
  const optimizedProps = getOptimizedImageProps(src, alt, { className, style, ...props })
  
  return React.createElement('img', optimizedProps)
}

export default {
  OPTIMIZED_IMAGES,
  generatePlaceholderImage,
  getOptimizedImageProps,
  imagePreloader,
  preloadCriticalImages,
  preloadNonCriticalImages
}