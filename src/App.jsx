import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import './App.css'
import './styles/HeroCarousel.css'

// Core components (keep these for immediate render)
import LoadingSpinner from './components/LoadingSpinner'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'

// Lazy load components for better performance
const DeveloperPopup = lazy(() => import('./components/DeveloperPopup'))
const BackToTop = lazy(() => import('./components/BackToTop'))
const Banner = lazy(() => import('./components/Banner'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Pricing = lazy(() => import('./components/Pricing'))
const Team = lazy(() => import('./components/Team'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const AppointmentSection = lazy(() => import('./components/AppointmentSection'))
const Contact = lazy(() => import('./components/Contact'))
const Newsletter = lazy(() => import('./components/Newsletter'))
const Footer = lazy(() => import('./components/Footer'))

// Navigation utilities
import { scrollToSection, getActiveSection, updateActiveNav, initializeSmoothScrolling } from './utils/navigation'

// External libraries integration
import { initializeAllLibraries, cleanupLibraries } from './utils/externalLibraries'

// Asset preloading
import { preloadCriticalImages } from './utils/assetPaths'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showDeveloperPopup, setShowDeveloperPopup] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Memoize navigation handler to prevent unnecessary re-renders
  const handleNavigate = useCallback((section) => {
    setActiveSection(section)
    scrollToSection(section)
  }, [])

  // Memoize popup close handler
  const closeDeveloperPopup = useCallback(() => {
    setShowDeveloperPopup(false)
  }, [])

  // Loading simulation with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Developer popup timer with cleanup
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowDeveloperPopup(true)
    }, 50000)

    return () => clearTimeout(popupTimer)
  }, [])

  // Initialize external libraries with proper cleanup
  useEffect(() => {
    if (!isLoading) {
      // Preload critical images
      preloadCriticalImages()
      
      initializeAllLibraries()
      
      const scrollTimer = setTimeout(() => {
        initializeSmoothScrolling()
      }, 500)
      
      return () => {
        clearTimeout(scrollTimer)
        cleanupLibraries()
      }
    }
  }, [isLoading])

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentSection = getActiveSection()
          if (currentSection !== activeSection) {
            setActiveSection(currentSection)
            updateActiveNav(currentSection)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // Memoize hero carousel props
  const heroCarouselProps = useMemo(() => ({
    autoPlay: true,
    interval: 5000
  }), [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="App">
      <Header 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroCarousel {...heroCarouselProps} />

        <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
          <Banner />
        </Suspense>

        <section id="about">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <About />
          </Suspense>
        </section>

        <section id="services">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <Services />
          </Suspense>
        </section>

        <section id="pricing" className="py-5">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <Pricing />
          </Suspense>
        </section>

        <section id="team">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <Team />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <Testimonials />
          </Suspense>
        </section>

        <section id="appointment">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <AppointmentSection />
          </Suspense>
        </section>

        <section id="contact" className="py-5">
          <Suspense fallback={<div className="loading-placeholder" style={{ height: '400px' }} />}>
            <Contact />
          </Suspense>
        </section>

        <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
          <Newsletter />
        </Suspense>
      </main>

      <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <DeveloperPopup 
          show={showDeveloperPopup} 
          onClose={closeDeveloperPopup} 
        />
      </Suspense>

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  )
}

export default App