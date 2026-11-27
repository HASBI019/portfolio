/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { HomeSectionId, PageView, ProjectItem } from './types/portfolio';
import { FloatingNavbar } from './components/layout/FloatingNavbar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ArchivePage } from './pages/ArchivePage';
import { CvPreviewModal } from './components/ui/CvPreviewModal';
import { ProjectDetailModal } from './components/projects/ProjectDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [activeSection, setActiveSection] = useState<HomeSectionId>('beranda');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const navigateToPage = useCallback((page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToSection = useCallback(
    (section: HomeSectionId) => {
      setActiveSection(section);

      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(section);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 120);
        return;
      }

      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [currentPage]
  );

  const handleDownloadCv = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/assets/aistudio/docs/CV_MuhammadHasbiAsari.pdf';
    link.download = "CV_MuhammadHasbiAsari.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f4] text-[#111318]">
      <ScrollProgress />

      <FloatingNavbar
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigateSection={navigateToSection}
        onNavigatePage={navigateToPage}
        onOpenCv={handleDownloadCv}
      />

      <div className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePage
              key="page-home"
              onSectionChange={setActiveSection}
              onNavigatePage={navigateToPage}
              onNavigateSection={navigateToSection}
              onOpenCv={handleDownloadCv}
              onSelectProject={setSelectedProject}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              key="page-about"
              onBackHome={() => navigateToSection('beranda')}
              onNavigatePage={navigateToPage}
            />
          )}

          {currentPage === 'projects' && (
            <ProjectsPage
              key="page-projects"
              onBackHome={() => navigateToSection('beranda')}
              onNavigatePage={navigateToPage}
              onSelectProject={setSelectedProject}
            />
          )}

          {currentPage === 'archive' && (
            <ArchivePage
              key="page-archive"
              onBackProjects={() => navigateToPage('projects')}
              onSelectProject={setSelectedProject}
            />
          )}
        </AnimatePresence>
      </div>

      <Footer
        onNavigatePage={navigateToPage}
        onNavigateSection={navigateToSection}
      />

      <MobileBottomNav
        currentPage={currentPage}
        activeSection={activeSection}
        onNavigateSection={navigateToSection}
        onNavigatePage={navigateToPage}
      />

      <CvPreviewModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
