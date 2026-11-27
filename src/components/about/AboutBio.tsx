import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Pause, Play, Volume2 } from 'lucide-react';
import { aboutData } from '../../data/about';
import { profileData } from '../../data/profile';
import { EditorialDivider } from '../ui/EditorialDivider';
import { SafeImage } from '../ui/SafeImage';

export function AboutBio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/assets/aistudio/docs/audio/tresno-liyane.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleFocusAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Foto Profil & Kartu Audio Fokus */}
        <motion.div
          className="lg:col-span-5 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-black/10 bg-[#eaeae7]">
            <SafeImage
              src="/src/assets/images/wp.jpg"
              alt={`Ruang kerja ${profileData.fullName}`}
              fallbackTitle={profileData.fullName}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Kartu Pemutar Audio Fokus (pengganti widget Spotify yang interaktif tanpa API key) */}
          <div className="rounded-2xl border border-black/10 bg-white p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <button
                type="button"
                onClick={toggleFocusAudio}
                aria-label={isPlaying ? 'Jeda suara fokus' : 'Putar suara fokus'}
                className="w-10 h-10 rounded-xl bg-[#111318] text-white hover:bg-[#1d4ed8] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#111318] truncate">
                  {aboutData.focusTrack.title}
                </p>
                <p className="text-xs text-[#4a505c] truncate">
                  {aboutData.focusTrack.artist} · {aboutData.focusTrack.mood}
                </p>
              </div>
            </div>

            <div className="flex items-end gap-1 h-5 shrink-0" aria-hidden="true">
              {[0.4, 0.9, 0.6, 1].map((heightRatio, idx) => (
                <motion.span
                  key={idx}
                  className={`w-1 rounded-full ${isPlaying ? 'bg-[#1d4ed8]' : 'bg-zinc-300'}`}
                  animate={
                    isPlaying
                      ? {
                          height: ['25%', `${Math.round(heightRatio * 100)}%`, '30%'],
                        }
                      : { height: `${Math.round(heightRatio * 55)}%` }
                  }
                  transition={
                    isPlaying
                      ? {
                          duration: 0.7 + idx * 0.15,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }
                      : { duration: 0.2 }
                  }
                />
              ))}
              <Volume2 className="w-3.5 h-3.5 text-[#717784] ml-1.5" />
            </div>
          </div>
        </motion.div>

        {/* Narasi Bio Lengkap */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold text-[#1d4ed8]">
            Profil &amp; Latar Belakang
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[#111318] mt-2 text-balance">
            {aboutData.headline}
          </h2>

          <EditorialDivider />

          <div className="space-y-4 text-base leading-relaxed text-[#4a505c]">
            {aboutData.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
            <div>
              <p className="text-xs text-[#717784]">Nama Lengkap</p>
              <p className="font-semibold text-[#111318] mt-0.5">{profileData.fullName}</p>
            </div>
            <div>
              <p className="text-xs text-[#717784]">Domisili</p>
              <p className="font-semibold text-[#111318] mt-0.5">{profileData.location}</p>
            </div>
            <div>
              <p className="text-xs text-[#717784]">Surel</p>
              <p className="font-semibold text-[#111318] mt-0.5">{profileData.email}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
