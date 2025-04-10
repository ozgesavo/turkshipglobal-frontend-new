// Mobile optimization and logo integration
document.addEventListener('DOMContentLoaded', function() {
  // Logo integration
  const logoContainer = document.querySelector('.logo');
  if (logoContainer) {
    // Clear existing content
    logoContainer.innerHTML = '';
    
    // Create logo image element
    const logoImage = document.createElement('img');
    logoImage.src = 'images/turkishdrop-logo.png';
    logoImage.alt = 'TurkishDrop Logo';
    logoImage.className = 'logo-image';
    
    // Append to logo container
    logoContainer.appendChild(logoImage);
  }
  
  // Mobile menu functionality
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
  
  // User menu toggle for mobile
  const userMenuToggle = document.querySelector('.user-menu-toggle');
  const userActions = document.querySelector('.user-actions');
  
  if (userMenuToggle && userActions) {
    userMenuToggle.addEventListener('click', function() {
      userActions.classList.toggle('active');
    });
  }
  
  // Close mobile menus when clicking outside
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
    
    if (userActions && userActions.classList.contains('active')) {
      if (!event.target.closest('.user-menu-toggle') && !event.target.closest('.user-actions')) {
        userActions.classList.remove('active');
      }
    }
  });
  
  // Scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.setAttribute('aria-label', 'Sayfanın üstüne çık');
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('active');
    } else {
      scrollToTopBtn.classList.remove('active');
    }
  });
  
  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Product image gallery functionality (for product detail page)
  const thumbnailItems = document.querySelectorAll('.thumbnail-item');
  const mainProductImage = document.getElementById('main-product-image');
  
  if (thumbnailItems.length > 0 && mainProductImage) {
    thumbnailItems.forEach(item => {
      item.addEventListener('click', function() {
        // Update main image
        const imageUrl = this.getAttribute('data-image');
        mainProductImage.src = imageUrl;
        
        // Update active state
        thumbnailItems.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // Product tabs functionality (for product detail page)
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show active tab content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // Review form toggle (for product detail page)
  const writeReviewBtn = document.querySelector('.write-review-btn');
  const reviewForm = document.querySelector('.review-form');
  const cancelReviewBtn = document.querySelector('.cancel-review');
  
  if (writeReviewBtn && reviewForm) {
    writeReviewBtn.addEventListener('click', function() {
      reviewForm.style.display = 'block';
      this.style.display = 'none';
    });
    
    if (cancelReviewBtn) {
      cancelReviewBtn.addEventListener('click', function() {
        reviewForm.style.display = 'none';
        writeReviewBtn.style.display = 'block';
      });
    }
  }
  
  // Rating selection in review form
  const ratingStars = document.querySelectorAll('.rating-select i');
  
  if (ratingStars.length > 0) {
    ratingStars.forEach(star => {
      star.addEventListener('mouseover', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        
        // Update stars on hover
        ratingStars.forEach((s, index) => {
          if (index < rating) {
            s.className = 'fas fa-star';
          } else {
            s.className = 'far fa-star';
          }
        });
      });
      
      star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        
        // Set selected rating
        ratingStars.forEach((s, index) => {
          if (index < rating) {
            s.className = 'fas fa-star';
          } else {
            s.className = 'far fa-star';
          }
        });
        
        // Store rating value (could be used when submitting form)
        this.closest('.form-group').setAttribute('data-selected-rating', rating);
      });
    });
    
    // Reset stars when mouse leaves rating container
    const ratingContainer = document.querySelector('.rating-select');
    if (ratingContainer) {
      ratingContainer.addEventListener('mouseleave', function() {
        const selectedRating = parseInt(this.closest('.form-group').getAttribute('data-selected-rating') || 0);
        
        ratingStars.forEach((s, index) => {
          if (index < selectedRating) {
            s.className = 'fas fa-star';
          } else {
            s.className = 'far fa-star';
          }
        });
      });
    }
  }
  
  // Quantity input functionality
  const quantityDecrease = document.querySelector('.quantity-decrease');
  const quantityIncrease = document.querySelector('.quantity-increase');
  const quantityInput = document.querySelector('.quantity-input input');
  
  if (quantityDecrease && quantityIncrease && quantityInput) {
    quantityDecrease.addEventListener('click', function() {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > parseInt(quantityInput.min)) {
        quantityInput.value = currentValue - 1;
      }
    });
    
    quantityIncrease.addEventListener('click', function() {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue < parseInt(quantityInput.max)) {
        quantityInput.value = currentValue + 1;
      }
    });
  }
  
  // Filter functionality
  const filterButton = document.querySelector('.filter-button');
  const clearFiltersButton = document.querySelector('.clear-filters');
  const filterTags = document.querySelectorAll('.filter-tag-remove');
  
  if (filterButton) {
    filterButton.addEventListener('click', function() {
      // In a real application, this would apply filters
      // For now, just show a message
      alert('Filtreler uygulandı');
    });
  }
  
  if (clearFiltersButton) {
    clearFiltersButton.addEventListener('click', function() {
      // In a real application, this would clear all filters
      // For now, just show a message
      alert('Tüm filtreler temizlendi');
    });
  }
  
  if (filterTags.length > 0) {
    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        // In a real application, this would remove the specific filter
        // For now, just remove the tag from the DOM
        this.closest('.filter-tag').remove();
      });
    });
  }
  
  // Add to cart functionality
  const addToCartButton = document.querySelector('.add-to-cart');
  
  if (addToCartButton) {
    addToCartButton.addEventListener('click', function() {
      // In a real application, this would add the product to cart
      // For now, just show a message
      alert('Ürün sepete eklendi');
    });
  }
  
  // Wishlist functionality
  const wishlistButton = document.querySelector('.wishlist-btn');
  
  if (wishlistButton) {
    wishlistButton.addEventListener('click', function() {
      // Toggle wishlist icon
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        alert('Ürün favorilere eklendi');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        alert('Ürün favorilerden çıkarıldı');
      }
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real application, this would submit the form
      // For now, just show a message
      alert('Bültene abone oldunuz!');
      this.reset();
    });
  }
  
  // Lazy loading images for better performance
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    // This would typically use a library like lozad.js
    console.log('Browser does not support native lazy loading');
  }
  
  // Touch-friendly improvements for mobile
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    // Add a class to the body for touch-specific CSS
    document.body.classList.add('touch-device');
    
    // Increase hit areas for interactive elements on touch devices
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .option-button');
    interactiveElements.forEach(el => {
      if (el.offsetWidth < 44 || el.offsetHeight < 44) {
        el.classList.add('touch-target');
      }
    });
  }
});
