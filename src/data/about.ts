import { AboutData } from '../types/portfolio';

/**
 * DATA TENTANG, PENGALAMAN & PENDIDIKAN  MUHAMMAD HASBI AS'ARI
 * Anda dapat mengedit, menambah poin pengalaman, atau memperbarui IPK di file ini.
 */
export const aboutData: AboutData = {
  headline: 'Merapikan alur sistem informasi dan membangun web yang benar-benar membantu pengguna.',
  paragraphs: [
    'Saya Muhammad Hasbi As’ari, lulusan S1 Informatika Sekolah Tinggi Teknologi Cipasung (2022–2026). Saya memiliki ketertarikan kuat pada pengembangan sistem informasi, aplikasi web, pengelolaan data, serta pekerjaan administrasi teknis yang membutuhkan ketelitian dan keteraturan.',
    'Sebelum kuliah, saya menjalani masa jeda dua tahun dengan mondok sambil bekerja di Pawon Mbok Debi mulai dari cleaning service hingga dipercaya menjadi juru masak serta bekerja paruh waktu di Sari Roti saat libur semester. Pengalaman lapangan tersebut membentuk kedisiplinan waktu, etos kerja, dan ketahanan saya saat bekerja di bawah tekanan.',
    'Selama kuliah, saya aktif di organisasi mahasiswa dan kepanitiaan kampus dari Kepala Divisi Minfo BEM hingga menjadi Ketua Himpunan Mahasiswa Informatika (HMIF) periode 2025/2026. Di sisi teknis, saya menyelesaikan kerja praktik di BPS Kabupaten Tasikmalaya dengan membangun website Indeks Perkembangan Harga, serta merancang sistem informasi manajemen inventaris dengan fitur predictive maintenance untuk Tugas Akhir.',
  ],
  quote: {
    text: 'Satu tindakan nyata jauh lebih berarti daripada seribu ide brilian.',
    author: "Muhammad Hasbi As'ari",
  },
 focusTrack: {
    title: 'DJ Tresno Liyane',
    artist: 'Plat KT Sound Breakbeat',
    mood: 'Musik latar',
    durationLabel: '03:42',
  },
 skills: [
    {
      name: 'React, TypeScript & Three.js',
      category: 'Frontend',
      experience: 'Web & 3D Interaktif',
      summary: 'Membangun antarmuka web modern dengan Vite & React, presentasi interaktif (Framer Motion), serta game 3D di browser.',
    },
    {
      name: 'HTML, CSS, Tailwind & Web Audio',
      category: 'Frontend',
      experience: 'UI & Media Browser',
      summary: 'Menyusun tata letak responsif di desktop maupun ponsel serta pengolah audio langsung di browser dengan JavaScript.',
    },
    {
      name: 'Kotlin (Android Studio)',
      category: 'Frontend',
      experience: 'Aplikasi Mobile',
      summary: 'Pengembangan aplikasi Android native untuk pencatatan transaksi dan manajemen pesanan.',
    },
    {
      name: 'Laravel & PHP 8.2',
      category: 'Backend',
      experience: 'Sistem Informasi',
      summary: 'Membangun sistem informasi instansi dan kampus (Blade, Chart.js, ekspor laporan PDF) lengkap dengan keamanan login.',
    },
    {
      name: 'MySQL & Supabase',
      category: 'Backend',
      experience: 'Basis Data',
      summary: 'Perancangan struktur tabel relasional, pengelolaan data inventaris, dan penyimpanan cloud.',
    },
    {
      name: 'Python & Machine Learning',
      category: 'Backend',
      experience: 'Analisis Data',
      summary: 'Eksperimen prediksi suhu berbasis data (standar SKKNI), Simple Moving Average, dan dasar NLP chatbot.',
    },
    {
      name: 'Git, Github, Vercel & DomaiNesia',
      category: 'Cloud & Alat',
      experience: 'Deployment & Hosting',
      summary: 'Pengelolaan kode di GitHub (30+ repository), deployment web modern di Vercel, serta hosting sistem Laravel dan database MySQL di DomaiNesia (cPanel).',
    },
    {
      name: 'Google Sheets & Google Docs',
      category: 'Cloud & Alat',
      experience: 'Administrasi & Data',
      summary: 'Terbiasa mengolah data spreadsheet dengan rumus, menyusun laporan kerja, kolaborasi dokumen real-time, serta dasar Microsoft Office.',
    },
    {
      name: 'AI-Assisted Development',
      category: 'Cloud & Alat',
      experience: 'Produktivitas',
      summary: 'Memanfaatkan AI secara tepat sebagai alat bantu riset kode sementara alur sistem, logika, dan pengujian tetap dikendalikan penuh.',
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      period: '2025 — 2026',
      role: 'Ketua Himpunan Mahasiswa Informatika (HMIF)',
      company: 'Sekolah Tinggi Teknologi Cipasung',
      location: 'Tasikmalaya',
      type: 'Organisasi Kampus',
      highlights: [
        'Memimpin kepengurusan HMIF periode 2025/2026 setelah sebelumnya bertugas sebagai anggota dan Kepala Divisi PSDM.',
        'Mengkoordinasikan tim dalam berbagai kegiatan kampus seperti KTMB/PKKMB, seminar OJK, dan Makrab (Ketua Panitia).',
        'Membiasakan komunikasi lintas divisi, pembagian tugas terukur, dan penuntasan agenda hingga evaluasi akhir.',
      ],
      stack: ['Kepemimpinan Tim', 'Manajemen Acara', 'Administrasi', 'Komunikasi'],
    },
    {
      id: 'exp-2',
      period: '2025',
      role: 'Peserta Kerja Praktik  Web Developer',
      company: 'BPS Kabupaten Tasikmalaya',
      location: 'Tasikmalaya',
      type: 'Kerja Praktik',
      highlights: [
        'Mengembangkan Website Indeks Perkembangan Harga (IPH) untuk membantu penyajian dan pemantauan data indeks harga.',
        'Mengimplementasikan tampilan grafik data menggunakan Laravel dan Chart.js agar informasi mudah dibaca.',
        'Berkoordinasi langsung dengan pembimbing lapangan terkait kebutuhan data dan alur penggunaan sistem.',
      ],
      stack: ['Laravel', 'PHP 8.2', 'Blade', 'Chart.js', 'MySQL'],
    },
    {
      id: 'exp-3',
      period: '2023 — 2025',
      role: 'Kepala Divisi Minfo BEM & Pengembang Proyek Mandiri',
      company: 'STT Cipasung & Proyek UMKM',
      location: 'Tasikmalaya',
      type: 'Organisasi & Proyek',
      highlights: [
        'Mengelola publikasi informasi dan dokumentasi digital sebagai Kepala Divisi Minfo di Badan Eksekutif Mahasiswa (BEM).',
        'Membangun aplikasi web dan Android untuk kebutuhan studi kasus UMKM serta tugas akhir perkuliahan.',
      ],
      stack: ['React', 'Laravel', 'Kotlin', 'Vercel'],
    },
    {
      id: 'exp-4',
      period: '2020 — 2022',
      role: 'Staf Operasional & Paruh Waktu',
      company: 'Pawon Mbok Debi & Sari Roti (Libur Semester)',
      location: 'Jawa Barat',
      type: 'Pengalaman Kerja',
      highlights: [
        'Menjalani masa jeda sebelum kuliah dengan mondok sekaligus bekerja di Pawon Mbok Debi, berkembang dari bagian kebersihan hingga dipercaya sebagai juru masak.',
        'Memanfaatkan waktu libur semester untuk bekerja di Sari Roti, melatih kedisiplinan jadwal dan kerja tim di lingkungan operasional nyata.',
      ],
      stack: ['Disiplin Waktu', 'Kerja Tim', 'Ketahanan Tekanan', 'Tanggung Jawab'],
    },
  ],
education: [
    {
      id: 'edu-1',
      period: '2022 - 2026',
      degree: 'S1 Informatika (Sarjana Komputer)',
      institution: 'Sekolah Tinggi Teknologi Cipasung',
      location: 'Tasikmalaya, Jawa Barat',
      gpaOrNote: 'IPK 3,64 / 4.00 · Cum Laude',
      highlights: [
        'Tugas Akhir: Rancang Bangun Sistem Informasi Manajemen Inventaris dengan Fitur Predictive Maintenance Menggunakan Metode Incremental Development dan Algoritma Simple Moving Average.',
        'Juara 1 Research Poster Competition 2026 (LPPM STT Cipasung) serta Ketua HMIF 2025/2026.',
      ],
    },
    {
      id: 'edu-2',
      period: '2017 - 2020',
      degree: 'Pendidikan Menengah Atas (Jurusan IPA)',
      institution: 'MAN 1 Kota Tasikmalaya',
      location: 'Kota Tasikmalaya',
      gpaOrNote: 'Lulus 2020',
      highlights: [
        'Melanjutkan pendidikan non-formal (mondok) sekaligus bekerja di Pawon Mbok Deb pada 2020-2021 sebelum menempuh studi S1 Informatika.',
      ],
    },
  ],
};
