import { useEffect, useState } from 'react'
import { initializeTestimonialCarousel } from '../utils/externalLibraries'
import '../styles/Testimonials.css'
import { testimonials } from '../data/siteData'
import { ASSET_PATHS } from '../utils/assetPaths'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Debug: Check if testimonials data is loaded
  console.log('Testimonials data:', testimonials)
  console.log('Number of testimonials:', testimonials?.length)

  // Initialize Owl Carousel after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeTestimonialCarousel()
      
      // Check if Owl Carousel initialized after a delay
      setTimeout(() => {
        const owlCarousel = document.querySelector('.testimonial-carousel')
        const manualCarousel = document.querySelector('.manual-testimonial-carousel')
        
        if (owlCarousel && !owlCarousel.classList.contains('owl-loaded')) {
          // Owl Carousel failed to initialize, show manual carousel
          owlCarousel.style.display = 'none'
          manualCarousel.classList.remove('d-none')
          console.log('Owl Carousel failed, using manual carousel')
        }
      }, 2000)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate testimonials as fallback
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="container-fluid bg-primary py-5 mb-5 wow fadeInUp" 
      data-wow-delay="0.1s"
      style={{
        background: 'linear-gradient(rgba(9, 30, 62, 0.85), rgba(9, 30, 62, 0.85)), url(' + ASSET_PATHS.carousel.carousel2 + ')',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '90px'
      }}
    >
      <div className="container py-5">
        {/* Section Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h5 className="text-white text-uppercase mb-3">Testimonials</h5>
            <h1 className="display-5 text-white mb-0">What Our Patients Say</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Simple Static Display for Testing */}
            <div className="simple-testimonials">
              {testimonials && testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={`testimonial-item text-center text-white mb-4 ${index > 0 ? 'd-none' : ''}`}>
                    <img 
                      className="img-fluid mx-auto rounded mb-4" 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <p className="fs-5">{testimonial.text}</p>
                    <hr className="mx-auto w-25" style={{ borderColor: 'white' }} />
                    <h4 className="text-white mb-0">{testimonial.name}</h4>
                  </div>
                ))
              ) : (
                <div className="text-center text-white">
                  <h4>No testimonials available</h4>
                </div>
              )}
            </div>

            {/* Owl Carousel - Hidden for now */}
            <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn d-none" data-wow-delay="0.6s">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item text-center text-white">
                  <img 
                    className="img-fluid mx-auto rounded mb-4" 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <p className="fs-5">{testimonial.text}</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">{testimonial.name}</h4>
                </div>
              ))}
            </div>

            {/* Fallback Manual Carousel */}
            <div className="manual-testimonial-carousel d-none rounded p-5" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="testimonial-item text-center text-white">
                <img 
                  className="img-fluid mx-auto rounded mb-4" 
                  src={testimonials[currentTestimonial]?.image} 
                  alt={testimonials[currentTestimonial]?.name}
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <p className="fs-5">{testimonials[currentTestimonial]?.text}</p>
                <hr className="mx-auto w-25" />
                <h4 className="text-white mb-0">{testimonials[currentTestimonial]?.name}</h4>
              </div>
              
              {/* Manual Navigation Dots */}
              <div className="text-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm mx-1 ${index === currentTestimonial ? 'btn-light' : 'btn-outline-light'}`}
                    style={{ width: '12px', height: '12px', borderRadius: '50%', padding: '0' }}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials