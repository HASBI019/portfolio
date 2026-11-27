import { useState } from 'react';
import { motion } from 'motion/react';
import { Archive, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import { PageView, ProjectCategory, ProjectItem } from '../types/portfolio';
import { EditorialDivider } from '../components/ui/EditorialDivider';
import { FeaturedProjectSpotlight } from '../components/projects/FeaturedProjectSpotlight';
import { ProjectCard } from '../components/projects/ProjectCard';

interface ProjectsPageProps {
  onBackHome: () => void;
  onNavigatePage: (page: PageView) => void;
  onSelectProject: (project: ProjectItem) => void;
}

const categories: ProjectCategory[] = ['Semua', 'Web App', 'AI & Data', 'Mobile & UI'];

export function ProjectsPage({
  onBackHome,
  onNavigatePage,
  onSelectProject,
}: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Semua');

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

  const filteredProjects =
    activeCategory === 'Semua'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="pt-8 md:pt-28 pb-16"
    >
      {/* Header Halaman Proyek */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 pb-8 border-b border-black/10">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#4a505c] hover:text-[#111318] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-5">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111318]">
              Karya &amp; Proyek
            </h1>
            <EditorialDivider />
            <p className="text-base md:text-lg text-[#4a505c] max-w-2xl">
              Daftar proyek web, sistem kecerdasan buatan, dan eksperimen antarmuka yang telah saya bangun.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigatePage('archive')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl border border-black/15 bg-white text-[#111318] hover:bg-[#eaeae7] transition-colors self-start md:self-auto whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Archive className="w-4 h-4" />
            Lihat Arsip Tabel
          </button>
        </div>
      </header>

      {/* Sorotan Proyek Utama */}
      <FeaturedProjectSpotlight
        project={featuredProject}
        onSelectProject={onSelectProject}
      />

      {/* Daftar Proyek dengan Filter Kategori */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-10 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
          <div>
            <span className="text-xs font-semibold text-[#1d4ed8]">Katalog Lengkap</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#111318] mt-1">
              Beberapa Karya
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter kategori proyek"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#eaeae7] self-start md:self-auto"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#4a505c] hover:text-[#111318]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-[#111318]"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>
    </motion.main>
  );
}
