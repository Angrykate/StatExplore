/**
 * nav.js — Hamburger menu & active link highlighting
 * StatExplore · MTH1620
 */
(function () {
  'use strict';

  /* ── Hamburger toggle ── */
  const btn   = document.getElementById('navHamburger');
  const links = document.getElementById('navLinks');

  if (btn && links) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = btn.classList.toggle('open');
      links.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    /* Close when a nav link is clicked */
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.classList.remove('open');
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !links.contains(e.target)) {
        btn.classList.remove('open');
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        btn.classList.remove('open');
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Highlight active nav link based on current path ── */
  const currentPath = window.location.pathname;
  if (links) {
    links.querySelectorAll('a').forEach(function (a) {
      const href = a.getAttribute('href') || '';
      // Normalize: remove leading ../ and ./
      const normalizedHref = href.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');
      if (normalizedHref && currentPath.includes(normalizedHref.replace('index.html', ''))) {
        // Don't mark root index as active on sub-pages
        if (normalizedHref !== 'index.html' || currentPath.endsWith('/')) {
          a.classList.add('active');
        }
      }
    });
  }
})();
