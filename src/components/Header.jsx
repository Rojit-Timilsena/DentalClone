import { useState, useCallback, memo } from 'react'
import SearchModal from './SearchModal'
import { ASSET_PATHS } from '../utils/assetPaths'

const Header = memo(({ activeSection, onNavigate }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleSearchModal = useCallback(() => {
    setSearchModalOpen(prev => !prev)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const handleNavigateAndCloseMobile = useCallback((section) => {
    onNavigate(section)
    setMobileMenuOpen(false)
  }, [onNavigate])

  const handleLogoClick = useCallback((e) => {
    e.preventDefault()
    handleNavigateAndCloseMobile('home')
  }, [handleNavigateAndCloseMobile])

  return (
    <>
      <header>
        <nav 
          className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-3 px-lg-5 py-2 py-lg-3 fixed-top" 
          role="navigation"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 1030,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%'
          }}
        >
          <a href="#home" className="navbar-brand" onClick={handleLogoClick}>
            <img 
              src={ASSET_PATHS.logo} 
              alt="Suhaas Dental Care Logo" 
              className="img-fluid"
              style={{ height: '60px', maxHeight: '80px' }}
              loading="eager"
            />
          </a>
          
          <div className="d-flex align-items-center">
            <button 
              type="button" 
              className="btn text-dark me-2 d-lg-inline-block" 
              onClick={toggleSearchModal}
              aria-label="Search"
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
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' }
              ].map(({ id, label }) => (
                <a 
                  key={id}
                  className={`nav-item nav-link px-3 py-2 ${activeSection === id ? 'active' : ''}`} 
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile(id); }}
                >
                  {label}
                </a>
              ))}
              
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
                  {[
                    { id: 'pricing', label: 'Pricing Plan' },
                    { id: 'team', label: 'Our Dentist' },
                    { id: 'testimonials', label: 'Testimonial' },
                    { id: 'appointment', label: 'Appointment' }
                  ].map(({ id, label }) => (
                    <a 
                      key={id}
                      className="dropdown-item py-2" 
                      href={`#${id}`}
                      onClick={(e) => { e.preventDefault(); handleNavigateAndCloseMobile(id); }}
                      role="menuitem"
                    >
                      {label}
                    </a>
                  ))}
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

      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={toggleSearchModal} 
      />
    </>
  )
})

Header.displayName = 'Header'

export default Header