import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { EditorialDivider } from '../ui/EditorialDivider';
import { SafeImage } from '../ui/SafeImage';

interface AboutPreviewSectionProps {
  onOpenAboutPage: () => void;
}

export function AboutPreviewSection({ onOpenAboutPage }: AboutPreviewSectionProps) {
  return (
    <section
      id="tentang"
      data-section="tentang"
      className="min-h-[85vh] md:min-h-screen flex items-center py-20 md:py-28 border-t border-black/10 bg-white"
    >
      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Kolom Teks Kiri */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-wide text-[#1d4ed8]">
            01. Mengenal Lebih Dekat
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] mt-3 text-balance">
            Tentang Saya
          </h2>

          <EditorialDivider />

          <p className="text-base md:text-lg leading-relaxed text-[#4a505c] max-w-xl">
            {profileData.aboutSummary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-[#4a505c]">
            <span>React &amp; Next.js</span>
            <span aria-hidden="true">·</span>
            <span>TypeScript</span>
            <span aria-hidden="true">·</span>
            <span>Arsitektur API</span>
            <span aria-hidden="true">·</span>
            <span>Integrasi AI</span>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={onOpenAboutPage}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
            >
              Pelajari Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Kolom Gambar Kanan dengan efek interaktif */}
        <motion.div
          className="lg:col-span-6 flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="group relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-black/10 bg-[#eaeae7] shadow-[0_20px_50px_rgba(17,19,24,0.08)]">
            <SafeImage
              src={profileData.workspaceImage}
              alt="Suasana ruang kerja pengembangan perangkat lunak"
              fallbackTitle="Ruang Kerja Studio"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
