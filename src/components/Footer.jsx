import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{marginTop: '-75px'}}>
        <div className="container pt-5">
          <div className="row g-4 g-lg-5 pt-4">
            {/* Column 1: Quick Links */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
              </div>
            </div>

            {/* Column 2: Popular Links (duplicate of quick links) */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h3 className="text-white mb-4">Popular Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
              </div>
            </div>

            {/* Column 3: Get In Touch */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Main Street, Demo City, DC 12345</p>
              <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@demodentalclinic.com</p>
              <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>(555) 123-4567, (555) 987-6543</p>
            </div>

            {/* Column 4: Follow Us */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex flex-wrap">
                <a className="btn btn-lg btn-primary btn-lg-square rounded me-2 mb-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded me-2 mb-2" href="#" rel="noopener noreferrer"><i className="fab fa-facebook-f fw-normal"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded me-2 mb-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded me-2 mb-2" href="#" rel="noopener noreferrer"><i className="fab fa-instagram fw-normal"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid text-light py-4" style={{background: '#051225'}}>
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">&copy; <a className="text-white border-bottom" href="https://digitalassistant.netlify.app/" target="_blank" rel="noopener noreferrer">SuhaasDentalClinic</a>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed and Developed by <a className="text-white border-bottom" href="https://digitalassistant.netlify.app/" target="_blank" rel="noopener noreferrer">Saksham Banjade</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}

export default Footer