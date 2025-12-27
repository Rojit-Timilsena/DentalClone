import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down - exactly as original (300px)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll with easing exactly as original
  const scrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Use jQuery easing if available, otherwise fallback to smooth scroll
    const $ = window.$ || window.jQuery;
    if ($ && typeof $.fn.animate === 'function' && typeof $.easing !== 'undefined') {
      try {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      } catch (error) {
        // Fallback if jQuery easing fails
        console.warn('jQuery easing failed, using native smooth scroll:', error);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else {
      // Native smooth scroll fallback
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    return false;
  };

  return (
    <>
      <a 
        href="#" 
        className={`btn btn-lg btn-primary btn-lg-square rounded back-to-top ${isVisible ? 'd-block' : 'd-none'}`}
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
          display: isVisible ? 'block' : 'none',
          transition: 'opacity 0.3s ease' // Smooth fade transition
        }}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default BackToTop;