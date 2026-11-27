import { useMemo, useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types/portfolio';

interface ProjectsArchiveTableProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsArchiveTable({ onSelectProject }: ProjectsArchiveTableProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projectsData;
    return projectsData.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.year.includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-[#717784] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama proyek, tahun, atau teknologi..."
          aria-label="Cari proyek di arsip"
          className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-white border border-black/12 text-[#111318] placeholder:text-[#717784] focus:outline-none focus:border-[#1d4ed8]"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/10 text-xs font-semibold text-[#717784]">
              <th className="py-3.5 px-5">Tahun</th>
              <th className="py-3.5 px-5">Nama Proyek</th>
              <th className="py-3.5 px-5">Kategori</th>
              <th className="py-3.5 px-5 hidden md:table-cell">Teknologi</th>
              <th className="py-3.5 px-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/8 text-sm">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-10 px-5 text-center text-[#717784]">
                  Tidak ada proyek yang cocok dengan pencarian &ldquo;{query}&rdquo;.
                </td>
              </tr>
            ) : (
              filtered.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-[#f5f5f4]/80 transition-colors"
                >
                  <td className="py-4 px-5 font-mono-tabular text-xs font-medium text-[#1d4ed8]">
                    {project.year}
                  </td>
                  <td className="py-4 px-5 font-semibold text-[#111318]">
                    {project.title}
                  </td>
                  <td className="py-4 px-5 text-[#4a505c] whitespace-nowrap">
                    {project.category}
                  </td>
                  <td className="py-4 px-5 text-xs text-[#4a505c] hidden md:table-cell">
                    {project.techStack.join(' · ')}
                  </td>
                  <td className="py-4 px-5 text-right">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#111318] hover:text-[#1d4ed8] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Detail
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
