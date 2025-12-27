import { useEffect, useState } from 'react'
import '../styles/Testimonials.css'
import { testimonials } from '../data/siteData'
import { ASSET_PATHS } from '../utils/assetPaths'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div 
      className="container-fluid bg-primary bg-testimonial py-5 mb-5 wow fadeInUp" 
      data-wow-delay="0.1s"
      style={{
        backgroundImage: `url(${ASSET_PATHS.carousel.carousel2})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '90px',
        minHeight: '500px',
        position: 'relative'
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 position-relative">
            {/* Testimonial Box */}
            <div 
              className="testimonial-box text-white text-center p-5 rounded position-relative"
              style={{
                background: '#06A3DA', // Using exact primary color from palette
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Navigation Arrows */}
              <button 
                className="btn btn-light btn-sm position-absolute start-0 top-50 translate-middle-y"
                onClick={prevTestimonial}
                style={{ left: '-20px', zIndex: 10 }}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <button 
                className="btn btn-light btn-sm position-absolute end-0 top-50 translate-middle-y"
                onClick={nextTestimonial}
                style={{ right: '-20px', zIndex: 10 }}
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              {/* Testimonial Content */}
              <div className="testimonial-content">
                <img 
                  className="rounded-circle mb-3" 
                  src={testimonials[currentTestimonial]?.image} 
                  alt={testimonials[currentTestimonial]?.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <p className="fs-6 mb-3" style={{ lineHeight: '1.6' }}>
                  {testimonials[currentTestimonial]?.text}
                </p>
                <h5 className="text-white mb-0">{testimonials[currentTestimonial]?.name}</h5>
              </div>

              {/* Dots Navigation */}
              <div className="testimonial-dots mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm mx-1 ${index === currentTestimonial ? 'btn-light' : 'btn-outline-light'}`}
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      padding: '0',
                      border: '2px solid white'
                    }}
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