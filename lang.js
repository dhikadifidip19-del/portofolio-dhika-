const translations = {
  id: {
    // Navigasi
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_projects: "Proyek",
    nav_achievements: "Prestasi",
    nav_contact: "Kontak",

    // Hero Section
    hero_greeting: "Halo, saya",
    hero_role: "Web Developer & Pelajar",
    hero_desc: "Membangun solusi digital kreatif dan fungsional.",
    btn_cv: "Unduh CV",
    btn_contact: "Hubungi Saya",

    // Tentang
    about_title: "Tentang Saya",
    about_desc: "Saya adalah pengembang web yang antusias dalam menciptakan antarmuka modern dan aplikasi yang bermanfaat.",

    // Proyek
    projects_title: "Proyek Terbaru",
    btn_demo: "Lihat Demo",
    btn_code: "Kode Sumber",

    // Halaman Prestasi (prestasi.html)
    achievements_title: "Prestasi & Sertifikasi",
    achievements_subtitle: "Daftar pencapaian akademik maupun non-akademik.",

    // Kontak & Footer
    contact_title: "Mari Terhubung",
    footer_copy: "© 2026 Dhika Frisco. Hak cipta dilindungi."
  },
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_achievements: "Achievements",
    nav_contact: "Contact",

    // Hero Section
    hero_greeting: "Hi, I'm",
    hero_role: "Web Developer & Student",
    hero_desc: "Building creative and functional digital solutions.",
    btn_cv: "Download CV",
    btn_contact: "Contact Me",

    // About
    about_title: "About Me",
    about_desc: "I am a passionate web developer focused on creating modern interfaces and useful applications.",

    // Projects
    projects_title: "Recent Projects",
    btn_demo: "Live Demo",
    btn_code: "Source Code",

    // Achievements Page (prestasi.html)
    achievements_title: "Achievements & Certifications",
    achievements_subtitle: "List of academic and non-academic accomplishments.",

    // Contact & Footer
    contact_title: "Let's Connect",
    footer_copy: "© 2026 Dhika Frisco. All rights reserved."
  }
};

// Ambil bahasa tersimpan atau default ke 'id'
let currentLang = localStorage.getItem("site_lang") || "id";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("site_lang", lang);
  document.documentElement.lang = lang;

  // Ubah semua elemen yang memiliki atribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update teks pada tombol toggle bahasa
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID";
    langBtn.title = lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia";
  }
}

function toggleLanguage() {
  const nextLang = currentLang === "id" ? "en" : "id";
  applyLanguage(nextLang);
}

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});
