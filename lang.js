(() => {
  'use strict';

  const translations = {
    id: {
      skip_nav: "Lewati navigasi",
      nav_home: "Beranda",
      nav_about: "Tentang",
      nav_skills: "Keahlian",
      nav_projects: "Proyek",
      nav_contact: "Kontak",
      nav_back_projects: "Kembali ke proyek",
      nav_achievements: "Prestasi",

      hero_eyebrow: '<span class="line"></span> SELAMAT DATANG DI RUANG KECIL SAYA',
      hero_hello: "Halo, saya Dhika Frisco.",
      hero_title: "Ide yang tumbuh.<br>Karya yang <em>hidup.</em>",
      hero_desc: "Saya <strong>Dhika Frisco Dwi Pratama</strong>, siswa X RPL 3 di SMK KRIAN 1 SIDOARJO. Menjelajahi dunia teknologi dengan rasa ingin tahu, satu langkah kecil dalam satu waktu.",
      btn_explore_projects: 'Jelajahi proyek <span aria-hidden="true">↗</span>',
      btn_download_cv: 'Download CV <span aria-hidden="true">↓</span>',
      meta_absent: "Absen 02",
      profile_role: "Pelajar · Pembelajar · Penjelajah ide",
      hero_motto: '<span aria-hidden="true">✦</span> TERUS BELAJAR, TERUS BERTUMBUH',
      hero_scroll: 'Mulai perjalanan <span class="scroll-arrow" aria-hidden="true">↓</span>',

      about_label: "01 / TENTANG SAYA",
      about_title: "HALO<br><em>SAYA DHIKA</em>",
      about_bio: "Halo, nama saya Dhika Frisco Dwi Pratama, biasa dipanggil Dhika. Saya siswa di SMK Krian 1 Sidoarjo, jurusan Rekayasa Perangkat Lunak (RPL), kelas X RPL 3.<br><br>Saya tertarik pada dunia teknologi dan musik. Saya senang mempelajari musik, serta dasar-dasar pengembangan web dan pemrograman, mulai dari merancang tata letak hingga menambahkan fitur interaktif.<br><br>Selain belajar, saya juga senang bermain keyboard.<br><br>Cita-cita: Menjadi pemain keyboard profesional<br>Keahlian: Bermain keyboard, dasar pengembangan web, dan pemrograman<br>Hobi: Bermain keyboard, mempelajari teknologi, dan bermain game<br>Lokasi: Desa Pejangkungan, Dusun Kates, Kecamatan Prambon, Kabupaten Sidoarjo",
      label_fullname: "Nama lengkap",
      label_class: "Kelas / Absen",
      edu_title: "Perjalanan pendidikan",
      edu_sd: "01 / SEKOLAH DASAR",
      edu_smp: "02 / SEKOLAH MENENGAH PERTAMA",
      edu_smk: "03 / SEKOLAH MENENGAH KEJURUAN",
      edu_smk_desc: "Rekayasa Perangkat Lunak · Saat ini",

      skills_label: "02 / BEKAL PERJALANAN",
      skills_title: "Sedikit demi sedikit,<br><em>semakin terampil.</em>",
      skills_desc: "Terus berkembang lewat latihan.<br>Persentase berdasarkan penilaian pribadi.",
      skill_html_desc: "Struktur, layout & tampilan responsif",
      skill_js_desc: "Logika & interaksi di browser",
      skill_py_desc: "Dasar pemrograman & pengolahan data",
      skill_java_desc: "Dasar sintaks & pemrograman objek",

      projects_label: "03 / JEJAK KARYA",
      projects_title: "Karya kecil.<br><em>Langkah berarti.</em>",
      projects_desc: "Beberapa project yang saya kerjakan sebagai bagian dari proses pembelajaran dan pengembangan kemampuan di bidang teknologi.",
      filter_all: "Semua",
      proj1_num: "PROJEK / 01",
      proj1_title: "KALKULATOR SEDERHANA",
      proj1_desc: "KALKULATOR SEDERHANA MENGGUNAKAN FLOWGORITHM",
      proj2_title: "MINI KASIR",
      proj2_desc: "project mini kasir dari java",
      proj3_cap: "DESAIN LOGOTYPE",
      proj3_title: "DESAIN LOGOTYPE BARA API",
      proj3_desc: "desain logotype BARA API sederhana dari adobe illustrator",
      proj4_tag: '?<span>Contoh latihan</span>',
      btn_detail: 'Lihat detail <span aria-hidden="true">↗</span>',
      cta_label: "SETIAP USAHA PUNYA CERITA",
      cta_title: "Pencapaian di sepanjang perjalanan.",
      cta_btn: 'Lihat Prestasi Saya Di sini ya <span aria-hidden="true">↗</span>',

      contact_label: "04 / MARI TERHUBUNG",
      contact_title: "Mari menumbuhkan<br><em>ide bersama.</em>",
      contact_desc: "Untuk berbagi ide, bertanya, atau sekadar menyapa, temukan saya di Instagram dan blog pribadi.",
      contact_note: "Email dan WhatsApp belum tersedia. Anda dapat menyalin pesan lalu mengirimkannya lewat Instagram.",
      form_name_lbl: "Nama Anda",
      form_name_ph: "Nama lengkap",
      form_email_lbl: "Email Anda",
      form_msg_lbl: "Pesan",
      form_msg_ph: "Ceritakan ide atau pesan Anda…",
      form_channel_lbl: "Kirim melalui",
      form_channel_opt: "Salin pesan untuk Instagram",
      form_submit: 'Siapkan pesan <span aria-hidden="true">↗</span>',

      dialog_note: "Contoh latihan, bukan klaim proyek yang telah dikerjakan sebelumnya.",
      dialog_open: "Buka",
      footer_tagline: "Tumbuh bersama rasa ingin tahu.",
      noscript_index: "Aktifkan JavaScript untuk filter proyek, pergantian tema, dan formulir kontak. Profil dan CV tetap dapat diakses.",

      ach_eyebrow: '<span class="line"></span> CATATAN PERJALANAN / DHIKA FRISCO',
      ach_title: "Setiap langkah,<br>layak <em>dirayakan.</em>",
      ach_subtitle: "Galeri prestasi dan dokumentasi perjalanan belajar saya.",
      ach_label: "01 / PRESTASI SAYA",
      ach_gallery_title: "Cerita di setiap <em>pencapaian.</em>",
      ach_loading: "Memuat galeri prestasi…",
      ach_empty_title: "Belum ada gambar prestasi.",
      ach_empty_desc: "Dokumentasi prestasi akan ditampilkan di sini setelah ditambahkan.",
      ach_empty_btn: "Jelajahi proyek",
      ach_dialog_title: "Prestasi",
      ach_dialog_orig: "Buka gambar asli ↗",
      noscript_ach: "Aktifkan JavaScript untuk menampilkan galeri prestasi."
    },
    en: {
      skip_nav: "Skip navigation",
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      nav_back_projects: "Back to projects",
      nav_achievements: "Achievements",

      hero_eyebrow: '<span class="line"></span> WELCOME TO MY LITTLE SPACE',
      hero_hello: "Hi, I'm Dhika Frisco.",
      hero_title: "Ideas that grow.<br>Works that <em>come alive.</em>",
      hero_desc: "I am <strong>Dhika Frisco Dwi Pratama</strong>, a 10th-grade Software Engineering (X RPL 3) student at SMK KRIAN 1 SIDOARJO. Exploring the world of technology with curiosity, one small step at a time.",
      btn_explore_projects: 'Explore projects <span aria-hidden="true">↗</span>',
      btn_download_cv: 'Download CV <span aria-hidden="true">↓</span>',
      meta_absent: "Roll No. 02",
      profile_role: "Student · Learner · Idea Explorer",
      hero_motto: '<span aria-hidden="true">✦</span> KEEP LEARNING, KEEP GROWING',
      hero_scroll: 'Start the journey <span class="scroll-arrow" aria-hidden="true">↓</span>',

      about_label: "01 / ABOUT ME",
      about_title: "HELLO<br><em>I'M DHIKA</em>",
      about_bio: "Hello, my name is Dhika Frisco Dwi Pratama, but you can call me Dhika. I am a student at SMK Krian 1 Sidoarjo, majoring in Software Engineering (RPL), class X RPL 3.<br><br>I am interested in technology and music. I enjoy learning about music, as well as the basics of web development and programming, starting from designing layouts to adding interactive features.<br><br>Besides studying, I also enjoy playing the keyboard.<br><br>Dream: To become a professional keyboardist<br>Skills: Playing the keyboard, basic web development, and programming<br>Hobbies: Playing the keyboard, learning about technology, and playing games<br>Location: Pejangkungan Village, Kates Hamlet, Prambon District, Sidoarjo Regency",
      label_fullname: "Full name",
      label_class: "Class / Roll No.",
      edu_title: "Education journey",
      edu_sd: "01 / ELEMENTARY SCHOOL",
      edu_smp: "02 / JUNIOR HIGH SCHOOL",
      edu_smk: "03 / VOCATIONAL HIGH SCHOOL",
      edu_smk_desc: "Software Engineering · Present",

      skills_label: "02 / JOURNEY TOOLKIT",
      skills_title: "Little by little,<br><em>more skilled.</em>",
      skills_desc: "Continuously growing through practice.<br>Percentages are based on self-assessment.",
      skill_html_desc: "Structure, layout & responsive design",
      skill_js_desc: "Logic & browser interactivity",
      skill_py_desc: "Programming basics & data processing",
      skill_java_desc: "Syntax basics & object-oriented programming",

      projects_label: "03 / TRACK RECORD",
      projects_title: "Small works.<br><em>Meaningful steps.</em>",
      projects_desc: "Several projects I worked on as part of my learning process and skill development in technology.",
      filter_all: "All",
      proj1_num: "PROJECT / 01",
      proj1_title: "SIMPLE CALCULATOR",
      proj1_desc: "SIMPLE CALCULATOR USING FLOWGORITHM",
      proj2_title: "MINI CASHIER",
      proj2_desc: "Mini cashier project built with Java",
      proj3_cap: "LOGOTYPE DESIGN",
      proj3_title: "BARA API LOGOTYPE DESIGN",
      proj3_desc: "Simple BARA API logotype design made with Adobe Illustrator",
      proj4_tag: '?<span>Practice example</span>',
      btn_detail: 'View details <span aria-hidden="true">↗</span>',
      cta_label: "EVERY EFFORT HAS A STORY",
      cta_title: "Achievements along the journey.",
      cta_btn: 'View My Achievements Here <span aria-hidden="true">↗</span>',

      contact_label: "04 / LET'S CONNECT",
      contact_title: "Let's grow<br><em>ideas together.</em>",
      contact_desc: "To share ideas, ask questions, or just say hi, find me on Instagram and my personal blog.",
      contact_note: "Email and WhatsApp are not available yet. You can copy your message and send it via Instagram.",
      form_name_lbl: "Your Name",
      form_name_ph: "Full name",
      form_email_lbl: "Your Email",
      form_msg_lbl: "Message",
      form_msg_ph: "Share your idea or message…",
      form_channel_lbl: "Send via",
      form_channel_opt: "Copy message for Instagram",
      form_submit: 'Prepare message <span aria-hidden="true">↗</span>',

      dialog_note: "Practice example, not a claim of previously commissioned work.",
      dialog_open: "Open",
      footer_tagline: "Growing with curiosity.",
      noscript_index: "Enable JavaScript for project filters, theme switching, and the contact form. Profile and CV remain accessible.",

      ach_eyebrow: '<span class="line"></span> JOURNEY LOG / DHIKA FRISCO',
      ach_title: "Every step,<br>worth <em>celebrating.</em>",
      ach_subtitle: "Gallery of my achievements and learning journey documentation.",
      ach_label: "01 / MY ACHIEVEMENTS",
      ach_gallery_title: "Stories behind every <em>milestone.</em>",
      ach_loading: "Loading achievement gallery…",
      ach_empty_title: "No achievement images yet.",
      ach_empty_desc: "Achievement documentation will be displayed here once added.",
      ach_empty_btn: "Explore projects",
      ach_dialog_title: "Achievement",
      ach_dialog_orig: "Open original image ↗",
      noscript_ach: "Enable JavaScript to display the achievement gallery."
    }
  };

  window.getCurrentLang = () => localStorage.getItem('portfolio_lang') || 'id';

  function applyLanguage(lang) {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang]?.[key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang]?.[key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'id' ? 'EN' : 'ID';
      const label = lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function initLang() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const next = window.getCurrentLang() === 'id' ? 'en' : 'id';
        applyLanguage(next);
      });
    }
    applyLanguage(window.getCurrentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
