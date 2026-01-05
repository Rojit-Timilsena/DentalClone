import { useEffect, useState } from 'react'
import '../styles/Testimonials.css'
import { testimonials } from '../data/siteData'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('')

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const handleNext = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setSlideDirection('slide-left')
    
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setSlideDirection('slide-in-right')
      
      setTimeout(() => {
        setSlideDirection('')
        setIsAnimating(false)
      }, 150)
    }, 150)
  }

  const handlePrev = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setSlideDirection('slide-right')
    
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setSlideDirection('slide-in-left')
      
      setTimeout(() => {
        setSlideDirection('')
        setIsAnimating(false)
      }, 150)
    }, 150)
  }

  const handleIndicatorClick = (index) => {
    if (isAnimating || index === currentTestimonial) return
    
    setIsAnimating(true)
    const direction = index > currentTestimonial ? 'slide-left' : 'slide-right'
    const slideInDirection = index > currentTestimonial ? 'slide-in-right' : 'slide-in-left'
    
    setSlideDirection(direction)
    
    setTimeout(() => {
      setCurrentTestimonial(index)
      setSlideDirection(slideInDirection)
      
      setTimeout(() => {
        setSlideDirection('')
        setIsAnimating(false)
      }, 150)
    }, 150)
  }

  return (
    <div className="container-fluid py-3 py-lg-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-4 mb-lg-5">
          <div className="col-lg-8 text-center">
            <div className="section-title">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">Testimonials</h5>
              <h1 className="display-5 mb-0">What Our Patients Say</h1>
            </div>
          </div>
        </div>

        {/* Main Testimonials Content */}
        <div className="row g-3 g-lg-5 align-items-center">
          {/* Left Side - Featured Testimonial */}
          <div className="col-12 col-lg-8">
            <div className="testimonial-main-card position-relative bg-light rounded p-4 p-lg-5">
              
              {/* Desktop Navigation Arrows */}
              <button 
                className={`testimonial-nav-btn prev-btn position-absolute d-none d-lg-flex ${isAnimating ? 'animating' : ''}`}
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <button 
                className={`testimonial-nav-btn next-btn position-absolute d-none d-lg-flex ${isAnimating ? 'animating' : ''}`}
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              {/* Mobile Navigation Bar */}
              <div className="mobile-nav-bar d-flex d-lg-none justify-content-center align-items-center mb-4">
                <button 
                  className={`mobile-nav-btn prev ${isAnimating ? 'animating' : ''}`}
                  onClick={handlePrev}
                  disabled={isAnimating}
                  aria-label="Previous testimonial"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                
                <div className="mobile-testimonial-counter mx-3">
                  <span>{currentTestimonial + 1} of {testimonials.length}</span>
                </div>
                
                <button 
                  className={`mobile-nav-btn next ${isAnimating ? 'animating' : ''}`}
                  onClick={handleNext}
                  disabled={isAnimating}
                  aria-label="Next testimonial"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>

              {/* Quote Icon */}
              <div className="quote-icon-wrapper mb-3">
                <i className="bi bi-quote text-primary"></i>
              </div>

              {/* Testimonial Content with Animation */}
              <div className={`testimonial-content ${slideDirection}`}>
                <p className="testimonial-text mb-4">
                  "{testimonials[currentTestimonial]?.text}"
                </p>

                <div className="testimonial-author-info d-flex align-items-center">
                  <div className="author-image me-3">
                    <img 
                      src={testimonials[currentTestimonial]?.image} 
                      alt={testimonials[currentTestimonial]?.name}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="author-details">
                    <h5 className="author-name mb-1">{testimonials[currentTestimonial]?.name}</h5>
                    <p className="author-label text-muted mb-2">Verified Patient</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="testimonial-indicators mt-4 d-flex justify-content-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator-dot ${index === currentTestimonial ? 'active' : ''} ${isAnimating ? 'disabled' : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                    disabled={isAnimating}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats and Additional Info */}
          <div className="col-12 col-lg-4">
            <div className="testimonial-stats">
              {/* Trust Stats */}
              <div className="stat-card bg-primary text-white rounded p-4 mb-3 wow zoomIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center">
                  <div className="stat-icon me-3">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h3 className="stat-number mb-0">500+</h3>
                    <p className="stat-label mb-0">Happy Patients</p>
                  </div>
                </div>
              </div>

              <div className="stat-card bg-secondary text-white rounded p-4 mb-3 wow zoomIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center">
                  <div className="stat-icon me-3">
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div>
                    <h3 className="stat-number mb-0">4.9</h3>
                    <p className="stat-label mb-0">Average Rating</p>
                  </div>
                </div>
              </div>

              <div className="stat-card bg-dark text-white rounded p-4 wow zoomIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center">
                  <div className="stat-icon me-3">
                    <i className="bi bi-award-fill"></i>
                  </div>
                  <div>
                    <h3 className="stat-number mb-0">10+</h3>
                    <p className="stat-label mb-0">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Additional Testimonial Previews */}
              <div className="testimonial-previews mt-4">
                <h6 className="text-muted mb-3">Other Reviews</h6>
                {testimonials.map((testimonial, index) => {
                  if (index === currentTestimonial) return null;
                  return (
                    <div 
                      key={index}
                      className={`preview-card d-flex align-items-center p-2 rounded mb-2 cursor-pointer ${isAnimating ? 'disabled' : ''}`}
                      onClick={() => handleIndicatorClick(index)}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="preview-image rounded-circle me-2"
                      />
                      <div className="preview-content">
                        <p className="preview-name mb-0">{testimonial.name}</p>
                        <div className="preview-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill text-warning"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials