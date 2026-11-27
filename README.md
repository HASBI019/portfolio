# Template Portofolio Interaktif (Bahasa Indonesia)

Template portofolio personal modern berbahasa Indonesia yang terinspirasi dari tata letak editorial interaktif, dilengkapi navigasi mengambang di atas pada desktop dan dock menu di bawah pada layar HP, serta siap di-deploy gratis ke Vercel.

## Struktur Folder

```text
├── index.html                  # Pengaturan judul, SEO meta, dan Google Fonts
├── vercel.json                 # Konfigurasi routing SPA gratis di Vercel
└── src/
    ├── styles/
    │   └── theme.css           # File CSS terpisah untuk warna, font, dan gaya cetak CV
    ├── types/
    │   └── portfolio.ts        # Tipe data TypeScript
    ├── data/                   # <-- CUKUP EDIT FOLDER INI DI VSCODE
    │   ├── profile.ts          # Nama, bio singkat, foto, metrik, dan tautan sosial
    │   ├── about.ts            # Pengalaman kerja, keahlian, pendidikan, dan kutipan
    │   └── projects.ts         # Daftar proyek, kategori, dan studi kasus
    ├── components/
    │   ├── layout/             # Navbar mengambang desktop, menu bawah HP, footer
    │   ├── home/               # Seksi Beranda, Tentang, Proyek Pilihan, Kontak
    │   ├── about/              # Komponen halaman Tentang lengkap
    │   ├── projects/           # Kartu proyek, modal studi kasus, tabel arsip
    │   └── ui/                 # Komponen pendukung (CV modal, gambar aman, garis editorial)
    └── pages/                  # Halaman Beranda, Tentang, Proyek, dan Arsip
```

## Yang Perlu Di-download untuk Edit di VSCode & Hosting Gratis

1. **Node.js (versi LTS)**: Unduh dari `nodejs.org` agar bisa menjalankan `npm install` dan `npm run dev`.
2. **Visual Studio Code (VSCode)**: Unduh dari `code.visualstudio.com`.
   - Ekstensi VSCode yang disarankan: **Tailwind CSS IntelliSense** dan **ESLint**.
3. **Git** (`git-scm.com`): Untuk mengunggah folder proyek ke GitHub.

## Cara Menjalankan di Lokal (VSCode)

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser untuk melihat hasilnya secara langsung.

## Cara Mengganti Data Portofolio

1. Buka `src/data/profile.ts` untuk mengganti nama, email, bio, dan tautan media sosial.
2. Buka `src/data/about.ts` untuk mengganti keahlian, riwayat kerja, dan pendidikan.
3. Buka `src/data/projects.ts` untuk memasukkan proyek Anda sendiri.
4. Simpan gambar Anda di `src/assets/images/` lalu sesuaikan nama file di `src/data/`.

## Cara Upload Gratis ke Vercel

1. Push folder proyek ini ke repository **GitHub** Anda (bisa public maupun private).
2. Buka `vercel.com` dan login menggunakan akun GitHub (pilih paket **Hobby / Free**).
3. Klik **Add New Project**, pilih repository Anda.
4. Vercel otomatis mendeteksi **Vite** (`npm run build`, output `dist`), lalu klik **Deploy**.
