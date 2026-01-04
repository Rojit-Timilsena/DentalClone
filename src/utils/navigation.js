// Scroll to section utility
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const isMobile = window.innerWidth < 992;
  const headerOffset = isMobile ? 70 : 100;
  const elementPosition = element.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'auto'
  });
};

// Get active section based on scroll position
export const getActiveSection = () => {
  const sections = ['home', 'about', 'services', 'pricing', 'team', 'testimonials', 'appointment', 'contact'];
  const isMobile = window.innerWidth < 992;
  const headerOffset = isMobile ? 70 : 100;
  const scrollPosition = window.scrollY + headerOffset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  
  return 'home';
};

// Update active navigation item
export const updateActiveNav = (activeSection) => {
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`[href="#${activeSection}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
};

let isInitialized = false;

// Initialize smooth scrolling for all anchor links
export const initializeSmoothScrolling = () => {
  if (isInitialized) {
    return;
  }
  
  const handleNavClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.removeEventListener('click', handleNavClick);
    link.addEventListener('click', handleNavClick);
  });

  isInitialized = true;
};

