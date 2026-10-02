/* Shared day/night theme, optional ambience and gentle pointer parallax. */
(() => {
 'use strict';
 const root = document.documentElement;
 const themeButton = document.querySelector('#theme-toggle');
 const motionButton = document.querySelector('#motion-toggle');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
 const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
 const write = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
 function setTheme(theme) {
  root.dataset.theme = theme;
  if (themeButton) {
   themeButton.textContent = theme === 'dark' ? '☀' : '☾';
   const label = theme === 'dark' ? 'Ganti ke suasana pagi' : 'Ganti ke suasana malam';
   themeButton.setAttribute('aria-label', label); themeButton.title = label;
   themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'dark' ? '#0d201a' : '#183c31';
 }
 setTheme(read('dhika-theme') === 'dark' ? 'dark' : 'light');
 themeButton?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme); write('dhika-theme', theme);
 });
 let userPaused = read('dhika-motion') === 'paused';
 let paused = false;
 function applyMotion() {
  paused = userPaused || reduced.matches;
  root.dataset.motion = paused ? 'paused' : 'playing';
  if (motionButton) {
   motionButton.textContent = paused ? '▷' : 'Ⅱ';
   const label = reduced.matches ? 'Animasi mengikuti pengaturan kurangi gerakan perangkat' : paused ? 'Putar animasi' : 'Jeda animasi';
   motionButton.setAttribute('aria-label', label); motionButton.title = label;
   motionButton.setAttribute('aria-pressed', String(paused));
   motionButton.disabled = reduced.matches;
  }
  if (paused) document.querySelectorAll('.landscape-image').forEach(image => {
   image.style.removeProperty('--scene-x'); image.style.removeProperty('--scene-y');
  });
 }
 applyMotion();
 motionButton?.addEventListener('click', () => {
  userPaused = !userPaused; write('dhika-motion', userPaused ? 'paused' : 'playing'); applyMotion();
 });
 reduced.addEventListener?.('change', applyMotion);
 document.addEventListener('visibilitychange', () => { root.dataset.pageHidden = String(document.hidden); });
 if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
   if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); }
  }), { threshold: .06 });
  document.querySelectorAll('.about-grid > div,.section-heading,.skill-card,.project-card,.achievement-cta,.contact-panel').forEach(element => {
   element.classList.add('reveal-ready'); reveal.observe(element);
  });
  const scenes = new IntersectionObserver(entries => entries.forEach(entry => {
   entry.target.classList.toggle('scene-offscreen', !entry.isIntersecting);
  }), { threshold: 0 });
  document.querySelectorAll('.hero,.achievement-hero').forEach(scene => scenes.observe(scene));
 }
 document.querySelectorAll('.hero,.achievement-hero').forEach(scene => {
  const image = scene.querySelector('.landscape-image');
  if (!image) return;
  let frame = 0;
  scene.addEventListener('pointermove', event => {
   if (paused || !finePointer.matches || document.hidden) return;
   const x = event.clientX, y = event.clientY;
   cancelAnimationFrame(frame);
   frame = requestAnimationFrame(() => {
    if (paused) return;
    const box = scene.getBoundingClientRect();
    image.style.setProperty('--scene-x', `${((x - box.left) / box.width - .5) * 16}px`);
    image.style.setProperty('--scene-y', `${((y - box.top) / box.height - .5) * 12}px`);
   });
  }, { passive: true });
  scene.addEventListener('pointerleave', () => {
   cancelAnimationFrame(frame); image.style.removeProperty('--scene-x'); image.style.removeProperty('--scene-y');
  });
 });
})();
