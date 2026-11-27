import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { SafeImage } from '../ui/SafeImage';

interface FeaturedProjectSpotlightProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export function FeaturedProjectSpotlight({
  project,
  onSelectProject,
}: FeaturedProjectSpotlightProps) {
  const imgMain = project.gallery[0] || project.thumbnail;
  const imgTop = project.gallery[1] || project.thumbnail;
  const imgBottom = project.gallery[2] || project.thumbnail;

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-semibold text-[#1d4ed8]">Sorotan Utama</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#111318] mt-1">
          Proyek Unggulan
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Kolase 3 Pratinjau Berlapis Interaktif (khas portofolio Alvalens) */}
        <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] rounded-2xl bg-[#eaeae7] border border-black/10 overflow-hidden p-4">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => onSelectProject(project)}
            className="absolute top-6 left-6 w-[56%] aspect-video rounded-xl overflow-hidden border border-black/15 shadow-lg z-20 cursor-pointer grayscale hover:grayscale-0 hover:scale-105 hover:z-30 transition-all duration-300 bg-white"
          >
            <SafeImage src={imgMain} alt={`${project.title} tampilan utama`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => onSelectProject(project)}
            className="absolute top-12 right-5 w-[44%] aspect-video rounded-xl overflow-hidden border border-black/15 shadow-md z-10 cursor-pointer grayscale hover:grayscale-0 hover:scale-110 hover:z-30 transition-all duration-300 bg-white"
          >
            <SafeImage src={imgTop} alt={`${project.title} tampilan analitik`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={() => onSelectProject(project)}
            className="absolute bottom-6 right-10 w-[52%] aspect-video rounded-xl overflow-hidden border border-black/15 shadow-xl z-20 cursor-pointer grayscale hover:grayscale-0 hover:scale-105 hover:z-30 transition-all duration-300 bg-white"
          >
            <SafeImage src={imgBottom} alt={`${project.title} tampilan seluler`} />
          </motion.div>
        </div>

        {/* Deskripsi Proyek Unggulan */}
        <motion.div
          className="lg:col-span-6 space-y-4"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#717784]">
            <span className="font-mono-tabular text-[#1d4ed8] font-medium">
              {project.year}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#111318]">
            {project.title}
          </h3>

          <p className="text-base leading-relaxed text-[#4a505c]">{project.summary}</p>

          <p className="text-sm font-medium text-[#111318]">
            Dampak: <span className="text-[#1d4ed8]">{project.impactMetric}</span>
          </p>

          <p className="text-xs text-[#717784]">{project.techStack.join(' · ')}</p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Baca Studi Kasus
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-black/15 bg-white text-[#111318] hover:bg-[#eaeae7] transition-colors whitespace-nowrap shrink-0"
            >
              Pratinjau Langsung
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
