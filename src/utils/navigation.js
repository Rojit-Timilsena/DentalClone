// Fast scroll to section utility - Instant navigation
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn('Section not found:', sectionId);
    return;
  }

  // Calculate position with header offset - responsive to screen size
  const isMobile = window.innerWidth < 992;
  const headerOffset = isMobile ? 70 : 100; // Match body padding-top values
  const elementPosition = element.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  // Use instant scroll for fast navigation
  window.scrollTo({
    top: offsetPosition,
    behavior: 'auto' // Changed from 'smooth' to 'auto' for instant scrolling
  });
};

// Get active section based on scroll position
export const getActiveSection = () => {
  const sections = ['home', 'about', 'services', 'pricing', 'team', 'testimonials', 'appointment', 'contact'];
  const isMobile = window.innerWidth < 992;
  const headerOffset = isMobile ? 70 : 100; // Match body padding-top values
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
  // Remove active class from all nav items
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to current section
  const activeLink = document.querySelector(`[href="#${activeSection}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
};

// Track if already initialized to prevent duplicate setup
let isInitialized = false;

// Initialize smooth scrolling for all anchor links - simplified
export const initializeSmoothScrolling = () => {
  if (isInitialized) {
    return; // Already initialized, skip
  }
  
  console.log('Initializing smooth scrolling...');
  
  // Simple approach - just handle clicks on navigation links
  const handleNavClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  // Add click listeners to all navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.removeEventListener('click', handleNavClick);
    link.addEventListener('click', handleNavClick);
  });

  console.log('Smooth scrolling initialized for', document.querySelectorAll('a[href^="#"]').length, 'links');
  isInitialized = true;
};

