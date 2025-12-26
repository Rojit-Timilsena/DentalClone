# Assets Organization

This folder contains all static assets for the Suhaas Dental Care React application.

## Folder Structure

```
assets/
├── images/
│   ├── carousel/          # Hero carousel images
│   │   ├── carousel-1bg.jpg
│   │   └── carousel-2.jpg
│   ├── services/          # Service-related images
│   │   ├── service-1.jpg
│   │   ├── service-2.jpg
│   │   ├── service-3.jpg
│   │   ├── service-4.jpg
│   │   ├── before.jpg
│   │   └── after.jpg
│   ├── pricing/           # Pricing section images
│   │   ├── price-1.jpg
│   │   ├── restoration.jpg
│   │   ├── rootcanaltreatment.jpg
│   │   ├── fullmouth.jpg
│   │   ├── dentalimplant.png
│   │   ├── diamond.jpg
│   │   └── zirconia.jpg
│   ├── team/              # Team member photos
│   │   ├── team-1.jpg
│   │   ├── team-2.jpg
│   │   ├── team-3.jpg
│   │   └── bhuwan.png
│   ├── testimonials/      # Customer testimonial photos
│   │   ├── testimonial-1.jpg
│   │   └── testimonial-2.jpg
│   ├── logo.jpg           # Site logo
│   ├── favicon.jpg        # Site favicon
│   └── about.jpg          # About section image
└── react.svg              # Default React logo (can be removed)

## Usage

Images are referenced in the siteData.js file and imported into components as needed.

### Path Convention
- Use absolute paths starting with `/src/assets/images/`
- Organize by category (carousel, services, pricing, team, testimonials)
- Use descriptive filenames

### Image Optimization
- All images should be optimized for web delivery
- Consider using WebP format for better compression
- Implement lazy loading for better performance

## Notes

- Some images are currently placeholders and need to be replaced with actual content
- Maintain consistent naming conventions
- Keep images organized by their usage context