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
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0" role="navigation">
          <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('home'); }}>
            <img src={ASSET_PATHS.logo} alt="Suhaas Dental Care Logo" height="100" />
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a 
                className={`nav-item nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('home'); }}
              >
                Home
              </a>
              <a 
                className={`nav-item nav-link ${activeSection === 'about' ? 'active' : ''}`} 
                href="#about"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('about'); }}
              >
                About
              </a>
              <a 
                className={`nav-item nav-link ${activeSection === 'services' ? 'active' : ''}`} 
                href="#services"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('services'); }}
              >
                Services
              </a>
              <div className="nav-item dropdown">
                <a 
                  href="#" 
                  className="nav-link dropdown-toggle" 
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0" role="menu">
                  <a 
                    className="dropdown-item" 
                    href="#pricing"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('pricing'); }}
                    role="menuitem"
                  >
                    Pricing Plan
                  </a>
                  <a 
                    className="dropdown-item" 
                    href="#team"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('team'); }}
                    role="menuitem"
                  >
                    Our Dentist
                  </a>
                  <a 
                    className="dropdown-item" 
                    href="#testimonials"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('testimonials'); }}
                    role="menuitem"
                  >
                    Testimonial
                  </a>
                  <a 
                    className="dropdown-item" 
                    href="#appointment"
                    onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('appointment'); }}
                    role="menuitem"
                  >
                    Appointment
                  </a>
                </div>
              </div>
              <a 
                className={`nav-item nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('contact'); }}
              >
                Contact
              </a>
            </div>
            
            <button 
              type="button" 
              className="btn text-dark" 
              onClick={toggleSearchModal}
            >
              <i className="fa fa-search"></i>
            </button>
            
            <a 
              className="btn btn-primary py-2 px-4 ms-3" 
              href="#appointment"
              onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile('appointment'); }}
            >
              Appointment
            </a>
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