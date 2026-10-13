/**
 * TROPHY & AWARDS ENGRAVING SHOP
 * Main JavaScript — Core Utilities & Components
 */

'use strict';

/* ============================================
   UTILITY HELPERS
   ============================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

/* ============================================
   THEME MANAGER
   ============================================ */
const ThemeManager = {
  key: 'taes-theme',
  init() {
    const saved = localStorage.getItem(this.key) || 'dark';
    this.apply(saved);
    $$('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  },
  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.key, theme);
    $$('[data-theme-toggle]').forEach(btn => {
      btn.innerHTML = theme === 'dark'
        ? `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    });
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    this.apply(current === 'dark' ? 'light' : 'dark');
  }
};

/* ============================================
   RTL MANAGER
   ============================================ */
const RTLManager = {
  key: 'taes-dir',
  init() {
    const saved = localStorage.getItem(this.key) || 'ltr';
    this.apply(saved);
    $$('[data-rtl-toggle]').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  },
  apply(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(this.key, dir);
    $$('[data-rtl-toggle]').forEach(btn => {
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  },
  toggle() {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    this.apply(current === 'ltr' ? 'rtl' : 'ltr');
  }
};

/* ============================================
   NAVBAR
   ============================================ */
const Navbar = {
  el: null,
  hamburger: null,
  mobileNav: null,

  init() {
    this.el = $('.navbar');
    this.hamburger = $('.nav-hamburger');
    this.mobileNav = $('.nav-mobile');

    if (!this.el) return;

    window.addEventListener('scroll', debounce(() => this.onScroll(), 50), { passive: true });
    this.onScroll();

    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMobile());
    }

    // Close mobile on link click
    $$('.nav-mobile a').forEach(a => {
      a.addEventListener('click', () => this.closeMobile());
    });

    // Active link
    this.setActiveLink();
  },

  onScroll() {
    if (window.scrollY > 60) {
      this.el.classList.add('scrolled');
    } else {
      this.el.classList.remove('scrolled');
    }
  },

  toggleMobile() {
    const isOpen = this.mobileNav.classList.contains('open');
    if (isOpen) { this.closeMobile(); } else { this.openMobile(); }
  },

  openMobile() {
    this.mobileNav.classList.add('open');
    this.hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeMobile() {
    this.mobileNav.classList.remove('open');
    this.hamburger.classList.remove('open');
    document.body.style.overflow = '';
  },

  setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav-links a, .nav-mobile a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href === current || (current === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }
};

/* ============================================
   HERO SLIDER
   ============================================ */
const HeroSlider = {
  slides: [],
  dots: [],
  currentIndex: 0,
  timer: null,
  interval: 6000,

  init(containerSelector = '.hero-slider') {
    const container = $(containerSelector);
    if (!container) return;

    this.slides = $$('.hero-slide', container);
    this.dots = $$('.slider-dot', container);
    const prev = $('.slider-prev', container);
    const next = $('.slider-next', container);

    if (!this.slides.length) return;

    this.showSlide(0);
    this.startAuto();

    prev?.addEventListener('click', () => this.prev());
    next?.addEventListener('click', () => this.next());

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        this.showSlide(i);
        this.resetAuto();
      });
    });

    // Touch swipe
    let startX = 0;
    container.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    container.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });
  },

  showSlide(index) {
    this.slides.forEach((s, i) => s.classList.toggle('active', i === index));
    this.dots.forEach((d, i) => d.classList.toggle('active', i === index));
    this.currentIndex = index;
  },

  next() {
    this.showSlide((this.currentIndex + 1) % this.slides.length);
    this.resetAuto();
  },

  prev() {
    this.showSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length);
    this.resetAuto();
  },

  startAuto() {
    this.timer = setInterval(() => this.next(), this.interval);
  },

  resetAuto() {
    clearInterval(this.timer);
    this.startAuto();
  }
};

/* ============================================
   SCROLL REVEAL
   ============================================ */
const ScrollReveal = {
  observer: null,

  init() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    $$('.reveal').forEach(el => this.observer.observe(el));
  }
};

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
const Toast = {
  container: null,

  init() {
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    document.body.appendChild(this.container);
  },

  show(msg, type = 'info', duration = 3500) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
      success: `<svg class="toast-icon" viewBox="0 0 24 24" stroke="#4CAF50" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
      error: `<svg class="toast-icon" viewBox="0 0 24 24" stroke="#F44336" fill="none" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
      info: `<svg class="toast-icon" viewBox="0 0 24 24" stroke="#C6A15B" fill="none" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
    };

    toast.innerHTML = `${icons[type] || icons.info}<span class="toast-msg">${msg}</span>`;
    this.container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }
};

/* ============================================
   BACK TO TOP
   ============================================ */
const BackToTop = {
  el: null,

  init() {
    this.el = $('.back-to-top');
    if (!this.el) return;

    window.addEventListener('scroll', debounce(() => this.toggle(), 100), { passive: true });
    this.el.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  toggle() {
    this.el.classList.toggle('visible', window.scrollY > 400);
  }
};

/* ============================================
   PRODUCT FILTERS
   ============================================ */
const ProductFilter = {
  init(containerSel = '.product-grid', tabSel = '.filter-tab') {
    const container = $(containerSel);
    const tabs = $$(tabSel);
    if (!container || !tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter || 'all';
        this.filter(container, filter);
      });
    });
  },

  filter(container, filter) {
    const items = $$('[data-category]', container);
    items.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter ||
                   (item.dataset.category || '').split(',').includes(filter);
      item.style.display = show ? '' : 'none';
      if (show) {
        item.style.animation = 'fadeInUp 0.5s ease forwards';
      }
    });
  }
};

/* ============================================
   LIGHTBOX
   ============================================ */
const Lightbox = {
  el: null,
  img: null,

  init() {
    this.el = document.createElement('div');
    this.el.className = 'lightbox';
    this.el.innerHTML = `
      <button class="lightbox-close" aria-label="Close preview"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      <img class="lightbox-img" src="" alt="">
    `;
    document.body.appendChild(this.el);
    this.img = this.el.querySelector('.lightbox-img');

    this.el.querySelector('.lightbox-close').addEventListener('click', () => this.close());
    this.el.addEventListener('click', e => { if (e.target === this.el) this.close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') this.close(); });

    $$('[data-lightbox]').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => this.open(img.src, img.alt));
    });
  },

  open(src, alt = '') {
    this.img.src = src;
    this.img.alt = alt;
    this.el.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.el.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ============================================
   COUNTER ANIMATION
   ============================================ */
const CounterAnimation = {
  init() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  },

  animate(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
};

/* ============================================
   FORM VALIDATION
   ============================================ */
const FormValidator = {
  rules: {
    required: (v) => v.trim().length > 0 || 'This field is required',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email',
    phone: (v) => /^[\d\s\+\-\(\)]{7,}$/.test(v) || 'Please enter a valid phone number',
    minlen: (v, n) => v.trim().length >= n || `Minimum ${n} characters required`
  },

  init(formSel) {
    const form = $(formSel);
    if (!form) return;

    const inputs = $$('[data-validate]', form);

    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      inputs.forEach(inp => { if (!this.validateField(inp)) valid = false; });
      if (valid) {
        Toast.show('Your message has been sent successfully!', 'success');
        form.reset();
      }
    });
  },

  validateField(input) {
    const rules = (input.dataset.validate || 'required').split(',');
    for (const rule of rules) {
      const [name, param] = rule.trim().split(':');
      const fn = this.rules[name];
      if (!fn) continue;
      const result = fn(input.value, param ? parseInt(param) : undefined);
      if (result !== true) {
        this.setError(input, result);
        return false;
      }
    }
    this.clearError(input);
    return true;
  },

  setError(input, msg) {
    const group = input.closest('.form-group');
    if (!group) return;
    input.style.borderColor = '#E05252';
    const err = group.querySelector('.form-error') || (() => {
      const e = document.createElement('p');
      e.className = 'form-error';
      group.appendChild(e);
      return e;
    })();
    err.textContent = msg;
  },

  clearError(input) {
    const group = input.closest('.form-group');
    if (!group) return;
    input.style.borderColor = '';
    const err = group.querySelector('.form-error');
    if (err) err.textContent = '';
  }
};

/* ============================================
   ANIMATE CSS
   ============================================ */
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
`;
document.head.appendChild(style);

/* ============================================
   INIT ALL
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  RTLManager.init();
  Navbar.init();
  HeroSlider.init();
  ScrollReveal.init();
  Toast.init();
  BackToTop.init();
  ProductFilter.init();
  Lightbox.init();
  CounterAnimation.init();
});
