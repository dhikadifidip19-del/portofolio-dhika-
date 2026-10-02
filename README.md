# Portofolio Dhika Frisco Dwi Pratama — Desa Pegunungan

Website statis HTML, CSS, dan JavaScript. Tidak membutuhkan npm, build, database, atau framework. Buka `index.html` untuk mencoba secara lokal. Semua aset utama tersedia offline.

## Tema desa pegunungan

Halaman utama, halaman prestasi, demo tugas, favicon, dan CV memakai palet hijau hutan, warna daun, serta aksen keemasan. Hero menggunakan ilustrasi asli desa pegunungan, sawah terasering, dan kabut. Default adalah suasana pagi; tombol bulan/matahari mengganti suasana malam/pagi dan mengingat pilihan.

Animasi meliputi burung terbang dengan gerak kepakan, kabut/awan tipis, cahaya yang bergerak halus, partikel melayang, kartu profil mengambang, muncul saat scroll, skill bars, dan hover kartu. Gerakan parallax ringan aktif pada perangkat berkursor; tidak mengambil alih scroll pada HP.

Tombol **Ⅱ / ▷** di header menjeda/memutar animasi. Pilihan tersimpan. Pengaturan **kurangi gerakan** perangkat otomatis menghentikan animasi. Animasi dekoratif berhenti saat tab tersembunyi atau pemandangan berada di luar layar. Tidak ada audio otomatis.

File tambahan: `nature.js`, `assets/desa-pegunungan.png`, `assets/burung.png`, dan `assets/ARTWORK.md`. Aset gambar adalah ilustrasi, bukan foto pribadi atau dokumentasi lokasi tertentu. Semua gambar disertakan dalam ZIP.

## Upload dan deploy

1. Ekstrak ZIP ini.
2. Buat repository GitHub, kemudian upload **semua isi folder** (index.html harus berada pada root repository). Jangan hanya mengunggah ZIP.
3. Pada pengaturan GitHub Pages, gunakan penerbitan dari branch utama, folder root, lalu simpan. Tunggu penerbitan selesai dan gunakan URL yang ditampilkan GitHub.
4. Untuk hosting statis lain, gunakan folder yang berisi index.html sebagai direktori publik; tidak ada perintah build.

Panduan ini bukan konfirmasi bahwa website sudah dipublikasikan. Paket ini siap diunggah dan di-host.

## Mengatur foto profil & kontak (email / WhatsApp)

Edit `config.js`:
- `imageUrl`: Isi dengan link URL gambar (misal: `https://example.com/foto.jpg`) untuk menampilkan foto profil pada kartu hero. Jika dikosongkan, tampilan default berupa monogram DF.
- `email`: Email milik Dhika dalam format nama@domain.com.
- `whatsapp`: Nomor WhatsApp dalam format internasional (62..., hanya angka).

Biarkan kosong bila tidak dipakai. Email dan nomor belum diberikan, sehingga tidak diisi sembarang alamat.

Setelah konfigurasi valid, pilihan Email / WhatsApp muncul otomatis. WhatsApp membuka draf ke nomor tujuan. Email memakai aplikasi email pengunjung (mailto). Pengunjung tetap harus menekan kirim di aplikasi tersebut; website tidak mengirim otomatis dan tidak menyimpan pesan. Tanpa konfigurasi, pengunjung dapat menyalin pesan untuk dikirim melalui Instagram. Jika clipboard tidak tersedia, teks ditampilkan agar dapat disalin manual.

## Menambahkan gambar di bagian Project

Anda dapat menambahkan gambar pada kartu proyek (dan jendela pop-up detailnya) dengan 3 cara mudah:

### Cara 1: Melalui `config.js` (Sangat Praktis)
Buka file `config.js`, lalu isi URL atau path gambar pada bagian `projectImages`:
```javascript
projectImages: {
  1: "https://example.com/gambar-portfolio.jpg", // Proyek 1 (Personal portfolio)
  2: "asset/project2.png",                        // Proyek 2 (Daily task board)
  3: "",                                          // Kosongkan "" jika ingin pakai ikon bawaan
  4: ""
}
```
Bisa menggunakan link URL online (`https://...`) maupun path gambar lokal (`asset/...` atau `assets/...`).

### Cara 2: Otomatis melalui folder `asset` (Tanpa Edit Kode)
Cukup masukkan file gambar Anda ke dalam folder `asset/` dengan format nama:
- `project1.png` (atau `project1.jpg` / `proyek1.png`) -> Proyek 1
- `project2.png` (atau `project2.jpg` / `proyek2.png`) -> Proyek 2
- `project3.png` (atau `project3.jpg` / `proyek3.png`) -> Proyek 3
- `project4.png` (atau `project4.jpg` / `proyek4.png`) -> Proyek 4

Website akan otomatis mendeteksi dan menampilkannya di kartu proyek serta modal pop-up detail.

### Cara 3: Langsung di file `index.html`
Buka `index.html`, cari kartu proyek yang ingin diganti gambarnya, lalu isi atribut `src` pada tag `<img class="project-img">`:
```html
<img src="asset/proyek1.png" alt="Personal portfolio" class="project-img">
```

Jika tidak ada gambar yang diisi, kartu proyek akan tetap tampil rapi dengan gradien latar dan simbol bahasa pemrograman bawaan (`</>`, `✓`, `Py`, `{ }`).


## Isi paket

- `index.html`: halaman utama, lima bagian, navigasi, dan galeri.
- `style.css`: tema gelap/terang, responsive, glassmorphism dan animasi.
- `script.js`: menu, tema tersimpan, filter, detail proyek, animasi skill, kontak.
- `config.js`: konfigurasi tujuan kontak.
- `assets/CV-Dhika-Frisco.pdf`: CV satu halaman berdasarkan data yang diberikan.
- `assets/favicon.svg`: ikon monogram.
- `projects/task-board.html` dan `tasks.js`: demo daftar tugas.
- `projects/nilai_siswa.py`: contoh Python.
- `projects/Kalkulator.java`: contoh Java.
- `.nojekyll`: penanda untuk hosting GitHub Pages.

## Menjalankan contoh kode

Python 3:

```sh
python3 projects/nilai_siswa.py
```

Java (JDK 8+):

```sh
javac projects/Kalkulator.java
java -cp projects Kalkulator
```

Demo daftar tugas dapat dibuka langsung di browser. Penyimpanan lokal bergantung pada izin browser; gunakan hosting untuk perilaku konsisten.

## Mengganti konten

Empat kartu berlabel **Contoh latihan**, bukan klaim riwayat karya Dhika. Ganti isi kartu di index.html serta data `projects` di script.js jika sudah memiliki proyek asli. Tidak ada tahun pendidikan, prestasi, foto wajah, pengalaman kerja, email, atau nomor telepon yang direka. Monogram DF digunakan sebagai identitas visual. CV memuat data yang diberikan dan ringkasan profil pelajar; ganti PDF di path yang sama bila diperbarui.

## Fitur

HTML semantik, ukuran responsif HP/tablet/laptop, hamburger menu, smooth scroll, pilihan dark/light dengan penyimpanan preferensi, animasi skill berbasis scroll, filter kategori, dialog detail dengan Escape, download PDF, tautan WordPress/Blogger/Instagram, navigasi keyboard, fokus terlihat, dan dukungan reduced motion.

Persentase skill adalah penilaian pribadi: HTML & CSS 85%, JavaScript 70%, Python 60%, Java 50%.

## Pemeriksaan paket

Sintaks JavaScript dan semua rujukan aset lokal diperiksa. Contoh Python dijalankan dengan input nilai sederhana. CV PDF dirender dan diperiksa secara visual. Pengujian browser otomatis belum berhasil dilakukan karena browser tidak tersedia dan pengunduhannya gagal; tampilan serta interaksi perlu diperiksa kembali setelah di-host. Contoh Java belum dikompilasi karena JDK tidak tersedia di lingkungan pembuatan.

## Halaman prestasi (tambahan)

Tombol **Lihat Prestasi Saya Di sini ya** terletak tepat setelah kartu proyek dan membuka `prestasi.html`. Halaman menggunakan `style.css` yang sama, termasuk dark/light mode dan preferensi tema tersimpan. Klik gambar untuk memperbesar; tekan Escape atau tombol tutup untuk kembali.

### Menambahkan gambar

1. Masukkan gambar ke folder **asset** (tanpa s).
2. Beri nama `prestasi1.png`, `prestasi2.jpg`, `prestasi3.jpeg`, dan seterusnya. PNG/JPG/JPEG boleh dicampur. Gunakan huruf kecil dan nomor tanpa nol di depan.
3. Upload folder beserta gambar ke GitHub, kemudian tunggu deploy selesai dan muat ulang halaman prestasi.

Tidak perlu mengedit HTML. Secara default, halaman memeriksa nomor **1–100**. Nomor yang tidak tersedia dilewati; gambar diurutkan berdasarkan nomor. Untuk nomor di atas 100, ubah `window.PORTFOLIO_CONFIG.prestasiMax` di `config.js`. Hindari angka terlalu besar agar tidak terlalu banyak permintaan gambar. Untuk satu nomor dengan beberapa format, PNG didahulukan, lalu JPG, lalu JPEG. File rusak/tidak ditemukan tidak ditampilkan. Pada koneksi lambat, muat ulang bila gambar gagal dimuat.

Folder **assets** yang sudah ada tetap berisi CV dan favicon. Folder baru **asset** khusus gambar prestasi. Belum ada gambar prestasi asli yang diberikan, sehingga paket menampilkan keadaan kosong yang rapi sampai gambar ditambahkan. Jangan mengubah ekstensi file saja; pastikan berkas benar-benar gambar PNG/JPG/JPEG.

Pembaruan prestasi: pemeriksaan sintaks, rujukan file, posisi tombol, serta simulasi logika galeri lulus (format campuran, nomor terlewat, urutan, prioritas PNG, pembesaran/tutup, dan kondisi kosong). Pemeriksaan ini bukan pengujian visual di browser.

## Pemeriksaan tema pegunungan

Struktur HTML, rujukan aset, dan sintaks JavaScript diperiksa. Simulasi logika menguji tema pagi/malam, pilihan tersimpan, jeda, reduced motion, tab tersembunyi, penyimpanan browser yang diblokir, dan galeri prestasi. Lanskap, siluet burung, dan CV diperiksa secara visual. Browser pengujian tidak tersedia, sehingga tampilan serta animasi belum diverifikasi langsung di browser.
