import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Printer, X } from 'lucide-react';
import { profileData } from '../../data/profile';
import { aboutData } from '../../data/about';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvPreviewModal({ isOpen, onClose }: CvPreviewModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleCopySummary = async () => {
    const text = `${profileData.fullName}  ${profileData.roleTitle}\nEmail: ${profileData.email}\nLokasi: ${profileData.location}\n\n${profileData.heroIntro}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 backdrop-blur-sm p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau Daftar Riwayat Hidup"
        >
          <motion.div
            className="bg-white text-[#111318] w-full max-w-3xl max-h-[88vh] rounded-2xl shadow-2xl border border-black/10 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bilah atas modal */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-black/10 bg-[#fafaf9]">
              <div>
                <h2 className="font-display text-lg font-bold tracking-tight">
                  Daftar Riwayat Hidup (CV)
                </h2>
                <p className="text-xs text-[#4a505c]">
                  Siap dicetak atau disimpan sebagai PDF dari browser
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg border border-black/15 text-[#111318] hover:bg-[#eaeae7] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1d4ed8]" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Salin Ringkasan
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Cetak / Simpan PDF
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup jendela CV"
                  className="p-2 rounded-lg text-[#4a505c] hover:text-[#111318] hover:bg-[#eaeae7] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Konten CV yang bisa dicetak */}
            <div id="printable-cv" className="overflow-y-auto p-6 md:p-8 space-y-6">
              <div className="border-b border-black/10 pb-5">
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#111318]">
                  {profileData.fullName}
                </h3>
                <p className="text-sm font-semibold text-[#1d4ed8] mt-1">
                  {profileData.roleTitle}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4a505c] mt-2">
                  <span>{profileData.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{profileData.email}</span>
                  {profileData.phone && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{profileData.phone}</span>
                    </>
                  )}
                </div>
              </div>

              <section className="space-y-2">
                <h4 className="font-display text-sm font-bold tracking-tight text-[#111318]">
                  Ringkasan Profesional
                </h4>
                <p className="text-sm leading-relaxed text-[#4a505c]">
                  {profileData.heroIntro}
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="font-display text-sm font-bold tracking-tight text-[#111318]">
                  Pengalaman Kerja
                </h4>
                <div className="space-y-4">
                  {aboutData.experiences.map((exp) => (
                    <div key={exp.id} className="pb-3 border-b border-black/8 last:border-b-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="text-sm font-semibold text-[#111318]">
                          {exp.role}  {exp.company}
                        </p>
                        <span className="font-mono-tabular text-xs text-[#717784]">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-[#4a505c] list-disc list-inside">
                        {exp.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-display text-sm font-bold tracking-tight text-[#111318]">
                    Pendidikan
                  </h4>
                  {aboutData.education.map((edu) => (
                    <div key={edu.id} className="text-xs space-y-0.5">
                      <p className="font-semibold text-[#111318]">{edu.degree}</p>
                      <p className="text-[#4a505c]">
                        {edu.institution} · <span className="font-mono-tabular">{edu.period}</span>
                      </p>
                      <p className="text-[#717784]">{edu.gpaOrNote}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-sm font-bold tracking-tight text-[#111318]">
                    Keahlian Utama
                  </h4>
                  <p className="text-xs leading-relaxed text-[#4a505c]">
                    {aboutData.skills.map((s) => s.name).join(' · ')}
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
