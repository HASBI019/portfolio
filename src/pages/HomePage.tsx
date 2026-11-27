import { useEffect } from 'react';
import { motion } from 'motion/react';
import { HomeSectionId, PageView, ProjectItem } from '../types/portfolio';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { ProjectsPreviewSection } from '../components/home/ProjectsPreviewSection';
import { ContactSection } from '../components/home/ContactSection';

interface HomePageProps {
  onSectionChange: (section: HomeSectionId) => void;
  onNavigatePage: (page: PageView) => void;
  onNavigateSection: (section: HomeSectionId) => void;
  onOpenCv: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function HomePage({
  onSectionChange,
  onNavigatePage,
  onNavigateSection,
  onOpenCv,
  onSelectProject,
}: HomePageProps) {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[data-section]')
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') as HomeSectionId | null;
            if (id) onSectionChange(id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.05,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <HeroSection
        onOpenCv={onOpenCv}
        onScrollToContact={() => onNavigateSection('kontak')}
        onScrollToAbout={() => onNavigateSection('tentang')}
      />
      <AboutPreviewSection onOpenAboutPage={() => onNavigatePage('about')} />
      <ProjectsPreviewSection
        onOpenProjectsPage={() => onNavigatePage('projects')}
        onSelectProject={onSelectProject}
      />
      <ContactSection />
    </motion.main>
  );
}
