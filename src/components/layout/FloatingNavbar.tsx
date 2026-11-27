import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { HomeSectionId, PageView } from '../../types/portfolio';
import { profileData } from '../../data/profile';

interface FloatingNavbarProps {
  currentPage: PageView;
  activeSection: HomeSectionId;
  onNavigateSection: (section: HomeSectionId) => void;
  onNavigatePage: (page: PageView) => void;
  onOpenCv: () => void;
}

const navItems: { id: HomeSectionId; label: string; targetPage?: PageView }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang', targetPage: 'about' },
  { id: 'proyek', label: 'Proyek', targetPage: 'projects' },
  { id: 'kontak', label: 'Kontak' },
];

export function FloatingNavbar({
  currentPage,
  activeSection,
  onNavigateSection,
  onNavigatePage,
  onOpenCv,
}: FloatingNavbarProps) {
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDelta = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      const diff = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      if (currentY <= 70) {
        scrollDelta.current = 0;
        setIsCompact(false);
        return;
      }

      if ((diff > 0 && scrollDelta.current < 0) || (diff < 0 && scrollDelta.current > 0)) {
        scrollDelta.current = 0;
      }
      scrollDelta.current += diff;

      if (scrollDelta.current > 18) {
        setIsCompact(true);
        scrollDelta.current = 0;
      } else if (scrollDelta.current < -18) {
        setIsCompact(false);
        scrollDelta.current = 0;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isItemActive = (itemId: HomeSectionId) => {
    if (currentPage === 'about') return itemId === 'tentang';
    if (currentPage === 'projects' || currentPage === 'archive') return itemId === 'proyek';
    return activeSection === itemId;
  };

  const handleClick = (item: (typeof navItems)[number]) => {
    if (currentPage !== 'home' && item.targetPage && item.targetPage !== currentPage) {
      onNavigatePage(item.targetPage);
      return;
    }
    onNavigateSection(item.id);
  };

  return (
    <>
      {/* Desktop: Navigasi Mengambang (scroll ke bawah -> hanya nama brand, scroll ke atas -> tampil penuh) */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center rounded-2xl bg-white/88 backdrop-blur-md border border-black/10 shadow-[0_10px_30px_-10px_rgba(17,19,24,0.12)] px-5 py-2.5 max-w-[92vw]"
      >
        <button
          type="button"
          onClick={() => (isCompact ? setIsCompact(false) : onNavigateSection('beranda'))}
          title={isCompact ? 'Klik untuk membuka menu navigasi' : 'Kembali ke Beranda'}
          className="font-display text-base md:text-lg font-bold tracking-tight text-[#111318] hover:text-[#1d4ed8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1d4ed8] rounded"
        >
          {profileData.brandName}
        </button>

        <motion.div
          initial={false}
          animate={{
            width: isCompact ? 0 : 'auto',
            opacity: isCompact ? 0 : 1,
            marginLeft: isCompact ? 0 : 32,
          }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden flex items-center"
          style={{ pointerEvents: isCompact ? 'none' : 'auto' }}
        >
          <nav aria-label="Navigasi utama" className="flex items-center gap-7 pr-7">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item)}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1d4ed8] rounded ${
                    active ? 'text-[#111318]' : 'text-[#4a505c] hover:text-[#111318]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="floating-nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1d4ed8] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={onOpenCv}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d4ed8]"
          >
            Unduh CV
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile: Header statis ringan di aliran halaman */}
      <div className="flex md:hidden items-center justify-between px-5 pt-5 pb-2">
        <button
          type="button"
          onClick={() => onNavigateSection('beranda')}
          className="font-display text-lg font-bold tracking-tight text-[#111318] whitespace-nowrap shrink-0"
        >
          {profileData.brandName}
        </button>
        <button
          type="button"
          onClick={onOpenCv}
          className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#111318] text-white whitespace-nowrap shrink-0"
        >
          Unduh CV
        </button>
      </div>
    </>
  );
}