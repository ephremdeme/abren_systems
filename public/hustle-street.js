// Hustle Street pages: the site's only script, served from this origin (CSP script-src 'self').
// Without it everything still works: Google Play's badge leads, and the screenshots scroll by hand.
(() => {
  // 1. The visitor's store first. iPadOS reports itself as a Mac, so a touch Mac counts as iOS.
  const ua = navigator.userAgent;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const android = /Android/.test(ua);
  document.documentElement.dataset.platform = ios ? 'ios' : android ? 'android' : 'other';

  // 2. Arrow buttons for the screenshot scroller (shown on desktop by CSS once this has run).
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  for (const wrap of document.querySelectorAll('[data-shots]')) {
    const list = wrap.querySelector('.shots');
    const prev = wrap.querySelector('[data-prev]');
    const next = wrap.querySelector('[data-next]');
    if (!list || !prev || !next) continue;

    const step = () => {
      const item = list.querySelector('li');
      const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : list.clientWidth * 0.8;
    };
    const go = (dir) => list.scrollBy({ left: dir * step(), behavior: reduce.matches ? 'auto' : 'smooth' });
    const update = () => {
      prev.disabled = list.scrollLeft <= 8;
      next.disabled = list.scrollLeft + list.clientWidth >= list.scrollWidth - 8;
    };

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    list.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
    wrap.dataset.ready = '';
  }
})();
