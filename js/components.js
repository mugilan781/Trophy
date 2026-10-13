/**
 * SHARED COMPONENTS — Navbar & Footer
 * Injected into every page
 */

'use strict';

/* ============================================
   NAVBAR HTML
   ============================================ */
function renderNavbar(activePage = '') {
  const pages = [
    { label: 'Home', href: 'index.html' },
    { label: 'Home 2', href: 'home2.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Products', href: 'products.html' },
    { label: 'Engrave', href: 'engraving.html' },
    { label: 'Pricing', href: 'pricing.html' },
    { label: 'Blog', href: 'blog.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  const buildLink = (page) => {
    return `
      <li>
        <a href="${page.href}" class="${activePage === page.href ? 'active' : ''}">${page.label}</a>
      </li>`;
  };

  const mobileLinks = () => {
    let links = '';
    pages.forEach(p => {
      links += `<a href="${p.href}">${p.label}</a>`;
    });
    return links;
  };

  return `
<nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
  <div class="navbar-inner">
    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="Trophy &amp; Awards Engraving Shop Home">
      <div class="nav-logo-mark">
        <img src="images/logo-icon.svg" alt="T&amp;A Engraving Crest Emblem" width="42" height="42">
      </div>
      <div class="nav-logo-text">
        <span class="logo-main">T&amp;A <span>Engraving</span></span>
        <span class="logo-sub">Trophies &amp; Awards · Est. 1987</span>
      </div>
    </a>

    <!-- Desktop Links -->
    <ul class="nav-links" role="list">
      ${pages.map(buildLink).join('')}
    </ul>

    <!-- Actions -->
    <div class="nav-actions">
      <!-- Theme Toggle -->
      <button class="nav-icon-btn" data-theme-toggle aria-label="Toggle dark/light mode">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>

      <!-- RTL Toggle -->
      <button class="nav-icon-btn" data-rtl-toggle aria-label="Toggle RTL/LTR">RTL</button>

      <!-- Login -->
      <a href="login.html" class="btn btn-outline btn-sm" aria-label="Login">Login</a>
      <a href="contact.html" class="btn btn-primary btn-sm">Get Started</a>

      <!-- Hamburger -->
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Nav -->
<div class="nav-mobile" id="nav-mobile" role="navigation" aria-label="Mobile navigation">
  <div class="mobile-links">
    ${mobileLinks()}
    <a href="login.html" class="btn btn-outline" style="margin-top:1rem;justify-content:center">Login</a>
    <a href="contact.html" class="btn btn-primary" style="margin-top:0.5rem;justify-content:center">Get Started</a>
  </div>
</div>`;
}

/* ============================================
   FOOTER HTML
   ============================================ */
function renderFooter() {
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Column 1: Company -->
      <div class="footer-brand reveal">
        <a href="index.html" class="footer-logo" aria-label="T&amp;A Engraving Home">
          <div class="footer-logo-mark">
            <img src="images/logo-icon.svg" alt="T&amp;A Engraving Crest Emblem" width="48" height="48">
          </div>
          <div class="footer-logo-text">
            <span class="logo-main">T&amp;A Engraving</span>
            <span class="logo-sub">Trophies &amp; Awards · Est. 1987</span>
          </div>
        </a>
        <p>Crafting extraordinary trophies, medals, plaques and custom awards that celebrate achievement and prestige. Every piece tells a story of excellence.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 17.5h2.04L6.48 3.24H4.3l13.31 15.41z"/></svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.92 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links (mirrors main navbar) -->
      <div class="footer-col reveal reveal-delay-1">
        <h4>Quick Links</h4>
        <nav class="footer-links" aria-label="Footer">
          <a href="index.html">Home</a>
          <a href="home2.html">Home 2</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="engraving.html">Engrave</a>
          <a href="pricing.html">Pricing</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>

      <!-- Column 3: Contact -->
      <div class="footer-col reveal reveal-delay-2">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span><a href="https://maps.google.com" target="_blank" rel="noopener">42 Prestige Avenue, Gold District<br>Mumbai, Maharashtra 400001</a></span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span><a href="tel:+919876543210">+91 98765 43210</a></span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span><a href="mailto:orders@trophyawards.com">orders@trophyawards.com</a></span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Sat: 9 AM – 7 PM<br>Sun: 10 AM – 4 PM</span>
        </div>
      </div>

      <!-- Column 4: Newsletter -->
      <div class="footer-col footer-newsletter reveal reveal-delay-3">
        <h4>Newsletter</h4>
        <p>Subscribe for new arrivals, engraving ideas, bulk offers and event-season updates.</p>
        <form class="newsletter-form" id="footer-newsletter-form" novalidate>
          <input type="email" name="email" class="newsletter-input" placeholder="Enter your email address" aria-label="Email address" required>
          <button type="submit" class="btn btn-primary btn-sm newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} T&A Engraving Shop. All rights reserved.</p>
      <nav class="footer-bottom-links" aria-label="Legal">
        <a href="privacy-policy.html">Privacy Policy</a>
        <span class="sep" aria-hidden="true">|</span>
        <a href="terms-conditions.html">Terms &amp; Conditions</a>
        <span class="sep" aria-hidden="true">|</span>
        <a href="sitemap.html">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>

<!-- Back To Top -->
<button class="back-to-top" id="back-to-top" aria-label="Back to top">
  <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
</button>`;
}

/* ============================================
   INJECT COMPONENTS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Inject Navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    navPlaceholder.innerHTML = renderNavbar(page);
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = renderFooter();

    // Footer newsletter — frontend only, reuses global Toast when available
    const newsletterForm = document.getElementById('footer-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[type="email"]');
        const value = (input.value || '').trim();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const notify = (msg, type) => {
          if (typeof Toast !== 'undefined' && Toast && typeof Toast.show === 'function') {
            Toast.show(msg, type);
          }
        };
        if (!valid) {
          input.focus();
          notify('Please enter a valid email address.', 'error');
          return;
        }
        newsletterForm.reset();
        notify('Thank you for subscribing!', 'success');
      });
    }
  }
});
