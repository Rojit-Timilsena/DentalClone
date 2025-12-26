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

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll with easing exactly as original
  const scrollToTop = (e) => {
    e.preventDefault();
    
    // Use jQuery easing if available, otherwise fallback to smooth scroll
    const $ = window.$ || window.jQuery;
    if ($ && typeof $.fn.animate === 'function') {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    } else {
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
          display: isVisible ? 'block' : 'none'
        }}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default BackToTop;