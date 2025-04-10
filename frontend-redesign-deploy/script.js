// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Toggle hamburger icon animation
      const hamburger = this.querySelector('.hamburger');
      if (hamburger) {
        hamburger.classList.toggle('active');
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navList && navList.classList.contains('active')) {
      if (!event.target.closest('.main-nav')) {
        navList.classList.remove('active');
        
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
          hamburger.classList.remove('active');
        }
      }
    }
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu after clicking a link
        if (navList && navList.classList.contains('active')) {
          navList.classList.remove('active');
          
          const hamburger = document.querySelector('.hamburger');
          if (hamburger) {
            hamburger.classList.remove('active');
          }
        }
      }
    });
  });
  
  // Add active class to current nav link based on URL
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
      link.classList.add('active');
    } else if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
      if (linkPath === 'index.html') {
        link.classList.add('active');
      }
    }
  });
  
  // Add animation for product cards on scroll
  const productCards = document.querySelectorAll('.product-card');
  const featureCards = document.querySelectorAll('.feature-card');
  const supplierCards = document.querySelectorAll('.supplier-card');
  
  // Simple animation on scroll function
  function animateOnScroll(elements, className = 'animate') {
    if (!elements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Add CSS class for animation
  const style = document.createElement('style');
  style.textContent = `
    .product-card, .feature-card, .supplier-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .product-card.animate, .feature-card.animate, .supplier-card.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .product-card:nth-child(2), .feature-card:nth-child(2), .supplier-card:nth-child(2) {
      transition-delay: 0.1s;
    }
    
    .product-card:nth-child(3), .feature-card:nth-child(3), .supplier-card:nth-child(3) {
      transition-delay: 0.2s;
    }
    
    .product-card:nth-child(4), .feature-card:nth-child(4), .supplier-card:nth-child(4) {
      transition-delay: 0.3s;
    }
  `;
  document.head.appendChild(style);
  
  // Initialize animations
  animateOnScroll(productCards);
  animateOnScroll(featureCards);
  animateOnScroll(supplierCards);
  
  // Add hover effect for product images
  productCards.forEach(card => {
    const image = card.querySelector('.product-image img');
    if (image) {
      card.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
      });
    }
  });
});
