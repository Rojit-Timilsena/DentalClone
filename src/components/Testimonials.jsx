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
    }, 6000) // Slightly longer interval for better reading

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ASSET_PATHS.carousel.carousel2})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        marginTop: '90px',
        minHeight: '600px',
        position: 'relative'
      }}
    >
      <div className="container py-5">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="section-title-testimonial mb-4">
              <h5 className="position-relative d-inline-block text-white text-uppercase mb-3">
                <i className="bi bi-chat-quote me-2"></i>
                What Our Patients Say
              </h5>
              <h1 className="display-6 text-white mb-0">
                Real Stories from Real Smiles
              </h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 position-relative">
            {/* Main Testimonial Card */}
            <div className="testimonial-card-wrapper">
              <div 
                className="testimonial-card text-white text-center p-5 rounded-4 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, rgba(245, 126, 87, 0.9) 100%)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(245, 126, 87, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Decorative Elements */}
                <div className="testimonial-decoration">
                  <i className="bi bi-quote text-white opacity-25 position-absolute" 
                     style={{ fontSize: '120px', top: '-20px', left: '20px', zIndex: 1 }}></i>
                  <i className="bi bi-quote text-white opacity-25 position-absolute" 
                     style={{ fontSize: '120px', bottom: '-60px', right: '20px', zIndex: 1, transform: 'rotate(180deg)' }}></i>
                </div>

                {/* Navigation Arrows */}
                <button 
                  className="btn btn-light btn-navigation position-absolute start-0 top-50 translate-middle-y d-flex align-items-center justify-content-center"
                  onClick={prevTestimonial}
                  style={{ 
                    left: '-25px', 
                    zIndex: 10,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                    padding: '0'
                  }}
                >
                  <i className="bi bi-chevron-left text-primary fs-5"></i>
                </button>
                
                <button 
                  className="btn btn-light btn-navigation position-absolute end-0 top-50 translate-middle-y d-flex align-items-center justify-content-center"
                  onClick={nextTestimonial}
                  style={{ 
                    right: '-25px', 
                    zIndex: 10,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                    padding: '0'
                  }}
                >
                  <i className="bi bi-chevron-right text-primary fs-5"></i>
                </button>

                {/* Testimonial Content */}
                <div className="testimonial-content position-relative" style={{ zIndex: 5 }}>
                  {/* Profile Image with Enhanced Styling */}
                  <div className="testimonial-avatar mb-4">
                    <img 
                      className="rounded-circle testimonial-image" 
                      src={testimonials[currentTestimonial]?.image} 
                      alt={testimonials[currentTestimonial]?.name}
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'cover',
                        border: '4px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    <div className="rating-stars mt-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning me-1" style={{ fontSize: '14px' }}></i>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="testimonial-text mb-4">
                    <p className="fs-5 mb-0 lh-lg" style={{ 
                      fontStyle: 'italic',
                      fontWeight: '300',
                      maxWidth: '700px',
                      margin: '0 auto',
                      lineHeight: '1.8'
                    }}>
                      "{testimonials[currentTestimonial]?.text}"
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="customer-info">
                    <h4 className="text-white mb-1 fw-bold">{testimonials[currentTestimonial]?.name}</h4>
                    <p className="text-white-50 mb-0 small text-uppercase tracking-wide">Verified Patient</p>
                  </div>
                </div>

                {/* Enhanced Dots Navigation */}
                <div className="testimonial-dots mt-5 d-flex justify-content-center align-items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`testimonial-dot mx-2 ${index === currentTestimonial ? 'active' : ''}`}
                      style={{ 
                        width: index === currentTestimonial ? '30px' : '12px', 
                        height: '12px', 
                        borderRadius: '6px', 
                        padding: '0',
                        border: 'none',
                        background: index === currentTestimonial ? 'white' : 'rgba(255, 255, 255, 0.4)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Side Testimonial Previews */}
            <div className="testimonial-previews d-none d-lg-block">
              {testimonials.map((testimonial, index) => {
                if (index === currentTestimonial) return null;
                const isNext = index === (currentTestimonial + 1) % testimonials.length;
                const isPrev = index === (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                
                if (!isNext && !isPrev) return null;

                return (
                  <div
                    key={index}
                    className={`testimonial-preview ${isNext ? 'next' : 'prev'}`}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      [isNext ? 'right' : 'left']: '-120px',
                      width: '80px',
                      opacity: '0.6',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        objectFit: 'cover',
                        border: '2px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                      }}
                    />
                    <p className="text-white text-center mt-2 small mb-0">{testimonial.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials