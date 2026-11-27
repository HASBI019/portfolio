import { motion } from 'motion/react';
import { FolderKanban, Home, Mail, User } from 'lucide-react';
import { HomeSectionId, PageView } from '../../types/portfolio';

interface MobileBottomNavProps {
  currentPage: PageView;
  activeSection: HomeSectionId;
  onNavigateSection: (section: HomeSectionId) => void;
  onNavigatePage: (page: PageView) => void;
}

const mobileItems: {
  id: HomeSectionId;
  label: string;
  icon: typeof Home;
  targetPage?: PageView;
}[] = [
  { id: 'beranda', label: 'Beranda', icon: Home },
  { id: 'tentang', label: 'Tentang', icon: User, targetPage: 'about' },
  { id: 'proyek', label: 'Proyek', icon: FolderKanban, targetPage: 'projects' },
  { id: 'kontak', label: 'Kontak', icon: Mail },
];

export function MobileBottomNav({
  currentPage,
  activeSection,
  onNavigateSection,
  onNavigatePage,
}: MobileBottomNavProps) {
  const isItemActive = (itemId: HomeSectionId) => {
    if (currentPage === 'about') return itemId === 'tentang';
    if (currentPage === 'projects' || currentPage === 'archive') return itemId === 'proyek';
    return activeSection === itemId;
  };

  const handlePress = (item: (typeof mobileItems)[number]) => {
    if (currentPage !== 'home' && item.targetPage && item.targetPage !== currentPage) {
      onNavigatePage(item.targetPage);
      return;
    }
    onNavigateSection(item.id);
  };

  return (
    <nav
      aria-label="Navigasi seluler"
      className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-sm h-14 px-2 rounded-2xl bg-[#111318]/95 backdrop-blur-md border border-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.28)] flex items-center justify-around"
    >
      {mobileItems.map((item) => {
        const Icon = item.icon;
        const active = isItemActive(item.id);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handlePress(item)}
            className={`relative flex flex-col items-center justify-center min-w-[64px] h-11 px-2 rounded-xl transition-colors cursor-pointer ${
              active ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {active && (
              <motion.span
                layoutId="mobile-bottom-active"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-xl bg-[#1d4ed8]"
              />
            )}
            <Icon className="relative z-10 w-4 h-4" strokeWidth={2} />
            <span className="relative z-10 text-[10px] font-medium mt-0.5 whitespace-nowrap">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
