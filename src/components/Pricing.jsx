import { useEffect } from 'react'
import { initializePricingCarousel } from '../utils/externalLibraries'
import '../styles/Pricing.css'
import { pricingPlans } from '../data/siteData'

const Pricing = () => {
  // Initialize Owl Carousel after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      initializePricingCarousel()
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-5">
          {/* Left Column - Section Title and Description */}
          <div className="col-lg-5">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Pricing Plan
              </h5>
              <h1 className="display-5 mb-0">
                Smile Confidently: Fair & Affordable Prices
              </h1>
            </div>
            <p className="mb-4">
              we believe in making every service accessible to you at an affordable and fair price. 
              We are committed to ensuring that your dental care doesn't break the bank while 
              maintaining the highest standards of quality and professionalism. Your radiant smile 
              is our top priority, and we are dedicated to making it achievable for everyone, 
              without compromising on excellence.
            </p>
            <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">
              Call for Appointment
            </h5>
            <h1 className="wow fadeInUp" data-wow-delay="0.6s">
              (555) 123-4567
            </h1>
          </div>

          {/* Right Column - Price Carousel */}
          <div className="col-lg-7">
            <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="price-item pb-4">
                  <div className="position-relative">
                    <img 
                      className="img-fluid rounded-top" 
                      src={plan.image} 
                      alt={plan.title}
                    />
                    <div 
                      className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" 
                      style={{ zIndex: 2 }}
                    >
                      <h2 className="text-primary m-0">{plan.price}</h2>
                    </div>
                  </div>
                  <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                    <h4>{plan.title}</h4>
                    <hr className="text-primary w-50 mx-auto mt-0" />
                    {plan.features.map((feature, index) => (
                      <div key={index} className="d-flex justify-content-between mb-3">
                        <span>{feature}</span>
                        <i className="fa fa-check text-primary pt-1"></i>
                      </div>
                    ))}
                    <a 
                      className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle" 
                      href={plan.appointmentLink}
                    >
                      Appointment
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing