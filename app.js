/* ==========================================
   DATA
==========================================*/
const PRODUCTS = [
  { id:1, name:'3D Customized Wallpaper', category:'wall', material:'pvc', application:'residential', img:'images/3d-customized-wallpaper.jpeg', features:['3D Textured Surface','Waterproof','Impact Resistant','Easy Installation'] },
  { id:2, name:'Charcoal Panel (128-160 MM)', category:'wall', material:'wpc', application:'residential', img:'images/Charcoal-panel/charcoal-panel.jpeg', features:['Deep Matte Finish','Eco-Friendly','Charcoal Coating','Premium Quality'] },
  { id:3, name:'Charcoal Panels (300 MM)', category:'wall', material:'wpc', application:'residential', img:'images/Charcoal-panel/WhatsApp-Image-2026-05-27-at-2.11.35-PM.jpeg', features:['Wide 300mm Profile','Modern Look','Durable','Easy Maintenance'] },
  { id:4, name:'Fluted Panel', category:'wall', material:'wpc', application:'residential', img:'', video:'images/fluted-panel.mp4', features:['3D Fluted Texture','Acoustic Properties','Impact Resistant','Lightweight'] },
  { id:5, name:'UV Marble Sheet', category:'wall', material:'pvc', application:'residential', img:'images/uv-marble.jpeg', features:['High Gloss Finish','UV Protected','Seamless Joint','Scratch Resistant'] },
  { id:6, name:'French Molding', category:'wall', material:'pvc', application:'residential', img:'images/french-molding.jpeg', features:['Classic Design','Decorative Appeal','Easy Installation','Multiple Profiles'] },
 
  { id:10, name:'PU Stone', category:'wall', material:'pvc', application:'residential', img:'images/pu-stone.jpeg', features:['Natural Stone Look','Lightweight','Textured Surface','Easy Application'] },
  { id:11, name:'Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'images/wallpaper.jpeg', features:['Various Patterns','Peel & Stick','Washable','Wide Variety'] },
  { id:12, name:'Custom Wallpaper', category:'decor', material:'vinyl', application:'residential', img:'images/custom-wallpaper.jpeg', features:['Custom Design','High Quality Print','Durable','Easy Replace'] },
  { id:13, name:'Roller Blind', category:'decor', material:'fabric', application:'residential', img:'images/roller-blind.jpeg', features:['Blackout Options','UV Protection','Custom Sizes','Smooth Operation'] },
  { id:14, name:'Zebra Blind', category:'decor', material:'fabric', application:'residential', img:'images/zebra-blind.jpeg', features:['Day & Night Control','Light Filtering','Modern Design','Custom Sizes'] },
  { id:15, name:'Arctic Pastel Grass', category:'exterior', material:'synthetic', application:'outdoor', img:'images/arctic-pastel-grass.jpeg', features:['UV Resistant','Soft Texture','Low Maintenance','Natural Appearance'] },
  { id:16, name:'PVC Carpet', category:'flooring', material:'pvc', application:'commercial', img:'images/pvc-carpet.jpeg', features:['Easy Clean','Water Resistant','Anti-Slip','Durable'] },
  { id:18, name:'PVC Carpet - 4 MM', category:'flooring', material:'pvc', application:'commercial', img:'images/pvc-carpet-4mm.jpeg', features:['4mm Thickness','Extra Durable','Enhanced Comfort','Superior Grip'] },
  { id:19, name:'Glass Film', category:'decor', material:'vinyl', application:'commercial', img:'images/glass-film.png', features:['Frosted Options','Privacy Protection','UV Blocking','Easy Application'] },
  { id:20, name:'Soffit Panel', category:'exterior', material:'pvc', application:'outdoor', img:'images/soffit-panel.png', features:['Weather Resistant','Vented Options','Easy Installation','Multiple Colors'] },
  { id:21, name:'PVC Flooring', category:'flooring', material:'pvc', application:'commercial', img:'images/pvc-flooring.jpeg', features:['100% Waterproof','Easy Maintenance','Anti-Skid','Cost Effective'] },
  { id:22, name:'Artificial Grass', category:'exterior', material:'synthetic', application:'outdoor', img:'images/artificial-grass.png', features:['UV Resistant','Low Maintenance','Natural Look','Various Pile Heights'] },
];

const PROJECTS = [
  { category:'residential', title:'Modern Living Room', material:'WPC Fluted Panels + LVT Flooring', img:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80&auto=format', video:'images/living room.mp4' },
  { category:'commercial', title:'Corporate Office Lobby', material:'PVC Grid Ceiling + Charcoal Louvers', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format' },
  { category:'residential', title:'Master Bedroom Makeover', material:'UV Marble Sheets + Vinyl Flooring', img:'images/projects/Modern-luxury-bedroom.png' },
  { category:'office', title:'Tech Startup Office', material:'PVC Ceiling + WPC Wall Panels', img:'images/tech-startup-office.jpeg' },
  { category:'showroom', title:'Luxury Retail Showroom', material:'Charcoal Louvers + LVT Tiles', img:'images/projects/Luxury-retail-showroom.png' },
  { category:'residential', title:'Kitchen & Dining Area', material:'PVC Wall Panels + PVC Vinyl Roll', img:'images/projects/Modern-kitchen-and-dining-area.png' },
  { category:'commercial', title:'Clinic Interior', material:'Seamless PVC Ceiling + Vinyl Roll', img:'images/projects/Clinic-Interior.png' },
  { category:'residential', title:'TV Unit Backdrop', material:'WPC Fluted + UV Marble Combination', img:'images/projects/Modern-TV-wall-unit.png' },
  { category:'office', title:'Conference Room', material:'ORRO Sheets + PVC Grid Ceiling', img:'images/projects/Modern-corporate-conference-room-interior.png' },
];

/* ==========================================
   RENDER PRODUCTS
==========================================*/
function renderFeaturedProducts() {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.slice(0,8).map(p => productCard(p)).join('');
  initLazyProductVideos();
  initWishlist();
}

function renderAllProducts(filtered) {
  const grid = document.getElementById('all-products-grid');
  const countEl = document.getElementById('products-count');
  if (!grid) return;
  const items = filtered || PRODUCTS;
  grid.innerHTML = items.map(p => productCard(p)).join('');
  if (countEl) countEl.textContent = `Showing ${items.length} products`;
  initLazyProductVideos();
  initWishlist();
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
      <button class="product-wishlist" type="button" data-product-id="${p.id}" title="Save" aria-label="Save ${p.name}" aria-pressed="false"><i class="far fa-heart"></i></button>
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

function getSavedProductIds() {
  try {
    return JSON.parse(localStorage.getItem('rana-saved-products') || '[]');
  } catch (error) {
    return [];
  }
}

function updateWishlistButton(button, saved) {
  const product = PRODUCTS.find(item => item.id === Number(button.dataset.productId));
  if (!product) return;
  button.classList.toggle('saved', saved);
  button.title = saved ? 'Remove from saved' : 'Save';
  button.setAttribute('aria-label', `${saved ? 'Remove' : 'Save'} ${product.name}`);
  button.setAttribute('aria-pressed', String(saved));
  button.innerHTML = `<i class="fa-${saved ? 'solid' : 'regular'} fa-heart"></i>`;
}

function initWishlist() {
  const savedIds = getSavedProductIds();
  document.querySelectorAll('.product-wishlist').forEach(button => {
    updateWishlistButton(button, savedIds.includes(Number(button.dataset.productId)));
  });
}

document.addEventListener('click', event => {
  const button = event.target.closest('.product-wishlist');
  if (!button) return;
  const productId = Number(button.dataset.productId);
  const savedIds = getSavedProductIds();
  const saved = !savedIds.includes(productId);
  const nextIds = saved ? [...savedIds, productId] : savedIds.filter(id => id !== productId);
  localStorage.setItem('rana-saved-products', JSON.stringify(nextIds));
  updateWishlistButton(button, saved);
});

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
  initWishlist();
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
      ${p.video ? `<video class="project-video" playsinline muted autoplay loop preload="metadata" poster="${p.img}" src="${p.video}" aria-label="${p.title}"></video>` : `<img src="${p.img}" alt="${p.title}" loading="lazy">`}
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

function ensureChatbotModal() {
  if (document.getElementById('chatbot-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'chatbot-modal';
  modal.className = 'modal-overlay chatbot-modal';
  modal.innerHTML = `
    <div class="modal-box chatbot-box">
      <button class="modal-close" onclick="closeChatbotModal()" aria-label="Close chatbot"><i class="fas fa-times"></i></button>
      <div class="chatbot-header">
        <div class="chatbot-avatar">
          <img src="images/logo/small-logo.png" alt="Rana Enterprises logo" onerror="this.onerror=null; this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', '<i class=\'fas fa-robot\'></i>');">  
        </div>
        <div>
          <h3>Rana Assistant</h3>
          <p>Answer a few quick questions and we’ll send your request to WhatsApp.</p>
        </div>
      </div>
      <div class="chatbot-messages" id="chatbot-messages"></div>
      <div class="chatbot-answers" id="chatbot-answers"></div>
      <div class="chatbot-actions">
        <button class="btn-primary" style="width:100%;justify-content:center" type="button"><i class="fas fa-arrow-right"></i> Continue</button>
      </div>
    </div>`;

  document.body.appendChild(modal);
}

function openChatbotModal() {
  ensureChatbotModal();
  const modal = document.getElementById('chatbot-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    resetChatbotFlow();
  }
}

function closeChatbotModal() {
  const modal = document.getElementById('chatbot-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

let chatbotStep = 0;
let chatbotData = {};
const chatbotQuestions = [
  {
    key: 'service',
    prompt: 'Which service are you looking for?',
    type: 'select',
    options: ['Wall Paneling', 'Flooring', 'Ceiling', 'Full Turnkey Interior', 'Renovation'],
    required: true
  },
  {
    key: 'space',
    prompt: 'Tell us a bit about your space or project.',
    type: 'textarea',
    placeholder: 'Example: 2BHK living room, waterproof wall panels, modern finish.',
    required: true
  },
  {
    key: 'phone',
    prompt: 'What is your phone number? (optional)',
    type: 'input',
    placeholder: '+91-92652-11720',
    required: false
  }
];

function resetChatbotFlow() {
  chatbotStep = 0;
  chatbotData = {};
  const answers = document.getElementById('chatbot-answers');
  const messages = document.getElementById('chatbot-messages');
  if (answers) answers.innerHTML = '';
  if (messages) {
    messages.innerHTML = '';
    addChatbotMessage('Hi! I can help you choose the right interior solution. What do you need help with?', false, false);
    setTimeout(showCurrentChatbotQuestion, 700);
  }
}

function addChatbotMessage(text, isUser = false, animate = true) {
  const messages = document.getElementById('chatbot-messages');
  if (!messages) return;
  const bubble = document.createElement('div');
  bubble.className = `chatbot-bubble ${isUser ? 'user' : 'assistant'}`;
  bubble.textContent = text;
  if (animate) {
    bubble.classList.add('chatbot-bubble-animate');
  }
  messages.appendChild(bubble);
  requestAnimationFrame(() => {
    bubble.classList.add('show');
  });
  messages.scrollTop = messages.scrollHeight;
}

function showTypingIndicator() {
  const messages = document.getElementById('chatbot-messages');
  if (!messages) return;
  const typing = document.createElement('div');
  typing.className = 'chatbot-bubble assistant chatbot-typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
  return typing;
}

function removeTypingIndicator() {
  const typing = document.querySelector('.chatbot-typing');
  if (typing) typing.remove();
}

function renderChatbotAnswerField(question) {
  const answers = document.getElementById('chatbot-answers');
  if (!answers) return;

  let fieldHtml = '';
  if (question.type === 'select') {
    fieldHtml = `<label>${question.prompt}</label><select id="chatbot-${question.key}"><option value="">Select an option</option>${question.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}</select>`;
  } else if (question.type === 'textarea') {
    fieldHtml = `<label>${question.prompt}</label><textarea id="chatbot-${question.key}" rows="3" placeholder="${question.placeholder || ''}"></textarea>`;
  } else {
    fieldHtml = `<label>${question.prompt}</label><input type="text" id="chatbot-${question.key}" placeholder="${question.placeholder || ''}">`;
  }

  answers.innerHTML = fieldHtml;
  const button = document.querySelector('.chatbot-actions button');
  if (button) {
    button.innerHTML = `<i class="fas fa-paper-plane"></i> ${chatbotStep === chatbotQuestions.length - 1 ? 'Send to WhatsApp' : 'Continue'}`;
    button.onclick = submitChatbot;
  }

  const input = document.getElementById(`chatbot-${question.key}`);
  if (input) {
    input.focus();
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && question.type !== 'textarea') {
        e.preventDefault();
        submitChatbot();
      }
    });
  }
}

function showCurrentChatbotQuestion() {
  const messages = document.getElementById('chatbot-messages');
  const answers = document.getElementById('chatbot-answers');
  if (!messages || !answers) return;

  if (chatbotStep >= chatbotQuestions.length) {
    const service = chatbotData.service || 'Interior service';
    const space = chatbotData.space || 'No additional details provided.';
    const contact = chatbotData.phone ? `\nContact: ${chatbotData.phone}` : '';
    const message = `Hi Rana Enterprises! I need help with ${service}.\n\nDetails: ${space}${contact}`;
    closeChatbotModal();
    window.open(`https://wa.me/919265211720?text=${encodeURIComponent(message)}`, '_blank');
    return;
  }

  answers.innerHTML = '';
  const current = chatbotQuestions[chatbotStep];
  const typingBubble = showTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator();
    addChatbotMessage(current.prompt, false, true);
    renderChatbotAnswerField(current);
  }, 700);
}

function submitChatbot() {
  const currentQuestion = chatbotQuestions[chatbotStep];
  if (!currentQuestion) return;

  const input = document.getElementById(`chatbot-${currentQuestion.key}`);
  if (!input) return;

  const value = input.value.trim();
  if (currentQuestion.required && !value) {
    input.classList.add('chatbot-field-error');
    input.focus();
    return;
  }

  chatbotData[currentQuestion.key] = value;
  if (value) {
    addChatbotMessage(value, true, true);
  }

  const messages = document.getElementById('chatbot-messages');
  if (messages) {
    const typingBubble = showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      chatbotStep += 1;
      showCurrentChatbotQuestion();
    }, 600);
  } else {
    chatbotStep += 1;
    showCurrentChatbotQuestion();
  }
}

document.getElementById('quote-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('click', function(e) {
  const modal = document.getElementById('chatbot-modal');
  if (modal && e.target === modal) closeChatbotModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeChatbotModal();
  }
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
