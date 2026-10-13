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
    <a href="index.html" class="nav-logo" aria-label="Trophy & Awards Engraving Shop Home">
      <span class="logo-main">T&A Engraving</span>
      <span class="logo-sub">Premium Awards Since 1987</span>
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
      <!-- Brand -->
      <div class="footer-brand reveal">
        <span class="logo-main">T&A Engraving</span>
        <span class="logo-sub">Premium Awards Since 1987</span>
        <p>Crafting extraordinary trophies, medals, plaques and custom awards that celebrate achievement and prestige. Every piece tells a story of excellence.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">in</a>
          <a href="#" aria-label="Twitter">x</a>
          <a href="#" aria-label="LinkedIn">li</a>
          <a href="#" aria-label="Pinterest">p</a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col reveal reveal-delay-1">
        <h4>Quick Links</h4>
        <nav class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="products.html">Products</a>
          <a href="engraving.html">Custom Engraving</a>
          <a href="pricing.html">Pricing</a>
          <a href="blog.html">Blog</a>
          <a href="contact.html">Contact</a>
        </nav>
      </div>

      <!-- Categories -->
      <div class="footer-col reveal reveal-delay-2">
        <h4>Award Categories</h4>
        <nav class="footer-links">
          <a href="products.html">Corporate Awards</a>
          <a href="products.html">Sports Trophies</a>
          <a href="products.html">Academic Medals</a>
          <a href="products.html">Crystal Awards</a>
          <a href="products.html">Wooden Plaques</a>
          <a href="products.html">Personalized Gifts</a>
          <a href="products.html">Bulk Orders</a>
        </nav>
      </div>

      <!-- Contact -->
      <div class="footer-col reveal reveal-delay-3">
        <h4>Contact Us</h4>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>42 Prestige Avenue, Gold District<br>Mumbai, Maharashtra 400001</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>+91 98765 43210</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>orders@trophyawards.com</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Mon–Sat: 9 AM – 7 PM<br>Sun: 10 AM – 4 PM</span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} T&A Engraving Shop. All rights reserved. Crafted with <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--burgundy-light)" style="vertical-align:middle;margin:0 2px;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
        <a href="maintenance.html">Status</a>
      </div>
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
  }
});
