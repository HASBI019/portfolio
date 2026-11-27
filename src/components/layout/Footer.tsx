import { ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';
import { HomeSectionId, PageView } from '../../types/portfolio';

interface FooterProps {
  onNavigatePage: (page: PageView) => void;
  onNavigateSection: (section: HomeSectionId) => void;
}

export function Footer({ onNavigatePage, onNavigateSection }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#eaeae7]/60 text-[#111318] pb-24 md:pb-10 pt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <p className="font-display text-base font-bold tracking-tight">
            {profileData.fullName}
          </p>
          <p className="text-xs text-[#4a505c]">
            &copy; <span className="tabular-nums">{year}</span> {profileData.brandName}. Dibuat untuk portofolio pribadi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#4a505c]">
          <button
            type="button"
            onClick={() => onNavigateSection('beranda')}
            className="hover:text-[#111318] transition-colors cursor-pointer"
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('about')}
            className="hover:text-[#111318] transition-colors cursor-pointer"
          >
            Tentang
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('projects')}
            className="hover:text-[#111318] transition-colors cursor-pointer"
          >
            Proyek
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('archive')}
            className="hover:text-[#111318] transition-colors cursor-pointer"
          >
            Arsip
          </button>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-[#111318] hover:text-[#1d4ed8] transition-colors cursor-pointer"
          >
            Ke Atas
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
