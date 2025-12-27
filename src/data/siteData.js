// Import all images properly
import { ASSET_PATHS } from '../utils/assetPaths'

// Carousel slides data
export const carouselSlides = [
  {
    id: 1,
    image: ASSET_PATHS.carousel.carousel1bg,
    title: 'A Complete Dental Solution at an Affordable Price',
    subtitle: 'Take The Best Quality Dental Treatment',
    primaryButton: {
      text: 'Appointment',
      link: '#appointment',
      className: 'btn btn-primary py-md-3 px-md-5 animated slideInLeft'
    },
    secondaryButton: {
      text: 'Contact Us',
      link: '#contact',
      className: 'btn btn-secondary py-md-3 px-md-5 animated slideInRight'
    }
  },
  {
    id: 2,
    image: ASSET_PATHS.carousel.carousel2,
    title: 'A Complete Dental Solution at an Affordable Price',
    subtitle: 'Take The Best Quality Dental Treatment',
    primaryButton: {
      text: 'Appointment',
      link: '#appointment',
      className: 'btn btn-primary py-md-3 px-md-5 animated slideInLeft'
    },
    secondaryButton: {
      text: 'Contact Us',
      link: '#contact',
      className: 'btn btn-secondary py-md-3 px-md-5 animated slideInRight'
    }
  }
]

// Services data
export const services = [
  {
    id: 1,
    title: 'Oral Examination',
    image: ASSET_PATHS.services.service1,
    description: 'Comprehensive oral health examination'
  },
  {
    id: 2,
    title: 'Dental X-ray',
    image: ASSET_PATHS.services.service2,
    description: 'Advanced dental imaging services'
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    image: ASSET_PATHS.services.service4,
    description: 'Professional teeth whitening treatment'
  },
  {
    id: 4,
    title: 'Dental Filling',
    image: ASSET_PATHS.services.service3,
    description: 'Quality dental filling services'
  }
]

// Pricing data
export const pricingPlans = [
  {
    id: 1,
    title: 'Registration & Examination',
    price: 'रु 100',
    image: ASSET_PATHS.pricing.price1,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 2,
    title: 'Dental Restoration',
    price: 'रु 1,000',
    image: ASSET_PATHS.pricing.restoration,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 3,
    title: 'Root Canal Treatment',
    price: 'रु 5,000',
    image: ASSET_PATHS.pricing.rootcanaltreatment,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 4,
    title: 'Full Mouth Denture',
    price: 'रु 22,000',
    image: ASSET_PATHS.pricing.fullmouth,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 5,
    title: 'Dental Implant',
    price: 'रु 60,000',
    image: ASSET_PATHS.pricing.dentalimplant,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 6,
    title: 'Diamond Placement',
    price: 'रु 2,000',
    image: ASSET_PATHS.pricing.diamond,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  },
  {
    id: 7,
    title: 'Zirconia Crown',
    price: 'रु 16,000',
    image: ASSET_PATHS.pricing.zirconia,
    features: ['Modern Equipment', 'Professional Dentist', '24/7 Call Support'],
    appointmentLink: '#appointment'
  }
]

// Team members data - Using dummy/placeholder information
export const teamMembers = [
  {
    id: 1,
    name: 'Dr. John Smith',
    position: 'Principal Dentist / Managing Director',
    image: ASSET_PATHS.team.team2,
    bio: 'Dr. Smith is a dedicated dental professional with over 12 years of experience in comprehensive dental care. Graduated from a prestigious dental university with advanced training in modern dental techniques. Committed to providing the highest quality dental care in a comfortable and professional environment.',
    contact: 'dr.smith@example.com',
    socialLinks: [
      { platform: 'twitter', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'instagram', url: '#' }
    ]
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    position: 'Dental Surgeon',
    image: ASSET_PATHS.team.bhuwan,
    bio: 'Dr. Johnson is passionate about providing exceptional dental care to patients of all ages. With extensive training in modern dental procedures and a commitment to continuing education, she ensures each patient receives personalized treatment in a comfortable and stress-free environment.',
    contact: 'dr.johnson@example.com',
    socialLinks: [
      { platform: 'twitter', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'instagram', url: '#' }
    ]
  },
  {
    id: 3,
    name: 'DH. Emily Davis',
    position: 'Dental Hygienist',
    image: ASSET_PATHS.team.team1,
    bio: 'Emily is a certified dental hygienist who provides comprehensive oral care services with a focus on prevention and patient education. She is dedicated to helping patients maintain optimal oral health through professional cleanings, preventive treatments, and personalized oral hygiene instruction.',
    contact: 'emily.davis@example.com',
    socialLinks: [
      { platform: 'twitter', url: '#' },
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'instagram', url: '#' }
    ]
  }
]

// Testimonials data - Using realistic dental testimonial content
export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    image: ASSET_PATHS.testimonials.testimonial1,
    text: 'Excellent dental care with professional staff and modern equipment. Dr. Smith and his team made me feel comfortable throughout my root canal treatment. The results exceeded my expectations. Highly recommend this dental practice for quality care.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    image: ASSET_PATHS.testimonials.testimonial2,
    text: 'Outstanding service and attention to detail. The dental team made me feel comfortable throughout the entire teeth whitening process. The facility is clean, modern, and the staff is very knowledgeable and friendly. My smile has never looked better!'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    image: ASSET_PATHS.testimonials.testimonial1,
    text: 'I was nervous about getting dental implants, but the team at Suhaas Dental Care made the entire process smooth and painless. The results are amazing and I can eat all my favorite foods again. Thank you for giving me my confidence back!'
  },
  {
    id: 4,
    name: 'Sunita Thapa',
    image: ASSET_PATHS.testimonials.testimonial2,
    text: 'Professional, caring, and affordable dental care. My family has been coming here for years and we always receive excellent treatment. The staff is friendly and the doctors explain everything clearly. Highly recommended for all dental needs.'
  }
]

// Service options for forms
export const serviceOptions = [
  { value: 'teeth-cleaning', label: 'Teeth cleaning' },
  { value: 'consultation', label: 'Consultation' }
]

// Doctor options for forms - Using dummy names
export const doctorOptions = [
  { value: 'dr-smith', label: 'Dr. John Smith' },
  { value: 'dr-johnson', label: 'Dr. Sarah Johnson' },
  { value: 'dh-davis', label: 'DH. Emily Davis' },
  { value: 'dh-wilson', label: 'DH. Michael Wilson' }
]