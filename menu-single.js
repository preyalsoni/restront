// ===== MENU FILTERING FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Food menu filtering
    const foodNavButtons = document.querySelectorAll('#food-menu .nav-btn');
    const foodMenuCategories = document.querySelectorAll('#food-menu .menu-category');
    
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
    
    // Drinks menu filtering
    const drinksNavButtons = document.querySelectorAll('#drinks-menu .nav-btn');
    const drinksMenuCategories = document.querySelectorAll('#drinks-menu .menu-category');
    
    drinksNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            drinksNavButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            filterDrinksMenu(category);
        });
    });
    
    function filterDrinksMenu(category) {
        drinksMenuCategories.forEach(cat => {
            if (category === 'all-drinks' || cat.getAttribute('data-category') === category) {
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
    filterDrinksMenu('all-drinks');
});

// ===== SMOOTH SCROLLING =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== SCROLL TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// ===== ANIMATION ON SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe menu items, hours cards, and contact items
    const animateElements = document.querySelectorAll('.menu-item, .hours-card, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== LAZY LOADING FOR IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
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

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to interactive elements
    const navButtons = document.querySelectorAll('.nav-btn');
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
    skipLink.href = '#contact';
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
    // You can add error reporting here
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
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            trackMenuInteraction('category_click', category);
        });
    });
    
    // Track page view
    trackMenuInteraction('page_view', 'menu_single');
});

// ===== MOBILE OPTIMIZATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Touch-friendly interactions
    const touchElements = document.querySelectorAll('.menu-item, .hours-card, .nav-btn');
    
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

// ===== PRINT FUNCTIONALITY =====
function printMenu() {
    window.print();
}

// Add print button (optional)
document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.createElement('button');
    printBtn.textContent = 'Print Menu';
    printBtn.className = 'btn btn-secondary';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        z-index: 999;
        padding: 10px 20px;
        font-size: 0.9rem;
    `;
    printBtn.addEventListener('click', printMenu);
    
    // Uncomment the next line to show print button
    // document.body.appendChild(printBtn);
});

// ===== SHARE FUNCTIONALITY =====
function shareMenu() {
    if (navigator.share) {
        navigator.share({
            title: 'Namaaste London - Menu',
            text: 'Check out our authentic Indian menu!',
            url: window.location.href
        });
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Menu link copied to clipboard!');
        });
    }
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

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', function() {
    // Track page load performance
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.value}`);
            }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay'] });
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Namaaste London Menu loaded successfully!');
    
    // Initialize all functionality
    // All event listeners and functionality are set up above
}); 