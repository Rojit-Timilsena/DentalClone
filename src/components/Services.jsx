import React from 'react'
import { ASSET_PATHS } from '../utils/assetPaths'

const Services = () => {

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        {/* First Row - Before/After and First Two Services */}
        <div className="row g-5 mb-5">
          {/* Left Side - Simple Before/After Comparison */}
          <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              {/* Before/After Images Side by Side */}
              <div className="row g-0 h-100">
                <div className="col-6 position-relative">
                  <img 
                    className="w-100 h-100" 
                    src={ASSET_PATHS.services.before} 
                    alt="Before Treatment"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 small">
                    Before
                  </div>
                </div>
                <div className="col-6 position-relative">
                  <img 
                    className="w-100 h-100" 
                    src={ASSET_PATHS.services.after} 
                    alt="After Treatment"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 end-0 bg-primary text-white px-2 py-1 small">
                    After
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Section Title and First Two Service Cards */}
          <div className="col-lg-7">
            <div className="section-title mb-5">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
              <h1 className="display-5 mb-0">We Offer The Best Quality Dental Services</h1>
            </div>
            <div className="row g-5">
              {/* Service Card 1 - Oral Examination */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service1} 
                    alt="Oral Examination"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Oral Examination</strong></h5>
                </div>
              </div>

              {/* Service Card 2 - Dental X-ray */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service2} 
                    alt="Dental X-ray"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Dental x-ray</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Remaining Services and "And so forth" Card */}
        <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
          {/* Left Side - Four Service Cards in 2x2 Grid */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* Service Card 3 - Dental Filling */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service3} 
                    alt="Dental Filling"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Dental Filling</strong></h5>
                </div>
              </div>

              {/* Service Card 4 - Teeth Whitening */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service4} 
                    alt="Teeth Whitening"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Teeth Whitening</strong></h5>
                </div>
              </div>

              {/* Service Card 5 - Teeth Cleaning */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service5} 
                    alt="Teeth Cleaning"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Teeth Cleaning</strong></h5>
                </div>
              </div>

              {/* Service Card 6 - Orthodontics */}
              <div className="col-md-6 service-item wow zoomIn" data-wow-delay="1.2s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service6} 
                    alt="Orthodontics"
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-4">
                  <h5 className="m-0"><strong>Orthodontics</strong></h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - "And so forth" Card */}
          <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="1.5s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
              <h3 className="text-white mb-3">And so forth</h3>
              <p className="text-white mb-3">These are some basic services we provide, We provide countless services at reasonable price.</p>
              <a 
                href="https://underconstruction-digitalaide.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark py-3 px-5 me-3"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services