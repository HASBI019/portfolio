import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { aboutData } from '../../data/about';
import { EditorialDivider } from '../ui/EditorialDivider';

const CERTIFICATES_DRIVE_URL =
  'https://drive.google.com/drive/folders/1ChmFacfyvNpXp3G796HVCQNmtEhdK4J-?usp=drive_link';

const achievementsAndCerts = [
  {
    year: '2026',
    title: 'Juara 1 Research Poster Competition',
    issuer: 'LPPM Sekolah Tinggi Teknologi Cipasung',
    note: 'Penghargaan Terbaik 1 Kompetisi Poster Riset',
  },
  {
    year: '2026',
    title: 'Essential Skills: Emotional Intelligence',
    issuer: 'Pembekalan Program Magang Nasional (GNIK bersama Kemnaker)',
    note: 'Sertifikat Pembekalan Nasional',
  },
  {
    year: '2025',
    title: 'AI Ignition Training (30 Jam)',
    issuer: 'KUMPUL.ID',
    note: 'Sertifikat Pelatihan Kecerdasan Buatan',
  },
];

export function EducationSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 border-t border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold text-[#1d4ed8]">Akademik &amp; Prestasi</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#111318] mt-1">
            Pendidikan 
          </h2>
          <EditorialDivider />
        </div>

        <a
          href={CERTIFICATES_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] transition-colors self-start md:self-auto whitespace-nowrap shrink-0"
        >
          <Award className="w-4 h-4" />
          Lihat Semua Sertifikat (Google Drive)
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutData.education.map((edu, idx) => (
          <motion.article
            key={edu.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="rounded-2xl bg-white border border-black/10 p-6 md:p-7 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#717784]">
              <span className="font-mono-tabular text-[#1d4ed8] font-medium">
                {edu.period}
              </span>
              <span className="font-semibold text-[#111318]">{edu.gpaOrNote}</span>
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-[#111318]">
              {edu.degree}
            </h3>
            <p className="text-sm font-medium text-[#4a505c]">
              {edu.institution} · {edu.location}
            </p>
            <ul className="pt-2 space-y-1.5 text-sm leading-relaxed text-[#4a505c] list-disc list-inside">
              {edu.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xl font-bold tracking-tight text-[#111318] mb-4">
          Pelatihan, Sertifikat &amp; Penghargaan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievementsAndCerts.map((item, idx) => (
            <motion.a
              key={item.title}
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group rounded-2xl bg-white border border-black/10 p-6 hover:border-[#1d4ed8]/45 transition-colors flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#717784]">
                  <span className="font-mono-tabular text-[#1d4ed8] font-medium">
                    {item.year}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#717784] group-hover:text-[#1d4ed8] transition-colors" />
                </div>
                <h4 className="font-display text-base font-bold tracking-tight text-[#111318] group-hover:text-[#1d4ed8] transition-colors mt-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#4a505c] mt-1.5">{item.issuer}</p>
              </div>
              <p className="text-xs font-medium text-[#717784] pt-3 border-t border-black/8">
                {item.note} · Buka bukti sertifikat
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}