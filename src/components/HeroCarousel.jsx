import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import carousel data
import { carouselSlides } from '../data/siteData'

// Import navigation utility
import { scrollToSection } from '../utils/navigation'

const HeroCarousel = ({ autoPlay = true, interval = 5000 }) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize any additional carousel functionality if needed
    return () => {
      // Cleanup if needed
    }
  }, [])

  const handleButtonClick = (link) => {
    if (link.startsWith('#')) {
      const section = link.substring(1)
      scrollToSection(section)
    } else {
      window.location.href = link
    }
  }

  return (
    <section id="home" className="container-fluid p-0">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={autoPlay ? {
          delay: interval,
          disableOnInteraction: false,
        } : false}
        navigation={{
          nextEl: '.carousel-control-next',
          prevEl: '.carousel-control-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination'
        }}
        loop={true}
        className="hero-carousel"
        id="header-carousel"
      >
        {carouselSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="carousel-item-wrapper position-relative">
              <img 
                className="w-100" 
                src={slide.image} 
                alt={`Slide ${slide.id}`}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    {slide.title}
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    {slide.subtitle}
                  </h1>
                  <div className="carousel-buttons">
                    <button
                      className={slide.primaryButton.className}
                      onClick={() => handleButtonClick(slide.primaryButton.link)}
                    >
                      {slide.primaryButton.text}
                    </button>
                    <button
                      className={slide.secondaryButton.className}
                      onClick={() => handleButtonClick(slide.secondaryButton.link)}
                    >
                      {slide.secondaryButton.text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button 
          className="carousel-control-prev" 
          type="button"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Pagination dots */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  )
}

export default HeroCarousel