import React from 'react'
import { ASSET_PATHS } from '../utils/assetPaths'

const About = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title mb-4">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
              <h1 className="display-5 mb-0">Standard Dental Care for the entire Family</h1>
            </div>
            <h4 className="text-body fst-italic mb-4">
              Running 7 days a week, 2 full time dental surgeon, 1 full time dental hygienist and availability of specialist on Appointment.
            </h4>
            <p className="mb-4">
              Demo Dental Care is a dental practice which is transforming dentistry through better equipments, materials together with qualified and skilled dental professionals in a quiet and family environment. 
              <span> So if you are looking for the best dental care then look no further</span>
            </p>
            <div className="row g-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3"></i>Opening 7 days a week
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3"></i>Professional Staff
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3"></i>Quality service
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3"></i>Proper Sterilization
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check-circle text-primary me-3"></i>Reasonable pricing
                </h5>
              </div>
            </div>
            <a 
              className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" 
              data-wow-delay="0.6s" 
              href="/appointment"
            >
              Make Appointment
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100 about-image">
              <img 
                className="position-absolute w-100 h-100 rounded wow zoomIn" 
                data-wow-delay="0.9s" 
                src={ASSET_PATHS.about} 
                alt="About Demo Dental Care"
                style={{ 
                  objectFit: 'cover', 
                  top: '128px' 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About