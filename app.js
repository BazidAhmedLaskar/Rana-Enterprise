/* ==========================================
   DATA
==========================================*/
const PRODUCTS = [
  { id:1, name:'Standard PVC Wall Panels', category:'wall', material:'pvc', application:'residential', price:'₹20–₹65/sq.ft', img:'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=400&q=80&auto=format', features:['Waterproof','Anti-Fungal','Lightweight','5–10mm thick'] },
  { id:2, name:'Assa Premium Panels', category:'wall', material:'pvc', application:'residential', price:'₹45–₹90/sq.ft', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80&auto=format', features:['Premium Finish','Zero Joints','UV Coated','10mm'] },
  { id:3, name:'ORRO Sheets', category:'wall', material:'pvc', application:'residential', price:'₹50–₹100/sq.ft', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80&auto=format', features:['High Gloss','Scratch Resist','Easy Install','8mm'] },
  { id:4, name:'WPC Fluted Panels', category:'wall', material:'wpc', application:'residential', price:'₹80–₹250/sq.ft', img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80&auto=format', features:['3D Texture','Impact Resistant','Acoustic','12–24mm'] },
  { id:5, name:'Charcoal Louvers', category:'wall', material:'wpc', application:'residential', price:'₹100–₹350/sq.ft', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80&auto=format', features:['Deep Matte','Eco-Friendly','Bamboo Charcoal','300mm width'] },
  { id:6, name:'UV Marble Sheets', category:'wall', material:'pvc', application:'residential', price:'₹60–₹150/sq.ft', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&auto=format', features:['High Gloss','Seamless','Scratch Resist','4×8ft sheet'] },
  { id:7, name:'PU Stone Panels', category:'wall', material:'pvc', application:'residential', price:'₹80–₹180/sq.ft', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80&auto=format', features:['Natural Look','Lightweight','Easy Fix','Various textures'] },
  { id:8, name:'French Molding', category:'wall', material:'pvc', application:'residential', price:'₹30–₹60/rft', img:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80&auto=format', features:['Decorative','Classic Design','PVC','Various profiles'] },
  { id:9, name:'PVC Grid Ceiling', category:'ceiling', material:'pvc', application:'commercial', price:'₹75–₹110/sq.ft', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format', features:['Commercial Grade','Easy Access','Conceals Wiring','2×2ft tiles'] },
  { id:10, name:'Interlocking PVC Ceiling', category:'ceiling', material:'pvc', application:'residential', price:'₹55–₹90/sq.ft', img:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=400&q=80&auto=format', features:['Seamless','100% Waterproof','Reflective','Easy Install'] },
  { id:11, name:'PVC Vinyl Roll Flooring', category:'flooring', material:'vinyl', application:'commercial', price:'₹20–₹45/sq.ft', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['Anti-Skid','Water Resist','Easy Clean','1.5mm thick'] },
  { id:12, name:'Luxury Vinyl Tiles (LVT)', category:'flooring', material:'vinyl', application:'residential', price:'₹55–₹100/sq.ft', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format', features:['Wood Mimicry','4–6mm','0.5mm wear layer','Rigid Core'] },
  { id:13, name:'Wooden Flooring', category:'flooring', material:'wood', application:'residential', price:'₹80–₹150/sq.ft', img:'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80&auto=format', features:['Natural Wood','Engineered','Various species','Click lock'] },
  { id:14, name:'Custom Wallpaper', category:'decor', material:'vinyl', application:'residential', price:'₹25–₹80/sq.ft', img:'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=400&q=80&auto=format', features:['Custom Print','Peel & Stick','Various Textures','Easy Replace'] },
  { id:15, name:'Roller Blinds', category:'decor', material:'fabric', application:'residential', price:'₹150–₹350/sq.ft', img:'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80&auto=format', features:['Blackout Options','UV Protection','Custom Sizes','Motorized Option'] },
  { id:16, name:'Zebra Blinds', category:'decor', material:'fabric', application:'residential', price:'₹200–₹450/sq.ft', img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80&auto=format', features:['Day & Night','Light Control','Modern Design','Custom Sizes'] },
  { id:17, name:'Artificial Grass', category:'exterior', material:'synthetic', application:'outdoor', price:'₹40–₹120/sq.ft', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format', features:['UV Resistant','Low Maintenance','Natural Look','Various pile heights'] },
  { id:18, name:'Soffit Panels', category:'exterior', material:'pvc', application:'outdoor', price:'₹35–₹80/sq.ft', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&auto=format', features:['Weather Resistant','Vented Options','Easy Install','Various colors'] },
  { id:19, name:'Mosaic Tiles', category:'wall', material:'glass', application:'residential', price:'₹60–₹200/sq.ft', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80&auto=format', features:['Decorative','Vibrant Colors','Bathroom Safe','Various patterns'] },
  { id:20, name:'Glass Film', category:'decor', material:'vinyl', application:'commercial', price:'₹15–₹50/sq.ft', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80&auto=format', features:['Frosted Options','Privacy','UV Block','Easy Apply'] },
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
      <div class="product-price">${p.price}</div>
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
