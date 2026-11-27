import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageView } from '../types/portfolio';
import { AboutBio } from '../components/about/AboutBio';
import { SkillsSection } from '../components/about/SkillsSection';
import { ExperienceTimeline } from '../components/about/ExperienceTimeline';
import { EducationSection } from '../components/about/EducationSection';
import { QuoteSection } from '../components/about/QuoteSection';
import { EditorialDivider } from '../components/ui/EditorialDivider';

interface AboutPageProps {
  onBackHome: () => void;
  onNavigatePage: (page: PageView) => void;
}

export function AboutPage({ onBackHome, onNavigatePage }: AboutPageProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pt-8 md:pt-28 pb-10"
    >
      {/* Header Halaman Tentang */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 pb-6 border-b border-black/10">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#4a505c] hover:text-[#111318] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] mt-5">
          Tentang Saya
        </h1>
        <EditorialDivider />
        <p className="text-base md:text-lg text-[#4a505c] max-w-2xl">
          Ringkasan lengkap pengalaman rekayasa perangkat lunak, teknologi yang saya kuasai, serta latar belakang pendidikan.
        </p>
      </header>

      <AboutBio />
      <SkillsSection />
      <ExperienceTimeline />
      <EducationSection />
      <QuoteSection />

      {/* CTA ke Proyek */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-8 flex justify-center">
        <button
          type="button"
          onClick={() => onNavigatePage('projects')}
          className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer"
        >
          Jelajahi Semua Proyek
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.main>
  );
}
