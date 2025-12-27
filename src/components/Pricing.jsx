import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/Pricing.css'
import { pricingPlans } from '../data/siteData'
import { ASSET_PATHS } from '../utils/assetPaths'

const Pricing = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Left Column - Section Title and Description */}
          <div className="col-12 col-lg-5 order-1">
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
              <a href="tel:+15551234567" className="text-decoration-none text-dark">
                (555) 123-4567
              </a>
            </h1>
          </div>

          {/* Right Column - Two Images (Mobile: Show second, side by side on small screens) */}
          <div className="col-12 col-sm-6 col-lg-3 order-3 order-sm-2 order-lg-3">
            <div className="row g-3">
              <div className="col-6 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
                <img 
                  src={ASSET_PATHS.services.service5} 
                  alt="Dental Equipment" 
                  className="img-fluid rounded shadow w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
                <img 
                  src={ASSET_PATHS.services.service6} 
                  alt="Modern Clinic" 
                  className="img-fluid rounded shadow w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Middle Column - Price Carousel using Swiper */}
          <div className="col-12 col-sm-6 col-lg-4 order-2 order-sm-3 order-lg-2">
            <div className="pricing-carousel-container wow zoomIn" data-wow-delay="0.9s">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={1}
                navigation={{
                  nextEl: '.pricing-swiper-button-next',
                  prevEl: '.pricing-swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.pricing-swiper-pagination'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  992: {
                    slidesPerView: 1,
                    spaceBetween: 25
                  },
                  1200: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  }
                }}
                className="pricing-swiper"
                style={{ width: '100%', height: 'auto' }}
              >
                {pricingPlans.map((plan) => (
                  <SwiperSlide key={plan.id}>
                    <div className="price-item pb-4" style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                      <div className="position-relative">
                        <img 
                          className="img-fluid rounded-top w-100" 
                          src={plan.image} 
                          alt={plan.title}
                          style={{ height: '180px', objectFit: 'cover' }}
                        />
                        <div 
                          className="d-flex align-items-center justify-content-center bg-light rounded px-3 position-absolute" 
                          style={{ 
                            zIndex: 2,
                            bottom: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            minWidth: '80px',
                            height: '28px'
                          }}
                        >
                          <h2 className="text-primary m-0 fs-4">{plan.price}</h2>
                        </div>
                      </div>
                      <div className="position-relative text-center bg-light border-bottom border-primary p-3" style={{ marginTop: '15px', paddingTop: '25px' }}>
                        <h4 className="mb-3 fs-5">{plan.title}</h4>
                        <hr className="text-primary w-50 mx-auto mt-0 mb-3" />
                        {plan.features.map((feature, index) => (
                          <div key={index} className="d-flex justify-content-between mb-2">
                            <span className="small">{feature}</span>
                            <i className="fa fa-check text-primary pt-1"></i>
                          </div>
                        ))}
                        <div className="mt-4 pt-3">
                          <a 
                            className="btn btn-primary py-2 px-3" 
                            href={plan.appointmentLink}
                          >
                            Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <div className="pricing-swiper-button-prev swiper-button-prev"></div>
              <div className="pricing-swiper-button-next swiper-button-next"></div>
              
              {/* Custom Pagination */}
              <div className="pricing-swiper-pagination swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing