(function () {
  'use strict';

  var STORAGE_KEY  = 'zw_theme';
  var EXPIRY_KEY   = 'zw_theme_expiry';
  var TTL          = 24 * 60 * 60 * 1000; // 24 hours in ms

  /* ── Read stored preference ── */
  function getSaved() {
    try {
      var expiry = parseInt(localStorage.getItem(EXPIRY_KEY), 10);
      if (expiry && Date.now() > expiry) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(EXPIRY_KEY);
        return null;
      }
      return localStorage.getItem(STORAGE_KEY); // 'light' | 'dark' | null
    } catch (_) { return null; }
  }

  /* ── Save preference with 24hr expiry ── */
  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
      localStorage.setItem(EXPIRY_KEY, Date.now() + TTL);
    } catch (_) {}
  }

  /* ── Refresh expiry on activity (resets clock to 24h from now) ── */
  function refreshExpiry() {
    try {
      if (localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(EXPIRY_KEY, Date.now() + TTL);
      }
    } catch (_) {}
  }

  /* ── Apply theme to <html> ── */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
  }

  /* ── Determine initial theme ── */
  var saved = getSaved();
  var initial = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', initial);

  /* ── Toggle handler (called by button onclick) ── */
  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    save(next);
  };

  /* ── Once DOM is ready: sync button icon + wire activity listeners ── */
  function onReady() {
    applyTheme(document.documentElement.getAttribute('data-theme') || initial);

    /* Refresh 24hr clock on meaningful user activity */
    ['click', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
      document.addEventListener(ev, refreshExpiry, { passive: true, capture: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
