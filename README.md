# Dapur Gizi

Dapur Gizi adalah aplikasi web berbasis *Single Page Application* (SPA) yang dirancang untuk membantu masyarakat, khususnya diwilayah Wanayasa dan sekitarnya, dalam mengakses panduan nutrisi, resep makanan bergizi dengan kalkulasi anggaran mingguan, serta melakukan skrining awal deteksi stunting pada balita.

Proyek ini dikembangkan oleh tim siswa SMK Negeri 1 Wanayasa dengan menggabungkan antarmuka yang responsif, fitur kalkulator antropometri dan katalog resep berbasis kearifan pangan lokal.

## Fitur Utama

- **Kalkulator & Skrining Stunting Balita** : Perhitungan estimasi Z-Score Tinggi Badan menurut Usia (TB/U) untuk anak usia 0-60 bulan berdasarkan kurva pertumbuhan standar WHO dan Kemenkes RI.
- **Katalog Resep & Anggaran Mingguan** : Filter resep interaktif yang dapat disesuaikan dengan alokasi anggaran belanja mingguan keluarga.
- **Filter Wilayah** : Penyaringan resep berdasarkan ketersediaan bahan pangan lokal setempat.
- **Rekomendasi Pangan Aman** : Daftar bahan pangan kaya gizi dan protein hewani yang dikategorikan khusus untuk MPASI, ibu hamil, ibu menyusui, dewasa dan keluarga.
- **Penyimpanan Resep Favorit** : Fitur untuk menyimpan resep pilihan secara lokal pada peramban web (*Local Storage*).

## Teknologi yang Digunakan

- **HTML5** : Struktur utama antarmuka web.
- **Tailwind CSS** : *Framework* CSS untuk tata letak dan desain antarmuka responsif.
- **JavaScript (Vanilla)** : Logika interaktif, manipulasi DOM, pemrosesan Z-Score, dan *state management*.
- **FontAwesome & Google Fonts** : Penyediaan ikon dan tipografi aplikasi.

## Struktur File Proyek

```text
dapurgizi/
├── index.html        # Halaman utama aplikasi
├── css/
│   └── style.css     # Berkas kustomisasi gaya visual
├── js/
│   ├── app.js        # Logika utama aplikasi dan pemrosesan data
│   └── data.js       # Data resep, kategori gizi, dan profil tim
└── README.md         # Dokumentasi proyek
```

## Panduan Menjalankan Project

Repository GitHub ini telah disetel secara publik (*public repository*). Silakan ikuti langkah-langkah dibawah ini untuk menjalankan *project* dikomputer lokal Anda :

1. Pastikan Anda memiliki peramban web (*browser*) seperti Google Chrome, Mozilla Firefox atau Microsoft Edge.
2. Clone repository ini ke komputer lokal Anda :
   ```bash
   git clone https://github.com/rizkimuhamadadm/dapurgizi.git
   ```
3. Masuk ke direktori *project* :
   ```bash
   cd dapurgizi
   ```
4. Jalankan aplikasi dengan membuka berkas `index.html` secara langsung di *browser* Anda, atau gunakan ekstensi *Live Server* di Visual Studio Code jika ingin menjalankan melalui *local server*.

## Tim Pengembang

Aplikasi ini dikembangkan oleh tim siswa **SMK Negeri 1 Wanayasa** :

- **Harine Aurelia Putri** : Ketua Tim
- **Rizki Muhamad Adam** : Pengembang
- **Nanda Aditama** : Pengembang

## Lisensi

Proyek ini dibuat untuk tujuan edukasi dan pengembangan kesehatan masyarakat. Seluruh hak cipta dilindungi oleh tim pengembang Dapur Gizi SMK Negeri 1 Wanayasa.