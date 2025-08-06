// ===== MENU FILTERING FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Food menu filtering
    const foodNavButtons = document.querySelectorAll('.menu-section:not(.coffee-section) .menu-nav .nav-btn');
    const foodMenuCategories = document.querySelectorAll('.menu-section:not(.coffee-section) .menu-category');
    
    foodNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            foodNavButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            filterFoodMenu(category);
        });
    });
    
    function filterFoodMenu(category) {
        foodMenuCategories.forEach(cat => {
            if (category === 'all' || cat.getAttribute('data-category') === category) {
                cat.style.display = 'block';
                // Add animation
                cat.style.opacity = '0';
                cat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    cat.style.opacity = '1';
                    cat.style.transform = 'translateY(0)';
                }, 100);
            } else {
                cat.style.display = 'none';
            }
        });
    }
    
    // Coffee menu filtering
    const coffeeNavButtons = document.querySelectorAll('.coffee-section .menu-nav .nav-btn');
    const coffeeMenuCategories = document.querySelectorAll('.coffee-section .menu-category');
    
    coffeeNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            coffeeNavButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            filterCoffeeMenu(category);
        });
    });
    
    function filterCoffeeMenu(category) {
        coffeeMenuCategories.forEach(cat => {
            if (category === 'all-coffee' || cat.getAttribute('data-category') === category) {
                cat.style.display = 'block';
                // Add animation
                cat.style.opacity = '0';
                cat.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    cat.style.opacity = '1';
                    cat.style.transform = 'translateY(0)';
                }, 100);
            } else {
                cat.style.display = 'none';
            }
        });
    }
    
    // Initialize with all items
    filterFoodMenu('all');
    filterCoffeeMenu('all-coffee');
});

// ===== SMOOTH SCROLLING =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== MENU ITEM HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ===== PRICE ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const prices = document.querySelectorAll('.price');
    
    prices.forEach(price => {
        price.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        price.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// ===== SPICE LEVEL TOOLTIPS =====
document.addEventListener('DOMContentLoaded', function() {
    const spiceIndicators = document.querySelectorAll('.spice-indicator');
    
    spiceIndicators.forEach(indicator => {
        indicator.addEventListener('mouseenter', function() {
            showTooltip(this, getSpiceDescription(this.textContent));
        });
        
        indicator.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
    
    function getSpiceDescription(spiceLevel) {
        const descriptions = {
            'Mild Spice': 'Perfect for those who prefer gentle flavors',
            'Medium Spice': 'Balanced heat with rich flavors',
            'Hot Spice': 'For spice lovers - intense heat and flavor'
        };
        return descriptions[spiceLevel] || 'Spice level indicator';
    }
});

// ===== TOOLTIP FUNCTIONALITY =====
function showTooltip(element, text) {
    // Remove existing tooltips
    hideTooltip();
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

function hideTooltip() {
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to interactive elements
    const navButtons = document.querySelectorAll('.nav-btn, .menu-nav .nav-btn');
    navButtons.forEach((btn, index) => {
        btn.setAttribute('aria-label', `Filter menu by ${btn.textContent}`);
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
    });
    
    // Keyboard navigation for menu filtering
    navButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Skip to content link (for screen readers)
    const skipLink = document.createElement('a');
    skipLink.href = '#menu';
    skipLink.textContent = 'Skip to menu';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #ffd700;
        color: #000;
        padding: 8px;
        text-decoration: none;
        z-index: 1001;
        border-radius: 4px;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// ===== ANALYTICS TRACKING (Optional) =====
function trackMenuInteraction(action, category) {
    // Placeholder for analytics tracking
    console.log(`Menu interaction: ${action} - ${category}`);
    
    // Example: Google Analytics tracking
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': 'menu',
    //         'event_label': category
    //     });
    // }
}

// Track menu category clicks
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.menu-nav .nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            trackMenuInteraction('category_click', category);
        });
    });
    
    // Track page view
    trackMenuInteraction('page_view', 'menu_view');
});

// ===== MOBILE OPTIMIZATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Touch-friendly interactions
    const touchElements = document.querySelectorAll('.menu-item, .nav-btn');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
    
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

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

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Namaaste London Menu View loaded successfully!');
    
    // Initialize all functionality
    // All event listeners and functionality are set up above
}); 