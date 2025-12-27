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

  // Check if mobile
  const isMobile = window.innerWidth <= 767;

  return (
    <>
      <a 
        href="#" 
        className={`btn btn-lg btn-primary btn-lg-square rounded back-to-top ${isVisible ? 'd-block' : 'd-none'}`}
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: isMobile ? '20px' : '30px',
          right: isMobile ? '20px' : '30px',
          zIndex: 1000,
          display: isVisible ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.3s ease',
          width: isMobile ? '50px' : '46px',
          height: isMobile ? '50px' : '46px',
          padding: '0',
          borderRadius: isMobile ? '8px' : '50%',
          textAlign: 'center',
          lineHeight: '1'
        }}
        aria-label="Back to top"
      >
        <i 
          className="bi bi-arrow-up" 
          style={{ 
            fontSize: isMobile ? '18px' : '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            margin: '0',
            padding: '0',
            lineHeight: '1'
          }}
        ></i>
      </a>
    </>
  );
};

export default BackToTop;