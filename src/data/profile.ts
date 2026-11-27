import { ProfileData } from '../types/portfolio';

/**
 * DATA PROFIL MUHAMMAD HASBI AS'ARI
 * Anda dapat menyesuaikan foto, nomor HP, atau link LinkedIn langsung di file ini lewat VSCode.
 */
export const profileData: ProfileData = {
  brandName: "Hasbi As'ari",
  fullName: "Muhammad Hasbi As'ari",
  roleTitle: 'Fresh Graduate Informatika',
  location: 'Tasikmalaya, Jawa Barat',
  availabilityText: 'Terbuka untuk MagangHub & Posisi Entry-Level',
  heroIntro:
    'Lulusan S1 Teknik Informatika Sekolah Tinggi Teknologi Cipasung yang berfokus pada pengembangan web, sistem informasi, dan pengelolaan data terstruktur. Terbiasa membangun aplikasi nyata dari tugas akhir hingga kerja praktik instansi.',
  aboutSummary:
    'Perjalanan akademik, pengalaman organisasi sebagai Ketua HMIF, serta rekam jejak kerja praktik dan kerja lapangan yang membentuk kedisiplinan serta ketelitian saya.',
  projectsSummary:
    'Kumpulan karya yang pernah saya bangun selama kuliah, kerja praktik di BPS Kabupaten Tasikmalaya, hingga aplikasi untuk kebutuhan UMKM.',
  contactHeading: 'Mari Berkolaborasi',
  contactDescription:
    'Sedang mencari kandidat untuk program MagangHub, posisi Junior Web Developer, Staf Sistem Informasi, atau kolaborasi proyek? Silakan kirim pesan atau hubungi saya lewat tautan berikut.',
  email: 'jinfeihasbi17@gmail.com',
  // Nomor WhatsApp/HP dari CV
  phone: '+62 859-6018-5951',
  // Foto pribadi Anda di src/assets/images/
  portraitImage: '/src/assets/images/pp1.jpg',
  workspaceImage: '/src/assets/images/tentang2.jpg',
  projectsBannerImage: '/src/assets/images/project_web_platform_1795707444384.jpg',
  metrics: [
    { value: 'S1 Informatika', label: 'STT Cipasung (2022–2026)' },
    { value: '30+ Repo', label: 'Karya Publik di GitHub' },
    { value: 'Ketua HMIF', label: 'Periode 2025/2026' },
    { value: 'Kerja Praktik', label: 'BPS Kab. Tasikmalaya' },
  ],
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/HASBI019',
      url: 'https://github.com/HASBI019',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'LinkedIn Profil',
      url: 'https://www.linkedin.com/in/muhammad-hasbi-as-ari-ba36ab345',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@muhammadhasbiasari',
      url: 'https://www.instagram.com/muhammadhasbiasari',
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'jinfeihasbi17@gmail.com',
      url: 'mailto:jinfeihasbi17@gmail.com',
    },
  ],
};