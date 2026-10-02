// Isi salah satu atau keduanya untuk mengaktifkan pengiriman langsung.
// Jangan menaruh password, token, atau API key di file publik ini.
window.PORTFOLIO_CONFIG = {
  email: "", // Email milik Dhika, contoh format: nama@domain.com
  whatsapp: "", // Nomor milik Dhika: format internasional, angka saja (62..., tanpa +)
  imageUrl: "https://files.catbox.moe/zjfkkf.jpg", // Link URL foto profil (gambar dari web/URL luar, contoh: https://example.com/foto.jpg)

  // GAMBAR PROYEK (PROJECT):
  // Masukkan link URL gambar (https://...) atau path file lokal (contoh: "asset/project1.png")
  // Kosongkan "" jika ingin menggunakan tampilan default monogram/simbol bawaan
  projectImages: {
    1: "", // Gambar Proyek 1: Personal portfolio
    2: "", // Gambar Proyek 2: Daily task board
    3: "", // Gambar Proyek 3: Pengolah nilai siswa
    4: ""  // Gambar Proyek 4: Kalkulator sederhana
  }
};

// Prestasi otomatis: cek asset/prestasi1 sampai asset/prestasi100.
// Naikkan angka ini jika jumlah/nomor gambar melebihi 100.
window.PORTFOLIO_CONFIG.prestasiMax = 100;
