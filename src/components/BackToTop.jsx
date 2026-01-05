import { useState, useEffect, useCallback, memo } from 'react'

const BackToTop = memo(() => {
  const [isVisible, setIsVisible] = useState(false)

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false
    
    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })  
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Memoized scroll handler - React-only version
  const scrollToTop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Use native smooth scrolling
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    })
    return false
  }, [])

  if (!isVisible) return null

  return (
    <button 
      className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        padding: '0',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer'
      }}
      aria-label="Back to top"
    >
      <i 
        className="bi bi-arrow-up" 
        style={{ 
          fontSize: '18px',
          lineHeight: '1'
        }}
      />
    </button>
  )
})

BackToTop.displayName = 'BackToTop'

export default BackToTop