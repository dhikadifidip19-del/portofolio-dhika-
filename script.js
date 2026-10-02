(() => {
'use strict';
const $ = s => document.querySelector(s);
const menu = $('#menu-toggle'), nav = $('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Buka menu');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Tutup menu':'Buka menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown', e=>{if(e.key==='Escape') closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.header')) closeMenu();});
if ('IntersectionObserver' in window) {
 document.documentElement.classList.add('motion');
 const skillObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');skillObserver.unobserve(e.target);}}),{threshold:.2});
 document.querySelectorAll('.skill-card').forEach(c=>skillObserver.observe(c));
 const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting) nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}),{rootMargin:'-15% 0px -65% 0px'});
 document.querySelectorAll('main section[id]').forEach(s=>sectionObserver.observe(s));
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
 let count=0;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.category.split(' ').includes(button.dataset.filter);if(!card.hidden) count++;});
 $('#filter-status').textContent=count+' proyek ditampilkan.';
}));
const config=window.PORTFOLIO_CONFIG||{};
const projects={
 '1':{title:'Personal portfolio',description:'Contoh penerapan HTML semantik, CSS Grid/Flexbox, dan JavaScript. Situs yang sedang Anda lihat merupakan demo langsung proyek ini.',url:'#home',label:'Lihat halaman utama',image:''},
 '2':{title:'Daily task board',description:'Demo JavaScript yang dapat digunakan untuk menambah tugas, menandai tugas selesai, dan menghapusnya. Data disimpan di browser jika penyimpanan lokal tersedia.',url:'projects/task-board.html',label:'Buka demo interaktif',image:''},
 '3':{title:'Pengolah nilai siswa',description:'Contoh kode Python: masukkan nilai 0–100, lalu program menghitung rata-rata, nilai tertinggi, dan nilai terendah. Unduh dan jalankan dengan Python 3.',url:'projects/nilai_siswa.py',label:'Download kode Python',download:true,image:''},
 '4':{title:'Kalkulator sederhana',description:'Contoh kode Java untuk penjumlahan, pengurangan, perkalian, dan pembagian. Memeriksa angka masukan dan pembagian dengan nol. Petunjuk menjalankan tersedia di README.',url:'projects/Kalkulator.java',label:'Download kode Java',download:true,image:''}
};
function checkImageCandidate(src){
 return new Promise(resolve=>{
  const test=new Image();
  test.decoding='async';
  let settled=false;
  const finish=ok=>{if(settled)return;settled=true;clearTimeout(timer);test.onload=test.onerror=null;resolve(ok?src:null);};
  const timer=setTimeout(()=>finish(false),2500);
  test.onload=()=>finish(test.naturalWidth>0);
  test.onerror=()=>finish(false);
  test.src=src;
 });
}
async function setupProjectImages(){
 const cards=document.querySelectorAll('.project-card');
 for(const card of cards){
  const openBtn=card.querySelector('.project-open');
  const id=(openBtn&&openBtn.dataset.project)||card.dataset.project;
  const art=card.querySelector('.project-art');
  if(!art) continue;
  let img=art.querySelector('.project-img');
  const configImg=config.projectImages&&config.projectImages[id];
  const projectObjImg=projects[id]?.image;
  let src=(configImg||projectObjImg||(img&&img.getAttribute('src'))||'').trim();
  if(!src&&id){
   const candidates=[
    `asset/project${id}.png`,`asset/project${id}.jpg`,`asset/project${id}.jpeg`,
    `asset/proyek${id}.png`,`asset/proyek${id}.jpg`,`asset/proyek${id}.jpeg`,
    `assets/project${id}.png`,`assets/project${id}.jpg`,`assets/project${id}.jpeg`
   ];
   for(const cand of candidates){
    const found=await checkImageCandidate(cand);
    if(found){src=found;break;}
   }
  }
  if(src){
   if(!img){
    img=document.createElement('img');
    img.className='project-img';
    img.alt=projects[id]?.title||`Proyek ${id}`;
    art.prepend(img);
   }
   img.src=src;
   img.onload=()=>{art.classList.add('has-image');img.style.display='block';};
   img.onerror=()=>{art.classList.remove('has-image');img.style.display='none';};
   if(img.complete&&img.naturalWidth>0){art.classList.add('has-image');img.style.display='block';}
  }else if(img){
   img.style.display='none';
  }
 }
}
setupProjectImages();
const dialog=$('#project-dialog');dialog.setAttribute('aria-labelledby','dialog-title');
document.querySelectorAll('.project-open').forEach(b=>b.addEventListener('click',()=>{
 const id=b.dataset.project;
 const p=projects[id];
 if(!p)return;
 $('#dialog-title').textContent=p.title;
 $('#dialog-description').textContent=p.description;
 const link=$('#dialog-link');link.href=p.url;link.textContent=p.label;
 if(p.download)link.setAttribute('download','');else link.removeAttribute('download');
 const card=b.closest('.project-card');
 const cardImg=card?.querySelector('.project-img');
 const imgSrc=(p.image||(config.projectImages&&config.projectImages[id])||(cardImg&&cardImg.src&&cardImg.style.display!=='none'?cardImg.src:'')||'').trim();
 const dialogImgWrap=$('#dialog-image-wrap');
 const dialogImg=$('#dialog-image');
 if(dialogImg&&dialogImgWrap){
  if(imgSrc&&!imgSrc.endsWith('index.html')&&!imgSrc.endsWith('/')){
   dialogImg.src=imgSrc;
   dialogImg.alt=p.title;
   dialogImgWrap.hidden=false;
  }else{
   dialogImg.src='';
   dialogImgWrap.hidden=true;
  }
 }
 dialog.showModal();
}));
$('#close-dialog').addEventListener('click',()=>dialog.close());
$('#dialog-link').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
const channel=$('#channel');
if(typeof config.imageUrl==='string'&&config.imageUrl.trim()!==''){
 const url=config.imageUrl.trim();
 const cardImg=$('#profile-card-img');
 if(cardImg){
  cardImg.src=url;
  cardImg.onerror=()=>{cardImg.style.display='none';};
 }
 const seal=$('#profile-seal');
 if(seal){
  const originalText=seal.textContent;
  const img=document.createElement('img');
  img.src=url;
  img.alt='Monogram DF';
  img.className='profile-avatar';
  img.onerror=()=>{seal.innerHTML='';seal.textContent=originalText;};
  seal.innerHTML='';
  seal.appendChild(img);
 }
}
const validEmail=typeof config.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email.trim());
const validWhatsApp=typeof config.whatsapp==='string'&&/^[1-9]\d{7,14}$/.test(config.whatsapp);
if(validEmail)channel.add(new Option('Email','email'));
if(validWhatsApp)channel.add(new Option('WhatsApp','whatsapp'));
if(validEmail||validWhatsApp){channel.value=validWhatsApp?'whatsapp':'email';$('#contact-note').textContent='Pesan akan dibuka di aplikasi pilihan Anda. Tinjau dan tekan kirim di aplikasi tersebut.';}
$('#contact-form').addEventListener('submit',async e=>{
 e.preventDefault();const name=$('#name').value.trim(),email=$('#email').value.trim(),message=$('#message').value.trim(),status=$('#form-status');
 if(!name||!email||!message){status.textContent='Isi nama, email, dan pesan terlebih dahulu.';return;}
 const text=`Halo Dhika!\n\nNama: ${name}\nEmail: ${email}\n\n${message}`;
 if(channel.value==='whatsapp'&&validWhatsApp){window.open('https://wa.me/'+config.whatsapp+'?text='+encodeURIComponent(text),'_blank','noopener,noreferrer');status.textContent='WhatsApp dibuka. Pesan belum terkirim; periksa lalu kirim melalui WhatsApp.';}
 else if(channel.value==='email'&&validEmail){window.location.href='mailto:'+config.email.trim()+'?subject='+encodeURIComponent('Pesan portofolio dari '+name)+'&body='+encodeURIComponent(text);status.textContent='Aplikasi email diminta terbuka. Periksa pesan dan kirim dari aplikasi email Anda.';}
 else {try{await navigator.clipboard.writeText(text);status.textContent='Pesan disalin. Buka Instagram @dhikafrisco, tempelkan pesan, lalu kirim.';}catch{status.textContent='Salin teks berikut, lalu kirim melalui Instagram: '+text;}}
});
$('#year').textContent=new Date().getFullYear();
})();
