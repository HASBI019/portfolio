import { ProjectItem } from '../types/portfolio';

/**
 * DATA PROYEK MUHAMMAD HASBI AS'ARI
 * Dihimpun langsung dari repository GitHub publik https://github.com/HASBI019
 * Anda dapat mengganti gambar screenshot masing-masing proyek di folder src/assets/images/.
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    slug: 'iph-system-bps',
    title: 'Sistem Indeks Perkembangan Harga (IPH)',
    subtitle: 'Kerja Praktik BPS Kabupaten Tasikmalaya',
    category: 'Web App',
    year: '2025',
    featured: false,
    role: 'Web Developer (Kerja Praktik)',
    client: 'BPS Kabupaten Tasikmalaya',
    summary:
      'Website sistem informasi yang dikembangkan saat kerja praktik di BPS Kabupaten Tasikmalaya untuk mengelola dan menampilkan visualisasi data Indeks Perkembangan Harga secara terstruktur.',
    challenge:
      'Penyajian data perkembangan harga perlu dirangkum dalam antarmuka web yang mudah dibaca dan cepat diakses agar pemantauan tren harga lebih praktis.',
    solution:
      'Membangun aplikasi web berbasis Laravel dan PHP 8.2 yang terintegrasi dengan grafik Chart.js untuk visualisasi data indeks harga secara ringkas.',
    impactMetric: 'Mempermudah pemantauan tren indeks harga daerah',
    thumbnail: '/src/assets/images/kp1.jpg',
    gallery: [
      '/src/assets/images/kp1.jpg',
      '/src/assets/images/kp2.jpg',
      '/src/assets/images/kp3.jpg',
    ],
    techStack: ['Laravel', 'PHP 8.2', 'Blade', 'Chart.js', 'MySQL'],
    liveUrl: 'https://github.com/HASBI019/sistem-inventaris-sarpras',
    repoUrl: 'https://github.com/HASBI019/sistem-inventaris-sarpras',
  },
  {
    id: 'proj-2',
    slug: 'sistem-inventaris-sarpras',
    title: 'Sistem Inventaris & Predictive Maintenance (TA)',
    subtitle: 'Tugas Akhir STT Cipasung',
    category: 'Web App',
    year: '2026',
    featured: true,
    role: 'Full Stack Developer & Perancang Sistem',
    client: 'Tugas Akhir STT Cipasung',
    summary:
      'Sistem informasi manajemen inventaris sarana dan prasarana di Sekolah Tinggi Teknologi Cipasung dengan fitur predictive maintenance menggunakan metode Incremental Development dan algoritma Simple Moving Average.',
    challenge:
      'Pengelolaan aset dan sarana prasarana kampus membutuhkan pencatatan status aset yang akurat serta prediksi jadwal perawatan sebelum perangkat mengalami kerusakan.',
    solution:
      'Membangun aplikasi web berbasis Laravel (Blade, PHP, MySQL) lengkap dengan keamanan throttle login, pengelolaan status aset, serta algoritma Simple Moving Average untuk memprediksi perawatan.',
    impactMetric: 'Membantu penjadwalan perawatan aset secara prediktif',
    thumbnail: '/src/assets/images/ta1.jpg',
    gallery: [
      '/src/assets/images/ta1.jpg',
      '/src/assets/images/ta2.jpg',
      '/src/assets/images/ta3.jpg',
    ],
    techStack: ['Laravel', 'PHP', 'Blade', 'MySQL', 'Simple Moving Average'],
    liveUrl: 'https://ppt-ta-hasbi.vercel.app',
    repoUrl: 'https://github.com/HASBI019/ppt-ta-hasbi',
  },
  {
    id: 'proj-3',
    slug: 'roblox-music-tool',
    title: 'Roblox Audio Lab (Music Tool)',
    subtitle: 'Pengolah Audio & Export MP3/OGG/WAV di Browser',
    category: 'Web App',
    year: '2026',
    featured: false,
    role: 'Web Audio Developer',
    client: 'ITS OKE COMMUNITY',
    summary:
      'Aplikasi web pengolah audio langsung di browser untuk menyiapkan file musik Roblox dengan kontrol pitch dan tempo terpisah, equalizer Bass/Treble/Reverb, preset efek, serta pratinjau waveform sebelum diekspor.',
    challenge:
      'Proses penyesuaian tempo, pitch, dan kompresi file audio untuk kebutuhan unggah di Roblox biasanya memerlukan aplikasi desktop berat.',
    solution:
      'Membangun mesin audio sisi klien berbasis Web Audio API dan lamejs sehingga pengguna dapat mengatur speed, semitones, EQ, hingga merender output MP3, OGG, atau WAV langsung dari browser.',
    impactMetric: 'Render audio MP3/WAV/OGG langsung di browser dan live di Vercel',
    thumbnail: '/src/assets/images/audio1.jpg',
    gallery: [
      '/src/assets/images/audio1.jpg',
      '/src/assets/images/audio2.jpg',
      '/src/assets/images/audio3.jpg',
    ],
    techStack: ['HTML5', 'JavaScript', 'Web Audio API', 'lamejs', 'Vercel'],
    liveUrl: 'https://roblox-music-tool.vercel.app',
    repoUrl: 'https://github.com/HASBI019/ROBLOX-MUSIC-TOOL',
  },
  {
    id: 'proj-4',
    slug: 'parkour-tikfinity-3d',
    title: 'Panjat Chaos 3D (Parkour TikFinity)',
    subtitle: 'Game 3D Interaktif untuk Live Streaming TikTok',
    category: 'Web App',
    year: '2026',
    featured: false,
    role: 'Game & Web Developer',
    client: 'Proyek Interaktif Live Streaming',
    summary:
      'Game parkour 3D berbasis browser untuk live streaming TikTok dengan integrasi TikFinity, sehingga gift dan interaksi penonton langsung memicu aksi real-time di dalam permainan.',
    challenge:
      'Menghubungkan event gift penonton live secara langsung ke arena game 3D agar permainan tetap responsif tanpa membuat browser berat saat siaran berlangsung.',
    solution:
      'Membangun dunia 3D dengan Three.js, React, dan TypeScript lewat modul terpisah (ParkourEngine, courseBuilder, character) yang terhubung langsung ke tikfinityClient.',
    impactMetric: 'Interaksi gift penonton langsung memicu aksi di arena 3D',
    thumbnail: '/src/assets/images/parkour1.jpg',
    gallery: ['/src/assets/images/parkour1.jpg', '/src/assets/images/parkour2.jpg', '/src/assets/images/parkour3.jpg'],
    techStack: ['Three.js', 'React', 'TypeScript', 'Tailwind CSS', 'TikFinity'],
    liveUrl: 'https://github.com/HASBI019/parkour-tikfinity-3d',
    repoUrl: 'https://github.com/HASBI019/parkour-tikfinity-3d',
  },
  {
    id: 'proj-5',
    slug: 'prediksi-suhu-skkni',
    title: 'Prediksi Suhu Harian & Chatbot HMIF',
    subtitle: 'Eksperimen Data Science SKKNI & NLP',
    category: 'AI & Data',
    year: '2025',
    featured: false,
    role: 'Data & Machine Learning Learner',
    client: 'Proyek Akademik & HMIF',
    summary:
      'Implementasi proses Data Science berdasarkan standar SKKNI untuk memprediksi suhu harian dari variabel kelembapan, tekanan udara, dan kecepatan angin, serta eksperimen chatbot NLP HMIF.',
    challenge:
      'Mengolah data cuaca historis multi-variabel dan membangun alur pemrosesan bahasa alami sederhana agar hasil prediksi dapat dievaluasi secara sistematis.',
    solution:
      'Menyusun pipeline pembersihan data, pemodelan regresi cuaca, serta prototipe chatbot informasi organisasi himpunan mahasiswa di Python.',
    impactMetric: 'Mengikuti standar kompetensi Data Science SKKNI',
    thumbnail: '/src/assets/images/project_ai_assistant_1795707445052.jpg',
    gallery: ['/src/assets/images/project_ai_assistant_1795707445052.jpg'],
    techStack: ['Python', 'Jupyter Notebook', 'Machine Learning', 'NLP'],
    liveUrl: 'https://github.com/HASBI019/weather-temperature-prediction',
    repoUrl: 'https://github.com/HASBI019/weather-temperature-prediction',
  },
  {
    id: 'proj-6',
    slug: 'jokimap-android-kotlin',
    title: 'JokiMap  Admin Dashboard Android',
    subtitle: 'Aplikasi Manajemen Pesanan Android Native',
    category: 'Mobile & UI',
    year: '2026',
    featured: false,
    role: 'Android Developer',
    client: 'Proyek Mobile App',
    summary:
      'Aplikasi Android Native berbasis Kotlin untuk manajemen pesanan layanan dan pemantauan status order dengan antarmuka modern berdesain gelap.',
    challenge:
      'Mengelola daftar pesanan jasa digital lewat chat manual sering membuat status antrean pesanan sulit dilacak.',
    solution:
      'Merancang aplikasi mobile Kotlin di Android Studio dengan tampilan kartu status pesanan yang ringkas dan mudah diperbarui.',
    impactMetric: 'Antarmuka mobile native responsif dengan Kotlin',
    thumbnail: '/src/assets/images/project_mobile_app_1795707445835.jpg',
    gallery: ['/src/assets/images/project_mobile_app_1795707445835.jpg'],
    techStack: ['Kotlin', 'Android Studio', 'Mobile UI', 'Gradle'],
    liveUrl: 'https://github.com/HASBI019/OrderRobloxApp',
    repoUrl: 'https://github.com/HASBI019/OrderRobloxApp',
  },
];
