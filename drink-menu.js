// ===== MENU FILTERING FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const menuSections = document.querySelectorAll('.menu-section');
  
  // Add click event listeners to navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Remove active class from all buttons
      navButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter menu sections
      filterMenu(category);
    });
  });
  
  // Filter function
  function filterMenu(category) {
    menuSections.forEach(section => {
      const sectionCategory = section.getAttribute('data-category');
      
      if (category === 'all' || category === sectionCategory) {
        section.style.display = 'block';
        section.classList.remove('hidden');
        
        // Add animation for visible sections
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }, 100);
      } else {
        section.style.display = 'none';
        section.classList.add('hidden');
      }
    });
  }
  
  // Initialize with all items visible
  filterMenu('all');
});

// ===== MENU ITEM HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// ===== DRINK FEATURE HIGHLIGHTING =====
document.addEventListener('DOMContentLoaded', function() {
  const drinkFeatures = document.querySelectorAll('.drink-features');
  
  drinkFeatures.forEach(featureContainer => {
    const features = featureContainer.querySelectorAll('.feature');
    
    features.forEach(feature => {
      feature.addEventListener('click', function() {
        // Toggle highlight effect
        this.style.background = this.style.background === 'rgb(255, 215, 0)' 
          ? '#f8f9fa' 
          : '#ffd700';
        this.style.color = this.style.color === 'rgb(0, 0, 0)' 
          ? '#666' 
          : '#000';
      });
    });
  });
});

// ===== PRICE ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
  const prices = document.querySelectorAll('.price');
  
  prices.forEach(price => {
    price.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
      this.style.color = '#ffed4e';
    });
    
    price.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.color = '#ffd700';
    });
  });
});

// ===== TEMPERATURE FILTERING =====
function addTemperatureFilter() {
  const tempFilter = document.createElement('div');
  tempFilter.className = 'temp-filter';
  tempFilter.innerHTML = `
    <div style="
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
      flex-wrap: wrap;
    ">
      <button class="temp-btn active" data-temp="all">All</button>
      <button class="temp-btn" data-temp="hot">Hot Drinks</button>
      <button class="temp-btn" data-temp="cold">Cold Drinks</button>
    </div>
  `;
  
  const menuNav = document.querySelector('.menu-nav .container');
  menuNav.appendChild(tempFilter);
  
  // Style the temperature buttons
  const tempBtns = tempFilter.querySelectorAll('.temp-btn');
  tempBtns.forEach(btn => {
    btn.style.cssText = `
      background: white;
      border: 2px solid #e9ecef;
      color: #666;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 500;
      font-size: 0.8rem;
      transition: all 0.3s ease;
      font-family: 'Poppins', sans-serif;
    `;
    
    btn.addEventListener('click', function() {
      tempBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const temp = this.getAttribute('data-temp');
      filterByTemperature(temp);
    });
  });
}

function filterByTemperature(temperature) {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    const features = item.querySelectorAll('.feature');
    let hasHot = false;
    let hasCold = false;
    
    features.forEach(feature => {
      if (feature.textContent.includes('Hot')) hasHot = true;
      if (feature.textContent.includes('Cold')) hasCold = true;
    });
    
    if (temperature === 'all' || 
        (temperature === 'hot' && hasHot) || 
        (temperature === 'cold' && hasCold)) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });
}

// ===== DIETARY FILTERING =====
function addDietaryFilter() {
  const dietaryFilter = document.createElement('div');
  dietaryFilter.className = 'dietary-filter';
  dietaryFilter.innerHTML = `
    <div style="
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
      flex-wrap: wrap;
    ">
      <button class="dietary-btn active" data-dietary="all">All</button>
      <button class="dietary-btn" data-dietary="vegan">Vegan</button>
      <button class="dietary-btn" data-dietary="dairy">Dairy</button>
    </div>
  `;
  
  const menuNav = document.querySelector('.menu-nav .container');
  menuNav.appendChild(dietaryFilter);
  
  // Style the dietary buttons
  const dietaryBtns = dietaryFilter.querySelectorAll('.dietary-btn');
  dietaryBtns.forEach(btn => {
    btn.style.cssText = `
      background: white;
      border: 2px solid #e9ecef;
      color: #666;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 500;
      font-size: 0.8rem;
      transition: all 0.3s ease;
      font-family: 'Poppins', sans-serif;
    `;
    
    btn.addEventListener('click', function() {
      dietaryBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const dietary = this.getAttribute('data-dietary');
      filterByDietary(dietary);
    });
  });
}

function filterByDietary(dietary) {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    const features = item.querySelectorAll('.feature');
    let isVegan = false;
    let hasDairy = false;
    
    features.forEach(feature => {
      if (feature.textContent.includes('Vegan')) isVegan = true;
      if (feature.textContent.includes('Dairy')) hasDairy = true;
    });
    
    if (dietary === 'all' || 
        (dietary === 'vegan' && isVegan) || 
        (dietary === 'dairy' && hasDairy)) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });
}

// ===== SEARCH FUNCTIONALITY =====
function addSearchFunctionality() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search drinks...';
  searchInput.className = 'drink-search';
  searchInput.style.cssText = `
    width: 100%;
    max-width: 300px;
    padding: 12px 20px;
    border: 2px solid #e9ecef;
    border-radius: 25px;
    font-size: 1rem;
    margin: 20px auto;
    display: block;
    font-family: 'Poppins', sans-serif;
  `;
  
  const menuNav = document.querySelector('.menu-nav .container');
  menuNav.appendChild(searchInput);
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
      const itemName = item.querySelector('h3').textContent.toLowerCase();
      const itemDesc = item.querySelector('.description').textContent.toLowerCase();
      
      if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
        item.style.display = 'block';
        item.style.opacity = '1';
      } else {
        item.style.display = 'none';
        item.style.opacity = '0';
      }
    });
  });
}

// ===== PRINT FUNCTIONALITY =====
function addPrintButton() {
  const printBtn = document.createElement('button');
  printBtn.textContent = 'Print Menu';
  printBtn.className = 'print-btn';
  printBtn.style.cssText = `
    background: #ffd700;
    color: #000;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
  `;
  
  const menuNav = document.querySelector('.menu-nav .container');
  menuNav.appendChild(printBtn);
  
  printBtn.addEventListener('click', function() {
    window.print();
  });
}

// ===== SHARE FUNCTIONALITY =====
function addShareButton() {
  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Share Menu';
  shareBtn.className = 'share-btn';
  shareBtn.style.cssText = `
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
  `;
  
  const menuNav = document.querySelector('.menu-nav .container');
  menuNav.appendChild(shareBtn);
  
  shareBtn.addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: 'Namaaste London Drink Menu',
        text: 'Check out our refreshing drink menu!',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        alert('Menu URL copied to clipboard!');
      });
    }
  });
}

// ===== LAZY LOADING FOR MENU ITEMS =====
function addLazyLoading() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  menuItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
  const navButtons = document.querySelectorAll('.nav-btn');
  const activeButton = document.querySelector('.nav-btn.active');
  const activeIndex = Array.from(navButtons).indexOf(activeButton);
  
  switch(e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      const prevIndex = activeIndex > 0 ? activeIndex - 1 : navButtons.length - 1;
      navButtons[prevIndex].click();
      break;
    case 'ArrowRight':
      e.preventDefault();
      const nextIndex = activeIndex < navButtons.length - 1 ? activeIndex + 1 : 0;
      navButtons[nextIndex].click();
      break;
    case 'Enter':
      if (document.activeElement.classList.contains('nav-btn')) {
        e.preventDefault();
        document.activeElement.click();
      }
      break;
  }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
  // Add ARIA labels to navigation buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    const category = button.getAttribute('data-category');
    button.setAttribute('aria-label', `Show ${category} drinks`);
  });
  
  // Add ARIA labels to menu items
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    const itemName = item.querySelector('h3').textContent;
    const price = item.querySelector('.price').textContent;
    item.setAttribute('aria-label', `${itemName} - ${price}`);
  });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce search input
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

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
  console.error('Drink menu error:', e.error);
  // You can add error reporting here
});

// ===== ANALYTICS TRACKING =====
function trackMenuInteraction(action, category) {
  // Google Analytics tracking (if available)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'menu_interaction', {
      'event_category': 'drink_menu',
      'event_label': action,
      'value': category
    });
  }
  
  // Custom tracking
  console.log(`Drink menu interaction: ${action} - ${category}`);
}

// ===== INITIALIZE ADDITIONAL FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
  // Uncomment these lines to add additional features
  // addTemperatureFilter();
  // addDietaryFilter();
  // addSearchFunctionality();
  // addPrintButton();
  // addShareButton();
  addLazyLoading();
  
  // Track menu page view
  trackMenuInteraction('page_view', 'drink_menu');
}); 