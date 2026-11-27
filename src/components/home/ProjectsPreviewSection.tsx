import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types/portfolio';
import { EditorialDivider } from '../ui/EditorialDivider';
import { SafeImage } from '../ui/SafeImage';

interface ProjectsPreviewSectionProps {
  onOpenProjectsPage: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

const marqueeWords = [
  'Karya Terpilih',
  'Aplikasi Web',
  'Kecerdasan Buatan',
  'Sistem Desain',
  'Performa Tinggi',
  'Karya Terpilih',
  'Aplikasi Web',
  'Kecerdasan Buatan',
  'Sistem Desain',
  'Performa Tinggi',
];

export function ProjectsPreviewSection({
  onOpenProjectsPage,
  onSelectProject,
}: ProjectsPreviewSectionProps) {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <section
      id="proyek"
      data-section="proyek"
      className="min-h-[85vh] md:min-h-screen flex flex-col justify-center border-t border-black/10 bg-[#f5f5f4]"
    >
      {/* Pita Marquee Pemisah Seksi */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-white py-3.5">
        <div className="animate-marquee items-center gap-6 text-xs font-medium text-[#4a505c]">
          {marqueeWords.map((word, idx) => (
            <span key={`${word}-${idx}`} className="inline-flex items-center gap-6 whitespace-nowrap">
              <span>{word}</span>
              <span aria-hidden="true" className="text-[#1d4ed8]">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        {/* Kolom Visual Proyek Kiri */}
        <motion.div
          className="lg:col-span-6 order-2 lg:order-1 flex items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={() => onSelectProject(featuredProject)}
            className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_20px_50px_rgba(17,19,24,0.08)] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
          >
            <SafeImage
              src={featuredProject.thumbnail}
              alt={featuredProject.title}
              fallbackTitle={featuredProject.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="font-mono-tabular">{featuredProject.year}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredProject.category}</span>
              </div>
              <div className="flex items-center justify-between gap-4 mt-1">
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {featuredProject.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90 group-hover:translate-x-0.5 transition-transform">
                  Lihat Detail
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </button>
        </motion.div>

        {/* Kolom Teks Kanan */}
        <motion.div
          className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-wide text-[#1d4ed8]">
            02. Karya &amp; Studi Kasus
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318] mt-3 text-balance">
            Proyek Pilihan
          </h2>

          <EditorialDivider />

          <p className="text-base md:text-lg leading-relaxed text-[#4a505c]">
            {featuredProject.summary}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#4a505c]">
            {featuredProject.techStack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-2">
                <span>{tech}</span>
                {idx < featuredProject.techStack.length - 1 && (
                  <span aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenProjectsPage}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
            >
              Lihat Semua Proyek
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(featuredProject)}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-black/20 bg-white text-[#111318] hover:border-[#111318] hover:bg-[#eaeae7] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Buka Studi Kasus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
