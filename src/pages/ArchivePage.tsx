import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { EditorialDivider } from '../components/ui/EditorialDivider';
import { ProjectsArchiveTable } from '../components/projects/ProjectsArchiveTable';

interface ArchivePageProps {
  onBackProjects: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function ArchivePage({ onBackProjects, onSelectProject }: ArchivePageProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pt-8 md:pt-28 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
        <div>
          <button
            type="button"
            onClick={onBackProjects}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4a505c] hover:text-[#111318] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Proyek
          </button>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#111318] mt-5">
            Arsip Proyek
          </h1>
          <EditorialDivider />
          <p className="text-base text-[#4a505c] max-w-2xl">
            Indeks ringkas seluruh proyek yang pernah saya kerjakan beserta tahun rilis dan teknologi utamanya.
          </p>
        </div>

        <ProjectsArchiveTable onSelectProject={onSelectProject} />
      </div>
    </motion.main>
  );
}
