import { useState } from 'react'
import SearchModal from './SearchModal'
import { ASSET_PATHS } from '../utils/assetPaths'

const Header = ({ activeSection, onNavigate }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavigateAndCloseMobile = (section) => {
    onNavigate(section)
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-3 px-lg-5 py-2 py-lg-3" role="navigation">
          <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('home'); }}>
            <img 
              src={ASSET_PATHS.logo} 
              alt="Suhaas Dental Care Logo" 
              className="img-fluid"
              style={{ height: '60px', maxHeight: '80px' }}
            />
          </a>
          
          <div className="d-flex align-items-center">
            <button 
              type="button" 
              className="btn text-dark me-2 d-lg-inline-block" 
              onClick={toggleSearchModal}
            >
              <i className="fa fa-search"></i>
            </button>
            
            <button 
              className="navbar-toggler border-0 p-2" 
              type="button" 
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-2 py-lg-0">
              <a 
                className={`nav-item nav-link px-3 py-2 ${activeSection === 'home' ? 'active' : ''}`} 
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('home'); }}
              >
                Home
              </a>
              <a 
                className={`nav-item nav-link px-3 py-2 ${activeSection === 'about' ? 'active' : ''}`} 
                href="#about"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('about'); }}
              >
                About
              </a>
              <a 
                className={`nav-item nav-link px-3 py-2 ${activeSection === 'services' ? 'active' : ''}`} 
                href="#services"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('services'); }}
              >
                Services
              </a>
              <div className="nav-item dropdown">
                <a 
                  href="#" 
                  className="nav-link dropdown-toggle px-3 py-2" 
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu border-0 shadow-sm" role="menu">
                  <a 
                    className="dropdown-item py-2" 
                    href="#pricing"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('pricing'); }}
                    role="menuitem"
                  >
                    Pricing Plan
                  </a>
                  <a 
                    className="dropdown-item py-2" 
                    href="#team"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('team'); }}
                    role="menuitem"
                  >
                    Our Dentist
                  </a>
                  <a 
                    className="dropdown-item py-2" 
                    href="#testimonials"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('testimonials'); }}
                    role="menuitem"
                  >
                    Testimonial
                  </a>
                  <a 
                    className="dropdown-item py-2" 
                    href="#appointment"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('appointment'); }}
                    role="menuitem"
                  >
                    Appointment
                  </a>
                </div>
              </div>
              <a 
                className={`nav-item nav-link px-3 py-2 ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('contact'); }}
              >
                Contact
              </a>
            </div>
            
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0">
              <a 
                className="btn btn-primary py-2 px-4 w-100 w-lg-auto" 
                href="#appointment"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('appointment'); }}
              >
                Appointment
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={toggleSearchModal} 
      />
    </>
  )
}

export default Header