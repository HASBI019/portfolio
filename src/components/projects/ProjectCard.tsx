import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { SafeImage } from '../ui/SafeImage';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl bg-white border border-black/10 overflow-hidden hover:border-[#1d4ed8]/45 transition-colors flex flex-col"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="w-full text-left flex flex-col flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1d4ed8]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eaeae7] border-b border-black/8">
          <SafeImage
            src={project.thumbnail}
            alt={project.title}
            fallbackTitle={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
          />
        </div>

        <div className="p-6 flex flex-col flex-1 justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#717784]">
              <span className="font-mono-tabular text-[#1d4ed8] font-medium">
                {project.year}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
            </div>

            <div className="flex items-start justify-between gap-3 mt-1.5">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#111318] group-hover:text-[#1d4ed8] transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-[#717784] group-hover:text-[#1d4ed8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </div>

            <p className="text-sm leading-relaxed text-[#4a505c] mt-2">
              {project.summary}
            </p>
          </div>

          <p className="text-xs font-medium text-[#717784] pt-3 border-t border-black/8">
            {project.techStack.join(' · ')}
          </p>
        </div>
      </button>
    </motion.article>
  );
}
