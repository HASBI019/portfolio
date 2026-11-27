import { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal } from 'lucide-react';
import { aboutData } from '../../data/about';
import { SkillCategoryKey } from '../../types/portfolio';
import { EditorialDivider } from '../ui/EditorialDivider';

const categories: SkillCategoryKey[] = ['Semua', 'Frontend', 'Backend', 'Cloud & Alat'];

function LogoTile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <span
      title={title}
      className="w-8 h-8 rounded-lg bg-[#f5f5f4] border border-black/8 flex items-center justify-center shrink-0"
    >
      {children}
    </span>
  );
}

function SkillLogos({ name }: { name: string }) {
  const key = name.toLowerCase();

  if (key.includes('react')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="React">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#0284c7]" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
            <ellipse cx="12" cy="12" rx="9.2" ry="3.6" />
            <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9.2" ry="3.6" transform="rotate(120 12 12)" />
          </svg>
        </LogoTile>
        <LogoTile title="TypeScript">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#2563eb" />
            <text x="12" y="16.5" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">
              TS
            </text>
          </svg>
        </LogoTile>
        <LogoTile title="Three.js">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#111318]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
            <polygon points="4,4 20,9 9,20" />
            <polygon points="8,7.5 15,9.8 10.2,15" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('tailwind') || key.includes('html')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="HTML5">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" fill="#ea580c" />
            <path d="M16.5 7.5H8.5l.3 3h7.4l-.6 5.5-3.6 1-3.6-1-.2-2.2h2.2l.1 1 1.5.4 1.5-.4.2-2.3H7.7l-.5-6.5h9.5l-.2 1.5z" fill="#ffffff" />
          </svg>
        </LogoTile>
        <LogoTile title="CSS3">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" fill="#2563eb" />
            <path d="M16.5 7.5H7.5l.2 2h6.4l-.2 2H8.1l.2 2h5.4l-.3 2.5-1.4.4-1.4-.4-.1-1.2H8.4l.2 2.8L12 18.6l3.4-1 .8-8.1.3-2z" fill="#ffffff" />
          </svg>
        </LogoTile>
        <LogoTile title="Tailwind CSS">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#0ea5e9]" fill="currentColor">
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.83 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.17 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.83 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.17 9.47 12 7 12z" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('kotlin') || key.includes('android')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="Kotlin">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <polygon points="3,3 21,3 12,12 21,21 3,21" fill="#7c3aed" />
            <polygon points="3,3 12,3 3,12" fill="#f97316" />
          </svg>
        </LogoTile>
        <LogoTile title="Android Studio">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#16a34a]" fill="currentColor">
            <path d="M7.5 10.5a4.5 4.5 0 0 1 9 0v6.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6.5z" />
            <path d="M9 6.5 7.5 4M15 6.5 16.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="10.2" cy="9.2" r="0.8" fill="#ffffff" />
            <circle cx="13.8" cy="9.2" r="0.8" fill="#ffffff" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('laravel') || key.includes('php')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="Laravel">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
            <path d="M4 7.5 8 5l4 2.5v5L8 15l-4-2.5v-5z" />
            <path d="M12 12.5 16 10l4 2.5v5L16 20l-4-2.5v-5z" />
            <path d="M8 10v5m8-5v5" />
          </svg>
        </LogoTile>
        <LogoTile title="PHP">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#4f46e5" />
            <text x="12" y="14.5" textAnchor="middle" fill="#ffffff" fontSize="7.2" fontWeight="700" fontFamily="sans-serif">
              PHP
            </text>
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('mysql') || key.includes('supabase') || key.includes('basis data')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="MySQL">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <ellipse cx="12" cy="6.5" rx="7" ry="2.8" fill="none" stroke="#0284c7" strokeWidth="1.7" />
            <path d="M5 6.5v11c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-11" fill="none" stroke="#0284c7" strokeWidth="1.7" />
            <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          </svg>
        </LogoTile>
        <LogoTile title="Supabase">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <path d="M13.2 21c-.5.7-1.7.3-1.7-.6V13h7.3c1 0 1.5 1.2.8 2L13.2 21z" fill="#16a34a" />
            <path d="M10.8 3c.5-.7 1.7-.3 1.7.6V11H5.2c-1 0-1.5-1.2-.8-2L10.8 3z" fill="#22c55e" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('python') || key.includes('machine')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="Python">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <path d="M12 3c-3 0-4 1.3-4 3v2h5v1H7c-2 0-3.5 1.3-3.5 4s1.3 4 3.5 4h2v-2.5c0-1.5 1-2.5 2.5-2.5h4c1.4 0 2.5-1 2.5-2.5V6c0-1.7-1.2-3-3.5-3H12z" fill="#2563eb" />
            <path d="M12 21c3 0 4-1.3 4-3v-2h-5v-1h6c2 0 3.5-1.3 3.5-4s-1.3-4-3.5-4h-2v2.5c0 1.5-1 2.5-2.5 2.5h-4c-1.4 0-2.5 1-2.5 2.5V18c0 1.7 1.2 3 3.5 3H12z" fill="#eab308" />
          </svg>
        </LogoTile>
        <LogoTile title="Jupyter / Data Science">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
            <ellipse cx="12" cy="12" rx="8.5" ry="4" stroke="#ea580c" strokeWidth="1.7" />
            <circle cx="17.5" cy="6.5" r="1.7" fill="#64748b" />
            <circle cx="6.5" cy="17.5" r="1.4" fill="#64748b" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('git') || key.includes('vercel') || key.includes('domainesia')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="Git">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" transform="rotate(45 12 12)" fill="#ea580c" />
            <circle cx="12" cy="9" r="1.5" fill="#ffffff" />
            <circle cx="12" cy="15" r="1.5" fill="#ffffff" />
            <circle cx="15" cy="12" r="1.5" fill="#ffffff" />
            <path d="M12 9v6m0-4 3 1" stroke="#ffffff" strokeWidth="1.4" />
          </svg>
        </LogoTile>
        <LogoTile title="GitHub">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#111318]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
          </svg>
        </LogoTile>
        <LogoTile title="Vercel">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#111318]" fill="currentColor">
            <polygon points="12,4 21,20 3,20" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  if (key.includes('google') || key.includes('sheets') || key.includes('office')) {
    return (
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <LogoTile title="Google Sheets">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <rect x="4" y="3" width="16" height="18" rx="2" fill="#16a34a" />
            <rect x="7" y="8" width="10" height="9" fill="none" stroke="#ffffff" strokeWidth="1.4" />
            <path d="M7 12.5h10M11.5 8v9" stroke="#ffffff" strokeWidth="1.4" />
          </svg>
        </LogoTile>
        <LogoTile title="Google Docs">
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
            <rect x="4" y="3" width="16" height="18" rx="2" fill="#2563eb" />
            <path d="M7.5 9h9M7.5 13h9M7.5 17h6" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </LogoTile>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <LogoTile title="AI Tools">
        <Cpu className="w-4.5 h-4.5 text-[#1d4ed8]" strokeWidth={1.8} />
      </LogoTile>
      <LogoTile title="Engineering Workflow">
        <Terminal className="w-4.5 h-4.5 text-[#111318]" strokeWidth={1.8} />
      </LogoTile>
    </div>
  );
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategoryKey>('Semua');

  const filteredSkills =
    selectedCategory === 'Semua'
      ? aboutData.skills
      : aboutData.skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold text-[#1d4ed8]">Keahlian Teknis</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#111318] mt-1">
            Teknologi &amp; Perangkat Kerja
          </h2>
          <EditorialDivider />
        </div>

        <div
          role="tablist"
          aria-label="Filter kategori keahlian"
          className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#eaeae7] self-start md:self-auto"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive ? 'text-white' : 'text-[#4a505c] hover:text-[#111318]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-filter-active"
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

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill, idx) => (
          <motion.article
            key={skill.name}
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="rounded-2xl bg-white border border-black/10 p-6 hover:border-[#1d4ed8]/40 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <SkillLogos name={skill.name} />
              <div className="flex items-center gap-2 text-xs text-[#717784]">
                <span>{skill.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular text-[#1d4ed8] font-medium">
                  {skill.experience}
                </span>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold tracking-tight text-[#111318] mt-4">
              {skill.name}
            </h3>
            <p className="text-sm leading-relaxed text-[#4a505c] mt-2">{skill.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}