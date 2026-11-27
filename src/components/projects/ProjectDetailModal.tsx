import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { SafeImage } from '../ui/SafeImage';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail proyek ${project.title}`}
        >
          <motion.div
            className="bg-white text-[#111318] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-black/10 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-black/10 bg-[#fafaf9]">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-[#717784]">
                  <span className="font-mono-tabular text-[#1d4ed8] font-medium">
                    {project.year}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{project.client}</span>
                </div>
                <h2 className="font-display text-xl font-bold tracking-tight truncate mt-0.5">
                  {project.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="p-2 rounded-lg text-[#4a505c] hover:text-[#111318] hover:bg-[#eaeae7] transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Konten Studi Kasus */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Galeri Interaktif */}
              <div className="space-y-3">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#eaeae7] border border-black/10">
                  <SafeImage
                    src={project.gallery[activeImageIndex] || project.thumbnail}
                    alt={`${project.title} pratinjau ${activeImageIndex + 1}`}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {project.gallery.length > 1 && (
                  <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                    {project.gallery.map((imgUrl, idx) => (
                      <button
                        key={`${imgUrl}-${idx}`}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-24 aspect-video rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-[#1d4ed8] ring-2 ring-[#1d4ed8]/30'
                            : 'border-black/10 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <SafeImage
                          src={imgUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4 border-y border-black/10 text-sm">
                <div>
                  <p className="text-xs text-[#717784]">Peran</p>
                  <p className="font-semibold text-[#111318] mt-0.5">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs text-[#717784]">Dampak Terukur</p>
                  <p className="font-semibold text-[#1d4ed8] mt-0.5">{project.impactMetric}</p>
                </div>
                <div>
                  <p className="text-xs text-[#717784]">Teknologi</p>
                  <p className="font-medium text-[#111318] mt-0.5">
                    {project.techStack.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-[#111318]">
                    Tantangan Utama
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a505c]">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-[#111318]">
                    Solusi &amp; Implementasi
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a505c]">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors whitespace-nowrap"
                >
                  Kunjungi Situs
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl border border-black/15 bg-white text-[#111318] hover:bg-[#eaeae7] transition-colors whitespace-nowrap"
                >
                  Kode Sumber
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
