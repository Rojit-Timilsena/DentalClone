import { ASSET_PATHS } from '../utils/assetPaths'
import { services } from '../data/siteData'

const Services = () => {

  return (
    <div className="container-fluid py-3 py-lg-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        {/* First Row - Before/After and First Two Services */}
        <div className="row g-3 g-lg-5 mb-4 mb-lg-5">
          {/* Left Side - Simple Before/After Comparison */}
          <div className="col-12 col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: '300px' }}>
            <div className="position-relative h-100 rounded overflow-hidden">
              {/* Before/After Images Side by Side */}
              <div className="row g-0 h-100">
                <div className="col-6 position-relative">
                  <img 
                    className="w-100 h-100" 
                    src={ASSET_PATHS.services.before} 
                    alt="Before Treatment"
                    style={{ objectFit: 'cover', minHeight: '200px' }}
                  />
                  <div className="position-absolute bottom-0 start-1 bg-dark text-white px-4 py-1 small">
                    Before
                  </div>
                </div>
                <div className="col-6 position-relative">
                  <img 
                    className="w-100 h-100" 
                    src={ASSET_PATHS.services.after} 
                    alt="After Treatment"
                    style={{ objectFit: 'cover', minHeight: '200px' }}
                  />
                  <div className="position-absolute bottom-0 end-0 bg-primary text-white px-5 py-1 small">
                    After
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Section Title and First Two Service Cards */}
          <div className="col-12 col-lg-7">
            <div className="section-title mb-4 mb-lg-5">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
              <h1 className="display-5 mb-0">We Offer The Best Quality Dental Services</h1>
            </div>
            <div className="row g-3 g-lg-5">
              {/* First Two Services from siteData */}
              {services.slice(0, 2).map((service, index) => (
                <div key={service.id} className="col-6 col-md-6 service-item wow zoomIn" data-wow-delay={`${0.6 + index * 0.3}s`}>
                  <div className="rounded-top overflow-hidden">
                    <img 
                      className="img-fluid" 
                      src={service.image} 
                      alt={service.title}
                      style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-3 p-lg-4">
                    <h5 className="m-0 small"><strong>{service.title}</strong></h5>
                    <p className="small text-muted mt-1 mb-0">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Remaining Services and "And so forth" Card */}
        <div className="row g-3 g-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          {/* Left Side - Remaining Service Cards */}
          <div className="col-12 col-lg-7">
            <div className="row g-3 g-lg-4">
              {/* Remaining Services from siteData */}
              {services.slice(2).map((service, index) => (
                <div key={service.id} className="col-6 col-md-6 service-item wow zoomIn" data-wow-delay={`${0.3 + index * 0.3}s`}>
                  <div className="rounded-top overflow-hidden">
                    <img 
                      className="img-fluid" 
                      src={service.image} 
                      alt={service.title}
                      style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-3 p-lg-4">
                    <h5 className="m-0 small"><strong>{service.title}</strong></h5>
                    <p className="small text-muted mt-1 mb-0">{service.description}</p>
                  </div>
                </div>
              ))}

              {/* Additional Static Services to fill the grid */}
              <div className="col-6 col-md-6 service-item wow zoomIn" data-wow-delay="1.2s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service5} 
                    alt="Teeth Cleaning"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-3 p-lg-4">
                  <h5 className="m-0 small"><strong>Teeth Cleaning</strong></h5>
                  <p className="small text-muted mt-1 mb-0">Professional dental cleaning services</p>
                </div>
              </div>

              <div className="col-6 col-md-6 service-item wow zoomIn" data-wow-delay="1.5s">
                <div className="rounded-top overflow-hidden">
                  <img 
                    className="img-fluid" 
                    src={ASSET_PATHS.services.service6} 
                    alt="Orthodontics"
                    style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="position-relative bg-light rounded-bottom text-center p-3 p-lg-4">
                  <h5 className="m-0 small"><strong>Orthodontics</strong></h5>
                  <p className="small text-muted mt-1 mb-0">Teeth alignment and braces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - "And so forth" Card */}
          <div className="col-12 col-lg-5 service-item wow zoomIn" data-wow-delay="1.8s">
            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4" style={{ minHeight: '250px' }}>
              <h3 className="text-white mb-3 fs-4">And so forth</h3>
              <p className="text-white mb-3 small">These are some basic services we provide, We provide countless services at reasonable price.</p>
              <a 
                href="https://underconstruction-digitalaide.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark py-2 px-4"
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