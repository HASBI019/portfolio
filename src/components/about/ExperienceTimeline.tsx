import { motion } from 'motion/react';
import { aboutData } from '../../data/about';
import { EditorialDivider } from '../ui/EditorialDivider';

export function ExperienceTimeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-black/10">
      <div>
        <span className="text-xs font-semibold text-[#1d4ed8]">Rekam Jejak</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#111318] mt-1">
          Pengalaman Kerja & Oraganisasi
        </h2>
        <EditorialDivider />
      </div>

      <div className="mt-8 divide-y divide-black/10 border-t border-b border-black/10">
        {aboutData.experiences.map((exp, idx) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-4 space-y-1">
              <p className="font-mono-tabular text-xs font-medium text-[#1d4ed8]">
                {exp.period}
              </p>
              <h3 className="font-display text-xl font-bold tracking-tight text-[#111318]">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-[#4a505c]">
                {exp.company} · {exp.location} · {exp.type}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <ul className="space-y-2 text-sm leading-relaxed text-[#4a505c] list-disc list-inside">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-xs font-medium text-[#717784]">
                Teknologi: {exp.stack.join(' · ')}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
