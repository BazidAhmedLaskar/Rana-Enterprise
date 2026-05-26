/* ========================================
   RANA ENTERPRISES - JAVASCRIPT
   Animations, Interactions & Special Features
   ======================================== */

// DOM Elements
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.navbar-menu');
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;
const scrollProgress = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');
const loader = document.querySelector('.loader');

// ================= DARK MODE TOGGLE ================= 

function initDarkMode() {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    body.classList.add('dark-mode');
    updateModeIcon();
  }
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  updateModeIcon();
});

function updateModeIcon() {
  const isDark = body.classList.contains('dark-mode');
  modeToggle.textContent = isDark ? '☀️' : '🌙';
}

// ================= NAVBAR SCROLL EFFECT ================= 

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================= MOBILE MENU TOGGLE ================= 

navbarToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  navMenu.style.position = 'absolute';
  navMenu.style.top = '60px';
  navMenu.style.left = '0';
  navMenu.style.right = '0';
  navMenu.style.flexDirection = 'column';
  navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
  navMenu.style.padding = '1rem';
  navMenu.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
});

// Close menu when link is clicked
document.querySelectorAll('.navbar-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.style.display = 'none';
    }
  });
});

// ================= SCROLL PROGRESS BAR ================= 

window.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// ================= BACK TO TOP BUTTON ================= 

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ================= FLOATING ACTION BUTTONS ================= 

const fabWhatsapp = document.querySelector('.fab-whatsapp');
const fabPhone = document.querySelector('.fab-phone');
const fabQuote = document.querySelector('.fab-quote');

if (fabWhatsapp) {
  fabWhatsapp.addEventListener('click', () => {
    const message = encodeURIComponent('Hi Rana Enterprises, I am interested in your PVC wall panels and flooring solutions. Can you provide more information?');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  });
}

if (fabPhone) {
  fabPhone.addEventListener('click', () => {
    window.location.href = 'tel:+919876543210';
  });
}

if (fabQuote) {
  fabQuote.addEventListener('click', () => {
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
  });
}

// ================= ANIMATED COUNTERS ================= 

function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

function startCounters() {
  const counters = document.querySelectorAll('.counter-item h3');
  const targets = [1000, 10, 500]; // Projects, Years, Clients
  
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        counters.forEach((counter, index) => {
          animateCounter(counter, targets[index]);
        });
        hasAnimated = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) {
    observer.observe(counterSection);
  }
}

// ================= AOS ANIMATIONS (Intersection Observer) ================= 

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all animated elements
  document.querySelectorAll('.service-card, .product-card, .feature-item, .project-item, .testimonial-card').forEach(el => {
    observer.observe(el);
  });
}

// ================= SMOOTH SCROLL ================= 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================= LAZY LOADING IMAGES ================= 

function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  images.forEach(img => imageObserver.observe(img));
}

// ================= BEFORE/AFTER SLIDER ================= 

function initBeforeAfterSliders() {
  const sliders = document.querySelectorAll('.before-after-container');
  
  sliders.forEach(slider => {
    let isActive = false;
    
    document.addEventListener('mousedown', (e) => {
      if (e.target.closest('.before-after-container')) {
        isActive = true;
      }
    });
    
    document.addEventListener('mouseup', () => {
      isActive = false;
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isActive) return;
      
      const rect = slider.getBoundingClientRect();
      let x = e.clientX - rect.left;
      
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      
      const percent = (x / rect.width) * 100;
      const beforeImg = slider.querySelector('.before-img');
      beforeImg.style.width = percent + '%';
    });
  });
}

// ================= PRODUCT FILTERS ================= 

function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      productCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.add('fade-in');
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ================= PROJECT CATEGORY FILTERS ================= 

function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      projectItems.forEach(item => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.classList.add('fade-in');
          }, 10);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ================= FORM HANDLING ================= 

function initFormHandling() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show loader
      loader.classList.add('show');
      
      // Simulate form submission
      setTimeout(() => {
        loader.classList.remove('show');
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you! Your inquiry has been sent successfully.';
        successMsg.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #25d366, #20ba5a);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          z-index: 10000;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          animation: slideInRight 0.4s ease-out;
        `;
        
        document.body.appendChild(successMsg);
        
        // Remove message after 4 seconds
        setTimeout(() => {
          successMsg.style.animation = 'fadeOut 0.4s ease-out';
          setTimeout(() => successMsg.remove(), 400);
        }, 4000);
        
        // Reset form
        form.reset();
      }, 1500);
    });
  });
}

// ================= WHATSAPP QUICK QUOTE ================= 

function initWhatsAppQuote() {
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
  
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.dataset.product || 'PVC Wall Panel';
      const message = encodeURIComponent(`Hi Rana Enterprises, I am interested in ${productName}. Can you provide pricing and availability?`);
      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    });
  });
}

// ================= DYNAMIC PROJECT CALCULATOR ================= 

function initProjectCalculator() {
  const calculatorForm = document.querySelector('.calculator-form');
  
  if (calculatorForm) {
    const lengthInput = calculatorForm.querySelector('input[name="length"]');
    const widthInput = calculatorForm.querySelector('input[name="width"]');
    const materialSelect = calculatorForm.querySelector('select[name="material"]');
    const resultDisplay = calculatorForm.querySelector('.calculator-result');
    
    const materialPrices = {
      'pvc-standard': 25,
      'wpc-fluted': 150,
      'uv-marble': 90,
      'luxury-vinyl': 60
    };
    
    function calculateCost() {
      const length = parseFloat(lengthInput.value) || 0;
      const width = parseFloat(widthInput.value) || 0;
      const material = materialSelect.value;
      
      const area = length * width;
      const pricePerSqFt = materialPrices[material] || 0;
      const totalCost = area * pricePerSqFt;
      
      if (resultDisplay) {
        resultDisplay.innerHTML = `
          <div style="background: linear-gradient(135deg, #1e3a5f, #0f0f1e); color: white; padding: 1.5rem; border-radius: 10px;">
            <p style="margin: 0.5rem 0;"><strong>Area:</strong> ${area.toFixed(2)} sq. ft.</p>
            <p style="margin: 0.5rem 0;"><strong>Material:</strong> ${material}</p>
            <p style="margin: 0.5rem 0; color: #d4af37;"><strong>Estimated Cost: ₹${totalCost.toFixed(2)}</strong></p>
            <p style="margin: 0.5rem 0; font-size: 0.9rem; opacity: 0.8;">*Additional labor charges may apply</p>
          </div>
        `;
      }
    }
    
    lengthInput.addEventListener('input', calculateCost);
    widthInput.addEventListener('input', calculateCost);
    materialSelect.addEventListener('change', calculateCost);
  }
}

// ================= SWIPER SLIDER (Testimonials) ================= 

function initSwiper() {
  const swiperContainer = document.querySelector('.swiper');
  
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });
  }
}

// ================= MODAL/POPUP ================= 

function initModals() {
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close');
  
  // Open modal
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('fade-in');
      }
    });
  });
  
  // Close modal
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });
  
  // Close on outside click
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
}

// ================= ACTIVE LINK HIGHLIGHTING ================= 

function updateActiveLink() {
  const links = document.querySelectorAll('.navbar-menu a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ================= HEADER ANIMATIONS ================= 

function animateHeaders() {
  const headers = document.querySelectorAll('h1, h2, h3');
  
  headers.forEach(header => {
    const text = header.textContent;
    header.innerHTML = text.split('').map((char, index) => 
      `<span style="animation: letterFade 0.6s ease-out ${index * 0.05}s backwards;">${char}</span>`
    ).join('');
  });
}

// ================= FORM VALIDATION ================= 

function initFormValidation() {
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  const nameInputs = document.querySelectorAll('input[name="name"]');
  
  emailInputs.forEach(input => {
    input.addEventListener('blur', () => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      input.style.borderColor = isValid ? '#25d366' : '#ff6b6b';
    });
  });
  
  phoneInputs.forEach(input => {
    input.addEventListener('blur', () => {
      const isValid = /^[0-9]{10}$/.test(input.value.replace(/\D/g, ''));
      input.style.borderColor = isValid ? '#25d366' : '#ff6b6b';
    });
  });
}

// ================= IMAGE GALLERY ZOOM ================= 

function initImageZoom() {
  const images = document.querySelectorAll('.gallery-image, .product-image img, .project-image img');
  
  images.forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.className = 'image-zoom-modal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: zoom-out;
      `;
      
      const zoomedImg = document.createElement('img');
      zoomedImg.src = this.src;
      zoomedImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      `;
      
      modal.appendChild(zoomedImg);
      document.body.appendChild(modal);
      
      modal.addEventListener('click', () => modal.remove());
    });
  });
}

// ================= LIVE SEARCH ================= 

function initLiveSearch() {
  const searchInput = document.querySelector('.search-input');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const productCards = document.querySelectorAll('.product-card');
      
      productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(query) || description.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

// ================= INITIALIZATION ================= 

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  observeElements();
  startCounters();
  lazyLoadImages();
  initBeforeAfterSliders();
  initProductFilters();
  initProjectFilters();
  initFormHandling();
  initWhatsAppQuote();
  initProjectCalculator();
  initSwiper();
  initModals();
  updateActiveLink();
  animateHeaders();
  initFormValidation();
  initImageZoom();
  initLiveSearch();
  updateModeIcon();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.style.display = 'flex';
    navMenu.style.position = 'relative';
    navMenu.style.background = 'transparent';
    navMenu.style.padding = '0';
    navMenu.style.boxShadow = 'none';
  }
});