import { useState, useEffect } from 'react'
import './App.css'
import './styles/HeroCarousel.css'

// Core components
import LoadingSpinner from './components/LoadingSpinner'
import DeveloperPopup from './components/DeveloperPopup'
import BackToTop from './components/BackToTop'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'

// Navigation utilities
import { scrollToSection, getActiveSection, updateActiveNav, initializeSmoothScrolling } from './utils/navigation'

// External libraries integration - Exact Replica
import { initializeAllLibraries, cleanupLibraries } from './utils/externalLibraries'

// Import library test for development
import './utils/libraryTest'

// Import integration tests for development (only in development)
// TEMPORARILY DISABLED - These tests may interfere with normal operation
// if (import.meta.env.DEV) {
//   import('./test-integration')
//   import('./visual-comparison-test')
//   import('./user-interaction-test')
//   import('./final-test-report')
// }

// Component imports will be added as we create them
import Banner from './components/Banner'
import About from './components/About'
import AppointmentSection from './components/AppointmentSection'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showDeveloperPopup, setShowDeveloperPopup] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Developer popup timer (exactly 50 seconds as original)
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowDeveloperPopup(true)
    }, 50000) // Exactly 50 seconds as original

    return () => clearTimeout(popupTimer)
  }, [])

  // Initialize external libraries exactly as original HTML
  useEffect(() => {
    if (!isLoading) {
      console.log('Initializing libraries and scrolling...');
      
      // Initialize all external libraries after loading is complete
      initializeAllLibraries()
      
      // Initialize smooth scrolling after a delay to ensure DOM is ready
      setTimeout(() => {
        initializeSmoothScrolling()
      }, 500) // Shorter delay
    }

    // Cleanup on unmount
    return () => {
      cleanupLibraries()
    }
  }, [isLoading])

  // Reinitialize scrolling when components mount
  useEffect(() => {
    if (!isLoading) {
      // Reinitialize scrolling after components are rendered
      const timer = setTimeout(() => {
        initializeSmoothScrolling()
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isLoading, activeSection])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection()
      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
        updateActiveNav(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const handleNavigate = (section) => {
    setActiveSection(section)
    scrollToSection(section)
  }

  const closeDeveloperPopup = () => {
    setShowDeveloperPopup(false)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="App">
      {/* Header Component */}
      <Header 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>
        {/* Hero Carousel */}
        <HeroCarousel 
          autoPlay={true}
          interval={5000}
        />

        {/* Banner Section */}
        <Banner />

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="pricing" className="py-5">
          <Pricing />
        </section>

        <section id="team" className="py-5 bg-light">
          <Team />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="appointment">
          <AppointmentSection />
        </section>

        <section id="contact" className="py-5">
          <Contact />
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Developer Popup */}
      <DeveloperPopup 
        show={showDeveloperPopup} 
        onClose={closeDeveloperPopup} 
      />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default App