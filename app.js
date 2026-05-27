/* ==========================================
   DATA
==========================================*/
const PRODUCTS = [
  { id:1, name:'3D Customized Wallpaper', category:'wall', material:'pvc', application:'residential', img:'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=400&q=80&auto=format', features:['3D Textured Surface','Waterproof','Impact Resistant','Easy Installation'] },
  { id:2, name:'Charcoal Panel (128-160 MM)', category:'wall', material:'wpc', application:'residential', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&auto=format', features:['Deep Matte Finish','Eco-Friendly','Charcoal Coating','Premium Quality'] },
  { id:3, name:'Charcoal Panels (300 MM)', category:'wall', material:'wpc', application:'residential', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&auto=format', features:['Wide 300mm Profile','Modern Look','Durable','Easy Maintenance'] },
  { id:4, name:'Fluted Panel', category:'wall', material:'wpc', application:'residential', img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80&auto=format', features:['3D Fluted Texture','Acoustic Properties','Impact Resistant','Lightweight'] },
  { id:5, name:'UV Marble Sheet', category:'wall', material:'pvc', application:'residential', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&auto=format', features:['High Gloss Finish','UV Protected','Seamless Joint','Scratch Resistant'] },
  { id:6, name:'French Molding', category:'wall', material:'pvc', application:'residential', img:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80&auto=format', features:['Classic Design','Decorative Appeal','Easy Installation','Multiple Profiles'] },
  { id:7, name:'UV Marble Roll', category:'wall', material:'pvc', application:'residential', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&auto=format', features:['Roll Format','Premium Marble Look','UV Coated','Bulk Application'] },
  { id:8, name:'Mosaic Tiles', category:'wall', material:'glass', application:'residential', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80&auto=format', features:['Decorative Mosaic','Vibrant Colors','Bathroom Safe','Multiple Patterns'] },
  { id:9, name:'WPC Panel', category:'wall', material:'wpc', application:'residential', img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80&auto=format', features:['Wood Plastic Composite','Durable','Water Resistant','Eco-Friendly'] },
  { id:10, name:'PU Stone', category:'wall', material:'pvc', application:'residential', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80&auto=format', features:['Natural Stone Look','Lightweight','Textured Surface','Easy Application'] },
  { id:11, name:'Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=400&q=80&auto=format', features:['Various Patterns','Peel & Stick','Washable','Wide Variety'] },
  { id:12, name:'Custom Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=400&q=80&auto=format', features:['Custom Design','High Quality Print','Durable','Easy Replace'] },
  { id:13, name:'Roller Blind', category:'decor', material:'fabric', application:'residential', img:'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80&auto=format', features:['Blackout Options','UV Protection','Custom Sizes','Smooth Operation'] },
  { id:14, name:'Zebra Blind', category:'decor', material:'fabric', application:'residential', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80&auto=format', features:['Day & Night Control','Light Filtering','Modern Design','Custom Sizes'] },
  { id:15, name:'Arctic Pastel Grass', category:'exterior', material:'synthetic', application:'outdoor', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['UV Resistant','Soft Texture','Low Maintenance','Natural Appearance'] },
  { id:16, name:'PVC Carpet', category:'flooring', material:'pvc', application:'commercial', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['Easy Clean','Water Resistant','Anti-Slip','Durable'] },
  { id:17, name:'Wooden Flooring', category:'flooring', material:'wood', application:'residential', img:'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80&auto=format', features:['Natural Wood','Engineered','Various Species','Click Lock System'] },
  { id:18, name:'PVC Carpet - 4 MM', category:'flooring', material:'pvc', application:'commercial', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['4mm Thickness','Extra Durable','Enhanced Comfort','Superior Grip'] },
  { id:19, name:'Glass Film', category:'decor', material:'vinyl', application:'commercial', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format', features:['Frosted Options','Privacy Protection','UV Blocking','Easy Application'] },
  { id:20, name:'Soffit Panel', category:'exterior', material:'pvc', application:'outdoor', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format', features:['Weather Resistant','Vented Options','Easy Installation','Multiple Colors'] },
  { id:21, name:'PVC Flooring', category:'flooring', material:'pvc', application:'commercial', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['100% Waterproof','Easy Maintenance','Anti-Skid','Cost Effective'] },
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
}

function renderAllProducts(filtered) {
  const grid = document.getElementById('all-products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;
  const items = filtered || PRODUCTS;
  grid.innerHTML = items.map(p => productCard(p)).join('');
  if (countEl) countEl.textContent = `Showing ${items.length} products`;
}

function productCard(p) {
  return `
  <div class="product-card" data-category="${p.category}">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
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
function quoteProduct(name) { window.open(`https://wa.me/91XXXXXXXXXX?text=Hi+Rana+Enterprises%2C+I+would+like+a+quote+for:+${encodeURIComponent(name)}`,'_blank'); }

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
  closeModal();
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;top:88px;right:28px;background:linear-gradient(135deg,#2d8a4e,#25D366);color:white;padding:16px 24px;border-radius:8px;font-size:0.9rem;font-weight:600;z-index:9999;box-shadow:0 8px 30px rgba(37,211,102,0.4);animation:fade-up 0.4s ease';
  toast.innerHTML = '<i class="fas fa-check-circle" style="margin-right:8px"></i>Inquiry submitted! We\'ll contact you within 2 hours.';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
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
