(() => {
'use strict';
document.querySelector('#year').textContent = new Date().getFullYear();
const grid = document.querySelector('#achievement-grid');
const status = document.querySelector('#achievement-status');
const empty = document.querySelector('#achievement-empty');
const dialog = document.querySelector('#achievement-dialog');
const large = document.querySelector('#achievement-large');
document.querySelector('#close-achievement').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
 const r = dialog.getBoundingClientRect();
 if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
});
// Static hosting cannot list a folder. Probe numbered image filenames instead.
// Six workers keep requests bounded; missing numbers never end the scan early.
function loadImage(src) {
 return new Promise(resolve => {
  const image = new Image();
  image.decoding = 'async';
  let settled = false;
  const finish = result => {
   if (settled) return;
   settled = true; clearTimeout(timer); image.onload = image.onerror = null; resolve(result);
  };
  const timer = setTimeout(() => { finish(null); image.src = ''; }, 10000);
  image.onload = () => finish(image.naturalWidth > 0 ? image : null);
  image.onerror = () => finish(null);
  image.src = src;
 });
}
async function findImage(number) {
 for (const extension of ['png', 'jpg', 'jpeg']) {
  const image = await loadImage(`asset/prestasi${number}.${extension}`);
  if (image) return image;
 }
 return null;
}
function addCard(number, image) {
 const title = `Prestasi ${number}`;
 const figure = document.createElement('figure'); figure.className = 'achievement-card'; figure.dataset.number = number;
 const button = document.createElement('button'); button.type = 'button'; button.className = 'achievement-image-button'; button.setAttribute('aria-label', `Perbesar gambar ${title}`);
 image.alt = `Dokumentasi ${title} Dhika Frisco`; button.append(image);
 const caption = document.createElement('figcaption');
 const heading = document.createElement('h3'); heading.textContent = title;
 const hint = document.createElement('span'); hint.textContent = 'Perbesar ↗'; hint.setAttribute('aria-hidden', 'true');
 caption.append(heading, hint); figure.append(button, caption);
 // Keep numeric order even if images finish loading in a different order.
 const next = [...grid.children].find(card => Number(card.dataset.number) > number);
 grid.insertBefore(figure, next || null);
 button.addEventListener('click', () => {
  document.querySelector('#achievement-title').textContent = title;
  large.src = image.src; large.alt = image.alt;
  document.querySelector('#achievement-original').href = image.src;
  dialog.showModal();
 });
}
const configured = Number(window.PORTFOLIO_CONFIG?.prestasiMax);
const maximum = Number.isSafeInteger(configured) && configured > 0 ? configured : 100;
let nextNumber = 1, count = 0;
async function worker() {
 while (nextNumber <= maximum) {
  const number = nextNumber++;
  const image = await findImage(number);
  if (image) { addCard(number, image); count++; }
 }
}
Promise.all(Array.from({ length: Math.min(6, maximum) }, worker)).then(() => {
 grid.setAttribute('aria-busy', 'false');
 empty.hidden = count > 0;
 status.textContent = count ? `${count} dokumentasi prestasi · Klik gambar untuk memperbesar.` : 'Belum ada dokumentasi yang dapat ditampilkan.';
}).catch(() => {
 grid.setAttribute('aria-busy', 'false');
 status.textContent = 'Galeri belum selesai dimuat. Muat ulang halaman untuk mencoba kembali.';
});
})();
