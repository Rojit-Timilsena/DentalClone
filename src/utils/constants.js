// Site configuration constants
export const SITE_CONFIG = {
  siteName: 'Suhaas Dental Care',
  tagline: 'Standard Dental Care for the entire Family',
  description: 'Suhaas Dental Care is a dental practice which is transforming dentistry through better equipments, materials together with qualified and skilled dental professionals in a quiet and family environment.',
  
  contact: {
    address: 'Budhanilkantha, Kathmandu, Nepal',
    email: 'suhaashealthcare@gmail.com',
    phone: ['9851325676', '9813637848'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.8881856907724!2d85.35863409999999!3d27.751594599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b36dc0d0673%3A0x6aa6d617abe7bff6!2sSuhaas%20Dental%20Care!5e0!3m2!1sen!2snp!4v1695105062859!5m2!1sen!2snp'
  },

  businessHours: [
    { day: 'Sunday-Friday', hours: '09:00 – 18:30' },
    { day: 'Saturday', hours: '09:00 – 17:30' }
  ],

  socialMedia: [
    { platform: 'facebook', url: 'https://www.facebook.com/suhaasdentalcare?mibextid=2JQ9oc', icon: 'fab fa-facebook-f' },
    { platform: 'instagram', url: 'https://instagram.com/suhaasdentalcare?igshid=MzRIODBINWFIZA==', icon: 'fab fa-instagram' },
    { platform: 'twitter', url: '#', icon: 'fab fa-twitter' },
    { platform: 'linkedin', url: '#', icon: 'fab fa-linkedin-in' }
  ]
}

// Animation delays
export const ANIMATION_DELAYS = {
  short: '0.1s',
  medium: '0.3s',
  long: '0.6s',
  extraLong: '0.9s'
}

// Carousel settings
export const CAROUSEL_SETTINGS = {
  autoPlay: true,
  interval: 5000,
  fade: true
}

// Developer popup settings
export const DEVELOPER_POPUP_DELAY = 50000 // 50 seconds