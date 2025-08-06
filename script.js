// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

// ===== STATIC SCROLLING =====
// Smooth scrolling removed - page is now static

// ===== STATIC NAVBAR =====
// Navbar is now static - no scroll effects

// ===== STATIC MENU ITEMS =====
// Menu items are now static - no hover animations

// ===== CONTACT FORM VALIDATION (if you add a form later) =====
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// ===== STATIC PAGE =====
// Scroll to top button removed - page is now static

// ===== LAZY LOADING FOR IMAGES =====
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE OPTIMIZATION =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounce scroll events
const debouncedScrollHandler = debounce(function() {
  // Scroll handling logic
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
  // Add ARIA labels to interactive elements
  const buttons = document.querySelectorAll('.btn, .action-card');
  buttons.forEach((button, index) => {
    if (!button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', button.textContent.trim());
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
});

// ===== ANALYTICS TRACKING (Optional) =====
function initAnalytics() {
  // Google Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID');
  }
  
  // Track page views
  console.log('Page loaded successfully');
}

// ===== COOKIE CONSENT (Optional) =====
function showCookieConsent() {
  const consentBanner = document.createElement('div');
  consentBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 20px;
      text-align: center;
      z-index: 10000;
    ">
      <p>We use cookies to enhance your experience. 
      <button onclick="acceptCookies()" style="
        background: #ffd700;
        color: #000;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        margin-left: 10px;
        cursor: pointer;
      ">Accept</button>
      </p>
    </div>
  `;
  document.body.appendChild(consentBanner);
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.querySelector('[style*="position: fixed"]').remove();
}

// Check if cookies were already accepted
if (!localStorage.getItem('cookiesAccepted')) {
  // Uncomment to show cookie consent
  // setTimeout(showCookieConsent, 2000);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('Namaaste London website loaded successfully!');
  
  // Initialize lazy loading
  lazyLoadImages();
  
  // Initialize analytics
  initAnalytics();
}); 