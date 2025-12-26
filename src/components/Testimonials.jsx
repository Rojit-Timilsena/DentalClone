import { useEffect } from 'react'
import { initializeTestimonialCarousel } from '../utils/externalLibraries'
import '../styles/Testimonials.css'
import { testimonials } from '../data/siteData'
import carousel2 from '../assets/images/carousel/carousel-2.jpg'

const Testimonials = () => {
  // Initialize Owl Carousel after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeTestimonialCarousel()
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" 
      data-wow-delay="0.1s"
      style={{
        backgroundImage: `url(${carousel2})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials