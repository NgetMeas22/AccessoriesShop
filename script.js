/**
 * Backward compatibility alias for app.js
 */
(function() {
  if (typeof window.cheyApp === 'undefined') {
    const s = document.createElement('script');
    s.src = 'app.js';
    document.head.appendChild(s);
  }
})();
