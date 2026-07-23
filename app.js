/* ==========================================
   DATA
==========================================*/
const PRODUCTS = [
  { id:1, name:'3D Customized Wallpaper', category:'wall', material:'pvc', application:'residential', img:'images/3d cstomised wallpaper.jpeg', features:['3D Textured Surface','Waterproof','Impact Resistant','Easy Installation'] },
  { id:2, name:'Charcoal Panel (128-160 MM)', category:'wall', material:'wpc', application:'residential', img:'images/Charcoal panel/charcoal-panel.jpeg', features:['Deep Matte Finish','Eco-Friendly','Charcoal Coating','Premium Quality'] },
  { id:3, name:'Charcoal Panels (300 MM)', category:'wall', material:'wpc', application:'residential', img:'images/Charcoal panel/WhatsApp Image 2026-05-27 at 2.11.35 PM.jpeg', features:['Wide 300mm Profile','Modern Look','Durable','Easy Maintenance'] },
  { id:4, name:'Fluted Panel', category:'wall', material:'wpc', application:'residential', img:'', video:'images/fluted panel.mp4', features:['3D Fluted Texture','Acoustic Properties','Impact Resistant','Lightweight'] },
  { id:5, name:'UV Marble Sheet', category:'wall', material:'pvc', application:'residential', img:'images/uv marble.jpeg', features:['High Gloss Finish','UV Protected','Seamless Joint','Scratch Resistant'] },
  { id:6, name:'French Molding', category:'wall', material:'pvc', application:'residential', img:'images/french moduling.jpeg', features:['Classic Design','Decorative Appeal','Easy Installation','Multiple Profiles'] },
 
  { id:10, name:'PU Stone', category:'wall', material:'pvc', application:'residential', img:'images/pu stone.jpeg', features:['Natural Stone Look','Lightweight','Textured Surface','Easy Application'] },
  { id:11, name:'Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'images/wallpaper.jpeg', features:['Various Patterns','Peel & Stick','Washable','Wide Variety'] },
  { id:12, name:'Custom Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'images/custom wallpaper.jpeg', features:['Custom Design','High Quality Print','Durable','Easy Replace'] },
  { id:13, name:'Roller Blind', category:'decor', material:'fabric', application:'residential', img:'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80&auto=format', features:['Blackout Options','UV Protection','Custom Sizes','Smooth Operation'] },
  { id:14, name:'Zebra Blind', category:'decor', material:'fabric', application:'residential', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80&auto=format', features:['Day & Night Control','Light Filtering','Modern Design','Custom Sizes'] },
  { id:15, name:'Arctic Pastel Grass', category:'exterior', material:'synthetic', application:'outdoor', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['UV Resistant','Soft Texture','Low Maintenance','Natural Appearance'] },
  { id:16, name:'PVC Carpet', category:'flooring', material:'pvc', application:'commercial', img:'images/pvc carpet.jpeg', features:['Easy Clean','Water Resistant','Anti-Slip','Durable'] },
  { id:18, name:'PVC Carpet - 4 MM', category:'flooring', material:'pvc', application:'commercial', img:'images/PVC Carpet - 4 MM.jpeg', features:['4mm Thickness','Extra Durable','Enhanced Comfort','Superior Grip'] },
  { id:19, name:'Glass Film', category:'decor', material:'vinyl', application:'commercial', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format', features:['Frosted Options','Privacy Protection','UV Blocking','Easy Application'] },
  { id:20, name:'Soffit Panel', category:'exterior', material:'pvc', application:'outdoor', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format', features:['Weather Resistant','Vented Options','Easy Installation','Multiple Colors'] },
  { id:21, name:'PVC Flooring', category:'flooring', material:'pvc', application:'commercial', img:'images/pvc flooring.jpeg', features:['100% Waterproof','Easy Maintenance','Anti-Skid','Cost Effective'] },
  { id:22, name:'Artificial Grass', category:'exterior', material:'synthetic', application:'outdoor', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['UV Resistant','Low Maintenance','Natural Look','Various Pile Heights'] },
];

const PROJECTS = [
  { category:'residential', title:'Modern Living Room', material:'WPC Fluted Panels + LVT Flooring', img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80&auto=format' },
  { category:'commercial', title:'Corporate Office Lobby', material:'PVC Grid Ceiling + Charcoal Louvers', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format' },
  { category:'residential', title:'Master Bedroom Makeover', material:'UV Marble Sheets + Vinyl Flooring', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80&auto=format' },
  { category:'office', title:'Tech Startup Office', material:'PVC Ceiling + WPC Wall Panels', img:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80&auto=format' },
  { category:'showroom', title:'Luxury Retail Showroom', material:'Charcoal Louvers + LVT Tiles', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format' },
  { category:'residential', title:'Kitchen & Dining Area', material:'PVC Wall Panels + PVC Vinyl Roll', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format' },
  { category:'commercial', title:'Clinic Interior', material:'Seamless PVC Ceiling + Vinyl Roll', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80&auto=format' },
  { category:'residential', title:'TV Unit Backdrop', material:'WPC Fluted + UV Marble Combination', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format' },
  { category:'office', title:'Conference Room', material:'ORRO Sheets + PVC Grid Ceiling', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format' },
];

/* ==========================================
   RENDER PRODUCTS
==========================================*/
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0,8).map(p => productCard(p)).join('');
  initLazyProductVideos();
}

function renderAllProducts(filtered) {
  const grid = document.getElementById('all-products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;
  const items = filtered || PRODUCTS;
  grid.innerHTML = items.map(p => productCard(p)).join('');
  if (countEl) countEl.textContent = `Showing ${items.length} products`;
  initLazyProductVideos();
}

function productCard(p) {
  const media = p.video
    ? `<video class="product-video" playsinline muted autoplay loop preload="metadata" poster="${p.img}" data-src="${p.video}" aria-label="${p.name}"></video>`
    : `<img src="${p.img}" alt="${p.name}" loading="lazy">`;

  return `
  <div class="product-card" data-category="${p.category}">
    <div class="product-img-wrap">
      ${media}
      <span class="product-category-tag">${p.category.toUpperCase()}</span>
      <button class="product-wishlist" title="Save"><i class="far fa-heart"></i></button>
    </div>
    <div class="product-body">
      <div class="product-name">${p.name}</div>
      <div class="product-features">${p.features.map(f=>`<span class="product-feature">${f}</span>`).join('')}</div>
      <div class="product-actions">
        <button class="btn-view" onclick="viewProduct('${p.name}')">Details</button>
        <button class="btn-quote-sm" onclick="quoteProduct('${p.name}')">Get Quote</button>
      </div>
    </div>
  </div>`;
}

function viewProduct(name) { alert(`📦 ${name}\nFull specification page coming soon. Please WhatsApp or call us for detailed specs and availability.`); }
function quoteProduct(name) { window.open(`https://wa.me/919265211720?text=Hi+Rana+Enterprises%2C+I+would+like+a+quote+for:+${encodeURIComponent(name)}`,'_blank'); }

/* ==========================================
   FILTER & SORT
==========================================*/
function filterProducts(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;
  const items = cat === 'all' ? PRODUCTS.slice(0,8) : PRODUCTS.filter(p => p.category === cat).slice(0,8);
  grid.innerHTML = items.map(p => productCard(p)).join('');
  initLazyProductVideos();
}

function applyFilters() {
  const cats = Array.from(document.querySelectorAll('.filter-panel input[type=checkbox]:checked')).map(c => c.value);
  if (cats.length === 0) { renderAllProducts(); return; }
  const filtered = PRODUCTS.filter(p => cats.includes(p.category) || cats.includes(p.material) || cats.includes(p.application));
  renderAllProducts(filtered);
}

function sortProducts(val) {
  let sorted = [...PRODUCTS];
  if (val === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
  renderAllProducts(sorted);
}

function resetFilters() {
  document.querySelectorAll('.filter-panel input[type=checkbox]').forEach(c => c.checked = false);
  renderAllProducts();
}

/* ==========================================
   RENDER PROJECTS
==========================================*/
function renderProjects(filter) {
  const grid = document.getElementById('projects-masonry');
  if (!grid) return;
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(p => `
    <div class="project-item">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="project-item-overlay">
        <h4>${p.title}</h4>
        <p>${p.material}</p>
      </div>
    </div>`).join('');
}

function filterProjects(btn, cat) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(cat);
}

/* ==========================================
   CALCULATOR
==========================================*/
function calculateEstimate() {
  const L = parseFloat(document.getElementById('calc-length').value) || 0;
  const W = parseFloat(document.getElementById('calc-width').value) || 0;
  const H = parseFloat(document.getElementById('calc-height').value) || 0;
  const rate = parseFloat(document.getElementById('calc-material').value);
  const scope = document.getElementById('calc-scope').value;

  if (!L || !W || !H) { alert('Please enter all room dimensions.'); return; }

  let area = 0;
  if (scope === 'walls') area = 2 * (L + W) * H;
  else if (scope === 'ceiling') area = L * W;
  else if (scope === 'flooring') area = L * W;
  else area = 2 * (L + W) * H + L * W + L * W;

  const min = Math.round(area * rate * 0.85);
  const max = Math.round(area * rate * 1.4);

  document.getElementById('calc-price').textContent = `₹${min.toLocaleString('en-IN')} – ₹${max.toLocaleString('en-IN')}`;
  const res = document.getElementById('calc-result');
  res.classList.add('visible');
  res.scrollIntoView({behavior:'smooth', block:'nearest'});
}

/* ==========================================
   MODAL
==========================================*/
function openModal() {
  document.getElementById('quote-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('quote-modal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('quote-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* ==========================================
   FORM SUBMIT
==========================================*/
function submitForm() {
  const enquiryFields = document.querySelectorAll('.contact-form-wrap .form-group, .modal-overlay.open .form-group');
  const enquiry = Array.from(enquiryFields).map(group => {
    const label = group.querySelector('label');
    const field = group.querySelector('input:not([type="file"]), select, textarea');
    if (!field || !field.value || field.value === 'Select Service...' || field.value === 'Select Branch...') return '';
    return `${label ? label.textContent.replace('*', '').trim() : 'Details'}: ${field.value}`;
  }).filter(Boolean).join('\n');
  const message = `Hi Rana Enterprises, I would like to make an enquiry.${enquiry ? `\n\n${enquiry}` : ''}`;
  closeModal();
  window.open(`https://wa.me/919265211720?text=${encodeURIComponent(message)}`, '_blank');
}

/* ==========================================
   NAVBAR SCROLL
==========================================*/
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  const sp = document.getElementById('scroll-progress');
  const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (sp) sp.style.width = scrollPct + '%';

  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');

  const bt = document.getElementById('back-top');
  if (bt) bt.classList.toggle('visible', window.scrollY > 400);
});

/* ==========================================
   MOBILE MENU
==========================================*/
function toggleMobile() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ==========================================
   ANIMATED COUNTERS
==========================================*/
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.done) {
        entry.target.dataset.done = true;
        const target = parseInt(entry.target.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          entry.target.textContent = current.toLocaleString('en-IN') + (target >= 1000 ? '+' : target === 10 ? '+' : '+');
          if (current >= target) clearInterval(timer);
        }, 25);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => observer.observe(c));
}

/* ==========================================
   AOS SCROLL ANIMATIONS
==========================================*/
function initAOS() {
  const els = document.querySelectorAll('[data-aos]:not(.aos-done)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-done');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => {
    // Always show elements immediately on page load
    el.classList.add('aos-done');
    // Still observe for scroll animations
    observer.observe(el);
  });
}

/* ==========================================
   LAZY-LOAD SERVICE VIDEOS
==========================================*/
function initLazyServiceVideos() {
  const cards = document.querySelectorAll('.service-card-video');
  if (!('IntersectionObserver' in window) || cards.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      const video = card.querySelector('.service-video');
      if (!video || video.dataset.loaded === 'true') {
        obs.unobserve(card);
        return;
      }

      video.src = card.dataset.videoSrc;
      video.load();
      video.addEventListener('loadeddata', () => {
        card.classList.add('video-ready');
        video.play().catch(() => {});
      }, { once: true });

      video.dataset.loaded = 'true';
      obs.unobserve(card);
    });
  }, { rootMargin: '200px 0px' });

  cards.forEach(card => observer.observe(card));
}

function initLazyProductVideos() {
  const videos = document.querySelectorAll('.product-video');
  if (!('IntersectionObserver' in window) || videos.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const video = entry.target;
      if (!video || video.dataset.loaded === 'true') {
        obs.unobserve(video);
        return;
      }

      video.src = video.dataset.src;
      video.load();
      video.addEventListener('loadeddata', () => {
        video.play().catch(() => {});
      }, { once: true });

      video.dataset.loaded = 'true';
      obs.unobserve(video);
    });
  }, { rootMargin: '200px 0px' });

  videos.forEach(video => observer.observe(video));
}

/* ==========================================
   GLASS FILM SLIDESHOW
==========================================*/
let slideIndex = 1;
let slideInterval;

function changeSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  startAutoSlide();
}

function showSlides(n) {
  const slides = document.querySelectorAll('.glass-film-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  slides.forEach(slide => slide.classList.remove('fade'));
  slides.forEach(slide => slide.style.display = 'none');
  
  dots.forEach(dot => dot.style.background = 'rgba(255,255,255,0.3)');
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('fade');
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].style.background = 'var(--gold)';
  }
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

// Start slideshow on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
    initLazyServiceVideos();
    initLazyProductVideos();
  });
} else {
  startAutoSlide();
  initLazyServiceVideos();
  initLazyProductVideos();
}

/* ==========================================
   IMAGE ZOOM
==========================================*/
function openZoom(imageSrc) {
  let modal = document.getElementById('zoom-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'zoom-modal';
    modal.className = 'zoom-modal';
    modal.innerHTML = '<span class="close-zoom" onclick="closeZoom()">&times;</span><img src="">';
    document.body.appendChild(modal);
  }
  modal.querySelector('img').src = imageSrc;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeZoom() {
  const modal = document.getElementById('zoom-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close zoom on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeZoom();
});

// Close zoom when clicking outside image
document.addEventListener('click', (e) => {
  const modal = document.getElementById('zoom-modal');
  if (modal && e.target === modal) {
    closeZoom();
  }
});
