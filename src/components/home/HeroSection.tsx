import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SafeImage } from '../ui/SafeImage';

interface HeroSectionProps {
  onOpenCv: () => void;
  onScrollToContact: () => void;
  onScrollToAbout: () => void;
}

export function HeroSection({
  onOpenCv,
  onScrollToContact,
  onScrollToAbout,
}: HeroSectionProps) {
  return (
    <section
      id="beranda"
      data-section="beranda"
      className="relative min-h-[calc(100vh-2rem)] md:min-h-screen flex flex-col justify-center pt-6 md:pt-28 pb-12 editorial-grid-bg"
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10">
        {/* Split Hero Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Kolom Kiri: Hirarki Tipografi */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs md:text-sm font-medium text-[#4a505c] mb-4">
              <span>{profileData.fullName}</span>
              <span aria-hidden="true">·</span>
              <span>{profileData.location}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#1d4ed8]">{profileData.availabilityText}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] text-[#111318] text-balance">
              {profileData.roleTitle}
            </h1>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#4a505c] max-w-2xl mx-auto lg:mx-0">
              {profileData.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
              >
                <FileText className="w-4 h-4" />
                Unduh CV
              </button>
              <button
                type="button"
                onClick={onScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-black/20 bg-white text-[#111318] hover:border-[#111318] hover:bg-[#eaeae7] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
              >
                Hubungi Saya
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Kolom Kanan: Foto Portrait dengan efek grayscale-to-color */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-full lg:max-w-[380px] lg:min-h-[380px] aspect-square rounded-2xl overflow-hidden border border-black/10 bg-[#eaeae7] shadow-[0_20px_50px_rgba(17,19,24,0.08)]">
              <SafeImage
                src={profileData.portraitImage}
                alt={`Foto profil ${profileData.fullName}`}
                fallbackTitle={profileData.fullName}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
              />
            </div>
          </motion.div>
        </div>

        {/* Baris Metrik Penuh di Bawah Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 pt-8 border-t border-black/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {profileData.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#111318] tabular-nums">
                {metric.value}
              </p>
              <p className="text-xs md:text-sm text-[#4a505c]">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Indikator Gulir Bawah */}
        <div className="hidden md:flex justify-center mt-10">
          <button
            type="button"
            onClick={onScrollToAbout}
            aria-label="Gulir ke bagian Tentang"
            className="inline-flex flex-col items-center gap-2 text-xs font-medium text-[#717784] hover:text-[#111318] transition-colors cursor-pointer"
          >
            <span>Gulir</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </button>
        </div>
      </div>
    </section>
  );
}
